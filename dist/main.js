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

/***/ "./src/action/hideui.js":
/*!******************************!*\
  !*** ./src/action/hideui.js ***!
  \******************************/
/*! exports provided: HideUi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideUi", function() { return HideUi; });
var HideUi = function HideUi(Id) {
  return {
    actionType: "HideUi",
    uiId: Id
  };
};

/***/ }),

/***/ "./src/action/showbuttonT.js":
/*!***********************************!*\
  !*** ./src/action/showbuttonT.js ***!
  \***********************************/
/*! exports provided: ShowButtonT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowButtonT", function() { return ShowButtonT; });
var ShowButtonT = function ShowButtonT(layoutParams, ID, value, seconds, options) {
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

/***/ "./src/action/showtext.js":
/*!********************************!*\
  !*** ./src/action/showtext.js ***!
  \********************************/
/*! exports provided: ShowText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowText", function() { return ShowText; });
var ShowText = function ShowText(layoutParams, ID, value, seconds, options) {
  return {
    actionType: "ShowText",
    uiId: ID,
    layout: layoutParams,
    option: options,
    value: value,
    seconds: seconds
  };
}; //layoutParam:JSON
// {bottom:"px", right:"px", left:"px",top:"px"}
//options :JSON
// {
//     fontSize: "15px",
//     fontColor: "black",
//     visibleBackground: "false",
//     textAlign: "right",
//     verticalAlign: "bottom"}

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
/* harmony import */ var _tools_doactionbutton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/doactionbutton.js */ "./src/tools/doactionbutton.js");






VHASettings.addListener(VHAEvent.Initialize, function () {
  console.log(">>> Initialize");
  console.log(Environment.os);
  Object(_tools_makecontrolbutton_js__WEBPACK_IMPORTED_MODULE_3__["makeControlButton"])();
});
Object(_tools_doactionbutton_js__WEBPACK_IMPORTED_MODULE_5__["doActionButton"])();
VHASettings.addListener(VHAEvent.Error, function (error) {
  console.error("ErrorEvent: ".concat(JSON.stringify(error)));
});

/***/ }),

/***/ "./src/tools/doactionbutton.js":
/*!*************************************!*\
  !*** ./src/tools/doactionbutton.js ***!
  \*************************************/
/*! exports provided: doActionButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doActionButton", function() { return doActionButton; });
/* harmony import */ var _showtestid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showtestid.js */ "./src/tools/showtestid.js");

var doActionButton = function doActionButton() {
  var V = 0;
  VHASettings.addListener(VHAEvent.UIEvent, function (workingMemory, uiObj) {
    if (uiObj.uiId === "next") {
      console.log("do the next action");
      V = V + 1;
      console.log(V);
      Object(_showtestid_js__WEBPACK_IMPORTED_MODULE_0__["showTestId"])(V);
    }

    ;

    if (uiObj.uiId === "return") {
      console.log("do the same action");
      console.log(V);
      Object(_showtestid_js__WEBPACK_IMPORTED_MODULE_0__["showTestId"])(V);
    }

    ;

    if (uiObj.uiId === "back") {
      if (V <= 0) {
        console.log("can not go previous");
        console.log(V);
        Object(_showtestid_js__WEBPACK_IMPORTED_MODULE_0__["showTestId"])(V);
      } else {
        console.log("do the previous action");
        V = V - 1;
        console.log(V);
        Object(_showtestid_js__WEBPACK_IMPORTED_MODULE_0__["showTestId"])(V);
      }

      ;
    }

    ;
  });
};

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
  ActionQueue.push(ActionQueue.Priority.Normal, [Object(_action_showbuttonT_js__WEBPACK_IMPORTED_MODULE_0__["ShowButtonT"])({
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
  }), Object(_action_showbuttonT_js__WEBPACK_IMPORTED_MODULE_0__["ShowButtonT"])({
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
  }), Object(_action_showbuttonT_js__WEBPACK_IMPORTED_MODULE_0__["ShowButtonT"])({
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

/***/ "./src/tools/showtestid.js":
/*!*********************************!*\
  !*** ./src/tools/showtestid.js ***!
  \*********************************/
/*! exports provided: showTestId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTestId", function() { return showTestId; });
/* harmony import */ var _action_showtext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/showtext.js */ "./src/action/showtext.js");
/* harmony import */ var _action_hideui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action/hideui.js */ "./src/action/hideui.js");


var showTestId = function showTestId(V) {
  ActionQueue.push(ActionQueue.Priority.Normal, [Object(_action_hideui_js__WEBPACK_IMPORTED_MODULE_1__["HideUi"])("testid"), Object(_action_showtext_js__WEBPACK_IMPORTED_MODULE_0__["ShowText"])({
    bottom: "40px",
    right: "140px"
  }, "testid", "Test ID" + V, 0, {
    fontSize: "15px",
    fontColor: "black",
    visibleBackground: "false",
    textAlign: "center"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi9hY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi9oaWRldWkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbi9zaG93YnV0dG9uVC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9uL3Nob3d0ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb24vc3BlZWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy90b29scy9kb2FjdGlvbmJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9vbHMvbWFrZWNvbnRyb2xidXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvb2xzL3Nob3d0ZXN0aWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdtb2RlbC9hY3RUZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3bW9kZWwvbWFrZWZhY2VUZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3bW9kZWwvc3BlZWNoVGVzdC5qcyJdLCJuYW1lcyI6WyJBY3QiLCJJZCIsImFjdGlvblR5cGUiLCJtb3Rpb25JZCIsIkhpZGVVaSIsInVpSWQiLCJTaG93QnV0dG9uVCIsImxheW91dFBhcmFtcyIsIklEIiwidmFsdWUiLCJzZWNvbmRzIiwib3B0aW9ucyIsImxheW91dCIsIm9wdGlvbiIsIlNob3dUZXh0IiwiU3BlZWNoIiwiTWVzc2FnZSIsIm1lc3NhZ2UiLCJWSEFTZXR0aW5ncyIsImFkZExpc3RlbmVyIiwiVkhBRXZlbnQiLCJJbml0aWFsaXplIiwiY29uc29sZSIsImxvZyIsIkVudmlyb25tZW50Iiwib3MiLCJtYWtlQ29udHJvbEJ1dHRvbiIsImRvQWN0aW9uQnV0dG9uIiwiRXJyb3IiLCJlcnJvciIsIkpTT04iLCJzdHJpbmdpZnkiLCJWIiwiVUlFdmVudCIsIndvcmtpbmdNZW1vcnkiLCJ1aU9iaiIsInNob3dUZXN0SWQiLCJBY3Rpb25RdWV1ZSIsInB1c2giLCJQcmlvcml0eSIsIk5vcm1hbCIsImJvdHRvbSIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b25UcmFuc2l0aW9uIiwidHlwZSIsIm5vcm1hbCIsInByZXNzZWQiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiZm9udFNpemUiLCJmb250Q29sb3IiLCJ2aXNpYmxlQmFja2dyb3VuZCIsImFjdFRlc3QiLCJMaXN0ZW5lZCIsIkltcG9ydGFudCIsIm1ha2VmYWNlVGVzdCIsIk1ha2VmYWNlIiwic3BlZWNoVGVzdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQU8sSUFBSUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0MsRUFBRCxFQUFRO0FBQ3JCLFNBQU87QUFDSEMsY0FBVSxFQUFFLEtBRFQ7QUFFSEMsWUFBUSxFQUFFRjtBQUZQLEdBQVA7QUFJ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LEdBQTNELENBRmtDLENBQTlDO0FBSUgsQ0FMTSxDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQUlLLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQUs7QUFDdEJwQyxhQUFXLENBQUNDLFdBQVosQ0FBd0JDLFFBQVEsQ0FBQ21DLFFBQWpDLEVBQTJDLFlBQU07QUFDN0NsQixlQUFXLENBQUNDLElBQVosQ0FBaUJELFdBQVcsQ0FBQ0UsUUFBWixDQUFxQmlCLFNBQXRDLEVBQWdELENBQzVDeEQsMERBQUcsQ0FBQyxDQUFELENBRHlDLENBQWhEO0FBR0gsR0FKRDtBQUtILENBTk0sQzs7Ozs7Ozs7Ozs7O0FDRlA7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFJeUQsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSztBQUMzQnZDLGFBQVcsQ0FBQ0MsV0FBWixDQUF3QkMsUUFBUSxDQUFDbUMsUUFBakMsRUFBMkMsWUFBTTtBQUM3Q2xCLGVBQVcsQ0FBQ0MsSUFBWixDQUFpQkQsV0FBVyxDQUFDRSxRQUFaLENBQXFCaUIsU0FBdEMsRUFBZ0QsQ0FDaERFLFFBQVEsQ0FBQyxDQUFELEVBQUcsR0FBSCxFQUFPLEtBQVAsQ0FEd0MsQ0FBaEQ7QUFHSCxHQUpEO0FBS0gsQ0FOTSxDOzs7Ozs7Ozs7Ozs7QUNGUDtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQUs7QUFDekJ6QyxhQUFXLENBQUNDLFdBQVosQ0FBd0JDLFFBQVEsQ0FBQ21DLFFBQWpDLEVBQTJDLFlBQU07QUFDN0NsQixlQUFXLENBQUNDLElBQVosQ0FBaUJELFdBQVcsQ0FBQ0UsUUFBWixDQUFxQmlCLFNBQXRDLEVBQWdELENBQzVDekMsZ0VBQU0sQ0FBQyxPQUFELENBRHNDLENBQWhEO0FBR0gsR0FKRDtBQUtILENBTk0sQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsImV4cG9ydCB2YXIgQWN0ID0gKElkKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFjdGlvblR5cGU6IFwiQWN0XCIsXHJcbiAgICAgICAgbW90aW9uSWQ6IElkXHJcbiAgICB9O1xyXG59IiwiZXhwb3J0IHZhciBIaWRlVWkgPSAoSWQpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWN0aW9uVHlwZTogXCJIaWRlVWlcIixcclxuICAgICAgICB1aUlkOiBJZFxyXG4gICAgfTtcclxufSIsImV4cG9ydCB2YXIgU2hvd0J1dHRvblQgPSAobGF5b3V0UGFyYW1zLElELHZhbHVlLCBzZWNvbmRzLCBvcHRpb25zICkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhY3Rpb25UeXBlOiBcIlNob3dCdXR0b25cIixcclxuICAgICAgICB1aUlkOiBJRCxcclxuICAgICAgICBsYXlvdXQ6IGxheW91dFBhcmFtcyxcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgc2Vjb25kczogc2Vjb25kcyxcclxuICAgICAgICBvcHRpb246IG9wdGlvbnNcclxuICAgIH07XHJcbn1cclxuXHJcbi8vbGF5b3V0UGFyYW06SlNPTlxyXG4vLyB7Ym90dG9tOlwicHhcIiwgcmlnaHQ6XCJweFwiLCBsZWZ0OlwicHhcIix0b3A6XCJweFwiLHdpZHRoOlwicHhcIiwgaGVpZ2h0OlwicHhcIn1cclxuLy9vcHRpb25zIDpKU09OXHJcbi8vIHt0eXBlOiBcImNvbG9yXCIsIC8vIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvcixub3JtYWw6IFwiI2ZmMDAwMFwiLHByZXNzZWQ6IFwiIzAwMDBmZlwiLH0sdGV4dEFsaWduOiBcImxlZnRcIix2ZXJ0aWNhbEFsaWduOiBcInRvcFwifVxyXG4iLCJleHBvcnQgdmFyIFNob3dUZXh0ID0gKGxheW91dFBhcmFtcyxJRCx2YWx1ZSwgc2Vjb25kcywgb3B0aW9ucyApID0+IHtcclxuICAgIHJldHVybiAgIHtcclxuICAgICAgICBhY3Rpb25UeXBlOiBcIlNob3dUZXh0XCIsXHJcbiAgICAgICAgdWlJZDogSUQsXHJcbiAgICAgICAgbGF5b3V0OiBsYXlvdXRQYXJhbXMsXHJcbiAgICAgICAgb3B0aW9uOiBvcHRpb25zLFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBzZWNvbmRzOiBzZWNvbmRzXHJcbiAgICB9XHJcbn1cclxuLy9sYXlvdXRQYXJhbTpKU09OXHJcbi8vIHtib3R0b206XCJweFwiLCByaWdodDpcInB4XCIsIGxlZnQ6XCJweFwiLHRvcDpcInB4XCJ9XHJcbi8vb3B0aW9ucyA6SlNPTlxyXG4vLyB7XHJcbi8vICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbi8vICAgICBmb250Q29sb3I6IFwiYmxhY2tcIixcclxuLy8gICAgIHZpc2libGVCYWNrZ3JvdW5kOiBcImZhbHNlXCIsXHJcbi8vICAgICB0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuLy8gICAgIHZlcnRpY2FsQWxpZ246IFwiYm90dG9tXCJ9XHJcbiIsImV4cG9ydCB2YXIgU3BlZWNoID0gKE1lc3NhZ2UpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWN0aW9uVHlwZTogXCJTcGVlY2hcIixcclxuICAgICAgICBtZXNzYWdlOiBNZXNzYWdlXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHtzcGVlY2hUZXN0fSBmcm9tIFwiLi92aWV3bW9kZWwvc3BlZWNoVGVzdC5qc1wiO1xyXG5pbXBvcnQge2FjdFRlc3R9IGZyb20gXCIuL3ZpZXdtb2RlbC9hY3RUZXN0LmpzXCI7XHJcbmltcG9ydCB7bWFrZWZhY2VUZXN0fSBmcm9tIFwiLi92aWV3bW9kZWwvbWFrZWZhY2VUZXN0LmpzXCI7XHJcbmltcG9ydCB7bWFrZUNvbnRyb2xCdXR0b259IGZyb20gXCIuL3Rvb2xzL21ha2Vjb250cm9sYnV0dG9uLmpzXCI7XHJcbmltcG9ydCB7IHNob3dCdXR0b25UIH0gZnJvbSBcIi4vYWN0aW9uL3Nob3didXR0b25ULmpzXCJcclxuaW1wb3J0IHtkb0FjdGlvbkJ1dHRvbn0gZnJvbSBcIi4vdG9vbHMvZG9hY3Rpb25idXR0b24uanNcIjtcclxuXHJcblxyXG5WSEFTZXR0aW5ncy5hZGRMaXN0ZW5lcihWSEFFdmVudC5Jbml0aWFsaXplLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIj4+PiBJbml0aWFsaXplXCIpO1xyXG4gICAgY29uc29sZS5sb2coRW52aXJvbm1lbnQub3MpO1xyXG4gICAgbWFrZUNvbnRyb2xCdXR0b24oKTtcclxufSk7ICBcclxuXHJcblxyXG5kb0FjdGlvbkJ1dHRvbigpO1xyXG5cclxuXHJcblZIQVNldHRpbmdzLmFkZExpc3RlbmVyKFZIQUV2ZW50LkVycm9yLCBlcnJvciA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBFcnJvckV2ZW50OiAke0pTT04uc3RyaW5naWZ5KGVycm9yKX1gKTtcclxufSk7XHJcbiIsImltcG9ydCB7c2hvd1Rlc3RJZH0gZnJvbSBcIi4vc2hvd3Rlc3RpZC5qc1wiXHJcblxyXG5leHBvcnQgdmFyIGRvQWN0aW9uQnV0dG9uID0gKCkgPT57XHJcbiAgICB2YXIgViA9IDA7IFxyXG4gICAgVkhBU2V0dGluZ3MuYWRkTGlzdGVuZXIoVkhBRXZlbnQuVUlFdmVudCwgKHdvcmtpbmdNZW1vcnksIHVpT2JqKSA9PiB7XHJcbiAgICAgICAgaWYodWlPYmoudWlJZCA9PT0gXCJuZXh0XCIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvIHRoZSBuZXh0IGFjdGlvblwiKTtcclxuICAgICAgICAgICAgViA9IFYrMTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coVik7XHJcbiAgICAgICAgICAgIHNob3dUZXN0SWQoVik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodWlPYmoudWlJZCA9PT0gXCJyZXR1cm5cIil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG8gdGhlIHNhbWUgYWN0aW9uXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhWKTtcclxuICAgICAgICAgICAgc2hvd1Rlc3RJZChWKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKHVpT2JqLnVpSWQgPT09IFwiYmFja1wiKXtcclxuICAgICAgICAgICAgaWYoViA8PSAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FuIG5vdCBnbyBwcmV2aW91c1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFYpO1xyXG4gICAgICAgICAgICAgICAgc2hvd1Rlc3RJZChWKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkbyB0aGUgcHJldmlvdXMgYWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgVj0gVi0xO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coVik7XHJcbiAgICAgICAgICAgICAgICBzaG93VGVzdElkKFYpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbiIsImltcG9ydCB7IFNob3dCdXR0b25UIH0gZnJvbSBcIi4uL2FjdGlvbi9zaG93YnV0dG9uVC5qc1wiXHJcblxyXG5leHBvcnQgdmFyIG1ha2VDb250cm9sQnV0dG9uID0gKCkgPT57XHJcbiAgICBBY3Rpb25RdWV1ZS5wdXNoKEFjdGlvblF1ZXVlLlByaW9yaXR5Lk5vcm1hbCwgW1xyXG4gICAgICAgIFNob3dCdXR0b25UKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvdHRvbTpcIjEwcHhcIiwgXHJcbiAgICAgICAgICAgIHJpZ2h0OlwiMTBweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDpcIjUwcHhcIixcclxuICAgICAgICAgICAgaGVpZ2h0OlwiMjBweFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwibmV4dFwiLFxyXG4gICAgICAgICAgICBcIuasoeOBuCA+XCIsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgYnV0dG9uVHJhbnNpdGlvbjogXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbG9yXCIsIFxyXG4gICAgICAgICAgICAgICAgbm9ybWFsOiBcIiNmZjAwMDBcIixcclxuICAgICAgICAgICAgICAgIHByZXNzZWQ6IFwiIzAwMDBmZlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsIFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIFNob3dCdXR0b25UKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvdHRvbTpcIjEwcHhcIiwgXHJcbiAgICAgICAgICAgIHJpZ2h0OlwiNzBweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDpcIjUwcHhcIixcclxuICAgICAgICAgICAgaGVpZ2h0OlwiMjBweFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwicmV0dXJuXCIsXHJcbiAgICAgICAgICAgIFwi57mw44KK6L+U44GZXCIsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvblRyYW5zaXRpb246IFxyXG4gICAgICAgICAgICAgICAge3R5cGU6IFwiY29sb3JcIiwgXHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IFwiI2ZmMDAwMFwiLFxyXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogXCIjMDAwMGZmXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsIFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKSxcclxuICAgICAgICBTaG93QnV0dG9uVChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBib3R0b206XCIxMHB4XCIsIFxyXG4gICAgICAgICAgICByaWdodDpcIjEzMHB4XCIsXHJcbiAgICAgICAgICAgIHdpZHRoOlwiNTBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6XCIyMHB4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJiYWNrXCIsXHJcbiAgICAgICAgICAgIFwiPCDmiLvjgotcIixcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uVHJhbnNpdGlvbjogXHJcbiAgICAgICAgICAgICAgICB7dHlwZTogXCJjb2xvclwiLCBcclxuICAgICAgICAgICAgICAgIG5vcm1hbDogXCIjZmYwMDAwXCIsXHJcbiAgICAgICAgICAgICAgICBwcmVzc2VkOiBcIiMwMDAwZmZcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIiwgXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG4gICAgXSk7XHJcbn07IiwiaW1wb3J0IHsgU2hvd1RleHQgfSBmcm9tIFwiLi4vYWN0aW9uL3Nob3d0ZXh0LmpzXCJcclxuaW1wb3J0IHsgSGlkZVVpIH0gZnJvbSBcIi4uL2FjdGlvbi9oaWRldWkuanNcIlxyXG5cclxuZXhwb3J0IHZhciBzaG93VGVzdElkID0gKFYpID0+e1xyXG4gICAgQWN0aW9uUXVldWUucHVzaChBY3Rpb25RdWV1ZS5Qcmlvcml0eS5Ob3JtYWwsIFtcclxuICAgICAgICBIaWRlVWkoXCJ0ZXN0aWRcIiksXHJcbiAgICAgICAgU2hvd1RleHQoe2JvdHRvbTpcIjQwcHhcIiwgcmlnaHQ6XCIxNDBweFwifSwgXCJ0ZXN0aWRcIixcIlRlc3QgSURcIiArIFYsIDAse2ZvbnRTaXplOiBcIjE1cHhcIixmb250Q29sb3I6IFwiYmxhY2tcIix2aXNpYmxlQmFja2dyb3VuZDogXCJmYWxzZVwiLHRleHRBbGlnbjogXCJjZW50ZXJcIn0pXHJcbiAgICBdKTtcclxufTsiLCJpbXBvcnQge0FjdH0gZnJvbSBcIi4uL2FjdGlvbi9hY3QuanNcIjsgXHJcblxyXG5leHBvcnQgdmFyIGFjdFRlc3QgPSAoKSA9PntcclxuICAgIFZIQVNldHRpbmdzLmFkZExpc3RlbmVyKFZIQUV2ZW50Lkxpc3RlbmVkLCAoKSA9PiB7XHJcbiAgICAgICAgQWN0aW9uUXVldWUucHVzaChBY3Rpb25RdWV1ZS5Qcmlvcml0eS5JbXBvcnRhbnQsW1xyXG4gICAgICAgICAgICBBY3QoOClcclxuICAgICAgICBdKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHtTcGVlY2h9IGZyb20gXCIuLi9hY3Rpb24vc3BlZWNoLmpzXCI7IFxyXG5cclxuZXhwb3J0IHZhciBtYWtlZmFjZVRlc3QgPSAoKSA9PntcclxuICAgIFZIQVNldHRpbmdzLmFkZExpc3RlbmVyKFZIQUV2ZW50Lkxpc3RlbmVkLCAoKSA9PiB7XHJcbiAgICAgICAgQWN0aW9uUXVldWUucHVzaChBY3Rpb25RdWV1ZS5Qcmlvcml0eS5JbXBvcnRhbnQsW1xyXG4gICAgICAgIE1ha2VmYWNlKDEsMTAwLDEwMDAwKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQge1NwZWVjaH0gZnJvbSBcIi4uL2FjdGlvbi9zcGVlY2guanNcIjsgXHJcblxyXG5leHBvcnQgdmFyIHNwZWVjaFRlc3QgPSAoKSA9PntcclxuICAgIFZIQVNldHRpbmdzLmFkZExpc3RlbmVyKFZIQUV2ZW50Lkxpc3RlbmVkLCAoKSA9PiB7XHJcbiAgICAgICAgQWN0aW9uUXVldWUucHVzaChBY3Rpb25RdWV1ZS5Qcmlvcml0eS5JbXBvcnRhbnQsW1xyXG4gICAgICAgICAgICBTcGVlY2goXCLjgZPjgpPjgavjgaHjga9cIilcclxuICAgICAgICBdKTtcclxuICAgIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==