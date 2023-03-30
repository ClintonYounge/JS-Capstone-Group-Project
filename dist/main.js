/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 40px 0 15px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 60px;\\r\\n  height: 60px;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n#meals {\\r\\n  width: 100%;\\r\\n  margin: auto;\\r\\n\\r\\n  /* display: none; */\\r\\n}\\r\\n\\r\\n.meal-cards {\\r\\n  width: 90%;\\r\\n  margin: auto;\\r\\n  margin-left: 10%;\\r\\n  display: grid;\\r\\n  justify-content: center;\\r\\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\\r\\n  column-gap: 10px;\\r\\n  row-gap: 30px;\\r\\n}\\r\\n\\r\\n.card-image img {\\r\\n  width: 250px;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.second-part {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 200px;\\r\\n  gap: 10px;\\r\\n  margin-left: 25px;\\r\\n  margin-bottom: 10%;\\r\\n}\\r\\n\\r\\n.comment-popup-container {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  right: 0;\\r\\n  background-color: rgba(0, 0, 0, 0.6);\\r\\n  backdrop-filter: blur(15px);\\r\\n  z-index: 100;\\r\\n  overflow: scroll;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  text-align: center;\\r\\n  padding: 40px;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.comment-popup-thumbnail {\\r\\n  width: 400px;\\r\\n  height: 400px;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.close-button-comment {\\r\\n  position: absolute;\\r\\n  top: 40px;\\r\\n  right: 40px;\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n}\\r\\n\\r\\n.comment-item-heading {\\r\\n  font-size: 40px;\\r\\n}\\r\\n\\r\\n.comment-item-details {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 10%;\\r\\n  justify-content: center;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.cuisine {\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.youtube-video {\\r\\n  color: black;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.all-comments-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: fit-content;\\r\\n  align-items: flex-start;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  margin-top: 40px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 8px;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.comment-name-input {\\r\\n  padding: 10px;\\r\\n  width: 250px;\\r\\n  border: none;\\r\\n  border-radius: 2px;\\r\\n}\\r\\n\\r\\n.comment-insight-input {\\r\\n  padding: 10px;\\r\\n  width: 250px;\\r\\n  height: 100px;\\r\\n  border: none;\\r\\n  border-radius: 4px;\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 90%;\\r\\n  margin: auto;\\r\\n  padding: 2rem;\\r\\n}\\r\\n\\r\\nfooter a {\\r\\n  text-decoration: none;\\r\\n  color: gray;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  min-height: 100vh;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.description,\\r\\n.reservation-details {\\r\\n  width: 70%;\\r\\n  margin: 0 auto;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.description img {\\r\\n  width: 70%;\\r\\n  height: 400px;\\r\\n  margin: 3px auto;\\r\\n}\\r\\n\\r\\n.reservationP {\\r\\n  text-align: justify;\\r\\n}\\r\\n\\r\\n.displayNone {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.closeBtn {\\r\\n  padding: 2px;\\r\\n  width: 50px;\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n.reserveForm {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n  justify-content: flex-start;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.reservationList {\\r\\n  padding: 1px;\\r\\n}\\r\\n\\r\\n.reserveForm h2 {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n#nameInput,\\r\\n#startDate,\\r\\n#endDate,\\r\\n#subimtBtn {\\r\\n  width: 155px;\\r\\n  padding: 5px;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nfieldset {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 2px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.ul-head {\\r\\n  text-align: center;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template-webpack-linters/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template-webpack-linters/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template-webpack-linters/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template-webpack-linters/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template-webpack-linters/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template-webpack-linters/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template-webpack-linters/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template-webpack-linters/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template-webpack-linters/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template-webpack-linters/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/logo.png */ \"./assets/logo.png\");\n/* harmony import */ var _modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayMeals.js */ \"./src/modules/displayMeals.js\");\n/* harmony import */ var _modules_likedMeals_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/likedMeals.js */ \"./src/modules/likedMeals.js\");\n\r\n\r\n\r\n\r\n\r\nconst logo = document.querySelector('.logo');\r\nlogo.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n(0,_modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_likedMeals_js__WEBPACK_IMPORTED_MODULE_3__.likes)();\r\n(0,_modules_likedMeals_js__WEBPACK_IMPORTED_MODULE_3__.displayLikes)();\n\n//# sourceURL=webpack://template-webpack-linters/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentPopupDom = document.querySelector('.comment-popup');\r\nconst invApiComment = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gq2xGcbQlIOM2p1edhF0/comments';\r\n\r\nconst closeCommentPopuup = () => {\r\n  const commentPopupDomChildren = commentPopupDom.children;\r\n  for (let i = 0; i < commentPopupDomChildren.length; i += 1) {\r\n    commentPopupDomChildren[i].style.display = 'none';\r\n    document.body.style.overflow = 'scroll';\r\n  }\r\n};\r\n\r\nconst fetchCommentContent = (commentData) => {\r\n  const invApiCommentId = `${invApiComment}?item_id=${commentData.idMeal}`;\r\n\r\n  const commentPopupContainer = document.createElement('div');\r\n  commentPopupContainer.classList.add('comment-popup-container');\r\n  commentPopupContainer.style.display = 'none';\r\n  commentPopupContainer.setAttribute('id', commentData.idMeal);\r\n  commentPopupDom.append(commentPopupContainer);\r\n\r\n  const thumbnailComment = document.createElement('img');\r\n  thumbnailComment.classList.add('comment-popup-thumbnail');\r\n  thumbnailComment.src = commentData.strMealThumb;\r\n  commentPopupContainer.append(thumbnailComment);\r\n\r\n  const closeBtnComment = document.createElement('button');\r\n  closeBtnComment.classList.add('close-button-comment');\r\n  closeBtnComment.onclick = () => closeCommentPopuup();\r\n  closeBtnComment.innerHTML = 'X';\r\n  commentPopupContainer.append(closeBtnComment);\r\n\r\n  const commentItemHeading = document.createElement('h3');\r\n  commentItemHeading.classList.add('comment-item-heading');\r\n  commentItemHeading.innerHTML = commentData.strMeal;\r\n  commentPopupContainer.append(commentItemHeading);\r\n\r\n  const commentItemDetails = document.createElement('div');\r\n  commentItemDetails.classList.add('comment-item-details');\r\n  commentPopupContainer.append(commentItemDetails);\r\n\r\n  const cuisine = document.createElement('div');\r\n  cuisine.classList.add('cuisine');\r\n  cuisine.innerHTML = `Area/Cuisine: ${commentData.strArea}`;\r\n  commentItemDetails.append(cuisine);\r\n\r\n  const youtubeVideo = document.createElement('a');\r\n  youtubeVideo.classList.add('youtube-video');\r\n  youtubeVideo.href = commentData.strYoutube;\r\n  youtubeVideo.innerHTML = 'Youtube Video';\r\n  commentItemDetails.append(youtubeVideo);\r\n\r\n  const showComments = document.createElement('div');\r\n  showComments.classList.add('show-comments');\r\n  commentPopupContainer.append(showComments);\r\n\r\n  const commentHead = document.createElement('h3');\r\n  commentHead.classList.add('comment-head');\r\n  const countComments = async (invApi) => {\r\n    const response = await fetch(invApi);\r\n    const data = await response.json();\r\n    commentHead.innerHTML = `Comments (${data.length})`;\r\n  };\r\n  countComments(invApiCommentId);\r\n  commentPopupContainer.append(commentHead);\r\n\r\n  const allCommentsContainer = document.createElement('div');\r\n  allCommentsContainer.classList.add('all-comments-container');\r\n  const displayAllComments = async (invApi) => {\r\n    const response = await fetch(invApi);\r\n    const data = await response.json();\r\n    data.forEach((element) => {\r\n      const userComments = document.createElement('div');\r\n      userComments.classList.add('user-comments');\r\n      userComments.innerHTML = `${element.creation_date} ${element.username}: ${element.comment}`;\r\n      allCommentsContainer.append(userComments);\r\n    });\r\n  };\r\n  displayAllComments(invApiCommentId);\r\n  commentPopupContainer.append(allCommentsContainer);\r\n\r\n  const commentForm = document.createElement('form');\r\n  commentForm.classList.add('comment-form');\r\n  commentForm.setAttribute('onsubmit', 'return false');\r\n  commentPopupContainer.append(commentForm);\r\n\r\n  const nameInputComment = document.createElement('input');\r\n  nameInputComment.setAttribute('type', 'text');\r\n  nameInputComment.classList.add('comment-name-input');\r\n  nameInputComment.setAttribute('placeholder', 'Your Name');\r\n  nameInputComment.setAttribute('required', true);\r\n  commentForm.append(nameInputComment);\r\n\r\n  const insightInputComment = document.createElement('textarea');\r\n  insightInputComment.classList.add('comment-insight-input');\r\n  insightInputComment.setAttribute('placeholder', 'Your Insight');\r\n  insightInputComment.setAttribute('required', true);\r\n  commentForm.append(insightInputComment);\r\n\r\n  const submitComment = document.createElement('button');\r\n  submitComment.classList.add('submit-comment');\r\n  submitComment.innerHTML = 'Comment';\r\n  commentForm.append(submitComment);\r\n\r\n  const postCommentsToInvApi = async () => {\r\n    const userNameValue = nameInputComment.value;\r\n    const userInsightValue = insightInputComment.value;\r\n    await fetch(invApiComment, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      },\r\n      body: JSON.stringify({\r\n        item_id: commentData.idMeal,\r\n        username: userNameValue,\r\n        comment: userInsightValue,\r\n      }),\r\n    });\r\n    nameInputComment.value = '';\r\n    insightInputComment.value = '';\r\n    window.location.reload();\r\n  };\r\n  submitComment.addEventListener('click', postCommentsToInvApi);\r\n};\r\n\r\nwindow.displayOnClick = (menuIdClicked) => {\r\n  const commentPopupDomChildren = commentPopupDom.children;\r\n  for (let i = 0; i < commentPopupDomChildren.length; i += 1) {\r\n    const menuIdChild = parseInt(commentPopupDomChildren[i].getAttribute('id'), 10);\r\n    if (menuIdChild === menuIdClicked) {\r\n      commentPopupDomChildren[i].style.display = 'flex';\r\n      document.body.style.overflow = 'hidden';\r\n    } else {\r\n      commentPopupDomChildren[i].style.display = 'none';\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCommentContent);\n\n//# sourceURL=webpack://template-webpack-linters/./src/modules/commentPopup.js?");

/***/ }),

/***/ "./src/modules/displayMeals.js":
/*!*************************************!*\
  !*** ./src/modules/displayMeals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentPopup.js */ \"./src/modules/commentPopup.js\");\n/* harmony import */ var _reservation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.js */ \"./src/modules/reservation.js\");\n/* harmony import */ var _likedMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likedMeals.js */ \"./src/modules/likedMeals.js\");\n\r\n\r\n\r\n\r\nconst URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=g';\r\nconst mealData = document.querySelector('.meal-cards');\r\n\r\nconst displayMeal = async (data) => {\r\n  const meal = document.createElement('div');\r\n  meal.classList.add('card');\r\n  meal.innerHTML = `\r\n  <div class=\"card-image\">\r\n    <img src=\"${data.strMealThumb}\"/>\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"first-part\">\r\n      <h2>${data.strMeal}</h2>\r\n      <div class='like-part likes-${data.idMeal}'>\r\n        <i class=\"fa-solid fa-heart like-icon\" id='${data.idMeal}'></i> \r\n        <span class='like-count ${data.idMeal}>' id='${data.idMeal}'>0 likes</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"second-part\">\r\n      <button class=\"comment-btn\" onclick=\"displayOnClick(${data.idMeal})\">Comment</button>\r\n      <button class=\"reserve-btn\">Reservation</button>\r\n    </div>\r\n  </div>\r\n  `;\r\n  mealData.appendChild(meal);\r\n\r\n  // Fetch likes for the meal and update like count element\r\n  const response = await fetch(`${URL}?item_id=${data.idMeal}`);\r\n  const likes = await response.json();\r\n  const likeCount = meal.querySelector(`.likes-${data.idMeal} .like-count`);\r\n  likeCount.textContent = `${likes[0]?.likes ?? 0} likes`;\r\n};\r\n\r\nconst display = async () => {\r\n  const response = await fetch(URL);\r\n  const data = await response.json();\r\n  data.meals.forEach((food) => {\r\n    displayMeal(food);\r\n    (0,_commentPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(food);\r\n  });\r\n  (0,_likedMeals_js__WEBPACK_IMPORTED_MODULE_2__.displayLikes)();\r\n  (0,_reservation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.meals);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);\n\n//# sourceURL=webpack://template-webpack-linters/./src/modules/displayMeals.js?");

/***/ }),

/***/ "./src/modules/likedMeals.js":
/*!***********************************!*\
  !*** ./src/modules/likedMeals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes),\n/* harmony export */   \"likes\": () => (/* binding */ likes)\n/* harmony export */ });\nconst URL_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NSQ2jUNcTp3W8mj5Cd8P/likes';\r\nconst mealContainer = document.querySelector('.meal-cards');\r\n\r\nconst fetchLikes = async (item) => {\r\n  const response = await fetch(URL_API);\r\n  const data = await response.json();\r\n  const likeCount = document.querySelector(`.likes-${item}`);\r\n  likeCount.querySelector('span').textContent = `${data.filter((items) => items.item_id === item)[0].likes} likes`;\r\n};\r\n\r\nconst likes = () => {\r\n  mealContainer.addEventListener('click', async (e) => {\r\n    const clicked = e.target.closest('.like-icon');\r\n    if (!clicked) return;\r\n    const item = clicked.getAttribute('id');\r\n    await fetch(URL_API, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n        Accept: 'application/json',\r\n      },\r\n      body: JSON.stringify({\r\n        item_id: item,\r\n      }),\r\n    });\r\n    await fetchLikes(item);\r\n  });\r\n};\r\n\r\nconst displayLikes = async () => {\r\n  const response = await fetch(URL_API);\r\n  const data = await response.json();\r\n  data.forEach((item) => {\r\n    const likeCount = document.querySelector(`.likes-${item.item_id}`);\r\n    if (likeCount) {\r\n      const likes = item.likes ? item.likes : 0;\r\n      likeCount.querySelector('span').textContent = `${likes} likes`;\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://template-webpack-linters/./src/modules/likedMeals.js?");

/***/ }),

/***/ "./src/modules/localstorage.js":
/*!*************************************!*\
  !*** ./src/modules/localstorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"saveLocalStorage\": () => (/* binding */ saveLocalStorage)\n/* harmony export */ });\nconst saveLocalStorage = (array, key) => {\r\n  localStorage.setItem(`${key}`, JSON.stringify(array));\r\n};\r\n\r\nconst getLocalStorage = (key) => JSON.parse(localStorage.getItem(`${key}`));\r\n\r\n\n\n//# sourceURL=webpack://template-webpack-linters/./src/modules/localstorage.js?");

/***/ }),

/***/ "./src/modules/reservation-api.js":
/*!****************************************!*\
  !*** ./src/modules/reservation-api.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createObject\": () => (/* binding */ createObject),\n/* harmony export */   \"getApi\": () => (/* binding */ getApi),\n/* harmony export */   \"postToApi\": () => (/* binding */ postToApi)\n/* harmony export */ });\nconst URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NSQ2jUNcTp3W8mj5Cd8P/reservations/';\r\n\r\nconst createObject = (id) => {\r\n  const name = document.querySelector('#nameInput');\r\n  const startDate = document.querySelector('#startDate');\r\n  const endDate = document.querySelector('#endDate');\r\n  const newObject = {\r\n    item_id: `${id}`,\r\n    username: name.value,\r\n    date_start: startDate.value,\r\n    date_end: endDate.value,\r\n  };\r\n  name.value = '';\r\n  startDate.value = '';\r\n  endDate.value = '';\r\n  return newObject;\r\n};\r\n\r\nconst postToApi = (object) => {\r\n  fetch(URL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-type': 'application/json',\r\n    },\r\n    body: JSON.stringify(object),\r\n  });\r\n};\r\n\r\nconst getApi = async (id) => {\r\n  const response = await fetch(`${URL}?item_id=${id}`);\r\n  const data = response.json();\r\n  return data;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://template-webpack-linters/./src/modules/reservation-api.js?");

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rservationList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rservationList.js */ \"./src/modules/rservationList.js\");\n\r\n\r\nconst createPop = (array, i) => {\r\n  const popupPage = document.querySelector('.popup');\r\n  popupPage.innerHTML = '';\r\n  let output = '';\r\n  output += `\r\n            <div class=\"description\">\r\n                    <button class=\"closeBtn\">X</button>\r\n                    <img src=${array[i].strMealThumb} \r\n                    alt=${array[i].strMeal}>\r\n                    <h2 class=\"reservationTitle\">\r\n                    ${array[i].strMeal}\r\n                    </h2>\r\n                    <h3>Instructions: </h3>\r\n                    <p class=\"reservationP\" >\r\n                    ${array[i].strInstructions}\r\n                    </p>\r\n            </div>\r\n            <div class=\"reservation-details\" id = ${array[i].idMeal}>\r\n            <h2 class=\"ul-head\" >All Reservations:</h2>\r\n            </div>`;\r\n  popupPage.innerHTML = output;\r\n  (0,_rservationList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\nconst removeContent = () => {\r\n  const popupPage = document.querySelector('.popup');\r\n  const mainContent = document.querySelector('#meals');\r\n  const closeBtn = document.querySelector('.closeBtn');\r\n  mainContent.classList.add('displayNone');\r\n  popupPage.classList.remove('displayNone');\r\n  closeBtn.onclick = () => {\r\n    mainContent.classList.remove('displayNone');\r\n    popupPage.classList.add('displayNone');\r\n  };\r\n};\r\n\r\nconst reservationPage = (array) => {\r\n  const reserveBtn = document.querySelectorAll('.reserve-btn');\r\n  reserveBtn.forEach((btn, i) => {\r\n    btn.onclick = () => {\r\n      createPop(array, i);\r\n      removeContent();\r\n    };\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationPage);\n\n//# sourceURL=webpack://template-webpack-linters/./src/modules/reservation.js?");

/***/ }),

/***/ "./src/modules/rservationList.js":
/*!***************************************!*\
  !*** ./src/modules/rservationList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reservation_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservation-api.js */ \"./src/modules/reservation-api.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.js */ \"./src/modules/localstorage.js\");\n\r\n\r\n\r\nconst createReservationItems = (id) => {\r\n  const array = (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.getLocalStorage)(id);\r\n  const reservationList = document.querySelector('.reservationList');\r\n  let output = '';\r\n  if (!array) {\r\n    output\r\n    += `<li>\r\n       <p>\r\n         Add first Rerservation\r\n      </p>\r\n    </li>`;\r\n  } else {\r\n    array.forEach((object) => {\r\n      output += `\r\n      <li>\r\n          <p>\r\n              ${object.date_start} - ${object.date_end} by\r\n              ${object.username}\r\n          </p>\r\n      </li>`;\r\n    });\r\n  }\r\n  reservationList.innerHTML = output;\r\n};\r\n\r\nconst SubmitEvent = () => {\r\n  const subimtBtn = document.querySelector('#subimtBtn');\r\n  subimtBtn.onclick = (e) => {\r\n    e.preventDefault();\r\n\r\n    const { id } = e.target.parentElement.parentElement.parentElement;\r\n    // POST API\r\n    (0,_reservation_api_js__WEBPACK_IMPORTED_MODULE_0__.postToApi)((0,_reservation_api_js__WEBPACK_IMPORTED_MODULE_0__.createObject)(id));\r\n    // Update ReservationList by API\r\n    (0,_reservation_api_js__WEBPACK_IMPORTED_MODULE_0__.getApi)(id).then((array) => {\r\n      // save local\r\n      (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_1__.saveLocalStorage)(array, id);\r\n      // invoke\r\n      createReservationItems(id);\r\n    });\r\n  };\r\n};\r\n\r\nconst reservationForm = (container) => {\r\n  const form = document.createElement('form');\r\n  form.className = 'reserveForm';\r\n  form.innerHTML = `\r\n        <h2>Add new reservation</h2>\r\n        <fieldset>\r\n            <input type='text' \r\n            id='nameInput' placeholder =\"Your Name\"required>\r\n        </fieldset>  \r\n\r\n        <fieldset>\r\n            <label for =\"startDate\" >Start Date:</label>\r\n            <input type='date' \r\n            lang=\"en-CA\" id='startDate' required>\r\n        </fieldset> \r\n\r\n        <fieldset>\r\n            <label for =\"endDate\" >End Date:</label>\r\n            <input type='date' \r\n            id='endDate' lang=\"en-CA\" required>\r\n        </fieldset>\r\n        \r\n        <fieldset>\r\n            <button id =\"subimtBtn\" type= \"submit\" >Reserve</button>\r\n        </fieldset>\r\n    </form>\r\n    `;\r\n  container.appendChild(form);\r\n  SubmitEvent();\r\n};\r\n\r\nconst listReservation = () => {\r\n  const container = document.querySelector('.reservation-details');\r\n  const ul = document.createElement('ul');\r\n  ul.className = 'reservationList';\r\n  container.append(ul);\r\n  // invoke from localStorage\r\n  createReservationItems(container.id);\r\n  reservationForm(container);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listReservation);\n\n//# sourceURL=webpack://template-webpack-linters/./src/modules/rservationList.js?");

/***/ }),

/***/ "./assets/logo.png":
/*!*************************!*\
  !*** ./assets/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"539e7f238a92eecbbc2a.png\";\n\n//# sourceURL=webpack://template-webpack-linters/./assets/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;