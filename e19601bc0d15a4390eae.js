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
/******/ 	__webpack_require__.p = "/snk/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo.getAvailableRoutes.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/park-miller/index.js":
/*!*******************************************************************!*\
  !*** /home/runner/work/snk/snk/node_modules/park-miller/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const MAX_INT32 = 2147483647;
const MINSTD = 16807;

class ParkMiller {
	constructor(seed) {
		if (!Number.isInteger(seed)) {
			throw new TypeError('Expected `seed` to be a `integer`');
		}

		this._seed = seed % MAX_INT32;

		if (this._seed <= 0) {
			this._seed += (MAX_INT32 - 1);
		}
	}

	integer() {
		this._seed *= MINSTD;
		this._seed %= MAX_INT32;
		return this._seed;
	}

	integerInRange(min, max) {
		return Math.round(this.floatInRange(min, max));
	}

	float() {
		return (this.integer() - 1) / (MAX_INT32 - 1);
	}

	floatInRange(min, max) {
		return min + ((max - min) * this.float());
	}

	boolean() {
		return this.integer() % 2 === 0;
	}
}

module.exports = ParkMiller;


/***/ }),

/***/ "../compute/generateGrid.ts":
/*!**********************************!*\
  !*** ../compute/generateGrid.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.generateRandomGrid = void 0;
var grid_1 = __webpack_require__(/*! ./grid */ "../compute/grid.ts");
var defaultRand = function (a, b) {
    return Math.floor(Math.random() * (b - a)) + a;
};
exports.generateRandomGrid = function (width, height, options, rand) {
    if (options === void 0) { options = {
        colors: [1, 2, 3],
        emptyP: 2,
    }; }
    if (rand === void 0) { rand = defaultRand; }
    var grid = grid_1.createEmptyGrid(width, height);
    for (var x = width; x--;)
        for (var y = height; y--;) {
            var k = rand(-options.emptyP, options.colors.length);
            if (k >= 0)
                grid_1.setColor(grid, x, y, options.colors[k]);
        }
    return grid;
};


/***/ }),

/***/ "../compute/getAvailableRoutes.ts":
/*!****************************************!*\
  !*** ../compute/getAvailableRoutes.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.snakeSteps = exports.getAvailableRoutes = void 0;
var grid_1 = __webpack_require__(/*! ./grid */ "../compute/grid.ts");
var point_1 = __webpack_require__(/*! ./point */ "../compute/point.ts");
var snake_1 = __webpack_require__(/*! ./snake */ "../compute/snake.ts");
var computeSnakeKey = function (snake) {
    var key = "";
    for (var i = 0; i < snake.length; i++)
        key += snake[i].x + "," + snake[i].y;
    return key;
};
var unwrap = function (o, headN) {
    if (!o)
        return [];
    var head0 = o.snake[0];
    return __spreadArrays(unwrap(o.parent, head0), [
        { x: headN.x - head0.x, y: headN.y - head0.y },
    ]);
};
var snakeEquals = function (a, b, n) {
    if (n === void 0) { n = 99999; }
    for (var i = 0; i < Math.min(a.length, b.length, n); i++)
        if (!point_1.pointEquals(a[i], b[i]))
            return false;
    return true;
};
exports.getAvailableRoutes = function (grid, snake0, options, maxSolutions, maxLengthEquality, maxWeight, maxIterations) {
    if (maxSolutions === void 0) { maxSolutions = 10; }
    if (maxLengthEquality === void 0) { maxLengthEquality = 1; }
    if (maxWeight === void 0) { maxWeight = 30; }
    if (maxIterations === void 0) { maxIterations = 500; }
    var openList = [
        {
            key: computeSnakeKey(snake0),
            snake: snake0,
            w: 0,
            parent: null,
        },
    ];
    var closeList = {};
    var solutions = [];
    var _loop_1 = function () {
        openList.sort(function (a, b) { return a.w - b.w; });
        var c = openList.shift();
        closeList[c.key] = c;
        var head = c.snake[0];
        var color = grid_1.isInside(grid, head.x, head.y) && grid_1.getColor(grid, head.x, head.y);
        if (color) {
            var s0 = solutions.find(function (s) {
                return snakeEquals(s.snakeN, c.snake, maxLengthEquality + 1);
            });
            var directions = unwrap(c.parent, c.snake[0]);
            if (!s0 || directions.length < s0.directions.length)
                solutions.push({ snakeN: c.snake, directions: directions });
        }
        else {
            var _loop_2 = function (i) {
                var x = head.x + point_1.around4[i].x;
                var y = head.y + point_1.around4[i].y;
                if (grid_1.isInsideLarge(grid, 1, x, y) &&
                    !snake_1.snakeWillSelfCollide(c.snake, x, y)) {
                    var snake = c.snake.slice(0, options.maxSnakeLength - 1);
                    snake.unshift({ x: x, y: y });
                    var key_1 = computeSnakeKey(snake);
                    if (!closeList[key_1] && !openList.some(function (s) { return s.key === key_1; })) {
                        var w = 1 + c.w;
                        openList.push({ key: key_1, snake: snake, w: w, parent: c });
                    }
                    else {
                        // console.log(key, closeList);
                        // debugger;
                    }
                }
            };
            for (var i = 0; i < point_1.around4.length; i++) {
                _loop_2(i);
            }
        }
    };
    while (openList.length &&
        maxIterations-- > 0 &&
        openList[0].w <= maxWeight &&
        solutions.length < maxSolutions) {
        _loop_1();
    }
    return solutions;
};
exports.snakeSteps = [];


/***/ }),

/***/ "../compute/grid.ts":
/*!**************************!*\
  !*** ../compute/grid.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.createEmptyGrid = exports.setColor = exports.copyGrid = exports.getColor = exports.isInsideLarge = exports.isInside = exports.getIndex = void 0;
exports.getIndex = function (grid, x, y) {
    return x * grid.height + y;
};
exports.isInside = function (grid, x, y) {
    return x >= 0 && y >= 0 && x < grid.width && y < grid.height;
};
exports.isInsideLarge = function (grid, m, x, y) {
    return x >= -m && y >= -m && x < grid.width + m && y < grid.height + m;
};
exports.getColor = function (grid, x, y) {
    return grid.data[exports.getIndex(grid, x, y)];
};
exports.copyGrid = function (grid) { return (__assign(__assign({}, grid), { data: grid.data.slice() })); };
exports.setColor = function (grid, x, y, color) {
    grid.data[exports.getIndex(grid, x, y)] = color;
};
exports.createEmptyGrid = function (width, height) { return ({
    width: width,
    height: height,
    data: Array.from({ length: width * height }, function () { return null; }),
}); };


/***/ }),

/***/ "../compute/point.ts":
/*!***************************!*\
  !*** ../compute/point.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.pointEquals = exports.around4 = void 0;
exports.around4 = [
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
];
exports.pointEquals = function (a, b) { return a.x === b.x && a.y === b.y; };


/***/ }),

/***/ "../compute/snake.ts":
/*!***************************!*\
  !*** ../compute/snake.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.copySnake = exports.snakeSelfCollide = exports.snakeWillSelfCollide = exports.snakeSelfCollideNext = void 0;
exports.snakeSelfCollideNext = function (snake, direction, options) {
    var hx = snake[0].x + direction.x;
    var hy = snake[0].y + direction.y;
    for (var i = 0; i < Math.min(options.maxSnakeLength, snake.length); i++)
        if (snake[i].x === hx && snake[i].y === hy)
            return true;
    return false;
};
exports.snakeWillSelfCollide = function (snake, headx, heady) {
    for (var i = 0; i < snake.length - 1; i++)
        if (snake[i].x === headx && snake[i].y === heady)
            return true;
    return false;
};
exports.snakeSelfCollide = function (snake) {
    for (var i = 1; i < snake.length; i++)
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y)
            return true;
    return false;
};
exports.copySnake = function (x) { return x.map(function (p) { return (__assign({}, p)); }); };


/***/ }),

/***/ "../compute/step.ts":
/*!**************************!*\
  !*** ../compute/step.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.step = exports.stepPicking = exports.stepSnake = exports.moveSnake = void 0;
var grid_1 = __webpack_require__(/*! ./grid */ "../compute/grid.ts");
exports.moveSnake = function (snake, headx, heady) {
    for (var k = snake.length - 1; k > 0; k--) {
        snake[k].x = snake[k - 1].x;
        snake[k].y = snake[k - 1].y;
    }
    snake[0].x = headx;
    snake[0].y = heady;
};
exports.stepSnake = function (snake, direction, options) {
    var headx = snake[0].x + direction.x;
    var heady = snake[0].y + direction.y;
    if (snake.length === options.maxSnakeLength) {
        exports.moveSnake(snake, headx, heady);
    }
    else {
        snake.unshift({ x: headx, y: heady });
    }
};
exports.stepPicking = function (grid, snake, stack) {
    if (grid_1.isInside(grid, snake[0].x, snake[0].y)) {
        var c = grid_1.getColor(grid, snake[0].x, snake[0].y);
        if (c) {
            grid_1.setColor(grid, snake[0].x, snake[0].y, null);
            stack.push(c);
        }
    }
};
exports.step = function (grid, snake, stack, direction, options) {
    exports.stepSnake(snake, direction, options);
    exports.stepPicking(grid, snake, stack);
};


/***/ }),

/***/ "../draw/drawGrid.ts":
/*!***************************!*\
  !*** ../draw/drawGrid.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.drawGrid = void 0;
var grid_1 = __webpack_require__(/*! @snk/compute/grid */ "../compute/grid.ts");
var pathRoundedRect_1 = __webpack_require__(/*! ./pathRoundedRect */ "../draw/pathRoundedRect.ts");
exports.drawGrid = function (ctx, grid, o) {
    for (var x = grid.width; x--;)
        for (var y = grid.height; y--;) {
            var c = grid_1.getColor(grid, x, y);
            // @ts-ignore
            var color = c === null ? o.colorEmpty : o.colorDots[c];
            ctx.save();
            ctx.translate(x * o.sizeCell + (o.sizeCell - o.sizeDot) / 2, y * o.sizeCell + (o.sizeCell - o.sizeDot) / 2);
            ctx.fillStyle = color;
            ctx.strokeStyle = o.colorBorder;
            ctx.lineWidth = 1;
            ctx.beginPath();
            pathRoundedRect_1.pathRoundedRect(ctx, o.sizeDot, o.sizeDot, o.sizeBorderRadius);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        }
};


/***/ }),

/***/ "../draw/drawWorld.ts":
/*!****************************!*\
  !*** ../draw/drawWorld.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.drawWorld = exports.drawSnake = void 0;
var pathRoundedRect_1 = __webpack_require__(/*! ./pathRoundedRect */ "../draw/pathRoundedRect.ts");
var drawGrid_1 = __webpack_require__(/*! ./drawGrid */ "../draw/drawGrid.ts");
exports.drawSnake = function (ctx, snake, o) {
    for (var i = 0; i < snake.length; i++) {
        var u = (i + 1) * 0.6;
        ctx.save();
        ctx.fillStyle = o.colorSnake;
        ctx.translate(snake[i].x * o.sizeCell + u, snake[i].y * o.sizeCell + u);
        ctx.beginPath();
        pathRoundedRect_1.pathRoundedRect(ctx, o.sizeCell - u * 2, o.sizeCell - u * 2, (o.sizeCell - u * 2) * 0.25);
        ctx.fill();
        ctx.restore();
    }
};
exports.drawWorld = function (ctx, grid, snake, stack, o) {
    ctx.save();
    ctx.translate(1 * o.sizeCell, 2 * o.sizeCell);
    drawGrid_1.drawGrid(ctx, grid, o);
    exports.drawSnake(ctx, snake, o);
    ctx.restore();
    var m = 5;
    ctx.save();
    ctx.translate(o.sizeCell, (grid.height + 4) * o.sizeCell);
    for (var i = 0; i < stack.length; i++) {
        ctx.fillStyle = o.colorDots[stack[i]];
        ctx.fillRect(i * m, 0, m, 10);
    }
    ctx.restore();
};


/***/ }),

/***/ "../draw/pathRoundedRect.ts":
/*!**********************************!*\
  !*** ../draw/pathRoundedRect.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.pathRoundedRect = void 0;
exports.pathRoundedRect = function (ctx, width, height, borderRadius) {
    ctx.moveTo(borderRadius, 0);
    ctx.arcTo(width, 0, width, height, borderRadius);
    ctx.arcTo(width, height, 0, height, borderRadius);
    ctx.arcTo(0, height, 0, 0, borderRadius);
    ctx.arcTo(0, 0, width, 0, borderRadius);
};


/***/ }),

/***/ "./canvas.ts":
/*!*******************!*\
  !*** ./canvas.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.createCanvas = exports.drawOptions = void 0;
var drawWorld_1 = __webpack_require__(/*! @snk/draw/drawWorld */ "../draw/drawWorld.ts");
exports.drawOptions = {
    sizeBorderRadius: 2,
    sizeCell: 16,
    sizeDot: 12,
    colorBorder: "#1b1f230a",
    colorDots: {
        1: "#9be9a8",
        2: "#40c463",
        3: "#30a14e",
        4: "#216e39",
        5: "orange",
    },
    colorEmpty: "#ebedf0",
    colorSnake: "purple",
};
exports.createCanvas = function (_a) {
    var width = _a.width, height = _a.height;
    var canvas = document.createElement("canvas");
    var upscale = 2;
    var w = exports.drawOptions.sizeCell * (width + 4);
    var h = exports.drawOptions.sizeCell * (height + 4) + 200;
    canvas.width = w * upscale;
    canvas.height = h * upscale;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    ctx.scale(upscale, upscale);
    var draw = function (grid, snake, stack) {
        ctx.clearRect(0, 0, 9999, 9999);
        drawWorld_1.drawWorld(ctx, grid, snake, stack, exports.drawOptions);
    };
    return { draw: draw, canvas: canvas };
};


/***/ }),

/***/ "./demo.getAvailableRoutes.ts":
/*!************************************!*\
  !*** ./demo.getAvailableRoutes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var grid_1 = __webpack_require__(/*! @snk/compute/grid */ "../compute/grid.ts");
var snake_1 = __webpack_require__(/*! @snk/compute/snake */ "../compute/snake.ts");
var canvas_1 = __webpack_require__(/*! ./canvas */ "./canvas.ts");
var step_1 = __webpack_require__(/*! @snk/compute/step */ "../compute/step.ts");
var samples_1 = __webpack_require__(/*! ./samples */ "./samples.ts");
var getAvailableRoutes_1 = __webpack_require__(/*! @snk/compute/getAvailableRoutes */ "../compute/getAvailableRoutes.ts");
//
// init
var label = new URLSearchParams(window.location.search).get("sample");
var _a = samples_1.samples.find(function (s) { return s.label === label; }) || samples_1.samples[0], grid0 = _a.grid, snake0 = _a.snake, gameOptions = _a.gameOptions;
//
// compute
var routes = getAvailableRoutes_1.getAvailableRoutes(grid0, snake0, gameOptions, 20);
//
// draw
var _b = canvas_1.createCanvas(grid0), canvas = _b.canvas, draw = _b.draw;
var update = function (n, k) {
    var snake = snake_1.copySnake(snake0);
    var grid = grid_1.copyGrid(grid0);
    var route = routes[n];
    var trace = [__assign({}, snake[0])];
    for (var i = 0; i < k; i++) {
        step_1.stepSnake(snake, route.directions[i], gameOptions);
        trace.push(__assign({}, snake[0]));
    }
    draw(grid, snake, []);
    var cell = route.snakeN[0];
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < routes.length; i++) {
        ctx.fillStyle = "orange";
        ctx.fillRect(16 * (routes[i].snakeN[0].x + 1) + 6, 16 * (routes[i].snakeN[0].y + 2) + 6, 4, 4);
    }
    ctx.fillStyle = "orange";
    ctx.fillRect(16 * (cell.x + 1) + 4, 16 * (cell.y + 2) + 4, 8, 8);
    for (var i = 0; i < trace.length; i++) {
        ctx.fillStyle = "purple";
        ctx.fillRect(16 * (trace[i].x + 1) + 6, 16 * (trace[i].y + 2) + 6, 4, 4);
    }
};
//
// controls
// const input0: any = document.createElement("input");
// input0.type = "range";
// input0.style.width = "100%";
// input0.min = 0;
// input0.max = snakeSteps.length - 1;
// input0.step = 1;
// input0.value = 0;
// input0.addEventListener("input", () => {
//   const grid = copyGrid(grid0);
//   draw(grid, snakeSteps[+input0.value], []);
// });
// document.body.appendChild(input0);
var inputA = document.createElement("input");
inputA.type = "range";
inputA.style.width = "100%";
inputA.min = 0;
inputA.max = routes.length - 1;
inputA.step = 1;
inputA.value = 0;
inputA.addEventListener("input", function () {
    inputB.value = inputB.max = routes[+inputA.value].directions.length;
    update(+inputA.value, +inputB.value);
});
document.body.appendChild(inputA);
var inputB = document.createElement("input");
inputB.type = "range";
inputB.style.width = "100%";
inputB.min = 0;
inputB.step = 1;
inputB.value = 0;
inputB.addEventListener("input", function () {
    update(+inputA.value, +inputB.value);
});
document.body.appendChild(inputB);
if (routes[+inputA.value]) {
    inputB.value = inputB.max = routes[+inputA.value].directions.length;
    update(+inputA.value, +inputB.value);
}


/***/ }),

/***/ "./samples.ts":
/*!********************!*\
  !*** ./samples.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.samples = void 0;
// @ts-ignore
var ParkMiller = __webpack_require__(/*! park-miller */ "../../node_modules/park-miller/index.js");
var generateGrid_1 = __webpack_require__(/*! @snk/compute/generateGrid */ "../compute/generateGrid.ts");
var grid_1 = __webpack_require__(/*! @snk/compute/grid */ "../compute/grid.ts");
exports.samples = [];
{
    var gameOptions = {
        colors: [1, 2, 3],
        maxSnakeLength: 1,
    };
    var snake = [{ x: 0, y: -1 }];
    var grid = grid_1.createEmptyGrid(6, 6);
    exports.samples.push({
        label: "empty",
        grid: grid,
        snake: snake,
        gameOptions: gameOptions,
    });
}
{
    var gameOptions = {
        colors: [1, 2, 3],
        maxSnakeLength: 1,
    };
    var snake = [{ x: 0, y: -1 }];
    var grid = grid_1.createEmptyGrid(6, 6);
    grid_1.setColor(grid, 2, 2, 2);
    exports.samples.push({
        label: "small",
        grid: grid,
        snake: snake,
        gameOptions: gameOptions,
    });
}
{
    var gameOptions = {
        colors: [1, 2, 3],
        maxSnakeLength: 5,
    };
    var random_1 = new ParkMiller(10);
    var rand = function (a, b) { return random_1.integerInRange(a, b - 1); };
    var grid = generateGrid_1.generateRandomGrid(52, 7, __assign(__assign({}, gameOptions), { emptyP: 2 }), rand);
    var snake = [
        { x: 4, y: -1 },
        { x: 3, y: -1 },
        { x: 2, y: -1 },
        { x: 1, y: -1 },
        { x: 0, y: -1 },
    ];
    exports.samples.push({
        label: "realistic",
        grid: grid,
        snake: snake,
        gameOptions: gameOptions,
    });
}
{
    var gameOptions = {
        colors: [1, 2, 3],
        maxSnakeLength: 5,
    };
    var random_2 = new ParkMiller(10);
    var rand = function (a, b) { return random_2.integerInRange(a, b - 1); };
    var grid = generateGrid_1.generateRandomGrid(20, 7, __assign(__assign({}, gameOptions), { emptyP: 2 }), rand);
    var snake = [
        { x: 4, y: -1 },
        { x: 3, y: -1 },
        { x: 2, y: -1 },
        { x: 1, y: -1 },
        { x: 0, y: -1 },
    ];
    exports.samples.push({
        label: "realistic-small",
        grid: grid,
        snake: snake,
        gameOptions: gameOptions,
    });
}


/***/ })

/******/ });