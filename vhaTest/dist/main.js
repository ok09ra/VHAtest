/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/action/act.js":
/*!***************************!*\
  !*** ./src/action/act.js ***!
  \***************************/
/*! exports provided: Act */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Act", function() { return Act; });
var Act = function Act(Id) {
  return {
    actionType: "Act",
    motionId: Id
  };
};

/***/ }),

/***/ "./src/action/showbuttonT.js":
/*!***********************************!*\
  !*** ./src/action/showbuttonT.js ***!
  \***********************************/
/*! exports provided: showButtonT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showButtonT", function() { return showButtonT; });
var showButtonT = function showButtonT(layoutParams, ID, value, seconds, options) {
  return {
    actionType: "ShowButton",
    uiId: ID,
    layout: layoutParams,
    value: value,
    seconds: seconds,
    option: options
  };
}; //layoutParam:JSON
// {bottom:"px", right:"px", left:"px",top:"px",width:"px", height:"px"}
//options :JSON
// {type: "color", // Set the background color,normal: "#ff0000",pressed: "#0000ff",},textAlign: "left",verticalAlign: "top"}

/***/ }),

/***/ "./src/action/speech.js":
/*!******************************!*\
  !*** ./src/action/speech.js ***!
  \******************************/
/*! exports provided: Speech */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speech", function() { return Speech; });
var Speech = function Speech(Message) {
  return {
    actionType: "Speech",
    message: Message
  };
};

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _viewmodel_speechTest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewmodel/speechTest.js */ "./src/viewmodel/speechTest.js");
/* harmony import */ var _viewmodel_actTest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewmodel/actTest.js */ "./src/viewmodel/actTest.js");
/* harmony import */ var _viewmodel_makefaceTest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewmodel/makefaceTest.js */ "./src/viewmodel/makefaceTest.js");
/* harmony import */ var _tools_makecontrolbutton_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/makecontrolbutton.js */ "./src/tools/makecontrolbutton.js");
/* harmony import */ var _action_showbuttonT_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action/showbuttonT.js */ "./src/action/showbuttonT.js");





VHASettings.addListener(VHAEvent.Initialize, function () {
  console.log(">>> Initialize");
  console.log(Environment.os);
  Object(_tools_makecontrolbutton_js__WEBPACK_IMPORTED_MODULE_3__["makeControlButton"])();
});
VHASettings.addListener(VHAEvent.Error, function (error) {
  console.error("ErrorEvent: ".concat(JSON.stringify(error)));
});

/***/ }),

/***/ "./src/tools/makecontrolbutton.js":
/*!****************************************!*\
  !*** ./src/tools/makecontrolbutton.js ***!
  \****************************************/
/*! exports provided: makeControlButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeControlButton", function() { return makeControlButton; });
/* harmony import */ var _action_showbuttonT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/showbuttonT.js */ "./src/action/showbuttonT.js");

var makeControlButton = function makeControlButton() {
  ActionQueue.push(ActionQueue.Priority.Normal, [Object(_action_showbuttonT_js__WEBPACK_IMPORTED_MODULE_0__["showButtonT"])({
    bottom: "10px",
    right: "10px",
    width: "50px",
    height: "20px"
  }, "next", "次へ >", 0, {
    buttonTransition: {
      type: "color",
      normal: "#ff0000",
      pressed: "#0000ff"
    },
    textAlign: "center",
    verticalAlign: "center"
  }), Object(_action_showbuttonT_js__WEBPACK_IMPORTED_MODULE_0__["showButtonT"])({
    bottom: "10px",
    right: "70px",
    width: "50px",
    height: "20px"
  }, "return", "繰り返す", 0, {
    buttonTransition: {
      type: "color",
      normal: "#ff0000",
      pressed: "#0000ff"
    },
    textAlign: "center",
    verticalAlign: "center"
  }), Object(_action_showbuttonT_js__WEBPACK_IMPORTED_MODULE_0__["showButtonT"])({
    bottom: "10px",
    right: "130px",
    width: "50px",
    height: "20px"
  }, "back", "< 戻る", 0, {
    buttonTransition: {
      type: "color",
      normal: "#ff0000",
      pressed: "#0000ff"
    },
    textAlign: "center",
    verticalAlign: "center"
  })]);
};

/***/ }),

/***/ "./src/viewmodel/actTest.js":
/*!**********************************!*\
  !*** ./src/viewmodel/actTest.js ***!
  \**********************************/
/*! exports provided: actTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actTest", function() { return actTest; });
/* harmony import */ var _action_act_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/act.js */ "./src/action/act.js");

var actTest = function actTest() {
  VHASettings.addListener(VHAEvent.Listened, function () {
    ActionQueue.push(ActionQueue.Priority.Important, [Object(_action_act_js__WEBPACK_IMPORTED_MODULE_0__["Act"])(8)]);
  });
};

/***/ }),

/***/ "./src/viewmodel/makefaceTest.js":
/*!***************************************!*\
  !*** ./src/viewmodel/makefaceTest.js ***!
  \***************************************/
/*! exports provided: makefaceTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makefaceTest", function() { return makefaceTest; });
/* harmony import */ var _action_speech_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/speech.js */ "./src/action/speech.js");

var makefaceTest = function makefaceTest() {
  VHASettings.addListener(VHAEvent.Listened, function () {
    ActionQueue.push(ActionQueue.Priority.Important, [Makeface(1, 100, 10000)]);
  });
};

/***/ }),

/***/ "./src/viewmodel/speechTest.js":
/*!*************************************!*\
  !*** ./src/viewmodel/speechTest.js ***!
  \*************************************/
/*! exports provided: speechTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speechTest", function() { return speechTest; });
/* harmony import */ var _action_speech_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/speech.js */ "./src/action/speech.js");

var speechTest = function speechTest() {
  VHASettings.addListener(VHAEvent.Listened, function () {
    ActionQueue.push(ActionQueue.Priority.Important, [Object(_action_speech_js__WEBPACK_IMPORTED_MODULE_0__["Speech"])("こんにちは")]);
  });
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi9hY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi9zaG93YnV0dG9uVC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL3NwZWVjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvbWFrZWNvbnRyb2xidXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdtb2RlbC9hY3RUZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3bW9kZWwvbWFrZWZhY2VUZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3bW9kZWwvc3BlZWNoVGVzdC5qcyJdLCJuYW1lcyI6WyJBY3QiLCJJZCIsImFjdGlvblR5cGUiLCJtb3Rpb25JZCIsInNob3dCdXR0b25UIiwibGF5b3V0UGFyYW1zIiwiSUQiLCJ2YWx1ZSIsInNlY29uZHMiLCJvcHRpb25zIiwidWlJZCIsImxheW91dCIsIm9wdGlvbiIsIlNwZWVjaCIsIk1lc3NhZ2UiLCJtZXNzYWdlIiwiVkhBU2V0dGluZ3MiLCJhZGRMaXN0ZW5lciIsIlZIQUV2ZW50IiwiSW5pdGlhbGl6ZSIsImNvbnNvbGUiLCJsb2ciLCJFbnZpcm9ubWVudCIsIm9zIiwibWFrZUNvbnRyb2xCdXR0b24iLCJFcnJvciIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsIkFjdGlvblF1ZXVlIiwicHVzaCIsIlByaW9yaXR5IiwiTm9ybWFsIiwiYm90dG9tIiwicmlnaHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvblRyYW5zaXRpb24iLCJ0eXBlIiwibm9ybWFsIiwicHJlc3NlZCIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJhY3RUZXN0IiwiTGlzdGVuZWQiLCJJbXBvcnRhbnQiLCJtYWtlZmFjZVRlc3QiLCJNYWtlZmFjZSIsInNwZWVjaFRlc3QiXSwibWFwcGluZ3Mi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LEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBSThDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQUs7QUFDM0I5QixhQUFXLENBQUNDLFdBQVosQ0FBd0JDLFFBQVEsQ0FBQzBCLFFBQWpDLEVBQTJDLFlBQU07QUFDN0NmLGVBQVcsQ0FBQ0MsSUFBWixDQUFpQkQsV0FBVyxDQUFDRSxRQUFaLENBQXFCYyxTQUF0QyxFQUFnRCxDQUNoREUsUUFBUSxDQUFDLENBQUQsRUFBRyxHQUFILEVBQU8sS0FBUCxDQUR3QyxDQUFoRDtBQUdILEdBSkQ7QUFLSCxDQU5NLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBSztBQUN6QmhDLGFBQVcsQ0FBQ0MsV0FBWixDQUF3QkMsUUFBUSxDQUFDMEIsUUFBakMsRUFBMkMsWUFBTTtBQUM3Q2YsZUFBVyxDQUFDQyxJQUFaLENBQWlCRCxXQUFXLENBQUNFLFFBQVosQ0FBcUJjLFNBQXRDLEVBQWdELENBQzVDaEMsZ0VBQU0sQ0FBQyxPQUFELENBRHNDLENBQWhEO0FBR0gsR0FKRDtBQUtILENBTk0sQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsImV4cG9ydCB2YXIgQWN0ID0gKElkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFjdGlvblR5cGU6IFwiQWN0XCIsXHJcbiAgICAgICAgbW90aW9uSWQ6IElkXHJcbiAgICB9O1xyXG59IiwiZXhwb3J0IHZhciBzaG93QnV0dG9uVCA9IChsYXlvdXRQYXJhbXMsSUQsdmFsdWUsIHNlY29uZHMsIG9wdGlvbnMgKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFjdGlvblR5cGU6IFwiU2hvd0J1dHRvblwiLFxyXG4gICAgICAgIHVpSWQ6IElELFxyXG4gICAgICAgIGxheW91dDogbGF5b3V0UGFyYW1zLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBzZWNvbmRzOiBzZWNvbmRzLFxyXG4gICAgICAgIG9wdGlvbjogb3B0aW9uc1xyXG4gICAgfTtcclxufVxyXG5cclxuLy9sYXlvdXRQYXJhbTpKU09OXHJcbi8vIHtib3R0b206XCJweFwiLCByaWdodDpcInB4XCIsIGxlZnQ6XCJweFwiLHRvcDpcInB4XCIsd2lkdGg6XCJweFwiLCBoZWlnaHQ6XCJweFwifVxyXG4vL29wdGlvbnMgOkpTT05cclxuLy8ge3R5cGU6IFwiY29sb3JcIiwgLy8gU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yLG5vcm1hbDogXCIjZmYwMDAwXCIscHJlc3NlZDogXCIjMDAwMGZmXCIsfSx0ZXh0QWxpZ246IFwibGVmdFwiLHZlcnRpY2FsQWxpZ246IFwidG9wXCJ9XHJcbiIsImV4cG9ydCB2YXIgU3BlZWNoID0gKE1lc3NhZ2UpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWN0aW9uVHlwZTogXCJTcGVlY2hcIixcclxuICAgICAgICBtZXNzYWdlOiBNZXNzYWdlXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHtzcGVlY2hUZXN0fSBmcm9tIFwiLi92aWV3bW9kZWwvc3BlZWNoVGVzdC5qc1wiO1xyXG5pbXBvcnQge2FjdFRlc3R9IGZyb20gXCIuL3ZpZXdtb2RlbC9hY3RUZXN0LmpzXCI7XHJcbmltcG9ydCB7bWFrZWZhY2VUZXN0fSBmcm9tIFwiLi92aWV3bW9kZWwvbWFrZWZhY2VUZXN0LmpzXCI7XHJcbmltcG9ydCB7bWFrZUNvbnRyb2xCdXR0b259IGZyb20gXCIuL3Rvb2xzL21ha2Vjb250cm9sYnV0dG9uLmpzXCI7XHJcbmltcG9ydCB7IHNob3dCdXR0b25UIH0gZnJvbSBcIi4vYWN0aW9uL3Nob3didXR0b25ULmpzXCJcclxuXHJcblxyXG5WSEFTZXR0aW5ncy5hZGRMaXN0ZW5lcihWSEFFdmVudC5Jbml0aWFsaXplLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIj4+PiBJbml0aWFsaXplXCIpO1xyXG4gICAgY29uc29sZS5sb2coRW52aXJvbm1lbnQub3MpO1xyXG4gICAgbWFrZUNvbnRyb2xCdXR0b24oKTtcclxufSk7ICBcclxuXHJcblxyXG5cclxuVkhBU2V0dGluZ3MuYWRkTGlzdGVuZXIoVkhBRXZlbnQuRXJyb3IsIGVycm9yID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yRXZlbnQ6ICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfWApO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgc2hvd0J1dHRvblQgfSBmcm9tIFwiLi4vYWN0aW9uL3Nob3didXR0b25ULmpzXCJcclxuXHJcbmV4cG9ydCB2YXIgbWFrZUNvbnRyb2xCdXR0b24gPSAoKSA9PntcclxuICAgIEFjdGlvblF1ZXVlLnB1c2goQWN0aW9uUXVldWUuUHJpb3JpdHkuTm9ybWFsLCBbXHJcbiAgICAgICAgc2hvd0J1dHRvblQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgYm90dG9tOlwiMTBweFwiLCBcclxuICAgICAgICAgICAgcmlnaHQ6XCIxMHB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOlwiNTBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6XCIyMHB4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJuZXh0XCIsXHJcbiAgICAgICAgICAgIFwi5qyh44G4ID5cIixcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBidXR0b25UcmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29sb3JcIiwgXHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IFwiI2ZmMDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogXCIjMDAwMGZmXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIiwgXHJcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcbiAgICAgICAgc2hvd0J1dHRvblQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgYm90dG9tOlwiMTBweFwiLCBcclxuICAgICAgICAgICAgcmlnaHQ6XCI3MHB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOlwiNTBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6XCIyMHB4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJyZXR1cm5cIixcclxuICAgICAgICAgICAgXCLnubDjgorov5TjgZlcIixcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uVHJhbnNpdGlvbjogXHJcbiAgICAgICAgICAgICAgICB7dHlwZTogXCJjb2xvclwiLCBcclxuICAgICAgICAgICAgICAgIG5vcm1hbDogXCIjZmYwMDAwXCIsXHJcbiAgICAgICAgICAgICAgICBwcmVzc2VkOiBcIiMwMDAwZmZcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIiwgXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIHNob3dCdXR0b25UKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvdHRvbTpcIjEwcHhcIiwgXHJcbiAgICAgICAgICAgIHJpZ2h0OlwiMTMwcHhcIixcclxuICAgICAgICAgICAgd2lkdGg6XCI1MHB4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDpcIjIwcHhcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcImJhY2tcIixcclxuICAgICAgICAgICAgXCI8IOaIu+OCi1wiLFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25UcmFuc2l0aW9uOiBcclxuICAgICAgICAgICAgICAgIHt0eXBlOiBcImNvbG9yXCIsIFxyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiBcIiNmZjAwMDBcIixcclxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IFwiIzAwMDBmZlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjpcImNlbnRlclwiLCBcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICksXHJcbiAgICBdKTtcclxufTsiLCJpbXBvcnQge0FjdH0gZnJvbSBcIi4uL2FjdGlvbi9hY3QuanNcIjsgXHJcblxyXG5leHBvcnQgdmFyIGFjdFRlc3QgPSAoKSA9PntcclxuICAgIFZIQVNldHRpbmdzLmFkZExpc3RlbmVyKFZIQUV2ZW50Lkxpc3RlbmVkLCAoKSA9PiB7XHJcbiAgICAgICAgQWN0aW9uUXVldWUucHVzaChBY3Rpb25RdWV1ZS5Qcmlvcml0eS5JbXBvcnRhbnQsW1xyXG4gICAgICAgICAgICBBY3QoOClcclxuICAgICAgICBdKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHtTcGVlY2h9IGZyb20gXCIuLi9hY3Rpb24vc3BlZWNoLmpzXCI7IFxyXG5cclxuZXhwb3J0IHZhciBtYWtlZmFjZVRlc3QgPSAoKSA9PntcclxuICAgIFZIQVNldHRpbmdzLmFkZExpc3RlbmVyKFZIQUV2ZW50Lkxpc3RlbmVkLCAoKSA9PiB7XHJcbiAgICAgICAgQWN0aW9uUXVldWUucHVzaChBY3Rpb25RdWV1ZS5Qcmlvcml0eS5JbXBvcnRhbnQsW1xyXG4gICAgICAgIE1ha2VmYWNlKDEsMTAwLDEwMDAwKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQge1NwZWVjaH0gZnJvbSBcIi4uL2FjdGlvbi9zcGVlY2guanNcIjsgXHJcblxyXG5leHBvcnQgdmFyIHNwZWVjaFRlc3QgPSAoKSA9PntcclxuICAgIFZIQVNldHRpbmdzLmFkZExpc3RlbmVyKFZIQUV2ZW50Lkxpc3RlbmVkLCAoKSA9PiB7XHJcbiAgICAgICAgQWN0aW9uUXVldWUucHVzaChBY3Rpb25RdWV1ZS5Qcmlvcml0eS5JbXBvcnRhbnQsW1xyXG4gICAgICAgICAgICBTcGVlY2goXCLjgZPjgpPjgavjgaHjga9cIilcclxuICAgICAgICBdKTtcclxuICAgIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==