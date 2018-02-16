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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mychart = function () {
	function Mychart(no_of_bars, position) {
		_classCallCheck(this, Mychart);

		this.bars = [];
		this.data = [];
		this.no_of_bars = no_of_bars;
		this.position = position;
		this.timer = 0;
		this.setInterval = false;
		this.update();
	}

	_createClass(Mychart, [{
		key: 'update',
		value: function update() {
			this.data = [];
			for (var i = 0; i < this.no_of_bars; i++) {
				this.data.push(Math.floor(Math.random() * 20) + 50);
			}
			if (this.bars.length == 0) {
				this.addContainers();
			}
			this.horizontal();
		}
	}, {
		key: 'addContainers',
		value: function addContainers() {
			var main = document.getElementById('mainContainer');
			for (var i = 0; i < this.no_of_bars; i++) {
				var d = document.createElement('li');
				d.class = "width";
				d.id = "bar" + i;
				this.bars.push(d);
				main.appendChild(d);
			}
		}
	}, {
		key: 'horizontal',
		value: function horizontal() {
			for (var i = 0; i < this.no_of_bars; i++) {
				this.bars[i].className = "height";
				this.bars[i].style.width = this.data[i] + 'px';
			}
		}
	}, {
		key: 'vertical',
		value: function vertical() {
			for (var i = 0; i < this.no_of_bars; i++) {
				this.bars[i].className = "width";
				this.bars[i].style.height = this.data[i] + 'px';
			}
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			var main = document.getElementById('mainContainer');
			main.innerHTML = '';
		}
	}, {
		key: 'timer',
		value: function timer() {
			if (!this.setInterval) {
				this.setInterval = true;
				this.timer = setInterval(function () {
					this.update();
				}, 1000);
			} else {
				this.setInterval = false;
				clearInterval(this.timer);
			}
		}
	}]);

	return Mychart;
}();

var c = new Mychart(10, 'h');

document.getElementById('update').addEventListener("click", function () {
	c.update();
}, false);

document.getElementById('destroy').addEventListener("click", function () {
	c.destroy();
}, false);

document.getElementById('horizontal').addEventListener("click", function () {
	c.horizontal();
}, false);

document.getElementById('vertical').addEventListener("click", function () {
	c.vertical();
}, false);

document.getElementById('timer').addEventListener("click", function () {
	c.timer();
}, false);

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map