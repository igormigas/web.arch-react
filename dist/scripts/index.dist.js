/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([25,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var box = function box(props) {
  return props.children;
};

exports.default = box;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// This script comes from the article
// 'How to do loading spinners, the React way.'
// (http://www.codetunnel.io/how-to-create-versatile-loading-spinner-management-in-react/)
// by Chev, published 2 dec 2017
//
// I modified and adjusted it to my need.
//

var spinnerService = function () {
	function spinnerService() {
		_classCallCheck(this, spinnerService);

		this.cache = new Set();
	}

	_createClass(spinnerService, [{
		key: "register",
		value: function register(instance) {
			this.cache.add(instance);
		}
	}, {
		key: "unregister",
		value: function unregister(instance) {
			var _this = this;

			this.cache.forEach(function (spinner) {
				if (spinner === instance) {
					_this.cache.delete(spinner);
				}
			});
		}
	}, {
		key: "show",
		value: function show(name) {
			this.cache.forEach(function (spinner) {
				if (spinner.name === name) {
					spinner.show = true;
				}
			});
		}
	}, {
		key: "hide",
		value: function hide(name) {
			this.cache.forEach(function (spinner) {
				if (spinner.name === name) {
					spinner.show = false;
				}
			});
		}
	}, {
		key: "isShowing",
		value: function isShowing(name) {
			this.cache.forEach(function (spinner) {
				if (spinner.name === name) {
					return true;
				}
			});
			return false;
		}
	}]);

	return spinnerService;
}();

exports.default = new spinnerService();

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axiosCache = function () {
	function axiosCache() {
		_classCallCheck(this, axiosCache);

		this.Cache = new Map();
	}

	_createClass(axiosCache, [{
		key: "isCached",
		value: function isCached(name) {
			if (this.Cache.has(name)) {
				return true;
			}
			return false;
		}
	}, {
		key: "get",
		value: function get(name) {
			return this.Cache.get(name);
		}
	}, {
		key: "set",
		value: function set(name, data) {
			this.update(name, data);
		}
	}, {
		key: "setNew",
		value: function setNew(name, data) {
			if (!this.isCached(name)) {
				this.Cache.set(name, data);
			}
		}
	}, {
		key: "update",
		value: function update(name, data) {
			this.Cache.set(name, data);
		}
	}]);

	return axiosCache;
}();

exports.default = new axiosCache();

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _NavigationMobile = __webpack_require__(48);

var _NavigationMobile2 = _interopRequireDefault(_NavigationMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigation = function navigation(props) {
	var classes = props.forMobile ? _NavigationMobile2.default : classesDesktop;
	return _react2.default.createElement(
		'nav',
		{ className: classes.Nav },
		_react2.default.createElement(
			'ul',
			null,
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/projects', onClick: props.closeEvent },
					'Projekty'
				)
			),
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/contact', onClick: props.closeEvent },
					'Kontakt / Oferta'
				)
			)
		)
	);
};

//import classesDesktop from './NavigationDesktop.css'
exports.default = navigation;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = __webpack_require__(67);

var _axios2 = _interopRequireDefault(_axios);

var _axiosCache = __webpack_require__(11);

var _axiosCache2 = _interopRequireDefault(_axiosCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_FROM_LOCAL = false;

var axiosBaseURL = GET_FROM_LOCAL ? 'http://localhost/wordpress/wp-json/wp/v2' : 'http://api1.migasiewicz.pl/wp-json/wp/v2d';
var instance = _axios2.default.create({
	baseURL: axiosBaseURL
});

instance.interceptors.response.use(function (response) {
	var url = response.config.url;
	var suffix = url.replace(axiosBaseURL, '');
	_axiosCache2.default.set(suffix, response.data);
	return response;
}, function (error) {
	return Promise.reject(error);
});

exports.default = instance;

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _posts = __webpack_require__(87);

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import cockpit from './cockpit';

var GET_FROM_LOCAL = true;

var database = function () {
	function database() {
		_classCallCheck(this, database);

		this.Data = _posts2.default;
		this.Data.entries.reverse();
	}

	_createClass(database, [{
		key: 'getAllPosts',
		value: function getAllPosts() {
			return this.Data.entries;
		}
	}, {
		key: 'getAllFields',
		value: function getAllFields() {
			return this.Data.fields;
		}
	}, {
		key: 'getTotalPosts',
		value: function getTotalPosts() {
			return this.Data.total;
		}
	}, {
		key: 'getPost',
		value: function getPost(id) {
			var d = this.Data.entries;
			for (var i = 0, length = d.length; i < length; i++) {
				if (d[i].id == id) return d[i];
			}
		}
	}]);

	return database;
}();

var instance = GET_FROM_LOCAL ? new database() : null;

exports.default = instance;

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(27);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(35);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _ScrollToTop = __webpack_require__(39);

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

__webpack_require__(40);

__webpack_require__(42);

var _Layout = __webpack_require__(46);

var _Layout2 = _interopRequireDefault(_Layout);

var _Home = __webpack_require__(66);

var _Home2 = _interopRequireDefault(_Home);

var _Project = __webpack_require__(99);

var _Project2 = _interopRequireDefault(_Project);

var _Contact = __webpack_require__(106);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Main CSS source


// React Components


var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			console.log('Proces', "http://localhost/cockpit");
			return _react2.default.createElement(
				_reactRouterDom.BrowserRouter,
				null,
				_react2.default.createElement(
					_ScrollToTop2.default,
					null,
					_react2.default.createElement(
						_Layout2.default,
						null,
						_react2.default.createElement(
							_reactRouterDom.Switch,
							null,
							_react2.default.createElement(_reactRouterDom.Route, { path: '/project-:id', component: _Project2.default }),
							_react2.default.createElement(_reactRouterDom.Route, { path: '/projects', exact: true, component: _Home2.default }),
							_react2.default.createElement(_reactRouterDom.Route, { path: '/contact', exact: true, component: _Contact2.default }),
							_react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Home2.default })
						)
					)
				)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollToTop = function (_React$Component) {
  _inherits(ScrollToTop, _React$Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return ScrollToTop;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(ScrollToTop);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _Header = __webpack_require__(47);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(52);

var _Footer2 = _interopRequireDefault(_Footer);

var _Sidedrawer = __webpack_require__(55);

var _Sidedrawer2 = _interopRequireDefault(_Sidedrawer);

var _Spinner = __webpack_require__(61);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Box = __webpack_require__(8);

var _Box2 = _interopRequireDefault(_Box);

var _Layout = __webpack_require__(64);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
	_inherits(Layout, _React$Component);

	function Layout() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Layout);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			showSidebar: false,
			scrolling: false
		}, _this.toggleSidedrawerHandler = function () {
			_this.setState({
				showSidebar: !_this.state.showSidebar
			});
		}, _this.closeSidedrawerHandler = function () {
			_this.setState({
				showSidebar: false
			});
		}, _this.handleScroll = function () {
			console.log('scrolling...');
			var windowY = window.scrollY;
			if (_this.state.scrolling === false && windowY > 100) {
				_this.setState({
					scrolling: true
				});
			}
			if (_this.state.scrolling === true && windowY < 100) {
				_this.setState({
					scrolling: false
				});
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Layout, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			//window.addEventListener('scroll', this.handleScroll);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			//window.removeEventListener('scroll', this.handleScroll);
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'div',
				{ className: 'App ' + _Layout2.default.App },
				_react2.default.createElement(_Spinner2.default, { name: 'mainLoader' }),
				_react2.default.createElement(_Header2.default, {
					showContact: this.props.location.pathname == '/contact' ? false : true,
					toggleEvent: this.toggleSidedrawerHandler,
					togglerActive: this.state.showSidebar }),
				_react2.default.createElement(_Sidedrawer2.default, {
					show: this.state.showSidebar,
					closeEvent: this.closeSidedrawerHandler }),
				this.state.scrolling ? _react2.default.createElement(
					'div',
					{
						className: _Layout2.default.TopButton,
						onClick: function onClick() {
							return window.scrollTo(null, 0);
						} },
					_react2.default.createElement('img', { src: '/assets/images/UI/button_top.png' })
				) : null,
				_react2.default.createElement(
					'main',
					{ className: _Layout2.default.Main },
					this.props.children
				),
				_react2.default.createElement(_Footer2.default, null)
			);
		}
	}]);

	return Layout;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(Layout);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _Navigation = __webpack_require__(16);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Header = __webpack_require__(50);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var header = function header(props) {
	var contact = props.showContact === false ? null : _react2.default.createElement(
		'div',
		{ className: _Header2.default.Contact },
		_react2.default.createElement(
			'p',
			null,
			'architekt@migasiewicz.pl',
			_react2.default.createElement('br', null),
			'+48 609 121 018',
			_react2.default.createElement('br', null),
			'ul. Korczak 16, 62-800 Kalisz'
		)
	);

	return _react2.default.createElement(
		'header',
		{ className: _Header2.default.Header },
		_react2.default.createElement(
			'div',
			{ className: _Header2.default.Logo },
			_react2.default.createElement(
				_reactRouterDom.Link,
				{ to: '/' },
				_react2.default.createElement('img', { src: '/assets/images/logo.png' })
			)
		),
		contact,
		_react2.default.createElement(
			'div',
			{ onClick: props.toggleEvent },
			_react2.default.createElement(
				'div',
				{ className: [_Header2.default.CSSToggler, props.togglerActive ? _Header2.default.Active : null].join(' ') },
				_react2.default.createElement('div', { className: _Header2.default.Line }),
				_react2.default.createElement('div', { className: _Header2.default.Line }),
				_react2.default.createElement('div', { className: _Header2.default.Line })
			)
		)
	);
};

exports.default = header;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Nav":"NavigationMobile_Nav_31tXC"};

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Wrapper":"Header_Wrapper_2l-h3","Header":"Header_Header_eutAZ","Logo":"Header_Logo_NTBEx","Contact":"Header_Contact_2syI8","CSSToggler":"Header_CSSToggler_1OgG2","Line":"Header_Line_11ySS","Toggler":"Header_Toggler_1msUX","Active":"Header_Active_T3Vyu"};

/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(53);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var footer = function footer(props) {
	return _react2.default.createElement(
		'footer',
		{
			onClick: function onClick(e) {
				window.scrollTo(null, 0);
			},
			className: _Footer2.default.Footer },
		'\xA9 migasiewicz.pl 2018'
	);
};

exports.default = footer;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Footer":"Footer_Footer_1PFJM","Flex":"Footer_Flex_1BSUY","Box":"Footer_Box_3AtOk"};

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _Navigation = __webpack_require__(16);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Backdrop = __webpack_require__(56);

var _Backdrop2 = _interopRequireDefault(_Backdrop);

var _Box = __webpack_require__(8);

var _Box2 = _interopRequireDefault(_Box);

var _Sidedrawer = __webpack_require__(59);

var _Sidedrawer2 = _interopRequireDefault(_Sidedrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sidedrawer = function sidedrawer(props) {

	var styles = {
		opacity: props.show ? '1' : '0',
		transform: props.show ? 'translateX(0)' : 'translateX(-100%)'
	};

	return _react2.default.createElement(
		_Box2.default,
		null,
		_react2.default.createElement(_Backdrop2.default, {
			show: props.show,
			clicked: props.closeEvent }),
		_react2.default.createElement(
			'div',
			{ className: _Sidedrawer2.default.Sidedrawer, style: styles },
			_react2.default.createElement(_Navigation2.default, {
				forMobile: true,
				closeEvent: props.closeEvent })
		)
	);
};

exports.default = sidedrawer;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Backdrop = __webpack_require__(57);

var _Backdrop2 = _interopRequireDefault(_Backdrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var backdrop = function backdrop(props) {
	return props.show ? _react2.default.createElement('div', {
		className: _Backdrop2.default.Backdrop,
		onClick: props.clicked }) : null;
};

exports.default = backdrop;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Backdrop":"Backdrop_Backdrop_efy1y"};

/***/ }),
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Sidedrawer":"Sidedrawer_Sidedrawer_3oZeP","Logo":"Sidedrawer_Logo_3mLdN"};

/***/ }),
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _spinnerService = __webpack_require__(9);

var _spinnerService2 = _interopRequireDefault(_spinnerService);

var _Spinner = __webpack_require__(62);

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_React$Component) {
	_inherits(Spinner, _React$Component);

	function Spinner(props) {
		_classCallCheck(this, Spinner);

		var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

		_this.state = {
			showSpinner: false
		};

		if (_this.props.hasOwnProperty('service')) {
			_this.service = _this.props.service;
		} else {
			_this.service = _spinnerService2.default;
		}

		_this.service.register(_this);
		return _this;
	}

	_createClass(Spinner, [{
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.service.unregister(this);
		}
	}, {
		key: 'render',
		value: function render() {
			return this.state.showSpinner ? _react2.default.createElement(
				'div',
				{ className: _Spinner2.default.Spinner },
				_react2.default.createElement(
					'div',
					{ className: _Spinner2.default.preloadJuggle },
					_react2.default.createElement('div', null),
					_react2.default.createElement('div', null),
					_react2.default.createElement('div', null)
				)
			) : null;
		}
	}, {
		key: 'name',
		get: function get() {
			return this.props.name;
		}
	}, {
		key: 'show',
		get: function get() {
			return this.state.showSpinner;
		},
		set: function set(state) {
			this.setState({ showSpinner: state });
		}
	}]);

	return Spinner;
}(_react2.default.Component);

exports.default = Spinner;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Spinner":"Spinner_Spinner_1fiyk","preloadJuggle":"Spinner_preloadJuggle_1AkVZ","juggle":"Spinner_juggle_3uGbi"};

/***/ }),
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"App":"Layout_App_2-g_I","TopButton":"Layout_TopButton_1NhfU"};

/***/ }),
/* 65 */,
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

var _database = __webpack_require__(23);

var _database2 = _interopRequireDefault(_database);

var _Gallery = __webpack_require__(88);

var _Gallery2 = _interopRequireDefault(_Gallery);

var _GalleryItem = __webpack_require__(91);

var _GalleryItem2 = _interopRequireDefault(_GalleryItem);

var _GalleryAddon = __webpack_require__(94);

var _GalleryAddon2 = _interopRequireDefault(_GalleryAddon);

var _spinnerService = __webpack_require__(9);

var _spinnerService2 = _interopRequireDefault(_spinnerService);

var _axiosCache = __webpack_require__(11);

var _axiosCache2 = _interopRequireDefault(_axiosCache);

var _Home = __webpack_require__(97);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.state = {
			dataPosts: _database2.default.getAllPosts(),
			dataFields: _database2.default.getAllFields()

			//spinnerService.show('mainLoader');
		};return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			/*let query = '/posts/?per_page=100';
   	if (!axiosCache.isCached(query)) {
   	axios.get(query)
   		.then( response => {
   			this.setState({
   				dataPosts: response.data
   			});
   			spinnerService.hide('mainLoader');
   		})
   		.catch();
   } else {
   	this.setState({
   		dataPosts: axiosCache.get(query)
   	});
   	spinnerService.hide('mainLoader');
   }*/
		}
	}, {
		key: 'createAddons',
		value: function createAddons() {
			return [_react2.default.createElement(
				_GalleryAddon2.default,
				{ key: '3d9j', bgimg: '/assets/images/UI/workplace.jpg', url: '/projects' },
				'pozosta\u0142e projekty'
			), _react2.default.createElement(
				_GalleryAddon2.default,
				{ key: 'k8h6', bgimg: '/assets/images/UI/map.jpg', url: '/contact' },
				'oferta / kontakt'
			)];
		}
	}, {
		key: 'render',
		value: function render() {
			var galleryItems = void 0,
			    addons = void 0,
			    posts = void 0;

			if (this.state.dataPosts) {
				if (this.props.match.path != '/projects') {
					addons = this.createAddons();
					posts = this.state.dataPosts.slice(0, 8 - addons.length);
				} else {
					posts = this.state.dataPosts;
				}

				galleryItems = posts.map(function (item) {
					var bgimg = item.featuredImage ? item.featuredImage.cover : item.gallery ? item.gallery[0].thumbnail : null;
					return _react2.default.createElement(
						_GalleryItem2.default,
						{
							key: item.id,
							id: item.id,
							slug: item.title_slug,
							bgimg: bgimg },
						item.title
					);
				});
			}

			return _react2.default.createElement(
				_Gallery2.default,
				null,
				galleryItems,
				addons
			);
		}
	}]);

	return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module) {

module.exports = {"fields":{"title":{"name":"title","type":"text","localize":false,"options":{"slug":true}},"public":{"name":"public","type":"boolean","localize":false,"options":[]},"id":{"name":"id","type":"text","localize":false,"options":[]},"date":{"name":"date","type":"date","localize":false,"options":[]},"description":{"name":"description","type":"textarea","localize":false,"options":[]},"featuredImage":{"name":"featuredImage","type":"image","localize":false,"options":{"meta":{"title":{"type":"image","label":"image"}},"styles":["cover"]}},"gallery":{"name":"gallery","type":"gallery","localize":false,"options":{"styles":["thumbnail"]}},"details":{"name":"details","type":"set","localize":false,"options":{"fields":[{"name":"status","label":"Status inwestycji","type":"text"},{"name":"date","label":"Data wyświetlana","type":"text"},{"name":"location","label":"Lokalizacja","type":"text"},{"name":"area","label":"Powierzchnia opracowania","type":"text"},{"name":"collaboration","label":"Współpraca","type":"text"}]}}},"entries":[{"title":"pałac w Górznie","id":1,"public":true,"description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed929eb1816_1.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/2e6641fd5361ba592890bef9a58cb128_520x293_90_1534520722_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed926635627cd80002f2"},"path":"/storage/uploads/2018/08/17/5b76ed929eb1816_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/1f427e89173bd0a125f489a1b314a265_120x120_90_1534520722_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed946635627cd80003df"},"path":"/storage/uploads/2018/08/17/5b76ed94a3b0916_2.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/82939d21b8227c572c4b71015f557900_120x120_90_1534520724_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed966635627cd800036e"},"path":"/storage/uploads/2018/08/17/5b76ed9603ef116_3.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/157cd6d3d152750a4fd848c64b3e9667_120x120_90_1534520726_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed986635627cd80002d6"},"path":"/storage/uploads/2018/08/17/5b76ed98258f616_4.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/88a25801155bb7f4f70e29b5ec582a86_120x120_90_1534520728_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed9d6635627d08000314"},"path":"/storage/uploads/2018/08/17/5b76ed9d5c6fb16_5.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/882111c6f15fed405132d9fa3c30d9ef_120x120_90_1534520733_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"title_slug":"palac-w-gorznie","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534595480,"_created":1534521550,"_id":"5b76f0ce6635620e1000009d","date":null,"cf_status":null,"cf_date":null,"cf_location":"Górzno k. Ostrowa Wielkopolskiego","cf_area":null,"cf_collaboration":"Przemysław Wierzbicki","details":{"status":"zrealizowany","location":"Górzno k. Ostrowa Wielkopolskiego","collaboration":"Przemysław Wierzbicki"},"children":[]},{"title":"zespół 3 budynków przy Wojciechowskiego","public":true,"id":2,"description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed830d3f46_1.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/de2393620f6c3659f648714d9b75367c_520x293_90_1534520707_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed836635627cd80001bb"},"path":"/storage/uploads/2018/08/17/5b76ed830d3f46_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/251424c9b2a1eb1d552049117606473f_120x120_90_1534520707_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"title_slug":"zespol-3-budynkow-przy-wojciechowskiego","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534521778,"_created":1534521778,"_id":"5b76f1b26635620dea000271","children":[]},{"title":"willa na Szałe","public":true,"id":3,"description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed740431e1_3.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/39c0f6033ee66f45a026a91b8ec359b2_520x310_90_1534520692_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed736635627cd8000080"},"path":"/storage/uploads/2018/08/17/5b76ed73165181_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/127d2530a0a5708133d584cedf89ad04_120x120_90_1534520691_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed736635627cd800032f"},"path":"/storage/uploads/2018/08/17/5b76ed7362f0c1_2.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/8387d70066044fa79fe6dd78ce77218f_120x120_90_1534520691_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed746635627cd80001e6"},"path":"/storage/uploads/2018/08/17/5b76ed740431e1_3.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/ff0e1b100db3f1008de6c8f6cebf66bd_120x120_90_1534520692_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed746635627cd80002a2"},"path":"/storage/uploads/2018/08/17/5b76ed749d2781_4.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/ef1067f87ef499bf9347e2586d68cab4_120x120_90_1534520692_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"title_slug":"willa-na-szale","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534521861,"_created":1534521861,"_id":"5b76f2056635620e100002c3","children":[]},{"title":"budynek wielorodzinny przy Podmiejskiej","public":true,"id":4,"date":"2004-08-12","description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed843bdb87_1.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/85b1811f1d50a92d0866f6f0e281ad8b_520x322_90_1534520708_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed846635627cd8000253"},"path":"/storage/uploads/2018/08/17/5b76ed843bdb87_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/c57b02611db353028973511856382fe6_120x120_90_1534520708_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed856635627cd80002a7"},"path":"/storage/uploads/2018/08/17/5b76ed8599aa67_2.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/b5d5aba43ca53ffe1b311b9877090fea_120x120_90_1534520709_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"cf_status":"zrealizowany","cf_date":2004,"cf_area":"","cf_collaboration":"","title_slug":"budynek-wielorodzinny-przy-podmiejskiej","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534595530,"_created":1534522533,"_id":"5b76f4a56635621b7b0002ee","cf_location":"Kalisz, Podmiejska","details":{"status":"zrealizowany","date":2004,"location":"Kalisz, Podmiejska"},"children":[]},{"title":"budynek wielorodzinny na Korczaku","public":true,"id":5,"date":"2005-06-15","description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76edad1b76d18_1.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/d83a3a533b5e9365b25bc9ce8871fac7_520x346_90_1534520749_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76edad6635627d0800005f"},"path":"/storage/uploads/2018/08/17/5b76edad1b76d18_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/e4ef07fc3dd87ab21b7130f8f1bec21c_120x120_90_1534520749_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"cf_status":"zrealizowany","cf_date":2005,"cf_location":"Kalisz, Korczak","cf_area":"","cf_collaboration":"","title_slug":"budynek-wielorodzinny-na-korczaku","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534595547,"_created":1534522706,"_id":"5b76f5526635621b7b0000d7","details":{"location":"Kalisz, Korczak","date":2005,"status":"zrealizowany"},"children":[]},{"title":"zakład produkcyjny Dr Marcus","public":true,"id":6,"date":"2005-08-04","description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed8a409e911_2.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/aaa696004fe42d6a64d193b3b5c83e02_520x293_90_1534520714_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed896635627cd80002e5"},"path":"/storage/uploads/2018/08/17/5b76ed88c8f8d11_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/01a5ea29c5c6e6ed1fa91048050f2bde_120x120_90_1534520713_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed8a6635627cd800036d"},"path":"/storage/uploads/2018/08/17/5b76ed8a409e911_2.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/8c9a3179c111b23f5171d270e12bde7c_120x120_90_1534520714_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"cf_status":"zrealizowany","cf_date":2005,"cf_location":"Kalisz, Wojska Polskiego","cf_area":"","cf_collaboration":"","title_slug":"zaklad-produkcyjny-dr-marcus","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534595568,"_created":1534522805,"_id":"5b76f5b56635621b7e0001d6","details":{"location":"Kalisz, Wojska Polskiego","date":2005,"status":"zrealizowany"},"children":[]},{"title":"stacja diagnostyczno-naprawcza MAN","public":true,"id":7,"date":"2006-05-09","description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed8ae05c112_1.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/87efa3aebabf4923a6fcd5d88988da82_520x293_90_1534520715_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed8b6635627cd80000b5"},"path":"/storage/uploads/2018/08/17/5b76ed8ae05c112_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/f20e39c155d1cbd636a45a9e0d4dd05d_120x120_90_1534520715_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed8c6635627cd80001e6"},"path":"/storage/uploads/2018/08/17/5b76ed8bef2bb12_2.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/781f8f9e048b2a8ce0fc7bdf4f507ce5_120x120_90_1534520716_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed8d6635627cd800009c"},"path":"/storage/uploads/2018/08/17/5b76ed8cca27612_3.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/7573ea2a147704e1aa03f2f91e8d7831_120x120_90_1534520717_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"cf_status":"zrealizowany","cf_date":2006,"cf_location":"Kalisz","cf_area":"2100 m²","cf_collaboration":"","title_slug":"stacja-diagnostyczno-naprawcza-man","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534595602,"_created":1534522890,"_id":"5b76f60a6635621b7b000399","details":{"area":"2100 m²","location":"Kalisz","date":2006,"status":"zrealizowany"},"children":[]},{"title":"budynek wielorodzinny na Dobrzecu","public":true,"id":9,"date":"2008-08-12","description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed87bf39710_1.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/a045a6542735385c73862de00d8cccd1_520x293_90_1534520711_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed876635627cd8000258"},"path":"/storage/uploads/2018/08/17/5b76ed87bf39710_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/a99029eff414487c775fe004cacbac18_120x120_90_1534520711_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"cf_status":"zrealizowany","cf_date":2008,"cf_location":"Kalisz","cf_area":"","cf_collaboration":"","title_slug":"budynek-wielorodzinny-na-dobrzecu","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534595639,"_created":1534523203,"_id":"5b76f74366356271f50002e2","details":{"status":"zrealizowany","date":2008,"location":"Kalisz"},"children":[]},{"title":"trio przy Niemojowskich","public":true,"id":10,"date":"2008-05-13","description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed87831ee8_1.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/aaf395fd2ce408a81d2e9918d5ae7cd8_520x285_90_1534520711_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed876635627cd800001d"},"path":"/storage/uploads/2018/08/17/5b76ed87831ee8_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/e56a70097141d0a26c614bffc3a0d800_120x120_90_1534520711_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"cf_status":"zrealizowany","cf_date":2008,"cf_location":"Kalisz, Braci Niemojowskich","cf_area":"","cf_collaboration":"","title_slug":"trio-przy-niemojowskich","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534595653,"_created":1534523378,"_id":"5b76f7f266356271f9000238","details":{"location":"Kalisz, Braci Niemojowskich","status":"zrealizowany","date":2008},"children":[]},{"title":"dom jednorodzinny 10","public":true,"id":11,"date":"2010-04-10","description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed82a2df44_3.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/cb6dca31097df6aa37a6113673a0d7a9_520x260_90_1534520706_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed7e6635627cd800038f"},"path":"/storage/uploads/2018/08/17/5b76ed7e92b404_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/a56b003711d377ceb540e03e4e4e6753_120x120_90_1534520702_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed806635627cd8000120"},"path":"/storage/uploads/2018/08/17/5b76ed806a4244_2.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/4c4be0fc7298142d8678befbf160f818_120x120_90_1534520704_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed826635627cd80003e2"},"path":"/storage/uploads/2018/08/17/5b76ed82a2df44_3.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/f25c489163388a5648c48b3f9ebe73bd_120x120_90_1534520706_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"cf_status":"zrealizowany","cf_date":"","cf_location":"","cf_area":"","cf_collaboration":"","title_slug":"dom-jednorodzinny-10","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534598470,"_created":1534586530,"_id":"5b77eea26635627e38000027","details":{"status":"zrealizowany","location":"Kalisz"},"children":[]},{"title":"dom wielorodzinny na Wrocławskiej","public":true,"id":12,"date":"2017-06-01","description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76edae18a9619_1.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/0883adde7924724ca4624d0b6d296a65_520x299_90_1534520750_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76edae6635627d08000052"},"path":"/storage/uploads/2018/08/17/5b76edae18a9619_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/fbc99e15b4fd3c83f9d49ecd0625fa29_120x120_90_1534520750_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76edae6635627d0800032a"},"path":"/storage/uploads/2018/08/17/5b76edae4f5e319_2.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/441224a10122ca25bf1cf921fd97826f_120x120_90_1534520750_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"cf_status":"","cf_date":"","cf_location":"Kalisz, Wrocławska","cf_area":"","cf_collaboration":"","title_slug":"dom-wielorodzinny-na-wroclawskiej","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534595694,"_created":1534586591,"_id":"5b77eedf6635627e3800023e","details":{"location":"Kalisz, Wrocławska"},"children":[]},{"title":"ośrodek rehabilitacji dziecięcej","public":true,"id":13,"date":"2012-08-01","description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed8da5e6c13_1.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/4cfa2cd5a8a5cf9eec94ca00531315ac_520x204_90_1534520717_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed8d6635627cd80002c0"},"path":"/storage/uploads/2018/08/17/5b76ed8da5e6c13_1.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/b249f4a0b6bfe4d87eb31527084f3f65_120x120_90_1534520717_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed8e6635627cd8000375"},"path":"/storage/uploads/2018/08/17/5b76ed8ebd32a13_2.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/48bd6d69d08cdc5464cf0bc85568840d_120x120_90_1534520718_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed906635627cd800003b"},"path":"/storage/uploads/2018/08/17/5b76ed903c87c13_3.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/39357a809379e700f1169d1a44395102_120x120_90_1534520720_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"cf_status":"zrealizowany","cf_date":2012,"cf_location":"Wolica k. Kalisza","cf_area":"1400 m²","cf_collaboration":"","title_slug":"osrodek-rehabilitacji-dzieciecej","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534595708,"_created":1534586748,"_id":"5b77ef7c6635627f5e000336","details":{"location":"Wolica k. Kalisza","area":"1400 m²","status":"zrealizowany","date":2012},"children":[]},{"title":"zespół zabudowy mieszkaniowej w Mącznikach","public":true,"id":15,"date":"2017-11-10","description":"","featuredImage":{"path":"/storage/uploads/2018/08/17/5b76ed7c8ebbf2A.jpg","cover":"http://api2.migasiewicz.pl/storage/thumbs/f03c7ff7bbbd2342ccad8a05582d4615_520x293_90_1534520700_fitToWidth_adb115059e28d960fa8badfac5516667.jpg"},"gallery":[{"meta":{"title":"","asset":"5b76ed7c6635627cd80002fe"},"path":"/storage/uploads/2018/08/17/5b76ed7c8ebbf2A.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/407deec1ef31c32d2293ce94efea4264_120x120_90_1534520700_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"},{"meta":{"title":"","asset":"5b76ed796635627cd80000d8"},"path":"/storage/uploads/2018/08/17/5b76ed79b1a091A.jpg","thumbnail":"http://api2.migasiewicz.pl/storage/thumbs/e0db2959acd4ce5cad780fe963105fdf_120x120_90_1534520697_bestFit_811882fecd5c7618d7099ebbd39ea254.jpg"}],"cf_status":"projekt koncepcyjny","cf_date":"","cf_location":"Mączniki k. Kalisza","cf_area":"","cf_collaboration":"Igor Migasiewicz","title_slug":"zespol-zabudowy-mieszkaniowej-w-macznikach","_mby":"5b742d393335331f6000017b","_by":"5b742d393335331f6000017b","_modified":1534595758,"_created":1534587236,"_id":"5b77f16466356204b9000395","details":{"location":"Mączniki k. Kalisza","collaboration":"Igor Migasiewicz","status":"projekt koncepcyjny"},"children":[]}],"total":13};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Gallery = __webpack_require__(89);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gallery = function gallery(props) {
	return _react2.default.createElement(
		'div',
		{
			className: _Gallery2.default.Flex },
		props.children
	);
};

exports.default = gallery;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Flex":"Gallery_Flex_1TZKR"};

/***/ }),
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _GalleryItem = __webpack_require__(92);

var _GalleryItem2 = _interopRequireDefault(_GalleryItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var galleryItem = function galleryItem(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'item' },
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ to: '/project-' + props.id + '/' + props.slug },
			_react2.default.createElement('div', {
				className: _GalleryItem2.default.Image,
				style: { backgroundImage: 'url(' + props.bgimg + ')' } }),
			_react2.default.createElement(
				'div',
				{ className: _GalleryItem2.default.ItemTitle },
				props.children
			)
		)
	);
};

exports.default = galleryItem;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Image":"GalleryItem_Image_pqoOw","ItemTitle":"GalleryItem_ItemTitle_3Z0Gc"};

/***/ }),
/* 93 */,
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

var _GalleryAddon = __webpack_require__(95);

var _GalleryAddon2 = _interopRequireDefault(_GalleryAddon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var galleryAddon = function galleryAddon(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'item' },
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ to: props.url ? props.url : '/' },
			_react2.default.createElement(
				'div',
				{
					className: _GalleryAddon2.default.Image
				},
				_react2.default.createElement(
					'p',
					null,
					props.children
				)
			),
			_react2.default.createElement(
				'div',
				{ className: _GalleryAddon2.default.ItemTitle },
				'\xA0'
			)
		)
	);
};

exports.default = galleryAddon;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Image":"GalleryAddon_Image_2XLfe","ItemTitle":"GalleryAddon_ItemTitle_2T3zh"};

/***/ }),
/* 96 */,
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Test":"Home_Test_kdOWp"};

/***/ }),
/* 98 */,
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

var _database = __webpack_require__(23);

var _database2 = _interopRequireDefault(_database);

var _DetailItem = __webpack_require__(100);

var _DetailItem2 = _interopRequireDefault(_DetailItem);

var _Box = __webpack_require__(8);

var _Box2 = _interopRequireDefault(_Box);

var _spinnerService = __webpack_require__(9);

var _spinnerService2 = _interopRequireDefault(_spinnerService);

var _axiosCache = __webpack_require__(11);

var _axiosCache2 = _interopRequireDefault(_axiosCache);

var _constants = __webpack_require__(103);

var _Project = __webpack_require__(104);

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Project = function (_React$Component) {
	_inherits(Project, _React$Component);

	function Project(props) {
		_classCallCheck(this, Project);

		var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));

		_this.state = {
			id: _this.props.match.params.id ? _this.props.match.params.id : null,
			data: null
		};
		//spinnerService.show('mainLoader');
		return _this;
	}

	_createClass(Project, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({
				data: _database2.default.getPost(this.state.id)
			});
			/*let query = '/posts/' + this.state.id;
   
   if (!axiosCache.isCached(query)) {
   	axios.get(query)
   		.then( response => {
   			this.setState({
   				data: response.data
   			});
   			spinnerService.hide('mainLoader')
   		})
   		.catch( error => {
   			console.log(error);
   		});
   } else {
   	this.setState({
   		data: axiosCache.get(query)
   	});
   	spinnerService.hide('mainLoader')
   }*/
		}
	}, {
		key: 'mapGallery',
		value: function mapGallery() {
			if (this.state.data) {
				return this.state.data.gallery.map(function (image, i) {
					return _react2.default.createElement('img', { key: i, src: 'http://api2.migasiewicz.pl' + image.path });
				});
			}
		}
	}, {
		key: 'mapDetails',
		value: function mapDetails() {
			if (this.state.data) {
				if (this.state.data.hasOwnProperty('details')) {
					var details = _extends({}, this.state.data.details);
					return _constants.detailsLabels.map(function (definition, i) {
						if (details[definition.name]) {
							return _react2.default.createElement(_DetailItem2.default, { label: definition.title, value: details[definition.name], key: i });
						}
					});
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: _Project2.default.Project },
				this.state.data ? _react2.default.createElement(
					_Box2.default,
					null,
					_react2.default.createElement(
						'div',
						{ className: _Project2.default.Overview },
						_react2.default.createElement(
							'div',
							{ className: _Project2.default.Title },
							this.state.data.title
						),
						_react2.default.createElement(
							'ul',
							{ className: _Project2.default.Details },
							this.mapDetails()
						),
						this.state.data.text ? _react2.default.createElement(
							'div',
							{ className: _Project2.default.Description },
							this.state.data.text
						) : null
					),
					_react2.default.createElement(
						'div',
						{ className: _Project2.default.Gallery },
						this.mapGallery()
					)
				) : null
			);
		}
	}]);

	return Project;
}(_react2.default.Component);

exports.default = Project;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _DetailItem = __webpack_require__(101);

var _DetailItem2 = _interopRequireDefault(_DetailItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var detailItem = function detailItem(props) {
	return _react2.default.createElement(
		'li',
		null,
		_react2.default.createElement(
			'span',
			{ className: _DetailItem2.default.DetailsLabel },
			props.label
		),
		_react2.default.createElement(
			'span',
			{ className: _DetailItem2.default.DetailsValue },
			props.value
		)
	);
};

exports.default = detailItem;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"DetailsLabel":"DetailItem_DetailsLabel_16okx","DetailsValue":"DetailItem_DetailsValue_2aeh4"};

/***/ }),
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var detailsLabels = exports.detailsLabels = [{
	name: "status",
	title: 'Status'
}, {
	name: "date",
	title: 'Data'
}, {
	name: "location",
	title: 'Lokalizacja'
}, {
	name: "area",
	title: 'Powierzchnia'
}, {
	name: "collaboration",
	title: 'Współpraca'
}];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Project":"Project_Project_1STVV","Overview":"Project_Overview_2DfYF","Gallery":"Project_Gallery_238xT","Title":"Project_Title_2Jjdf","Details":"Project_Details_1DRL3","Description":"Project_Description_1my5I"};

/***/ }),
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Contact = __webpack_require__(107);

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contact = function contact(props) {
	return _react2.default.createElement(
		'div',
		{ className: _Contact2.default.Container },
		_react2.default.createElement(
			'div',
			{ className: _Contact2.default.Contact },
			_react2.default.createElement(
				'h4',
				null,
				'kontakt:'
			),
			_react2.default.createElement(
				'p',
				null,
				'architekt@migasiewicz.pl',
				_react2.default.createElement('br', null),
				'+48 609 121 018',
				_react2.default.createElement('br', null),
				'ul. Korczak 16, 62-800 Kalisz'
			)
		),
		_react2.default.createElement(
			'div',
			{ className: _Contact2.default.Offer },
			_react2.default.createElement(
				'h4',
				null,
				'oferta pracowni:'
			),
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					'projekty budowlane'
				),
				_react2.default.createElement(
					'li',
					null,
					'projekty architektury i dekoracji wn\u0119trz'
				),
				_react2.default.createElement(
					'li',
					null,
					'projekty zwi\u0105zane z zabytkami'
				),
				_react2.default.createElement(
					'li',
					null,
					'koncepcje funkcjonalno - przestrzenne'
				),
				_react2.default.createElement(
					'li',
					null,
					'inwentaryzacje'
				),
				_react2.default.createElement(
					'li',
					null,
					'opracowanie wniosk\xF3w o ustalenie warunk\xF3w zabudowy'
				),
				_react2.default.createElement(
					'li',
					null,
					'opracowanie studi\xF3w wykonalno\u015Bci i analiz teren\xF3w inwestycji'
				),
				_react2.default.createElement(
					'li',
					null,
					'opinie techniczne'
				),
				_react2.default.createElement(
					'li',
					null,
					'nadzory autorskie'
				),
				_react2.default.createElement(
					'li',
					null,
					'doradztwo techniczno - budowlane'
				)
			)
		)
	);
};

exports.default = contact;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Container":"Contact_Container_1MkEm","Contact":"Contact_Contact_3Vy6j","Offer":"Contact_Offer_EfZDQ"};

/***/ })
/******/ ]);