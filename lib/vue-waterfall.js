/*!
 * vue-waterfall v1.0.5
 * (c) 2017 MopTym <moptym@163.com>
 * https://github.com/MopTym/vue-waterfall
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Waterfall"] = factory();
	else
		root["Waterfall"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _waterfall = __webpack_require__(1);

	var _waterfall2 = _interopRequireDefault(_waterfall);

	var _waterfallSlot = __webpack_require__(8);

	var _waterfallSlot2 = _interopRequireDefault(_waterfallSlot);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  Waterfall: _waterfall2.default,
	  WaterfallSlot: _waterfallSlot2.default,
	  waterfall: _waterfall2.default,
	  waterfallSlot: _waterfallSlot2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(2)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(7)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/tommyshao/project/git/kuaizi-co/vue-waterfall/src/waterfall.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4cd53363", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4cd53363", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] waterfall.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.23.1@css-loader/index.js!../node_modules/.9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-4cd53363!../node_modules/.9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./waterfall.vue", function() {
				var newContent = require("!!../node_modules/.0.23.1@css-loader/index.js!../node_modules/.9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-4cd53363!../node_modules/.9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./waterfall.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.vue-waterfall {\n  position: relative;\n  /*overflow: hidden; cause clientWidth = 0 in IE if height not bigger than 0 */\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var MOVE_CLASS_PROP = '_wfMoveClass';

	exports.default = {
	  props: {
	    autoResize: {
	      default: true
	    },
	    interval: {
	      default: 200,
	      validator: function validator(val) {
	        return val >= 0;
	      }
	    },
	    align: {
	      default: 'left',
	      validator: function validator(val) {
	        return ~['left', 'right', 'center'].indexOf(val);
	      }
	    },
	    line: {
	      default: 'v',
	      validator: function validator(val) {
	        return ~['v', 'h'].indexOf(val);
	      }
	    },
	    lineGap: {
	      required: true,
	      validator: function validator(val) {
	        return val >= 0;
	      }
	    },
	    minLineGap: {
	      validator: function validator(val) {
	        return val >= 0;
	      }
	    },
	    maxLineGap: {
	      validator: function validator(val) {
	        return val >= 0;
	      }
	    },
	    singleMaxWidth: {
	      validator: function validator(val) {
	        return val >= 0;
	      }
	    },
	    fixedHeight: {
	      default: false
	    },
	    grow: {
	      validator: function validator(val) {
	        return val instanceof Array;
	      }
	    },
	    gap: {
	      type: Number,
	      default: 0
	    },
	    padding: {
	      type: Number,
	      default: 0
	    },
	    borderWidth: {
	      type: Number,
	      default: 0
	    },
	    watch: {
	      default: function _default() {
	        return {};
	      }
	    }
	  },
	  data: function data() {
	    return {
	      style: {
	        height: '',
	        overflow: ''
	      },
	      token: null
	    };
	  },
	  methods: {
	    reflowHandler: reflowHandler,
	    autoResizeHandler: autoResizeHandler,
	    reflow: reflow
	  },
	  created: function created() {
	    var _this = this;

	    this.virtualRects = [];
	    this.$on('reflow', function () {
	      _this.reflowHandler();
	    });
	    this.$watch(function () {
	      return _this.align, _this.line, _this.lineGap, _this.minLineGap, _this.maxLineGap, _this.singleMaxWidth, _this.fixedHeight, _this.watch;
	    }, this.reflowHandler);
	    this.$watch('grow', this.reflowHandler);
	  },
	  mounted: function mounted() {
	    this.$watch('autoResize', this.autoResizeHandler);
	    on(this.$el, getTransitionEndEvent(), tidyUpAnimations, true);
	    this.autoResizeHandler(this.autoResize);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.autoResizeHandler(false);
	    off(this.$el, getTransitionEndEvent(), tidyUpAnimations, true);
	  }
	};


	function autoResizeHandler(autoResize) {
	  if (autoResize === false || !this.autoResize) {
	    off(window, 'resize', this.reflowHandler, false);
	  } else {
	    on(window, 'resize', this.reflowHandler, false);
	  }
	}

	function tidyUpAnimations(event) {
	  var node = event.target;
	  var moveClass = node[MOVE_CLASS_PROP];
	  if (moveClass) {
	    removeClass(node, moveClass);
	  }
	}

	function reflowHandler() {
	  clearTimeout(this.token);
	  this.token = setTimeout(this.reflow, this.interval);
	}

	function reflow() {
	  var _this2 = this;

	  if (!this.$el) {
	    return;
	  }
	  var width = this.$el.clientWidth;
	  var metas = this.$children.map(function (slot) {
	    return slot.getMeta();
	  });
	  metas.sort(function (a, b) {
	    return a.order - b.order;
	  });
	  this.virtualRects = metas.map(function () {
	    return {};
	  });
	  calculate(this, metas, this.virtualRects);
	  setTimeout(function () {
	    if (isScrollBarVisibilityChange(_this2.$el, width)) {
	      calculate(_this2, metas, _this2.virtualRects);
	    }
	    _this2.style.overflow = 'hidden';
	    render(_this2.virtualRects, metas);
	    _this2.$emit('reflowed', _this2);
	  }, 0);
	}

	function isScrollBarVisibilityChange(el, lastClientWidth) {
	  return lastClientWidth !== el.clientWidth;
	}

	function calculate(vm, metas, styles) {
	  var options = getOptions(vm);
	  var processor = vm.line === 'h' ? horizontalLineProcessor : verticalLineProcessor;
	  processor.calculate(vm, options, metas, styles);
	}

	function getOptions(vm) {
	  var maxLineGap = vm.maxLineGap ? +vm.maxLineGap : vm.lineGap;
	  return {
	    align: ~['left', 'right', 'center'].indexOf(vm.align) ? vm.align : 'left',
	    line: ~['v', 'h'].indexOf(vm.line) ? vm.line : 'v',
	    lineGap: +vm.lineGap,
	    minLineGap: vm.minLineGap ? +vm.minLineGap : vm.lineGap,
	    maxLineGap: maxLineGap,
	    singleMaxWidth: Math.max(vm.singleMaxWidth || 0, maxLineGap),
	    fixedHeight: !!vm.fixedHeight,
	    grow: vm.grow && vm.grow.map(function (val) {
	      return +val;
	    })
	  };
	}

	var verticalLineProcessor = function () {

	  function calculate(vm, options, metas, rects) {
	    var width = vm.$el.clientWidth;
	    var grow = options.grow;
	    var strategy = grow ? getRowStrategyWithGrow(width, grow) : getRowStrategy(width, options);
	    var tops = getArrayFillWith(0, strategy.count);
	    var gap = vm.gap;
	    var growLen = grow ? grow.length : strategy.count;
	    var padding = vm.padding;
	    var borderWidth = vm.borderWidth;
	    metas.forEach(function (meta, index) {
	      var gapLeft = index % growLen === 0 ? 0 : gap / 2;
	      var offset = tops.reduce(function (last, top, i) {
	        return top < tops[last] ? i : last;
	      }, 0);
	      var width = strategy.width[offset % strategy.count];
	      var rect = rects[index];
	      rect.top = tops[offset] + gap / 2;
	      rect.left = strategy.left + (offset ? sum(strategy.width.slice(0, offset)) : 0) + gap / 2;
	      rect.width = width - gap;
	      rect.height = meta.height * (options.fixedHeight ? 1 : (rect.width - padding * 2 - borderWidth * 2) / meta.width) + padding * 2;
	      tops[offset] = tops[offset] + rect.height + gap;
	    });
	    vm.style.height = Math.max.apply(Math, tops) + 'px';
	  }

	  function getRowStrategy(width, options) {
	    var count = width / options.lineGap;
	    var slotWidth = void 0;
	    if (options.singleMaxWidth >= width) {
	      count = 1;
	      slotWidth = Math.max(width, options.minLineGap);
	    } else {
	      var maxContentWidth = options.maxLineGap * ~~count;
	      var minGreedyContentWidth = options.minLineGap * ~~(count + 1);
	      var canFit = maxContentWidth >= width;
	      var canFitGreedy = minGreedyContentWidth <= width;
	      if (canFit && canFitGreedy) {
	        count = Math.round(count);
	        slotWidth = width / count;
	      } else if (canFit) {
	        count = ~~count;
	        slotWidth = width / count;
	      } else if (canFitGreedy) {
	        count = ~~(count + 1);
	        slotWidth = width / count;
	      } else {
	        count = ~~count;
	        slotWidth = options.maxLineGap;
	      }
	      if (count === 1) {
	        slotWidth = Math.min(width, options.singleMaxWidth);
	        slotWidth = Math.max(slotWidth, options.minLineGap);
	      }
	    }
	    return {
	      width: getArrayFillWith(slotWidth, count),
	      count: count,
	      left: getLeft(width, slotWidth * count, options.align)
	    };
	  }

	  function getRowStrategyWithGrow(width, grow) {
	    var total = sum(grow);
	    return {
	      width: grow.map(function (val) {
	        return width * val / total;
	      }),
	      count: grow.length,
	      left: 0
	    };
	  }

	  return {
	    calculate: calculate
	  };
	}();

	var horizontalLineProcessor = function () {

	  function calculate(vm, options, metas, rects) {
	    var width = vm.$el.clientWidth;
	    var total = metas.length;
	    var top = 0;
	    var offset = 0;
	    var gap = vm.gap;
	    var padding = vm.padding;
	    var borderWidth = vm.borderWidth;

	    while (offset < total) {
	      var strategy = getRowStrategy(width, options, metas, offset);
	      for (var i = 0, left = 0, meta, rect; i < strategy.count; i++) {
	        meta = metas[offset + i];
	        rect = rects[offset + i];
	        rect.top = top;
	        rect.left = strategy.left + left + gap / 2;
	        rect.height = strategy.height - (gap + padding + borderWidth * 2);
	        rect.width = meta.width * rect.height / meta.height;
	        left += rect.width + gap;
	      }
	      offset += strategy.count;
	      top += strategy.height - gap;
	    }
	    vm.style.height = top + 'px';
	  }

	  function getRowStrategy(width, options, metas, offset) {
	    var greedyCount = getGreedyCount(width, options.lineGap, metas, offset);
	    var lazyCount = Math.max(greedyCount - 1, 1);
	    var greedySize = getContentSize(width, options, metas, offset, greedyCount);
	    var lazySize = getContentSize(width, options, metas, offset, lazyCount);
	    var finalSize = chooseFinalSize(lazySize, greedySize, width);
	    var height = finalSize.height;
	    var fitContentWidth = finalSize.width;
	    if (finalSize.count === 1) {
	      fitContentWidth = Math.min(options.singleMaxWidth, width);
	      height = metas[offset].height * fitContentWidth / metas[offset].width;
	    }
	    return {
	      left: getLeft(width, fitContentWidth, options.align),
	      count: finalSize.count,
	      height: height
	    };
	  }

	  function getGreedyCount(rowWidth, rowHeight, metas, offset) {
	    var count = 0;
	    for (var i = offset, width = 0; i < metas.length && width <= rowWidth; i++) {
	      width += metas[i].width * rowHeight / metas[i].height;
	      count++;
	    }
	    return count;
	  }

	  function getContentSize(rowWidth, options, metas, offset, count) {
	    var originWidth = 0;
	    for (var i = count - 1; i >= 0; i--) {
	      var meta = metas[offset + i];
	      originWidth += meta.width * options.lineGap / meta.height;
	    }
	    var fitHeight = options.lineGap * rowWidth / originWidth;
	    var canFit = fitHeight <= options.maxLineGap && fitHeight >= options.minLineGap;
	    if (canFit) {
	      return {
	        cost: Math.abs(options.lineGap - fitHeight),
	        count: count,
	        width: rowWidth,
	        height: fitHeight
	      };
	    } else {
	      var height = originWidth > rowWidth ? options.minLineGap : options.maxLineGap;
	      return {
	        cost: Infinity,
	        count: count,
	        width: originWidth * height / options.lineGap,
	        height: height
	      };
	    }
	  }

	  function chooseFinalSize(lazySize, greedySize, rowWidth) {
	    if (lazySize.cost === Infinity && greedySize.cost === Infinity) {
	      return greedySize.width < rowWidth ? greedySize : lazySize;
	    } else {
	      return greedySize.cost >= lazySize.cost ? lazySize : greedySize;
	    }
	  }

	  return {
	    calculate: calculate
	  };
	}();

	function getLeft(width, contentWidth, align) {
	  switch (align) {
	    case 'right':
	      return width - contentWidth;
	    case 'center':
	      return (width - contentWidth) / 2;
	    default:
	      return 0;
	  }
	}

	function sum(arr) {
	  return arr.reduce(function (sum, val) {
	    return sum + val;
	  });
	}

	function render(rects, metas) {
	  var metasNeedToMoveByTransform = metas.filter(function (meta) {
	    return meta.moveClass;
	  });
	  var firstRects = getRects(metasNeedToMoveByTransform);
	  applyRects(rects, metas);
	  var lastRects = getRects(metasNeedToMoveByTransform);
	  metasNeedToMoveByTransform.forEach(function (meta, i) {
	    meta.node[MOVE_CLASS_PROP] = meta.moveClass;
	    setTransform(meta.node, firstRects[i], lastRects[i]);
	  });
	  document.body.clientWidth;
	  metasNeedToMoveByTransform.forEach(function (meta) {
	    addClass(meta.node, meta.moveClass);
	    clearTransform(meta.node);
	  });
	}

	function getRects(metas) {
	  return metas.map(function (meta) {
	    return meta.vm.rect;
	  });
	}

	function applyRects(rects, metas) {
	  rects.forEach(function (rect, i) {
	    var style = metas[i].node.style;
	    metas[i].vm.rect = rect;
	    for (var prop in rect) {
	      style[prop] = rect[prop] + 'px';
	    }
	  });
	}

	function setTransform(node, firstRect, lastRect) {
	  var dx = firstRect.left - lastRect.left;
	  var dy = firstRect.top - lastRect.top;
	  var sw = firstRect.width / lastRect.width;
	  var sh = firstRect.height / lastRect.height;
	  node.style.transform = node.style.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px) scale(' + sw + ',' + sh + ')';
	  node.style.transitionDuration = '0s';
	}

	function clearTransform(node) {
	  node.style.transform = node.style.WebkitTransform = '';
	  node.style.transitionDuration = '';
	}

	function getTransitionEndEvent() {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  return transitionEndEvent;
	}

	function getArrayFillWith(item, count) {
	  var getter = typeof item === 'function' ? function () {
	    return item();
	  } : function () {
	    return item;
	  };
	  var arr = [];
	  for (var i = 0; i < count; i++) {
	    arr[i] = getter();
	  }
	  return arr;
	}

	function addClass(elem, name) {
	  if (!hasClass(elem, name)) {
	    var cur = attr(elem, 'class').trim();
	    var res = (cur + ' ' + name).trim();
	    attr(elem, 'class', res);
	  }
	}

	function removeClass(elem, name) {
	  var reg = new RegExp('\\s*\\b' + name + '\\b\\s*', 'g');
	  var res = attr(elem, 'class').replace(reg, ' ').trim();
	  attr(elem, 'class', res);
	}

	function hasClass(elem, name) {
	  return new RegExp('\\b' + name + '\\b').test(attr(elem, 'class'));
	}

	function attr(elem, name, value) {
	  if (typeof value !== 'undefined') {
	    elem.setAttribute(name, value);
	  } else {
	    return elem.getAttribute(name) || '';
	  }
	}

	function on(elem, type, listener) {
	  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	  elem.addEventListener(type, listener, useCapture);
	}

	function off(elem, type, listener) {
	  var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	  elem.removeEventListener(type, listener, useCapture);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "vue-waterfall",
	    style: (_vm.style)
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4cd53363", module.exports)
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(9)

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/tommyshao/project/git/kuaizi-co/vue-waterfall/src/waterfall-slot.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e0279250", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e0279250", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] waterfall-slot.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/.0.23.1@css-loader/index.js!../node_modules/.9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-e0279250!../node_modules/.9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./waterfall-slot.vue", function() {
				var newContent = require("!!../node_modules/.0.23.1@css-loader/index.js!../node_modules/.9.9.5@vue-loader/lib/style-rewriter.js?id=data-v-e0279250!../node_modules/.9.9.5@vue-loader/lib/selector.js?type=styles&index=0!./waterfall-slot.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.vue-waterfall-slot {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      isShow: false
	    };
	  },
	  props: {
	    width: {
	      required: true,
	      validator: function validator(val) {
	        return val >= 0;
	      }
	    },
	    height: {
	      required: true,
	      validator: function validator(val) {
	        return val >= 0;
	      }
	    },
	    order: {
	      default: 0
	    },
	    moveClass: {
	      default: ''
	    }
	  },
	  methods: {
	    notify: function notify() {
	      this.$parent.$emit('reflow', this);
	    },
	    getMeta: function getMeta() {
	      return {
	        vm: this,
	        node: this.$el,
	        order: this.order,
	        width: this.width,
	        height: this.height,
	        moveClass: this.moveClass
	      };
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.rect = {
	      top: 0,
	      left: 0,
	      width: 0,
	      height: 0
	    };
	    this.$watch(function () {
	      return _this.width, _this.height;
	    }, this.notify);
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    this.$parent.$once('reflowed', function () {
	      _this2.isShow = true;
	    });
	    this.notify();
	  },
	  destroyed: function destroyed() {
	    this.notify();
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "vue-waterfall-slot"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-e0279250", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;