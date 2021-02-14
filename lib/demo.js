(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory();
	else
		root["lib"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "html", function() { return /* binding */ src_html; });
__webpack_require__.d(__webpack_exports__, "makeStore", function() { return /* binding */ makeStore; });
__webpack_require__.d(__webpack_exports__, "pipeMiddleware", function() { return /* binding */ pipeMiddleware; });
__webpack_require__.d(__webpack_exports__, "navigate", function() { return /* binding */ src_navigate; });

// CONCATENATED MODULE: ./src/modules/html.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PARENT = Symbol["for"]('parent-elem'),
    TARGET = Symbol["for"]('target-elem');
var TRANS_STYLES = {
  hidden: function hidden() {
    return {
      opacity: 0
    };
  },
  flyStyle: function flyStyle() {
    return {};
  },
  fadeStyle: function fadeStyle() {
    return {
      opacity: 0
    };
  },
  clearStyle: function clearStyle() {
    return {
      opacity: '',
      transform: ''
    };
  },
  centerStyle: function centerStyle() {
    return {};
  },
  leftStyle: function leftStyle(amt) {
    return {
      transform: "translateX(-".concat(amt, "px)")
    };
  },
  rightStyle: function rightStyle(amt) {
    return {
      transform: "translateX(".concat(amt, "px)")
    };
  },
  bottomStyle: function bottomStyle(amt) {
    return {
      transform: "translateY(".concat(amt, "px)")
    };
  },
  topStyle: function topStyle(amt) {
    return {
      transform: "translateY(-".concat(amt, "px)")
    };
  },
  wiggleStyle: function wiggleStyle(amt) {
    return {
      transform: "rotateZ(".concat(amt, "deg)")
    };
  }
};

var $ = function $(sel) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return t.querySelector(sel);
};

var bez = function bez(_ref) {
  var _ref2 = _slicedToArray(_ref, 4),
      a = _ref2[0],
      b = _ref2[1],
      c = _ref2[2],
      d = _ref2[3];

  return "cubic-bezier(".concat(a, ", ").concat(b, ", ").concat(c, ", ").concat(d, ")");
};

var getTransStr = function getTransStr(x, n, curve) {
  return "".concat(x, " ").concat(n, "s ").concat(bez(curve));
};

function Html(p) {
  this[TARGET] = null;
  this[PARENT] = p || document.createDocumentFragment();
}

var html = function html(p) {
  return new Html(p);
};
var NAMES = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"];
var ATTRS = ["accept", "accesskey", "action", "alt", "autocomplete", "autofocus", "autoplay", "checked", "cite", "contenteditable", "controls", "coords", "datetime", "dir", "disabled", "download", "draggable", "for", "form", "formaction", "hidden", "href", "id", "label", "maxlength", "method", "min", "multiple", "muted", "name", "novalidate", "pattern", "placeholder", "poster", "preload", "readonly", "rel", "required", "reversed", "selected", "spellcheck", "src", "step", "tabindex", "title", "type", "value"];
var UPDATES = {},
    ROUTER = {},
    STORE = {};

Html.prototype.e = function (tag) {
  var el = document.createElement(tag);
  this[TARGET] = el;
  this[PARENT].appendChild(el);
  return this;
};

Html.prototype.open = function () {
  return html(this[TARGET]);
};

Html.prototype.close = function () {
  return html(this[PARENT].parentElement);
};

Html.prototype.mount = function (root) {
  var r = document.getElementById(root);
  r.replaceWith(this.root());
}; //top-most elem of this tree


Html.prototype.root = function () {
  var mtop = this[PARENT];

  while (mtop.parentElement) {
    mtop = mtop.parentElement;
  }

  return mtop;
};

Html.prototype.concat = function (tree) {
  this[PARENT].appendChild(tree.root());
  return this;
};

Html.prototype.text = function (str) {
  if (arguments.length === 0) return this[TARGET].textContent;
  this[TARGET].textContent = str;
  return this;
};

Html.prototype.css = function (styles) {
  var self = this[TARGET];
  Object.entries(styles).forEach(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        k = _ref4[0],
        v = _ref4[1];

    if (self.style[k] !== v) self.style[k] = v;
  });
  return this;
};

Html.prototype["class"] = function () {
  var t = this[TARGET];

  for (var i = 0; i < arguments.length; i++) {
    var str = arguments[i];
    t.classList.add(str);
  }

  return this;
};

Html.prototype.removeClass = function () {
  var t = this[TARGET];

  for (var i = 0; i < arguments.length; i++) {
    var str = arguments[i];
    t.classList.remove(str);
  }

  return this;
};

Html.prototype.subscribe = function (k, cb) {
  if (_typeof(k) === 'object') {
    return this._subscribe(k);
  }

  var cur = this[TARGET];

  var listen = function listen(data) {
    return cb(Html.from(cur), data);
  };

  var drop = function drop() {
    return UPDATES[k].splice(UPDATES[k].indexOf(listen), 1);
  };

  UPDATES[k] || (UPDATES[k] = []);
  UPDATES[k].push(listen);
  setDrop(cur, drop);
  return this;
};

Html.prototype._subscribe = function (map) {
  var self = this;
  Object.entries(map).forEach(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        k = _ref6[0],
        v = _ref6[1];

    self.subscribe(k, v);
  });
  return this;
};

Html.prototype.use = function (store) {
  STORE = store;
  return this;
};

Html.prototype.dispatch = function (k, data) {
  var _STORE = STORE,
      dispatch = _STORE.dispatch,
      state = _STORE.state;
  dispatch([k, data]);
  if (UPDATES[k]) UPDATES[k].forEach(function (f) {
    return f(state());
  });
};

Html.prototype.on = function (k, cb) {
  var preventDefault = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var cur = this[TARGET];

  function listener(e) {
    if (preventDefault) e.preventDefault();
    cb(Html.from(cur), e);
  }

  var drop = function drop() {
    return cur.removeEventListener(k, listener);
  };

  setDrop(cur, drop);
  cur.addEventListener(k, listener);
  return this;
};

Html.prototype.router = function (opts) {
  this.concat(html().div().id('olive-router').open().div());
  Object.entries(opts).forEach(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        k = _ref8[0],
        f = _ref8[1];

    ROUTER[k] = f;
  });
  return this;
};

Html.prototype.onIntersect = function (fn) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var self = this[TARGET];

  var cb = function cb(entries) {
    entries.forEach(function (entry) {
      fn(Html.from(entry.target), entry);
    });
  };

  var intersector = new IntersectionObserver(cb, opts);
  intersector.observe(self);
  return this;
};

var transition = function transition() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var direction = config.direction,
      type = config.type,
      time = config.time,
      delay = config.delay,
      curve = config.curve,
      velocity = config.velocity,
      baseTransition = config.baseTransition;
  var b = baseTransition === '' ? '' : baseTransition + ',';

  var style = _objectSpread({
    transition: b + getTransStr('transform', time, curve) + ',' + getTransStr('opacity', time, curve),
    transitionDelay: delay + 's'
  }, TRANS_STYLES[direction + 'Style'](velocity), {}, TRANS_STYLES[type + 'Style']());

  var clear = function clear(html) {
    return html.css(TRANS_STYLES.clearStyle());
  };

  var addStyle = function addStyle(html) {
    return html.css(style);
  };

  return function (html, entry) {
    return entry.isIntersecting ? clear(html) : addStyle(html);
  };
};

Html.prototype.transition = function (config) {
  var _config$direction = config.direction,
      direction = _config$direction === void 0 ? 'center' : _config$direction,
      _config$type = config.type,
      type = _config$type === void 0 ? 'fade' : _config$type,
      _config$time = config.time,
      time = _config$time === void 0 ? 1 : _config$time,
      _config$delay = config.delay,
      delay = _config$delay === void 0 ? 0 : _config$delay,
      _config$curve = config.curve,
      curve = _config$curve === void 0 ? [0, .333, .666, 1] : _config$curve,
      _config$velocity = config.velocity,
      velocity = _config$velocity === void 0 ? 100 : _config$velocity,
      _config$baseTransitio = config.baseTransition,
      baseTransition = _config$baseTransitio === void 0 ? '' : _config$baseTransitio;
  var cb = transition(config);
  var b = baseTransition === '' ? '' : baseTransition + ',';

  var style = _objectSpread({
    transition: b + getTransStr('transform', time, curve) + ',' + getTransStr('opacity', time, curve),
    transitionDelay: delay + 's'
  }, TRANS_STYLES[direction + 'Style'](velocity), {}, TRANS_STYLES[type + 'Style']());

  return this.css(style).onIntersect(cb);
};

Html.prototype.range = function (n, f) {
  for (var i = 0; i < n; i++) {
    f(this, i);
  }

  return this;
};

Html.prototype.each = function (arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(this, arr[i], i);
  }

  return this;
};

Html.prototype.attr = function (k, v) {
  this[TARGET].setAttribute(k, v);
  return this;
};

Html.prototype.removeAttr = function (k) {
  this[TARGET].removeAttribute(k);
};

Html.prototype.replace = function (tree) {
  recursiveDrop(this[TARGET]);
  this[TARGET].replaceWith(tree.root());
  return this;
};

Html.prototype.ifElse = function (pred, ok, el) {
  if (pred(this)) this.concat(ok);else if (el) this.concat(el);
  return this;
};

HTMLCollection.prototype.forEach = function (f) {
  for (var i = 0; i < this.length; i++) {
    f(this[i], i);
  }
};

var recursiveDrop = function recursiveDrop(target) {
  if (target.children) {
    target.children.forEach(recursiveDrop);
  }

  if (target.drop) target.drop();
};

var setDrop = function setDrop(cur, drop) {
  var d2 = cur && cur.drop ? cur.drop : null;
  cur.drop = d2 ? function () {
    drop();
    d2();
  } : drop;
};

Html.prototype.replace = function (tree) {
  recursiveDrop(this[TARGET]);
  this[TARGET].replaceWith(tree.root());
  return this;
};

Html.prototype.mapSelector = function (sel, fn) {
  document.querySelectorAll(sel).forEach(function (x, i) {
    return fn(Html.from(x), i);
  });
  return this;
};

Html.prototype.tap = function (f) {
  var self = this[TARGET];
  f(Html.from(self));
  return this;
};

Html.prototype.timer = function (t, f) {
  var self = this[TARGET];
  var to = setTimeout(function () {
    return f(Html.from(self));
  }, t);
  setDrop(self, function () {
    return clearTimeout(to);
  });
  return this;
};

Html.prototype.insertBefore = function (tree) {
  var self = this[TARGET];
  this[PARENT].insertBefore(tree.root(), self);
  return this;
};

Html.prototype["delete"] = function () {
  var self = this[TARGET];

  if (self) {
    this[TARGET] = self.previousSibling;
    recursiveDrop(self);
    self.remove();
  }

  return this;
}; //for selecting direct targets (when we pass html to reactive portions)


Html.from = function (target) {
  var r = html(target.parentElement);
  r[TARGET] = target;
  return r;
};

NAMES.forEach(function (name) {
  Html.prototype[name] = function () {
    return this.e(name);
  };
});
ATTRS.forEach(function (attr) {
  return Html.prototype[attr] = function (value) {
    return this.attr(attr, value);
  };
});
var html_navigate = function navigate(route) {
  if (window.location === window.location.origin + route) return;
  window.history.pushState({}, route, window.location.origin + route);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  Html.from($('#olive-router').firstElementChild).replace(ROUTER[route].apply(ROUTER, args));
};
// CONCATENATED MODULE: ./src/modules/tinyStore.js
function tinyStore_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tinyStore_typeof = function _typeof(obj) { return typeof obj; }; } else { tinyStore_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tinyStore_typeof(obj); }

var pipe = function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (model, action) {
    var result = action;
    fns.forEach(function (fn) {
      result = fn(model, result);
    });
    return result;
  };
};

var deepCopy = function deepCopy(obj) {
  var result = {};
  Object.keys(obj).forEach(function (k) {
    return result[k] = Array.isArray(obj[k]) ? obj[k].slice() : tinyStore_typeof(obj[k]) === 'object' ? deepCopy(obj[k]) :
    /*else*/
    obj[k];
  });
  return result;
};

var tinyStore = function tinyStore(model, rdfn) {
  var mw = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var store = deepCopy(model);
  var queue = [];
  var dispatching = false;

  var state = function state() {
    return store;
  };

  var dispatch = function dispatch(action) {
    if (dispatching) {
      queue.push(action);
      return;
    }

    dispatching = true;
    var result = action;

    if (mw && typeof mw === 'function') {
      result = mw(store, action);
    }

    store = rdfn(store, result);

    while (queue.length > 0) {
      var a = queue.pop();
      result = mw(store, a);
      store = rdfn(store, result);
    }

    dispatching = false;
  };

  return {
    state: state,
    dispatch: dispatch
  };
};
// CONCATENATED MODULE: ./src/index.js


var src_html = html;
var makeStore = tinyStore;
var pipeMiddleware = pipe;
var src_navigate = html_navigate;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Fira+Code&family=Major+Mono+Display&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\r\n    --bg-color: #111;\r\n    --text-color: white;\r\n    --theme-primary: orangered;\r\n    --theme-secondary: gold;\r\n  }\r\n  \r\n  * {\r\n    color: var(--text-color);\r\n    font-family: \"Major Mono Display\", monospace;\r\n    outline: none;\r\n  }\r\n  \r\n  *:focus {\r\n    box-shadow: 0 -.1em 0 0 currentcolor;\r\n  }\r\n\r\n  p, li, button {\r\n    font-family: \"Fira Code\", monospace;\r\n  }\r\n\r\n  h2 {\r\n    font-family: \"Courier New\", monospace;\r\n  }\r\n  \r\n  nav {\r\n    height: 3em;\r\n    font-size: 1.3em;\r\n    width: 100vw;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    z-index: 10;\r\n  }\r\n  \r\n  nav a {\r\n    transition: color .15s ease-in, box-shadow .15s ease-in;\r\n    text-decoration: none;\r\n    border-left: 1em solid var(--text-color);\r\n    height:100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  nav a:hover, nav a:focus {\r\n    box-shadow: 0 3em 0 0 royalblue inset;\r\n    color: var(--theme-primary);\r\n  }\r\n  \r\n  .container {\r\n    background: linear-gradient(4.5deg, royalblue 40%, var(--bg-color) 40.1%);\r\n    /* background-color: var(--bg-color); */\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n  }  \r\n  \r\n  .caret {\r\n    animation: blink 1s infinite linear;\r\n    background-color: var(--text-color);\r\n    height: 1.7em;\r\n    width: 1.2em;\r\n  }\r\n  \r\n  .step-container {\r\n    height: 10em;\r\n    width: 50%;\r\n  }\r\n  \r\n  .step-text {\r\n    font-size: 1.33em;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    width:100%;\r\n    height: 1em;\r\n  }\r\n  \r\n  @keyframes blink {\r\n    0% {\r\n      opacity: 0%;\r\n    }\r\n    49% {\r\n      opacity: 0%\r\n    }\r\n    50% {\r\n      opacity: 100;\r\n    }\r\n    99% {\r\n      opacity: 100%;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  ", "",{"version":3,"sources":["webpack://./demo/index.css"],"names":[],"mappings":"AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,0BAA0B;IAC1B,uBAAuB;EACzB;;EAEA;IACE,wBAAwB;IACxB,4CAA4C;IAC5C,aAAa;EACf;;EAEA;IACE,oCAAoC;EACtC;;EAEA;IACE,mCAAmC;EACrC;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,OAAO;IACP,MAAM;IACN,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,WAAW;EACb;;EAEA;IACE,uDAAuD;IACvD,qBAAqB;IACrB,wCAAwC;IACxC,WAAW;IACX,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;EACzB;EACA;IACE,qCAAqC;IACrC,2BAA2B;EAC7B;;EAEA;IACE,yEAAyE;IACzE,uCAAuC;IACvC,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,eAAe;IACf,OAAO;IACP,MAAM;EACR;;EAEA;IACE,mCAAmC;IACnC,mCAAmC;IACnC,aAAa;IACb,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,UAAU;EACZ;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,2BAA2B;IAC3B,UAAU;IACV,WAAW;EACb;;EAEA;IACE;MACE,WAAW;IACb;IACA;MACE;IACF;IACA;MACE,YAAY;IACd;IACA;MACE,aAAa;IACf;EACF","sourcesContent":["@import \"https://fonts.googleapis.com/css2?family=Fira+Code&family=Major+Mono+Display&display=swap\";\r\n\r\n:root {\r\n    --bg-color: #111;\r\n    --text-color: white;\r\n    --theme-primary: orangered;\r\n    --theme-secondary: gold;\r\n  }\r\n  \r\n  * {\r\n    color: var(--text-color);\r\n    font-family: \"Major Mono Display\", monospace;\r\n    outline: none;\r\n  }\r\n  \r\n  *:focus {\r\n    box-shadow: 0 -.1em 0 0 currentcolor;\r\n  }\r\n\r\n  p, li, button {\r\n    font-family: \"Fira Code\", monospace;\r\n  }\r\n\r\n  h2 {\r\n    font-family: \"Courier New\", monospace;\r\n  }\r\n  \r\n  nav {\r\n    height: 3em;\r\n    font-size: 1.3em;\r\n    width: 100vw;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    z-index: 10;\r\n  }\r\n  \r\n  nav a {\r\n    transition: color .15s ease-in, box-shadow .15s ease-in;\r\n    text-decoration: none;\r\n    border-left: 1em solid var(--text-color);\r\n    height:100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  nav a:hover, nav a:focus {\r\n    box-shadow: 0 3em 0 0 royalblue inset;\r\n    color: var(--theme-primary);\r\n  }\r\n  \r\n  .container {\r\n    background: linear-gradient(4.5deg, royalblue 40%, var(--bg-color) 40.1%);\r\n    /* background-color: var(--bg-color); */\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n  }  \r\n  \r\n  .caret {\r\n    animation: blink 1s infinite linear;\r\n    background-color: var(--text-color);\r\n    height: 1.7em;\r\n    width: 1.2em;\r\n  }\r\n  \r\n  .step-container {\r\n    height: 10em;\r\n    width: 50%;\r\n  }\r\n  \r\n  .step-text {\r\n    font-size: 1.33em;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    width:100%;\r\n    height: 1em;\r\n  }\r\n  \r\n  @keyframes blink {\r\n    0% {\r\n      opacity: 0%;\r\n    }\r\n    49% {\r\n      opacity: 0%\r\n    }\r\n    50% {\r\n      opacity: 100;\r\n    }\r\n    99% {\r\n      opacity: 100%;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].locals || {});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_profile_sm2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_profile_sm2_jpg__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n  .portrait {\r\n    z-index:1;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    border-radius: 50%;\r\n    border: .25em solid currentColor;\r\n    height: 400px;\r\n    width: 400px;\r\n  }\r\n  ", "",{"version":3,"sources":["webpack://./demo/components/Home/Home.css"],"names":[],"mappings":";EACE;IACE,SAAS;IACT,yDAAqD;IACrD,kBAAkB;IAClB,gCAAgC;IAChC,aAAa;IACb,YAAY;EACd","sourcesContent":["\r\n  .portrait {\r\n    z-index:1;\r\n    background-image: url('../../assets/profile_sm2.jpg');\r\n    border-radius: 50%;\r\n    border: .25em solid currentColor;\r\n    height: 400px;\r\n    width: 400px;\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\r\n    --border-std: 4px solid white;\r\n}\r\n\r\n.bio-panel {\r\n    position: relative;\r\n    padding: 2em;\r\n    height: 50vh;\r\n    border-radius: 0 0 0 1em;\r\n    border: var(--border-std);\r\n    border-right: #111;\r\n    border-top: #111;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    overflow: wrap;\r\n    flex-wrap: wrap;\r\n    width: 80vw;\r\n    font-size: 1.3em;\r\n    z-index: 1;\r\n}\r\n\r\n.bio-panel h1, h2 {\r\n    margin-top: .5em;\r\n}\r\n.bio-panel li {\r\n    margin: 1em;\r\n}\r\n.bio-panel * {\r\n    z-index: 1;\r\n}\r\n\r\n.bio-panel-header {}\r\n\r\n.bio-panel-subtitle {}\r\n\r\n.bio-text-container {\r\n    height: 6px;\r\n}\r\n\r\n.bio-button {\r\n    transition: transform .4s ease-in-out, box-shadow .5s ease-in;\r\n    position: absolute;\r\n    height: 3em;\r\n    width: 3em;\r\n    font-size: 2em;\r\n    font-weight: 700;\r\n    border: var(--border-std);\r\n    border-radius: 50%;\r\n    z-index: 3;\r\n    bottom: 25vh;\r\n    left: 10vw;\r\n    background-color: royalblue;\r\n    transform: scale(1.0);\r\n}\r\n\r\n.bio-button:focus , .bio-button:hover {\r\n    box-shadow: 0 0 0 2em #111 inset;\r\n}\r\n\r\n.bio-button:hover {\r\n    color:royalblue\r\n}\r\n\r\n.bio-button:active {\r\n    color: orangered;\r\n}\r\n\r\n.bio-button:disabled {\r\n    color: #999;\r\n}", "",{"version":3,"sources":["webpack://./demo/components/Bio/Bio.css"],"names":[],"mappings":"AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,wBAAwB;IACxB,yBAAyB;IACzB,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,cAAc;IACd,eAAe;IACf,WAAW;IACX,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,WAAW;AACf;AACA;IACI,UAAU;AACd;;AAEA,mBAAmB;;AAEnB,qBAAqB;;AAErB;IACI,WAAW;AACf;;AAEA;IACI,6DAA6D;IAC7D,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,cAAc;IACd,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,UAAU;IACV,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI;AACJ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf","sourcesContent":["@import '../../index.css';\r\n\r\n:root {\r\n    --border-std: 4px solid white;\r\n}\r\n\r\n.bio-panel {\r\n    position: relative;\r\n    padding: 2em;\r\n    height: 50vh;\r\n    border-radius: 0 0 0 1em;\r\n    border: var(--border-std);\r\n    border-right: #111;\r\n    border-top: #111;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    overflow: wrap;\r\n    flex-wrap: wrap;\r\n    width: 80vw;\r\n    font-size: 1.3em;\r\n    z-index: 1;\r\n}\r\n\r\n.bio-panel h1, h2 {\r\n    margin-top: .5em;\r\n}\r\n.bio-panel li {\r\n    margin: 1em;\r\n}\r\n.bio-panel * {\r\n    z-index: 1;\r\n}\r\n\r\n.bio-panel-header {}\r\n\r\n.bio-panel-subtitle {}\r\n\r\n.bio-text-container {\r\n    height: 6px;\r\n}\r\n\r\n.bio-button {\r\n    transition: transform .4s ease-in-out, box-shadow .5s ease-in;\r\n    position: absolute;\r\n    height: 3em;\r\n    width: 3em;\r\n    font-size: 2em;\r\n    font-weight: 700;\r\n    border: var(--border-std);\r\n    border-radius: 50%;\r\n    z-index: 3;\r\n    bottom: 25vh;\r\n    left: 10vw;\r\n    background-color: royalblue;\r\n    transform: scale(1.0);\r\n}\r\n\r\n.bio-button:focus , .bio-button:hover {\r\n    box-shadow: 0 0 0 2em #111 inset;\r\n}\r\n\r\n.bio-button:hover {\r\n    color:royalblue\r\n}\r\n\r\n.bio-button:active {\r\n    color: orangered;\r\n}\r\n\r\n.bio-button:disabled {\r\n    color: #999;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_olivejs_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _assets_hexys_main_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _assets_matchjs_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _assets_c_gen_main_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
// Imports







var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_olivejs_png__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_hexys_main_png__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_matchjs_png__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_c_gen_main_png__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n.project-picture {\r\n    z-index: 0;\r\n    position: absolute;\r\n    left: 10vw;\r\n    top: 15vh;\r\n    width: 60vw;\r\n    height: 40vh;\r\n    border-radius: 1em;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.olivejs {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.hexys {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n.matchjs {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n.c-gen {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}", "",{"version":3,"sources":["webpack://./demo/components/Projects/Projects.css"],"names":[],"mappings":";AACA;IACI,UAAU;IACV,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;IACxB,4BAA4B;AAChC;;AAEA;IACI,yDAAiD;AACrD;;AAEA;IACI,yDAAoD;AACxD;;AAEA;IACI,yDAAiD;AACrD;;AAEA;IACI,yDAAoD;AACxD","sourcesContent":["\r\n.project-picture {\r\n    z-index: 0;\r\n    position: absolute;\r\n    left: 10vw;\r\n    top: 15vh;\r\n    width: 60vw;\r\n    height: 40vh;\r\n    border-radius: 1em;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.olivejs {\r\n    background-image: url('../../assets/olivejs.png');\r\n}\r\n\r\n.hexys {\r\n    background-image: url('../../assets/hexys-main.png');\r\n}\r\n\r\n.matchjs {\r\n    background-image: url('../../assets/matchjs.png');\r\n}\r\n\r\n.c-gen {\r\n    background-image: url('../../assets/c-gen-main.png');\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "b278f2a98ad2606d5b4a99e6ab56aefd.jpg");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "19c69279e628ebd9957557cd1621fac5.png");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "1b410a6e8a15d7390c2db732b1d1b079.png");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "717e82fa9f50e3dae793005fea2cab9e.png");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.p + "65102e8c1a028da2879f28b03f3b9839.png");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/index.js + 2 modules
var src = __webpack_require__(0);

// CONCATENATED MODULE: ./demo/env.js
// Application Data
var HOME = '/home',
    BIO = '/bio',
    PROJECTS = '/projects',
    BLOG = '/blog';
var ROUTES = [HOME, BIO, PROJECTS, BLOG];
var ACTIONS = {
  NEXT_BIO: 'Next Bio',
  NEXT_PROJ: 'Next Proj',
  SELECT_PATH: 'Select Path',
  NAVIGATE: 'Navigate'
};
var projects = [{
  name: 'olivejs',
  url: 'https://github.com/arlenner/olivejs',
  image: './assets/olivejs.png',
  desc: 'An extremely lightweight minimalsts vanilla SPA framework. I used it to build this webpage!'
}, {
  name: 'matchjs',
  url: 'https://github.com/arlenner/matchjs',
  image: './assets/matchjs.png',
  desc: 'A tiny library for adding Sum Types and Pattern Matching to JS.'
}, {
  name: 'hexys',
  url: 'https://hexys.netlify.app',
  image: './assets/hexys-main.png',
  desc: 'A strategy game of attrition, a web remaster of the SEGA classic Hexagonos. Open two browsers and you can play by yourself, thanks to websockets.'
}, {
  name: "c-gen",
  url: 'https://arlenner.github.io/cgen',
  image: './assets/c-gen-main.png',
  desc: 'A color ramp generator for helping artists and designers build palettes.'
}];
var pages = [{
  header: 'My Mission',
  subtitle: 'Uniting Business & Design',
  content: ['Bringing great design and meaningful products together.', 'Carrying a professional and positive attitude into my work.', 'Creating great user experiences.']
}, {
  header: 'My Goal',
  subtitle: 'Why Design Beautiful Content?',
  content: ['Using my talents to unite customers to businesses.', 'Creating elegant web solutions that suit client custom needs.', 'Building my skills and career experiences.']
}, {
  header: 'My Passion',
  subtitle: 'Writing Code, Learning Always',
  content: ['Writing clean, functional code.', 'CANI - Constant And Never-Ending Improvement', 'Dedicating myself to learning.']
}, {
  header: 'My Skills',
  subtitle: 'What Do I Bring to the Table?',
  content: ['Front-End |> Angular | React | vanilla | CSS | HTML | Redux | SEO', 'Back-End  |> Express | Node  | MongoDB | socket.io', 'Languages |> JS 90%  | Rust 80% | C# 80%  | Java 65%  | C 65%', 'Other     |> Unity3D | Blender | Photoshop | Pixel Art']
}];
var links = {
  blog: 'https://rossketeer.medium.com'
};
var env_data = {
  projects: projects,
  pages: pages,
  links: links
};
// CONCATENATED MODULE: ./demo/components/Text.js

var STEP_RATE = 330;

var Text_Char = function Char(ch, size) {
  var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var deleteAfter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var _char = Object(src["html"])().div().text(ch).css({
    fontSize: size + 'em'
  });

  if (deleteAfter) return _char.timer(t, function (hx) {
    return hx["delete"]();
  });
  return _char;
};

var Text_Whitespace = function Whitespace() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var deleteAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var ws = Object(src["html"])().div().css({
    margin: '.4em'
  });
  if (deleteAfter) return ws.timer(t, function (hx) {
    return hx["delete"]();
  });
  return ws;
};

var StepTextCycler = function StepTextCycler(strs) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var cur = 0;

  var nstep = function nstep(n) {
    return Text_StepText({
      str: strs[n % strs.length],
      selector: 'caret',
      time: 9000,
      deleteAfter: true,
      size: size
    }).timer(10000, function (hx) {
      return hx.mapSelector('.step-text', function (stepper) {
        return stepper.replace(nstep(++cur));
      });
    });
  };

  return nstep(0);
};
var Text_StepText = function StepText(_ref) {
  var _ref$selector = _ref.selector,
      selector = _ref$selector === void 0 ? 'caret' : _ref$selector,
      str = _ref.str,
      _ref$time = _ref.time,
      time = _ref$time === void 0 ? 0 : _ref$time,
      _ref$deleteAfter = _ref.deleteAfter,
      deleteAfter = _ref$deleteAfter === void 0 ? false : _ref$deleteAfter,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 1 : _ref$size;
  var chs = str.split('');
  var total = 0;

  var nextR = function nextR() {
    var r = Math.random() * .2;
    total += r;
    return total;
  };

  var getTime = function getTime(i) {
    return time === 0 ? 0 : time + chs.length - i * STEP_RATE;
  };

  return Object(src["html"])().div()["class"]('step-text').open().div()["class"](selector).each(chs, function (hx, ch, i) {
    return hx.timer(nextR() * 1000, function (h1) {
      return h1.mapSelector(".".concat(selector), function (caret) {
        return caret.insertBefore(ch === ' ' ? Text_Whitespace(getTime(i), deleteAfter) : Text_Char(ch, size, getTime(i), deleteAfter));
      });
    });
  });
};
// CONCATENATED MODULE: ./demo/components/Container.js

var Container_Container = function Container() {
  for (var _len = arguments.length, content = new Array(_len), _key = 0; _key < _len; _key++) {
    content[_key] = arguments[_key];
  }

  return Object(src["html"])().main()["class"]('container').open().each(content, function (hx, cmp) {
    return hx.concat(cmp);
  });
};
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(1);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./demo/components/Home/Home.css
var Home_Home = __webpack_require__(7);

// CONCATENATED MODULE: ./demo/components/Home/Home.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(Home_Home["a" /* default */], options);



/* harmony default export */ var components_Home_Home = (Home_Home["a" /* default */].locals || {});
// CONCATENATED MODULE: ./demo/components/Home/Home.js





var Home_Portrait = function Portrait() {
  return Object(src["html"])().div()["class"]('portrait').transition({
    type: 'fade',
    direction: 'center',
    delay: 1,
    curve: [0, .3, .6, 1],
    time: 3
  });
};

var Home_Home_Home = function Home() {
  return Container_Container(Object(src["html"])().div()["class"]('step-container').open().concat(StepTextCycler(["Howdy, Earthlings.", "My name is Ross.", "I'm a Full Stack Developer.", "Take a look around!"], 1.6)), Home_Portrait());
};
// CONCATENATED MODULE: ./demo/components/Nav.js


var Nav_links = env_data.links;

var Nav_linkSelectedStyle = function linkSelectedStyle(path, rt) {
  return path === rt ? {
    boxShadow: "0 -.25em 0em 0em orangered inset"
  } : rt === HOME && path === '/' ? {
    boxShadow: "0 -.25em 0 0 orangered inset"
  } : {
    boxShadow: ''
  };
};

var Nav_Nav = function Nav() {
  return Object(src["html"])().nav().open().each(ROUTES, function (hx, rt, i) {
    return hx.a().subscribe(ACTIONS.SELECT_PATH, function (htmlx, _ref) {
      var path = _ref.path;
      return htmlx.css(Nav_linkSelectedStyle(path, rt));
    }).on('click', function (htmlx) {
      return rt === BLOG ? htmlx : htmlx.dispatch(ACTIONS.SELECT_PATH, rt);
    }).text(rt.slice(1)).href(rt === BLOG ? Nav_links.blog : '#').transition({
      type: 'fade',
      time: 2,
      curve: [0, .3, .6, 1],
      direction: 'center',
      baseTransition: 'box-shadow .3s ease-in' //preserve styles, base transitions get overwritten by internal funcs

    });
  });
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./demo/components/Bio/Bio.css
var Bio_Bio = __webpack_require__(8);

// CONCATENATED MODULE: ./demo/components/Bio/Bio.css

            

var Bio_options = {};

Bio_options.insert = "head";
Bio_options.singleton = false;

var Bio_update = injectStylesIntoStyleTag_default()(Bio_Bio["a" /* default */], Bio_options);



/* harmony default export */ var components_Bio_Bio = (Bio_Bio["a" /* default */].locals || {});
// CONCATENATED MODULE: ./demo/components/Bio/Bio.js





var Bio_pages = env_data.pages;

var Bio_BioPanel = function BioPanel(_ref) {
  var header = _ref.header,
      subtitle = _ref.subtitle,
      content = _ref.content;
  return Object(src["html"])().section()["class"]('bio-panel').subscribe(ACTIONS.NEXT_BIO, function (hx, _ref2) {
    var bio = _ref2.bio;
    return hx.timer(2000, function (hy) {
      return hy.replace(BioPanel(bio));
    });
  }).open().div().concat(Text_StepText({
    str: header,
    time: 5000,
    selector: 'caret',
    size: 1.6
  })).subscribe(ACTIONS.NEXT_BIO, function (hx) {
    return hx.css({
      opacity: 0
    });
  }).div().h2().text(subtitle).subscribe(ACTIONS.NEXT_BIO, function (hx) {
    return hx.css({
      transitionDelay: '0s',
      transform: 'translateX(500px)',
      opacity: 0
    });
  }).transition({
    time: 1,
    delay: 1,
    type: 'fade',
    direction: 'center',
    curve: [0, .1, .4, 1],
    velocity: 500
  }).each(content, function (hx, str, i) {
    return hx.li().text(str).subscribe(ACTIONS.NEXT_BIO, function (hx) {
      return hx.css({
        transitionDelay: "".concat(.33 + .33 * i, "s"),
        transform: 'translateX(500px)',
        opacity: 0
      });
    }).transition({
      time: 1,
      delay: 1.33 + .33 * i,
      type: 'fade',
      direction: 'center',
      curve: [0, .1, .4, 1],
      velocity: 500
    });
  });
};

var Bio_BioButton = function BioButton() {
  return Object(src["html"])().button().disabled().text('=>')["class"]('bio-button').timer(3000, function (hx) {
    return hx.removeAttr('disabled');
  }).on('click', function (hx) {
    return hx.dispatch(ACTIONS.NEXT_BIO);
  }).subscribe(ACTIONS.NEXT_BIO, function (ha) {
    return ha.disabled().timer(5000, function (hb) {
      return hb.removeAttr('disabled');
    });
  });
};

var Bio_Bio_Bio = function Bio(_ref3) {
  var bioIdx = _ref3.bioIdx;
  return Container_Container(Bio_BioPanel(Bio_pages[bioIdx]), Bio_BioButton());
};
// CONCATENATED MODULE: ./demo/store.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var store_projects = env_data.projects,
    store_pages = env_data.pages; // Application Store

var DEFAULT = {
  path: HOME,
  projectIdx: 0,
  project: store_projects[0],
  bioIdx: 0,
  bio: store_pages[0]
};

var rxSelectPath = function rxSelectPath(model, data) {
  return _objectSpread({}, model, {
    path: data
  });
};

var rxNextBio = function rxNextBio(model) {
  return _objectSpread({}, model, {
    bio: store_pages[(model.bioIdx + 1) % store_pages.length],
    bioIdx: (model.bioIdx + 1) % store_pages.length
  });
};

var rxNextProject = function rxNextProject(model) {
  return _objectSpread({}, model, {
    project: store_projects[(model.projectIdx + 1) % store_projects.length],
    projectIdx: (model.projectIdx + 1) % store_projects.length
  });
};

var store_rx = function rx(model, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      k = _ref2[0],
      data = _ref2[1];

  return k === ACTIONS.NEXT_BIO ? rxNextBio(model) : k === ACTIONS.NEXT_PROJ ? rxNextProject(model) : k === ACTIONS.SELECT_PATH ? rxSelectPath(model, data) :
  /*else*/
  model;
}; //Side Effects


var store_fxNavigate = function fxNavigate(model, action) {
  var noop = function noop() {};

  var _action = _slicedToArray(action, 1),
      k = _action[0];

  var path = model.path;
  k === ACTIONS.SELECT_PATH ? store.dispatch([ACTIONS.NAVIGATE]) : k === ACTIONS.NAVIGATE ? Object(src["navigate"])(path, model) : noop();
  return action;
};

var pipeline = Object(src["pipeMiddleware"])(store_fxNavigate);
var store = Object(src["makeStore"])(DEFAULT, store_rx, pipeline);
window.state = store.state;
// EXTERNAL MODULE: ./demo/index.css
var demo = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./demo/components/Projects/Projects.css
var Projects_Projects = __webpack_require__(9);

// CONCATENATED MODULE: ./demo/components/Projects/Projects.css

            

var Projects_options = {};

Projects_options.insert = "head";
Projects_options.singleton = false;

var Projects_update = injectStylesIntoStyleTag_default()(Projects_Projects["a" /* default */], Projects_options);



/* harmony default export */ var components_Projects_Projects = (Projects_Projects["a" /* default */].locals || {});
// CONCATENATED MODULE: ./demo/components/Projects/Projects.js





var Projects_projects = env_data.projects;

var exclude = function exclude(arg) {
  return function (arr) {
    return arr.filter(function (i) {
      return i.name !== arg;
    });
  };
};

var Projects_ProjectPanel = function ProjectPanel(_ref) {
  var name = _ref.name,
      url = _ref.url,
      desc = _ref.desc;
  return Object(src["html"])().section()["class"]('bio-panel').subscribe(ACTIONS.NEXT_PROJ, function (hx, _ref2) {
    var projectIdx = _ref2.projectIdx;
    return hx.timer(2000, function (hy) {
      return hy.replace(ProjectPanel(Projects_projects[projectIdx]));
    });
  }).open().div().concat(Text_StepText({
    str: name,
    time: 5000,
    selector: 'caret',
    size: 1.6
  })).div()["class"]('project-picture')["class"](name).a().href(url).on('click', function () {}, false).p().text(desc);
};

var Projects_ProjectButton = function ProjectButton() {
  return Object(src["html"])().button().disabled().text('=>')["class"]('bio-button').timer(3000, function (hx) {
    return hx.removeAttr('disabled');
  }).on('click', function (hx) {
    return hx.dispatch(ACTIONS.NEXT_PROJ);
  }).subscribe(ACTIONS.NEXT_PROJ, function (ha) {
    return ha.disabled().timer(4000, function (hb) {
      return hb.removeAttr('disabled');
    });
  });
};

var Projects_Projects_Projects = function Projects(_ref3) {
  var projectIdx = _ref3.projectIdx;
  return Container_Container(Projects_ProjectPanel(Projects_projects[projectIdx]), Projects_ProjectButton());
};
// CONCATENATED MODULE: ./demo/index.js
function demo_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 //APPLICATION ================================================

var demo_App = function App() {
  var _html$use$concat$rout;

  return Object(src["html"])().use(store).concat(Nav_Nav()).router((_html$use$concat$rout = {
    '/': Home_Home_Home
  }, demo_defineProperty(_html$use$concat$rout, HOME, Home_Home_Home), demo_defineProperty(_html$use$concat$rout, BIO, Bio_Bio_Bio), demo_defineProperty(_html$use$concat$rout, PROJECTS, Projects_Projects_Projects), _html$use$concat$rout));
};

demo_App().mount('root');
Object(src["html"])().dispatch(ACTIONS.SELECT_PATH, '/');
/*
 * Hot module replacment for development
 */

if (false) {}

/***/ })
/******/ ]);
});