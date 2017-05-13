require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 202);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_node_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(18);
/* unused harmony reexport Request */
/* unused harmony reexport Headers */
/* unused harmony reexport Response */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return localFetch; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





__WEBPACK_IMPORTED_MODULE_1_node_fetch___default.a.Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;
__WEBPACK_IMPORTED_MODULE_1_node_fetch__["Response"].Promise = __WEBPACK_IMPORTED_MODULE_0_bluebird___default.a;

function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return `http://${__WEBPACK_IMPORTED_MODULE_2__config__["d" /* host */]}${url}`;
}

function localFetch(url, options) {
  return __WEBPACK_IMPORTED_MODULE_1_node_fetch___default()(localUrl(url), options);
}



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("graphql-iso-date");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_history__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

class Link extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.handleClick = event => {
      if (this.props.onClick) {
        this.props.onClick(event);
      }

      if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
        return;
      }

      if (event.defaultPrevented === true) {
        return;
      }

      event.preventDefault();
      __WEBPACK_IMPORTED_MODULE_1__core_history__["a" /* default */].push(this.props.to);
    }, _temp;
  }

  render() {
    const _props = this.props,
          { to, children } = _props,
          props = _objectWithoutProperties(_props, ['to', 'children']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      _extends({ href: to }, props, { onClick: this.handleClick }),
      children
    );
  }
}

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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory__ = __webpack_require__(177);
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
/* harmony default export */ __webpack_exports__["a"] = (false && __WEBPACK_IMPORTED_MODULE_0_history_createBrowserHistory___default()());

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var AdminRequire = Promise.resolve().then((require => {
  return {
    App: __webpack_require__(101).default,
    Dashboard: __webpack_require__(115).default,
    Library: __webpack_require__(119).default,
    Setting: __webpack_require__(130).default,
    Editor: __webpack_require__(117).default,
    ListNews: __webpack_require__(125).default,
    EditNews: __webpack_require__(124).default,
    EditFoods: __webpack_require__(121).default,
    ListFoods: __webpack_require__(122).default,

    EditApartment: __webpack_require__(103).default,
    ListApartment: __webpack_require__(104).default,

    EditApartment2: __webpack_require__(106).default,
    ListApartment2: __webpack_require__(107).default,

    EditApartment3: __webpack_require__(109).default,
    ListApartment3: __webpack_require__(110).default,

    EditCategory: __webpack_require__(112).default,
    ListCategories: __webpack_require__(113).default,

    Seo: __webpack_require__(128).default
  };
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

module.exports = AdminRequire;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = needFetch;

function needFetch() {
  if (false) {
    console.log('first');
    window.firstTime = true;
    return false;
  }
  console.log('second');
  return true;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(194);


const Dragger = __WEBPACK_IMPORTED_MODULE_2_antd__["Upload"].Dragger;

var list = [];
for (let i = 0; i < 50; i++) {
  list.push(i);
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image'
};

class ImageSelect extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      filter: '',
      time: new Date().toISOString(),
      imgs: [],
      selectedImage: {}
    };
    this.fetchImage(40, this.state.time);
  }

  fetchImage(num, time, reset = true) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + _this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prevState) {
        if (data.listImage.length > 0) {
          let newImgs;
          if (reset) {
            newImgs = data.listImage;
          } else {
            newImgs = prevState.imgs.concat(data.listImage);
          }
          return _extends({}, prevState, {
            imgs: newImgs,
            time: newImgs[newImgs.length - 1].created_at
          });
        }
      });
    })();
  }
  showModal(el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter() {
    alert('loading more ...');
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs;
        newImgs.unshift(info.file.response);
        return _extends({}, prevState, {
          imgs: newImgs
        });
      });
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 16 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
            {
              onClick: () => {
                this.setState((preState, curProps) => {
                  return _extends({}, preState, {
                    uploadArea: !preState.uploadArea
                  });
                });
              }
            },
            'Th\xEAm \u1EA3nh'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], { size: 'large', placeholder: 'Search by name',
            onChange: e => {
              let newInput = e.target.value;
              this.setState(prevState => {
                return _extends({}, prevState, {
                  filter: newInput
                });
              });
              this.fetchImage(40, this.state.time);
            }
          })
        )
      ),
      this.state.uploadArea && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginTop: 16, height: 180 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Dragger,
            _extends({}, props, {
              onChange: info => this.onChange(info),
              beforeUpload: this.beforeUpload
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-drag-icon' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: 'inbox' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-text' },
              'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-hint' },
              'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { background: '#ECECEC' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          null,
          this.state.imgs.map((el, key) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
              { xs: 12, sm: 6, md: 4, lg: 4, key: key, className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
                { bordered: false, className: 'imgWr',
                  onClick: () => this.props.handleSelect(el)
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/small/" + el.name })
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            { xs: 12, sm: 6, md: 4, lg: 4, className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr',
                onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://www.loadebar.com/images/template/load-more.png' })
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageSelect);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-redux-loading-bar");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Partials_Header__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Partials_Footer__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Partials_Slider__ = __webpack_require__(60);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// import Modal from '../Partials/Modal'



class Layout extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  componentDidMount() {
    let that = this;
    if (false) {
      // $('#mapvinhome').modal('show');
      if (process.env.BROWSER) {
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

  menuClick() {
    window.slideout.close();
    $('.menu-icon').removeClass('open');
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'wrapper' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default.a, { showFastActions: true, maxProgress: 80, progressIncrease: 40, style: { backgroundColor: 'red', zIndex: 1000, height: '2px' } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'main',
        { id: 'panel' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Partials_Header__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Partials_Slider__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'menu2' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'container' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'nav',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
                    { to: '/' },
                    'TRANG CH\u1EE6'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
                    { to: '/danhsach/cho-thue' },
                    'C\u0102N H\u1ED8 CHO THU\xCA'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
                    { to: '/danhsach/khu-t' },
                    'CHUY\u1EC2N NH\u01AF\u1EE2NG KHU T'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
                    { to: '/danhsach/khu-park-hill' },
                    'CHUY\u1EC2N NH\u01AF\u1EE2NG KHU PARK HILL'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
                    { to: '/danhsachthutuc' },
                    'TH\u1EE6 T\u1EE4C PH\xC1P L\xDD '
                  )
                )
              )
            )
          )
        ),
        this.props.children,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Partials_Footer__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'menu-icon' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', null)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'mapvinhome', className: 'modal fade', role: 'dialog' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'modal-dialog', role: 'document' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'modal-content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'modal-body' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'map' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/map.jpg', alt: 'Ban do vinhomes' })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'nav',
        { id: 'menuMobile', onClick: this.menuClick },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
          { to: '/' },
          'TRANG CH\u1EE6'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
          { to: '/danhsach/cho-thue', style: { fontSize: 12 }, onClick: this.menuClick },
          'C\u0102N H\u1ED8 CHO THU\xCA'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
          { to: '/danhsach/khu-t', style: { fontSize: 12 }, onClick: this.menuClick },
          'CHUY\u1EC2N NH\u01AF\u1EE2NG KHU T'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
          { to: '/danhsach/khu-park-hill', style: { fontSize: 12 }, onClick: this.menuClick },
          'CHUY\u1EC2N NH\u01AF\u1EE2NG KHU PARK HILL'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__Link__["a" /* default */],
          { to: '/danhsachthutuc', style: { fontSize: 12 }, onClick: this.menuClick },
          'TH\u1EE6 T\u1EE4C PH\xC1P L\xDD'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'phoneMobileIcon' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'phonering-alo-phone phonering-alo-green phonering-alo-show hidden-xs visible-sm visible-md visible-lg', id: 'phonering-alo-phoneIcon', style: { left: '-40px', top: 470, display: 'block' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'phonering-alo-ph-circle' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'phonering-alo-ph-circle-fill' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'tel:0972564695', className: 'phonering-alo-ph-img-circle' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { href: 'tel:0972564695', className: 'pps-btn-img ', title: 'Li\xEAn h\u1EC7' })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'phonering-alo-phone phonering-alo-green phonering-alo-show visible-xs hidden-sm hidden-md hidden-lg', id: 'phonering-alo-phoneIcon', style: { right: '-40px', top: 70, display: 'block' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'phonering-alo-ph-circle' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'phonering-alo-ph-circle-fill' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', { href: 'tel:0972564695' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: 'tel:0972564695', className: 'phonering-alo-ph-img-circle' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { href: 'tel:0972564695', className: 'pps-btn-img ', title: 'Li\xEAn h\u1EC7' })
            )
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(3);




const Dragger = __WEBPACK_IMPORTED_MODULE_1_antd__["Upload"].Dragger;

class ImageUpload extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      uploadArea: false,
      visible: false,
      selectedImage: {}
    };
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.props.handleUpload(info.file.response);
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Dragger,
      {
        name: 'image',
        multiple: this.props.isMultiple,
        showUploadList: false,
        action: '/upload/image',
        onChange: info => this.onChange(info),
        beforeUpload: this.beforeUpload
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-drag-icon' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'inbox' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-text' },
        'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { className: 'ant-upload-hint' },
        'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageUpload);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("graphql-type-json");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("universal-router");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable max-len */

const port = process.env.PORT || 3999;
/* harmony export (immutable) */ __webpack_exports__["a"] = port;

const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
/* harmony export (immutable) */ __webpack_exports__["d"] = host;


const databaseUrl = process.env.DATABASE_URL || 'sqlite:database.sqlite';
/* harmony export (immutable) */ __webpack_exports__["c"] = databaseUrl;


const mongoDBURL = 'mongodb://localhost/chungcu';
/* harmony export (immutable) */ __webpack_exports__["b"] = mongoDBURL;


const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID }

};
/* unused harmony export analytics */


const auth = {

  jwt: { secret: process.env.JWT_SECRET || 'React Starter Kit' },

  // https://developers.facebook.com/
  facebook: {
    id: process.env.FACEBOOK_APP_ID || '186244551745631',
    secret: process.env.FACEBOOK_APP_SECRET || 'a970ae3240ab4b9b8aae0f9f0661c6fc'
  },

  // https://cloud.google.com/console/project
  google: {
    id: process.env.GOOGLE_CLIENT_ID || '251410730550-ahcg0ou5mgfhl8hlui1urru7jn5s12km.apps.googleusercontent.com',
    secret: process.env.GOOGLE_CLIENT_SECRET || 'Y8yR9yZAhm9jQ8FKAL8QIEcd'
  },

  // https://apps.twitter.com/
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'Ie20AZvLJI2lQD5Dsgxgjauns',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'KTZ6cxoKnEakQCeSpZlaUCJWGAlTEBJj0y2EMkUBujA7zWSvaQ'
  }

};
/* harmony export (immutable) */ __webpack_exports__["e"] = auth;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable import/prefer-default-export */
const SET_SETTING = 'SET_SETTING';
/* harmony export (immutable) */ __webpack_exports__["c"] = SET_SETTING;

const SET_RUNTIME_VARIABLE = 'SET_RUNTIME_VARIABLE';
/* harmony export (immutable) */ __webpack_exports__["b"] = SET_RUNTIME_VARIABLE;


const SET_DATA = 'SET_DATA';
/* harmony export (immutable) */ __webpack_exports__["a"] = SET_DATA;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ImageSelect__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CKEditor; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* global CKEDITOR */





class CKEditor extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      oldEditorSize: 0,
      isEndEditor: false,
      showModalSelectImage: false,
      selectImageType: ''
    };
    this.elementName = "editor_" + this.props.id;
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleSelectImage(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        modalSelectImage: false
      });
    });
    this.editor.insertHtml('<p style="text-align:center"><img alt="eS9cTTQzZT-3.jpg" src="' + '/image/' + img.name + '" /></p><br/>');
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { className: 'padding-5' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', {
            id: 'addImage',
            style: { marginRight: 10 },
            onClick: () => this.showModalSelectImage('editor')
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_resize_detector___default.a, { handleWidth: true, handleHeight: true, onResize: (w, h) => {
              let diff = h - this.state.oldEditorSize;
              if (this.state.isEndEditor && diff > 0) {
                var y = $(window).scrollTop();
                $(window).scrollTop(y + diff);
              }
              this.setState({
                oldEditorSize: h
              });
            } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'toolbarLocation' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { name: this.elementName, defaultValue: this.props.value }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { height: 20 } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_visibility_sensor___default.a, { onChange: isVisible => {
              this.setState({
                isEndEditor: !isVisible
              });
            } })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
            {
              style: { top: 30 },
              width: '90%',
              title: 'Basic Modal', visible: this.state.modalSelectImage,
              onOk: this.handleOk, onCancel: this.handleCancel
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
          )
        )
      )
    );
  }

  componentDidMount() {
    let configuration = {
      // removePlugins : 'magicline',
      extraPlugins: 'autogrow,image2,sharedspace,colorbutton,justify,font',
      uploadUrl: '/upload/imageCKEditor',
      disallowedContent: 'img{width,height}',
      sharedSpaces: {
        top: 'toolbarLocation'
      }
    };
    this.editor = CKEDITOR.replace(this.elementName, configuration);
    CKEDITOR.instances[this.elementName].on("change", function () {
      let data = CKEDITOR.instances[this.elementName].getData();
      this.props.onChange(data);
    }.bind(this));

    CKEDITOR.on('instanceReady', function (ev) {
      ev.editor.focus();
    });
    $("#toolbarLocation").sticky({ topSpacing: 0 });

    this.editor.addCommand("mySimpleCommand", { // create named command
      exec: function (edt) {
        $("#addImage").trigger("click");
      }
    });

    this.editor.ui.addButton('SuperButton', { // add new button and bind our command
      label: "Click me",
      command: 'mySimpleCommand',
      toolbar: 'insert',
      icon: '/assets/add-image.png'
    });
  }

  componentWillUnmount() {
    console.log('destroy');
    this.editor.destroy();
  }

}



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_slug__);




class EditableTagGroup extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleClose = removedTag => {
      const tags = this.state.tags.filter(tag => tag.slug !== removedTag);
      this.setState({ tags });
      this.props.handleChange(tags || []);
    };

    this.showInput = () => {
      this.setState({ inputVisible: true }, () => this.input.focus());
    };

    this.handleInputChange = e => {
      this.setState({ inputValue: e.target.value });
    };

    this.handleInputConfirm = () => {
      const state = this.state;
      const inputValue = state.inputValue;
      let tags = state.tags;
      if (inputValue && indexByField(tags, 'slug', __WEBPACK_IMPORTED_MODULE_2_slug___default()(inputValue, { lower: true }))) {
        tags = [...tags, { name: inputValue, slug: __WEBPACK_IMPORTED_MODULE_2_slug___default()(inputValue, { lower: true }) }];
      }
      this.setState({
        tags,
        inputVisible: false,
        inputValue: ''
      });
      this.props.handleChange(tags || []);
    };

    this.saveInputRef = input => this.input = input;

    this.state = {
      tags: this.props.defaultValue || [],
      inputVisible: false,
      inputValue: ''
    };
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      tags.map((tag, index) => {
        const isLongTag = tag.name.length > 20;
        const tagElem = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tag"],
          { key: index, closable: true, afterClose: () => this.handleClose(tag) },
          isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name
        );
        return isLongTag ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tooltip"],
          { title: tag.name },
          tagElem
        ) : tagElem;
      }),
      inputVisible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
        ref: this.saveInputRef,
        type: 'text', size: 'small',
        style: { width: 78 },
        value: inputValue,
        onChange: this.handleInputChange,
        onBlur: this.handleInputConfirm,
        onPressEnter: this.handleInputConfirm
      }),
      !inputVisible && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        { size: 'small', type: 'dashed', onClick: this.showInput },
        '+ New Tag'
      )
    );
  }
}

function indexByField(list = [], fieldName, value) {
  let lenth = list.length;
  for (let i = 0; i < lenth; i++) {
    if (list[i][fieldName] === value) {
      return i;
    }
  }
  return -1;
}

/* harmony default export */ __webpack_exports__["a"] = (EditableTagGroup);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["a"] = setData;
/* eslint-disable import/prefer-default-export */



function setData(value = {}) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */],
    payload: {
      value
    }
  };
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_youtube__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_youtube___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_youtube__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aside; });




class Aside extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const thutuc = this.props.thutuc || [];
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'aside',
      { className: 'col-lg-3 col-sm-4 sidebar' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'widget widget-subscribe panel media pad-all', style: { padding: '0 !important' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'newsletter' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { style: { textAlign: 'center', background: '#00303a', color: 'white', fontWeight: 'bold', margin: '0 !important', padding: '5px 0', marginBottom: 10 } },
            'CHUY\xCAN VI\xCAN T\u01AF V\u1EA4N'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', style: { textAlign: 'center', fontWeight: 'bold', marginTop: 10, fontSize: 14 } },
            'Nguy\u1EC5n V\u0103n Chung'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row', style: { padding: '5px 5px !important' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-sm-12', style: { paddingTop: 0 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { textAlign: 'center' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'b',
                  { style: { color: '#FF4136', fontSize: 24 } },
                  '0972.564.695'
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'widget widget-subscribe panel media pad-all', style: { padding: '0 !important', cursor: 'pointer' }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'newsletter' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_youtube___default.a, {
              videoId: '-yylfXD4maM'
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'widget widget-subscribe panel media pad-all', style: { padding: '0 !important' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/aside2.jpg', alt: 'aside1', style: { width: '100%', height: 'auto' } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'widget widget-subscribe panel media pad-all', style: { padding: '0 !important' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/aside1.jpg', alt: 'aside1', style: { width: '100%', height: 'auto' } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'widget widget-subscribe panel media pad-all', style: { padding: '0 !important' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'newsletter' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            { style: { textAlign: 'center', background: '#00303a', color: 'white', fontWeight: 'bold', margin: '0 !important', padding: '5px 0', marginBottom: 10 } },
            'Th\u1EE7 t\u1EE5c ph\xE1p l\xFD'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { id: 'thutuc-aside' },
              thutuc.map((el, index) => {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  { key: index },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                    { to: '/thutuc/' + el.slug },
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
}



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(18);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const sequelize = new __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a(__WEBPACK_IMPORTED_MODULE_1__config__["c" /* databaseUrl */], {
  define: {
    freezeTableName: true
  }
});

/* harmony default export */ __webpack_exports__["a"] = (sequelize);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(169);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(170);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(168);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Isomorphic CSS style loader for Webpack
 *
 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

var prefix = 's';
var inserted = {};

// Base64 encoding and decoding - The "Unicode Problem"
// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  }));
}

/**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
function removeCss(ids) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;

      if (--inserted[id] <= 0) {
        var elem = document.getElementById(prefix + id);
        if (elem) {
          elem.parentNode.removeChild(elem);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
function insertCss(styles) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$replace = _ref.replace,
      replace = _ref$replace === undefined ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === undefined ? false : _ref$prepend;

  var ids = [];
  for (var i = 0; i < styles.length; i++) {
    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];

    var id = moduleId + '-' + i;

    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;

    var elem = document.getElementById(prefix + id);
    var create = false;

    if (!elem) {
      create = true;

      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = prefix + id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;
    if (sourceMap && btoa) {
      // skip IE9 and below, see http://caniuse.com/atob-btoa
      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
      cssText += '\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);


const SHOW_PARENT = __WEBPACK_IMPORTED_MODULE_1_antd__["TreeSelect"].SHOW_PARENT;

const treeData = [{
  label: 'Node1',
  value: '0-0',
  key: '0-0',
  children: [{
    label: 'Child Node1',
    value: '0-0-0',
    key: '0-0-0'
  }]
}, {
  label: 'Node2',
  value: '0-1',
  key: '0-1',
  children: [{
    label: 'Child Node3',
    value: '0-1-0',
    key: '0-1-0'
  }, {
    label: 'Child Node4',
    value: '0-1-1',
    key: '0-1-1'
  }, {
    label: 'Child Node5',
    value: '0-1-2',
    key: '0-1-2'
  }]
}];

class TreeSelectComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      value: ['0-0-0']
    }, this.onChange = value => {
      console.log('onChange ', value, arguments);
      this.setState({ value });
    }, _temp;
  }

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      multiple: true,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: 300
      }
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["TreeSelect"], tProps);
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (TreeSelectComponent);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _en_US = __webpack_require__(165);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(33);

var _en_US4 = _interopRequireDefault(_en_US3);

var _objectAssign = __webpack_require__(203);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Merge into a locale object
var locale = {
    lang: (0, _objectAssign2["default"])({
        placeholder: 'Select date',
        rangePlaceholder: ['Start date', 'End date']
    }, _en_US2["default"]),
    timePickerLocale: (0, _objectAssign2["default"])({}, _en_US4["default"])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports["default"] = locale;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var locale = {
    placeholder: 'Select time'
};
exports["default"] = locale;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sequelize__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserLogin__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserClaim__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserProfile__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__User__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__UserLogin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__UserClaim__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__UserProfile__["a"]; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_2__UserLogin__["a" /* default */], {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasMany(__WEBPACK_IMPORTED_MODULE_3__UserClaim__["a" /* default */], {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */].hasOne(__WEBPACK_IMPORTED_MODULE_4__UserProfile__["a" /* default */], {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

function sync(...args) {
  return __WEBPACK_IMPORTED_MODULE_0__sequelize__["a" /* default */].sync(...args);
}

/* harmony default export */ __webpack_exports__["a"] = ({ sync });


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  category: { type: String, default: 'su-kien' },
  slug: { type: String, required: true, unique: true, index: true },
  title: String,
  public: { type: Boolean, default: false },
  coverUrl: String,
  description: String,
  body: String,
  view: { type: Number, default: 0 },
  tags: [Schema.Types.Mixed],
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Post', schema);

module.exports = model;

// get ( news )

module.exports.getPosts = (root, { page }) => {
  let listCategoryInNews = ['su-kien', 'tin-tuc-tong-hop'];

  return new Promise((resolve, reject) => {

    model.count({}).exec((err, count) => {
      if (err) return reject(err);
      model.find({}).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getNewsInCategory = (root, { page, slug }) => {

  return new Promise((resolve, reject) => {

    model.count({ category: slug }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: slug }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

module.exports.getOnePost = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};
module.exports.getAllPosts = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

// get ( food )

module.exports.getFoodNews = (root, { page }) => {
  let listCategoryInNews = ['mon-ngon-tu-com', 'cach-lam-mon-ngon-tai-nha'];
  return new Promise((resolve, reject) => {
    model.count({ category: { $in: listCategoryInNews } }).exec((err, count) => {
      if (err) return reject(err);
      model.find({ category: {
          $in: listCategoryInNews
        } }).sort({ created_at: -1 }).skip((page - 1) * 16).limit(16).exec((err, res) => {
        err ? reject(err) : resolve({
          page: page,
          totalPage: Math.floor(count / 16) + 1,
          data: res
        });
      });
    });
  });
};

// mutation

module.exports.newPost = (root, { category, slug, title, coverUrl, description, body, tags }) => {
  let data = {
    category,
    slug,
    title,
    coverUrl,
    description,
    body,
    tags
  };
  return new Promise((resolve, reject) => {
    model.create(data, (err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getPostRelative = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.aggregate([{ "$sample": {
        size: 6
      } }]).exec((err, listPost) => {
      if (err) reject(err);else resolve(listPost);
    });
  });
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Post',
  description: 'Post object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    category: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    public: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    coverUrl: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    title: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    description: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    body: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    view: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    tags: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a)
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7);

var schema = new mongoose.Schema({
  id: { type: String },
  ssr: { type: Boolean, default: true },
  css: { type: String, default: '' },
  adminId: { type: String, default: '100004231235930' },
  emailAdmin: { type: String, default: 'luanlv2591@gmail.com' },
  scriptTop: { type: String, default: '' },
  scriptBottom: { type: String, default: '' }
}, {
  collection: 'setting'
});

let model = mongoose.model('Setting', schema);

module.exports = model;

module.exports.getSetting = () => {
  return new Promise((resolve, reject) => {
    model.findOne({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.update = (root, { ssr }) => {
  let query = {};
  if (ssr !== undefined) query.ssr = ssr;
  return new Promise((resolve, reject) => {
    model.findOneAndUpdate({ id: 'setting' }, { $set: query }, { returnNewDocument: true, new: true }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);




// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Setting',
  description: 'Setting object',
  fields: () => ({
    id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    ssr: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    css: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    scriptTop: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    adminId: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    emailAdmin: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    scriptBottom: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    }
  })
}));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(158);
    var insertCss = __webpack_require__(26);

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
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./ErrorPage.css", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/index.js??ref--2-2!./ErrorPage.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("gm");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("react-super-responsive-table");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_graphql__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_express_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_express_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pretty_error__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pretty_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pretty_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_App__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Html__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_HtmlAdmin__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_passport__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_models__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__data_schema__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_router__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_json__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__assets_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__assets_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_bluebird__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_bluebird__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__store_configureStore__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__actions_runtime__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__actions_setting__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__config__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_mongoose__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










// import UniversalRouter from 'universal-router';










 // eslint-disable-line import/no-unresolved





const session = __webpack_require__(176);
const MongoStore = __webpack_require__(172)(session);
var routeCache = __webpack_require__(198);

//mongoose

__WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.Promise = __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a;
connect();
const Setting = __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.model('Setting');
// var User =  mongoose.model('User', require('./data/models/user/userSchema'))
//end


const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------

var jsonParser = __WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = __WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true, limit: 1024 * 1024 * 20, type: 'application/x-www-form-urlencoding' });

app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static(__WEBPACK_IMPORTED_MODULE_0_path___default.a.join(__dirname, 'public')));
app.use('/assets', (req, res) => {
  res.sendStatus(400);
});

app.use(__WEBPACK_IMPORTED_MODULE_3_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(session({
  cookie: { maxAge: 24 * 3600 * 1000 * 30 },
  resave: true,
  saveUninitialized: false,
  secret: 'luuVANluan',
  ttl: 7 * 24 * 60 * 60,
  store: new MongoStore({ mongooseConnection: __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connection })
}));
app.use(__WEBPACK_IMPORTED_MODULE_14__core_passport__["a" /* default */].initialize());
app.use(__WEBPACK_IMPORTED_MODULE_14__core_passport__["a" /* default */].session());
app.use(__WEBPACK_IMPORTED_MODULE_2_cookie_parser___default()());
//
// Authentication
// -----------------------------------------------------------------------------

if (false) {
  app.enable('trust proxy');
}

app.use('/image', __webpack_require__(150));
app.use('/api', __webpack_require__(148));
app.use('/upload', __webpack_require__(152));
app.use('/auth', __webpack_require__(149));
//
// Register API middleware
// -----------------------------------------------------------------------------

app.use('/graphql', __WEBPACK_IMPORTED_MODULE_4_express_graphql___default()(req => ({
  schema: __WEBPACK_IMPORTED_MODULE_16__data_schema__["a" /* default */],
  graphiql: false,
  rootValue: { request: req },
  pretty: false
})));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

app.get('*', routeCache.cacheSeconds(20), (() => {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    let routeUrl = req.originalUrl;
    let isAdmin = routeUrl.slice(0, 6) === '/admin';
    if (isAdmin) {
      if (!req.user || !req.user.isAdmin) {
        // return res.redirect('/login')
      }
    }
    try {
      let setting = yield Setting.findOne({});
      const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__store_configureStore__["a" /* default */])({
        data: {
          post: {
            needUpdate: true,
            value: {}
          },
          posts: {
            needUpdate: true,
            value: {}
          },
          muabankhut: {
            needUpdate: true,
            value: []
          },
          muabanparkhill: {
            needUpdate: true,
            value: []
          },
          chothue: {
            needUpdate: true,
            value: []
          },
          danhsachcanho: {
            needUpdate: true,
            value: []
          },
          canho: {
            needUpdate: true,
            value: []
          },
          thutuctrangchu: {
            needUpdate: true,
            value: {
              data: []
            }
          },

          danhsachthutuc: {
            needUpdate: true,
            value: []
          },
          thutuc: {
            needUpdate: true,
            value: {}
          },
          gioithieu: {
            needUpdate: true,
            value: {}
          },
          canhotuongtu: {
            needUpdate: true,
            value: []
          },
          thutuctuongtu: {
            needUpdate: true,
            value: []
          }
        },
        user: req.user || null
      }, {
        cookie: req.headers.cookie
      });
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_22__actions_setting__["a" /* setSetting */])({
        value: setting.ssr || true
      }));
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_21__actions_runtime__["a" /* setRuntimeVariable */])({
        name: 'initialNow',
        value: Date.now()
      }));
      const css = new Set();

      // Global (context) variables that can be easily accessed from any React component
      // https://facebook.github.io/react/docs/context.html
      const context = {
        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        insertCss: function (...styles) {
          // eslint-disable-next-line no-underscore-dangle
          styles.forEach(function (style) {
            return css.add(style._getCss());
          });
        },
        // Initialize a new Redux store
        // http://redux.js.org/docs/basics/UsageWithReact.html
        store
      };

      const route = yield __WEBPACK_IMPORTED_MODULE_17__core_router__["a" /* default */].resolve(_extends({}, context, {
        path: req.path,
        query: req.query
      }));

      if (route.redirect) {
        res.redirect(route.status || 302, route.redirect);
        return;
      }

      const data = _extends({}, route);

      if (data.disableSSR || !store.getState().setting.ssr) {
        data.children = '';
      } else {
        data.children = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__components_App__["a" /* default */],
          { context: context },
          route.component
        ));
      }

      data.styles = [{ id: 'css', cssText: [...css].join('') }];

      data.scripts = [__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a.vendor.js, __WEBPACK_IMPORTED_MODULE_18__assets_json___default.a.client.js];
      data.state = context.store.getState();
      if (__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a[route.chunk]) {
        data.scripts.push(__WEBPACK_IMPORTED_MODULE_18__assets_json___default.a[route.chunk].js);
      }

      let version = 25;

      if (isAdmin) {
        const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_HtmlAdmin__["a" /* default */], _extends({ v: version }, data, { isAdmin: isAdmin })));
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      } else {
        const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Html__["a" /* default */], _extends({ v: version }, data, { isAdmin: isAdmin, scriptTop: setting.scriptTop || '', scriptBottom: setting.scriptBottom || '', css: setting.css || '' })));
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
      }
    } catch (err) {
      next(err);
    }
  });

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new __WEBPACK_IMPORTED_MODULE_8_pretty_error___default.a();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  console.log(pe.render(err)); // eslint-disable-line no-console
  const html = __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToStaticMarkup(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_10__components_Html__["a" /* default */],
    {
      title: 'Internal Server Error',
      description: err.message,
      styles: [{ id: 'css', cssText: __WEBPACK_IMPORTED_MODULE_13__routes_error_ErrorPage_css___default.a._getCss() }] // eslint-disable-line no-underscore-dangle
    },
    __WEBPACK_IMPORTED_MODULE_7_react_dom_server___default.a.renderToString(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__routes_error_ErrorPage__["a" /* ErrorPageWithoutStyle */], { error: err }))
  ));
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
__WEBPACK_IMPORTED_MODULE_15__data_models__["a" /* default */].sync().catch(err => console.error(err.stack)).then(() => {
  app.listen(__WEBPACK_IMPORTED_MODULE_23__config__["a" /* port */], () => {
    console.log(`The server is running at http://localhost:${__WEBPACK_IMPORTED_MODULE_23__config__["a" /* port */]}/`);
  });
});
/* eslint-enable no-console */

function connect() {
  var options = { server: { socketOptions: { keepAlive: 1 } }, promiseLibrary: __WEBPACK_IMPORTED_MODULE_19_bluebird___default.a };
  return __WEBPACK_IMPORTED_MODULE_24_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_23__config__["b" /* mongoDBURL */], options).connection;
}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _en_US = __webpack_require__(32);

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports["default"] = _en_US2["default"];
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = __webpack_require__(28);

var _moment2 = _interopRequireDefault(_moment);

var _en_US = __webpack_require__(166);

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = __webpack_require__(32);

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = __webpack_require__(33);

var _en_US6 = _interopRequireDefault(_en_US5);

var _en_US7 = __webpack_require__(51);

var _en_US8 = _interopRequireDefault(_en_US7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_moment2["default"].locale('en');
exports["default"] = {
    locale: 'en',
    Pagination: _en_US2["default"],
    DatePicker: _en_US4["default"],
    TimePicker: _en_US6["default"],
    Calendar: _en_US8["default"],
    Table: {
        filterTitle: 'Filter Menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No Data',
        selectAll: 'Select All',
        selectInvert: 'Select Invert'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    }
};
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["a"] = setRuntimeVariable;
/* eslint-disable import/prefer-default-export */



function setRuntimeVariable({ name, value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_RUNTIME_VARIABLE */],
    payload: {
      name,
      value
    }
  };
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["a"] = setSetting;
/* eslint-disable import/prefer-default-export */



function setSetting({ value }) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_SETTING */],
    payload: {
      value
    }
  };
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const ContextType = {
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
class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {

  componentDidMount() {}

  getChildContext() {
    return this.props.context;
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
  }

}

App.propTypes = {
  context: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape(ContextType).isRequired,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element.isRequired
};
App.childContextTypes = ContextType;
/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(18);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Html extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, description, styles, scripts, state, children, v, seo } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js', lang: 'vi' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          null,
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: '/favicon.gif' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: 'favicon.gif' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:locale', content: 'vi_VN' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:type', content: 'website' }),
        seo && seo.og_title && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:title', content: seo.og_title }),
        seo && seo.url && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:url', content: seo.url }),
        seo && seo.og_image && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: seo.og_image }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/css/bootstrap.min.css', rel: 'stylesheet' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/css/bootstrap-extra-modal.css', rel: 'stylesheet' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/css/plugins.css', rel: 'stylesheet' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/css/themify-icons.css', rel: 'stylesheet' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/css/font-awesome.min.css', rel: 'stylesheet' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,100,300,300italic,500,700,900', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Raleway:400,100,300,500,600,700,800,900,200', rel: 'stylesheet', type: 'text/css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/assets/revolution/css/settings.css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/assets/revolution/css/layers.css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/assets/revolution/css/navigation.css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: '/assets/css/style.css', rel: 'stylesheet' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: "/css/app.css?v=" + v }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: this.props.css } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: this.props.scriptTop } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        { className: 'clearfix' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: children }
        }),
        state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          dangerouslySetInnerHTML: { __html: `head.load("/assets/js/jquery.js")` + `.js("/assets/js/bootstrap.min.js" )` + `.js("/assets/js/scripts.js" )` + `.js("/assets/revolution/js/jquery.themepunch.tools.min.js")` + `.js("/assets/revolution/js/jquery.themepunch.revolution.min.js")` + `.js("/assets/js/init.js")` + `.js("https://cdnjs.cloudflare.com/ajax/libs/slideout/1.0.1/slideout.min.js")` + `.js("${scripts[0]}?v=${v}")` + `.js("${scripts[1]}?v=${v}")` }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: this.props.scriptBottom } })
      )
    );
  }
}

Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  styles: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    cssText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired),
  scripts: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  state: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
Html.defaultProps = {
  styles: [],
  scripts: [],
  state: null
};
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(18);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Html extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const { title, description, styles, scripts, state, children, v } = this.props;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'html',
      { className: 'no-js', lang: 'en' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'head',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'title',
          null,
          title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: description }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'unsafe-url' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'origin' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'referrer', content: 'origin-when-cross-origin' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: '/ico.png' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: 'ico.png' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/slideout/1.0.1/slideout.min.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { src: '/lib/ckeditor/ckeditor.js' }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: "/css/admin.css?v=" + v })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'body',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', {
          id: 'app'
          // eslint-disable-next-line react/no-danger
          , dangerouslySetInnerHTML: { __html: children }
        }),
        state && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', {
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML: { __html: `window.APP_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(state, { isJSON: true })}` }
        }),
        scripts.map(script => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: script, src: script + '?v=' + v }))
      )
    );
  }
}

Html.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  description: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  styles: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    cssText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired),
  scripts: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired),
  // eslint-disable-next-line react/forbid-prop-types
  state: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
Html.defaultProps = {
  styles: [],
  scripts: [],
  state: null
};
/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




class Footer extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        sdt: '',
        email: '',
        noidung: ''
      }
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'footer' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'a-left' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/leaf.png', alt: '' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'a-right' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/leaf.png', alt: '' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'footer-body' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-6' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'footer-contact-info' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h4',
                  { style: { textAlign: 'center', marginBottom: 20 } },
                  'th\xF4ng tin li\xEAn h\u1EC7'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'contact-items ng-scope' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'clearfix item ng-scope' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'label ng-binding' },
                      'T\u01B0 v\u1EA5n'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'text' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        null,
                        '0906.234.912 - 0972.564.695'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'clearfix item ng-scope' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'label ng-binding' },
                      '\u0110\u1ECBa ch\u1EC9 giao d\u1ECBch'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'text' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'ng-binding ng-scope' },
                        'S\xE0n B\u0110S Vinhomes Times City Park Hill s\u1ED1 458 Minh Khai - Hai B\xE0 Tr\u01B0ng - H\xE0 N\u1ED9i'
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'clearfix item ng-scope' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'label ng-binding' },
                      'Email'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'text' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        { className: 'ng-binding ng-scope', href: 'mailto://quanganh268.vud@gmail.com' },
                        'quanganh268.vud@gmail.com'
                      )
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-6' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'footer-contact-info' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h4',
                  { style: { textAlign: 'center', marginBottom: 20 } },
                  '\u0110\u0103ng k\xFD t\u01B0 v\u1EA5n mi\u1EC5n ph\xED'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'agency-list' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'footer-contact-form ng-pristine ng-scope ng-invalid ng-invalid-required ng-valid-email', autoComplete: 'false' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'row' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-xs-12' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { defaultValue: this.state.form.name,
                          onChange: e => {
                            let value = e.target.value;
                            this.setState(prev => {
                              return _extends({}, prev, {
                                form: _extends({}, prev.form, {
                                  name: value
                                })
                              });
                            });
                          },
                          type: 'text', placeholder: 'H\u1ECD & t\xEAn *', required: true, autoComplete: 'false', name: 'name', className: 'ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required' })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'row' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-xs-6' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text',
                          defaultValue: this.state.form.sdt,
                          onChange: e => {
                            let value = e.target.value;
                            this.setState(prev => {
                              return _extends({}, prev, {
                                form: _extends({}, prev.form, {
                                  sdt: value
                                })
                              });
                            });
                          },
                          placeholder: 'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i*', required: true, autoComplete: 'false', name: 'name', className: 'ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required' })
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-xs-6' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email',
                          defaultValue: this.state.form.email,
                          onChange: e => {
                            let value = e.target.value;
                            this.setState(prev => {
                              return _extends({}, prev, {
                                form: _extends({}, prev.form, {
                                  email: value
                                })
                              });
                            });
                          },
                          placeholder: 'Email *', required: true, autoComplete: 'false', name: 'email', className: 'ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-email' })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'row' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-xs-12' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', { placeholder: 'N\u1ED9i dung *',
                          defaultValue: this.state.form.noidung,
                          onChange: e => {
                            let value = e.target.value;
                            this.setState(prev => {
                              return _extends({}, prev, {
                                form: _extends({}, prev.form, {
                                  noidung: value
                                })
                              });
                            });
                            console.log(this.state.form);
                          },
                          rows: 3, required: true, name: 'content', className: 'ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required', defaultValue: "" })
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'row' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-xs-12 text-right' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { className: 'btn-send', style: { cursor: 'pointer' },
                            onClick: () => {
                              let that = this;
                              __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/tuvan', this.state.form).then(res => {
                                alert('Đã đăng ký tư vấn thành công, chúng tôi sẽ sớm liên lạc lại với bạn!');
                                that.setState(prev => {
                                  return {
                                    form: {
                                      name: '',
                                      sdt: '',
                                      email: '',
                                      noidung: ''
                                    }
                                  };
                                });
                              }).catch(err => {
                                console.log(err);
                              });
                            }
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
}



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Link__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });



class Header extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'header',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'nav-wrap' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'nav-wrap-holder' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'container', id: 'nav_wrapper' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'nav',
              { className: 'navbar navbar-static-top nav-white' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'navbar-header' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1__Link__["a" /* default */],
                  { className: 'navbar-brand', to: '/' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/logo.png', alt: 'logo', className: 'img-responsive' })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'navbar2' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar2-top letterpress' },
                  'T\u1EF0 H\xC0O L\xC0 \u0110\u01A0N V\u1ECA CHO THU\xCA - CHUY\u1EC2N NH\u01AF\u1EE2NG S\u1ED0 1 TIMES CITY'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'navbar2-bottom letterpress' },
                  'Chuy\xEAn vi\xEAn t\u01B0 v\u1EA5n: ',
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    { style: { color: '#FF851B' } },
                    '0906.234.912 - 0972.564.695'
                  )
                )
              )
            )
          )
        )
      )
    );
  }
}



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_slick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_slick__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




class View extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
      _extends({}, settings, { className: 'slider-top' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ratio' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/slide1.jpg', alt: '' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ratio' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/2.jpg', alt: '' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ratio' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/1.jpg', alt: '' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ratio' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/4.jpg', alt: '' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ratio' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/5.jpg', alt: '' })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ratio' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'auto-zoom image-ratio image-ratio--1350-450', src: '/imgs/6.jpg', alt: '' })
        )
      )
    );
  }
}



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_passport_facebook___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_passport_facebook__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_models__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(18);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */






/**
 * Sign in with Facebook.
 */
__WEBPACK_IMPORTED_MODULE_0_passport___default.a.use(new __WEBPACK_IMPORTED_MODULE_1_passport_facebook__["Strategy"]({
  clientID: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* auth */].facebook.id,
  clientSecret: __WEBPACK_IMPORTED_MODULE_3__config__["e" /* auth */].facebook.secret,
  callbackURL: '/login/facebook/return',
  profileFields: ['name', 'email', 'link', 'locale', 'timezone'],
  passReqToCallback: true
}, (req, accessToken, refreshToken, profile, done) => {
  /* eslint-disable no-underscore-dangle */
  const loginName = 'facebook';
  const claimType = 'urn:facebook:access_token';
  const fooBar = (() => {
    var _ref = _asyncToGenerator(function* () {
      if (req.user) {
        const userLogin = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */].findOne({
          attributes: ['name', 'key'],
          where: { name: loginName, key: profile.id }
        });
        if (userLogin) {
          // There is already a Facebook account that belongs to you.
          // Sign in with that account or delete it, then link it with your current account.
          done();
        } else {
          const user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].create({
            id: req.user.id,
            email: profile._json.email,
            logins: [{ name: loginName, key: profile.id }],
            claims: [{ type: claimType, value: profile.id }],
            profile: {
              displayName: profile.displayName,
              gender: profile._json.gender,
              picture: `https://graph.facebook.com/${profile.id}/picture?type=large`
            }
          }, {
            include: [{ model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserClaim */], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* UserProfile */], as: 'profile' }]
          });
          done(null, {
            id: user.id,
            email: user.email
          });
        }
      } else {
        const users = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].findAll({
          attributes: ['id', 'email'],
          where: { '$logins.name$': loginName, '$logins.key$': profile.id },
          include: [{
            attributes: ['name', 'key'],
            model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */],
            as: 'logins',
            required: true
          }]
        });
        if (users.length) {
          done(null, users[0]);
        } else {
          let user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].findOne({ where: { email: profile._json.email } });
          if (user) {
            // There is already an account using this email address. Sign in to
            // that account and link it with Facebook manually from Account Settings.
            done(null);
          } else {
            user = yield __WEBPACK_IMPORTED_MODULE_2__data_models__["c" /* User */].create({
              email: profile._json.email,
              emailConfirmed: true,
              logins: [{ name: loginName, key: profile.id }],
              claims: [{ type: claimType, value: accessToken }],
              profile: {
                displayName: profile.displayName,
                gender: profile._json.gender,
                picture: `https://graph.facebook.com/${profile.id}/picture?type=large`
              }
            }, {
              include: [{ model: __WEBPACK_IMPORTED_MODULE_2__data_models__["b" /* UserLogin */], as: 'logins' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["d" /* UserClaim */], as: 'claims' }, { model: __WEBPACK_IMPORTED_MODULE_2__data_models__["e" /* UserProfile */], as: 'profile' }]
            });
            done(null, {
              id: user.id,
              email: user.email
            });
          }
        }
      }
    });

    return function fooBar() {
      return _ref.apply(this, arguments);
    };
  })();

  fooBar().catch(done);
}));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_passport___default.a);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__(141);

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_universal_router___default.a(__WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]));

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(24);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const User = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('User', {

  id: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    defaultValue: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUIDV1,
    primaryKey: true
  },

  email: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255),
    validate: { isEmail: true }
  },

  emailConfirmed: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.BOOLEAN,
    defaultValue: false
  }

}, {

  indexes: [{ fields: ['email'] }]

});

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(24);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserClaim = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserClaim', {

  type: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  },

  value: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserClaim);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(24);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserLogin = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserLogin', {

  name: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50),
    primaryKey: true
  },

  key: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100),
    primaryKey: true
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserLogin);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sequelize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sequelize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequelize__ = __webpack_require__(24);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const UserProfile = __WEBPACK_IMPORTED_MODULE_1__sequelize__["a" /* default */].define('UserProfile', {

  userId: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.UUID,
    primaryKey: true
  },

  displayName: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },

  picture: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  },

  gender: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(50)
  },

  location: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(100)
  },

  website: {
    type: __WEBPACK_IMPORTED_MODULE_0_sequelize___default.a.STRING(255)
  }

});

/* harmony default export */ __webpack_exports__["a"] = (UserProfile);

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getOneApartment: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOneApartment
  },
  getApartments: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      type: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getApartments
  },
  getApartmentsByCategory: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      category: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getApartmentsByCategory
  },
  getApartmentRelative: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getApartmentRelative
  }
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true, default: '' },
  category: { type: String, required: true, default: 'khu-t' },
  coverUrl: { type: String, required: true, default: '/' },
  price1: { type: Number, default: 0 },
  price2: { type: Number, default: 0 },
  body: { type: String, required: true, default: '' },
  rating: { type: Number, default: 5 },
  numRate: { type: Number, default: 1 },
  view: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Apartment', schema);

module.exports = model;

// get ( product )


module.exports.getOneApartment = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getApartments = (root, { type }) => {
  let query = {};
  console.log(type);
  query = { category: type };
  return new Promise((resolve, reject) => {
    model.find(query).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getApartmentsByCategory = (root, { category }) => {
  return new Promise((resolve, reject) => {
    model.find({ category: category }).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getApartmentRelative = (root, { slug }) => {

  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, apartment) => {
      if (err) reject(err);else {
        let category = apartment ? apartment.category : '';
        if (apartment === null) {
          reject(err);
        }{
          model.aggregate([{ "$match": {
              category: category
            } }, { "$sample": {
              size: 6
            } }]).exec((err, listApartment) => {
            if (err) reject(err);else resolve(listApartment);
          });
        }
      }
    });
  });
};

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Apartment',
  description: 'Apartment object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },

    title: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },

    slug: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },

    category: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },

    coverUrl: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },

    price1: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLFloat"]
    },

    price2: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLFloat"]
    },

    rating: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLFloat"]
    },

    numRate: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },

    body: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },

    view: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
    },

    created_at: {
      type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
    }
  })
}));

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(7);
let autoIncrement = __webpack_require__(185);
autoIncrement.initialize(mongoose.connection);

module.exports = autoIncrement;

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getOneCategory: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOneCategory
  },
  getCategories: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getCategories
  }
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  body: { type: String, default: '' },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Category', schema);

module.exports = model;

// get ( product )


module.exports.getOneCategory = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getCategories = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Category',
  description: 'Category object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },

    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },

    body: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  listImage: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      num: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      },
      time: {
        type: __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"]
      },
      filter: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getListImageByTime
  }

});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7);

var schema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, index: true },
  name: String,
  type: String,
  fileSize: { type: Number, default: 0 },
  dimensions: {
    width: { type: Number },
    height: { type: Number }
  },
  userUpload: String,
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Image', schema);

module.exports = model;

module.exports.getListImageByTime = (root, { num, time, filter }) => {
  if (!time) time = Date.now();
  let query = { created_at: { $lt: time } };
  if (filter) query.name = { $regex: new RegExp(filter, "ig") };
  console.log(query);
  return new Promise((resolve, reject) => {
    model.find(query).sort({ created_at: -1 }).limit(num).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);




// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Image',
  description: 'Image object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    name: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    type: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    fileSize: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    dimensions: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
        name: 'dimensions',
        fields: () => ({
          width: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"] },
          height: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"] }
        })
      })
    },
    userUpload: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getOrders: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOrders
  }
});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  name: { type: String, default: '' },
  phone: { type: String, default: '' },
  address: { type: String, default: '' },
  product: { type: String, default: '' },
  quantity: { type: String, default: '' },
  done: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Order', schema);

module.exports = model;

// get ( product )


module.exports.getOrders = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Order',
  description: 'Order object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    name: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    phone: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    address: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    product: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    quantity: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    done: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"])
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_type_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  newPost: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],

    args: {
      category: {
        name: 'category',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      slug: {
        name: 'slug',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      title: {
        name: 'title',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      coverUrl: {
        name: 'coverUrl',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      description: {
        name: 'description',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      body: {
        name: 'body',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
      },
      tags: {
        name: 'slug',
        type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1_graphql_type_json___default.a)
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.newPost
  }
});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getPosts: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
      name: 'getPosts',
      description: 'getPosts object',
      fields: () => ({
        page: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        totalPage: {
          type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
        },
        data: {
          type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */])
        }
      })
    }),
    args: {
      page: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getPosts
  },
  getOnePost: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOnePost
  },
  getAllPosts: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllPosts
  },
  getPostRelative: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getPostRelative
  }
});

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  getOneProduct: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      slug: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getOneProduct
  },
  getProducts: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getProducts
  }
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  // category: String,
  slug: { type: String, required: true, unique: true, index: true },
  name: String,
  // public: {type: Boolean, default: false},
  coverUrl: String,
  price: Number,
  body: String,
  description: String,
  view: { type: Number, default: 0 },
  saleOff: {
    type: { type: Number },
    value: { type: Number }
  },
  // tags:[Schema.Types.Mixed],
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Product', schema);

module.exports = model;

// get ( product )


module.exports.getOneProduct = (root, { slug }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ slug: slug }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getProducts = (root, {}) => {
  return new Promise((resolve, reject) => {
    model.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Product',
  description: 'Product object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    slug: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    coverUrl: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    name: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    price: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    description: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    body: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"])
    },
    view: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLInt"])
    },
    saleOff: {
      type: __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default.a
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  seo: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    args: {
      url: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getByUrl
  },
  allSeo: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */]),
    args: {
      filter: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getAllSeo
  }
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;

var schema = new mongoose.Schema({
  url: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  og_title: { type: String, default: '' },
  og_image: { type: String, default: '' },
  og_description: { type: String, default: '' },
  created_at: { type: Date, default: Date.now }
});

let model = mongoose.model('Seo', schema);

module.exports = model;

// get ( product )

module.exports.getByUrl = (root, { url }) => {
  return new Promise((resolve, reject) => {
    model.findOne({ url: url }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getAllSeo = (root, { filter }) => {
  let query = {};
  if (filter) query.url = { $regex: new RegExp(filter, "ig") };
  return new Promise((resolve, reject) => {
    model.find(query).sort({ created_at: -1 }).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_type_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_type_json__);




// Define our user type, with two string fields; `id` and `name`


/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'Seo',
  description: 'Seo object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    },
    url: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    title: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_title: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_image: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    og_description: {
      type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]
    },
    created_at: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__["GraphQLDateTime"])
    }
  })
}));

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema__);





/* harmony default export */ __webpack_exports__["a"] = ({
  update: {
    type: __WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */],
    args: {
      ssr: {
        type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLBoolean"]
      }
    },
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.update
  }
});

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_graphql_iso_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_graphql_iso_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__schema__);







/* harmony default export */ __webpack_exports__["a"] = ({
  setting: {
    type: __WEBPACK_IMPORTED_MODULE_2__type__["a" /* default */],
    resolve: __WEBPACK_IMPORTED_MODULE_3__schema___default.a.getSetting
  }

});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__schema__);





/* harmony default export */ __webpack_exports__["a"] = ({
  users: {
    type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_1__type__["a" /* default */]),
    resolve: __WEBPACK_IMPORTED_MODULE_2__schema___default.a.getListOfUsers
  }
});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

let mongoose = __webpack_require__(7),
    Schema = mongoose.Schema;
let findOrCreate = __webpack_require__(186);
let autoIncrement = __webpack_require__(70);
var bcrypt = __webpack_require__(171);

let UserSchema = new Schema({
  name: String,
  username: { type: String, default: 'abc@gmail.com' },
  uid: String,
  provider: String,
  accessToken: String,
  isAdmin: { type: Boolean, default: false },
  mustConfirmEmail: { type: Boolean, default: false },
  password: String,
  createAt: { type: Date, default: Date.now }
});

UserSchema.plugin(findOrCreate);

UserSchema.plugin(autoIncrement.plugin, 'User');

let User = mongoose.model('User', UserSchema);

module.exports = User;

module.exports.getUserByEmail = function (username, callback) {
  User.find({ username: username }, callback);
};

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) console.log(err);
    callback(null, isMatch);
  });
};

module.exports.createUser = function (newUser, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      User.create(newUser, callback);
    });
  });
};

module.exports.changePassword = function (email, password, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) throw err;
      console.log(hash);
      User.update({ username: email }, { $set: { password: hash } }, callback);
    });
  });
};

module.exports.getListOfUsers = () => {
  return new Promise((resolve, reject) => {
    User.find({}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    });
  });
};

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);


// Define our user type, with two string fields; `id` and `name`
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'User',
  description: 'User object',
  fields: () => ({
    _id: {
      type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLID"])
    }
  })
}));

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__ = __webpack_require__(95);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





// React.js News Feed (RSS)
const url = 'https://api.rss2json.com/v1/api.json' + '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const news = {
  type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLList"](__WEBPACK_IMPORTED_MODULE_2__types_NewsItemType__["a" /* default */]),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (new Date() - lastFetchTime > 1000 * 60 * 10 /* 10 mins */) {
        lastFetchTime = new Date();
        lastFetchTask = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])(url).then(response => response.json()).then(data => {
          if (data.status === 'ok') {
            items = data.items;
          }

          return items;
        }).finally(() => {
          lastFetchTask = null;
        });

        if (items.length) {
          return items;
        }

        return lastFetchTask;
      }

    return items;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (news);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries_news__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_image_queries__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_post_queries__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_product_queries__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_user_queries__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_setting_queries__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_order_queries__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_seo_queries__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_apartment_queries__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_category_queries__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_setting_mutations__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_post_mutations__ = __webpack_require__(80);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// import me from './queries/me';











// mutation



const { listImage } = __WEBPACK_IMPORTED_MODULE_2__models_image_queries__["a" /* default */];
const { users } = __WEBPACK_IMPORTED_MODULE_5__models_user_queries__["a" /* default */];
const { setting } = __WEBPACK_IMPORTED_MODULE_6__models_setting_queries__["a" /* default */];
const { getOrders } = __WEBPACK_IMPORTED_MODULE_7__models_order_queries__["a" /* default */];
const { getPosts, getOnePost, getAllPosts, getPostRelative } = __WEBPACK_IMPORTED_MODULE_3__models_post_queries__["a" /* default */];
const { getOneProduct, getProducts } = __WEBPACK_IMPORTED_MODULE_4__models_product_queries__["a" /* default */];
const { seo, allSeo } = __WEBPACK_IMPORTED_MODULE_8__models_seo_queries__["a" /* default */];
const { getApartments, getOneApartment, getApartmentsByCategory, getApartmentRelative } = __WEBPACK_IMPORTED_MODULE_9__models_apartment_queries__["a" /* default */];
const { getCategories, getOneCategory } = __WEBPACK_IMPORTED_MODULE_10__models_category_queries__["a" /* default */];

const schema = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLSchema"]({
  query: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Query',
    fields: {
      setting,
      news: __WEBPACK_IMPORTED_MODULE_1__queries_news__["a" /* default */],
      listImage,
      users,
      getPosts,
      getOnePost,
      getOneProduct,
      getProducts,
      getOrders,
      seo,
      allSeo,
      getApartments,
      getOneApartment,
      getCategories,
      getOneCategory,
      getApartmentsByCategory,
      getAllPosts,
      getApartmentRelative,
      getPostRelative
    }
  }),
  mutation: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
    name: 'Mutation',
    description: 'Realize Root Mutations',
    fields: {
      // addUser: userMutations.addUser,
      // updateUser: userMutations.updateUser
      updateSetting: __WEBPACK_IMPORTED_MODULE_11__models_setting_mutations__["a" /* default */].update,
      newPost: __WEBPACK_IMPORTED_MODULE_12__models_post_mutations__["a" /* default */].newPost
    }
  })
});

/* harmony default export */ __webpack_exports__["a"] = (schema);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



const NewsItemType = new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLObjectType"]({
  name: 'NewsItem',
  fields: {
    title: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    link: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    author: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] },
    pubDate: { type: new __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLNonNull"](__WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"]) },
    content: { type: __WEBPACK_IMPORTED_MODULE_0_graphql__["GraphQLString"] }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (NewsItemType);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["a"] = data;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function data(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* SET_DATA */]:
      const data = action.payload.value;
      return _extends({}, state, {
        post: _extends({}, state.post, {
          value: data.getOnePost || {}
        }),
        posts: _extends({}, state.posts, {
          value: data.getPosts || state.posts.value
        }),
        chothue: _extends({}, state.chothue, {
          value: data.chothue || state.chothue.value
        }),
        muabankhut: _extends({}, state.muabankhut, {
          value: data.muabankhut || state.muabankhut.value
        }),
        muabanparkhill: _extends({}, state.muabanparkhill, {
          value: data.muabanparkhill || state.muabanparkhill.value
        }),
        danhsachcanho: _extends({}, state.danhsachcanho, {
          value: data.danhsachcanho || state.danhsachcanho.value
        }),
        canho: _extends({}, state.canho, {
          value: data.canho || state.canho.value
        }),
        thutuctrangchu: _extends({}, state.thutuctrangchu, {
          value: data.thutuctrangchu || state.thutuctrangchu.value
        }),
        danhsachthutuc: _extends({}, state.danhsachthutuc, {
          value: data.danhsachthutuc || state.danhsachthutuc.value
        }),
        thutuc: _extends({}, state.thutuc, {
          value: data.thutuc || state.thutuc.value
        }),
        gioithieu: _extends({}, state.gioithieu, {
          value: data.gioithieu || state.gioithieu.value
        }),
        canhotuongtu: _extends({}, state.canho, {
          value: data.canhotuongtu || state.canhotuongtu.value
        }),
        thutuctuongtu: _extends({}, state.thutuctuongtu, {
          value: data.thutuctuongtu || state.thutuctuongtu.value
        })
      });
    default:
      return state;
  }
}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__);






/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  user: __WEBPACK_IMPORTED_MODULE_1__user__["a" /* default */],
  runtime: __WEBPACK_IMPORTED_MODULE_2__runtime__["a" /* default */],
  setting: __WEBPACK_IMPORTED_MODULE_3__setting__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_4__data__["a" /* default */],
  loadingBar: __WEBPACK_IMPORTED_MODULE_5_react_redux_loading_bar__["loadingBarReducer"]
}));

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["a"] = runtime;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function runtime(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* SET_RUNTIME_VARIABLE */]:
      return _extends({}, state, {
        [action.payload.name]: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(19);
/* harmony export (immutable) */ __webpack_exports__["a"] = setting;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function setting(state = {}, action) {
  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* SET_SETTING */]:
      return _extends({}, state, {
        ['ssr']: action.payload.value
      });
    default:
      return state;
  }
}

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = user;
function user(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_sticky___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_sticky__);


const { Header, Content, Footer, Sider } = __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"];
const SubMenu = __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].SubMenu;





class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.onCollapse = collapsed => {
      this.setState({
        collapsed,
        mode: collapsed ? 'vertical' : 'inline'
      });
    };

    this.toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    };

    this.state = {
      name: this.props.name,
      collapsed: false,
      mode: 'inline'
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_antd__["LocaleProvider"],
      { locale: __WEBPACK_IMPORTED_MODULE_3_antd_lib_locale_provider_en_US___default.a },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Sider,
          {
            collapsible: true,
            breakpoint: 'lg',
            collapsedWidth: '0',
            collapsed: this.state.collapsed,
            onCollapse: this.onCollapse,
            width: '170'
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'logo' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'admin-topSlide' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'ADMIN'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"],
            { theme: 'dark',
              mode: this.state.mode,
              selectedKeys: [this.props.name],
              defaultOpenKeys: ['sub0', 'sub11', 'sub12', 'sub2', 'sub3']
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Dashboard' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'layout' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Dashboard'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Seo' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/seo/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'layout' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'SEO'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub0',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'CHO THU\xCA'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'category1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/apartment2?v=list' },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'category2' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/apartment2?v=add' },
                  'Th\xEAm m\u1EDBi'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub11',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Khu T'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'apartment11' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/apartment?v=list' },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'apartment22' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/apartment?v=add' },
                  'Th\xEAm m\u1EDBi'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub12',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Khu Park Hill'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'apartment13' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/apartment3?v=list' },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'apartment24' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/apartment3?v=add' },
                  'Th\xEAm m\u1EDBi'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub2',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Th\u1EE7 t\u1EE5c ph\xE1p l\xFD'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'tintuc1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/news?v=list' },
                  'Danh s\xE1ch'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'tintuc2' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/news?v=add' },
                  'Th\xEAm m\u1EDBi'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              SubMenu,
              {
                key: 'sub3',
                title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'idcard' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Gi\u1EDBi thi\u1EC7u'
                  )
                )
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'sub3-1' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/category?v=edit&slug=cho-thue' },
                  'C\u0103n h\u1ED9 cho thu\xEA'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'sub3-2' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/category?v=edit&slug=khu-t' },
                  'Khu T'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
                { key: 'sub3-3' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                  { to: '/admin/category?v=edit&slug=khu-park-hill' },
                  'Khu Park Hill'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Library' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/library' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'appstore-o' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'Th\u01B0 vi\u1EC7n'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Setting' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                { to: '/admin/setting' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'tool' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    'C\xE0i \u0111\u1EB7t'
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Menu"].Item,
              { key: 'Logout' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'a',
                { href: '/auth/logout' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Icon"], { type: 'tool' }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { className: 'nav-text' },
                    '\u0110\u0103ng xu\u1EA5t'
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Layout"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, { style: { height: 47, background: 'white', padding: 0 } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Content,
            { style: { margin: '0 5px' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"],
              { style: { margin: '12px 0' } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item,
                null,
                'Admin'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Breadcrumb"].Item,
                null,
                this.state.name
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { style: { background: '#fff', minHeight: 500 } },
              this.props.children
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Footer,
            { style: { textAlign: 'center' } },
            'Admin Page \xA9201 Created by L\u01B0u V\u0103n Lu\u1EADn'
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_avatar_editor__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_avatar_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_avatar_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







class ImageEditor extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleSave = data => {
      let that = this;
      const img = this.editor.getImageScaledToCanvas().toDataURL();
      const rect = this.editor.getCroppingRect();
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/upload/imageEditor', {
        override: this.state.override,
        name: this.state.name,
        slug: this.state.slug,
        img: img
      }).then(function (res) {
        that.props.handleOk();
      }).catch(function (err) {
        console.log(err);
      });
    };

    this.handleScale = value => {
      const scale = value;
      this.setState({ scale });
    };

    this.rotateLeft = e => {
      e.preventDefault();

      this.setState({
        rotate: this.state.rotate - 90
      });
    };

    this.rotateRight = e => {
      e.preventDefault();
      this.setState({
        rotate: this.state.rotate + 90
      });
    };

    this.handleBorderRadius = e => {
      const borderRadius = parseInt(e.target.value);
      this.setState({ borderRadius });
    };

    this.handleXPosition = value => {
      const x = value;
      this.setState({ position: _extends({}, this.state.position, { x }) });
    };

    this.handleYPosition = value => {
      const y = value;
      this.setState({ position: _extends({}, this.state.position, { y }) });
    };

    this.handleWidth = e => {
      const width = parseInt(e.target.value);
      this.setState({ width });
    };

    this.handleHeight = e => {
      console.log(e);
      const height = parseInt(e.target.value);
      this.setState({ height });
    };

    this.setEditorRef = editor => {
      if (editor) this.editor = editor;
    };

    this.handlePositionChange = position => {
      console.log('Position set to', position);
      this.setState({ position });
    };

    this.state = {
      slug: this.props.slug || '',
      name: this.props.name || '',
      imageRef: this.props.imageRef || '',
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      rate: 'keepOld',
      borderRadius: 0,
      preview: null,
      width: this.props.width || 200,
      initWidth: this.props.width || 200,
      height: this.props.height || 200,
      initHeight: this.props.height || 200,
      override: true,
      background: 'transparent'
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prev => {
      return _extends({}, prev, {
        imageRef: nextProps.imageRef || '',
        width: this.props.width || 200,
        initWidth: this.props.width || 200,
        height: this.props.height || 200,
        initHeight: this.props.height || 200
      });
    });
  }

  logCallback(e) {
    console.log('callback', e);
  }

  heightWithRate(width, height) {
    if (this.state.rate === 'keepOld') {
      return Math.round(width * this.state.initHeight / this.state.initWidth);
    } else if (this.state.rate === 'custom') {
      return height;
    } else if (this.state.rate === '4-3') {
      return Math.round(width * 3 / 4);
    } else if (this.state.rate === '1-1') {
      return width;
    } else if (this.state.rate === '3-4') {
      return Math.round(width * 4 / 3);
    }
    return height;
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { xs: 12, style: { padding: 15 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_avatar_editor___default.a, {
            style: { background: this.state.background },
            ref: this.setEditorRef,
            scale: parseFloat(this.state.scale),
            width: this.state.width,
            height: this.heightWithRate(this.state.width, this.state.height),
            position: this.state.position,
            onPositionChange: this.handlePositionChange,
            rotate: parseFloat(this.state.rotate),
            borderRadius: this.state.borderRadius,
            onSave: this.handleSave,
            onLoadFailure: this.logCallback.bind(this, 'onLoadFailed'),
            onLoadSuccess: this.logCallback.bind(this, 'onLoadSuccess'),
            onImageReady: this.logCallback.bind(this, 'onImageReady'),
            onImageLoad: this.logCallback.bind(this, 'onImageLoad'),
            onDropFile: this.logCallback.bind(this, 'onDropFile'),
            image: this.state.imageRef
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
          { xs: 12 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'T\u1EF7 l\u1EC7 ph\xF3ng to (',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'blue' } },
              this.state.scale,
              ')'
            ),
            ':'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Slider"], {
            name: 'scale',
            type: 'range',
            min: 1, max: 5,
            step: 0.01,
            onChange: this.handleScale,
            defaultValue: 1
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'N\u1EC1n (Kh\xF4ng \u1EA3nh h\u01B0\u1EDFng \u0111\u1EBFn \u1EA3nh):'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Group,
            { value: this.state.background, onChange: e => {
                this.setState(prev => {
                  return {
                    prev,
                    background: e.target.value
                  };
                });
              } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'transparent' },
              'Trong su\u1ED1t'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'red' },
              'N\u1EC1n \u0111\u1ECF'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'blue' },
              'N\u1EC1n xanh da tr\u1EDDi'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'green' },
              'N\u1EC1n xanh l\xE1 c\xE2y'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'T\u1EF7 l\u1EC7:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Group,
            { value: this.state.rate, onChange: value => {
                this.setState(prev => {
                  return {
                    prev,
                    rate: value.target.value
                  };
                });
              } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'keepOld' },
              'Nh\u01B0 \u1EA3nh c\u0169'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: 'custom' },
              'T\u1EF1 do'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: '4-3' },
              '4/3'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: '1-1' },
              '1/1'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Radio"].Button,
              { value: '3-4' },
              '3/4'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'Chi\u1EC1u d\xE0i:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            name: 'width',
            type: 'number',
            onChange: this.handleWidth,
            min: '50',
            max: '400',
            step: '10',
            value: this.state.width
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'Chi\u1EC1u r\u1ED9ng:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            disabled: this.state.rate !== 'custom',
            name: 'height',
            type: 'number',
            onChange: this.handleHeight,
            min: '50',
            max: '400',
            step: '10',
            value: this.heightWithRate(this.state.width, this.state.height)
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            'Quay \u1EA3nh:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
              { onClick: this.rotateLeft },
              'Quay tr\xE1i'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
              { onClick: this.rotateRight },
              'Quay ph\u1EA3i'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'b',
            null,
            '\u0110\xE8 \u1EA3nh c\u0169: '
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], { checked: this.state.override, onChange: value => {
              this.setState(prev => {
                return _extends({}, prev, {
                  override: !prev.override
                });
              });
            } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Popconfirm"],
            { placement: 'right',
              onConfirm: this.handleSave,
              okText: '\u0110\u1ED3ng \xFD', cancelText: 'H\u1EE7y' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
              { type: 'primary' },
              this.state.override ? 'Thay thế ảnh cũ' : 'Thêm ảnh mới'
            )
          )
        )
      )
    );
    console.log(parseFloat(this.state.scale));
  }
}

class ImageWithRect extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.setCanvas = this.setCanvas.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  componentDidMount() {
    this.redraw();
  }

  componentDidUpdate() {
    this.redraw();
  }

  setCanvas(canvas) {
    if (canvas) this.canvas = canvas;
  }

  handleImageLoad() {
    const ctx = this.canvas.getContext('2d');
    const { rect, width, height } = this.props;

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = 'red';

    if (rect && (rect.width > 1 || rect.height > 1)) {
      ctx.drawImage(this.imgElement, Math.round(-rect.x * (width / rect.width)), Math.round(-rect.y * (height / rect.height)), Math.round(width / rect.width), Math.round(height / rect.height));

      if (rect) {
        ctx.strokeRect(1, 1, Math.round(width) - 2, Math.round(height) - 2);
      }
    } else {
      ctx.drawImage(this.imgElement, 0, 0, width, height);

      if (rect) {
        ctx.strokeRect(Math.round(rect.x * width) + 0.5, Math.round(rect.y * height) + 0.5, Math.round(rect.width * width), Math.round(rect.height * height));
      }
    }
  }

  redraw() {
    const img = new Image();

    img.src = this.props.image;
    img.onload = this.handleImageLoad;
    this.imgElement = img;
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('canvas', {
      ref: this.setCanvas,
      style: this.props.style,
      width: this.props.width,
      height: this.props.height
    });
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ImageEditor);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Option,
    { key: i.toString(36) + i },
    i.toString(36) + i + ' value'
  ));
}

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        category: 'khu-t',
        price1: 0,
        price2: 0
      }
    };
    if (this.props.isEdit) {
      this.init(this.props.slug);
    }
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneApartment(slug: "' + slug + '"){category, coverUrl, slug, title, body, price1, price2, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneApartment
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/apartment/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push({
        pathname: '/admin/apartment',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/apartment/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.updateNews(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.addNews(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'T\u1EF1a \u0111\u1EC1:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'T\u1EF1a \u0111\u1EC1',
                    defaultValue: this.state.data.title,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            title: value,
                            slug: newSlug()
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Gi\xE1 g\u1ED1c:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
                    defaultValue: this.state.data.price1 || 0,
                    min: 0,
                    formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
                    parser: value => value.replace(/(,*)/g, ''),
                    style: { minWidth: 200 },
                    onChange: value => {
                      if (parseInt(value).isNaN) {
                        value = 0;
                      }
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            price1: parseInt(value)
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Gi\xE1 khuy\u1EBFn m\xE3i:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
                    defaultValue: this.state.data.price2 || 0,
                    min: 0,
                    formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
                    parser: value => value.replace(/(,*)/g, ''),
                    style: { minWidth: 200 },
                    onChange: value => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            price2: parseInt(value)
                          })
                        });
                      });
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    }
                  },
                  'X\xF3a \u1EA3nh '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                  { className: 'padding-5' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    }
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (EditNewsComponent);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getApartments();
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Table"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Thead"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Tr"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'Ti\xEAu \u0111\u1EC1'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'B\u1EA3ng gi\xE1'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'Rating'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'Ch\u1EC9nh s\u1EEDa'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Tbody"],
            null,
            this.state.data.map((el, key) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Tr"],
                { key: key
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  el.title.length > 53 ? el.title.slice(0, 50) + '...' : el.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    el.price2 || el.price1 || 'Liên hệ'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    el.rating,
                    ' (',
                    el.numRate,
                    ')'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
                      { to: "/admin/apartment?v=edit&slug=" + el.slug },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_antd__["Button"],
                        { type: 'danger' },
                        'S\u1EEDa'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_antd__["Popconfirm"],
                      { placement: 'right',
                        onConfirm: () => {
                          let that = this;
                          __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post('/api/apartment/delete', { slug: el.slug }).then(res => {
                            that.getApartments();
                            console.log('Đã xóa');
                          }).catch(err => {
                            message.error('Có lỗi');
                          });
                        },
                        okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a', cancelText: 'H\u1EE7y' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_antd__["Button"],
                        {
                          type: 'primary'
                        },
                        'X\xF3a'
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
  getApartments() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getApartments(type:"khu-t"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at}}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getApartments
        });
      });
    })();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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



const title = 'Căn Hộ Mua Bán & Chuyển Nhượng ';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/apartment',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/apartment?v=list' };
      }
      const { App, EditApartment, ListApartment } = yield __webpack_require__(9);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListApartment, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment, { mode: 'edit', isEdit: true, slug: query.slug })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/apartment?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Option,
    { key: i.toString(36) + i },
    i.toString(36) + i + ' value'
  ));
}

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        category: 'cho-thue',
        price1: 0,
        price2: 0
      }
    };
    if (this.props.isEdit) {
      this.init(this.props.slug);
    }
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneApartment(slug: "' + slug + '"){category, coverUrl, slug, title, body, price1, price2, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneApartment
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/apartment/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push({
        pathname: '/admin/apartment2',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/apartment/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.updateNews(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.addNews(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'T\u1EF1a \u0111\u1EC1:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'T\u1EF1a \u0111\u1EC1',
                    defaultValue: this.state.data.title,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            title: value,
                            slug: newSlug()
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Gi\xE1 g\u1ED1c:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
                    defaultValue: this.state.data.price1 || 0,
                    min: 0,
                    formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
                    parser: value => value.replace(/(,*)/g, ''),
                    style: { minWidth: 200 },
                    onChange: value => {
                      if (parseInt(value).isNaN) {
                        value = 0;
                      }
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            price1: parseInt(value)
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Gi\xE1 khuy\u1EBFn m\xE3i:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
                    defaultValue: this.state.data.price2 || 0,
                    min: 0,
                    formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
                    parser: value => value.replace(/(,*)/g, ''),
                    style: { minWidth: 200 },
                    onChange: value => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            price2: parseInt(value)
                          })
                        });
                      });
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    }
                  },
                  'X\xF3a \u1EA3nh '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                  { className: 'padding-5' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    }
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (EditNewsComponent);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getApartments();
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Table"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Thead"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Tr"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'Ti\xEAu \u0111\u1EC1'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'B\u1EA3ng gi\xE1'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'Rating'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'Ch\u1EC9nh s\u1EEDa'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Tbody"],
            null,
            this.state.data.map((el, key) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Tr"],
                { key: key
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  el.title.length > 53 ? el.title.slice(0, 50) + '...' : el.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    el.price2 || el.price1 || 'Liên hệ'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    el.rating,
                    ' (',
                    el.numRate,
                    ')'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
                      { to: "/admin/apartment2?v=edit&slug=" + el.slug },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_antd__["Button"],
                        { type: 'danger' },
                        'S\u1EEDa'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_antd__["Popconfirm"],
                      { placement: 'right',
                        onConfirm: () => {
                          let that = this;
                          __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post('/api/apartment/delete', { slug: el.slug }).then(res => {
                            that.getApartments();
                            console.log('Đã xóa');
                          }).catch(err => {
                            message.error('Có lỗi');
                          });
                        },
                        okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a', cancelText: 'H\u1EE7y' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_antd__["Button"],
                        {
                          type: 'primary'
                        },
                        'X\xF3a'
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
  getApartments() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getApartments(type:"cho-thue"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at}}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getApartments
        });
      });
    })();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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



const title = 'Căn Hộ Cho Thuê';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/apartment2',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/apartment2?v=list' };
      }
      const { App, EditApartment2, ListApartment2 } = yield __webpack_require__(9);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListApartment2, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment2, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment2, { mode: 'edit', isEdit: true, slug: query.slug })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/apartment2?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Option,
    { key: i.toString(36) + i },
    i.toString(36) + i + ' value'
  ));
}

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        category: 'khu-park-hill',
        price1: 0,
        price2: 0
      }
    };
    if (this.props.isEdit) {
      this.init(this.props.slug);
    }
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneApartment(slug: "' + slug + '"){category, coverUrl, slug, title, body, price1, price2, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneApartment
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/apartment/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push({
        pathname: '/admin/apartment',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/apartment/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.updateNews(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.addNews(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'T\u1EF1a \u0111\u1EC1:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'T\u1EF1a \u0111\u1EC1',
                    defaultValue: this.state.data.title,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            title: value,
                            slug: newSlug()
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Gi\xE1 g\u1ED1c:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
                    defaultValue: this.state.data.price1 || 0,
                    min: 0,
                    formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
                    parser: value => value.replace(/(,*)/g, ''),
                    style: { minWidth: 200 },
                    onChange: value => {
                      if (parseInt(value).isNaN) {
                        value = 0;
                      }
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            price1: parseInt(value)
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Gi\xE1 khuy\u1EBFn m\xE3i:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["InputNumber"], {
                    defaultValue: this.state.data.price2 || 0,
                    min: 0,
                    formatter: value => `${value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
                    parser: value => value.replace(/(,*)/g, ''),
                    style: { minWidth: 200 },
                    onChange: value => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            price2: parseInt(value)
                          })
                        });
                      });
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    }
                  },
                  'X\xF3a \u1EA3nh '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null)
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                  { className: 'padding-5' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    }
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (EditNewsComponent);

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getApartments();
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Table"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Thead"],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Tr"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'Ti\xEAu \u0111\u1EC1'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'B\u1EA3ng gi\xE1'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'Rating'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Th"],
                null,
                'Ch\u1EC9nh s\u1EEDa'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Tbody"],
            null,
            this.state.data.map((el, key) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Tr"],
                { key: key
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  el.title.length > 53 ? el.title.slice(0, 50) + '...' : el.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    el.price2 || el.price1 || 'Liên hệ'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    el.rating,
                    ' (',
                    el.numRate,
                    ')'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_5_react_super_responsive_table__["Td"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
                      { to: "/admin/apartment?v=edit&slug=" + el.slug },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_antd__["Button"],
                        { type: 'danger' },
                        'S\u1EEDa'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_antd__["Popconfirm"],
                      { placement: 'right',
                        onConfirm: () => {
                          let that = this;
                          __WEBPACK_IMPORTED_MODULE_7_axios___default.a.post('/api/apartment/delete', { slug: el.slug }).then(res => {
                            that.getApartments();
                            console.log('Đã xóa');
                          }).catch(err => {
                            message.error('Có lỗi');
                          });
                        },
                        okText: 'Ch\u1EAFc ch\u1EAFn x\xF3a', cancelText: 'H\u1EE7y' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_antd__["Button"],
                        {
                          type: 'primary'
                        },
                        'X\xF3a'
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
  getApartments() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getApartments(type:"khu-park-hill"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at}}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getApartments
        });
      });
    })();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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



const title = 'Căn Hộ Mua Bán & Chuyển Nhượng ';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/apartment3',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/apartment3?v=list' };
      }
      const { App, EditApartment3, ListApartment3 } = yield __webpack_require__(9);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListApartment3, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment3, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditApartment3, { mode: 'edit', isEdit: true, slug: query.slug })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/apartment3?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_TreeSelect__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */










const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Option,
    { key: i.toString(36) + i },
    i.toString(36) + i + ' value'
  ));
}

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.isEdit) this.init(nextProps.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneCategory(slug: "' + slug + '"){slug, body, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneCategory
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/category/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push({
        pathname: '/admin/category',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/category/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.updateNews(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.addNews(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
            { className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Components_CKEditor__["a" /* default */], {
              id: 1,
              value: this.state.data.body || '',
              onChange: value => {
                this.setState(prev => {
                  return _extends({}, prev, {
                    data: _extends({}, prev.data, {
                      body: value
                    })
                  });
                });
              }
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (EditNewsComponent);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getList();
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data })
    );
  }
  getList() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getCategories{title, slug, coverUrl, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getCategories
        });
      });
    })();
  }
}

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    text.length > 53 ? text.slice(0, 50) + '...' : text
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/category?v=edit&slug=" + record.slug },
      'S\u1EEDa'
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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



const title = 'Danh muc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/category',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/category?v=list' };
      }
      const { App, EditCategory, ListCategories } = yield __webpack_require__(9);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListCategories, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditCategory, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditCategory, { mode: 'edit', isEdit: true, slug: query.slug })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/category?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Admin extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders || []
    };
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Row"], { className: 'padding-5' })
    );
  }
}

const columns = [{
  title: 'Thời gian đặt hàng',
  dataIndex: 'created_at',
  key: 'created_at',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'span',
      { style: { color: 'blue' } },
      __WEBPACK_IMPORTED_MODULE_2_moment___default()(text).format('LT')
    ),
    ', ',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'b',
      null,
      __WEBPACK_IMPORTED_MODULE_2_moment___default()(text).format('L')
    )
  )
}, {
  title: 'Tên',
  dataIndex: 'name',
  key: 'name',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    text
  )
}, {
  title: 'Số điện thoại',
  dataIndex: 'phone',
  key: 'phone',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { href: "tel:" + text },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
        null,
        'G\u1ECDi \u0111i\u1EC7n'
      )
    ),
    ' ',
    text
  )
}, {
  title: 'Số lượng (kg)',
  dataIndex: 'quantity',
  key: 'quantity',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    text
  )
}, {
  title: 'Sản phẩm',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    mapProduct(record.product)
  )
}, {
  title: 'Địa chỉ',
  dataIndex: 'address',
  key: 'address',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    text
  )
}];

function mapProduct(slug) {
  switch (slug) {
    case 'com-kho-hoa-vang':
      return 'Cốm khô hoa vàng';
      break;
    case 'Chả Cốm':
      return 'Chả Cốm';
      break;
    case 'com-non-me-tri':
      return 'Cốm Non Mễ Trì';
      break;
    default:
      return '';
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(3);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/',

  action({ query }) {
    return _asyncToGenerator(function* () {
      const { App, Dashboard } = yield __webpack_require__(9);

      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_fetch__["a" /* default */])('/graphql', {
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
      const { data } = yield resp.json();
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dashboard, { title: title, orders: data.getOrders })
        )
      };
    })();
  }
});

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// import {Tag, Input, Tooltip, Button, DatePicker, Select} from 'antd';
// import ColorPic from '../Components/ColorPicker'
// import axios from 'axios';
var slug = __webpack_require__(199);
class EditorComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(html) {
    this.setState({ editorHtml: html });
  }
  componentDidMount() {}

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { width: 800, margin: '10px auto' } });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditorComponent));

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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

const title = 'Admin Page';
const isAdmin = false;

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/admin',
  children: [__webpack_require__(116).default, __webpack_require__(120).default, __webpack_require__(131).default, __webpack_require__(105).default, __webpack_require__(108).default, __webpack_require__(111).default, __webpack_require__(114).default,
  // require('./editor').default,
  __webpack_require__(126).default, __webpack_require__(123).default, __webpack_require__(127).default, __webpack_require__(129).default],
  action({ store, next }) {
    return _asyncToGenerator(function* () {
      let user = store.getState().user;

      const route = yield next();
      // Provide default values for title, description etc.
      route.title = `${route.title || 'Amdmin Page'}`;
      return route;
    })();
  }

});

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageEditor__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





var Waypoint = __webpack_require__(194);



if (false) {
  message.config({
    top: 20,
    duration: 2.5
  });
}

const Dragger = __WEBPACK_IMPORTED_MODULE_2_antd__["Upload"].Dragger;

var list = [];
for (let i = 0; i < 50; i++) {
  list.push(i);
}

const props = {
  name: 'image',
  multiple: true,
  showUploadList: false,
  action: '/upload/image'
};

const text = 'Đồng ý?';

class Library extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyImageUrl: 'abc',
      copied: false,
      uploadArea: false,
      visible: false,
      editImage: false,
      filter: '',
      time: new Date().toISOString(),
      imgs: [],
      selectedImage: {},
      vImg: '?v=' + new Date().getTime(),
      imageRef: null
    };
    this.fetchImage(40, this.state.time);
  }

  fetchImage(num, time, reset = true) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ listImage(num: ' + num + ', time: "' + time + '", filter: "' + _this.state.filter + '") { _id slug name type fileSize dimensions {width height} userUpload created_at } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();

      _this.setState(function (prevState) {
        if (data.listImage.length > 0) {
          let newImgs;
          if (reset) {
            newImgs = data.listImage;
          } else {
            newImgs = prevState.imgs.concat(data.listImage);
          }
          return _extends({}, prevState, {
            imgs: newImgs,
            time: newImgs[newImgs.length - 1].created_at
          });
        }
      });
    })();
  }
  showModal(el) {
    this.setState({
      visible: true,
      selectedImage: el
    });
  }
  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  }
  handleCancel(e) {
    this.setState({
      visible: false,
      imageRef: null
    });
  }
  handleOkEditImage(e) {
    this.setState({
      editImage: false
    });
  }
  handleCancelEditImage(e) {
    this.setState({
      editImage: false
    });
  }
  beforeUpload(file) {
    const isImage = file.type.match('image*');
    if (!isImage) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('You can only upload Image file!');
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Image must smaller than 5MB!');
    }
    return isImage && isLt5M;
  }

  _handleWaypointEnter() {
    alert('loading more ...');
  }

  onChange(info) {
    const status = info.file.status;
    if (status !== 'uploading') {
      // console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      this.setState(prevState => {
        var newImgs = prevState.imgs;
        newImgs.unshift(info.file.response);
        return _extends({}, prevState, {
          imgs: newImgs
        });
      });
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 16 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
            {
              onClick: () => {
                this.setState((preState, curProps) => {
                  return _extends({}, preState, {
                    uploadArea: !preState.uploadArea
                  });
                });
              }
            },
            'Th\xEAm \u1EA3nh'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
          { sm: 8 },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Input"], { size: 'large', placeholder: 'Search by name',
            onChange: e => {
              let newInput = e.target.value;
              this.setState(prevState => {
                return _extends({}, prevState, {
                  filter: newInput
                });
              });
              this.fetchImage(40, this.state.time);
            }
          })
        )
      ),
      this.state.uploadArea && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
        { className: 'padding-5 margin-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginTop: 16, height: 180 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Dragger,
            _extends({}, props, {
              onChange: info => this.onChange(info),
              beforeUpload: this.beforeUpload
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-drag-icon' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_antd__["Icon"], { type: 'inbox' })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-text' },
              'K\xE9o th\u1EA3 c\xE1c c\xE1c file v\xE0o b\u1EA5t k\xEC n\u01A1i n\xE0o tr\xEAn v\xF9ng n\xE0y \u0111\u1EC3 t\u1EA3i l\xEAn.'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'p',
              { className: 'ant-upload-hint' },
              'Ho\u1EB7c b\u1EA5m v\xE0o v\xF9ng n\xE0y \u0111\u1EC3 ch\u1ECDn \u1EA3nh'
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: { background: '#ECECEC' } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          null,
          this.state.imgs.map((el, key) => {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
              { xs: 12, sm: 6, md: 4, lg: 4, key: key, className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
                { bordered: false, className: 'imgWr',
                  onClick: () => this.showModal(el)
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/small/" + el.name + "?t=" + el.created_at })
              )
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            { xs: 12, sm: 6, md: 4, lg: 4, className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr',
                onClick: () => this.fetchImage(40, this.state.imgs[this.state.imgs.length - 1].created_at, false)
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://www.loadebar.com/images/template/load-more.png' })
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Modal"],
        { title: 'Basic Modal', visible: this.state.visible,
          onOk: e => this.handleOk(e),
          onCancel: e => this.handleCancel(e),
          width: '90%',
          maskClosable: true,
          className: 'img'
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            {
              lg: 12
            },
            this.state.selectedImage.name && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Card"],
              { bordered: false, className: 'imgWr'
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: "/image/" + this.state.selectedImage.name + this.state.vImg })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_antd__["Col"],
            {
              lg: 12,
              className: 'padding-5'
            },
            this.state.selectedImage.name && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'T\xEAn t\u1EADp tin:'
              ),
              ' ',
              this.state.selectedImage.name
            ),
            this.state.selectedImage.type && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'Lo\u1EA1i t\u1EADp tin:'
              ),
              ' ',
              this.state.selectedImage.type
            ),
            this.state.selectedImage.created_at && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                '\u0110\xE3 t\u1EA3i l\xEAn v\xE0o l\xFAc:'
              ),
              ' ',
              this.state.selectedImage.created_at
            ),
            !!this.state.selectedImage.fileSize && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'Dung l\u01B0\u1EE3ng t\u1EC7p:'
              ),
              ' ',
              this.state.selectedImage.fileSize,
              ' KB'
            ),
            this.state.selectedImage.dimensions && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'b',
                null,
                'K\xEDch th\u01B0\u1EDBc:'
              ),
              ' ',
              this.state.selectedImage.dimensions.width,
              ' \xD7 ',
              this.state.selectedImage.dimensions.height
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'Link :'
            ),
            ' ',
            this.state.copied ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'red' } },
              'Copied !"'
            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { style: { color: 'blue' } },
              "/image/" + this.state.selectedImage.name
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_react_copy_to_clipboard___default.a,
                { text: "/image/" + this.state.selectedImage.name,
                  onCopy: () => {
                    this.setState({ copied: true });
                    setTimeout(() => {
                      this.setState({ copied: false });
                    }, 1000);
                  } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                  { type: 'primary' },
                  'Copy link \u1EA3nh'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Popconfirm"],
                { placement: 'right', title: text,
                  onConfirm: () => {
                    __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/image/min/' + this.state.selectedImage.name, {}).then(res => {
                      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        '\u0110\xE3 gi\u1EA3m t\u1EEB ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          { style: { color: 'red' } },
                          Math.floor(res.data.oldSize).toLocaleString(),
                          ' kB'
                        ),
                        ' c\xF2n ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          { style: { color: 'blue' } },
                          Math.floor(res.data.newSize).toLocaleString(),
                          ' kB'
                        )
                      ));
                      this.setState(prev => {
                        return _extends({}, prev, {
                          vImg: '?v=' + new Date().getTime()
                        });
                      });
                    }).catch(err => {
                      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Có lỗi');
                    });
                  },
                  okText: '\u0110\u1ED3ng \xFD', cancelText: 'H\u1EE7y' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                  {
                    type: 'primary'
                  },
                  'Gi\u1EA3m ch\u1EA5t l\u01B0\u1EE3ng \u1EA3nh'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                {
                  type: 'primary',
                  onClick: () => {
                    this.setState(prev => {
                      return _extends({}, prev, {
                        visible: false,
                        editImage: true,
                        imageRef: "/image/" + this.state.selectedImage.name + this.state.vImg
                      });
                    });
                  }
                },
                'Ch\u1EC9nh s\u1EEDa \u1EA3nh n\xE0y'
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_antd__["Row"],
              { className: 'padding-5' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_antd__["Popconfirm"],
                { placement: 'right', title: text,
                  onConfirm: () => {
                    console.log(' confirm');
                    __WEBPACK_IMPORTED_MODULE_6_axios___default.a.post('/image/delete', {
                      slug: this.state.selectedImage.slug,
                      name: this.state.selectedImage.name
                    }).then(res => {
                      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].success('Xóa thành công');
                      let currentTime = new Date().toISOString();
                      this.setState(prev => {
                        return _extends({}, prev, {
                          time: currentTime,
                          editImage: false,
                          visible: false
                        });
                      });
                      this.fetchImage(40, currentTime);
                    }).catch(err => {
                      __WEBPACK_IMPORTED_MODULE_2_antd__["message"].error('Có lỗi');
                    });
                  },
                  okText: '\u0110\u1ED3ng \xFD x\xF3a', cancelText: 'H\u1EE7y' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_2_antd__["Button"],
                  { type: 'danger' },
                  'X\xF3a \u1EA3nh'
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_antd__["Modal"],
        { title: 'Ch\u1EC9nh s\u1EEDa \u1EA3nh', visible: this.state.editImage,
          onOk: e => this.handleOkEditImage(e),
          onCancel: e => this.handleCancelEditImage(e),
          style: { top: 0 },
          width: '100%',
          maskClosable: true,
          className: 'img'
        },
        this.state.imageRef && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_ImageEditor__["a" /* default */], {
          imageRef: this.state.imageRef,
          width: this.state.selectedImage.dimensions.width,
          height: this.state.selectedImage.dimensions.height,
          slug: this.state.selectedImage.slug,
          name: this.state.selectedImage.name,
          handleOk: () => {
            console.log('close modal !!');
            let currentTime = new Date().toISOString();
            this.setState(prev => {
              return _extends({}, prev, {
                time: currentTime,
                editImage: false,
                visible: false
              });
            });
            this.fetchImage(40, currentTime);
          }
        })
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Library);

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(3);
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

const title = 'Library';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/library',

  action({ store }) {
    return _asyncToGenerator(function* () {
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__["showLoading"])());
      const { App, Library } = yield __webpack_require__(9);
      store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux_loading_bar__["hideLoading"])());
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Library, { title: title })
        )
      };
    })();
  }
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Tags__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */









const TabPane = __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_1_antd__["Select"].Option;

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOneNews(slug: "' + slug + '"){category, coverUrl, slug, public, title, description, body, view, tags, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOneNews
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }


  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/post/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3__core_history__["a" /* default */].push({
        pathname: '/admin/news',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/api/post/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.updateNews(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
            {
              size: 'large',
              type: 'primary', style: { float: 'right' },
              onClick: () => {
                this.addNews(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'T\u1EF1a \u0111\u1EC1:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'T\u1EF1a \u0111\u1EC1',
                    defaultValue: this.state.data.title,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            title: value,
                            slug: newSlug()
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Danh m\u1EE5c:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd__["Select"],
                    {
                      defaultValue: this.state.data.category,
                      style: { width: '100%' },
                      onChange: value => {
                        this.setState(prev => {
                          return _extends({}, prev, {
                            data: _extends({}, prev.data, {
                              category: value
                            })
                          });
                        });
                      }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'mon-ngon-tu-com' },
                      'M\xF3n ngon t\u1EEB c\u1ED1m'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      Option,
                      { value: 'cach-lam-mon-ngon-tai-nha' },
                      'C\xE1ch l\xE0m m\xF3n ngon t\u1EA1i nh\xE0'
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'Tags:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Components_Tags__["a" /* default */], { defaultValue: this.state.data.tags,
                    handleChange: tags => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            tags: tags
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' } },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' } },
                        this.state.data.description.length
                      ),
                      ' /150) :'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { type: 'textarea',
                    autosize: { minRows: 2, maxRows: 10 },
                    defaultValue: this.state.data.description,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            description: value
                          })
                        });
                      });
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'b',
                    null,
                    'Public: '
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], { checked: this.state.data.public || false, onChange: value => {
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            public: value
                          })
                        });
                      });
                    } })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    }
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_1_antd__["Col"],
                  { className: 'padding-5' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    }
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (EditNewsComponent);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */







class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      data: []
    };
    this.getFoodNews(1);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data })
    );
  }
  getFoodNews(page) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getFoodNews(page:' + page + ' ){page,totalPage,data{category, coverUrl, slug, public, title, description, body, view, tags, created_at}}}'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getFoodNews.data
        });
      });
    })();
  }
}

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    text.length > 53 ? text.slice(0, 50) + '...' : text
  )
}, {
  title: 'Lượt xem',
  dataIndex: 'view',
  key: 'view'
}, {
  title: 'Công khai',
  dataIndex: 'public',
  key: 'public',
  render: boolean => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    boolean ? 'true' : 'false'
  )
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/monngon?v=edit&slug=" + record.slug },
      'S\u1EEDa'
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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



const title = 'Mon ngon';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/monngon',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/monngon?v=list' };
      }
      const { App, EditFoods, ListFoods } = yield __webpack_require__(9);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListFoods, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditFoods, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditFoods, { mode: 'edit', isEdit: true, slug: query.slug })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/mongon?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_Tags__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__ = __webpack_require__(20);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */











const TabPane = __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"].TabPane;

const Option = __WEBPACK_IMPORTED_MODULE_3_antd__["Select"].Option;

class EditNewsComponent extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.handleOk = e => {
      console.log(e);
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.state = {
      loading: this.props.isEdit,
      selectImageType: '',
      showModalSelectImage: false,
      data: {
        description: '',
        tags: []
      }
    };
    if (this.props.isEdit) this.init(this.props.slug);
  }

  init(slug) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ getOnePost(slug: "' + slug + '"){ coverUrl, slug, public, title, description, body, view, tags, created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          data: data.getOnePost
        });
      });
    })();
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        data: _extends({}, prevState.data, {
          coverUrl: '/image/' + img.name
        })
      });
    });
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          data: _extends({}, prevState.data, {
            coverUrl: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  addNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/new', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Thêm mới thành công!');
      __WEBPACK_IMPORTED_MODULE_5__core_history__["a" /* default */].push({
        pathname: '/admin/news',
        search: '?v=edit&slug=' + res.data.slug
      });
    }).catch(err => {
      console.log(err);
    });
  }

  updateNews(post) {
    __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post('/api/post/update', post).then(res => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_3_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    if (this.props.loading) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'loading...'
      );
    }
    return !this.state.loading && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'admin-editor' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        { className: 'padding-5', style: { marginBottom: 15 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Affix"],
          {
            offsetTop: 10
          },
          this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.updateNews(this.state.data);
              }
            },
            'C\u1EADp nh\u1EADp'
          ),
          !this.props.isEdit && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
            { type: 'primary', style: { float: 'right' },
              size: 'large',
              onClick: () => {
                this.addNews(this.state.data);
              }
            },
            'Th\xEAm m\u1EDBi'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_antd__["Tabs"],
          { type: 'card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'Th\xF4ng tin b\xE0i vi\u1EBFt', key: '1' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'T\u1EF1a \u0111\u1EC1:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'T\u1EF1a \u0111\u1EC1',
                    defaultValue: this.state.data.title,
                    onChange: e => {
                      let that = this;
                      let value = e.target.value;
                      let newSlug = function () {
                        if (that.props.isEdit) return that.state.data.slug;else {
                          return slugify(value);
                        }
                      };
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            title: value,
                            slug: newSlug()
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'slug:'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], {
                    placeholder: 'Slug',
                    disabled: this.props.isEdit,
                    value: this.state.data.slug,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            slug: value
                          })
                        });
                      });
                    }
                  })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      'M\xF4 t\u1EA3 ( ',
                      this.state.data.description.length >= 140 && this.state.data.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'blue' } },
                        this.state.data.description.length
                      ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: 'red' } },
                        this.state.data.description.length
                      ),
                      ' /150) :'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd__["Input"], { type: 'textarea',
                    autosize: { minRows: 2, maxRows: 10 },
                    defaultValue: this.state.data.description,
                    onChange: e => {
                      let value = e.target.value;
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            description: value
                          })
                        });
                      });
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                { sm: 12, className: 'padding-5' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: { marginBottom: 16 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'b',
                      null,
                      '\u1EA2nh \u0111\u1EA1i di\u1EC7n:'
                    )
                  ),
                  !this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_ImageUpload__["a" /* default */], {
                    isMultiple: false,
                    handleUpload: img => this.handleCoverUpload(img)
                  }),
                  this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_3_antd__["Card"],
                    { bordered: false, className: 'imgWr',
                      onClick: () => this.showModalSelectImage('cover')
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.data.coverUrl })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  { style: { marginRight: 10 },
                    onClick: () => this.showModalSelectImage('cover')
                  },
                  'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
                ),
                this.state.data.coverUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Button"],
                  {
                    onClick: () => {
                      this.setState(prevState => {
                        return _extends({}, prevState, {
                          data: _extends({}, prevState.data, {
                            coverUrl: null
                          })
                        });
                      });
                    }
                  },
                  'X\xF3a \u1EA3nh '
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            TabPane,
            { tab: 'N\u1ED9i dung', key: '2' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_antd__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { maxWidth: 800, padding: 5, border: '1px solid #ddd', margin: '0 auto' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_3_antd__["Col"],
                  { className: 'padding-5' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__Components_CKEditor__["a" /* default */], {
                    id: 1,
                    value: this.state.data.body || '',
                    onChange: value => {
                      console.log(value);
                      this.setState(prev => {
                        return _extends({}, prev, {
                          data: _extends({}, prev.data, {
                            body: value
                          })
                        });
                      });
                    }
                  })
                )
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
      )
    );
  }
}

function slugify(str) {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__style_css___default.a)(EditNewsComponent));

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_universal_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_universal_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_history__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class ListNews extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1,
      totalPage: 1,
      data: []
    };
    this.getPosts(1);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], { columns: columns, rowKey: record => record.slug, dataSource: this.state.data })
    );
  }
  getPosts(page) {
    var _this = this;

    return _asyncToGenerator(function* () {

      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{getPosts(page:' + page + ' ){page,totalPage,data{coverUrl, slug, public, title, description, body, view, tags, created_at}}}'
        }),
        credentials: 'include'
      });

      const { data } = yield resp.json();
      // console.log(data.getPosts)
      _this.setState(function (prev) {
        return _extends({}, prev, {
          loading: false,
          page: data.getPosts.page,
          totalPage: data.getPosts.totalPage,
          data: data.getPosts.data
        });
      });
    })();
  }
}

const columns = [{
  title: 'Tựa đề',
  dataIndex: 'title',
  key: 'title',
  render: text => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    text.length > 53 ? text.slice(0, 50) + '...' : text
  )
}, {
  title: 'Lượt xem',
  dataIndex: 'view',
  key: 'view'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__components_Link__["a" /* default */],
      { to: "/admin/news?v=edit&slug=" + record.slug },
      'S\u1EEDa'
    )
  )
}];

/* harmony default export */ __webpack_exports__["default"] = (ListNews);

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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



const title = 'Tin Tuc';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/news',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/news?v=list' };
      }
      const { App, EditNews, ListNews } = yield __webpack_require__(9);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListNews, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditNews, { mode: 'edit', isEdit: true, slug: query.slug })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/news?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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



const title = 'Sản phẩm';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/product',

  action({ query }) {
    return _asyncToGenerator(function* () {
      if (!query.v) {
        return { redirect: '/admin/news?v=list' };
      }
      const { App, EditProduct, ListProduct } = yield __webpack_require__(9);
      let component = {};

      if (query.v === 'list') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListProduct, { title: title })
        );
      } else if (query.v === 'add') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditProduct, { mode: 'add', isEdit: false })
        );
      } else if (query.slug && query.v === 'edit') {
        component = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(EditProduct, { mode: 'edit', isEdit: true, slug: query.slug })
        );
      } else if (query.v !== 'list') {
        return { redirect: '/admin/news?v=list' };
      }

      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component
      };
    })();
  }
});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */








class View extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);

    this.handleOkSEO = e => {
      if (this.state.new) {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/seo/new', this.state.selectSEO).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success("Thêm thành công");
          this.setState(prev => {
            return _extends({}, prev, {
              showModal: false,
              selectSEO: {
                description: '',
                og_description: ''
              }
            });
          });
          this.fetchAllSeo();
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Có lỗi');
          console.log(err);
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/api/seo/update', this.state.selectSEO).then(res => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success("Cập nhập thành công");
          this.setState(prev => {
            return _extends({}, prev, {
              showModal: false,
              selectSEO: {
                description: '',
                og_description: ''
              }
            });
          });
          this.fetchAllSeo();
        }).catch(err => {
          __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Có lỗi');
          console.log(err);
        });
      }
    };

    this.handleOk = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.handleCancel = e => {
      this.setState({
        modalSelectImage: false
      });
    };

    this.showModalSelectImage = type => {
      this.setState(prev => {
        return _extends({}, prev, {
          modalSelectImage: true,
          selectImageType: type
        });
      });
    };

    this.state = {
      selectImageType: '',
      showModalSelectImage: false,
      new: true,
      listSEO: this.props.listSEO || [],
      showModal: false,
      selectSEO: {
        description: '',
        og_description: ''
      },
      filter_text: ''
    };
    this.fetchAllSeo();
  }

  fetchAllSeo(filter = this.state.filter_text) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield fetch('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ allSeo(filter:"' + filter + '"){url,title,description,og_title,og_image,og_description,created_at} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState(function (prev) {
        return _extends({}, prev, {
          listSEO: data.allSeo
        });
      });
    })();
  }

  handleSelectImage(img) {
    if (this.state.selectImageType === 'cover') {
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false,
          selectSEO: _extends({}, prevState.selectSEO, {
            og_image: '/image/' + img.name
          })
        });
      });
    } else {
      window.prompt("Copy to clipboard: Ctrl+C, Enter", '/image/' + img.name);
      this.setState(prevState => {
        return _extends({}, prevState, {
          modalSelectImage: false
        });
      });
    }
  }

  handleCoverUpload(img) {
    this.setState(prevState => {
      return _extends({}, prevState, {
        selectSEO: _extends({}, prevState.selectSEO, {
          og_image: '/image/' + img.name
        })
      });
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            type: 'primary',
            style: { marginRight: 10 },
            onClick: () => {
              this.setState(prev => {
                return _extends({}, prev, {
                  new: true,
                  showModal: true,
                  selectSEO: {
                    description: '',
                    og_description: ''
                  }
                });
              });
            }
          },
          'Th\xEAm m\u1EDBi'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"].Search, {
          placeholder: 'T\xECm ki\u1EBFm',
          style: { width: 200 },
          onSearch: value => {
            this.setState(prev => {
              return _extends({}, prev, {
                filter_text: value
              });
            });
            this.fetchAllSeo(value);
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Table"], {
          columns: columns, rowKey: record => record.created_at, dataSource: this.state.listSEO,
          onRowClick: (record, index) => {
            console.log(record);
            this.setState(prev => {
              return _extends({}, prev, {
                new: false,
                showModal: true,
                selectSEO: record
              });
            });
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          width: '90%',
          wrapClassName: 'vertical-center-modal',
          visible: this.state.showModal,
          cancelText: '\u0110\xF3ng',
          okText: this.state.new ? "Thêm mới" : "Cập nhập",
          onCancel: () => this.setState({ showModal: false }),
          onOk: () => this.handleOkSEO()
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'URL: '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            placeholder: 'URL',
            value: this.state.selectSEO.url || '',
            onChange: e => {
              let value = e.target.value;
              this.setState(prev => {
                return _extends({}, prev, {
                  selectSEO: _extends({}, prev.selectSEO, {
                    url: value
                  })
                });
              });
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'T\u1EF1a \u0111\u1EC1: '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            placeholder: 'T\u1EF1a \u0111\u1EC1',
            value: this.state.selectSEO.title || '',
            onChange: e => {
              let value = e.target.value;
              this.setState(prev => {
                return _extends({}, prev, {
                  selectSEO: _extends({}, prev.selectSEO, {
                    title: value
                  })
                });
              });
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'M\xF4 t\u1EA3 ( ',
              this.state.selectSEO.description.length >= 140 && this.state.selectSEO.description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'blue' } },
                this.state.selectSEO.description.length
              ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'red' } },
                this.state.selectSEO.description.length
              ),
              ' /150) :'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { type: 'textarea',
            autosize: { minRows: 2, maxRows: 10 },
            value: this.state.selectSEO.description,
            onChange: e => {
              let value = e.target.value;
              this.setState(prev => {
                return _extends({}, prev, {
                  selectSEO: _extends({}, prev.selectSEO, {
                    description: value
                  })
                });
              });
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'T\u1EF1a \u0111\u1EC1 (OG): '
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], {
            placeholder: 'T\u1EF1a \u0111\u1EC1 (OG)',
            value: this.state.selectSEO.og_title || '',
            onChange: e => {
              let value = e.target.value;
              this.setState(prev => {
                return _extends({}, prev, {
                  selectSEO: _extends({}, prev.selectSEO, {
                    og_title: value
                  })
                });
              });
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              '\u1EA2nh \u0111\u1EA1i di\u1EC7n (OG):'
            )
          ),
          !this.state.selectSEO.og_image && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Components_ImageUpload__["a" /* default */], {
            isMultiple: false,
            handleUpload: img => this.handleCoverUpload(img)
          }),
          this.state.selectSEO.og_image && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { width: 180, height: 150 } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_antd__["Card"],
              {
                bordered: false, className: 'imgWr',
                onClick: () => this.showModalSelectImage('cover')
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: this.state.selectSEO.og_image })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            style: { marginRight: 10 },
            onClick: () => this.showModalSelectImage('cover')
          },
          'Ch\u1ECDn \u1EA3nh t\u1EEB th\u01B0 vi\u1EC7n'
        ),
        this.state.selectSEO.og_image && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            onClick: () => {
              this.setState(prevState => {
                return _extends({}, prevState, {
                  selectSEO: _extends({}, prevState.selectSEO, {
                    og_image: ''
                  })
                });
              });
            }
          },
          'X\xF3a \u1EA3nh '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: { marginBottom: 16, marginTop: 16 } },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'b',
              null,
              'M\xF4 t\u1EA3 ( ',
              this.state.selectSEO.og_description.length >= 140 && this.state.selectSEO.og_description.length <= 150 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'blue' } },
                this.state.selectSEO.og_description.length
              ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                { style: { color: 'red' } },
                this.state.selectSEO.og_description.length
              ),
              ' /150) :'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { type: 'textarea',
            autosize: { minRows: 2, maxRows: 10 },
            value: this.state.selectSEO.og_description,
            onChange: e => {
              let value = e.target.value;
              this.setState(prev => {
                return _extends({}, prev, {
                  selectSEO: _extends({}, prev.selectSEO, {
                    og_description: value
                  })
                });
              });
            }
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Modal"],
        {
          style: { top: 30 },
          width: '90%',
          title: 'Basic Modal', visible: this.state.modalSelectImage,
          onOk: this.handleOk, onCancel: this.handleCancel
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Components_ImageSelect__["a" /* default */], { handleSelect: img => this.handleSelectImage(img) })
      )
    );
  }
}

const columns = [{
  title: 'Link trang web',
  dataIndex: 'url',
  key: 'url',
  render: url => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    url
  )
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
  render: title => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'span',
    null,
    title
  )
}];

function mapProduct(slug) {
  switch (slug) {
    case 'com-kho-hoa-vang':
      return 'Cốm khô hoa vàng';
      break;
    case 'Chả Cốm':
      return 'Chả Cốm';
      break;
    case 'com-non-me-tri':
      return 'Cốm Non Mễ Trì';
      break;
    default:
      return '';
      break;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_fetch__ = __webpack_require__(3);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




const title = 'Dashboard';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/seo',

  action({ query }) {
    return _asyncToGenerator(function* () {
      const { App, Seo } = yield __webpack_require__(9);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Seo, { title: title })
        )
      };
    })();
  }
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



// import CodeMirror from '../Components/CodeMirror'


const Panel = __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"].Panel;
var CodeMirror = __webpack_require__(205);
if (false) {
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/xml/xml');
  require('codemirror/mode/css/css');
}

class Setting extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = {
      setting: {}
    };
    this.init();
  }

  init() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: '{ setting{ssr, css, scriptTop, scriptBottom, adminId, emailAdmin} }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      _this.setState({
        setting: data.setting
      });
    })();
  }

  toggleSSR() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2.setState(function (prevState) {
        return _extends({}, prevState, {
          setting: _extends({}, prevState.setting, {
            ssr: !prevState.setting.ssr
          })
        });
      });
      const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: 'mutation { updateSetting(ssr: ' + !_this2.state.setting.ssr + ') { ssr } }'
        }),
        credentials: 'include'
      });
      const { data } = yield resp.json();
      if (data.updateSetting) {
        __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Update successful');
        _this2.setState(function (prevState) {
          return _extends({}, prevState, {
            setting: _extends({}, prevState.setting, {
              ssr: data.updateSetting.ssr
            })
          });
        });
      } else {
        _this2.setState(function (prevState) {
          return _extends({}, prevState, {
            setting: _extends({}, prevState.setting, {
              ssr: !prevState.setting.ssr
            })
          });
        });
      }
    })();
  }

  updateSetting(setting) {
    __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/api/setting/update', setting).then(res => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].success('Cập nhập thành công!');
    }).catch(err => {
      __WEBPACK_IMPORTED_MODULE_1_antd__["message"].error('Cập nhập thất bại');
    });
  }

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      this.state.setting.ssr !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'SSR: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Switch"], { checked: this.state.setting.ssr, onChange: () => this.toggleSSR() })
      ),
      this.state.setting.adminId !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'Facebook Admin ID: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.setting.adminId, onChange: e => {
            let value = e.target.value;
            this.setState(prev => {
              return _extends({}, prev, {
                setting: _extends({}, prev.setting, {
                  adminId: value
                })
              });
            });
          } })
      ),
      this.state.setting.emailAdmin !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'b',
          null,
          'Facebook Admin ID: '
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd__["Input"], { size: 'large', defaultValue: this.state.setting.emailAdmin, onChange: e => {
            let value = e.target.value;
            this.setState(prev => {
              return _extends({}, prev, {
                setting: _extends({}, prev.setting, {
                  emailAdmin: value
                })
              });
            });
          } })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Collapse"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'STYLESHEETS', key: '1' },
          this.state.setting.css !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.css, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    css: value
                  })
                });
              })
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'Javascript đầu trang', key: '2' },
          this.state.setting.scriptTop !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.scriptTop, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    scriptTop: value
                  })
                });
              })
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Panel,
          { header: 'Javascript cuối trang', key: '3' },
          this.state.setting.scriptBottom !== undefined && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
            { className: 'padding-5' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CodeMirror, {
              value: this.state.setting.scriptBottom, onChange: value => this.setState(prev => {
                return _extends({}, prev, {
                  setting: _extends({}, prev.setting, {
                    scriptBottom: value
                  })
                });
              })
            })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_antd__["Row"],
        { className: 'padding-5' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_antd__["Button"],
          {
            size: 'large',
            type: 'primary',
            onClick: () => {
              this.updateSetting(this.state.setting);
            }
          },
          'C\u1EADp nh\u1EADp'
        )
      )
    );
  }
}

Setting.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Setting);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
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



const title = 'Setting';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/setting',

  action({ query }) {
    return _asyncToGenerator(function* () {
      const { App, Setting } = yield __webpack_require__(9);
      return {
        title,
        chunk: 'admin',
        disableSSR: true,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          App,
          {
            name: title
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Setting, { title: title })
        )
      };
    })();
  }
});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



// import MenuMobile from '../../components/Partials/MenuMobile'



class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 5,
      currentRate: null,
      rated: false
    };
  }

  changeRate(num) {
    this.setState(prev => {
      return _extends({}, prev, {
        rate: num
      });
    });
  }

  sendRating() {
    __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/api/rating', {
      slug: this.props.data.canho.value.slug,
      rate: this.state.rate
    }).then(res => {
      this.setState(prev => {
        return _extends({}, prev, {
          currentRate: res.data.rating,
          rated: true
        });
      });
    }).catch(err => {
      alert('Có lỗi');
    });
  }

  render() {
    const canho = this.props.data.canho.value;
    const thutucAside = this.props.data.danhsachthutuc.value;
    const canhotuongtu = this.props.data.canhotuongtu.value;
    console.log('============');
    console.log(canhotuongtu);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'inner-page' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-lg-9 col-sm-8 content-row shadow bg-white', style: { paddingTop: 15 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'col-sm-4' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { height: 'auto', width: '100%', src: canho.coverUrl, alt: canho.title })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'col-sm-8', style: { textAlign: 'center', fontSize: 20 } },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'propertyStats' },
                    !canho.price2 && !canho.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'lienhe' },
                      'Li\xEAn h\u1EC7'
                    ),
                    !canho.price2 && canho.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'curPrice' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        null,
                        canho.price1.toLocaleString(),
                        ' VN\u0110'
                      )
                    ) : '',
                    canho.price2 && canho.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'curPrice' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'oldprice', style: { textDecoration: 'line-through' } },
                        canho.price1.toLocaleString()
                      ),
                      ' ',
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'b',
                        null,
                        canho.price2.toLocaleString(),
                        ' VN\u0110'
                      )
                    ) : ""
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { marginTop: 20 } },
                    '\u0110ang \u0111\u01B0\u1EE3c \u0111\xE1nh gi\xE1: ',
                    this.state.currentRate || canho.rating,
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' })
                  ),
                  !this.state.rated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { marginTop: 20 } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'gender', value: '1', checked: this.state.rate === 1,
                      onChange: () => this.changeRate(1)
                    }),
                    ' 1 ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'gender', value: '2', checked: this.state.rate === 2,
                      onChange: () => this.changeRate(2)
                    }),
                    ' 2 ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'gender', value: '3', checked: this.state.rate === 3,
                      onChange: () => this.changeRate(3)
                    }),
                    ' 3 ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'gender', value: '4', checked: this.state.rate === 4,
                      onChange: () => this.changeRate(4)
                    }),
                    ' 4 ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'radio', name: 'gender', value: '5', checked: this.state.rate === 5,
                      onChange: () => this.changeRate(5)
                    }),
                    ' 5 ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' })
                  ),
                  this.state.rated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { marginTop: 20 } },
                    'B\u1EA1n \u0111\xE3 \u0111\xE1nh gi\xE1 c\u0103n h\u1ED9 n\xE0y ',
                    this.state.rate,
                    ' ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                  !this.state.rated && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { type: 'button',
                      onClick: () => this.sendRating(),
                      className: 'btn btn-primary' },
                    'G\u1EEDi \u0111\xE1nh gi\xE1'
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row padding-20 responsive' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'Th\xF4ng tin c\u0103n h\u1ED9'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { dangerouslySetInnerHTML: { __html: canho.body } })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row padding-20 responsive' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'C\u0103n h\u1ED9 t\u01B0\u01A1ng t\u1EF1'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  null,
                  canhotuongtu.map((el, index) => {
                    if (el) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: index, className: 'col-sm-6 col-lg-6' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                          { to: '/can-ho/' + el.slug },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-image imgWr' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title })
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-content' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'listingInfo' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'figure',
                              { className: 'listerName' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                { to: '/can-ho/' + el.slug, className: 'agent-wrapper' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'agent-photo', src: '/imgs/icon_new.gif', width: 29, height: 19, alt: 'new icon' })
                              )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'propertyStats' },
                              !el.price2 && !el.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'lienhe' },
                                'Li\xEAn h\u1EC7'
                              ),
                              !el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'curPrice' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'b',
                                  null,
                                  el.price1.toLocaleString(),
                                  ' VN\u0110'
                                )
                              ) : '',
                              el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'curPrice' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'span',
                                  { className: 'oldprice', style: { textDecoration: 'line-through' } },
                                  el.price1.toLocaleString()
                                ),
                                ' ',
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'b',
                                  null,
                                  el.price2.toLocaleString(),
                                  ' VN\u0110'
                                )
                              ) : ""
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'vcard' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'h2',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                  { to: '/can-ho/' + el.slug, className: 'name align-center' },
                                  el.title
                                )
                              )
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-action' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'b',
                            null,
                            '\u0110\xE1nh gi\xE1 :'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { style: { margin: '0 5px' } },
                            el.rating,
                            ' '
                          ),
                          ' ',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' })
                        )
                      )
                    );
                  })
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__["a" /* default */], { thutuc: thutucAside })
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/can-ho/:slug',
  action({ store, params, path }) {
    return _asyncToGenerator(function* () {
      // process.env.BROWSER
      let seo = {};

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

        const { data } = yield resp.json();
        seo = data.seo || {};
        if (!data) throw new Error('Failed to load the news feed.');
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || 'Trang chủ',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */], { data: store.getState().data })
        )
      };
    })();
  }

});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);


// import MenuMobile from '../../components/Partials/MenuMobile'


class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const danhsachcanho = this.props.data.danhsachcanho.value;
    const thutucAside = this.props.data.danhsachthutuc.value;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'inner-page' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-lg-9 col-sm-8 content-row shadow bg-white', style: { paddingTop: 15 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'row', style: { marginBottom: 15, padding: 15 }, dangerouslySetInnerHTML: { __html: this.props.data.gioithieu.value.body || '' } }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row', style: { marginBottom: 15 } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'headerWr' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'header',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h2',
                      null,
                      'Danh s\xE1ch c\xE1c c\u0103n h\u1ED9'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row' },
                danhsachcanho.map((el, index) => {
                  if (el) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { key: index, className: 'col-sm-6 col-lg-4' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'card' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                        { to: '/can-ho/' + el.slug },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-image imgWr' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card-content' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'listingInfo' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'figure',
                            { className: 'listerName' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                              { to: '/can-ho/' + el.slug, className: 'agent-wrapper' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'agent-photo', src: '/imgs/icon_new.gif', width: 29, height: 19, alt: 'new icon' })
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'propertyStats' },
                            !el.price2 && !el.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'lienhe' },
                              'Li\xEAn h\u1EC7'
                            ),
                            !el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'curPrice' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'b',
                                null,
                                el.price1.toLocaleString(),
                                ' VN\u0110'
                              )
                            ) : '',
                            el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'curPrice' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'oldprice', style: { textDecoration: 'line-through' } },
                                el.price1.toLocaleString()
                              ),
                              ' ',
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'b',
                                null,
                                el.price2.toLocaleString(),
                                ' VN\u0110'
                              )
                            ) : ""
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'vcard' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'h2',
                              null,
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                { to: '/can-ho/' + el.slug, className: 'name align-center' },
                                el.title
                              )
                            )
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card-action' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          null,
                          '\u0110\xE1nh gi\xE1 :'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { margin: '0 5px' } },
                          el.rating,
                          ' '
                        ),
                        ' ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' })
                      )
                    )
                  );
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__["a" /* default */], { thutuc: thutucAside })
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/danhsach/:slug',
  action({ store, params, path }) {
    return _asyncToGenerator(function* () {
      // process.env.BROWSER
      let seo = {};

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

        const { data } = yield resp.json();
        seo = data.seo || {};
        if (!data) throw new Error('Failed to load the news feed.');
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || 'Trang chủ',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */], { data: store.getState().data })
        )
      };
    })();
  }

});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);




class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    console.log(this.props);
    const danhsachthutuc = this.props.data.danhsachthutuc.value;
    const thutucAside = this.props.data.danhsachthutuc.value;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'inner-page' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-lg-9 col-sm-8 content-row shadow bg-white', style: { paddingTop: 15 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row', style: { marginBottom: '15px 0' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'headerWr' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'header',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h2',
                      null,
                      'Th\u1EE7 t\u1EE5c ph\xE1p l\xFD'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'tab-pane fade active in', id: 'personalAds' },
                  danhsachthutuc.map((el, index) => {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: index, className: 'card card-horizontal' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'col-sm-4' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-image bg-image imgWr' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                              { to: '/thutuc/' + el.slug },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: el.coverUrl, width: '100%', height: '100%', alt: '' })
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'col-sm-8' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card-content' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'listingInfo' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'vcard' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'h2',
                                  null,
                                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                    { to: '/thutuc/' + el.slug, className: 'name' },
                                    el.title
                                  )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  'p',
                                  { className: 'listingLocation' },
                                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-map-o' }),
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__["a" /* default */], { thutuc: thutucAside })
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/danhsachthutuc',
  action({ store, params, path }) {
    return _asyncToGenerator(function* () {
      // process.env.BROWSER
      let seo = {};

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            query: '{seo(url: "' + path + '"){url,title,description,og_title,og_image,og_description},danhsachthutuc:getAllPosts{title, coverUrl, description, slug, public, view, created_at}, thutuctuongtu:getPostRelative{title, coverUrl, description, slug, public, view, created_at} }'
          }),
          credentials: 'include'
        });

        const { data } = yield resp.json();
        seo = data.seo || {};
        if (!data) throw new Error('Failed to load the news feed.');
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || 'Trang chủ',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */], { data: store.getState().data, headerName: mapSlugToName(params.slug) })
        )
      };
    })();
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
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPage; });
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class ErrorPage extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    if (false) {
      const { error } = this.props;
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          error.name
        ),
        React.createElement(
          'p',
          null,
          error.message
        ),
        React.createElement(
          'pre',
          null,
          error.stack
        )
      );
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        null,
        'Error'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Sorry, a critical error occurred on this page.'
      )
    );
  }
}

ErrorPage.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    name: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    message: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
    stack: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
  }).isRequired
};

/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__ErrorPage_css___default.a)(ErrorPage));

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);


// import MenuMobile from '../../components/Partials/MenuMobile'


class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const chothue = this.props.data.chothue.value;
    const muabankhut = this.props.data.muabankhut.value;
    const muabanparkhill = this.props.data.muabanparkhill.value;
    const thutuctrangchu = this.props.data.thutuctrangchu.value.slice(0, 4);
    const thutucAside = this.props.data.thutuctrangchu.value;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row', style: { marginTop: 30 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container tongquan shadow bg-white' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-12' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h2',
              { className: 'divider gradient' },
              'T\u1ED5ng quan d\u1EF1 \xE1n'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-12 padding-20' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/bando.jpg', width: '100%', height: 'auto', alt: '' })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-5 padding-20', style: { fontWeight: 'bold', paddingTop: '0 !important' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'noidung' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'wpb_wrapper' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'cms-heading-wrapper heading-default ' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'cms-heading-inner' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'cms-heading-content' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'h3',
                        { className: 'title', style: { color: '#000000' } },
                        'T\u1ED4NG QUAN D\u1EF0 \xC1N',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          null,
                          '.'
                        )
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'wpb_text_column wpb_content_element ' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'wpb_wrapper' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'ul',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            null,
                            'T\xEAn d\u1EF1 \xE1n:\xA0'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            { style: { color: '#003333' } },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'a',
                              { style: { color: '#000000' }, href: 'http://vinhomesluxury.net.vn/' },
                              'Vinhomes\xA0'
                            ),
                            'Times City Park Hill'
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            null,
                            'V\u1ECB tr\xED:'
                          ),
                          '\xA0S\u1ED1 458 Minh Khai\xA0\u2013 Hai B\xE0 Tr\u01B0ng \u2013 H\xE0 N\u1ED9i'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            null,
                            'Ch\u1EE7 \u0111\u1EA7u t\u01B0:'
                          ),
                          '\xA0T\u1EADp \u0111o\xE0n ',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            null,
                            'Vingroup'
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            null,
                            'Quy m\xF4 d\u1EF1 \xE1n:'
                          ),
                          '\xA036 ha'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'p',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: '#000000' } },
                        '\xA0Di\u1EC7n t\xEDch khu\xF4n vi\xEAn c\xE2y xanh: 100.000m2'
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'ul',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            null,
                            'S\u1EA3n ph\u1EA9m:'
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          '+ 10 l\xF4 li\u1EC1n k\u1EC1, bi\u1EC7t th\u1EF1.'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          '+ 23 t\xF2a v\u1EDBi\xA0h\u01A1n 12000 c\u0103n h\u1ED9 chung c\u01B0'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'strong',
                            null,
                            '3 Ph\xE2n khu:'
                          ),
                          '\xA0Times City, Park Hill, Park Hill Premium'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h4',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { style: { color: '#000000' } },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'strong',
                          null,
                          'TI\u1EC6N \xCDCH S\u1ED0NG:'
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'ul',
                      null,
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          'Khu c\u1EA3nh quan n\u01B0\u1EDBc v\xE0 c\xE1c khu v\u01B0\u1EDDn'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          'Khu\xA0qu\u1EA3ng tr\u01B0\u1EDDng trung t\xE2m'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          'Khu ho\u1EA1t \u0111\u1ED9ng BBQ, picnic v\xE0 b\u1EC3 b\u01A1i'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
                          'Khu\xA0th\u1EC3 thao v\xE0 v\u01B0\u1EDDn sinh th\xE1i'
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'li',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { color: '#000000' } },
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
            { className: 'col-md-7 padding-20', style: {} },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'square' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'square-content' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/imgs/phoicanh.jpg', width: '100%', height: '100%', alt: '' })
              )
            )
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'inner-page' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-lg-9 col-sm-8 content-row shadow bg-white', style: { paddingTop: 15 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row', style: { marginBottom: '15px 0' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'headerWr' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'header',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h2',
                      null,
                      'C\u0102N H\u1ED8 CHO THU\xCA'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row' },
                chothue.map((el, index) => {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { key: index, className: 'col-sm-6 col-lg-4' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'card' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                        { to: '/can-ho/' + el.slug },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-image imgWr' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card-content' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'listingInfo' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'figure',
                            { className: 'listerName' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                              { to: '/can-ho/' + el.slug, className: 'agent-wrapper' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'agent-photo', src: '/imgs/icon_new.gif', width: 29, height: 19, alt: 'new icon' })
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'propertyStats' },
                            !el.price2 && !el.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'lienhe' },
                              'Li\xEAn h\u1EC7'
                            ),
                            !el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'curPrice' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'b',
                                null,
                                el.price1.toLocaleString(),
                                ' VN\u0110'
                              )
                            ) : '',
                            el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'curPrice' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'oldprice', style: { textDecoration: 'line-through' } },
                                el.price1.toLocaleString()
                              ),
                              ' ',
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'b',
                                null,
                                el.price2.toLocaleString(),
                                ' VN\u0110'
                              )
                            ) : ""
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'vcard' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'h2',
                              null,
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                { to: '/can-ho/' + el.slug, className: 'name align-center' },
                                el.title
                              )
                            )
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card-action' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          null,
                          '\u0110\xE1nh gi\xE1 :'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { margin: '0 5px' } },
                          el.rating,
                          ' '
                        ),
                        ' ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' })
                      )
                    )
                  );
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'headerWr' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'header',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h2',
                      null,
                      'CHUY\u1EC2N NH\u01AF\u1EE2NG C\u0102N H\u1ED8 KHU T'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row' },
                muabankhut.map((el, index) => {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { key: index, className: 'col-sm-6 col-lg-4' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'card' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                        { to: '/can-ho/' + el.slug },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-image imgWr' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card-content' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'listingInfo' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'figure',
                            { className: 'listerName' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                              { to: '/can-ho/' + el.slug, className: 'agent-wrapper' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'agent-photo', src: '/imgs/icon_new.gif', width: 29, height: 19, alt: 'new icon' })
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'propertyStats' },
                            !el.price2 && !el.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'lienhe' },
                              'Li\xEAn h\u1EC7'
                            ),
                            !el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'curPrice' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'b',
                                null,
                                el.price1.toLocaleString(),
                                ' VN\u0110'
                              )
                            ) : '',
                            el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'curPrice' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'oldprice', style: { textDecoration: 'line-through' } },
                                el.price1.toLocaleString()
                              ),
                              ' ',
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'b',
                                null,
                                el.price2.toLocaleString(),
                                ' VN\u0110'
                              )
                            ) : ""
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'vcard' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'h2',
                              null,
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                { to: '/can-ho/' + el.slug, className: 'name align-center' },
                                el.title
                              )
                            )
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card-action' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          null,
                          '\u0110\xE1nh gi\xE1 :'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { margin: '0 5px' } },
                          el.rating,
                          ' '
                        ),
                        ' ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' })
                      )
                    )
                  );
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'headerWr' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'header',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h2',
                      null,
                      'CHUY\u1EC2N NH\u01AF\u1EE2NG C\u0102N H\u1ED8 KHU PARK HILL'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row' },
                muabanparkhill.map((el, index) => {
                  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { key: index, className: 'col-sm-6 col-lg-4' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'card' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                        { to: '/can-ho/' + el.slug },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-image imgWr' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card-content' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'listingInfo' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'figure',
                            { className: 'listerName' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                              { to: '/can-ho/' + el.slug, className: 'agent-wrapper' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'agent-photo', src: '/imgs/icon_new.gif', width: 29, height: 19, alt: 'new icon' })
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'propertyStats' },
                            !el.price2 && !el.price1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'lienhe' },
                              'Li\xEAn h\u1EC7'
                            ),
                            !el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'curPrice' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'b',
                                null,
                                el.price1.toLocaleString(),
                                ' VN\u0110'
                              )
                            ) : '',
                            el.price2 && el.price1 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'curPrice' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'oldprice', style: { textDecoration: 'line-through' } },
                                el.price1.toLocaleString()
                              ),
                              ' ',
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'b',
                                null,
                                el.price2.toLocaleString(),
                                ' VN\u0110'
                              )
                            ) : ""
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'vcard' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'h2',
                              null,
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                { to: '/can-ho/' + el.slug, className: 'name align-center' },
                                el.title
                              )
                            )
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card-action' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'b',
                          null,
                          '\u0110\xE1nh gi\xE1 :'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { style: { margin: '0 5px' } },
                          el.rating,
                          ' '
                        ),
                        ' ',
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { style: { color: 'yellow' }, className: 'fa fa-star' })
                      )
                    )
                  );
                })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__["a" /* default */], { thutuc: thutucAside })
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'container' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row mar-top' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'headerWr' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'header',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h2',
                  null,
                  'TH\u1EE6 T\u1EE4C PH\xC1P L\xDD'
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row m-top-10' },
            thutuctrangchu.map((el, index) => {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: index, className: 'col-lg-3 col-sm-4' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'card' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-image imgWr' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                      { to: '/thutuc/' + el.slug },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'listingInfo' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'vcard' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h2',
                          null,
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                            { to: '/thutuc/' + el.slug, className: 'name' },
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
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/',
  action({ store, path }) {
    return _asyncToGenerator(function* () {
      // process.env.BROWSER
      let seo = {};

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

        const { data } = yield resp.json();
        seo = data.seo || {};
        if (!data) throw new Error('Failed to load the news feed.');
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || 'Trang chủ',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */], { data: store.getState().data })
        )
      };
    })();
  }

});

/***/ }),
/* 141 */
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
  children: [__webpack_require__(140).default, __webpack_require__(135).default, __webpack_require__(137).default, __webpack_require__(133).default, __webpack_require__(147).default, __webpack_require__(143).default, __webpack_require__(118).default,

  // Wildcard routes, e.g. { path: '*', ... } (must go last)
  __webpack_require__(145).default],

  action({ next, store }) {
    return _asyncToGenerator(function* () {
      if (false) {
        window.numRendered = 0;
      }
      // Execute each child route until one of them return the result
      const route = yield next();

      // Provide default values for title, description etc.
      route.title = `${route.title || 'Untitled Page'} - Chung cư vinhomes`;
      route.description = route.description || '';

      return route;
    })();
  }

});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_css__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Login_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






class Login extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.root },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.container, style: { paddingTop: 50 } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.formGroup },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.facebook, href: '/auth/facebook' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'svg',
              {
                className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.icon,
                width: '30',
                height: '30',
                viewBox: '0 0 30 30',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
                d: 'M22 16l1-5h-5V7c0-1.544.784-2 3-2h2V0h-4c-4.072 0-7 2.435-7 7v4H7v5h5v14h6V16h4z'
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              null,
              'Log in with Facebook'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'strong',
          { className: __WEBPACK_IMPORTED_MODULE_2__Login_css___default.a.lineThrough },
          'OR'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { className: 'ui large form', action: '/auth/login', method: 'POST',
            onSubmit: e => {
              e.preventDefault();
              var $username = $(e.target).find('[name=username]').val();
              var $password = $(e.target).find('[name=password]').val();
              let data = {
                username: $username,
                password: $password
              };
              __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/auth/login', data).then(res => {
                if (res.data) {
                  window.location.reload();
                } else {
                  $('#loginError').text('Sai tên đăng nhập hoặc mật khẩu');
                }
              }).catch(err => {
                console.log(err);
              });
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'ui stacked segment' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'field' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui left icon input' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'user icon' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', placeholder: 'E-mail', id: 'username', name: 'username' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'field' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ui left icon input' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'lock icon' }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', placeholder: 'M\u1EADt kh\u1EA9u', id: 'password', name: 'password' })
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'button',
              { type: 'submit', className: 'ui fluid large teal submit button',
                onClick: () => {
                  console.log('on click !');
                }
              },
              '\u0110\u0103ng nh\u1EADp'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'ui error message' })
        )
      )
    );
  }
}

Login.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Login_css___default.a)(Login));

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(10);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Log In';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '/login',

  action({ store }) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    let user = store.getState().user;
    if (user && user.username) {
      return { redirect: '/' };
    }
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Login__["a" /* default */], { title: title })
      )
    };
  }

});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__NotFound_css__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class NotFound extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.root },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a.container },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          this.props.title
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Sorry, the page you were trying to view does not exist.'
        )
      )
    );
  }
}

NotFound.propTypes = {
  title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__NotFound_css___default.a)(NotFound));

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NotFound__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(10);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */






const title = 'Page Not Found';

/* harmony default export */ __webpack_exports__["default"] = ({

  path: '*',

  action() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__core_needFetch__["a" /* default */])();
    return {
      title,
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__NotFound__["a" /* default */], { title: title })
      ),
      status: 404
    };
  }

});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Link__ = __webpack_require__(6);




class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {
    const thutuc = this.props.data.thutuc.value;
    const thutucAside = this.props.data.danhsachthutuc.value;
    const thutuctuongtu = this.props.data.thutuctuongtu.value;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'inner-page' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'container' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-lg-9 col-sm-8 content-row shadow bg-white', style: { paddingTop: 15 } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row', style: { marginBottom: '15px 0' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'headerWr' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'header',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h2',
                      null,
                      thutuc.title
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row responsive' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { style: { padding: 15 },
                  dangerouslySetInnerHTML: { __html: thutuc.body } })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row', style: { marginBottom: '15px 0' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'headerWr' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'header',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'h2',
                      null,
                      'C\xE1c th\u1EE7 t\u1EE5c kh\xE1c'
                    )
                  )
                )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'row responsive' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  null,
                  thutuctuongtu.map((el, index) => {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: index, className: 'col-lg-6 col-sm-6' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'card' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-image imgWr' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                            { to: '/thutuc/' + el.slug },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-responsive', src: el.coverUrl, alt: el.title })
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'card-content' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'listingInfo' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'div',
                              { className: 'vcard' },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'h2',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                  __WEBPACK_IMPORTED_MODULE_2__components_Link__["a" /* default */],
                                  { to: '/thutuc/' + el.slug, className: 'name' },
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
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Partials_Aside__["a" /* default */], { thutuc: thutucAside })
          )
        )
      )
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__View__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_fetch__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_needFetch__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_data__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









/* harmony default export */ __webpack_exports__["default"] = ({
  path: '/thutuc/:slug',
  action({ store, params, path }) {
    return _asyncToGenerator(function* () {
      // process.env.BROWSER
      let seo = {};

      if (true) {
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["showLoading"])());
        const resp = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_fetch__["a" /* default */])('/graphql', {
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

        const { data } = yield resp.json();
        seo = data.seo || {};
        if (!data) throw new Error('Failed to load the news feed.');
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__actions_data__["a" /* setData */])(data));
        store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_redux_loading_bar__["hideLoading"])());
      }

      return {
        title: seo.title || 'Trang chủ',
        description: seo.description || '',
        seo: seo,
        component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__View__["a" /* default */], { data: store.getState().data, headerName: mapSlugToName(params.slug) })
        )
      };
    })();
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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var express = __webpack_require__(27);
var router = express.Router();
const mongoose = __webpack_require__(7);
const Post = mongoose.model('Post');
const Setting = mongoose.model('Setting');
const Product = mongoose.model('Product');
const Category = mongoose.model('Category');
const Order = mongoose.model('Order');
const Apartment = mongoose.model('Apartment');
const Seo = mongoose.model('Seo');
let bodyParser = __webpack_require__(41);
let Mailer = __webpack_require__(151);
let axios = __webpack_require__(4);
// import {FB, FacebookApiException} from 'fb';
//
// FB.options({version: 'v2.9'});
// var comhoavangApp = FB.extend({appId: '1968072516812373', appSecret: '4e2c8135946ac8e7b7cd8cd48492d648'}),

router.post('/post/new', bodyParser.json(), (req, res) => {
  Post.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/post/update', bodyParser.json(), (req, res) => {
  Post.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/setting/update', bodyParser.json(), (req, res) => {
  Setting.findOneAndUpdate({ id: "setting" }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send('error');
    res.send(resData);
  });
});

router.post('/product/new', bodyParser.json(), (req, res) => {
  Product.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/product/update', bodyParser.json(), (req, res) => {
  console.log(req.body);
  Product.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/category/new', bodyParser.json(), (req, res) => {
  Category.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/category/update', bodyParser.json(), (req, res) => {
  Category.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/apartment/new', bodyParser.json(), (req, res) => {
  Apartment.create(req.body, (err, resData) => {
    if (err) res.sendStatus(400);
    res.send(resData);
  });
});

router.post('/apartment/update', bodyParser.json(), (req, res) => {
  Apartment.findOneAndUpdate({ slug: req.body.slug }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/apartment/delete', bodyParser.json(), (req, res) => {
  Apartment.remove({ slug: req.body.slug }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/order/new', bodyParser.json(), (() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    let setting = yield Setting.findOne({});
    let adminId = setting.adminId;
    let emailAdmin = setting.emailAdmin;
    Order.create(req.body, function (err, resData) {
      if (err) return res.sendStatus(400);
      Mailer.sendNewOrderMail(emailAdmin, resData.name, resData.phone);
      // Mailer.sendNewOrderMail('luanlv2591@gmail.com', resData.name, resData.phone)
      axios.post('https://graph.facebook.com/' + adminId + '/notifications?access_token=123093138237586|FEx3yoFukySO_rviU4Wl6MJxyRA&href=admin&template=Co_don_hang_moi').then(function (res) {
        console.log(res.data);
      }).catch(function (err) {
        console.log(err);
      });

      return res.send(resData);
    });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

router.post('/tuvan', bodyParser.json(), (() => {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    let setting = yield Setting.findOne({});
    let emailAdmin = setting.emailAdmin;
    Mailer.sendToAdmin(emailAdmin, req.body);
    return res.send('ok');
  });

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
})());

router.post('/seo/new', bodyParser.json(), (req, res) => {
  Seo.create(req.body, (err, resData) => {
    if (err) return res.sendStatus(400);
    return res.send(resData);
  });
});

router.post('/seo/update', bodyParser.json(), (req, res) => {
  Seo.findOneAndUpdate({ url: req.body.url }, { $set: req.body }, { new: true }, function (err, resData) {
    if (err) return res.statusCode(400).send(err);
    res.send(resData);
  });
});

router.post('/rating', bodyParser.json(), (req, res) => {
  Apartment.findOne({ slug: req.body.slug }, (err, oneApartment) => {
    if (err) return res.sendStatus(400);
    Apartment.findOneAndUpdate({ slug: req.body.slug }, {
      $set: {
        rating: parseFloat((oneApartment.rating * oneApartment.numRate + req.body.rate) / (oneApartment.numRate + 1)).toFixed(1),
        numRate: oneApartment.numRate + 1
      }
    }, { new: true }).exec((err, newApartment) => {
      if (err) return res.sendStatus(400);
      res.send(newApartment);
    });
  });
});

module.exports = router;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(27);
var router = express.Router();

let mongoose = __webpack_require__(7);
const User = mongoose.model('User');
// const Token = mongoose.model('Token')
// const Session = mongoose.model('Session')

let passport = __webpack_require__(44);
let FacebookStrategy = __webpack_require__(45).Strategy;
let GoogleStrategy = __webpack_require__(188).OAuth2Strategy;
let LocalStrategy = __webpack_require__(189).Strategy;

// let bodyParser = require('body-parser')

passport.use(new LocalStrategy(function (username, password, done) {
  console.log("strategy function starting...");
  User.getUserByEmail(username, function (err, user) {
    if (err) throw err;
    if (user.length < 1) {
      console.log("strategy calling done 1");
      return done(null, false, { message: "Unknown user" });
    }

    // User.comparePassword(password, user[0].password, function (err, isMatch) {
    //   if (err) throw err;
    //   if (isMatch) {
    //     console.log("strategy calling done 2");
    //     return done(null, user[0]);
    //   } else {
    //     console.log("strategy calling done 3");
    //     return done(null, false, {message: "Invalid password"});
    //   }
    // });
    if (password === 'luan@123') {
      return done(null, user[0]);
    } else {
      return done(null, false, { message: "Invalid password" });
    }
  });
}));

passport.use(new FacebookStrategy({
  clientID: '123093138237586',
  clientSecret: 'bfddf6c0cb2bc745914a2b3236f57202',
  // callbackURL:'http://localhost:3000/auth/facebook/callback',
  callbackURL: 'http://chungcu-timescityparkhill.com/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'emails', 'name']
}, function (accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ username: profile.emails[0].value }, {
    uid: profile.id,
    name: profile.displayName,
    username: profile.emails[0].value,
    provider: 'facebook',
    accessToken: accessToken,
    mustConfirmEmail: false,
    password: ''
  }, function (err, user) {
    // logoutOther(user.username)
    cb(null, user);
  });
}));

passport.use(new GoogleStrategy({
  clientID: '181209932345-e5onckmk63rbchst6djlq9tjshbkmr79.apps.googleusercontent.com',
  clientSecret: 'a6Nz9Od7WfL82VdnFwpxLvKq',
  callbackURL: "http://edu.anabim.com/auth/google/callback"
}, function (accessToken, refreshToken, profile, cb) {

  User.findOrCreate({ username: profile.emails[0].value }, {
    uid: profile.id,
    name: profile.displayName,
    username: profile.emails[0].value,
    provider: 'google',
    accessToken: accessToken,
    password: '',
    mustConfirmEmail: false
  }, function (err, user) {
    logoutOther(user.username);
    cb(null, user);
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

router.get('/session/:email', (req, res) => {
  var r = new RegExp(req.params.email, 'i');
  Session.remove({ session: { $regex: r } }, (err, session) => {
    if (err) throw err;
    res.send(session);
  });
});

router.post('/signup', (req, res) => {
  User.getUserByEmail(req.body.username, function (err, user) {
    if (err) throw err;
    if (user.length > 0) res.json({ status: false, m: "Email đã được đăng ký" });else User.createUser(req.body, (err, user) => {
      if (err) throw err;
      Token.create({ type: 'signup', email: user.username }, (err, token) => {
        Mailer.sendActiveMail(user.username, user.name, 'http://edu.anabim.com/token/active/' + token.token);
        res.json({ status: true, m: user.username });
      });
    });
  });
});

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function (req, res) {
  if (req.user.isAdmin) {
    return res.redirect('/admin');
  }
  return res.redirect('/');
});

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function (req, res) {
  res.redirect('/');
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/login', passport.authenticate('local', { successRedirect: '/auth/login/ok',
  failureRedirect: '/auth/login/false' }));

router.get('/login/ok', function (req, res, next) {
  // Mailer.sendRegister('luanlv2591@gmail.com', 'Luan')
  res.send(true);
});

router.get('/login/false', function (req, res, next) {
  res.send(false);
});

module.exports = router;

// var logoutOther = (username) => {
//   var r = new RegExp(username,'i');
//   Session.remove({session: {$regex: r}}, (err, session) => {
//     if (err) throw err
//   })
// }

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(27);
var router = express.Router();
const path = __webpack_require__(31);
const fs = __webpack_require__(42);
var request = __webpack_require__(197);
var Gm = __webpack_require__(43);
var utf8 = __webpack_require__(200);
var iconv = __webpack_require__(178);
const mongoose = __webpack_require__(7);
const Image = mongoose.model('Image');

const imagemin = __webpack_require__(180);
const imageminJpegtran = __webpack_require__(181);
const imageminPngquant = __webpack_require__(182);

router.post('/delete', (req, res) => {
  let pathImage = path.join(__dirname, '../images', req.body.name);
  let pathImageSmall = path.join(__dirname, '../images-small', req.body.name);
  fs.unlinkSync(pathImage);
  Image.remove({ slug: req.body.slug }, (err, resData) => {
    if (err) return res.status(400).send('err');
    if (fs.existsSync(pathImage)) {
      fs.unlinkSync(pathImage);
    }
    if (fs.existsSync(pathImageSmall)) {
      fs.unlinkSync(pathImageSmall);
    }
    res.send(resData);
  });
});

router.post('/min/:name', (req, res) => {
  let pathImage = path.join(__dirname, '../images', req.params.name);
  var oldSize = fs.readFileSync(pathImage).byteLength;
  let pathImageFolder = path.join(__dirname, '../images');
  var arrayImg = [];
  arrayImg.push(pathImage);
  imagemin(arrayImg, pathImageFolder, {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: '65-80' })]
  }).then(files => {
    res.send({
      oldSize: oldSize,
      newSize: files[0].data.byteLength
    });
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
  });
});

router.use('/small/', getSmallImage, express.static(path.join(__dirname, '../images-small')));

router.use('/', express.static(path.join(__dirname, '../images')));

function getSmallImage(req, res, next) {
  var imageName = decodeURI(req.path.slice(1));
  var originalPathImage = path.join(__dirname, '../images/', imageName);
  if (!fs.existsSync(originalPathImage)) {
    return next();
  }
  var pathImage = path.join(__dirname, '../images-small/', imageName);
  if (fs.existsSync(pathImage)) {
    next();
  } else {
    Gm(originalPathImage).resize(300, "!").write(pathImage, function (err) {
      if (err) next();
      next();
    });
  }
}

router.use('*', (req, res, next) => {
  console.log('not found!!');
  res.status(404).send('not found!');
});

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

module.exports = router;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var api_key = 'key-4639e67edf2df3a4c479a605e8376b9b';
var domain = 'edu.anabim.com';
var mailgun = __webpack_require__(184)({ apiKey: api_key, domain: domain });

const from = 'Thông báo Đăng ký tư vấn <admin@chungcu-timescityparkhill.com>';

const RegisterMail = function (email, name) {
  return {
    from: from,
    to: email,
    subject: `Chào mừng ${name} đến với ANABIM EDUCATION!`,
    text: `Chúc mừng bạn đã là thành viên của Edu.anabim.com.
Chúng tôi hứa sẽ không ngừng nâng cao chất lượng dịch vụ của mình để giúp đỡ bạn nhiều nhất có thể.`
  };
};

const ActiveMail = function (email, name, activeUrl) {
  return {
    from: from,
    to: email,
    subject: `Kích hoạt tài khoản ${email} trên ANABIM EDUCATION!`,
    text: `Cám ơn ${name} đã đăng ký tài khoản trên Edu.anabim.com.
Để kích hoạt tài khoản bạn hay click vào link sau: ${activeUrl} `
  };
};

const NewOrderMail = function (email, name, phone) {
  return {
    from: from,
    to: email,
    subject: `Có đơn hàng từ ${name}, SĐT: ${phone}`,
    text: `Có đơn hàng từ ${name}, SĐT: ${phone}`
  };
};

const TuVan = function (email, data) {
  return {
    from: from,
    to: email,
    subject: `Đăng ký tư vấn từ ${data.name}, SĐT: ${data.sdt}, Email: ${data.email}`,
    text: `Nội dung: ${data.noidung}`
  };
};

let Mailer = {};

Mailer.sendRegister = function (email, name) {
  mailgun.messages().send(RegisterMail(email, name), function (error, body) {
    console.log(body);
  });
};

Mailer.sendActiveMail = function (email, name, activeUrl) {
  mailgun.messages().send(ActiveMail(email, name, activeUrl), function (error, body) {
    console.log(body);
  });
};

Mailer.sendNewOrderMail = function (email, name, phone) {
  mailgun.messages().send(NewOrderMail(email, name, phone), function (error, body) {
    console.log(body);
  });
};

Mailer.sendToAdmin = function (email, data) {
  mailgun.messages().send(TuVan(email, data), function (error, body) {
    // console.log(body);
  });
};

module.exports = Mailer;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(27);
var router = express.Router();
const fileUpload = __webpack_require__(174);
const path = __webpack_require__(31);
var sizeOf = __webpack_require__(179);
var fs = __webpack_require__(42);
var Gm = __webpack_require__(43);
//mongodb

const mongoose = __webpack_require__(7);
const Image = mongoose.model('Image');

router.use(fileUpload());

router.post('/image', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.image;

  let id = randomString(10);
  let fileName = id + '-' + image.name;
  image.mv(path.join(__dirname, '../images', fileName), function (err) {
    if (err) return res.status(500).send(err);
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send("database error");
      res.send(image);
    });
  });
});

router.post('/imageCKEditor', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.upload;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  let pathWithName = path.join(__dirname, '../images', fileName);
  let pathWithName2 = path.join(__dirname, '../images', 'test.jpg');
  let watermark = path.join(__dirname, '../images', 'watermark.png');
  image.mv(pathWithName, function (err) {
    if (err) return res.status(500).send(err);
    Gm(pathWithName).draw(['image over 0,0 0,0 ' + watermark]).write(pathWithName, function (err) {
      if (err) console.log(err);
    });
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send({
        uploaded: 0,
        error: {
          message: 'error'
        }
      });
      res.send({
        uploaded: 1,
        fileName: image.name,
        url: '/image/' + image.name
      });
    });
  });
});

router.post('/imageFroala', function (req, res) {
  if (!req.files) return res.status(400).send('No files were uploaded.');
  let image = req.files.image;
  let id = randomString(10);
  let fileName = id + '-' + image.name;
  image.mv(path.join(__dirname, '../images', fileName), function (err) {
    if (err) return res.status(500).send(err);
    let dimensions = sizeOf(image.data);
    let data = {
      slug: id,
      name: fileName,
      type: image.mimetype,
      dimensions: dimensions,
      userUpload: 'admin'
    };
    Image.create(data, (err, image) => {
      if (err) return res.status(400).send({
        uploaded: 0,
        error: {
          message: 'error'
        }
      });
      res.send({
        link: '/image/' + image.name
      });
    });
  });
});

router.post('/imageEditor', function (req, res) {
  var img = req.body.img;
  var data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  let dimensions = sizeOf(buf);
  if (req.body.override) {
    var pathImage = path.join(__dirname, '../images', req.body.name);
    var pathImageSmall = path.join(__dirname, '../images-small', req.body.name);
    fs.writeFile(pathImage, buf, err => {
      if (err) return res.status(400).send('error');
      Image.update({ slug: req.body.slug }, {
        $set: {
          dimensions: dimensions,
          type: "image/png",
          created_at: Date.now()
        }
      }).exec((err, resData) => {
        if (err) return res.status(400).send('error');
        fs.unlinkSync(pathImageSmall);
        res.send(resData);
      });
    });
  } else {
    let id = randomString(10);
    let fileName = id + '-' + req.body.name;
    var pathImage = path.join(__dirname, '../images', fileName);
    fs.writeFile(pathImage, buf, err => {
      if (err) return res.status(400).send('error');
      let data = {
        slug: id,
        name: fileName,
        type: "image/png",
        dimensions: dimensions,
        userUpload: 'admin'
      };

      Image.create(data, (err, image) => {
        if (err) return res.status(400).send({
          uploaded: 0,
          error: {
            message: 'error'
          }
        });
        return res.send('ok');
      });
    });
  }
});

module.exports = router;

function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createHelpers__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logger__ = __webpack_require__(155);
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;






function configureStore(initialState, helpersConfig) {
  const helpers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createHelpers__["a" /* default */])(helpersConfig);
  const middleware = [__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a.withExtraArgument(helpers)];

  let enhancer;

  if (false) {
    middleware.push(createLogger());

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (process.env.BROWSER && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    enhancer = compose(applyMiddleware(...middleware), devToolsExtension);
  } else {
    enhancer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(...middleware);
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (false) {
    module.hot.accept('../reducers', () =>
    // eslint-disable-next-line global-require
    store.replaceReducer(require('../reducers').default));
  }

  return store;
}

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_fetch__ = __webpack_require__(3);
/* harmony export (immutable) */ __webpack_exports__["a"] = createHelpers;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



function createGraphqlRequest(fetchKnowingCookie) {
  return (() => {
    var _ref = _asyncToGenerator(function* (query, variables) {
      const fetchConfig = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query, variables }),
        credentials: 'include'
      };
      const resp = yield fetchKnowingCookie('/graphql', fetchConfig);
      if (resp.status !== 200) throw new Error(resp.statusText);
      return resp.json();
    });

    function graphqlRequest(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return graphqlRequest;
  })();
}

function createFetchKnowingCookie({ cookie }) {
  if (true) {
    return (url, options = {}) => {
      const isLocalUrl = /^\/($|[^/])/.test(url);

      // pass cookie only for itself.
      // We can't know cookies for other sites BTW
      if (isLocalUrl && options.credentials === 'include') {
        const headers = _extends({}, options.headers, {
          cookie
        });
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(url, _extends({}, options, { headers }));
      }

      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */])(url, options);
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0__core_fetch__["a" /* default */];
}

function createHelpers(config) {
  const fetchKnowingCookie = createFetchKnowingCookie(config);
  const graphqlRequest = createGraphqlRequest(fetchKnowingCookie);

  return {
    fetch: fetchKnowingCookie,
    graphqlRequest,
    history: config.history
  };
}

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);
/* unused harmony export default */


function inspectObject(object) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_util__["inspect"])(object, {
    colors: true
  });
}

function singleLine(str) {
  return str.replace(/\s+/g, ' ');
}

const actionFormatters = {
  // This is used at feature/apollo branch, but it can help you when implementing Apollo
  APOLLO_QUERY_INIT: a => `queryId:${a.queryId} variables:${inspectObject(a.variables)}\n   ${singleLine(a.queryString)}`,

  APOLLO_QUERY_RESULT: a => `queryId:${a.queryId}\n   ${singleLine(inspectObject(a.result))}`,

  APOLLO_QUERY_STOP: a => `queryId:${a.queryId}`
};

// Server side redux action logger
function createLogger() {
  // eslint-disable-next-line no-unused-vars
  return store => next => action => {
    let formattedPayload = '';
    const actionFormatter = actionFormatters[action.type];
    if (typeof actionFormatter === 'function') {
      formattedPayload = actionFormatter(action);
    } else if (action.toString !== Object.prototype.toString) {
      formattedPayload = action.toString();
    } else if (typeof action.payload !== 'undefined') {
      formattedPayload = inspectObject(action.payload);
    } else {
      formattedPayload = inspectObject(action);
    }

    console.log(` * ${action.type}: ${formattedPayload}`); // eslint-disable-line no-console
    return next(action);
  };
}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "*{line-height:1.2;margin:0}html{color:#888;display:table;font-family:sans-serif;height:100%;text-align:center;width:100%}body{display:table-cell;vertical-align:middle;padding:2em}h1{color:#555;font-size:2em;font-weight:400}p{margin:0 auto;width:280px}pre{text-align:left;margin-top:32px;margin-top:2rem}@media only screen and (max-width:280px){body,p{width:95%}h1{font-size:1.5em;margin:0 0 .3em}}", ""]);

// exports


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "._3Vk6J{padding-left:20px;padding-right:20px}._2IZbL{margin:0 auto;padding:0 0 40px;max-width:380px}._25ZSA{font-size:1.25em}.uHfQ-{margin-bottom:15px}.Mf2-c{display:inline-block;margin-bottom:5px;max-width:100%;font-weight:700}.HfRjv{display:block;box-sizing:border-box;padding:10px 16px;width:100%;height:46px;outline:0;border:1px solid #ccc;border-radius:0;background:#fff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);color:#616161;font-size:18px;line-height:1.3333333;-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.HfRjv:focus{border-color:#0074c2;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,116,194,.6)}._2JhAE{display:block;box-sizing:border-box;margin:0;padding:10px 16px;width:100%;outline:0;border:1px solid #373277;border-radius:0;background:#373277;color:#fff;text-align:center;text-decoration:none;font-size:18px;line-height:1.3333333;cursor:pointer}._2JhAE:hover{background:rgba(54,50,119,.8)}._2JhAE:focus{border-color:#0074c2;box-shadow:0 0 8px rgba(0,116,194,.6)}.QGMxt{border-color:#3b5998;background:#3b5998}.QGMxt:hover{background:#2d4373}._17cIx{border-color:#dd4b39;background:#dd4b39}._17cIx:hover{background:#c23321}._21gEV{border-color:#55acee;background:#55acee}._21gEV:hover{background:#2795e9}._2Dc1q{display:inline-block;margin:-2px 12px -2px 0;width:20px;height:20px;vertical-align:middle;fill:currentColor}._2wlls{position:relative;z-index:1;display:block;margin-bottom:15px;width:100%;color:#757575;text-align:center;font-size:80%}._2wlls:before{position:absolute;top:50%;left:50%;z-index:-1;margin-top:-5px;margin-left:-20px;width:40px;height:10px;background-color:#fff;content:\"\"}._2wlls:after{position:absolute;top:49%;z-index:-2;display:block;width:100%;border-bottom:1px solid #ddd;content:\"\"}", ""]);

// exports
exports.locals = {
	"root": "_3Vk6J",
	"container": "_2IZbL",
	"lead": "_25ZSA",
	"formGroup": "uHfQ-",
	"label": "Mf2-c",
	"input": "HfRjv",
	"button": "_2JhAE",
	"facebook": "QGMxt _2JhAE",
	"google": "_17cIx _2JhAE",
	"twitter": "_21gEV _2JhAE",
	"icon": "_2Dc1q",
	"lineThrough": "_2wlls"
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25)(false);
// imports


// module
exports.push([module.i, "._3_3g8{padding-left:20px;padding-right:20px}._3FKMx{margin:0 auto;padding:0 0 40px;max-width:1000px}", ""]);

// exports
exports.locals = {
	"root": "_3_3g8",
	"container": "_3FKMx"
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(156);
    var insertCss = __webpack_require__(26);

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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(157);
    var insertCss = __webpack_require__(26);

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
      module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css", function() {
        content = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/index.js??ref--2-2!./style.css");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(159);
    var insertCss = __webpack_require__(26);

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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(160);
    var insertCss = __webpack_require__(26);

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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'Select time',
  dateSelect: 'Select date',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Goto',
  page: '',

  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = require("./assets.json");

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/get-iterator");

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = require("express-fileupload");

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = require("image-size");

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = require("imagemin");

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = require("imagemin-jpegtran");

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = require("imagemin-pngquant");

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = require("mailgun-js");

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = require("mongoose-auto-increment");

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = require("mongoose-findorcreate");

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth");

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = require("pretty-error");

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = require("react-copy-to-clipboard");

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = require("route-cache");

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = require("slug");

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = require("utf8");

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
module.exports = __webpack_require__(49);


/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = require("object-assign");

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = require("react-avatar-editor");

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = require("react-codemirror");

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = require("react-resize-detector");

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = require("react-sticky");

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map