webpackJsonp([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_SETTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_RUNTIME_VARIABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_DATA; });
/* eslint-disable import/prefer-default-export */
var SET_SETTING = 'SET_SETTING';
var SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';

var SET_DATA = 'SET_DATA';

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (true && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var AdminRequire = __webpack_require__.e/* require.ensure */(0).then((function (require) {
  return {
    App: __webpack_require__(840).default,
    Dashboard: __webpack_require__(849).default,
    Login: __webpack_require__(852).default,
    Library: __webpack_require__(851).default,
    Setting: __webpack_require__(858).default,
    Editor: __webpack_require__(850).default,
    ListNews: __webpack_require__(856).default,
    EditNews: __webpack_require__(855).default,
    EditFoods: __webpack_require__(853).default,
    ListFoods: __webpack_require__(854).default,

    EditApartment: __webpack_require__(841).default,
    ListApartment: __webpack_require__(842).default,

    EditApartment2: __webpack_require__(843).default,
    ListApartment2: __webpack_require__(844).default,

    EditApartment3: __webpack_require__(845).default,
    ListApartment3: __webpack_require__(846).default,

    EditCategory: __webpack_require__(847).default,
    ListCategories: __webpack_require__(848).default,

    Seo: __webpack_require__(857).default
  };
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

module.exports = AdminRequire;

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fastclick__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_query_string__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_history_PathUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_history_PathUtils__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_App__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_configureStore__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_DOMUtils__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_devUtils__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_devUtils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__core_devUtils__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/client.js',
    _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Re-render the app when window.location changes
var onLocationChange = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(location, action) {
    var route;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Remember the latest scroll position for the previous location
            scrollPositionsHistory[currentLocation.key] = {
              scrollX: window.pageXOffset,
              scrollY: window.pageYOffset
            };
            // Delete stored scroll position for next page if any
            if (action === 'PUSH') {
              delete scrollPositionsHistory[location.key];
            }
            currentLocation = location;

            _context.prev = 3;
            _context.next = 6;
            return router.resolve(_extends({}, context, {
              path: location.pathname,
              query: __WEBPACK_IMPORTED_MODULE_3_query_string___default.a.parse(location.search)
            }));

          case 6:
            route = _context.sent;

            if (!(currentLocation.key !== location.key)) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return');

          case 9:
            if (!route.redirect) {
              _context.next = 12;
              break;
            }

            __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].replace(route.redirect);
            return _context.abrupt('return');

          case 12:

            appInstance = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6__components_App__["a" /* default */],
              { context: context, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 133
                },
                __self: this
              },
              route.component
            ), container, function () {
              return onRenderComplete(route, location);
            });
            _context.next = 24;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](3);

            if (false) {
              _context.next = 22;
              break;
            }

            appInstance = null;
            document.title = 'Error: ' + _context.t0.message;
            __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__core_devUtils__["ErrorReporter"], { error: _context.t0, __source: {
                fileName: _jsxFileName,
                lineNumber: 142
              },
              __self: this
            }), container);
            throw _context.t0;

          case 22:

            console.error(_context.t0); // eslint-disable-line no-console

            // Do a full page reload if error occurs during client-side navigation
            if (action && currentLocation.key === location.key) {
              window.location.reload();
            }

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 15]]);
  }));

  return function onLocationChange(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/mjackson/history#readme


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import UniversalRouter from 'universal-router';








// Global (context) variables that can be easily accessed from any React component
// https://facebook.github.io/react/docs/context.html
var context = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: function insertCss() {
    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    // eslint-disable-next-line no-underscore-dangle
    var removeCss = styles.map(function (x) {
      return x._insertCss();
    });
    return function () {
      removeCss.forEach(function (f) {
        return f();
      });
    };
  },
  // Initialize a new Redux store
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__store_configureStore__["a" /* default */])(window.APP_STATE, { history: __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */] })
};

// Switch off the native scroll restoration behavior and handle it manually
// https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
var scrollPositionsHistory = {};
if (window.history && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

var onRenderComplete = function initialRenderComplete() {
  var elem = document.getElementById('css');
  if (elem) elem.parentNode.removeChild(elem);
  onRenderComplete = function renderComplete(route, location) {
    document.title = route.title;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__core_DOMUtils__["a" /* updateMeta */])('description', route.description);
    // Update necessary tags in <head> at runtime here, ie:
    // updateMeta('keywords', route.keywords);
    // updateCustomMeta('og:url', route.canonicalUrl);
    // updateCustomMeta('og:image', route.imageUrl);
    // updateLink('canonical', route.canonicalUrl);
    // etc.

    var scrollX = 0;
    var scrollY = 0;
    var pos = scrollPositionsHistory[location.key];
    if (pos) {
      scrollX = pos.scrollX;
      scrollY = pos.scrollY;
    } else {
      var targetHash = location.hash.substr(1);
      if (targetHash) {
        var target = document.getElementById(targetHash);
        if (target) {
          scrollY = window.pageYOffset + target.getBoundingClientRect().top;
        }
      }
    }

    // Restore the scroll position if it was saved into the state
    // or scroll to the given #hash anchor
    // or scroll to top of the page
    window.scrollTo(scrollX, scrollY);

    // Google Analytics tracking. Don't send 'pageview' event after
    // the initial rendering, as it was already sent
    // if (window.ga) {
    //   window.ga('send', 'pageview', createPath(location));
    // }w

    if (window.run) {
      window.run();
    }
  };
};

// Make taps on links and buttons work fast on mobiles
__WEBPACK_IMPORTED_MODULE_2_fastclick___default.a.attach(document.body);

var container = document.getElementById('app');
var appInstance = void 0;
var currentLocation = __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].location;
var router = __webpack_require__(343).default;__WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].listen(onLocationChange);
onLocationChange(currentLocation);

// Handle errors that might happen after rendering
// Display the error in full-screen for development mode
if (true) {
  window.addEventListener('error', function (event) {
    appInstance = null;
    document.title = 'Runtime Error: ' + event.error.message;
    __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__core_devUtils__["ErrorReporter"], { error: event.error, __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: _this
    }), container);
  });
}

// Enable Hot Module Replacement (HMR)
if (false) {
  module.hot.accept('./core/router', function () {
    router = require('./core/router').default; // eslint-disable-line global-require

    if (appInstance) {
      try {
        // Force-update the whole tree, including components that refuse to update
        deepForceUpdate(appInstance);
      } catch (error) {
        appInstance = null;
        document.title = 'Hot Update Error: ' + error.message;
        ReactDOM.render(React.createElement(ErrorReporter, { error: error, __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: _this
        }), container);
        return;
      }
    }

    onLocationChange(currentLocation);
  });
}

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  store: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    subscribe: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    dispatch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    getState: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
  }).isRequired
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */

var App = function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      // NOTE: If you need to add or modify header, footer etc. of the app,
      // please do that inside the Layout component.
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired
};
App.childContextTypes = ContextType;


/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/components/Partials/Footer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

    _this.state = {
      form: {
        name: '',
        sdt: '',
        email: '',
        noidung: ''
      }
    };
    return _this;
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var _this2 = this,
          _React$createElement;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'footer', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'a-left', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/leaf.png', alt: '', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'a-right', __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/leaf.png', alt: '', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'footer-body', __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-6', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'footer-contact-info', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 30
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h4',
                    { style: { textAlign: 'center', marginBottom: 20 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                      },
                      __self: this
                    },
                    'th\xF4ng tin li\xEAn h\u1EC7'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'ul',
                    { className: 'contact-items ng-scope', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'clearfix item ng-scope', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 33
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'label ng-binding', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                          },
                          __self: this
                        },
                        'T\u01B0 v\u1EA5n'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'text', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 36
                            },
                            __self: this
                          },
                          '0906.234.912 - 0972.564.695'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'li',
                      { className: 'clearfix item ng-scope', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 39
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'label ng-binding', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 40
                          },
                          __self: this
                        },
                        '\u0110\u1ECBa ch\u1EC9 giao d\u1ECBch'
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'text', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { className: 'ng-binding ng-scope', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 42
                            },
                            __self: this
                          },
                          'S\xE0n B\u0110S Vinhomes Times City Park Hill s\u1ED1 458 Minh Khai - Hai B\xE0 Tr\u01B0ng - H\xE0 N\u1ED9i'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 55
                      },
                      __self: this
                    },
                    'Tags :',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      { style: { fontSize: 12, display: 'inline' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 57
                        },
                        __self: this
                      },
                      ' C\u0103n h\u1ED9 Vinhomes Times City, Vinhomes Times City, b\xE1n Vinhomes times city park hill, chung c\u01B0 vinhomes times city,  m\u1EB7t b\u1EB1ng Vinhomes times city, b\xE1n C\u0103n h\u1ED9 times city park hill, Vinhomes times city park hill, C\u0103n h\u1ED9 times city, gi\xE1 b\xE1n c\u0103n h\u1ED9 vinhomes times city, n\u1ED9i th\u1EA5t vinhomes times city, ch\xEDnh s\xE1ch b\xE1n h\xE0ng vinhomes times city, Shophouse Vinhomes Times City Park Hill, Gi\xE1 b\xE1n Vinhomes Times City Park Hill, Gi\xE1 b\xE1n Vinhomes Time City, B\u1EA3ng gi\xE1 Vinhomes Times City, Vinhomes Times City Park Hill, Gi\xE1 b\xE1n m\u1EDBi nh\u1EA5t Times City Park Hill, C\u0103n h\u1ED9 Times City Park Hill, Chung c\u01B0 Times City Park Hill'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-md-6', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'footer-contact-info', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h4',
                    { style: { textAlign: 'center', marginBottom: 20 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                      },
                      __self: this
                    },
                    '\u0110\u0103ng k\xFD t\u01B0 v\u1EA5n mi\u1EC5n ph\xED'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'agency-list', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'footer-contact-form ng-pristine ng-scope ng-invalid ng-invalid-required ng-valid-email', autoComplete: 'false', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 66
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'col-xs-12', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 68
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: this.state.form.name,
                            onChange: function onChange(e) {
                              var value = e.target.value;
                              _this2.setState(function (prev) {
                                return _extends({}, prev, {
                                  form: _extends({}, prev.form, {
                                    name: value
                                  })
                                });
                              });
                            },
                            type: 'text', placeholder: 'H\u1ECD & t\xEAn *', required: true, autoComplete: 'false', name: 'name', className: 'ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 69
                            },
                            __self: this
                          })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 85
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'col-xs-6', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 86
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text',
                            defaultValue: this.state.form.sdt,
                            onChange: function onChange(e) {
                              var value = e.target.value;
                              _this2.setState(function (prev) {
                                return _extends({}, prev, {
                                  form: _extends({}, prev.form, {
                                    sdt: value
                                  })
                                });
                              });
                            },
                            placeholder: 'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i*', required: true, autoComplete: 'false', name: 'name', className: 'ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 87
                            },
                            __self: this
                          })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'col-xs-6', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 103
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email',
                            defaultValue: this.state.form.email,
                            onChange: function onChange(e) {
                              var value = e.target.value;
                              _this2.setState(function (prev) {
                                return _extends({}, prev, {
                                  form: _extends({}, prev.form, {
                                    email: value
                                  })
                                });
                              });
                            },
                            placeholder: 'Email *', required: true, autoComplete: 'false', name: 'email', className: 'ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-email', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 104
                            },
                            __self: this
                          })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 121
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'col-xs-12', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 122
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', (_React$createElement = { placeholder: 'N\u1ED9i dung *',
                            defaultValue: this.state.form.noidung,
                            onChange: function onChange(e) {
                              var value = e.target.value;
                              _this2.setState(function (prev) {
                                return _extends({}, prev, {
                                  form: _extends({}, prev.form, {
                                    noidung: value
                                  })
                                });
                              });
                              console.log(_this2.state.form);
                            },
                            rows: 3, required: true, name: 'content', className: 'ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required' }, _defineProperty(_React$createElement, 'defaultValue', ""), _defineProperty(_React$createElement, '__source', {
                            fileName: _jsxFileName,
                            lineNumber: 123
                          }), _defineProperty(_React$createElement, '__self', this), _React$createElement))
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 142
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'col-xs-12 text-right', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 143
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'btn-send', style: { cursor: 'pointer' },
                              onClick: function onClick() {
                                var that = _this2;
                                __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/tuvan', _this2.state.form).then(function (res) {
                                  alert('Đã đăng ký tư vấn thành công, chúng tôi sẽ sớm liên lạc lại với bạn!');
                                  that.setState(function (prev) {
                                    return {
                                      form: {
                                        name: '',
                                        sdt: '',
                                        email: '',
                                        noidung: ''
                                      }
                                    };
                                  });
                                }).catch(function (err) {
                                  console.log(err);
                                });
                              },
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 144
                              },
                              __self: this
                            },
                            'G\u1EEDi '
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/components/Partials/Header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'header',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'nav-wrap', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'nav-wrap-holder', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'container', id: 'nav_wrapper', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                { className: 'navbar navbar-static-top nav-white', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar-header', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { className: 'navbar-brand', to: '/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/logo.png', alt: 'logo', className: 'img-responsive', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar2', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'navbar2-top letterpress', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                      },
                      __self: this
                    },
                    'T\u1EF0 H\xC0O L\xC0 \u0110\u01A0N V\u1ECA CHO THU\xCA - CHUY\u1EC2N NH\u01AF\u1EE2NG S\u1ED0 1 TIMES CITY'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'navbar2-bottom letterpress', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23
                      },
                      __self: this
                    },
                    'Chuy\xEAn vi\xEAn t\u01B0 v\u1EA5n: ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      { style: { color: '#FF851B' }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 23
                        },
                        __self: this
                      },
                      '0972.564.695 - 0906.234.912'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/components/Partials/Slider.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var View = function (_React$Component) {
  _inherits(View, _React$Component);

  function View(props) {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props));
  }

  _createClass(View, [{
    key: 'render',
    value: function render() {
      var settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        autoplay: true,
        speed: 2,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        swipeToSlide: false
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_slick___default.a,
        _extends({}, settings, { className: 'slider-top', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ratio', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/slide1.jpg', alt: '', __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ratio', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/2.jpg', alt: '', __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ratio', __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/1.jpg', alt: '', __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ratio', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/4.jpg', alt: '', __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ratio', __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/5.jpg', alt: '', __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ratio', __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/6.jpg', alt: '', __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return View;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export updateTag */
/* harmony export (immutable) */ __webpack_exports__["a"] = updateMeta;
/* unused harmony export updateCustomMeta */
/* unused harmony export updateLink */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
  var node = document.head.querySelector(tagName + '[' + keyName + '="' + keyValue + '"]');
  if (node && node.getAttribute(attrName) === attrValue) return;

  // Remove and create a new tag in order to make it work with bookmarks in Safari
  if (node) {
    node.parentNode.removeChild(node);
  }
  if (typeof attrValue === 'string') {
    var nextNode = document.createElement(tagName);
    nextNode.setAttribute(keyName, keyValue);
    nextNode.setAttribute(attrName, attrValue);
    document.head.appendChild(nextNode);
  }
}

function updateMeta(name, content) {
  updateTag('meta', 'name', name, 'content', content);
}

function updateCustomMeta(property, content) {
  updateTag('meta', 'property', property, 'content', content);
}

function updateLink(rel, href) {
  updateTag('link', 'rel', rel, 'href', href);
}

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

if (true) {
  module.exports = {
    // The red box (aka red screen of death) component to display your errors
    // https://github.com/commissure/redbox-react
    ErrorReporter: __webpack_require__(810).default,

    // Force-updates React component tree recursively
    // https://github.com/gaearon/react-deep-force-update
    deepForceUpdate: __webpack_require__(704)
  };
}

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(370);

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]));

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(107);
/* harmony export (immutable) */ __webpack_exports__["a"] = data;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */]:
      var _data = action.payload.value;
      return _extends({}, state, {
        post: _extends({}, state.post, {
          value: _data.getOnePost || {}
        }),
        posts: _extends({}, state.posts, {
          value: _data.getPosts || state.posts.value
        }),
        chothue: _extends({}, state.chothue, {
          value: _data.chothue || state.chothue.value
        }),
        muabankhut: _extends({}, state.muabankhut, {
          value: _data.muabankhut || state.muabankhut.value
        }),
        muabanparkhill: _extends({}, state.muabanparkhill, {
          value: _data.muabanparkhill || state.muabanparkhill.value
        }),
        danhsachcanho: _extends({}, state.danhsachcanho, {
          value: _data.danhsachcanho || state.danhsachcanho.value
        }),
        canho: _extends({}, state.canho, {
          value: _data.canho || state.canho.value
        }),
        thutuctrangchu: _extends({}, state.thutuctrangchu, {
          value: _data.thutuctrangchu || state.thutuctrangchu.value
        }),
        danhsachthutuc: _extends({}, state.danhsachthutuc, {
          value: _data.danhsachthutuc || state.danhsachthutuc.value
        }),
        thutuc: _extends({}, state.thutuc, {
          value: _data.thutuc || state.thutuc.value
        }),
        gioithieu: _extends({}, state.gioithieu, {
          value: _data.gioithieu || state.gioithieu.value
        }),
        canhotuongtu: _extends({}, state.canho, {
          value: _data.canhotuongtu || state.canhotuongtu.value
        }),
        thutuctuongtu: _extends({}, state.thutuctuongtu, {
          value: _data.thutuctuongtu || state.thutuctuongtu.value
        })
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__);






/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* combineReducers */])({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */],
  setting: __WEBPACK_IMPORTED_MODULE_3__setting__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_4__data__["a" /* default */],
  loadingBar: __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__["loadingBarReducer"]
}));

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(107);
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function runtime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, _defineProperty({}, action.payload.name, action.payload.value));
    default:
      return state;
  }
}

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(107);
/* harmony export (immutable) */ __webpack_exports__["a"] = setting;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function setting() {
  var _extends2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_SETTING */]:
      return _extends({}, state, (_extends2 = {}, _defineProperty(_extends2, 'ssr', action.payload.value), _defineProperty(_extends2, 'user', action.payload.user), _extends2));
    default:
      return state;
  }
}

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/apartment/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Căn Hộ Mua Bán & Chuyển Nhượng ';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/apartment',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, EditApartment, ListApartment, component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (query.v) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/apartment?v=list' });

            case 2:
              _context.next = 4;
              return __webpack_require__(27);

            case 4:
              _ref2 = _context.sent;
              App = _ref2.App;
              EditApartment = _ref2.EditApartment;
              ListApartment = _ref2.ListApartment;
              component = {};

              if (!(query.v === 'list')) {
                _context.next = 13;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListApartment, { title: title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 13:
              if (!(query.v === 'add')) {
                _context.next = 17;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment, { mode: 'add', isEdit: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 17:
              if (!(query.slug && query.v === 'edit')) {
                _context.next = 21;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment, { mode: 'edit', isEdit: true, slug: query.slug, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 21:
              if (!(query.v !== 'list')) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/apartment?v=list' });

            case 23:
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: component
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/apartment2/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Căn Hộ Cho Thuê';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/apartment2',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, EditApartment2, ListApartment2, component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (query.v) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/apartment2?v=list' });

            case 2:
              _context.next = 4;
              return __webpack_require__(27);

            case 4:
              _ref2 = _context.sent;
              App = _ref2.App;
              EditApartment2 = _ref2.EditApartment2;
              ListApartment2 = _ref2.ListApartment2;
              component = {};

              if (!(query.v === 'list')) {
                _context.next = 13;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListApartment2, { title: title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 13:
              if (!(query.v === 'add')) {
                _context.next = 17;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment2, { mode: 'add', isEdit: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 17:
              if (!(query.slug && query.v === 'edit')) {
                _context.next = 21;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment2, { mode: 'edit', isEdit: true, slug: query.slug, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 21:
              if (!(query.v !== 'list')) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/apartment2?v=list' });

            case 23:
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: component
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/apartment3/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Căn Hộ Mua Bán & Chuyển Nhượng ';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/apartment3',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, EditApartment3, ListApartment3, component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (query.v) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/apartment3?v=list' });

            case 2:
              _context.next = 4;
              return __webpack_require__(27);

            case 4:
              _ref2 = _context.sent;
              App = _ref2.App;
              EditApartment3 = _ref2.EditApartment3;
              ListApartment3 = _ref2.ListApartment3;
              component = {};

              if (!(query.v === 'list')) {
                _context.next = 13;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListApartment3, { title: title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 13:
              if (!(query.v === 'add')) {
                _context.next = 17;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment3, { mode: 'add', isEdit: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 17:
              if (!(query.slug && query.v === 'edit')) {
                _context.next = 21;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment3, { mode: 'edit', isEdit: true, slug: query.slug, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 21:
              if (!(query.v !== 'list')) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/apartment3?v=list' });

            case 23:
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: component
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/category/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Danh muc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/category',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, EditCategory, ListCategories, component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (query.v) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/category?v=list' });

            case 2:
              _context.next = 4;
              return __webpack_require__(27);

            case 4:
              _ref2 = _context.sent;
              App = _ref2.App;
              EditCategory = _ref2.EditCategory;
              ListCategories = _ref2.ListCategories;
              component = {};

              if (!(query.v === 'list')) {
                _context.next = 13;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListCategories, { title: title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 13:
              if (!(query.v === 'add')) {
                _context.next = 17;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditCategory, { mode: 'add', isEdit: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 17:
              if (!(query.slug && query.v === 'edit')) {
                _context.next = 21;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditCategory, { mode: 'edit', isEdit: true, slug: query.slug, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 21:
              if (!(query.v !== 'list')) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/category?v=list' });

            case 23:
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: component
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(42);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/dashboard/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, Dashboard, resp, _ref3, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(27);

            case 2:
              _ref2 = _context.sent;
              App = _ref2.App;
              Dashboard = _ref2.Dashboard;
              _context.next = 7;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])('/graphql', {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: '{ getOrders{name, phone, address, product, quantity, done, created_at} }'
                }),
                credentials: 'include'
              });

            case 7:
              resp = _context.sent;
              _context.next = 10;
              return resp.json();

            case 10:
              _ref3 = _context.sent;
              data = _ref3.data;
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  App,
                  {
                    name: title,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dashboard, { title: title, orders: data.getOrders, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    },
                    __self: _this
                  })
                )
              });

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


// import Layout from '../../components/Layout';

var title = 'Admin Page';
var isAdmin = false;

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/admin',
  children: [__webpack_require__(353).default, __webpack_require__(355).default, __webpack_require__(361).default, __webpack_require__(349).default, __webpack_require__(350).default, __webpack_require__(351).default, __webpack_require__(352).default, __webpack_require__(356).default,
  // require('./editor').default,
  __webpack_require__(358).default, __webpack_require__(357).default, __webpack_require__(359).default, __webpack_require__(360).default],
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        next = _ref.next,
        url = _ref.url;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var user, route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = store.getState().user;

              if (!(user && url === '/admin/login')) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin' });

            case 3:
              if (!(!user && url !== '/admin/login')) {
                _context.next = 5;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/login' });

            case 5:
              _context.next = 7;
              return next();

            case 7:
              route = _context.sent;

              // Provide default values for title, description etc.
              route.title = '' + (route.title || 'Amdmin Page');
              return _context.abrupt('return', route);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(42);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/library/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import moment from 'moment'

var title = 'Library';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/library',

  action: function action(_ref) {
    var _this = this;

    var store = _ref.store;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, Library;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__["showLoading"])());
              _context.next = 3;
              return __webpack_require__(27);

            case 3:
              _ref2 = _context.sent;
              App = _ref2.App;
              Library = _ref2.Library;

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__["hideLoading"])());
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  App,
                  {
                    name: title,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Library, { title: title, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    },
                    __self: _this
                  })
                )
              });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/login/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Đăng nhập';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/login',

  action: function action() {
    var _this = this;

    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref, Login;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(27);

            case 2:
              _ref = _context.sent;
              Login = _ref.Login;
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Login, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: _this
                })
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/monngon/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Mon ngon';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/monngon',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, EditFoods, ListFoods, component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (query.v) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/monngon?v=list' });

            case 2:
              _context.next = 4;
              return __webpack_require__(27);

            case 4:
              _ref2 = _context.sent;
              App = _ref2.App;
              EditFoods = _ref2.EditFoods;
              ListFoods = _ref2.ListFoods;
              component = {};

              if (!(query.v === 'list')) {
                _context.next = 13;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListFoods, { title: title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 13:
              if (!(query.v === 'add')) {
                _context.next = 17;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditFoods, { mode: 'add', isEdit: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 17:
              if (!(query.slug && query.v === 'edit')) {
                _context.next = 21;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditFoods, { mode: 'edit', isEdit: true, slug: query.slug, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 21:
              if (!(query.v !== 'list')) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/mongon?v=list' });

            case 23:
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: component
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/news/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Tin Tuc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/news',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, EditNews, ListNews, component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (query.v) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/news?v=list' });

            case 2:
              _context.next = 4;
              return __webpack_require__(27);

            case 4:
              _ref2 = _context.sent;
              App = _ref2.App;
              EditNews = _ref2.EditNews;
              ListNews = _ref2.ListNews;
              component = {};

              if (!(query.v === 'list')) {
                _context.next = 13;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListNews, { title: title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 13:
              if (!(query.v === 'add')) {
                _context.next = 17;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'add', isEdit: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 17:
              if (!(query.slug && query.v === 'edit')) {
                _context.next = 21;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'edit', isEdit: true, slug: query.slug, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 21:
              if (!(query.v !== 'list')) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/news?v=list' });

            case 23:
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: component
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/product/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Sản phẩm';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/product',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, EditProduct, ListProduct, component;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (query.v) {
                _context.next = 2;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/news?v=list' });

            case 2:
              _context.next = 4;
              return __webpack_require__(27);

            case 4:
              _ref2 = _context.sent;
              App = _ref2.App;
              EditProduct = _ref2.EditProduct;
              ListProduct = _ref2.ListProduct;
              component = {};

              if (!(query.v === 'list')) {
                _context.next = 13;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListProduct, { title: title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 13:
              if (!(query.v === 'add')) {
                _context.next = 17;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditProduct, { mode: 'add', isEdit: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 17:
              if (!(query.slug && query.v === 'edit')) {
                _context.next = 21;
                break;
              }

              component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                App,
                {
                  name: title,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: _this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditProduct, { mode: 'edit', isEdit: true, slug: query.slug, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  },
                  __self: _this
                })
              );
              _context.next = 23;
              break;

            case 21:
              if (!(query.v !== 'list')) {
                _context.next = 23;
                break;
              }

              return _context.abrupt('return', { redirect: '/admin/news?v=list' });

            case 23:
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: component
              });

            case 24:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(42);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/seo/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




var title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/seo',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, Seo;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(27);

            case 2:
              _ref2 = _context.sent;
              App = _ref2.App;
              Seo = _ref2.Seo;
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  App,
                  {
                    name: title,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Seo, { title: title, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    },
                    __self: _this
                  })
                )
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/admin/setting/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



var title = 'Setting';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/setting',

  action: function action(_ref) {
    var _this = this;

    var query = _ref.query;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var _ref2, App, Setting;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return __webpack_require__(27);

            case 2:
              _ref2 = _context.sent;
              App = _ref2.App;
              Setting = _ref2.Setting;
              return _context.abrupt('return', {
                title: title,
                chunk: 'admin',
                disableSSR: true,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  App,
                  {
                    name: title,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Setting, { title: title, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: _this
                  })
                )
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/canho/View.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// import MenuMobile from '../../components/Partials/MenuMobile'



var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      rate: 5,
      currentRate: null,
      rated: false
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'changeRate',
    value: function changeRate(num) {
      this.setState(function (prev) {
        return _extends({}, prev, {
          rate: num
        });
      });
    }
  }, {
    key: 'sendRating',
    value: function sendRating() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/api/rating', {
        slug: this.props.data.canho.value.slug,
        rate: this.state.rate
      }).then(function (res) {
        _this2.setState(function (prev) {
          return _extends({}, prev, {
            currentRate: res.data.rating,
            rated: true
          });
        });
      }).catch(function (err) {
        alert('Có lỗi');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var canho = this.props.data.canho.value;
      var thutucAside = this.props.data.danhsachthutuc.value;
      var canhotuongtu = this.props.data.canhotuongtu.value;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'inner-page', __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-lg-9 col-sm-8 content-row shadow bg-white', style: { paddingTop: 15 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-sm-4', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { height: 'auto', width: '100%', src: canho.coverUrl, alt: canho.title, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      },
                      __self: this
                    })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-sm-8', style: { textAlign: 'center', fontSize: 20 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'propertyStats', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 62
                        },
                        __self: this
                      },
                      !canho.price2 && !canho.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'lienhe', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                          },
                          __self: this
                        },
                        'Li\xEAn h\u1EC7'
                      ),
                      !canho.price2 && canho.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'curPrice', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 64
                            },
                            __self: this
                          },
                          canho.price1.toLocaleString(),
                          ' VN\u0110'
                        )
                      ) : '',
                      canho.price2 && canho.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'curPrice', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { className: 'oldprice', style: { textDecoration: 'line-through' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 65
                            },
                            __self: this
                          },
                          canho.price1.toLocaleString()
                        ),
                        ' ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 65
                            },
                            __self: this
                          },
                          canho.price2.toLocaleString(),
                          ' VN\u0110'
                        )
                      ) : ""
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { style: { marginTop: 20 }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 67
                        },
                        __self: this
                      },
                      '\u0110ang \u0111\u01B0\u1EE3c \u0111\xE1nh gi\xE1: ',
                      this.state.currentRate || canho.rating,
                      ' ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 68
                        },
                        __self: this
                      })
                    ),
                    !this.state.rated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { style: { marginTop: 20 }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 70
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'gender', value: '1', checked: this.state.rate === 1,
                        onChange: function onChange() {
                          return _this3.changeRate(1);
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 71
                        },
                        __self: this
                      }),
                      ' 1 ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 73
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'gender', value: '2', checked: this.state.rate === 2,
                        onChange: function onChange() {
                          return _this3.changeRate(2);
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 74
                        },
                        __self: this
                      }),
                      ' 2 ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'gender', value: '3', checked: this.state.rate === 3,
                        onChange: function onChange() {
                          return _this3.changeRate(3);
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 77
                        },
                        __self: this
                      }),
                      ' 3 ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 79
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'gender', value: '4', checked: this.state.rate === 4,
                        onChange: function onChange() {
                          return _this3.changeRate(4);
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 80
                        },
                        __self: this
                      }),
                      ' 4 ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 82
                        },
                        __self: this
                      }),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'gender', value: '5', checked: this.state.rate === 5,
                        onChange: function onChange() {
                          return _this3.changeRate(5);
                        },
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 83
                        },
                        __self: this
                      }),
                      ' 5 ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 85
                        },
                        __self: this
                      })
                    ),
                    this.state.rated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { style: { marginTop: 20 }, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 88
                        },
                        __self: this
                      },
                      'B\u1EA1n \u0111\xE3 \u0111\xE1nh gi\xE1 c\u0103n h\u1ED9 n\xE0y ',
                      this.state.rate,
                      ' ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 89
                        },
                        __self: this
                      })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 92
                      },
                      __self: this
                    }),
                    !this.state.rated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      { type: 'button',
                        onClick: function onClick() {
                          return _this3.sendRating();
                        },
                        className: 'btn btn-primary', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 93
                        },
                        __self: this
                      },
                      'G\u1EEDi \u0111\xE1nh gi\xE1'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row padding-20 responsive', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 99
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 100
                      },
                      __self: this
                    },
                    'Th\xF4ng tin c\u0103n h\u1ED9'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { dangerouslySetInnerHTML: { __html: canho.body }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row padding-20 responsive', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 103
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row', style: { marginBottom: 15 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 104
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'headerWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 105
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'header',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 106
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h2',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 107
                            },
                            __self: this
                          },
                          'C\xE1c c\u0103n h\u1ED9 t\u01B0\u01A1ng t\u1EF1'
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 111
                      },
                      __self: this
                    },
                    canhotuongtu.map(function (el, index) {
                      if (el) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { key: index, className: 'col-sm-6 col-lg-6', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 115
                          },
                          __self: _this3
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 116
                            },
                            __self: _this3
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                            { to: '/can-ho/' + el.slug + '#menu2', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 117
                              },
                              __self: _this3
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'card-image imgWr', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 118
                                },
                                __self: _this3
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 119
                                },
                                __self: _this3
                              })
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-content', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 122
                              },
                              __self: _this3
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'listingInfo', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 123
                                },
                                __self: _this3
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'figure',
                                { className: 'listerName', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 124
                                  },
                                  __self: _this3
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                  { to: '/can-ho/' + el.slug + '#menu2', className: 'agent-wrapper', __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 125
                                    },
                                    __self: _this3
                                  },
                                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'agent-photo', src: '/imgs/icon_new.gif', width: 29, height: 19, alt: 'new icon', __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 126
                                    },
                                    __self: _this3
                                  })
                                )
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'propertyStats', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 129
                                  },
                                  __self: _this3
                                },
                                !el.price2 && !el.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'span',
                                  { className: 'lienhe', __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 130
                                    },
                                    __self: _this3
                                  },
                                  'Li\xEAn h\u1EC7'
                                ),
                                !el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'span',
                                  { className: 'curPrice', __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 131
                                    },
                                    __self: _this3
                                  },
                                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'b',
                                    {
                                      __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 131
                                      },
                                      __self: _this3
                                    },
                                    el.price1.toLocaleString(),
                                    ' VN\u0110'
                                  )
                                ) : '',
                                el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'span',
                                  { className: 'curPrice', __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 132
                                    },
                                    __self: _this3
                                  },
                                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'span',
                                    { className: 'oldprice', style: { textDecoration: 'line-through' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 132
                                      },
                                      __self: _this3
                                    },
                                    el.price1.toLocaleString()
                                  ),
                                  ' ',
                                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'b',
                                    {
                                      __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 132
                                      },
                                      __self: _this3
                                    },
                                    el.price2.toLocaleString(),
                                    ' VN\u0110'
                                  )
                                ) : ""
                              ),
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'vcard', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 134
                                  },
                                  __self: _this3
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'h2',
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 135
                                    },
                                    __self: _this3
                                  },
                                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                    { to: '/can-ho/' + el.slug + '#menu2', className: 'name align-center', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 135
                                      },
                                      __self: _this3
                                    },
                                    el.title
                                  )
                                )
                              )
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-action', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 140
                              },
                              __self: _this3
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'b',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 141
                                },
                                __self: _this3
                              },
                              '\u0110\xE1nh gi\xE1 :'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { style: { margin: '0 5px' }, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 141
                                },
                                __self: _this3
                              },
                              el.rating,
                              ' '
                            ),
                            ' ',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 141
                              },
                              __self: _this3
                            })
                          )
                        )
                      );
                    })
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__["a" /* default */], { thutuc: thutucAside, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 151
                },
                __self: this
              })
            )
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/canho/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/can-ho/:slug',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        params = _ref.params,
        path = _ref.path;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var seo, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // process.env.BROWSER
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 15;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              _context.next = 5;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},canho:getOneApartment(slug:"' + params.slug + '"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at},danhsachthutuc:getAllPosts{title, coverUrl, description, slug, public, view, created_at}, canhotuongtu:getApartmentRelative(slug:"' + params.slug + '"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at} }'
                }),
                credentials: 'include'
              });

            case 5:
              resp = _context.sent;
              _context.next = 8;
              return resp.json();

            case 8:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};

              if (data) {
                _context.next = 13;
                break;
              }

              throw new Error('Failed to load the news feed.');

            case 13:
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 15:
              return _context.abrupt('return', {
                title: seo.title || 'Trang chủ',
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */], { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  })
                )
              });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(49);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/danhsachcanho/View.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// import MenuMobile from '../../components/Partials/MenuMobile'


var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var danhsachcanho = this.props.data.danhsachcanho.value;
      var thutucAside = this.props.data.danhsachthutuc.value;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'inner-page', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-lg-9 col-sm-8 content-row shadow bg-white', style: { paddingTop: 15 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'row', style: { marginBottom: 15, padding: 15 }, dangerouslySetInnerHTML: { __html: this.props.data.gioithieu.value.body || '' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', style: { marginBottom: 15 }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'headerWr', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'header',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 21
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                          },
                          __self: this
                        },
                        'Danh s\xE1ch c\xE1c c\u0103n h\u1ED9'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  },
                  danhsachcanho.map(function (el, index) {
                    if (el) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: index, className: 'col-sm-6 col-lg-4', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 31
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                          { to: '/can-ho/' + el.slug + '#menu2', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 33
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-image imgWr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                              },
                              __self: _this2
                            })
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-content', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 38
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'listingInfo', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'figure',
                              { className: 'listerName', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 40
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                { to: '/can-ho/' + el.slug + '#menu2', className: 'agent-wrapper', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 41
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'agent-photo', src: '/imgs/icon_new.gif', width: 29, height: 19, alt: 'new icon', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 42
                                  },
                                  __self: _this2
                                })
                              )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'propertyStats', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 45
                                },
                                __self: _this2
                              },
                              !el.price2 && !el.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'lienhe', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 46
                                  },
                                  __self: _this2
                                },
                                'Li\xEAn h\u1EC7'
                              ),
                              !el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'curPrice', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 47
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'b',
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 47
                                    },
                                    __self: _this2
                                  },
                                  el.price1.toLocaleString(),
                                  ' VN\u0110'
                                )
                              ) : '',
                              el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'curPrice', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 48
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'span',
                                  { className: 'oldprice', style: { textDecoration: 'line-through' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 48
                                    },
                                    __self: _this2
                                  },
                                  el.price1.toLocaleString()
                                ),
                                ' ',
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'b',
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 48
                                    },
                                    __self: _this2
                                  },
                                  el.price2.toLocaleString(),
                                  ' VN\u0110'
                                )
                              ) : ""
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'vcard', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 50
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'h2',
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 51
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                  { to: '/can-ho/' + el.slug + '#menu2', className: 'name align-center', __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 51
                                    },
                                    __self: _this2
                                  },
                                  el.title
                                )
                              )
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-action', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 56
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'b',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                              },
                              __self: _this2
                            },
                            '\u0110\xE1nh gi\xE1 :'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { margin: '0 5px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                              },
                              __self: _this2
                            },
                            el.rating,
                            ' '
                          ),
                          ' ',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 57
                            },
                            __self: _this2
                          })
                        )
                      )
                    );
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__["a" /* default */], { thutuc: thutucAside, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                },
                __self: this
              })
            )
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/danhsachcanho/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/danhsach/:slug',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        params = _ref.params,
        path = _ref.path;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var seo, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // process.env.BROWSER
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 15;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              _context.next = 5;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},danhsachcanho:getApartmentsByCategory(category:"' + params.slug + '"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at},danhsachthutuc:getAllPosts{title, coverUrl, description, slug, public, view, created_at}, gioithieu:getOneCategory(slug: "' + params.slug + '"){slug, body, created_at} }'
                }),
                credentials: 'include'
              });

            case 5:
              resp = _context.sent;
              _context.next = 8;
              return resp.json();

            case 8:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};

              if (data) {
                _context.next = 13;
                break;
              }

              throw new Error('Failed to load the news feed.');

            case 13:
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 15:
              return _context.abrupt('return', {
                title: seo.title || 'Trang chủ',
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */], { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  })
                )
              });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(49);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/danhsachthutuc/View.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      console.log(this.props);
      var danhsachthutuc = this.props.data.danhsachthutuc.value;
      var thutucAside = this.props.data.danhsachthutuc.value;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'inner-page', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-lg-9 col-sm-8 content-row shadow bg-white', style: { paddingTop: 15 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', style: { marginBottom: '15px 0' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'headerWr', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'header',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 20
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                          },
                          __self: this
                        },
                        'Th\u1EE7 t\u1EE5c ph\xE1p l\xFD'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'tab-pane fade active in', id: 'personalAds', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: this
                    },
                    danhsachthutuc.map(function (el, index) {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { key: index, className: 'card card-horizontal', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'row', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 31
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-4', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 32
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'card-image bg-image imgWr', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 33
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                { to: '/thutuc/' + el.slug + '#menu2', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 34
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl, width: '100%', height: '100%', alt: '', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 35
                                  },
                                  __self: _this2
                                })
                              )
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'col-sm-8', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'card-content', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 41
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'listingInfo', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 42
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'div',
                                  { className: 'vcard', __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 43
                                    },
                                    __self: _this2
                                  },
                                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'h2',
                                    {
                                      __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 44
                                      },
                                      __self: _this2
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                      __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                      { to: '/thutuc/' + el.slug + '#menu2', className: 'name', __source: {
                                          fileName: _jsxFileName,
                                          lineNumber: 44
                                        },
                                        __self: _this2
                                      },
                                      el.title
                                    )
                                  ),
                                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    { className: 'listingLocation', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 45
                                      },
                                      __self: _this2
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-map-o', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 45
                                      },
                                      __self: _this2
                                    }),
                                    el.description
                                  )
                                )
                              )
                            )
                          )
                        )
                      );
                    })
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__["a" /* default */], { thutuc: thutucAside, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                },
                __self: this
              })
            )
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/danhsachthutuc/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/danhsachthutuc',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        params = _ref.params,
        path = _ref.path;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var seo, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // process.env.BROWSER
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 15;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              _context.next = 5;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},danhsachthutuc:getAllPosts{title, coverUrl, description, slug, public, view, created_at} }'
                }),
                credentials: 'include'
              });

            case 5:
              resp = _context.sent;
              _context.next = 8;
              return resp.json();

            case 8:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};

              if (data) {
                _context.next = 13;
                break;
              }

              throw new Error('Failed to load the news feed.');

            case 13:
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 15:
              return _context.abrupt('return', {
                title: seo.title || 'Trang chủ',
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */], { data: store.getState().data, headerName: mapSlugToName(params.slug), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  })
                )
              });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

function mapSlugToName(slug) {
  if (slug === 'khu-t') {
    return "Mua bán & chuyển nhượng ( Căn hộ khu T )";
  } else if (slug === 'khu-park-hill') {
    return "Mua bán & chuyển nhượng ( Căn hộ khu Park Hill )";
  } else {
    return "Căn Hộ Cho Thuê";
  }
}

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(49);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/home/View.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// import MenuMobile from '../../components/Partials/MenuMobile'


var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var chothue = this.props.data.chothue.value;
      var muabankhut = this.props.data.muabankhut.value;
      var muabanparkhill = this.props.data.muabanparkhill.value;
      var thutuctrangchu = this.props.data.thutuctrangchu.value.slice(0, 4);
      var thutucAside = this.props.data.thutuctrangchu.value;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row', style: { marginTop: 30 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container tongquan shadow bg-white', __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-12', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'h2',
                { className: 'divider gradient', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  },
                  __self: this
                },
                'T\u1ED5ng quan d\u1EF1 \xE1n'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-12 padding-20', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/bando.jpg', width: '100%', height: 'auto', alt: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-5 padding-20', style: { fontWeight: 'bold', paddingTop: '0 !important' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'noidung', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'wpb_wrapper', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'cms-heading-wrapper heading-default ', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'cms-heading-inner', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'cms-heading-content', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h3',
                          { className: 'title', style: { color: '#000000' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 30
                            },
                            __self: this
                          },
                          'T\u1ED4NG QUAN D\u1EF0 \xC1N',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 30
                              },
                              __self: this
                            },
                            '.'
                          )
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'wpb_text_column wpb_content_element ', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'wpb_wrapper', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 35
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'ul',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 37
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'strong',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 37
                                },
                                __self: this
                              },
                              'T\xEAn d\u1EF1 \xE1n:\xA0'
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'strong',
                              { style: { color: '#003333' }, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 37
                                },
                                __self: this
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'a',
                                { style: { color: '#000000' }, href: 'http://vinhomesluxury.net.vn/', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 37
                                  },
                                  __self: this
                                },
                                'Vinhomes\xA0'
                              ),
                              'Times City Park Hill'
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 38
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'strong',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 38
                                },
                                __self: this
                              },
                              'V\u1ECB tr\xED:'
                            ),
                            '\xA0S\u1ED1 458 Minh Khai\xA0\u2013 Hai B\xE0 Tr\u01B0ng \u2013 H\xE0 N\u1ED9i'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 39
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'strong',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 39
                                },
                                __self: this
                              },
                              'Ch\u1EE7 \u0111\u1EA7u t\u01B0:'
                            ),
                            '\xA0T\u1EADp \u0111o\xE0n ',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'strong',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 39
                                },
                                __self: this
                              },
                              'Vingroup'
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 40
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'strong',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 40
                                },
                                __self: this
                              },
                              'Quy m\xF4 d\u1EF1 \xE1n:'
                            ),
                            '\xA036 ha'
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 42
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 42
                            },
                            __self: this
                          },
                          '\xA0Di\u1EC7n t\xEDch khu\xF4n vi\xEAn c\xE2y xanh: 100.000m2'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'ul',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 44
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'strong',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 44
                                },
                                __self: this
                              },
                              'S\u1EA3n ph\u1EA9m:'
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 44
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                              },
                              __self: this
                            },
                            '+ 10 l\xF4 li\u1EC1n k\u1EC1, bi\u1EC7t th\u1EF1.'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 45
                            },
                            __self: this
                          }),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
                              },
                              __self: this
                            },
                            '+ 23 t\xF2a v\u1EDBi\xA0h\u01A1n 12000 c\u0103n h\u1ED9 chung c\u01B0'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 47
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 47
                              },
                              __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'strong',
                              {
                                __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 47
                                },
                                __self: this
                              },
                              '3 Ph\xE2n khu:'
                            ),
                            '\xA0Times City, Park Hill, Park Hill Premium'
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h4',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' }, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 49
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 49
                              },
                              __self: this
                            },
                            'TI\u1EC6N \xCDCH S\u1ED0NG:'
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'ul',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 50
                          },
                          __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 51
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 51
                              },
                              __self: this
                            },
                            'Khu c\u1EA3nh quan n\u01B0\u1EDBc v\xE0 c\xE1c khu v\u01B0\u1EDDn'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 52
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 52
                              },
                              __self: this
                            },
                            'Khu\xA0qu\u1EA3ng tr\u01B0\u1EDDng trung t\xE2m'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 53
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 53
                              },
                              __self: this
                            },
                            'Khu ho\u1EA1t \u0111\u1ED9ng BBQ, picnic v\xE0 b\u1EC3 b\u01A1i'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 54
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 54
                              },
                              __self: this
                            },
                            'Khu\xA0th\u1EC3 thao v\xE0 v\u01B0\u1EDDn sinh th\xE1i'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'li',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 55
                            },
                            __self: this
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { color: '#000000' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 55
                              },
                              __self: this
                            },
                            'Ph\u1ED1 \u0111i d\u1EA1o v\xE0 mua s\u1EAFm\u2026'
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-7 padding-20', style: {}, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'square', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'square-content', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 65
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/phoicanh.jpg', width: '100%', height: '100%', alt: '', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 66
                    },
                    __self: this
                  })
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'inner-page', __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 75
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-lg-9 col-sm-8 content-row shadow bg-white', style: { paddingTop: 15 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', style: { marginBottom: '15px 0' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 78
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'headerWr', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 79
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'header',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 80
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                          },
                          __self: this
                        },
                        'C\u0102N H\u1ED8 CHO THU\xCA'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86
                    },
                    __self: this
                  },
                  chothue.map(function (el, index) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: index, className: 'col-sm-6 col-lg-4', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 89
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 90
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                          { to: '/can-ho/' + el.slug + '#menu2', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 91
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-image imgWr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 92
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 93
                              },
                              __self: _this2
                            })
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-content', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 96
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'listingInfo', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'figure',
                              { className: 'listerName', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 98
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                { to: '/can-ho/' + el.slug + '#menu2', className: 'agent-wrapper', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 99
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'agent-photo', src: '/imgs/icon_new.gif', width: 29, height: 19, alt: 'new icon', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 100
                                  },
                                  __self: _this2
                                })
                              )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'propertyStats', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 103
                                },
                                __self: _this2
                              },
                              !el.price2 && !el.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'lienhe', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 104
                                  },
                                  __self: _this2
                                },
                                'Li\xEAn h\u1EC7'
                              ),
                              !el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'curPrice', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 105
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'b',
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 105
                                    },
                                    __self: _this2
                                  },
                                  el.price1.toLocaleString(),
                                  ' VN\u0110'
                                )
                              ) : '',
                              el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'curPrice', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 106
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'span',
                                  { className: 'oldprice', style: { textDecoration: 'line-through' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 106
                                    },
                                    __self: _this2
                                  },
                                  el.price1.toLocaleString()
                                ),
                                ' ',
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'b',
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 106
                                    },
                                    __self: _this2
                                  },
                                  el.price2.toLocaleString(),
                                  ' VN\u0110'
                                )
                              ) : ""
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'vcard', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 108
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'h2',
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 109
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                  { to: '/can-ho/' + el.slug + '#menu2', className: 'name align-center', __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 109
                                    },
                                    __self: _this2
                                  },
                                  el.title
                                )
                              )
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-action', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 114
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'b',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 115
                              },
                              __self: _this2
                            },
                            '\u0110\xE1nh gi\xE1 :'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { margin: '0 5px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 115
                              },
                              __self: _this2
                            },
                            el.rating,
                            ' '
                          ),
                          ' ',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 115
                            },
                            __self: _this2
                          })
                        )
                      )
                    );
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 125
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'headerWr', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 126
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'header',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 127
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 128
                          },
                          __self: this
                        },
                        'CHUY\u1EC2N NH\u01AF\u1EE2NG C\u0102N H\u1ED8 KHU T'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 133
                    },
                    __self: this
                  },
                  muabankhut.map(function (el, index) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: index, className: 'col-sm-6 col-lg-4', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 136
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 137
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                          { to: '/can-ho/' + el.slug + '#menu2', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 138
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-image imgWr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 139
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 140
                              },
                              __self: _this2
                            })
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-content', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 143
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'listingInfo', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 144
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'figure',
                              { className: 'listerName', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 145
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                { to: '/can-ho/' + el.slug + '#menu2', className: 'agent-wrapper', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 146
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'agent-photo', src: '/imgs/icon_new.gif', width: 29, height: 19, alt: 'new icon', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 147
                                  },
                                  __self: _this2
                                })
                              )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'propertyStats', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 150
                                },
                                __self: _this2
                              },
                              !el.price2 && !el.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'lienhe', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 151
                                  },
                                  __self: _this2
                                },
                                'Li\xEAn h\u1EC7'
                              ),
                              !el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'curPrice', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 152
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'b',
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 152
                                    },
                                    __self: _this2
                                  },
                                  el.price1.toLocaleString(),
                                  ' VN\u0110'
                                )
                              ) : '',
                              el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'curPrice', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 153
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'span',
                                  { className: 'oldprice', style: { textDecoration: 'line-through' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 153
                                    },
                                    __self: _this2
                                  },
                                  el.price1.toLocaleString()
                                ),
                                ' ',
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'b',
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 153
                                    },
                                    __self: _this2
                                  },
                                  el.price2.toLocaleString(),
                                  ' VN\u0110'
                                )
                              ) : ""
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'vcard', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 155
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'h2',
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 156
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                  { to: '/can-ho/' + el.slug + '#menu2', className: 'name align-center', __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 156
                                    },
                                    __self: _this2
                                  },
                                  el.title
                                )
                              )
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-action', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 161
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'b',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 162
                              },
                              __self: _this2
                            },
                            '\u0110\xE1nh gi\xE1 :'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { margin: '0 5px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 162
                              },
                              __self: _this2
                            },
                            el.rating,
                            ' '
                          ),
                          ' ',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 162
                            },
                            __self: _this2
                          })
                        )
                      )
                    );
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 171
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'headerWr', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 172
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'header',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 173
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 174
                          },
                          __self: this
                        },
                        'CHUY\u1EC2N NH\u01AF\u1EE2NG C\u0102N H\u1ED8 KHU PARK HILL'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 179
                    },
                    __self: this
                  },
                  muabanparkhill.map(function (el, index) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: index, className: 'col-sm-6 col-lg-4', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 182
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 183
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                          { to: '/can-ho/' + el.slug + '#menu2', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 184
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-image imgWr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 185
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 186
                              },
                              __self: _this2
                            })
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-content', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 189
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'listingInfo', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 190
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'figure',
                              { className: 'listerName', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 191
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                { to: '/can-ho/' + el.slug + '#menu2', className: 'agent-wrapper', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 192
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'agent-photo', src: '/imgs/icon_new.gif', width: 29, height: 19, alt: 'new icon', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 193
                                  },
                                  __self: _this2
                                })
                              )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'propertyStats', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 196
                                },
                                __self: _this2
                              },
                              !el.price2 && !el.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'lienhe', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 197
                                  },
                                  __self: _this2
                                },
                                'Li\xEAn h\u1EC7'
                              ),
                              !el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'curPrice', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 198
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'b',
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 198
                                    },
                                    __self: _this2
                                  },
                                  el.price1.toLocaleString(),
                                  ' VN\u0110'
                                )
                              ) : '',
                              el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'curPrice', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 199
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'span',
                                  { className: 'oldprice', style: { textDecoration: 'line-through' }, __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 199
                                    },
                                    __self: _this2
                                  },
                                  el.price1.toLocaleString()
                                ),
                                ' ',
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'b',
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 199
                                    },
                                    __self: _this2
                                  },
                                  el.price2.toLocaleString(),
                                  ' VN\u0110'
                                )
                              ) : ""
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'vcard', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 201
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'h2',
                                {
                                  __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 202
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                  { to: '/can-ho/' + el.slug, className: 'name align-center', __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 202
                                    },
                                    __self: _this2
                                  },
                                  el.title
                                )
                              )
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-action', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 207
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'b',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 208
                              },
                              __self: _this2
                            },
                            '\u0110\xE1nh gi\xE1 :'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { margin: '0 5px' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 208
                              },
                              __self: _this2
                            },
                            el.rating,
                            ' '
                          ),
                          ' ',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 208
                            },
                            __self: _this2
                          })
                        )
                      )
                    );
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__["a" /* default */], { thutuc: thutucAside, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 218
                },
                __self: this
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container', __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', __source: {
                fileName: _jsxFileName,
                lineNumber: 224
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row mar-top', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 226
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'headerWr', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 227
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'header',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 228
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 229
                      },
                      __self: this
                    },
                    'TH\u1EE6 T\u1EE4C PH\xC1P L\xDD'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row m-top-10', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 234
                },
                __self: this
              },
              thutuctrangchu.map(function (el, index) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { key: index, className: 'col-lg-3 col-sm-4', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 237
                    },
                    __self: _this2
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 238
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'card-image imgWr', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 239
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                        { to: '/thutuc/' + el.slug + '#menu2', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 240
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 241
                          },
                          __self: _this2
                        })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'card-content', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 244
                        },
                        __self: _this2
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'listingInfo', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 245
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'vcard', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 246
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h2',
                            {
                              __source: {
                                fileName: _jsxFileName,
                                lineNumber: 247
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                              { to: '/thutuc/' + el.slug + '#menu2', className: 'name', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 247
                                },
                                __self: _this2
                              },
                              el.title
                            )
                          )
                        )
                      )
                    )
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/home/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        path = _ref.path;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var seo, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // process.env.BROWSER
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 15;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              _context.next = 5;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},chothue:getApartmentsByCategory(category:"cho-thue"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at},muabankhut:getApartmentsByCategory(category:"khu-t"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at},muabanparkhill:getApartmentsByCategory(category:"khu-park-hill"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at},thutuctrangchu:getAllPosts{title, coverUrl, slug, public, view, created_at},danhsachthutuc:getAllPosts{title, coverUrl, description, slug, public, view, created_at} }'
                }),
                credentials: 'include'
              });

            case 5:
              resp = _context.sent;
              _context.next = 8;
              return resp.json();

            case 8:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};

              if (data) {
                _context.next = 13;
                break;
              }

              throw new Error('Failed to load the news feed.');

            case 13:
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 15:
              return _context.abrupt('return', {
                title: seo.title || 'Trang chủ',
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */], { data: store.getState().data, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  })
                )
              });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
/* harmony default export */ __webpack_exports__["a"] = ({

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [__webpack_require__(369).default, __webpack_require__(365).default, __webpack_require__(367).default, __webpack_require__(363).default, __webpack_require__(376).default, __webpack_require__(372).default, __webpack_require__(354).default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(374).default],

  action: function action(_ref) {
    var _this = this;

    var next = _ref.next,
        store = _ref.store;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var route;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true && !window.numRendered) {
                window.numRendered = 0;
              }
              // Execute each child route until one of them return the result
              _context.next = 3;
              return next();

            case 3:
              route = _context.sent;


              // Provide default values for title, description etc.
              route.title = (route.title || 'Untitled Page') + ' - Chung c\u01B0 vinhomes';
              route.description = route.description || '';

              return _context.abrupt('return', route);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_css__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Login_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/login/Login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.container, style: { paddingTop: 50 }, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.formGroup, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.facebook, href: '/auth/facebook', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'svg',
                {
                  className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.icon,
                  width: '30',
                  height: '30',
                  viewBox: '0 0 30 30',
                  xmlns: 'http://www.w3.org/2000/svg',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
                  d: 'M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  },
                  __self: this
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                },
                'Log in with Facebook'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'strong',
            { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.lineThrough, __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: this
            },
            'OR'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'form',
            { className: 'ui large form', action: '/auth/login', method: 'POST',
              onSubmit: function onSubmit(e) {
                e.preventDefault();
                var $username = $(e.target).find('[name=username]').val();
                var $password = $(e.target).find('[name=password]').val();
                var data = {
                  username: $username,
                  password: $password
                };
                __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/auth/login', data).then(function (res) {
                  if (res.data) {
                    window.location.reload();
                  } else {
                    $('#loginError').text('Sai tên đăng nhập hoặc mật khẩu');
                  }
                }).catch(function (err) {
                  console.log(err);
                });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 44
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ui stacked segment', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'field', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'ui left icon input', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'user icon', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'E-mail', id: 'username', name: 'username', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    },
                    __self: this
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'field', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'ui left icon input', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'lock icon', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', placeholder: 'M\u1EADt kh\u1EA9u', id: 'password', name: 'password', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77
                    },
                    __self: this
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'button',
                { type: 'submit', className: 'ui fluid large teal submit button',
                  onClick: function onClick() {
                    console.log('on click !');
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                  },
                  __self: this
                },
                '\u0110\u0103ng nh\u1EADp'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'ui error message', __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Login.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Login_css___default.a)(Login));

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(59);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/login/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var title = 'Log In';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/login',

  action: function action(_ref) {
    var store = _ref.store;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    var user = store.getState().user;
    if (user && user.username) {
      return { redirect: '/' };
    }
    return {
      title: title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Login__["a" /* default */], { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        })
      )
    };
  }
});

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/notFound/NotFound.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var NotFound = function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            },
            this.props.title
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'p',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              },
              __self: this
            },
            'Sorry, the page you were trying to view does not exist.'
          )
        )
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound));

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(59);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/notFound/index.js';
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






var title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action: function action() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    return {
      title: title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        })
      ),
      status: 404
    };
  }
});

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(49);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/thutuc/View.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var thutuc = this.props.data.thutuc.value;
      var thutucAside = this.props.data.danhsachthutuc.value;
      var thutuctuongtu = this.props.data.thutuctuongtu.value;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'section',
          { className: 'inner-page', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-lg-9 col-sm-8 content-row shadow bg-white', style: { paddingTop: 15 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', style: { marginBottom: '15px 0' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'headerWr', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'header',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 20
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                          },
                          __self: this
                        },
                        thutuc.title
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row responsive', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { padding: 15 },
                    dangerouslySetInnerHTML: { __html: thutuc.body }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row', style: { marginBottom: '15px 0' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 31
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'headerWr', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'header',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 33
                        },
                        __self: this
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h2',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 34
                          },
                          __self: this
                        },
                        'C\xE1c th\u1EE7 t\u1EE5c kh\xE1c'
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'row responsive', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                      },
                      __self: this
                    },
                    thutuctuongtu.map(function (el, index) {
                      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { key: index, className: 'col-lg-6 col-sm-6', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                          },
                          __self: _this2
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 44
                            },
                            __self: _this2
                          },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-image imgWr', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 45
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                              { to: '/thutuc/' + el.slug + '#menu2', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 46
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title, __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 47
                                },
                                __self: _this2
                              })
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-content', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
                              },
                              __self: _this2
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'listingInfo', __source: {
                                  fileName: _jsxFileName,
                                  lineNumber: 51
                                },
                                __self: _this2
                              },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'vcard', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 52
                                  },
                                  __self: _this2
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'h2',
                                  {
                                    __source: {
                                      fileName: _jsxFileName,
                                      lineNumber: 53
                                    },
                                    __self: _this2
                                  },
                                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                    { to: '/thutuc/' + el.slug + '#menu2', className: 'name', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 53
                                      },
                                      __self: _this2
                                    },
                                    el.title
                                  )
                                )
                              )
                            )
                          )
                        )
                      );
                    })
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__["a" /* default */], { thutuc: thutucAside, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                },
                __self: this
              })
            )
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/routes/thutuc/index.js';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/thutuc/:slug',
  action: function action(_ref) {
    var _this = this;

    var store = _ref.store,
        params = _ref.params,
        path = _ref.path;
    return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var seo, resp, _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // process.env.BROWSER
              seo = {};

              if (!(!true || !store.getState().setting.ssr || true && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])())) {
                _context.next = 15;
                break;
              }

              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
              _context.next = 5;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},thutuc:getOnePost(slug: "' + params.slug + '"){title, coverUrl, body, slug, public, view, created_at},danhsachthutuc:getAllPosts{title, coverUrl, description, slug, public, view, created_at}, thutuctuongtu:getPostRelative{title, coverUrl, description, slug, public, view, created_at} }'
                }),
                credentials: 'include'
              });

            case 5:
              resp = _context.sent;
              _context.next = 8;
              return resp.json();

            case 8:
              _ref2 = _context.sent;
              data = _ref2.data;

              seo = data.seo || {};

              if (data) {
                _context.next = 13;
                break;
              }

              throw new Error('Failed to load the news feed.');

            case 13:
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
              store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());

            case 15:
              return _context.abrupt('return', {
                title: seo.title || 'Trang chủ',
                description: seo.description || '',
                seo: seo,
                component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */], { data: store.getState().data, headerName: mapSlugToName(params.slug), __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    },
                    __self: _this
                  })
                )
              });

            case 16:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

function mapSlugToName(slug) {
  if (slug === 'khu-t') {
    return "Mua bán & chuyển nhượng ( Căn hộ khu T )";
  } else if (slug === 'khu-park-hill') {
    return "Mua bán & chuyển nhượng ( Căn hộ khu Park Hill )";
  } else {
    return "Căn Hộ Cho Thuê";
  }
}

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(379);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;






function configureStore(initialState, helpersConfig) {
  var helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  var middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  var enhancer = void 0;

  if (true) {
    middleware.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__logger__["a" /* default */])());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    var devToolsExtension = function devToolsExtension(f) {
      return f;
    };
    if (true && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* compose */])(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* applyMiddleware */].apply(undefined, middleware), devToolsExtension);
  } else {
    enhancer = applyMiddleware.apply(undefined, middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* createStore */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', function () {
      return (
        // eslint-disable-next-line global-require
        store.replaceReducer(require('../reducers').default)
      );
    });
  }

  return store;
}

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(42);
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



function createGraphqlRequest(fetchKnowingCookie) {
  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(query, variables) {
      var fetchConfig, resp;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetchConfig = {
                method: 'post',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: query, variables: variables }),
                credentials: 'include'
              };
              _context.next = 3;
              return fetchKnowingCookie('/graphql', fetchConfig);

            case 3:
              resp = _context.sent;

              if (!(resp.status !== 200)) {
                _context.next = 6;
                break;
              }

              throw new Error(resp.statusText);

            case 6:
              return _context.abrupt('return', resp.json());

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  }();
}

function createFetchKnowingCookie(_ref2) {
  var cookie = _ref2.cookie;

  if (false) {
    return function (url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var isLocalUrl = /^\/($|[^/])/.test(url);

      // pass cookie only for itself.
      // We can't know cookies for other sites BTW
      if (isLocalUrl && options.credentials === 'include') {
        var headers = _extends({}, options.headers, {
          cookie: cookie
        });
        return fetch(url, _extends({}, options, { headers: headers }));
      }

      return fetch(url, options);
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */];
}

function createHelpers(config) {
  var fetchKnowingCookie = createFetchKnowingCookie(config);
  var graphqlRequest = createGraphqlRequest(fetchKnowingCookie);

  return {
    fetch: fetchKnowingCookie,
    graphqlRequest: graphqlRequest,
    history: config.history
  };
}

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_logger__);
/* harmony export (immutable) */ __webpack_exports__["a"] = createLogger;


function createLogger() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_logger__["createLogger"])({
    collapsed: true
  });
}

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__ = __webpack_require__(831);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_whatwg_fetch__);
/* unused harmony export Headers */
/* unused harmony export Request */
/* unused harmony export Response */
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



/* harmony default export */ __webpack_exports__["a"] = (self.fetch.bind(self));
var Headers = self.Headers;
var Request = self.Request;
var Response = self.Response;

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(198);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/components/Link/Link.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a" /* default */].push(_this.props.to);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Link, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['to', 'children']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        _extends({ href: to }, props, { onClick: this.handleClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }),
        children
      );
    }
  }]);

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};
Link.defaultProps = {
  onClick: null
};


/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Partials_Header__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Partials_Footer__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Partials_Slider__ = __webpack_require__(340);
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/components/Layout/Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// import Modal from '../Partials/Modal'



var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var that = this;
      if (true) {
        // $('#mapvinhome').modal('show');
        if (true) {
          window.slideout = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menuMobile'),
            'padding': 256,
            'tolerance': 70
          });
          //
          $('.menu-icon').on('click', function () {
            window.slideout.toggle();
            $('.menu-icon').toggleClass('open');
          });
        }
      }
    }
  }, {
    key: 'menuClick',
    value: function menuClick() {
      window.slideout.close();
      $('.menu-icon').removeClass('open');
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'wrapper', __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default.a, { showFastActions: true, maxProgress: 80, progressIncrease: 40, style: { backgroundColor: 'red', zIndex: 1000, height: '2px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'main',
          { id: 'panel', __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Partials_Header__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Partials_Slider__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'menu2', __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { id: 'container', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
                      { to: '/', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 56
                        },
                        __self: this
                      },
                      'TRANG CH\u1EE6'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 57
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
                      { to: '/danhsach/cho-thue', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 57
                        },
                        __self: this
                      },
                      'C\u0102N H\u1ED8 CHO THU\xCA'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
                      { to: '/danhsach/khu-t', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 59
                        },
                        __self: this
                      },
                      'CHUY\u1EC2N NH\u01AF\u1EE2NG KHU T'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
                      { to: '/danhsach/khu-park-hill', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 60
                        },
                        __self: this
                      },
                      'CHUY\u1EC2N NH\u01AF\u1EE2NG KHU PARK HILL'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
                      { to: '/danhsachthutuc', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 61
                        },
                        __self: this
                      },
                      'TH\u1EE6 T\u1EE4C PH\xC1P L\xDD '
                    )
                  )
                )
              )
            )
          ),
          this.props.children,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Partials_Footer__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'menu-icon', __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              },
              __self: this
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'mapvinhome', className: 'modal fade', role: 'dialog', __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'modal-dialog', role: 'document', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'modal-content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'modal-body', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'map', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/map.jpg', alt: 'Ban do vinhomes', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                      },
                      __self: this
                    })
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'nav',
          { id: 'menuMobile', onClick: this.menuClick, __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
            { to: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 85
              },
              __self: this
            },
            'TRANG CH\u1EE6'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
            { to: '/danhsach/cho-thue', style: { fontSize: 12 }, onClick: this.menuClick, __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: this
            },
            'C\u0102N H\u1ED8 CHO THU\xCA'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
            { to: '/danhsach/khu-t', style: { fontSize: 12 }, onClick: this.menuClick, __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              },
              __self: this
            },
            'CHUY\u1EC2N NH\u01AF\u1EE2NG KHU T'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
            { to: '/danhsach/khu-park-hill', style: { fontSize: 12 }, onClick: this.menuClick, __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              },
              __self: this
            },
            'CHUY\u1EC2N NH\u01AF\u1EE2NG KHU PARK HILL'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
            { to: '/danhsachthutuc', style: { fontSize: 12 }, onClick: this.menuClick, __source: {
                fileName: _jsxFileName,
                lineNumber: 97
              },
              __self: this
            },
            'TH\u1EE6 T\u1EE4C PH\xC1P L\xDD'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'phoneMobileIcon', __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'phonering-alo-phone phonering-alo-green phonering-alo-show hidden-xs visible-sm visible-md visible-lg', id: 'phonering-alo-phoneIcon', style: { left: '-40px', top: 470, display: 'block' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'phonering-alo-ph-circle', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 105
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'phonering-alo-ph-circle-fill', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'tel:0972564695', className: 'phonering-alo-ph-img-circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { href: 'tel:0972564695', className: 'pps-btn-img ', title: 'Li\xEAn h\u1EC7', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  },
                  __self: this
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'phonering-alo-phone phonering-alo-green phonering-alo-show visible-xs hidden-sm hidden-md hidden-lg', id: 'phonering-alo-phoneIcon', style: { right: '-40px', top: 70, display: 'block' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 112
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'phonering-alo-ph-circle', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'phonering-alo-ph-circle-fill', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 114
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: 'tel:0972564695', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 115
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: 'tel:0972564695', className: 'phonering-alo-ph-img-circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { href: 'tel:0972564695', className: 'pps-btn-img ', title: 'Li\xEAn h\u1EC7', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                  },
                  __self: this
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = needFetch;

function needFetch() {
  if (true && !window.firstTime) {
    console.log('first');
    window.firstTime = true;
    return false;
  }
  console.log('second');
  return true;
}

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(197)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n.Login-root-3Vk6J {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.Login-container-2IZbL {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n.Login-lead-25ZSA {\n  font-size: 1.25em;\n}\n.Login-formGroup-uHfQ- {\n  margin-bottom: 15px;\n}\n.Login-label-Mf2-c {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n.Login-input-HfRjv {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.Login-input-HfRjv:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-button-2JhAE {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n.Login-button-2JhAE:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n.Login-button-2JhAE:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n.Login-facebook-QGMxt {\n  border-color: #3b5998;\n  background: #3b5998;\n}\n.Login-facebook-QGMxt:hover {\n  background: #2d4373;\n}\n.Login-google-17cIx {\n  border-color: #dd4b39;\n  background: #dd4b39;\n}\n.Login-google-17cIx:hover {\n  background: #c23321;\n}\n.Login-twitter-21gEV {\n  border-color: #55acee;\n  background: #55acee;\n}\n.Login-twitter-21gEV:hover {\n  background: #2795e9;\n}\n.Login-icon-2Dc1q {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n.Login-lineThrough-2wlls {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n.Login-lineThrough-2wlls::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n.Login-lineThrough-2wlls::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n", "", {"version":3,"sources":["/Users/mac/Desktop/workspace/chungcu/src/routes/login/Login.css","/Users/mac/Desktop/workspace/chungcu/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;ACPH;;;;;;;GAOG;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;ADpBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;CAClB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,iBAAiB;EACjB,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,iFAAyE;EAAzE,yEAAyE;CAC1E;AAED;EACE,sBAAsB;EACtB,iFAAiF;CAClF;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,UAAU;EACV,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gBAAgB;CACjB;AAED;EACE,mCAAmC;CACpC;AAED;EACE,sBAAsB;EACtB,2CAA2C;CAC5C;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,oBAAoB;CAErB;AAED;EACE,oBAAoB;CACrB;AAED;EACE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,oBAAoB;EACpB,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,eAAe;CAChB;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,8BAA8B;EAC9B,YAAY;CACb","file":"Login.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 380px;\n}\n\n.lead {\n  font-size: 1.25em;\n}\n\n.formGroup {\n  margin-bottom: 15px;\n}\n\n.label {\n  display: inline-block;\n  margin-bottom: 5px;\n  max-width: 100%;\n  font-weight: 700;\n}\n\n.input {\n  display: block;\n  box-sizing: border-box;\n  padding: 10px 16px;\n  width: 100%;\n  height: 46px;\n  outline: 0;\n  border: 1px solid #ccc;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #616161;\n  font-size: 18px;\n  line-height: 1.3333333;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n\n.input:focus {\n  border-color: #0074c2;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.button {\n  display: block;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 16px;\n  width: 100%;\n  outline: 0;\n  border: 1px solid #373277;\n  border-radius: 0;\n  background: #373277;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 1.3333333;\n  cursor: pointer;\n}\n\n.button:hover {\n  background: rgba(54, 50, 119, 0.8);\n}\n\n.button:focus {\n  border-color: #0074c2;\n  box-shadow: 0 0 8px rgba(0, 116, 194, 0.6);\n}\n\n.facebook {\n  border-color: #3b5998;\n  background: #3b5998;\n  composes: button;\n}\n\n.facebook:hover {\n  background: #2d4373;\n}\n\n.google {\n  border-color: #dd4b39;\n  background: #dd4b39;\n  composes: button;\n}\n\n.google:hover {\n  background: #c23321;\n}\n\n.twitter {\n  border-color: #55acee;\n  background: #55acee;\n  composes: button;\n}\n\n.twitter:hover {\n  background: #2795e9;\n}\n\n.icon {\n  display: inline-block;\n  margin: -2px 12px -2px 0;\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  fill: currentColor;\n}\n\n.lineThrough {\n  position: relative;\n  z-index: 1;\n  display: block;\n  margin-bottom: 15px;\n  width: 100%;\n  color: #757575;\n  text-align: center;\n  font-size: 80%;\n}\n\n.lineThrough::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: -1;\n  margin-top: -5px;\n  margin-left: -20px;\n  width: 40px;\n  height: 10px;\n  background-color: #fff;\n  content: '';\n}\n\n.lineThrough::after {\n  position: absolute;\n  top: 49%;\n  z-index: -2;\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid #ddd;\n  content: '';\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "Login-root-3Vk6J",
	"container": "Login-container-2IZbL",
	"lead": "Login-lead-25ZSA",
	"formGroup": "Login-formGroup-uHfQ-",
	"label": "Login-label-Mf2-c",
	"input": "Login-input-HfRjv",
	"button": "Login-button-2JhAE",
	"facebook": "Login-facebook-QGMxt Login-button-2JhAE",
	"google": "Login-google-17cIx Login-button-2JhAE",
	"twitter": "Login-twitter-21gEV Login-button-2JhAE",
	"icon": "Login-icon-2Dc1q",
	"lineThrough": "Login-lineThrough-2wlls"
};

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(197)(true);
// imports


// module
exports.push([module.i, "/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */  /* Extra small screen / phone */  /* Small screen / tablet */  /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.NotFound-root-3_3g8 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-3FKMx {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["/Users/mac/Desktop/workspace/chungcu/src/routes/notFound/NotFound.css","/Users/mac/Desktop/workspace/chungcu/src/components/variables.css"],"names":[],"mappings":"AAAA;;;;;;;GAOG;;ACPH;;;;;;;GAOG;;AAEH;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E,EAErD,gCAAgC,EAChC,2BAA2B,EAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ADnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":["/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n","/**\n * React Starter Kit (https://www.reactstarterkit.com/)\n *\n * Copyright © 2014-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\n:root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "NotFound-root-3_3g8",
	"container": "NotFound-container-3FKMx"
};

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(617);
    var insertCss = __webpack_require__(203);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./Login.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./Login.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(618);
    var insertCss = __webpack_require__(203);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./NotFound.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./NotFound.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(309);
module.exports = __webpack_require__(308);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(107);
/* harmony export (immutable) */ __webpack_exports__["a"] = setData;
/* eslint-disable import/prefer-default-export */



function setData() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */],
    payload: {
      value: value
    }
  };
}

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_youtube__ = __webpack_require__(794);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aside; });
var _jsxFileName = '/Users/mac/Desktop/workspace/chungcu/src/components/Partials/Aside.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Aside = function (_React$Component) {
  _inherits(Aside, _React$Component);

  function Aside(props) {
    _classCallCheck(this, Aside);

    return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).call(this, props));
  }

  _createClass(Aside, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var thutuc = this.props.thutuc || [];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'aside',
        { className: 'col-lg-3 col-sm-4 sidebar', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'widget widget-subscribe panel media pad-all', style: { padding: '0 !important' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'newsletter', __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              { style: { textAlign: 'center', background: '#00303a', color: 'white', fontWeight: 'bold', margin: '0 !important', padding: '5px 0', marginBottom: 10 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              },
              'CHUY\xCAN VI\xCAN T\u01AF V\u1EA4N'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', style: { textAlign: 'center', fontWeight: 'bold', marginTop: 10, fontSize: 14 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: this
              },
              'Nguy\u1EC5n V\u0103n Chung'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'row', style: { padding: '5px 5px !important' }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-sm-12', style: { paddingTop: 0 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: '#FF4136', fontSize: 24 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                      },
                      __self: this
                    },
                    '0972.564.695'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { textAlign: 'center' }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: '#FF4136', fontSize: 24 }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                      },
                      __self: this
                    },
                    '0906.234.912'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'widget widget-subscribe panel media pad-all', style: { padding: '0 !important', cursor: 'pointer' },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'newsletter', __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_youtube__["a" /* default */], {
                videoId: '-yylfXD4maM',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                },
                __self: this
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'widget widget-subscribe panel media pad-all', style: { padding: '0 !important' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/aside2.jpg', alt: 'aside1', style: { width: '100%', height: 'auto' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'widget widget-subscribe panel media pad-all', style: { padding: '0 !important' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/aside1.jpg', alt: 'aside1', style: { width: '100%', height: 'auto' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'widget widget-subscribe panel media pad-all', style: { padding: '0 !important' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'newsletter', __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h4',
              { style: { textAlign: 'center', background: '#00303a', color: 'white', fontWeight: 'bold', margin: '0 !important', padding: '5px 0', marginBottom: 10 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                },
                __self: this
              },
              'Th\u1EE7 t\u1EE5c ph\xE1p l\xFD'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { id: 'thutuc-aside', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  },
                  __self: this
                },
                thutuc.map(function (el, index) {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { key: index, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      },
                      __self: _this2
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                      { to: '/thutuc/' + el.slug, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 60
                        },
                        __self: _this2
                      },
                      el.title
                    )
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Aside;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ })

},[839]);
//# sourceMappingURL=client.js.map