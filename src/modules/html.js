const PARENT    = Symbol.for('parent-elem'),
      TARGET    = Symbol.for('target-elem')

const TRANS_STYLES = {
  hidden        : ()    => ({ opacity: 0 }),
  flyStyle      : ()    => ({}),
  fadeStyle     : ()    => ({ opacity: 0 }),
  clearStyle    : ()    => ({ opacity: '', transform: '' }),
  centerStyle   : ()    => ({}),
  leftStyle     : amt   => ({ transform: `translateX(-${amt}px)` }),
  rightStyle    : amt   => ({ transform: `translateX(${amt}px)` }),
  bottomStyle   : amt   => ({ transform: `translateY(${amt}px)` }),
  topStyle      : amt   => ({ transform: `translateY(-${amt}px)` }),
  wiggleStyle   : amt   => ({ transform: `rotateZ(${amt}deg)` }),
}

const $ = (sel, t = document) => t.querySelector(sel)

const bez = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`
const getTransStr = (x, n, curve) => `${x} ${n}s ${bez(curve)}`

function Html(p) {
  this[TARGET] = null
  this[PARENT] = p || document.createDocumentFragment()
}

export const html = p => new Html(p)

const NAMES = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]
const ATTRS = ["accept", "accesskey", "action", "alt", "autocomplete", "autofocus", "autoplay", "checked", "cite", "contenteditable", "controls", "coords", "datetime", "dir", "disabled", "download", "draggable", "for", "form", "formaction", "hidden", "href", "id", "label", "maxlength", "method", "min", "multiple", "muted", "name", "novalidate", "pattern", "placeholder", "poster", "preload", "readonly", "rel", "required", "reversed", "selected", "spellcheck", "src", "step", "tabindex", "title", "type", "value"]

let UPDATES = {},
    ROUTER  = {},
    STORE   = {}

Html.prototype.e = function(tag) {
  let el = document.createElement(tag)
  this[TARGET] = el
  this[PARENT].appendChild(el)
  return this
}

Html.prototype.open = function() {
  return html(this[TARGET])
}

Html.prototype.close = function() {
  return html(this[PARENT].parentElement)
}

Html.prototype.mount = function(root) {
  let r = document.getElementById(root)
  r.replaceWith(this.root())
}

//top-most elem of this tree
Html.prototype.root = function() {
  let mtop = this[PARENT]
  while(mtop.parentElement) 
    mtop = mtop.parentElement
  return mtop
}

Html.prototype.concat = function(tree) {
  this[PARENT].appendChild(tree.root())
  return this
}

Html.prototype.text = function(str) {
  if(arguments.length === 0) 
    return this[TARGET].textContent

  this[TARGET].textContent = str
  return this
}

Html.prototype.css = function(styles) {
  const self = this[TARGET]
  Object.entries(styles).forEach(([k, v]) => {
    if(self.style[k] !== v)
      self.style[k] = v
  })
  return this
}

Html.prototype.class = function() {
  let t = this[TARGET]
  for(let i = 0; i < arguments.length; i++) {
    let str = arguments[i]
    t.classList.add(str)
  }
  return this
}

Html.prototype.removeClass = function() {
  let t = this[TARGET]
  for(let i = 0; i < arguments.length; i++) {
    let str = arguments[i]
    t.classList.remove(str)
  }
  return this
}

Html.prototype.subscribe = function(k, cb) {
  if(typeof k === 'object') {
    return this._subscribe(k)
  }
  let cur = this[TARGET]
  const listen = data => cb(Html.from(cur), data)
  const drop = () => 
  UPDATES[k].splice(
    UPDATES[k].indexOf(listen), 1
  )
  UPDATES[k] ||= []
  UPDATES[k].push(listen)
  setDrop(cur, drop)
  return this
}

Html.prototype._subscribe = function(map) {
  let self = this
  Object.entries(map).forEach(([k, v]) => {
    self.subscribe(k, v)
  })
  return this
}

Html.prototype.use = function(store) {
  STORE = store
  return this
}

Html.prototype.dispatch = function(k, data) {
  const { dispatch, state } = STORE
  dispatch([k, data])
  if(UPDATES[k])
    UPDATES[k].forEach(f => f(state()))
}

Html.prototype.on = function(k, cb, preventDefault = true) {
  let cur = this[TARGET]
  function listener(e) {
    if(preventDefault) e.preventDefault()
    cb(Html.from(cur), e)
  }
  const drop = () => 
    cur.removeEventListener(k, listener)

  setDrop(cur, drop)

  cur.addEventListener(k, listener)
  return this
}

Html.prototype.router = function(opts) {
  this.concat(
    html().div().id('olive-router').open().div()
  )

  Object.entries(opts).forEach(([k, f]) => {
    ROUTER[k] = f
  })

  return this
}
Html.prototype.onIntersect = function (fn, opts = {}) {
  const self = this[TARGET]

  let cb = function(entries) {
    entries.forEach(entry => {
      fn(Html.from(entry.target), entry)
    })
  }

  const intersector = new IntersectionObserver(cb, opts)
  intersector.observe(self)
  return this
}

const transition = (config = {}) => {
  const { direction, type, time, delay, curve, velocity, baseTransition } = config
  let b = baseTransition === '' ? '' : baseTransition + ','
  
  let style = { 
    transition: b + getTransStr('transform', time, curve)+','+getTransStr('opacity', time, curve),
    transitionDelay: delay+'s',
    ...TRANS_STYLES[direction+'Style'](velocity), 
    ...TRANS_STYLES[type+'Style'](),
  }
  const clear = html => {
    return html.css(TRANS_STYLES.clearStyle())
  }

  const addStyle = html => {
    return html.css(style)
  }
  
  return (html, entry) => 
    entry.isIntersecting 
      ? (clear(html))
      : (addStyle(html)) 
}

Html.prototype.transition = function(config) {
  const { 
    direction = 'center', 
    type = 'fade',
    time = 1,
    delay = 0,
    curve = [0,.333,.666,1],
    velocity = 100,
    baseTransition = ''
  } = config

  let cb = transition(config)
  
  let b = baseTransition === '' ? '' : baseTransition + ','

  let style = { 
    transition: b + getTransStr('transform', time, curve)+','+getTransStr('opacity', time, curve),
    transitionDelay: delay+'s',
    ...TRANS_STYLES[direction+'Style'](velocity), 
    ...TRANS_STYLES[type+'Style'](),
  
  }

  return this.css(style).onIntersect(cb)
}

Html.prototype.range = function(n, f) {
  for(let i = 0; i < n; i++) {
    f(this, i)
  }
  return this
}

Html.prototype.each = function(arr, fn) {
  for(let i = 0; i < arr.length; i++) {
    fn(this, arr[i], i)
  }
  return this
}

Html.prototype.attr = function(k, v) {
  this[TARGET].setAttribute(k, v)
  return this
}

Html.prototype.removeAttr = function(k) {
  this[TARGET].removeAttribute(k)
}

Html.prototype.replace = function(tree) {
  recursiveDrop(this[TARGET])
  this[TARGET].replaceWith(tree.root())
  return this
}

Html.prototype.ifElse = function(pred, ok, el) {
  if(pred(this)) this.concat(ok)
  else if(el) this.concat(el)
  return this
}

HTMLCollection.prototype.forEach = function(f) {
  for(let i = 0; i < this.length; i++)
    f(this[i], i)
}

const recursiveDrop = target => {
  if(target.children) {
    target.children.forEach(recursiveDrop)
  }
  if(target.drop) target.drop()
}

const setDrop = (cur, drop) => {
  let d2 = cur && cur.drop
    ? cur.drop
    : null
  cur.drop = d2
    ? () => { drop(); d2() }
  : drop
}

Html.prototype.replace = function(tree) {
  recursiveDrop(this[TARGET])
  this[TARGET].replaceWith(tree.root())
  return this
}

Html.prototype.mapSelector = function(sel, fn) {
    document.querySelectorAll(sel).forEach((x, i) => fn(Html.from(x), i))
    return this
  }
  
  Html.prototype.tap = function(f) {
    const self = this[TARGET]
    f(Html.from(self))
    return this
  }
    
  Html.prototype.timer = function(t, f) {
    const self = this[TARGET]
    const to = setTimeout(() => f(Html.from(self)), t)
    setDrop(self, () => clearTimeout(to))
    return this
  }
  
  Html.prototype.insertBefore = function(tree) {
    const self = this[TARGET]
    this[PARENT].insertBefore(tree.root(), self)
    return this
  }
  
  Html.prototype.delete = function() {
    const self = this[TARGET]
    if(self) {
      this[TARGET] = self.previousSibling
      recursiveDrop(self)
      self.remove()
    }
    return this
  }
  
//for selecting direct targets (when we pass html to reactive portions)
Html.from = function(target) {
  let r = html(target.parentElement)
  r[TARGET] = target
  return r
}

NAMES.forEach(name => {
  Html.prototype[name] = function() {
    return this.e(name)
  }
})

ATTRS.forEach(attr => 
  Html.prototype[attr] = function(value) {
    return this.attr(attr, value)
  }
)

export const navigate = (route, ...args) => {
  if(window.location === window.location.origin + route) return
  window.history.pushState(
    {}, 
    route, 
    window.location.origin + route
  )
  Html.from($('#olive-router').firstElementChild).replace(ROUTER[route](...args))
} 