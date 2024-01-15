/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hamburger() {
  const open = document.querySelector(".header__sidepanel");
  const close = document.querySelector(".hamburgerMenu__wrapper__close");
  const menu = document.querySelector(".hamburgerMenu");
  open.addEventListener("click", event => {
    menu.classList.add("active");
  });
  close.addEventListener("click", event => {
    menu.classList.remove("active");
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function mask() {
  $('input[name=phone]').mask("+7 (999) 999-99-99");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "./src/js/modules/scoreSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/scoreSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sliderScore() {
  const score = document.querySelector(".mainWindow__score");
  const next = document.querySelector("#mainWindow__next");
  const prev = document.querySelector("#mainWindow__prev");
  let index = 1;
  score.textContent = index;
  const item = document.querySelectorAll(".mainWindow__my-slider__item");
  const indexArray = item.length - 2;
  console.log(indexArray);
  next.addEventListener("click", e => {
    if (index >= indexArray) {
      index = 1;
      score.textContent = index;
    } else {
      index = index + 1;
      score.textContent = index;
    }
  });
  prev.addEventListener("click", e => {
    if (index <= 1) {
      index = indexArray;
      score.textContent = index;
    } else {
      index = index - 1;
      score.textContent = index;
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderScore);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
  var mainWindowSlider = tns({
    container: '.mainWindow__my-slider',
    controlsContainer: "#mainWindow__custom_controlsContainer",
    prevButton: '#mainWindow__prev',
    nextButton: '#mainWindow__next',
    items: 1,
    nav: true,
    responsive: {}
  });
  var newsSlider = tns({
    container: '.news__my-slider',
    controlsContainer: "#news__custom_controlsContainer",
    prevButton: '#news__prev',
    nextButton: '#news__next',
    items: 3,
    nav: false,
    responsive: {
      0: {
        items: 1 // На самых узких экранах отображаем по одному элементу
      },

      769: {
        items: 2 // От 769 пикселей и до 1044 отображаем по два элемента
      },

      1045: {
        items: 3 // Начиная с 1045 пикселей отображаем по три элемента
      }
    }
  });

  return {
    mainWindowSlider,
    newsSlider
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_scoreSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scoreSlider */ "./src/js/modules/scoreSlider.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");




window.addEventListener("DOMContentLoaded", () => {
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_scoreSlider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map