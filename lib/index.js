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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ })
/******/ ]);
});