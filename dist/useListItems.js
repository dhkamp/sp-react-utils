/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@pnp/common/collections.js":
/*!*************************************************!*\
  !*** ./node_modules/@pnp/common/collections.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectToMap": () => /* binding */ objectToMap,
/* harmony export */   "mergeMaps": () => /* binding */ mergeMaps
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/@pnp/common/util.js");

/**
 * Used to calculate the object properties, with polyfill if needed
 */
const objectEntries = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.isFunc)(Object.entries) ? Object.entries : (o) => Object.keys(o).map((k) => [k, o[k]]);
/**
 * Converts the supplied object to a map
 *
 * @param o The object to map
 */
function objectToMap(o) {
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(o)) {
        return new Map(objectEntries(o));
    }
    return new Map();
}
/**
 * Merges to Map instances together, overwriting values in target with matching keys, last in wins
 *
 * @param target map into which the other maps are merged
 * @param maps One or more maps to merge into the target
 */
function mergeMaps(target, ...maps) {
    for (let i = 0; i < maps.length; i++) {
        maps[i].forEach((v, k) => {
            // let's not run the spfx context through Object.assign :)
            if ((typeof k === "string" && k !== "spfxContext") && Object.prototype.toString.call(v) === "[object Object]") {
                // we only handle one level of deep object merging
                target.set(k, Object.assign({}, target.get(k) || {}, v));
            }
            else {
                target.set(k, v);
            }
        });
    }
    return target;
}
//# sourceMappingURL=collections.js.map

/***/ }),

/***/ "./node_modules/@pnp/common/index.js":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/common/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeMaps": () => /* reexport safe */ _collections_js__WEBPACK_IMPORTED_MODULE_0__.mergeMaps,
/* harmony export */   "objectToMap": () => /* reexport safe */ _collections_js__WEBPACK_IMPORTED_MODULE_0__.objectToMap,
/* harmony export */   "DefaultRuntime": () => /* reexport safe */ _libconfig_js__WEBPACK_IMPORTED_MODULE_1__.DefaultRuntime,
/* harmony export */   "Runtime": () => /* reexport safe */ _libconfig_js__WEBPACK_IMPORTED_MODULE_1__.Runtime,
/* harmony export */   "onRuntimeCreate": () => /* reexport safe */ _libconfig_js__WEBPACK_IMPORTED_MODULE_1__.onRuntimeCreate,
/* harmony export */   "setup": () => /* reexport safe */ _libconfig_js__WEBPACK_IMPORTED_MODULE_1__.setup,
/* harmony export */   "BearerTokenFetchClient": () => /* reexport safe */ _net_js__WEBPACK_IMPORTED_MODULE_2__.BearerTokenFetchClient,
/* harmony export */   "FetchClient": () => /* reexport safe */ _net_js__WEBPACK_IMPORTED_MODULE_2__.FetchClient,
/* harmony export */   "LambdaFetchClient": () => /* reexport safe */ _net_js__WEBPACK_IMPORTED_MODULE_2__.LambdaFetchClient,
/* harmony export */   "SPFxAdalClient": () => /* reexport safe */ _net_js__WEBPACK_IMPORTED_MODULE_2__.SPFxAdalClient,
/* harmony export */   "getADALResource": () => /* reexport safe */ _net_js__WEBPACK_IMPORTED_MODULE_2__.getADALResource,
/* harmony export */   "mergeHeaders": () => /* reexport safe */ _net_js__WEBPACK_IMPORTED_MODULE_2__.mergeHeaders,
/* harmony export */   "mergeOptions": () => /* reexport safe */ _net_js__WEBPACK_IMPORTED_MODULE_2__.mergeOptions,
/* harmony export */   "PnPClientStorage": () => /* reexport safe */ _storage_js__WEBPACK_IMPORTED_MODULE_4__.PnPClientStorage,
/* harmony export */   "PnPClientStorageWrapper": () => /* reexport safe */ _storage_js__WEBPACK_IMPORTED_MODULE_4__.PnPClientStorageWrapper,
/* harmony export */   "assign": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.assign,
/* harmony export */   "combine": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.combine,
/* harmony export */   "dateAdd": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.dateAdd,
/* harmony export */   "getCtxCallback": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.getCtxCallback,
/* harmony export */   "getGUID": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.getGUID,
/* harmony export */   "getHashCode": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.getHashCode,
/* harmony export */   "getRandomString": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.getRandomString,
/* harmony export */   "hOP": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.hOP,
/* harmony export */   "isArray": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.isArray,
/* harmony export */   "isFunc": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.isFunc,
/* harmony export */   "isUrlAbsolute": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.isUrlAbsolute,
/* harmony export */   "jsS": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.jsS,
/* harmony export */   "objectDefinedNotNull": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.objectDefinedNotNull,
/* harmony export */   "sanitizeGuid": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.sanitizeGuid,
/* harmony export */   "stringIsNullOrEmpty": () => /* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_5__.stringIsNullOrEmpty,
/* harmony export */   "safeGlobal": () => /* reexport safe */ _safe_global_js__WEBPACK_IMPORTED_MODULE_6__.safeGlobal
/* harmony export */ });
/* harmony import */ var _collections_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collections.js */ "./node_modules/@pnp/common/collections.js");
/* harmony import */ var _libconfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libconfig.js */ "./node_modules/@pnp/common/libconfig.js");
/* harmony import */ var _net_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./net.js */ "./node_modules/@pnp/common/net.js");
/* harmony import */ var _spfxcontextinterface_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spfxcontextinterface.js */ "./node_modules/@pnp/common/spfxcontextinterface.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ "./node_modules/@pnp/common/storage.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util.js */ "./node_modules/@pnp/common/util.js");
/* harmony import */ var _safe_global_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./safe-global.js */ "./node_modules/@pnp/common/safe-global.js");







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@pnp/common/libconfig.js":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/common/libconfig.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setup": () => /* binding */ setup,
/* harmony export */   "onRuntimeCreate": () => /* binding */ onRuntimeCreate,
/* harmony export */   "Runtime": () => /* binding */ Runtime,
/* harmony export */   "DefaultRuntime": () => /* binding */ DefaultRuntime
/* harmony export */ });
/* harmony import */ var _collections_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collections.js */ "./node_modules/@pnp/common/collections.js");

function setup(config, runtime = DefaultRuntime) {
    runtime.assign(config);
}
// lable mapping for known config values
const s = [
    "defaultCachingStore",
    "defaultCachingTimeoutSeconds",
    "globalCacheDisable",
    "enableCacheExpiration",
    "cacheExpirationIntervalMilliseconds",
    "spfxContext",
    "ie11",
];
const runtimeCreateHooks = [];
function onRuntimeCreate(hook) {
    if (runtimeCreateHooks.indexOf(hook) < 0) {
        // apply hook logic to default runtime
        hook(DefaultRuntime);
        runtimeCreateHooks.push(hook);
    }
}
class Runtime {
    constructor(_v = new Map()) {
        this._v = _v;
        const defaulter = (key, def) => {
            if (!this._v.has(key)) {
                this._v.set(key, def);
            }
        };
        // setup defaults
        defaulter(s[0], "session");
        defaulter(s[1], 60);
        defaulter(s[2], false);
        defaulter(s[3], false);
        defaulter(s[4], 750);
        defaulter(s[5], null);
        defaulter(s[6], false);
        runtimeCreateHooks.forEach(hook => hook(this));
    }
    /**
     *
     * @param config The set of properties to add to this runtime instance
     */
    assign(config) {
        this._v = (0,_collections_js__WEBPACK_IMPORTED_MODULE_0__.mergeMaps)(this._v, (0,_collections_js__WEBPACK_IMPORTED_MODULE_0__.objectToMap)(config));
    }
    /**
     * Gets a runtime value using T to define the available keys, and R to define the type returned by that key
     *
     * @param key
     */
    get(key) {
        return this._v.get(key);
    }
    /**
     * Exports the internal Map representing this runtime
     */
    export() {
        const expt = new Map();
        for (const [key, value] of this._v) {
            if (key !== "__isDefault__") {
                expt.set(key, value);
            }
        }
        return expt;
    }
}
// default runtime used globally
const _runtime = new Runtime(new Map([["__isDefault__", true]]));
const DefaultRuntime = _runtime;
//# sourceMappingURL=libconfig.js.map

/***/ }),

/***/ "./node_modules/@pnp/common/net.js":
/*!*****************************************!*\
  !*** ./node_modules/@pnp/common/net.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeHeaders": () => /* binding */ mergeHeaders,
/* harmony export */   "mergeOptions": () => /* binding */ mergeOptions,
/* harmony export */   "getADALResource": () => /* binding */ getADALResource,
/* harmony export */   "FetchClient": () => /* binding */ FetchClient,
/* harmony export */   "BearerTokenFetchClient": () => /* binding */ BearerTokenFetchClient,
/* harmony export */   "LambdaFetchClient": () => /* binding */ LambdaFetchClient,
/* harmony export */   "SPFxAdalClient": () => /* binding */ SPFxAdalClient
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/common/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/@pnp/common/util.js");
/* harmony import */ var _safe_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safe-global.js */ "./node_modules/@pnp/common/safe-global.js");



function mergeHeaders(target, source) {
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(source)) {
        const temp = new Request("", { headers: source });
        temp.headers.forEach((value, name) => {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if ((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(source)) {
        const headers = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.assign)(target.headers || {}, source.headers);
        target = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.assign)(target, source);
        target.headers = headers;
    }
}
/**
 * Parses out the root of the request url to use as the resource when getting the token
 *
  * @param url The url to parse
 */
function getADALResource(url) {
    const u = new URL(url);
    return `${u.protocol}//${u.hostname}`;
}
/**
 * Makes requests using the global/window fetch API
 */
class FetchClient {
    fetch(url, options) {
        return _safe_global_js__WEBPACK_IMPORTED_MODULE_1__.safeGlobal.fetch(url, options);
    }
}
/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
class BearerTokenFetchClient extends FetchClient {
    constructor(token) {
        super();
        this.token = token;
    }
    fetch(url, options = {}) {
        const headers = new Headers();
        mergeHeaders(headers, options.headers);
        headers.set("Authorization", `Bearer ${this.token}`);
        options.headers = headers;
        return super.fetch(url, options);
    }
}
class LambdaFetchClient extends BearerTokenFetchClient {
    constructor(tokenFactory) {
        super(null);
        this.tokenFactory = tokenFactory;
    }
    /**
     * Executes a fetch request using the supplied url and options
     *
     * @param url Absolute url of the request
     * @param options Any options
     */
    fetch(url, options) {
        const _super = Object.create(null, {
            fetch: { get: () => super.fetch }
        });
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.token = yield this.tokenFactory({ url, options });
            return _super.fetch.call(this, url, options);
        });
    }
}
/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
class SPFxAdalClient extends LambdaFetchClient {
    /**
     *
     * @param context provide the appropriate SPFx Context object
     */
    constructor(context) {
        super((params) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const provider = yield context.aadTokenProviderFactory.getTokenProvider();
            return provider.getToken(getADALResource(params.url));
        }));
        this.context = context;
    }
    /**
     * Gets an AAD token for the provided resource using the SPFx AADTokenProvider
     *
     * @param resource Resource for which a token is to be requested (ex: https://graph.microsoft.com)
     */
    getToken(resource) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const provider = yield this.context.aadTokenProviderFactory.getTokenProvider();
            return provider.getToken(resource);
        });
    }
}
//# sourceMappingURL=net.js.map

/***/ }),

/***/ "./node_modules/@pnp/common/node_modules/tslib/tslib.es6.js":
/*!******************************************************************!*\
  !*** ./node_modules/@pnp/common/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => /* binding */ __extends,
/* harmony export */   "__assign": () => /* binding */ __assign,
/* harmony export */   "__rest": () => /* binding */ __rest,
/* harmony export */   "__decorate": () => /* binding */ __decorate,
/* harmony export */   "__param": () => /* binding */ __param,
/* harmony export */   "__metadata": () => /* binding */ __metadata,
/* harmony export */   "__awaiter": () => /* binding */ __awaiter,
/* harmony export */   "__generator": () => /* binding */ __generator,
/* harmony export */   "__createBinding": () => /* binding */ __createBinding,
/* harmony export */   "__exportStar": () => /* binding */ __exportStar,
/* harmony export */   "__values": () => /* binding */ __values,
/* harmony export */   "__read": () => /* binding */ __read,
/* harmony export */   "__spread": () => /* binding */ __spread,
/* harmony export */   "__spreadArrays": () => /* binding */ __spreadArrays,
/* harmony export */   "__spreadArray": () => /* binding */ __spreadArray,
/* harmony export */   "__await": () => /* binding */ __await,
/* harmony export */   "__asyncGenerator": () => /* binding */ __asyncGenerator,
/* harmony export */   "__asyncDelegator": () => /* binding */ __asyncDelegator,
/* harmony export */   "__asyncValues": () => /* binding */ __asyncValues,
/* harmony export */   "__makeTemplateObject": () => /* binding */ __makeTemplateObject,
/* harmony export */   "__importStar": () => /* binding */ __importStar,
/* harmony export */   "__importDefault": () => /* binding */ __importDefault,
/* harmony export */   "__classPrivateFieldGet": () => /* binding */ __classPrivateFieldGet,
/* harmony export */   "__classPrivateFieldSet": () => /* binding */ __classPrivateFieldSet
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@pnp/common/safe-global.js":
/*!*************************************************!*\
  !*** ./node_modules/@pnp/common/safe-global.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "safeGlobal": () => /* binding */ safeGlobal
/* harmony export */ });
// export either window or global
const safeGlobal = typeof global === "undefined" ? window : global;
//# sourceMappingURL=safe-global.js.map

/***/ }),

/***/ "./node_modules/@pnp/common/spfxcontextinterface.js":
/*!**********************************************************!*\
  !*** ./node_modules/@pnp/common/spfxcontextinterface.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=spfxcontextinterface.js.map

/***/ }),

/***/ "./node_modules/@pnp/common/storage.js":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/common/storage.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PnPClientStorageWrapper": () => /* binding */ PnPClientStorageWrapper,
/* harmony export */   "PnPClientStorage": () => /* binding */ PnPClientStorage
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/common/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/@pnp/common/util.js");
/* harmony import */ var _libconfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libconfig.js */ "./node_modules/@pnp/common/libconfig.js");



/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
class PnPClientStorageWrapper {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    constructor(store, defaultTimeoutMinutes = -1) {
        this.store = store;
        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
        this.enabled = this.test();
        // if the cache timeout is enabled call the handler
        // this will clear any expired items and set the timeout function
        if (_libconfig_js__WEBPACK_IMPORTED_MODULE_1__.DefaultRuntime.get("enableCacheExpiration")) {
            this.cacheExpirationHandler();
        }
    }
    static bind(store) {
        return new PnPClientStorageWrapper(typeof (store) === "undefined" ? new MemoryStorage() : store);
    }
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    get(key) {
        if (!this.enabled) {
            return null;
        }
        const o = this.store.getItem(key);
        if (!(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(o)) {
            return null;
        }
        const persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    }
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    put(key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    }
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    delete(key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    }
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    getOrPut(key, getter, expire) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return getter();
            }
            let o = this.get(key);
            if (o === null) {
                o = yield getter();
                this.put(key, o, expire);
            }
            return o;
        });
    }
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    deleteExpired() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.enabled) {
                return;
            }
            for (let i = 0; i < this.store.length; i++) {
                const key = this.store.key(i);
                if (key !== null) {
                    // test the stored item to see if we stored it
                    if (/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) {
                        // get those items as get will delete from cache if they are expired
                        yield this.get(key);
                    }
                }
            }
        });
    }
    /**
     * Used to determine if the wrapped storage is available currently
     */
    test() {
        const str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Creates the persistable to store
     */
    createPersistable(o, expire) {
        if (expire === undefined) {
            // ensure we are by default inline with the global library setting
            let defaultTimeout = _libconfig_js__WEBPACK_IMPORTED_MODULE_1__.DefaultRuntime.get("defaultCachingTimeoutSeconds");
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "second", defaultTimeout);
        }
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.jsS)({ pnp: 1, expiration: expire, value: o });
    }
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    cacheExpirationHandler() {
        if (!this.enabled) {
            return;
        }
        this.deleteExpired().then(() => {
            // call ourself in the future
            setTimeout((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getCtxCallback)(this, this.cacheExpirationHandler), _libconfig_js__WEBPACK_IMPORTED_MODULE_1__.DefaultRuntime.get("cacheExpirationIntervalMilliseconds"));
        }).catch(console.error);
    }
}
/**
 * A thin implementation of in-memory storage for use in nodejs
 */
class MemoryStorage {
    constructor(_store = new Map()) {
        this._store = _store;
    }
    get length() {
        return this._store.size;
    }
    clear() {
        this._store.clear();
    }
    getItem(key) {
        return this._store.get(key);
    }
    key(index) {
        return Array.from(this._store)[index][0];
    }
    removeItem(key) {
        this._store.delete(key);
    }
    setItem(key, data) {
        this._store.set(key, data);
    }
}
/**
 * A class that will establish wrappers for both local and session storage
 */
class PnPClientStorage {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    constructor(_local = null, _session = null) {
        this._local = _local;
        this._session = _session;
    }
    /**
     * Provides access to the local storage of the browser
     */
    get local() {
        if (this._local === null) {
            this._local = new PnPClientStorageWrapper(typeof (localStorage) === "undefined" ? new MemoryStorage() : localStorage);
        }
        return this._local;
    }
    /**
     * Provides access to the session storage of the browser
     */
    get session() {
        if (this._session === null) {
            this._session = new PnPClientStorageWrapper(typeof (sessionStorage) === "undefined" ? new MemoryStorage() : sessionStorage);
        }
        return this._session;
    }
}
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "./node_modules/@pnp/common/util.js":
/*!******************************************!*\
  !*** ./node_modules/@pnp/common/util.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCtxCallback": () => /* binding */ getCtxCallback,
/* harmony export */   "dateAdd": () => /* binding */ dateAdd,
/* harmony export */   "combine": () => /* binding */ combine,
/* harmony export */   "getRandomString": () => /* binding */ getRandomString,
/* harmony export */   "getGUID": () => /* binding */ getGUID,
/* harmony export */   "isFunc": () => /* binding */ isFunc,
/* harmony export */   "objectDefinedNotNull": () => /* binding */ objectDefinedNotNull,
/* harmony export */   "isArray": () => /* binding */ isArray,
/* harmony export */   "assign": () => /* binding */ assign,
/* harmony export */   "isUrlAbsolute": () => /* binding */ isUrlAbsolute,
/* harmony export */   "stringIsNullOrEmpty": () => /* binding */ stringIsNullOrEmpty,
/* harmony export */   "sanitizeGuid": () => /* binding */ sanitizeGuid,
/* harmony export */   "jsS": () => /* binding */ jsS,
/* harmony export */   "hOP": () => /* binding */ hOP,
/* harmony export */   "getHashCode": () => /* binding */ getHashCode
/* harmony export */ });
/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function getCtxCallback(context, method, ...params) {
    return function () {
        method.apply(context, params);
    };
}
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    let ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine(...paths) {
    return paths
        .filter(path => !stringIsNullOrEmpty(path))
        .map(path => path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""))
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    const text = new Array(chars);
    for (let i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* eslint-disable no-bitwise */
function getGUID() {
    let d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* eslint-enable no-bitwise */
/**
 * Determines if a given value is a function
 *
 * @param cf The thing to test for functionness
 */
function isFunc(f) {
    return typeof f === "function";
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray ? Array.isArray(array) : array && typeof array.length === "number" && array.constructor === Array;
}
/**
 * Provides functionality to extend the given object by doing a shallow copy
 *
 * @param target The object to which properties will be copied
 * @param source The source object from which properties will be copied
 * @param noOverwrite If true existing properties on the target are not overwritten from the source
 * @param filter If provided allows additional filtering on what properties are copied (propName: string) => boolean
 *
 */
function assign(target, source, noOverwrite = false, filter = () => true) {
    if (!objectDefinedNotNull(source)) {
        return target;
    }
    // ensure we don't overwrite things we don't want overwritten
    const check = noOverwrite ? (o, i) => !(i in o) : () => true;
    // final filter we will use
    const f = (v) => check(target, v) && filter(v);
    return Object.getOwnPropertyNames(source)
        .filter(f)
        .reduce((t, v) => {
        t[v] = source[v];
        return t;
    }, target);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return s === undefined || s === null || s.length < 1;
}
/**
 * Ensures guid values are represented consistently as "ea123463-137d-4ae3-89b8-cf3fc578ca05"
 *
 * @param guid The candidate guid
 */
function sanitizeGuid(guid) {
    if (stringIsNullOrEmpty(guid)) {
        return guid;
    }
    const matches = /([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/i.exec(guid);
    return matches === null ? guid : matches[1];
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
/* eslint-disable no-bitwise */
function getHashCode(s) {
    let hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (let i = 0; i < s.length; i++) {
        const chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/* eslint-enable no-bitwise */
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@pnp/logging/index.js":
/*!********************************************!*\
  !*** ./node_modules/@pnp/logging/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => /* reexport safe */ _logger_js__WEBPACK_IMPORTED_MODULE_0__.LogLevel,
/* harmony export */   "Logger": () => /* reexport safe */ _logger_js__WEBPACK_IMPORTED_MODULE_0__.Logger,
/* harmony export */   "ConsoleListener": () => /* reexport safe */ _listeners_js__WEBPACK_IMPORTED_MODULE_1__.ConsoleListener,
/* harmony export */   "FunctionListener": () => /* reexport safe */ _listeners_js__WEBPACK_IMPORTED_MODULE_1__.FunctionListener
/* harmony export */ });
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ "./node_modules/@pnp/logging/logger.js");
/* harmony import */ var _listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners.js */ "./node_modules/@pnp/logging/listeners.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@pnp/logging/listeners.js":
/*!************************************************!*\
  !*** ./node_modules/@pnp/logging/listeners.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleListener": () => /* binding */ ConsoleListener,
/* harmony export */   "FunctionListener": () => /* binding */ FunctionListener
/* harmony export */ });
/**
 * Implementation of LogListener which logs to the console
 *
 */
class ConsoleListener {
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    log(entry) {
        const msg = this.format(entry);
        switch (entry.level) {
            case 0 /* Verbose */:
            case 1 /* Info */:
                console.log(msg);
                break;
            case 2 /* Warning */:
                console.warn(msg);
                break;
            case 3 /* Error */:
                console.error(msg);
                break;
        }
    }
    /**
     * Formats the message
     *
     * @param entry The information to format into a string
     */
    format(entry) {
        const msg = [];
        msg.push("Message: " + entry.message);
        if (entry.data !== undefined) {
            try {
                msg.push(" Data: " + JSON.stringify(entry.data));
            }
            catch (e) {
                msg.push(` Data: Error in stringify of supplied data ${e}`);
            }
        }
        return msg.join("");
    }
}
/**
 * Implementation of LogListener which logs to the supplied function
 *
 */
class FunctionListener {
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    constructor(method) {
        this.method = method;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    log(entry) {
        this.method(entry);
    }
}
//# sourceMappingURL=listeners.js.map

/***/ }),

/***/ "./node_modules/@pnp/logging/logger.js":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/logging/logger.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logger": () => /* binding */ Logger,
/* harmony export */   "LogLevel": () => /* binding */ LogLevel
/* harmony export */ });
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
class Logger {
    /**
   * Gets or sets the active log level to apply for log filtering
   */
    static get activeLogLevel() {
        return Logger.instance.activeLogLevel;
    }
    static set activeLogLevel(value) {
        Logger.instance.activeLogLevel = value;
    }
    static get instance() {
        if (Logger._instance === undefined || Logger._instance === null) {
            Logger._instance = new LoggerImpl();
        }
        return Logger._instance;
    }
    /**
   * Adds ILogListener instances to the set of subscribed listeners
   *
   * @param listeners One or more listeners to subscribe to this log
   */
    static subscribe(...listeners) {
        listeners.forEach(listener => Logger.instance.subscribe(listener));
    }
    /**
   * Clears the subscribers collection, returning the collection before modification
   */
    static clearSubscribers() {
        return Logger.instance.clearSubscribers();
    }
    /**
   * Gets the current subscriber count
   */
    static get count() {
        return Logger.instance.count;
    }
    /**
   * Writes the supplied string to the subscribed listeners
   *
   * @param message The message to write
   * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
   */
    static write(message, level = 1 /* Info */) {
        Logger.instance.log({ level: level, message: message });
    }
    /**
   * Writes the supplied string to the subscribed listeners
   *
   * @param json The json object to stringify and write
   * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
   */
    static writeJSON(json, level = 1 /* Info */) {
        this.write(JSON.stringify(json), level);
    }
    /**
   * Logs the supplied entry to the subscribed listeners
   *
   * @param entry The message to log
   */
    static log(entry) {
        Logger.instance.log(entry);
    }
    /**
   * Logs an error object to the subscribed listeners
   *
   * @param err The error object
   */
    static error(err) {
        Logger.instance.log({ data: err, level: 3 /* Error */, message: err.message });
    }
}
class LoggerImpl {
    constructor(activeLogLevel = 2 /* Warning */, subscribers = []) {
        this.activeLogLevel = activeLogLevel;
        this.subscribers = subscribers;
    }
    subscribe(listener) {
        this.subscribers.push(listener);
    }
    clearSubscribers() {
        const s = this.subscribers.slice(0);
        this.subscribers.length = 0;
        return s;
    }
    get count() {
        return this.subscribers.length;
    }
    write(message, level = 1 /* Info */) {
        this.log({ level: level, message: message });
    }
    log(entry) {
        if (entry !== undefined && this.activeLogLevel <= entry.level) {
            this.subscribers.map(subscriber => subscriber.log(entry));
        }
    }
}
/**
 * A set of logging levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Off"] = 99] = "Off";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/add-prop.js":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/odata/add-prop.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProp": () => /* binding */ addProp
/* harmony export */ });
/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path);
        },
    });
}
//# sourceMappingURL=add-prop.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/batch.js":
/*!******************************************!*\
  !*** ./node_modules/@pnp/odata/batch.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Batch": () => /* binding */ Batch
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");

class Batch {
    constructor(_batchId = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.getGUID)()) {
        this._batchId = _batchId;
        this._reqs = [];
        this._deps = [];
        this._rDeps = [];
        this._index = -1;
    }
    get batchId() {
        return this._batchId;
    }
    /**
     * The requests contained in this batch
     */
    get requests() {
        // we sort these each time this is accessed
        return this._reqs.sort((info1, info2) => info1.index - info2.index);
    }
    /**
     * Not meant for use directly
     *
     * @param batchee The IQueryable for this batch to track in order
     */
    track(batchee) {
        batchee.data.batch = this;
        // we need to track the order requests are added to the batch to ensure we always
        // operate on them in order
        if (typeof batchee.data.batchIndex === "undefined" || batchee.data.batchIndex < 0) {
            batchee.data.batchIndex = ++this._index;
        }
    }
    /**
     * Adds the given request context to the batch for execution
     *
     * @param context Details of the request to batch
     */
    add(context) {
        const info = {
            id: context.requestId,
            index: context.batchIndex,
            method: context.method.toUpperCase(),
            options: context.options,
            parser: context.parser,
            reject: null,
            resolve: null,
            url: context.url,
        };
        // we create a new promise that will be resolved within the batch
        const p = new Promise((resolve, reject) => {
            info.resolve = resolve;
            info.reject = reject;
        });
        this._reqs.push(info);
        return p;
    }
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    addDependency() {
        let resolver = () => void (0);
        this._deps.push(new Promise((resolve) => {
            resolver = resolve;
        }));
        return resolver;
    }
    /**
     * The batch's execute method will not resolve util any promises added here resolve
     *
     * @param p The dependent promise
     */
    addResolveBatchDependency(p) {
        this._rDeps.push(p);
    }
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    execute() {
        // we need to check the dependencies twice due to how different engines handle things.
        // We can get a second set of promises added during the first set resolving
        return Promise.all(this._deps)
            .then(() => Promise.all(this._deps))
            .then(() => this.executeImpl())
            .then(() => Promise.all(this._rDeps))
            .then(() => void (0));
    }
}
//# sourceMappingURL=batch.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/caching.js":
/*!********************************************!*\
  !*** ./node_modules/@pnp/odata/caching.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CachingOptions": () => /* binding */ CachingOptions,
/* harmony export */   "CachingParserWrapper": () => /* binding */ CachingParserWrapper
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");

const storage = new _pnp_common__WEBPACK_IMPORTED_MODULE_0__.PnPClientStorage();
class CachingOptions {
    constructor(key, storeName, expiration) {
        this.key = key;
        this.storeName = storeName;
        this.expiration = expiration;
    }
    get store() {
        if (this.storeName === "local") {
            return storage.local;
        }
        else {
            return storage.session;
        }
    }
}
class CachingParserWrapper {
    constructor(parser, cacheOptions) {
        this.parser = parser;
        this.cacheOptions = cacheOptions;
    }
    parse(response) {
        return this.parser.parse(response).then(r => this.cacheData(r));
    }
    cacheData(data) {
        if (this.cacheOptions.store !== null) {
            this.cacheOptions.store.put(this.cacheOptions.key, data, this.cacheOptions.expiration);
        }
        return data;
    }
}
//# sourceMappingURL=caching.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/index.js":
/*!******************************************!*\
  !*** ./node_modules/@pnp/odata/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Batch": () => /* reexport safe */ _batch_js__WEBPACK_IMPORTED_MODULE_0__.Batch,
/* harmony export */   "CachingOptions": () => /* reexport safe */ _caching_js__WEBPACK_IMPORTED_MODULE_1__.CachingOptions,
/* harmony export */   "CachingParserWrapper": () => /* reexport safe */ _caching_js__WEBPACK_IMPORTED_MODULE_1__.CachingParserWrapper,
/* harmony export */   "addProp": () => /* reexport safe */ _add_prop_js__WEBPACK_IMPORTED_MODULE_2__.addProp,
/* harmony export */   "invokableFactory": () => /* reexport safe */ _invokable_binder_js__WEBPACK_IMPORTED_MODULE_3__.invokableFactory,
/* harmony export */   "defaultPipelineBinder": () => /* reexport safe */ _pipeline_binder_js__WEBPACK_IMPORTED_MODULE_4__.defaultPipelineBinder,
/* harmony export */   "pipelineBinder": () => /* reexport safe */ _pipeline_binder_js__WEBPACK_IMPORTED_MODULE_4__.pipelineBinder,
/* harmony export */   "BlobParser": () => /* reexport safe */ _parsers_js__WEBPACK_IMPORTED_MODULE_5__.BlobParser,
/* harmony export */   "BufferParser": () => /* reexport safe */ _parsers_js__WEBPACK_IMPORTED_MODULE_5__.BufferParser,
/* harmony export */   "HttpRequestError": () => /* reexport safe */ _parsers_js__WEBPACK_IMPORTED_MODULE_5__.HttpRequestError,
/* harmony export */   "JSONParser": () => /* reexport safe */ _parsers_js__WEBPACK_IMPORTED_MODULE_5__.JSONParser,
/* harmony export */   "LambdaParser": () => /* reexport safe */ _parsers_js__WEBPACK_IMPORTED_MODULE_5__.LambdaParser,
/* harmony export */   "ODataParser": () => /* reexport safe */ _parsers_js__WEBPACK_IMPORTED_MODULE_5__.ODataParser,
/* harmony export */   "TextParser": () => /* reexport safe */ _parsers_js__WEBPACK_IMPORTED_MODULE_5__.TextParser,
/* harmony export */   "PipelineMethods": () => /* reexport safe */ _pipeline_js__WEBPACK_IMPORTED_MODULE_6__.PipelineMethods,
/* harmony export */   "getDefaultPipeline": () => /* reexport safe */ _pipeline_js__WEBPACK_IMPORTED_MODULE_6__.getDefaultPipeline,
/* harmony export */   "pipe": () => /* reexport safe */ _pipeline_js__WEBPACK_IMPORTED_MODULE_6__.pipe,
/* harmony export */   "requestPipelineMethod": () => /* reexport safe */ _pipeline_js__WEBPACK_IMPORTED_MODULE_6__.requestPipelineMethod,
/* harmony export */   "setResult": () => /* reexport safe */ _pipeline_js__WEBPACK_IMPORTED_MODULE_6__.setResult,
/* harmony export */   "Queryable": () => /* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_7__.Queryable,
/* harmony export */   "cloneQueryableData": () => /* reexport safe */ _queryable_js__WEBPACK_IMPORTED_MODULE_7__.cloneQueryableData,
/* harmony export */   "body": () => /* reexport safe */ _request_builders_js__WEBPACK_IMPORTED_MODULE_8__.body,
/* harmony export */   "headers": () => /* reexport safe */ _request_builders_js__WEBPACK_IMPORTED_MODULE_8__.headers,
/* harmony export */   "extendGlobal": () => /* reexport safe */ _invokable_extensions_js__WEBPACK_IMPORTED_MODULE_9__.extendGlobal,
/* harmony export */   "extendObj": () => /* reexport safe */ _invokable_extensions_js__WEBPACK_IMPORTED_MODULE_9__.extendObj,
/* harmony export */   "extendFactory": () => /* reexport safe */ _invokable_extensions_js__WEBPACK_IMPORTED_MODULE_9__.extendFactory,
/* harmony export */   "clearGlobalExtensions": () => /* reexport safe */ _invokable_extensions_js__WEBPACK_IMPORTED_MODULE_9__.clearGlobalExtensions,
/* harmony export */   "enableExtensions": () => /* reexport safe */ _invokable_extensions_js__WEBPACK_IMPORTED_MODULE_9__.enableExtensions,
/* harmony export */   "disableExtensions": () => /* reexport safe */ _invokable_extensions_js__WEBPACK_IMPORTED_MODULE_9__.disableExtensions
/* harmony export */ });
/* harmony import */ var _batch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch.js */ "./node_modules/@pnp/odata/batch.js");
/* harmony import */ var _caching_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caching.js */ "./node_modules/@pnp/odata/caching.js");
/* harmony import */ var _add_prop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-prop.js */ "./node_modules/@pnp/odata/add-prop.js");
/* harmony import */ var _invokable_binder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invokable-binder.js */ "./node_modules/@pnp/odata/invokable-binder.js");
/* harmony import */ var _pipeline_binder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipeline-binder.js */ "./node_modules/@pnp/odata/pipeline-binder.js");
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parsers.js */ "./node_modules/@pnp/odata/parsers.js");
/* harmony import */ var _pipeline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipeline.js */ "./node_modules/@pnp/odata/pipeline.js");
/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queryable.js */ "./node_modules/@pnp/odata/queryable.js");
/* harmony import */ var _request_builders_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./request-builders.js */ "./node_modules/@pnp/odata/request-builders.js");
/* harmony import */ var _invokable_extensions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invokable-extensions.js */ "./node_modules/@pnp/odata/invokable-extensions.js");










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/invokable-binder.js":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/odata/invokable-binder.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invokableFactory": () => /* binding */ invokableFactory
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _invokable_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invokable-extensions.js */ "./node_modules/@pnp/odata/invokable-extensions.js");


const invokableBinder = (invoker) => (constructor) => {
    return (...args) => {
        const factory = (as) => {
            const r = Object.assign(function (...ags) {
                return invoker.call(r, ...ags);
            }, new constructor(...as));
            Reflect.setPrototypeOf(r, constructor.prototype);
            return r;
        };
        // ie11 setting is always global
        if (_pnp_common__WEBPACK_IMPORTED_MODULE_0__.DefaultRuntime.get("ie11") || false) {
            return factory(args);
        }
        else {
            return new Proxy((0,_invokable_extensions_js__WEBPACK_IMPORTED_MODULE_1__.applyFactoryExtensions)(factory, args), {
                apply: (target, _thisArg, argArray) => {
                    return (0,_invokable_extensions_js__WEBPACK_IMPORTED_MODULE_1__.extensionOrDefault)("apply", (...a) => Reflect.apply(a[0], a[1], a[2]), target, _thisArg, argArray);
                },
                get: (target, p, receiver) => {
                    return (0,_invokable_extensions_js__WEBPACK_IMPORTED_MODULE_1__.extensionOrDefault)("get", (...a) => Reflect.get(a[0], a[1], a[2]), target, p, receiver);
                },
                has: (target, p) => {
                    return (0,_invokable_extensions_js__WEBPACK_IMPORTED_MODULE_1__.extensionOrDefault)("has", (...a) => Reflect.has(a[0], a[1]), target, p);
                },
                set: (target, p, value, receiver) => {
                    return (0,_invokable_extensions_js__WEBPACK_IMPORTED_MODULE_1__.extensionOrDefault)("set", (...a) => Reflect.set(a[0], a[1], a[2], a[3]), target, p, value, receiver);
                },
            });
        }
    };
};
const invokableFactory = invokableBinder(function (options) {
    return this.defaultAction(options);
});
//# sourceMappingURL=invokable-binder.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/invokable-extensions.js":
/*!*********************************************************!*\
  !*** ./node_modules/@pnp/odata/invokable-extensions.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extendGlobal": () => /* binding */ extendGlobal,
/* harmony export */   "extendObj": () => /* binding */ extendObj,
/* harmony export */   "extendFactory": () => /* binding */ extendFactory,
/* harmony export */   "clearGlobalExtensions": () => /* binding */ clearGlobalExtensions,
/* harmony export */   "disableExtensions": () => /* binding */ disableExtensions,
/* harmony export */   "enableExtensions": () => /* binding */ enableExtensions,
/* harmony export */   "applyFactoryExtensions": () => /* binding */ applyFactoryExtensions,
/* harmony export */   "extensionOrDefault": () => /* binding */ extensionOrDefault
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");

let _enableExtensions = false;
const globalExtensions = [];
const factoryExtensions = new Map();
const ObjExtensionsSym = Symbol.for("43f7a601");
/**
 * Creates global extensions across all invokable objects
 *
 * @param e The global extensions to apply
 */
const extendGlobal = (e) => {
    _enableExtensions = true;
    extendCol(globalExtensions, e);
};
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const extendObj = (target, extensions) => {
    _enableExtensions = true;
    if (!Reflect.has(target, ObjExtensionsSym)) {
        Reflect.set(target, ObjExtensionsSym, []);
    }
    extendCol(Reflect.get(target, ObjExtensionsSym), extensions);
    return target;
};
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
const extendFactory = (factory, extensions) => {
    _enableExtensions = true;
    // factoryExtensions
    const proto = Reflect.getPrototypeOf(factory);
    if (!Reflect.has(proto, ObjExtensionsSym)) {
        Reflect.defineProperty(proto, ObjExtensionsSym, {
            value: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.getGUID)(),
        });
    }
    const key = proto[ObjExtensionsSym];
    if (!factoryExtensions.has(key)) {
        factoryExtensions.set(key, []);
    }
    extendCol(factoryExtensions.get(key), extensions);
};
function extendCol(a, e) {
    if (Array.isArray(e)) {
        a.push(...e);
    }
    else {
        a.push(e);
    }
}
/**
 * Clears all global extensions
 */
const clearGlobalExtensions = () => {
    globalExtensions.length = 0;
};
/**
 * Disables all extensions
 */
const disableExtensions = () => {
    _enableExtensions = false;
};
/**
 * Enables all extensions
 */
const enableExtensions = () => {
    _enableExtensions = true;
};
/**
 * Applies a set of extension previously applied to a factory using extendFactory to an object created from that factory
 *
 * @param factory
 * @param args
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const applyFactoryExtensions = (factory, args) => {
    let o = factory(args);
    const proto = Reflect.getPrototypeOf(factory);
    if (Reflect.has(proto, ObjExtensionsSym)) {
        const extensions = factoryExtensions.get(Reflect.get(proto, ObjExtensionsSym));
        o = extendObj(o, extensions);
    }
    return o;
};
function extensionOrDefault(op, or, target, ...rest) {
    if (_enableExtensions) {
        const extensions = [];
        // we need to first invoke extensions tied to only this object
        if (Reflect.has(target, ObjExtensionsSym)) {
            extensions.push(...Reflect.get(target, ObjExtensionsSym));
        }
        // second we need to process any global extensions
        extensions.push(...globalExtensions);
        for (let i = 0; i < extensions.length; i++) {
            const extension = extensions[i];
            let result = undefined;
            if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.isFunc)(extension)) {
                // this extension is a function which we call
                result = extension(op, target, ...rest);
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op)(target, ...rest);
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or(target, ...rest);
}
//# sourceMappingURL=invokable-extensions.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/node_modules/tslib/tslib.es6.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@pnp/odata/node_modules/tslib/tslib.es6.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => /* binding */ __extends,
/* harmony export */   "__assign": () => /* binding */ __assign,
/* harmony export */   "__rest": () => /* binding */ __rest,
/* harmony export */   "__decorate": () => /* binding */ __decorate,
/* harmony export */   "__param": () => /* binding */ __param,
/* harmony export */   "__metadata": () => /* binding */ __metadata,
/* harmony export */   "__awaiter": () => /* binding */ __awaiter,
/* harmony export */   "__generator": () => /* binding */ __generator,
/* harmony export */   "__createBinding": () => /* binding */ __createBinding,
/* harmony export */   "__exportStar": () => /* binding */ __exportStar,
/* harmony export */   "__values": () => /* binding */ __values,
/* harmony export */   "__read": () => /* binding */ __read,
/* harmony export */   "__spread": () => /* binding */ __spread,
/* harmony export */   "__spreadArrays": () => /* binding */ __spreadArrays,
/* harmony export */   "__spreadArray": () => /* binding */ __spreadArray,
/* harmony export */   "__await": () => /* binding */ __await,
/* harmony export */   "__asyncGenerator": () => /* binding */ __asyncGenerator,
/* harmony export */   "__asyncDelegator": () => /* binding */ __asyncDelegator,
/* harmony export */   "__asyncValues": () => /* binding */ __asyncValues,
/* harmony export */   "__makeTemplateObject": () => /* binding */ __makeTemplateObject,
/* harmony export */   "__importStar": () => /* binding */ __importStar,
/* harmony export */   "__importDefault": () => /* binding */ __importDefault,
/* harmony export */   "__classPrivateFieldGet": () => /* binding */ __classPrivateFieldGet,
/* harmony export */   "__classPrivateFieldSet": () => /* binding */ __classPrivateFieldSet
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@pnp/odata/parsers.js":
/*!********************************************!*\
  !*** ./node_modules/@pnp/odata/parsers.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ODataParser": () => /* binding */ ODataParser,
/* harmony export */   "TextParser": () => /* binding */ TextParser,
/* harmony export */   "BlobParser": () => /* binding */ BlobParser,
/* harmony export */   "JSONParser": () => /* binding */ JSONParser,
/* harmony export */   "BufferParser": () => /* binding */ BufferParser,
/* harmony export */   "LambdaParser": () => /* binding */ LambdaParser,
/* harmony export */   "HttpRequestError": () => /* binding */ HttpRequestError
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/odata/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");


class ODataParser {
    parse(r) {
        return new Promise((resolve, reject) => {
            if (this.handleError(r, reject)) {
                this.parseImpl(r, resolve, reject);
            }
        });
    }
    parseImpl(r, resolve, reject) {
        if ((r.headers.has("Content-Length") && parseFloat(r.headers.get("Content-Length")) === 0) || r.status === 204) {
            resolve({});
        }
        else {
            // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
            r.text()
                .then(txt => txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {})
                .then(json => resolve(this.parseODataJSON(json)))
                .catch(e => reject(e));
        }
    }
    /**
     * Handles a response with ok === false by parsing the body and creating a ProcessHttpClientResponseException
     * which is passed to the reject delegate. This method returns true if there is no error, otherwise false
     *
     * @param r Current response object
     * @param reject reject delegate for the surrounding promise
     */
    handleError(r, reject) {
        if (!r.ok) {
            HttpRequestError.init(r).then(reject);
        }
        return r.ok;
    }
    /**
     * Normalizes the json response by removing the various nested levels
     *
     * @param json json object to parse
     */
    parseODataJSON(json) {
        let result = json;
        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(json, "d")) {
            if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(json.d, "results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(json, "value")) {
            result = json.value;
        }
        return result;
    }
}
class TextParser extends ODataParser {
    parseImpl(r, resolve) {
        r.text().then(resolve);
    }
}
class BlobParser extends ODataParser {
    parseImpl(r, resolve) {
        r.blob().then(resolve);
    }
}
class JSONParser extends ODataParser {
    parseImpl(r, resolve) {
        r.json().then(resolve);
    }
}
class BufferParser extends ODataParser {
    parseImpl(r, resolve) {
        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.isFunc)(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    }
}
class LambdaParser extends ODataParser {
    constructor(parser) {
        super();
        this.parser = parser;
    }
    parseImpl(r, resolve) {
        this.parser(r).then(resolve);
    }
}
class HttpRequestError extends Error {
    constructor(message, response, status = response.status, statusText = response.statusText) {
        super(message);
        this.response = response;
        this.status = status;
        this.statusText = statusText;
        this.isHttpRequestError = true;
    }
    static init(r) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const t = yield r.clone().text();
            return new HttpRequestError(`Error making HttpClient request in queryable [${r.status}] ${r.statusText} ::> ${t}`, r.clone());
        });
    }
}
//# sourceMappingURL=parsers.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/pipeline-binder.js":
/*!****************************************************!*\
  !*** ./node_modules/@pnp/odata/pipeline-binder.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipelineBinder": () => /* binding */ pipelineBinder,
/* harmony export */   "defaultPipelineBinder": () => /* binding */ defaultPipelineBinder
/* harmony export */ });
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers.js */ "./node_modules/@pnp/odata/parsers.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _queryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryable.js */ "./node_modules/@pnp/odata/queryable.js");
/* harmony import */ var _pipeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipeline.js */ "./node_modules/@pnp/odata/pipeline.js");




// first we bind the pipeline we will use for all requests within this closure
function pipelineBinder(pipes) {
    // then we bind the client factory we'll use (typically done in an implementing library such as sp)
    return function (clientFactory) {
        // then we create a binder we can apply for each type of method (GET, POST, etc.)
        return function (method) {
            // finally we get a function back to which we can pass an IQueryableData instance and execute the request it defines
            return function (o) {
                // send the IQueryableData down the pipeline
                return (0,_pipeline_js__WEBPACK_IMPORTED_MODULE_3__.pipe)(Object.assign({}, {
                    batch: null,
                    batchDependency: null,
                    batchIndex: -1,
                    cachingOptions: null,
                    clientFactory,
                    cloneParentCacheOptions: null,
                    cloneParentWasCaching: false,
                    hasResult: false,
                    isBatched: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_1__.objectDefinedNotNull)(o.batch),
                    method,
                    options: null,
                    parentUrl: "",
                    parser: new _parsers_js__WEBPACK_IMPORTED_MODULE_0__.ODataParser(),
                    pipes: pipes.slice(0),
                    query: new Map(),
                    requestId: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_1__.getGUID)(),
                    url: "",
                    useCaching: /^get$/i.test(o.method) && o.useCaching,
                }, (0,_queryable_js__WEBPACK_IMPORTED_MODULE_2__.cloneQueryableData)(o)));
            };
        };
    };
}
const defaultPipelineBinder = pipelineBinder((0,_pipeline_js__WEBPACK_IMPORTED_MODULE_3__.getDefaultPipeline)());
//# sourceMappingURL=pipeline-binder.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/pipeline.js":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/odata/pipeline.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setResult": () => /* binding */ setResult,
/* harmony export */   "pipe": () => /* binding */ pipe,
/* harmony export */   "requestPipelineMethod": () => /* binding */ requestPipelineMethod,
/* harmony export */   "PipelineMethods": () => /* binding */ PipelineMethods,
/* harmony export */   "getDefaultPipeline": () => /* binding */ getDefaultPipeline
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/odata/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/logging */ "./node_modules/@pnp/logging/index.js");
/* harmony import */ var _caching_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caching.js */ "./node_modules/@pnp/odata/caching.js");




/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.log({
        data: _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.activeLogLevel === 0 /* Verbose */ ? context.result : {},
        level: 1 /* Info */,
        message: `[${context.requestId}] (${(new Date()).getTime()}) Returning result from pipeline. Set logging to verbose to see data.`,
    });
    return Promise.resolve(context.result);
}
/**
 * Sets the result on the context
 */
function setResult(context, value) {
    return new Promise((resolve) => {
        context.result = value;
        context.hasResult = true;
        resolve(context);
    });
}
/**
 * Invokes the next method in the provided context's pipeline
 *
 * @param c The current request context
 */
function next(c) {
    return c.pipes.length > 0 ? c.pipes.shift()(c) : Promise.resolve(c);
}
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
function pipe(context) {
    if (context.pipes.length < 1) {
        _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.write(`[${context.requestId}] (${(new Date()).getTime()}) Request pipeline contains no methods!`, 3 /* Error */);
        throw Error("Request pipeline contains no methods!");
    }
    const promise = next(context).then(ctx => returnResult(ctx)).catch((e) => {
        _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.error(e);
        throw e;
    });
    if (context.isBatched) {
        // this will block the batch's execute method from returning until the child requests have been resolved
        context.batch.addResolveBatchDependency(promise);
    }
    return promise;
}
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
function requestPipelineMethod(alwaysRun = false) {
    return (target, propertyKey, descriptor) => {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            // if we have a result already in the pipeline, pass it along and don't call the tagged method
            if (!alwaysRun && args.length > 0 && (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(args[0], "hasResult") && args[0].hasResult) {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.write(`[${args[0].requestId}] (${(new Date()).getTime()}) Skipping request pipeline method ${propertyKey}, existing result in pipeline.`, 0 /* Verbose */);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.write(`[${args[0].requestId}] (${(new Date()).getTime()}) Calling request pipeline method ${propertyKey}.`, 0 /* Verbose */);
            // then chain the next method in the context's pipeline - allows for dynamic pipeline
            return method.apply(target, args).then((ctx) => next(ctx));
        };
    };
}
/**
 * Contains the methods used within the request pipeline
 */
class PipelineMethods {
    /**
     * Logs the start of the request
     */
    static logStart(context) {
        return new Promise(resolve => {
            _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.log({
                data: _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                level: 1 /* Info */,
                message: `[${context.requestId}] (${(new Date()).getTime()}) Beginning ${context.method} request (${context.url})`,
            });
            resolve(context);
        });
    }
    /**
     * Handles caching of the request
     */
    static caching(context) {
        return new Promise(resolve => {
            // handle caching, if applicable
            if (context.useCaching) {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.write(`[${context.requestId}] (${(new Date()).getTime()}) Caching is enabled for request, checking cache...`, 1 /* Info */);
                let cacheOptions = new _caching_js__WEBPACK_IMPORTED_MODULE_2__.CachingOptions(context.url.toLowerCase());
                if (context.cachingOptions !== undefined) {
                    cacheOptions = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    let data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.log({
                            data: _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: `[${context.requestId}] (${(new Date()).getTime()}) Value returned from cache.`,
                        });
                        // ensure we clear any held batch dependency we are resolving from the cache
                        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.isFunc)(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(context.parser, "hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(ctx => resolve(ctx));
                    }
                }
                _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.write(`[${context.requestId}] (${(new Date()).getTime()}) Value not found in cache.`, 1 /* Info */);
                // if we don't then wrap the supplied parser in the caching parser wrapper
                // and send things on their way
                context.parser = new _caching_js__WEBPACK_IMPORTED_MODULE_2__.CachingParserWrapper(context.parser, cacheOptions);
            }
            return resolve(context);
        });
    }
    /**
     * Sends the request
     */
    static send(context) {
        return new Promise((resolve, reject) => {
            // send or batch the request
            if (context.isBatched) {
                const p = context.batch.add(context);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.isFunc)(context.batchDependency)) {
                    context.batchDependency();
                }
                _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.write(`[${context.requestId}] (${(new Date()).getTime()}) Batching request in batch ${context.batch.batchId}.`, 1 /* Info */);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.write(`[${context.requestId}] (${(new Date()).getTime()}) Sending request.`, 1 /* Info */);
                // we are not part of a batch, so proceed as normal
                const client = context.clientFactory();
                const opts = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(context.options || {}, { method: context.method });
                client.fetch(context.url, opts)
                    .then(response => context.parser.parse(response))
                    .then(result => setResult(context, result))
                    .then(ctx => resolve(ctx))
                    .catch(e => reject(e));
            }
        });
    }
    /**
     * Logs the end of the request
     */
    static logEnd(context) {
        return new Promise(resolve => {
            if (context.isBatched) {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.log({
                    data: _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: `[${context.requestId}] (${(new Date()).getTime()}) ${context.method} request will complete in batch ${context.batch.batchId}.`,
                });
            }
            else {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.log({
                    data: _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: `[${context.requestId}] (${(new Date()).getTime()}) Completing ${context.method} request.`,
                });
            }
            resolve(context);
        });
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    requestPipelineMethod(true)
], PipelineMethods, "logStart", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    requestPipelineMethod()
], PipelineMethods, "caching", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    requestPipelineMethod()
], PipelineMethods, "send", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    requestPipelineMethod(true)
], PipelineMethods, "logEnd", null);
function getDefaultPipeline() {
    return [
        PipelineMethods.logStart,
        PipelineMethods.caching,
        PipelineMethods.send,
        PipelineMethods.logEnd,
    ].slice(0);
}
//# sourceMappingURL=pipeline.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/queryable.js":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/odata/queryable.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneQueryableData": () => /* binding */ cloneQueryableData,
/* harmony export */   "Queryable": () => /* binding */ Queryable
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers.js */ "./node_modules/@pnp/odata/parsers.js");


function cloneQueryableData(source) {
    let body;
    // this handles bodies that cannot be JSON encoded (Blob, etc)
    // Note however, even bodies that can be serialized will not be cloned.
    if (source.options && source.options.body) {
        body = source.options.body;
        source.options.body = "-";
    }
    const s = JSON.stringify(source, (key, value) => {
        switch (key) {
            case "query":
                return JSON.stringify([...value]);
            case "batch":
            case "batchDependency":
            case "cachingOptions":
            case "clientFactory":
            case "parser":
                return "-";
            default:
                return value;
        }
    }, 0);
    const parsed = JSON.parse(s, (key, value) => {
        switch (key) {
            case "query":
                return new Map(JSON.parse(value));
            case "batch":
            case "batchDependency":
            case "cachingOptions":
            case "clientFactory":
            case "parser":
                return source[key];
            default:
                return value;
        }
    });
    if (body) {
        parsed.options.body = body;
        source.options.body = body;
    }
    return parsed;
}
class Queryable {
    constructor(dataSeed = {}) {
        this._data = Object.assign({}, {
            cloneParentWasCaching: false,
            options: {},
            parentUrl: "",
            parser: new _parsers_js__WEBPACK_IMPORTED_MODULE_1__.ODataParser(),
            query: new Map(),
            url: "",
            useCaching: false,
        }, cloneQueryableData(dataSeed));
        this._runtime = null;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = Object.assign({}, this.data, cloneQueryableData(value));
    }
    getRuntime() {
        if (this._runtime === null) {
            return _pnp_common__WEBPACK_IMPORTED_MODULE_0__.DefaultRuntime;
        }
        return this._runtime;
    }
    setRuntime(...args) {
        // need to wait for ts update in spfx: [runtime: Runtime] | [cloneGlobal: boolean, additionalConfig?: ITypedHash<any>]
        if (args[0] instanceof _pnp_common__WEBPACK_IMPORTED_MODULE_0__.Runtime) {
            this._runtime = args[0];
        }
        else {
            this._runtime = args[0] ? new _pnp_common__WEBPACK_IMPORTED_MODULE_0__.Runtime(_pnp_common__WEBPACK_IMPORTED_MODULE_0__.DefaultRuntime.export()) : new _pnp_common__WEBPACK_IMPORTED_MODULE_0__.Runtime();
            if (args.length > 1 && (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(args[1])) {
                this._runtime.assign(args[1]);
            }
        }
        return this;
    }
    /**
  * Gets the current url
  *
  */
    toUrl() {
        return this.data.url;
    }
    /**
   * Directly concatenates the supplied string to the current url, not normalizing "/" chars
   *
   * @param pathPart The string to concatenate to the url
   */
    concat(pathPart) {
        this.data.url += pathPart;
        return this;
    }
    /**
   * Provides access to the query builder for this url
   *
   */
    get query() {
        return this.data.query;
    }
    /**
   * Sets custom options for current object and all derived objects accessible via chaining
   *
   * @param options custom options
   */
    configure(options) {
        (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.mergeOptions)(this.data.options, options);
        return this;
    }
    /**
   * Configures this instance from the configure options of the supplied instance
   *
   * @param o Instance from which options should be taken
   */
    configureFrom(o) {
        (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.mergeOptions)(this.data.options, o.data.options);
        const sourceRuntime = o.getRuntime();
        if (!sourceRuntime.get("__isDefault__")) {
            this.setRuntime(sourceRuntime);
        }
        return this;
    }
    /**
   * Enables caching for this request
   *
   * @param options Defines the options used when caching this request
   */
    usingCaching(options) {
        const runtime = this.getRuntime();
        if (!runtime.get("globalCacheDisable")) {
            this.data.useCaching = true;
            // handle getting just the key
            if (typeof options === "string") {
                if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(options)) {
                    throw Error("Cache key cannot be empty.");
                }
                options = { key: options };
            }
            // this uses our local options if they are defined as defaults
            const defaultOpts = {
                expiration: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "second", runtime.get("defaultCachingTimeoutSeconds")),
                storeName: runtime.get("defaultCachingStore"),
            };
            this.data.cachingOptions = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(defaultOpts, options);
        }
        return this;
    }
    usingParser(parser) {
        this.data.parser = parser;
        return this;
    }
    /**
   * Allows you to set a request specific processing pipeline
   *
   * @param pipeline The set of methods, in order, to execute a given request
   */
    withPipeline(pipeline) {
        this.data.pipes = pipeline.slice(0);
        return this;
    }
    /**
   * Appends the given string and normalizes "/" chars
   *
   * @param pathPart The string to append
   */
    append(pathPart) {
        this.data.url = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(this.data.url, pathPart);
    }
    /**
   * Adds this query to the supplied batch
   *
   * @example
   * ```
   *
   * let b = pnp.sp.createBatch();
   * pnp.sp.web.inBatch(b).get().then(...);
   * b.execute().then(...)
   * ```
   */
    inBatch(batch) {
        if (this.hasBatch) {
            throw Error("This query is already part of a batch.");
        }
        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(batch)) {
            batch.track(this);
        }
        return this;
    }
    /**
   * Blocks a batch call from occuring, MUST be cleared by calling the returned function
  */
    addBatchDependency() {
        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(this.data.batch)) {
            return this.data.batch.addDependency();
        }
        return () => null;
    }
    /**
   * Indicates if the current query has a batch associated
   *
   */
    get hasBatch() {
        return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(this.data.batch);
    }
    /**
   * The batch currently associated with this query or null
   *
   */
    get batch() {
        return this.hasBatch ? this.data.batch : null;
    }
    /**
   * Gets the parent url used when creating this instance
   *
   */
    get parentUrl() {
        return this.data.parentUrl;
    }
    /**
   * Clones this instance's data to target
   *
   * @param target Instance to which data is written
   * @param settings [Optional] Settings controlling how clone is applied
   */
    cloneTo(target, settings = {}) {
        // default values for settings
        settings = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)({
            includeBatch: true,
            includeQuery: false,
        }, settings);
        target.data = Object.assign({}, cloneQueryableData(this.data), {
            batch: null,
            cloneParentCacheOptions: null,
            cloneParentWasCaching: false,
        }, cloneQueryableData(target.data));
        target.configureFrom(this);
        if (settings.includeBatch) {
            target.inBatch(this.batch);
        }
        if (settings.includeQuery && this.query.size > 0) {
            this.query.forEach((v, k) => target.query.set(k, v));
        }
        if (this.data.useCaching) {
            target.data.cloneParentWasCaching = true;
            target.data.cloneParentCacheOptions = this.data.cachingOptions;
        }
        return target;
    }
}
//# sourceMappingURL=queryable.js.map

/***/ }),

/***/ "./node_modules/@pnp/odata/request-builders.js":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/odata/request-builders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => /* binding */ body,
/* harmony export */   "headers": () => /* binding */ headers
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");

function body(o, previous) {
    return Object.assign({ body: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.jsS)(o) }, previous);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}
//# sourceMappingURL=request-builders.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/batch.js":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/batch.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SPBatch": () => /* binding */ SPBatch
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "./node_modules/@pnp/odata/index.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/logging */ "./node_modules/@pnp/logging/index.js");
/* harmony import */ var _sphttpclient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sphttpclient.js */ "./node_modules/@pnp/sp/sphttpclient.js");
/* harmony import */ var _utils_toabsoluteurl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/toabsoluteurl.js */ "./node_modules/@pnp/sp/utils/toabsoluteurl.js");






/**
 * Manages a batch of OData operations
 */
class SPBatch extends _pnp_odata__WEBPACK_IMPORTED_MODULE_0__.Batch {
    constructor(url, runtime = _pnp_common__WEBPACK_IMPORTED_MODULE_1__.DefaultRuntime) {
        super();
        this.url = url;
        this.runtime = runtime;
    }
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    static ParseResponse(body) {
        const responses = [];
        const header = "--batchresponse_";
        // Ex. "HTTP/1.1 500 Internal Server Error"
        const statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
        const lines = body.split("\n");
        let state = "batch";
        let status;
        let statusText;
        for (let i = 0; i < lines.length; ++i) {
            const line = lines[i];
            switch (state) {
                case "batch":
                    if (line.substr(0, header.length) === header) {
                        state = "batchHeaders";
                    }
                    else {
                        if (line.trim() !== "") {
                            throw Error(`Invalid response, line ${i}`);
                        }
                    }
                    break;
                case "batchHeaders":
                    if (line.trim() === "") {
                        state = "status";
                    }
                    break;
                case "status": {
                    const parts = statusRegExp.exec(line);
                    if (parts.length !== 3) {
                        throw Error(`Invalid status, line ${i}`);
                    }
                    status = parseInt(parts[1], 10);
                    statusText = parts[2];
                    state = "statusHeaders";
                    break;
                }
                case "statusHeaders":
                    if (line.trim() === "") {
                        state = "body";
                    }
                    break;
                case "body":
                    responses.push((status === 204) ? new Response() : new Response(line, { status: status, statusText: statusText }));
                    state = "batch";
                    break;
            }
        }
        if (state !== "status") {
            throw Error("Unexpected end of input");
        }
        return responses;
    }
    executeImpl() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            _pnp_logging__WEBPACK_IMPORTED_MODULE_2__.Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Executing batch with ${this.requests.length} requests.`, 1 /* Info */);
            // if we don't have any requests, don't bother sending anything
            // this could be due to caching further upstream, or just an empty batch
            if (this.requests.length < 1) {
                _pnp_logging__WEBPACK_IMPORTED_MODULE_2__.Logger.write("Resolving empty batch.", 1 /* Info */);
                return;
            }
            // creating the client here allows the url to be populated for nodejs client as well as potentially
            // any other hacks needed for other types of clients. Essentially allows the absoluteRequestUrl
            // below to be correct
            const client = new _sphttpclient_js__WEBPACK_IMPORTED_MODULE_3__.SPHttpClient(this.runtime);
            // due to timing we need to get the absolute url here so we can use it for all the individual requests
            // and for sending the entire batch
            const absoluteRequestUrl = yield (0,_utils_toabsoluteurl_js__WEBPACK_IMPORTED_MODULE_4__.toAbsoluteUrl)(this.url, this.runtime);
            // build all the requests, send them, pipe results in order to parsers
            const batchBody = [];
            let currentChangeSetId = "";
            for (let i = 0; i < this.requests.length; i++) {
                const reqInfo = this.requests[i];
                if (reqInfo.method === "GET") {
                    if (currentChangeSetId.length > 0) {
                        // end an existing change set
                        batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
                        currentChangeSetId = "";
                    }
                    batchBody.push(`--batch_${this.batchId}\n`);
                }
                else {
                    if (currentChangeSetId.length < 1) {
                        // start new change set
                        currentChangeSetId = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_1__.getGUID)();
                        batchBody.push(`--batch_${this.batchId}\n`);
                        batchBody.push(`Content-Type: multipart/mixed; boundary="changeset_${currentChangeSetId}"\n\n`);
                    }
                    batchBody.push(`--changeset_${currentChangeSetId}\n`);
                }
                // common batch part prefix
                batchBody.push("Content-Type: application/http\n");
                batchBody.push("Content-Transfer-Encoding: binary\n\n");
                // these are the per-request headers
                const headers = new Headers();
                // this is the url of the individual request within the batch
                const url = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_1__.isUrlAbsolute)(reqInfo.url) ? reqInfo.url : (0,_pnp_common__WEBPACK_IMPORTED_MODULE_1__.combine)(absoluteRequestUrl, reqInfo.url);
                _pnp_logging__WEBPACK_IMPORTED_MODULE_2__.Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Adding request ${reqInfo.method} ${url} to batch.`, 0 /* Verbose */);
                if (reqInfo.method !== "GET") {
                    let method = reqInfo.method;
                    const castHeaders = reqInfo.options.headers;
                    if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_1__.hOP)(reqInfo, "options") && (0,_pnp_common__WEBPACK_IMPORTED_MODULE_1__.hOP)(reqInfo.options, "headers") && castHeaders["X-HTTP-Method"] !== undefined) {
                        method = castHeaders["X-HTTP-Method"];
                        delete castHeaders["X-HTTP-Method"];
                    }
                    batchBody.push(`${method} ${url} HTTP/1.1\n`);
                    headers.set("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                else {
                    batchBody.push(`${reqInfo.method} ${url} HTTP/1.1\n`);
                }
                // merge global config headers
                (0,_pnp_common__WEBPACK_IMPORTED_MODULE_1__.mergeHeaders)(headers, (_a = this.runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.headers);
                // merge per-request headers
                if (reqInfo.options) {
                    (0,_pnp_common__WEBPACK_IMPORTED_MODULE_1__.mergeHeaders)(headers, reqInfo.options.headers);
                }
                // lastly we apply any default headers we need that may not exist
                if (!headers.has("Accept")) {
                    headers.append("Accept", "application/json");
                }
                if (!headers.has("Content-Type")) {
                    headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                }
                if (!headers.has("X-ClientService-ClientTag")) {
                    headers.append("X-ClientService-ClientTag", "PnPCoreJS:@pnp-2.1.0:batch");
                }
                // write headers into batch body
                headers.forEach((value, name) => {
                    batchBody.push(`${name}: ${value}\n`);
                });
                batchBody.push("\n");
                if (reqInfo.options.body) {
                    batchBody.push(`${reqInfo.options.body}\n\n`);
                }
            }
            if (currentChangeSetId.length > 0) {
                // Close the changeset
                batchBody.push(`--changeset_${currentChangeSetId}--\n\n`);
                currentChangeSetId = "";
            }
            batchBody.push(`--batch_${this.batchId}--\n`);
            const batchOptions = {
                "body": batchBody.join(""),
                "headers": {
                    "Content-Type": `multipart/mixed; boundary=batch_${this.batchId}`,
                },
                "method": "POST",
            };
            _pnp_logging__WEBPACK_IMPORTED_MODULE_2__.Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Sending batch request.`, 1 /* Info */);
            const fetchResponse = yield client.fetch((0,_pnp_common__WEBPACK_IMPORTED_MODULE_1__.combine)(absoluteRequestUrl, "/_api/$batch"), batchOptions);
            if (!fetchResponse.ok) {
                // the entire batch resulted in an error and we need to handle that better #1356
                // things consistently with the rest of the http errors
                throw (yield _pnp_odata__WEBPACK_IMPORTED_MODULE_0__.HttpRequestError.init(fetchResponse));
            }
            const text = yield fetchResponse.clone().text();
            const responses = SPBatch.ParseResponse(text);
            if (responses.length !== this.requests.length) {
                throw Error("Could not properly parse responses to match requests in batch.");
            }
            _pnp_logging__WEBPACK_IMPORTED_MODULE_2__.Logger.write(`[${this.batchId}] (${(new Date()).getTime()}) Resolving batched requests.`, 1 /* Info */);
            // this structure ensures that we resolve the batched requests in the order we expect
            // using async this is not guaranteed depending on the requests
            return responses.reduce((p, response, index) => p.then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const request = this.requests[index];
                _pnp_logging__WEBPACK_IMPORTED_MODULE_2__.Logger.write(`[${request.id}] (${(new Date()).getTime()}) Resolving request in batch ${this.batchId}.`, 1 /* Info */);
                try {
                    request.resolve(yield request.parser.parse(response));
                }
                catch (e) {
                    request.reject(e);
                }
            })), Promise.resolve(void (0)));
        });
    }
}
//# sourceMappingURL=batch.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/decorators.js":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/decorators.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultPath": () => /* binding */ defaultPath
/* harmony export */ });
/**
 * Class Decorators
 */
/**
 * Decorator used to specify the default path for SharePointQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return class extends target {
            constructor(...args) {
                super(args[0], args.length > 1 && args[1] !== undefined ? args[1] : path);
            }
        };
    };
}
// TODO::?
// performance tracking method decorator
// redirect to graph api
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/lists/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => /* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.List,
/* harmony export */   "Lists": () => /* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.Lists,
/* harmony export */   "ControlMode": () => /* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.ControlMode,
/* harmony export */   "RenderListDataOptions": () => /* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.RenderListDataOptions
/* harmony export */ });
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web.js */ "./node_modules/@pnp/sp/lists/web.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/@pnp/sp/lists/types.js");


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/lists/types.js":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/lists/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_Lists": () => /* binding */ _Lists,
/* harmony export */   "Lists": () => /* binding */ Lists,
/* harmony export */   "_List": () => /* binding */ _List,
/* harmony export */   "List": () => /* binding */ List,
/* harmony export */   "RenderListDataOptions": () => /* binding */ RenderListDataOptions,
/* harmony export */   "ControlMode": () => /* binding */ ControlMode
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/odata */ "./node_modules/@pnp/odata/index.js");
/* harmony import */ var _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharepointqueryable.js */ "./node_modules/@pnp/sp/sharepointqueryable.js");
/* harmony import */ var _odata_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../odata.js */ "./node_modules/@pnp/sp/odata.js");
/* harmony import */ var _utils_metadata_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/metadata.js */ "./node_modules/@pnp/sp/utils/metadata.js");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../decorators.js */ "./node_modules/@pnp/sp/decorators.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../operations.js */ "./node_modules/@pnp/sp/operations.js");
/* harmony import */ var _utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/escapeQueryStrValue.js */ "./node_modules/@pnp/sp/utils/escapeQueryStrValue.js");
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../telemetry.js */ "./node_modules/@pnp/sp/telemetry.js");
/* harmony import */ var _utils_toResourcePath_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/toResourcePath.js */ "./node_modules/@pnp/sp/utils/toResourcePath.js");











let _Lists = class _Lists extends _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SharePointQueryableCollection {
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    getById(id) {
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag.configure(List(this).concat(`('${id}')`), "ls.getById");
    }
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    getByTitle(title) {
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag.configure(List(this, `getByTitle('${(0,_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_7__.escapeQueryStrValue)(title)}')`), "ls.getByTitle");
    }
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    add(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const addSettings = Object.assign({
                "AllowContentTypes": enableContentTypes,
                "BaseTemplate": template,
                "ContentTypesEnabled": enableContentTypes,
                "Description": desc,
                "Title": title,
            }, (0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_4__.metadata)("SP.List"), additionalSettings);
            const data = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this, (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)(addSettings));
            return { data, list: this.getByTitle(addSettings.Title) };
        });
    }
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    ensure(title, desc = "", template = 100, enableContentTypes = false, additionalSettings = {}) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            if (this.hasBatch) {
                throw Error("The ensure list method is not supported for use in a batch.");
            }
            const addOrUpdateSettings = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(additionalSettings, { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes }, true);
            const list = this.getByTitle(addOrUpdateSettings.Title);
            try {
                // this will throw if the list doesn't exist
                yield list.select("Title")();
                const data = yield list.update(addOrUpdateSettings).then(r => r.data);
                return { created: false, data, list: this.getByTitle(addOrUpdateSettings.Title) };
            }
            catch (e) {
                const data = yield this.add(title, desc, template, enableContentTypes, addOrUpdateSettings).then(r => r.data);
                return { created: true, data, list: this.getByTitle(addOrUpdateSettings.Title) };
            }
        });
    }
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    ensureSiteAssetsLibrary() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const json = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this.clone(Lists, "ensuresiteassetslibrary"));
            return List((0,_odata_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(json));
        });
    }
    /**
     * Gets a list that is the default location for wiki pages.
     */
    ensureSitePagesLibrary() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const json = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this.clone(Lists, "ensuresitepageslibrary"));
            return List((0,_odata_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(json));
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("ls.add")
], _Lists.prototype, "add", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("ls.ensure")
], _Lists.prototype, "ensure", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("ls.ensureSiteAssetsLibrary")
], _Lists.prototype, "ensureSiteAssetsLibrary", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("ls.ensureSitePagesLibrary")
], _Lists.prototype, "ensureSitePagesLibrary", null);
_Lists = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_5__.defaultPath)("lists")
], _Lists);

const Lists = (0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Lists);
class _List extends _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.deleteableWithETag)("l");
    }
    /**
     * Gets the effective base permissions of this list
     *
     */
    get effectiveBasePermissions() {
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag.configure((0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SharePointQueryable)(this, "EffectiveBasePermissions"), "l.effectiveBasePermissions");
    }
    /**
     * Gets the event receivers attached to this list
     *
     */
    get eventReceivers() {
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag.configure((0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SharePointQueryableCollection)(this, "EventReceivers"), "l.eventReceivers");
    }
    /**
     * Gets the related fields of this list
     *
     */
    get relatedFields() {
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag.configure((0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SharePointQueryable)(this, "getRelatedFields"), "l.relatedFields");
    }
    /**
     * Gets the IRM settings for this list
     *
     */
    get informationRightsManagementSettings() {
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag.configure((0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SharePointQueryable)(this, "InformationRightsManagementSettings"), "l.informationRightsManagementSettings");
    }
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    update(properties, eTag = "*") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const postBody = (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_4__.metadata)("SP.List"), properties), (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.headers)({
                "IF-Match": eTag,
                "X-HTTP-Method": "MERGE",
            }));
            const data = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this, postBody);
            const list = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(properties, "Title") ? this.getParent(List, this.parentUrl, `getByTitle('${properties.Title}')`) : List(this);
            return {
                data,
                list,
            };
        });
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    getChanges(query) {
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this.clone(List, "getchanges"), (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)({ query: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_4__.metadata)("SP.ChangeQuery"), query) }));
    }
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    getItemsByCAMLQuery(query, ...expands) {
        const q = this.clone(List, "getitems");
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(q.expand(...expands), (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)({ query: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_4__.metadata)("SP.CamlQuery"), query) }));
    }
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    getListItemChangesSinceToken(query) {
        const o = this.clone(List, "getlistitemchangessincetoken").usingParser({
            parse(r) {
                return r.text();
            },
        });
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(o, (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)({ "query": (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_4__.metadata)("SP.ChangeLogItemQuery"), query) }));
    }
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    recycle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this.clone(List, "recycle"));
            return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(data, "Recycle") ? data.Recycle : data;
        });
    }
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    renderListData(viewXml) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const q = this.clone(List, "renderlistdata(@viewXml)");
            q.query.set("@viewXml", `'${viewXml}'`);
            const data = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(q);
            // data will be a string, so we parse it again
            return JSON.parse((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(data, "RenderListData") ? data.RenderListData : data);
        });
    }
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParams The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param query Allows setting of query parameters
     */
    renderListDataAsStream(parameters, overrideParams = null, query = new Map()) {
        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(parameters, "RenderOptions") && (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.isArray)(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce((v, c) => v + c);
        }
        let bodyOptions = { parameters: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_4__.metadata)("SP.RenderListDataParameters"), parameters) };
        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(overrideParams)) {
            bodyOptions = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(bodyOptions, { overrideParameters: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_4__.metadata)("SP.RenderListDataOverrideParameters"), overrideParams) });
        }
        const clone = this.clone(List, "RenderListDataAsStream", true, true);
        if (query && query.size > 0) {
            query.forEach((v, k) => clone.query.set(k, v));
        }
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(clone, (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)(bodyOptions));
    }
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    renderListFormData(itemId, formId, mode) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this.clone(List, `renderlistformdata(itemid=${itemId}, formid='${formId}', mode='${mode}')`));
            // data will be a string, so we parse it again
            return JSON.parse((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(data, "RenderListFormData") ? data.RenderListFormData : data);
        });
    }
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    reserveListItemId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this.clone(List, "reservelistitemid"));
            return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(data, "ReserveListItemId") ? data.ReserveListItemId : data;
        });
    }
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     */
    getListItemEntityTypeFullName() {
        // we cache these requests as the entity name doesn't change and we can save traffic
        // this is justified as this method generates our second highest number of monthly executions ahead of item add and update
        return this.clone(List, null, false).select("ListItemEntityTypeFullName").usingCaching({
            expiration: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "day", 5),
            key: `PnPjs-ListEntityName:${this.toUrl()}`,
            storeName: "local",
        })().then(o => o.ListItemEntityTypeFullName);
    }
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    addValidateUpdateItemUsingPath(formValues, decodedUrl, bNewDocumentUpdate = false, checkInComment, additionalProps) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const addProps = {
                FolderPath: (0,_utils_toResourcePath_js__WEBPACK_IMPORTED_MODULE_9__.toResourcePath)(decodedUrl),
            };
            if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.objectDefinedNotNull)(additionalProps)) {
                if (additionalProps.leafName) {
                    addProps.LeafName = (0,_utils_toResourcePath_js__WEBPACK_IMPORTED_MODULE_9__.toResourcePath)(additionalProps.leafName);
                }
                if (additionalProps.objectType) {
                    addProps.UnderlyingObjectType = additionalProps.objectType;
                }
            }
            const res = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this.clone(List, "AddValidateUpdateItemUsingPath()"), (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)({
                bNewDocumentUpdate,
                checkInComment,
                formValues,
                listItemCreateInfo: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_4__.metadata)("SP.ListItemCreationInformationUsingPath"), addProps),
            }));
            return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(res, "AddValidateUpdateItemUsingPath") ? res.AddValidateUpdateItemUsingPath : res;
        });
    }
    /**
     * Gets the parent information for this item's list and web
     */
    getParentInfos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const urlInfo = yield this.select("Id", "RootFolder/UniqueId", "RootFolder/ServerRelativeUrl", "RootFolder/ServerRelativePath", "ParentWeb/Id", "ParentWeb/Url", "ParentWeb/ServerRelativeUrl", "ParentWeb/ServerRelativePath").expand("RootFolder", "ParentWeb")();
            return {
                List: {
                    Id: urlInfo.Id,
                    RootFolderServerRelativePath: urlInfo.RootFolder.ServerRelativePath,
                    RootFolderServerRelativeUrl: urlInfo.RootFolder.ServerRelativeUrl,
                    RootFolderUniqueId: urlInfo.RootFolder.UniqueId,
                },
                ParentWeb: {
                    Id: urlInfo.ParentWeb.Id,
                    ServerRelativePath: urlInfo.ParentWeb.ServerRelativePath,
                    ServerRelativeUrl: urlInfo.ParentWeb.ServerRelativeUrl,
                    Url: urlInfo.ParentWeb.Url,
                },
            };
        });
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.update")
], _List.prototype, "update", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.getChanges")
], _List.prototype, "getChanges", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.CAMLQuery")
], _List.prototype, "getItemsByCAMLQuery", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.ChangesSinceToken")
], _List.prototype, "getListItemChangesSinceToken", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.recycle")
], _List.prototype, "recycle", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.renderListData")
], _List.prototype, "renderListData", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.AsStream")
], _List.prototype, "renderListDataAsStream", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.renderListFormData")
], _List.prototype, "renderListFormData", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.reserveListItemId")
], _List.prototype, "reserveListItemId", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.getListItemEntityTypeFullName")
], _List.prototype, "getListItemEntityTypeFullName", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_8__.tag)("l.addValidateUpdateItemUsingPath")
], _List.prototype, "addValidateUpdateItemUsingPath", null);
const List = (0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
})(RenderListDataOptions || (RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/lists/web.js":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/lists/web.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "./node_modules/@pnp/odata/index.js");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "./node_modules/@pnp/sp/webs/types.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "./node_modules/@pnp/sp/lists/types.js");
/* harmony import */ var _odata_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../odata.js */ "./node_modules/@pnp/sp/odata.js");
/* harmony import */ var _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharepointqueryable.js */ "./node_modules/@pnp/sp/sharepointqueryable.js");
/* harmony import */ var _utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/escapeQueryStrValue.js */ "./node_modules/@pnp/sp/utils/escapeQueryStrValue.js");







(0,_pnp_odata__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "lists", _types_js__WEBPACK_IMPORTED_MODULE_2__.Lists);
(0,_pnp_odata__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "siteUserInfoList", _types_js__WEBPACK_IMPORTED_MODULE_2__.List, "siteuserinfolist");
(0,_pnp_odata__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "defaultDocumentLibrary", _types_js__WEBPACK_IMPORTED_MODULE_2__.List, "DefaultDocumentLibrary");
(0,_pnp_odata__WEBPACK_IMPORTED_MODULE_0__.addProp)(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web, "customListTemplates", _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_4__.SharePointQueryableCollection, "getcustomlisttemplates");
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getList = function (listRelativeUrl) {
    return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.List)(this, `getList('${(0,_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_5__.escapeQueryStrValue)(listRelativeUrl)}')`);
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__._Web.prototype.getCatalog = function (type) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
        const data = yield this.clone(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__.Web, `getcatalog(${type})`).select("Id").get();
        return (0,_types_js__WEBPACK_IMPORTED_MODULE_2__.List)((0,_odata_js__WEBPACK_IMPORTED_MODULE_3__.odataUrlFrom)(data));
    });
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js":
/*!**************************************************************!*\
  !*** ./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => /* binding */ __extends,
/* harmony export */   "__assign": () => /* binding */ __assign,
/* harmony export */   "__rest": () => /* binding */ __rest,
/* harmony export */   "__decorate": () => /* binding */ __decorate,
/* harmony export */   "__param": () => /* binding */ __param,
/* harmony export */   "__metadata": () => /* binding */ __metadata,
/* harmony export */   "__awaiter": () => /* binding */ __awaiter,
/* harmony export */   "__generator": () => /* binding */ __generator,
/* harmony export */   "__createBinding": () => /* binding */ __createBinding,
/* harmony export */   "__exportStar": () => /* binding */ __exportStar,
/* harmony export */   "__values": () => /* binding */ __values,
/* harmony export */   "__read": () => /* binding */ __read,
/* harmony export */   "__spread": () => /* binding */ __spread,
/* harmony export */   "__spreadArrays": () => /* binding */ __spreadArrays,
/* harmony export */   "__spreadArray": () => /* binding */ __spreadArray,
/* harmony export */   "__await": () => /* binding */ __await,
/* harmony export */   "__asyncGenerator": () => /* binding */ __asyncGenerator,
/* harmony export */   "__asyncDelegator": () => /* binding */ __asyncDelegator,
/* harmony export */   "__asyncValues": () => /* binding */ __asyncValues,
/* harmony export */   "__makeTemplateObject": () => /* binding */ __makeTemplateObject,
/* harmony export */   "__importStar": () => /* binding */ __importStar,
/* harmony export */   "__importDefault": () => /* binding */ __importDefault,
/* harmony export */   "__classPrivateFieldGet": () => /* binding */ __classPrivateFieldGet,
/* harmony export */   "__classPrivateFieldSet": () => /* binding */ __classPrivateFieldSet
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@pnp/sp/odata.js":
/*!***************************************!*\
  !*** ./node_modules/@pnp/sp/odata.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "odataUrlFrom": () => /* binding */ odataUrlFrom,
/* harmony export */   "spODataEntity": () => /* binding */ spODataEntity,
/* harmony export */   "spODataEntityArray": () => /* binding */ spODataEntityArray
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/logging */ "./node_modules/@pnp/logging/index.js");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/odata */ "./node_modules/@pnp/odata/index.js");
/* harmony import */ var _utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/extractweburl.js */ "./node_modules/@pnp/sp/utils/extractweburl.js");




function odataUrlFrom(candidate) {
    const parts = [];
    const s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[3]) && (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            const editLink = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push((0,_utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_3__.extractWebUrl)(candidate[s[3]]), "_api", editLink);
        }
        else if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.write("No uri information found in ODataEntity parsing, chaining will fail for this object.", 2 /* Warning */);
        return "";
    }
    return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(...parts);
}
class SPODataEntityParserImpl extends _pnp_odata__WEBPACK_IMPORTED_MODULE_2__.ODataParser {
    constructor(factory) {
        super();
        this.factory = factory;
        this.hydrate = (d) => {
            const o = this.factory(odataUrlFrom(d), null);
            return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(o, d);
        };
    }
    parse(r) {
        return super.parse(r).then((d) => {
            const o = this.factory(odataUrlFrom(d), null);
            return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(o, d);
        });
    }
}
class SPODataEntityArrayParserImpl extends _pnp_odata__WEBPACK_IMPORTED_MODULE_2__.ODataParser {
    constructor(factory) {
        super();
        this.factory = factory;
        this.hydrate = (d) => {
            return d.map(v => {
                const o = this.factory(odataUrlFrom(v), null);
                return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(o, v);
            });
        };
    }
    parse(r) {
        return super.parse(r).then((d) => {
            return d.map(v => {
                const o = this.factory(odataUrlFrom(v), null);
                return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(o, v);
            });
        });
    }
}
function spODataEntity(factory) {
    return new SPODataEntityParserImpl(factory);
}
function spODataEntityArray(factory) {
    return new SPODataEntityArrayParserImpl(factory);
}
//# sourceMappingURL=odata.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/operations.js":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/operations.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerCustomRequestClientFactory": () => /* binding */ registerCustomRequestClientFactory,
/* harmony export */   "spGet": () => /* binding */ spGet,
/* harmony export */   "spPost": () => /* binding */ spPost,
/* harmony export */   "spDelete": () => /* binding */ spDelete,
/* harmony export */   "spPatch": () => /* binding */ spPatch,
/* harmony export */   "spPostDelete": () => /* binding */ spPostDelete,
/* harmony export */   "spPostDeleteETag": () => /* binding */ spPostDeleteETag
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "./node_modules/@pnp/odata/index.js");
/* harmony import */ var _sphttpclient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sphttpclient.js */ "./node_modules/@pnp/sp/sphttpclient.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _utils_toabsoluteurl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/toabsoluteurl.js */ "./node_modules/@pnp/sp/utils/toabsoluteurl.js");





function registerCustomRequestClientFactory(requestClientFactory) {
    httpClientFactory = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_2__.isFunc)(requestClientFactory) ? () => requestClientFactory : defaultFactory;
}
const defaultFactory = (runtime) => () => new _sphttpclient_js__WEBPACK_IMPORTED_MODULE_1__.SPHttpClient(runtime);
let httpClientFactory = defaultFactory;
const send = (method) => {
    return function (o, options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // use the current runtime
            const runtime = o.getRuntime();
            const operation = (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_0__.defaultPipelineBinder)(httpClientFactory(runtime))(method);
            const data = (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_0__.cloneQueryableData)(o.data);
            const batchDependency = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_2__.objectDefinedNotNull)(data.batch) ? data.batch.addDependency() : () => {
                return;
            };
            const url = yield (0,_utils_toabsoluteurl_js__WEBPACK_IMPORTED_MODULE_3__.toAbsoluteUrl)(o.toUrlAndQuery(), runtime);
            (0,_pnp_common__WEBPACK_IMPORTED_MODULE_2__.mergeOptions)(data.options, options);
            return operation(Object.assign({}, data, {
                batchDependency,
                url,
            }));
        });
    };
};
const spGet = (o, options) => {
    // Fix for #304 - when we clone objects we in some cases then execute a get request
    // in these cases the caching settings were getting dropped from the request
    // this tracks if the object from which this was cloned was caching and applies that to an immediate get request
    // does not affect objects cloned from this as we are using different fields to track the settings so it won't
    // be triggered
    if (o.data.cloneParentWasCaching) {
        o.usingCaching(o.data.cloneParentCacheOptions);
    }
    // if we are forcing caching set that in the data here
    if (o._forceCaching) {
        o.data.useCaching = true;
    }
    return send("GET")(o, options);
};
const spPost = (o, options) => send("POST")(o, options);
const spDelete = (o, options) => send("DELETE")(o, options);
const spPatch = (o, options) => send("PATCH")(o, options);
const spPostDelete = (o, options) => {
    const opts = Object.assign((0,_pnp_odata__WEBPACK_IMPORTED_MODULE_0__.headers)({ "X-HTTP-Method": "DELETE" }), options);
    return spPost(o, opts);
};
const spPostDeleteETag = (o, options, eTag = "*") => {
    const opts = Object.assign((0,_pnp_odata__WEBPACK_IMPORTED_MODULE_0__.headers)({ "X-HTTP-Method": "DELETE", "IF-Match": eTag }), options);
    return spPost(o, opts);
};
//# sourceMappingURL=operations.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/rest.js":
/*!**************************************!*\
  !*** ./node_modules/@pnp/sp/rest.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SPRest": () => /* binding */ SPRest,
/* harmony export */   "sp": () => /* binding */ sp
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _splibconfig_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splibconfig.js */ "./node_modules/@pnp/sp/splibconfig.js");



/**
 * Root of the SharePoint REST module
 */
class SPRest {
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    constructor(_options = {}, _baseUrl = "", _runtime = _pnp_common__WEBPACK_IMPORTED_MODULE_0__.DefaultRuntime) {
        this._options = _options;
        this._baseUrl = _baseUrl;
        this._runtime = _runtime;
    }
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    configure(options, baseUrl = "") {
        return new SPRest(options, baseUrl);
    }
    /**
     * Global SharePoint configuration options
     *
     * @param config The SharePoint configuration to apply
     */
    setup(config) {
        if (config.pageContext) {
            (0,_splibconfig_js__WEBPACK_IMPORTED_MODULE_1__.setup)({
                spfxContext: config,
            }, this._runtime);
        }
        else {
            (0,_splibconfig_js__WEBPACK_IMPORTED_MODULE_1__.setup)(config, this._runtime);
        }
    }
    createIsolated(init) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // merge our defaults
            init = Object.assign({
                baseUrl: "",
                cloneGlobal: true,
                config: {},
                options: {},
            }, init || {});
            const { baseUrl, cloneGlobal, options, config } = init;
            const runtime = cloneGlobal ? new _pnp_common__WEBPACK_IMPORTED_MODULE_0__.Runtime(_pnp_common__WEBPACK_IMPORTED_MODULE_0__.DefaultRuntime.export()) : new _pnp_common__WEBPACK_IMPORTED_MODULE_0__.Runtime();
            runtime.assign(config);
            return new SPRest(options, baseUrl, runtime);
        });
    }
    childConfigHook(callback) {
        return callback({ options: this._options, baseUrl: this._baseUrl, runtime: this._runtime });
    }
}
const sp = new SPRest();
//# sourceMappingURL=rest.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/sharepointqueryable.js":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/sharepointqueryable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spInvokableFactory": () => /* binding */ spInvokableFactory,
/* harmony export */   "_SharePointQueryable": () => /* binding */ _SharePointQueryable,
/* harmony export */   "SharePointQueryable": () => /* binding */ SharePointQueryable,
/* harmony export */   "_SharePointQueryableCollection": () => /* binding */ _SharePointQueryableCollection,
/* harmony export */   "SharePointQueryableCollection": () => /* binding */ SharePointQueryableCollection,
/* harmony export */   "_SharePointQueryableInstance": () => /* binding */ _SharePointQueryableInstance,
/* harmony export */   "SharePointQueryableInstance": () => /* binding */ SharePointQueryableInstance,
/* harmony export */   "deleteable": () => /* binding */ deleteable,
/* harmony export */   "deleteableWithETag": () => /* binding */ deleteableWithETag
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/odata */ "./node_modules/@pnp/odata/index.js");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/logging */ "./node_modules/@pnp/logging/index.js");
/* harmony import */ var _utils_metadata_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/metadata.js */ "./node_modules/@pnp/sp/utils/metadata.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operations.js */ "./node_modules/@pnp/sp/operations.js");
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./telemetry.js */ "./node_modules/@pnp/sp/telemetry.js");






const spInvokableFactory = (f) => {
    return (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.invokableFactory)(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
class _SharePointQueryable extends _pnp_odata__WEBPACK_IMPORTED_MODULE_1__.Queryable {
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param baseUrl A string or SharePointQueryable that should form the base part of the url
     *
     */
    constructor(baseUrl, path) {
        let url = "";
        let parentUrl = "";
        const query = new Map();
        if (typeof baseUrl === "string") {
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(baseUrl) || baseUrl.lastIndexOf("/") < 0) {
                parentUrl = baseUrl;
                url = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(baseUrl, path);
            }
            else if (baseUrl.lastIndexOf("/") > baseUrl.lastIndexOf("(")) {
                // .../items(19)/fields
                const index = baseUrl.lastIndexOf("/");
                parentUrl = baseUrl.slice(0, index);
                path = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(baseUrl.slice(index), path);
                url = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(parentUrl, path);
            }
            else {
                // .../items(19)
                const index = baseUrl.lastIndexOf("(");
                parentUrl = baseUrl.slice(0, index);
                url = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(baseUrl, path);
            }
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(parentUrl, path || "");
            const target = baseUrl.query.get("@target");
            if (target !== undefined) {
                query.set("@target", target);
            }
        }
        // init base with correct values for data seed
        super({
            parentUrl,
            query,
            url,
        });
        // post init actions
        if (typeof baseUrl !== "string") {
            this.configureFrom(baseUrl);
        }
        this._forceCaching = false;
    }
    /**
     * Gets the full url with query information
     */
    toUrlAndQuery() {
        const aliasedParams = new Map(this.query);
        let url = this.toUrl().replace(/'!(@.*?)::(.*?)'/ig, (match, labelName, value) => {
            _pnp_logging__WEBPACK_IMPORTED_MODULE_2__.Logger.write(`Rewriting aliased parameter from match ${match} to label: ${labelName} value: ${value}`, 0 /* Verbose */);
            aliasedParams.set(labelName, `'${value}'`);
            return labelName;
        });
        if (aliasedParams.size > 0) {
            const char = url.indexOf("?") > -1 ? "&" : "?";
            url += `${char}${Array.from(aliasedParams).map((v) => v[0] + "=" + v[1]).join("&")}`;
        }
        return url;
    }
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    select(...selects) {
        if (selects.length > 0) {
            this.query.set("$select", selects.map(encodeURIComponent).join(","));
        }
        return this;
    }
    get(options) {
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_4__.spGet)(this, options);
    }
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    expand(...expands) {
        if (expands.length > 0) {
            this.query.set("$expand", expands.map(encodeURIComponent).join(","));
        }
        return this;
    }
    /**
     * Clones this SharePointQueryable into a new SharePointQueryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     * @param includeQuery If true all of the query values will be copied to the cloned instance
     */
    clone(factory, additionalPath, includeBatch = true, includeQuery = false) {
        const clone = super.cloneTo(factory(this, additionalPath), { includeBatch, includeQuery });
        // handle sp specific clone actions
        if (!includeQuery) {
            // we would have already copied this over if we got the entire query
            const t = "@target";
            if (this.query.has(t)) {
                clone.query.set(t, this.query.get(t));
            }
        }
        return clone;
    }
    /**
     * The default action for this object (unless overridden spGet)
     *
     * @param options optional request options
     */
    defaultAction(options) {
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_4__.spGet)(this, options);
    }
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    getParent(factory, baseUrl = this.parentUrl, path, batch) {
        let parent = factory(baseUrl, path).configureFrom(this);
        const t = "@target";
        if (this.query.has(t)) {
            parent.query.set(t, this.query.get(t));
        }
        if (batch !== undefined) {
            parent = parent.inBatch(batch);
        }
        return parent;
    }
}
const SharePointQueryable = spInvokableFactory(_SharePointQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
class _SharePointQueryableCollection extends _SharePointQueryable {
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    filter(filter) {
        this.query.set("$filter", encodeURIComponent(filter));
        return this;
    }
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    orderBy(orderBy, ascending = true) {
        const o = "$orderby";
        const query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(`${encodeURIComponent(orderBy)} ${ascending ? "asc" : "desc"}`);
        this.query.set(o, query.join(","));
        return this;
    }
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    skip(skip) {
        this.query.set("$skip", skip.toString());
        return this;
    }
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    top(top) {
        this.query.set("$top", top.toString());
        return this;
    }
}
const SharePointQueryableCollection = spInvokableFactory(_SharePointQueryableCollection);
/**
 * Represents an instance that can be selected
 *
 */
class _SharePointQueryableInstance extends _SharePointQueryable {
    /**
     * Curries the update function into the common pieces
     *
     * @param type
     * @param mapper
     */
    _update(type, mapper) {
        return (props) => (0,_operations_js__WEBPACK_IMPORTED_MODULE_4__.spPost)(_telemetry_js__WEBPACK_IMPORTED_MODULE_5__.tag.configure(this, `${type}.Update`), {
            body: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.jsS)((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_3__.metadata)(type), props)),
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then((d) => mapper(d, props));
    }
}
const SharePointQueryableInstance = spInvokableFactory(_SharePointQueryableInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable(t) {
    return function () {
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_4__.spPostDelete)(_telemetry_js__WEBPACK_IMPORTED_MODULE_5__.tag.configure(this, `${t}.delete`));
    };
}
function deleteableWithETag(t) {
    return function (eTag = "*") {
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_4__.spPostDeleteETag)(_telemetry_js__WEBPACK_IMPORTED_MODULE_5__.tag.configure(this, `${t}.delete`), {}, eTag);
    };
}
//# sourceMappingURL=sharepointqueryable.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/sites/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/sites/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Site": () => /* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_1__.Site
/* harmony export */ });
/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rest.js */ "./node_modules/@pnp/sp/rest.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "./node_modules/@pnp/sp/sites/types.js");



Reflect.defineProperty(_rest_js__WEBPACK_IMPORTED_MODULE_0__.SPRest.prototype, "site", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return (0,_types_js__WEBPACK_IMPORTED_MODULE_1__.Site)(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/sites/types.js":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/sites/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_Site": () => /* binding */ _Site,
/* harmony export */   "Site": () => /* binding */ Site
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sharepointqueryable.js */ "./node_modules/@pnp/sp/sharepointqueryable.js");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators.js */ "./node_modules/@pnp/sp/decorators.js");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webs/types.js */ "./node_modules/@pnp/sp/webs/types.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/odata */ "./node_modules/@pnp/odata/index.js");
/* harmony import */ var _odata_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../odata.js */ "./node_modules/@pnp/sp/odata.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../operations.js */ "./node_modules/@pnp/sp/operations.js");
/* harmony import */ var _batch_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../batch.js */ "./node_modules/@pnp/sp/batch.js");
/* harmony import */ var _utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/escapeQueryStrValue.js */ "./node_modules/@pnp/sp/utils/escapeQueryStrValue.js");
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../telemetry.js */ "./node_modules/@pnp/sp/telemetry.js");
/* harmony import */ var _utils_metadata_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/metadata.js */ "./node_modules/@pnp/sp/utils/metadata.js");
/* harmony import */ var _utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/extractweburl.js */ "./node_modules/@pnp/sp/utils/extractweburl.js");
/* harmony import */ var _splibconfig_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../splibconfig.js */ "./node_modules/@pnp/sp/splibconfig.js");














let _Site = class _Site extends _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_0__._SharePointQueryableInstance {
    /**
     * Gets the root web of the site collection
     *
     */
    get rootWeb() {
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_9__.tag.configure((0,_webs_types_js__WEBPACK_IMPORTED_MODULE_2__.Web)(this, "rootweb"), "si.rootWeb");
    }
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    getChanges(query) {
        const postBody = (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_4__.body)({ "query": (0,_pnp_common__WEBPACK_IMPORTED_MODULE_3__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_10__.metadata)("SP.ChangeQuery"), query) });
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this.clone(_webs_types_js__WEBPACK_IMPORTED_MODULE_2__.Web, "getchanges"), postBody);
    }
    /**
     * Opens a web by id (using POST)
     *
     * @param webId The GUID id of the web to open
     */
    openWebById(webId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(this.clone(Site, `openWebById('${webId}')`));
            return {
                data,
                web: (0,_webs_types_js__WEBPACK_IMPORTED_MODULE_2__.Web)((0,_utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_11__.extractWebUrl)((0,_odata_js__WEBPACK_IMPORTED_MODULE_5__.odataUrlFrom)(data))),
            };
        });
    }
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    getRootWeb() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const web = yield this.rootWeb.select("Url")();
            return _telemetry_js__WEBPACK_IMPORTED_MODULE_9__.tag.configure((0,_webs_types_js__WEBPACK_IMPORTED_MODULE_2__.Web)(web.Url), "si.getRootWeb");
        });
    }
    /**
     * Gets the context information for this site collection
     */
    getContextInfo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const q = _telemetry_js__WEBPACK_IMPORTED_MODULE_9__.tag.configure(Site(this.parentUrl, "_api/contextinfo"), "si.getContextInfo");
            const data = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(q);
            if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_3__.hOP)(data, "GetContextWebInformation")) {
                const info = data.GetContextWebInformation;
                info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
                return info;
            }
            else {
                return data;
            }
        });
    }
    createBatch() {
        return new _batch_js__WEBPACK_IMPORTED_MODULE_7__.SPBatch(this.parentUrl, this.getRuntime());
    }
    /**
     * Deletes the current site
     *
     */
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const site = yield this.clone(Site, "").select("Id")();
            const q = _telemetry_js__WEBPACK_IMPORTED_MODULE_9__.tag.configure(Site(this.parentUrl, "_api/SPSiteManager/Delete"), "si.delete");
            yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(q, (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_4__.body)({ siteId: site.Id }));
        });
    }
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    getDocumentLibraries(absoluteWebUrl) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const q = _telemetry_js__WEBPACK_IMPORTED_MODULE_9__.tag.configure((0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SharePointQueryable)("", "_api/sp.web.getdocumentlibraries(@v)"), "si.getDocumentLibraries");
            q.query.set("@v", `'${(0,_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_8__.escapeQueryStrValue)(absoluteWebUrl)}'`);
            const data = yield q();
            return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_3__.hOP)(data, "GetDocumentLibraries") ? data.GetDocumentLibraries : data;
        });
    }
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    getWebUrlFromPageUrl(absolutePageUrl) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const q = _telemetry_js__WEBPACK_IMPORTED_MODULE_9__.tag.configure((0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_0__.SharePointQueryable)("", "_api/sp.web.getweburlfrompageurl(@v)"), "si.getWebUrlFromPageUrl");
            q.query.set("@v", `'${(0,_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_8__.escapeQueryStrValue)(absolutePageUrl)}'`);
            const data = yield q();
            return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_3__.hOP)(data, "GetWebUrlFromPageUrl") ? data.GetWebUrlFromPageUrl : data;
        });
    }
    /**
     * Creates a Modern communication site.
     *
     * @param title The title of the site to create
     * @param lcid The language to use for the site. If not specified will default to 1033 (English).
     * @param shareByEmailEnabled If set to true, it will enable sharing files via Email. By default it is set to false
     * @param url The fully qualified URL (e.g. https://yourtenant.sharepoint.com/sites/mysitecollection) of the site.
     * @param description The description of the communication site.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param siteDesignId The Guid of the site design to be used.
     *                     You can use the below default OOTB GUIDs:
     *                     Topic: 00000000-0000-0000-0000-000000000000
     *                     Showcase: 6142d2a0-63a5-4ba0-aede-d9fefca2c767
     *                     Blank: f6cc5403-0d63-442e-96c0-285923709ffc
     * @param hubSiteId The id of the hub site to which the new site should be associated
     * @param owner Optional owner value, required if executing the method in app only mode
     */
    createCommunicationSite(title, lcid = 1033, shareByEmailEnabled = false, url, description, classification, siteDesignId, hubSiteId, owner) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            return this.createCommunicationSiteFromProps({
                Classification: classification,
                Description: description,
                HubSiteId: hubSiteId,
                Lcid: lcid,
                Owner: owner,
                ShareByEmailEnabled: shareByEmailEnabled,
                SiteDesignId: siteDesignId,
                Title: title,
                Url: url,
            });
        });
    }
    createCommunicationSiteFromProps(props) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            // handle defaults
            const p = Object.assign({}, {
                Classification: "",
                Description: "",
                HubSiteId: _splibconfig_js__WEBPACK_IMPORTED_MODULE_12__.emptyGuid,
                Lcid: 1033,
                ShareByEmailEnabled: false,
                SiteDesignId: _splibconfig_js__WEBPACK_IMPORTED_MODULE_12__.emptyGuid,
                WebTemplate: "SITEPAGEPUBLISHING#0",
                WebTemplateExtensionId: _splibconfig_js__WEBPACK_IMPORTED_MODULE_12__.emptyGuid,
            }, props);
            const postBody = (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_4__.body)({
                "request": (0,_pnp_common__WEBPACK_IMPORTED_MODULE_3__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_10__.metadata)("Microsoft.SharePoint.Portal.SPSiteCreationRequest"), p),
            });
            return (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(Site((0,_utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_11__.extractWebUrl)(this.toUrl()), "/_api/SPSiteManager/Create"), postBody);
        });
    }
    /**
     *
     * @param url Site Url that you want to check if exists
     */
    exists(url) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            const postBody = (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_4__.body)({ url });
            const value = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(Site((0,_utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_11__.extractWebUrl)(this.toUrl()), "/_api/SP.Site.Exists"), postBody);
            return value;
        });
    }
    /**
     * Creates a Modern team site backed by Office 365 group. For use in SP Online only. This will not work with App-only tokens
     *
     * @param displayName The title or display name of the Modern team site to be created
     * @param alias Alias of the underlying Office 365 Group
     * @param isPublic Defines whether the Office 365 Group will be public (default), or private.
     * @param lcid The language to use for the site. If not specified will default to English (1033).
     * @param description The description of the site to be created.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param owners The Owners of the site to be created
     */
    createModernTeamSite(displayName, alias, isPublic, lcid, description, classification, owners, hubSiteId, siteDesignId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            return this.createModernTeamSiteFromProps({
                alias,
                classification,
                description,
                displayName,
                hubSiteId,
                isPublic,
                lcid,
                owners,
                siteDesignId,
            });
        });
    }
    createModernTeamSiteFromProps(props) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            // handle defaults
            const p = Object.assign({}, {
                classification: "",
                description: "",
                hubSiteId: _splibconfig_js__WEBPACK_IMPORTED_MODULE_12__.emptyGuid,
                isPublic: true,
                lcid: 1033,
                owners: [],
            }, props);
            const postBody = {
                alias: p.alias,
                displayName: p.displayName,
                isPublic: p.isPublic,
                optionalParams: {
                    Classification: p.classification,
                    CreationOptions: {
                        "results": [`SPSiteLanguage:${p.lcid}`, `HubSiteId:${p.hubSiteId}`],
                    },
                    Description: p.description,
                    Owners: {
                        "results": p.owners,
                    },
                },
            };
            if (p.siteDesignId) {
                postBody.optionalParams.CreationOptions.results.push(`implicit_formula_292aa8a00786498a87a5ca52d9f4214a_${p.siteDesignId}`);
            }
            return (0,_operations_js__WEBPACK_IMPORTED_MODULE_6__.spPost)(Site((0,_utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_11__.extractWebUrl)(this.toUrl()), "/_api/GroupSiteManager/CreateGroupEx"), (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_4__.body)(postBody));
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_9__.tag)("si.getChanges")
], _Site.prototype, "getChanges", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_9__.tag)("si.openWebById")
], _Site.prototype, "openWebById", null);
_Site = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_1__.defaultPath)("_api/site")
], _Site);

const Site = (0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_0__.spInvokableFactory)(_Site);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/sphttpclient.js":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/sphttpclient.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SPHttpClient": () => /* binding */ SPHttpClient
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/extractweburl.js */ "./node_modules/@pnp/sp/utils/extractweburl.js");
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./telemetry.js */ "./node_modules/@pnp/sp/telemetry.js");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/odata */ "./node_modules/@pnp/odata/index.js");





class SPHttpClient {
    constructor(...args) {
        // constructor(...args: [runtime: Runtime] | [impl: IHttpClientImpl, runtime?: Runtime]) {
        var _a;
        if (args[0] instanceof _pnp_common__WEBPACK_IMPORTED_MODULE_0__.Runtime) {
            this._runtime = args[0];
        }
        else {
            this._runtime = args.length > 1 && args[1] instanceof _pnp_common__WEBPACK_IMPORTED_MODULE_0__.Runtime ? args[1] : _pnp_common__WEBPACK_IMPORTED_MODULE_0__.DefaultRuntime;
            this._impl = args[0];
        }
        this._impl = ((_a = this._runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.fetchClientFactory()) || null;
        if (this._impl === null) {
            throw Error("Could not generate fetchClientFactory in SPHttpClient.");
        }
        this._digestCache = getDigestFactory(this);
    }
    fetch(url, options = {}) {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let opts = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(options, { cache: "no-cache", credentials: "same-origin" }, true);
            const headers = new Headers();
            // first we add the global headers so they can be overwritten by any passed in locally to this call
            (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.mergeHeaders)(headers, (_b = (_a = this._runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.sp) === null || _b === void 0 ? void 0 : _b.headers);
            // second we add the local options so we can overwrite the globals
            (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.mergeHeaders)(headers, options.headers);
            // lastly we apply any default headers we need that may not exist
            if (!headers.has("Accept")) {
                headers.append("Accept", "application/json");
            }
            if (!headers.has("Content-Type")) {
                headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
            }
            if (!headers.has("X-ClientService-ClientTag")) {
                const methodName = _telemetry_js__WEBPACK_IMPORTED_MODULE_2__.tag.getClientTag(headers);
                let clientTag = `PnPCoreJS:2.1.0:${methodName}`;
                if (clientTag.length > 32) {
                    clientTag = clientTag.substr(0, 32);
                }
                headers.append("X-ClientService-ClientTag", clientTag);
            }
            opts = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(opts, { headers: headers });
            // if we have either a request digest or an authorization header we don't need a digest
            if (opts.method && opts.method.toUpperCase() !== "GET" && !headers.has("X-RequestDigest") && !headers.has("Authorization")) {
                const digest = yield this._digestCache((0,_utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_1__.extractWebUrl)(url));
                headers.append("X-RequestDigest", digest);
            }
            return this.fetchRaw(url, opts);
        });
    }
    fetchRaw(url, options = {}) {
        // here we need to normalize the headers
        const rawHeaders = new Headers();
        (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.mergeHeaders)(rawHeaders, options.headers);
        options = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(options, { headers: rawHeaders });
        const retry = (ctx) => {
            // handles setting the proper timeout for a retry
            const setRetry = (response) => {
                let delay;
                if (response.headers.has("Retry-After")) {
                    // if we have gotten a header, use that value as the delay value in seconds
                    delay = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                }
                else {
                    // grab our current delay
                    delay = ctx.delay;
                    // Increment our counters.
                    ctx.delay *= 2;
                }
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    ctx.reject(Error(`Retry count exceeded (${ctx.retryCount}) for request. Response status: [${response.status}] ${response.statusText}`));
                }
                else {
                    // Set our retry timeout for {delay} milliseconds.
                    setTimeout((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.getCtxCallback)(this, retry, ctx), delay);
                }
            };
            // send the actual request
            this._impl.fetch(url, options).then((response) => {
                if (response.status === 429) {
                    // we have been throttled
                    setRetry(response);
                }
                else {
                    ctx.resolve(response);
                }
            }).catch((response) => {
                if (response.status === 503 || response.status === 504) {
                    // http status code 503 or 504, we can retry this
                    setRetry(response);
                }
                else {
                    ctx.reject(response);
                }
            });
        };
        return new Promise((resolve, reject) => {
            retry.call(this, {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            });
        });
    }
    get(url, options = {}) {
        const opts = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(options, { method: "GET" });
        return this.fetch(url, opts);
    }
    post(url, options = {}) {
        const opts = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(options, { method: "POST" });
        return this.fetch(url, opts);
    }
    patch(url, options = {}) {
        const opts = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(options, { method: "PATCH" });
        return this.fetch(url, opts);
    }
    delete(url, options = {}) {
        const opts = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(options, { method: "DELETE" });
        return this.fetch(url, opts);
    }
}
// allows for the caching of digests across all HttpClient's which each have their own DigestCache wrapper.
const digests = new Map();
function getDigestFactory(client) {
    return (webUrl) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        var _a, _b;
        const cachedDigest = digests.get(webUrl);
        if (cachedDigest !== undefined) {
            const now = new Date();
            if (now < cachedDigest.expiration) {
                return cachedDigest.value;
            }
        }
        const url = (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(webUrl, "/_api/contextinfo");
        const headers = {
            "Accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose;charset=utf-8",
        };
        const resp = yield client.fetchRaw(url, {
            cache: "no-cache",
            credentials: "same-origin",
            headers: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)(headers, (_b = (_a = client._runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.sp) === null || _b === void 0 ? void 0 : _b.headers, true),
            method: "POST",
        });
        const parsed = yield (new _pnp_odata__WEBPACK_IMPORTED_MODULE_3__.ODataParser()).parse(resp).then(r => r.GetContextWebInformation);
        const newCachedDigest = {
            expiration: (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.dateAdd)(new Date(), "second", parsed.FormDigestTimeoutSeconds),
            value: parsed.FormDigestValue,
        };
        digests.set(webUrl, newCachedDigest);
        return newCachedDigest.value;
    });
}
//# sourceMappingURL=sphttpclient.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/splibconfig.js":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/splibconfig.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyGuid": () => /* binding */ emptyGuid,
/* harmony export */   "setup": () => /* binding */ setup
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");

const emptyGuid = "00000000-0000-0000-0000-000000000000";
(0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.onRuntimeCreate)((runtime) => {
    const existing = runtime.get("sp");
    const spPart = Object.assign({}, {
        fetchClientFactory: () => new _pnp_common__WEBPACK_IMPORTED_MODULE_0__.FetchClient(),
    }, existing);
    runtime.assign({ sp: spPart });
});
function setup(config, runtime = _pnp_common__WEBPACK_IMPORTED_MODULE_0__.DefaultRuntime) {
    runtime.assign(config);
}
//# sourceMappingURL=splibconfig.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/telemetry.js":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/telemetry.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tag": () => /* binding */ tag
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/odata */ "./node_modules/@pnp/odata/index.js");



/**
 * Includes this method name in the X-ClientService-ClientTag used to record pnpjs usage
 *
 * @param name Method name, displayed in the
 */
function tag(name) {
    return function (target, key, descriptor) {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                this.configure((0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.headers)({ "X-PnPjs-Tracking": name }));
                return originalMethod.apply(this, args);
            });
        };
        return descriptor;
    };
}
tag.getClientTag = (h, deleteFromCollection = true) => {
    if (h.has("X-PnPjs-Tracking")) {
        const methodName = h.get("X-PnPjs-Tracking");
        if (deleteFromCollection) {
            h.delete("X-PnPjs-Tracking");
        }
        if (!(0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(methodName)) {
            return methodName;
        }
    }
    return "";
};
tag.configure = (o, name) => {
    return o.configure((0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.headers)({ "X-PnPjs-Tracking": name }));
};
tag.isTagged = (o) => {
    return o.data.options.headers && o.data.options.headers["X-PnPjs-Tracking"];
};
//# sourceMappingURL=telemetry.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/utils/escapeQueryStrValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/escapeQueryStrValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "escapeQueryStrValue": () => /* binding */ escapeQueryStrValue
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _pnp_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/logging */ "./node_modules/@pnp/logging/index.js");


function escapeQueryStrValue(value) {
    if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        // to ensure our param aliasing still works we need to treat these special or we'll hear about it
        // so we encode JUST the part that will end up in the url
        return value.replace(/!(@.*?)::(.*)$/ig, (match, labelName, v) => {
            _pnp_logging__WEBPACK_IMPORTED_MODULE_1__.Logger.write(`Rewriting aliased parameter from match ${match} to label: ${labelName} value: ${v}`, 0 /* Verbose */);
            return `!${labelName}::${encodeURIComponent(v.replace(/'/ig, "''"))}`;
        });
    }
    else {
        return encodeURIComponent(value.replace(/'/ig, "''"));
    }
}
//# sourceMappingURL=escapeQueryStrValue.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/utils/extractweburl.js":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/extractweburl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractWebUrl": () => /* binding */ extractWebUrl
/* harmony export */ });
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");

function extractWebUrl(candidateUrl) {
    if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(candidateUrl)) {
        return "";
    }
    let index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substr(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
//# sourceMappingURL=extractweburl.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/utils/metadata.js":
/*!************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/metadata.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "metadata": () => /* binding */ metadata
/* harmony export */ });
function metadata(type) {
    return {
        "__metadata": { "type": type },
    };
}
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/utils/toResourcePath.js":
/*!******************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/toResourcePath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toResourcePath": () => /* binding */ toResourcePath
/* harmony export */ });
function toResourcePath(url) {
    return {
        DecodedUrl: url,
        __metadata: { type: "SP.ResourcePath" },
    };
}
//# sourceMappingURL=toResourcePath.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/utils/toabsoluteurl.js":
/*!*****************************************************!*\
  !*** ./node_modules/@pnp/sp/utils/toabsoluteurl.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toAbsoluteUrl": () => /* binding */ toAbsoluteUrl
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");


/**
 * Ensures that a given url is absolute for the current web based on context
 *
 * @param candidateUrl The url to make absolute
 *
 */
function toAbsoluteUrl(candidateUrl, runtime = _pnp_common__WEBPACK_IMPORTED_MODULE_0__.DefaultRuntime) {
    var _a, _b;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
        if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.isUrlAbsolute)(candidateUrl)) {
            // if we are already absolute, then just return the url
            return candidateUrl;
        }
        const baseUrl = (_a = runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.baseUrl;
        const fetchClientFactory = (_b = runtime.get("sp")) === null || _b === void 0 ? void 0 : _b.fetchClientFactory;
        if (!(0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.stringIsNullOrEmpty)(baseUrl)) {
            // base url specified either with baseUrl of spfxContext config property
            return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(baseUrl, candidateUrl);
        }
        // use a passed context if provided, if not see if we get one from the current runtime
        const context = runtime.get("spfxContext");
        if (context) {
            return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(context.pageContext.web.absoluteUrl, candidateUrl);
        }
        // to make the existing node client work in a backwards compatible way we do the following (hacky thing)
        // get the client
        // see if it has a siteUrl property
        // use that to absolute the url
        if (fetchClientFactory) {
            const tempClient = fetchClientFactory();
            if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(tempClient, "siteUrl")) {
                return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(tempClient.siteUrl, candidateUrl);
            }
        }
        if (_pnp_common__WEBPACK_IMPORTED_MODULE_0__.safeGlobal._spPageContextInfo !== undefined) {
            // operating in classic pages
            if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(_pnp_common__WEBPACK_IMPORTED_MODULE_0__.safeGlobal._spPageContextInfo, "webAbsoluteUrl")) {
                return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(_pnp_common__WEBPACK_IMPORTED_MODULE_0__.safeGlobal._spPageContextInfo.webAbsoluteUrl, candidateUrl);
            }
            else if ((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.hOP)(_pnp_common__WEBPACK_IMPORTED_MODULE_0__.safeGlobal._spPageContextInfo, "webServerRelativeUrl")) {
                return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(_pnp_common__WEBPACK_IMPORTED_MODULE_0__.safeGlobal._spPageContextInfo.webServerRelativeUrl, candidateUrl);
            }
        }
        // does window.location exist and have a certain path part in it?
        if (_pnp_common__WEBPACK_IMPORTED_MODULE_0__.safeGlobal.location !== undefined) {
            const location = _pnp_common__WEBPACK_IMPORTED_MODULE_0__.safeGlobal.location.toString().toLowerCase();
            ["/_layouts/", "/siteassets/", "/sitepages/"].forEach((s) => {
                const index = location.indexOf(s);
                if (index > 0) {
                    return (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.combine)(location.substr(0, index), candidateUrl);
                }
            });
        }
        return candidateUrl;
    });
}
//# sourceMappingURL=toabsoluteurl.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/webs/index.js":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Web": () => /* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_0__.Web,
/* harmony export */   "Webs": () => /* reexport safe */ _types_js__WEBPACK_IMPORTED_MODULE_0__.Webs
/* harmony export */ });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "./node_modules/@pnp/sp/webs/types.js");
/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.js */ "./node_modules/@pnp/sp/rest.js");



Reflect.defineProperty(_rest_js__WEBPACK_IMPORTED_MODULE_1__.SPRest.prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(({ options, baseUrl, runtime }) => {
            return (0,_types_js__WEBPACK_IMPORTED_MODULE_0__.Web)(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
_rest_js__WEBPACK_IMPORTED_MODULE_1__.SPRest.prototype.createBatch = function () {
    return this.web.createBatch();
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@pnp/sp/webs/types.js":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/webs/types.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_Webs": () => /* binding */ _Webs,
/* harmony export */   "Webs": () => /* binding */ Webs,
/* harmony export */   "_Web": () => /* binding */ _Web,
/* harmony export */   "Web": () => /* binding */ Web
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/common */ "./node_modules/@pnp/common/index.js");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/odata */ "./node_modules/@pnp/odata/index.js");
/* harmony import */ var _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharepointqueryable.js */ "./node_modules/@pnp/sp/sharepointqueryable.js");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../decorators.js */ "./node_modules/@pnp/sp/decorators.js");
/* harmony import */ var _odata_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../odata.js */ "./node_modules/@pnp/sp/odata.js");
/* harmony import */ var _batch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../batch.js */ "./node_modules/@pnp/sp/batch.js");
/* harmony import */ var _utils_metadata_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/metadata.js */ "./node_modules/@pnp/sp/utils/metadata.js");
/* harmony import */ var _sites_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sites/index.js */ "./node_modules/@pnp/sp/sites/index.js");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../operations.js */ "./node_modules/@pnp/sp/operations.js");
/* harmony import */ var _utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/escapeQueryStrValue.js */ "./node_modules/@pnp/sp/utils/escapeQueryStrValue.js");
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../telemetry.js */ "./node_modules/@pnp/sp/telemetry.js");












let _Webs = class _Webs extends _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SharePointQueryableCollection {
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    add(title, url, description = "", template = "STS", language = 1033, inheritPermissions = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const postBody = (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)({
                "parameters": (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_6__.metadata)("SP.WebCreationInformation"), {
                    Description: description,
                    Language: language,
                    Title: title,
                    Url: url,
                    UseSamePermissionsAsParentSite: inheritPermissions,
                    WebTemplate: template,
                }),
            });
            const data = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_8__.spPost)(this.clone(Webs, "add"), postBody);
            return {
                data,
                web: Web((0,_odata_js__WEBPACK_IMPORTED_MODULE_4__.odataUrlFrom)(data).replace(/_api\/web\/?/i, "")),
            };
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag)("ws.add")
], _Webs.prototype, "add", null);
_Webs = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_3__.defaultPath)("webs")
], _Webs);

const Webs = (0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Webs);
/**
 * Describes a web
 *
 */
let _Web = class _Web extends _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__._SharePointQueryableInstance {
    constructor() {
        super(...arguments);
        this.delete = (0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.deleteable)("w");
    }
    /**
     * Gets this web's subwebs
     *
     */
    get webs() {
        return Webs(this);
    }
    /**
     * Allows access to the web's all properties collection
     */
    get allProperties() {
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag.configure(this.clone(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SharePointQueryableInstance, "allproperties"), "w.allprops");
    }
    /**
     * Gets a collection of WebInfos for this web's subwebs
     *
     */
    get webinfos() {
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag.configure((0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SharePointQueryableCollection)(this, "webinfos"), "w.webinfos");
    }
    /**
     * Gets this web's parent web and data
     *
     */
    getParentWeb() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const { ParentWeb } = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_8__.spGet)(this.select("ParentWeb/Id").expand("ParentWeb"));
            return (ParentWeb === null || ParentWeb === void 0 ? void 0 : ParentWeb.Id) ? (0,_sites_index_js__WEBPACK_IMPORTED_MODULE_7__.Site)(this.parentUrl).openWebById(ParentWeb.Id) : null;
        });
    }
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    update(properties) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const postBody = (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)((0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_6__.metadata)("SP.Web"), properties), (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.headers)({ "X-HTTP-Method": "MERGE" }));
            const data = yield (0,_operations_js__WEBPACK_IMPORTED_MODULE_8__.spPost)(this, postBody);
            return { data, web: this };
        });
    }
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        const postBody = (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)({
            backgroundImageUrl,
            colorPaletteUrl,
            fontSchemeUrl,
            shareGenerated,
        });
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_8__.spPost)(this.clone(Web, "applytheme"), postBody);
    }
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    applyWebTemplate(template) {
        const q = this.clone(Web, "applywebtemplate");
        q.concat(`(webTemplate='${(0,_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_9__.escapeQueryStrValue)(template)}')`);
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_8__.spPost)(q);
    }
    /**
         * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
         *
         * @param query The change query
         */
    getChanges(query) {
        const postBody = (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)({ "query": (0,_pnp_common__WEBPACK_IMPORTED_MODULE_0__.assign)((0,_utils_metadata_js__WEBPACK_IMPORTED_MODULE_6__.metadata)("SP.ChangeQuery"), query) });
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_8__.spPost)(this.clone(Web, "getchanges"), postBody);
    }
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    mapToIcon(filename, size = 0, progId = "") {
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_8__.spGet)(this.clone(Web, `maptoicon(filename='${(0,_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_9__.escapeQueryStrValue)(filename)}', progid='${(0,_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_9__.escapeQueryStrValue)(progId)}', size=${size})`));
    }
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    getStorageEntity(key) {
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_8__.spGet)(this.clone(Web, `getStorageEntity('${(0,_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_9__.escapeQueryStrValue)(key)}')`));
    }
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    setStorageEntity(key, value, description = "", comments = "") {
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_8__.spPost)(this.clone(Web, "setStorageEntity"), (0,_pnp_odata__WEBPACK_IMPORTED_MODULE_1__.body)({
            comments,
            description,
            key,
            value,
        }));
    }
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    removeStorageEntity(key) {
        return (0,_operations_js__WEBPACK_IMPORTED_MODULE_8__.spPost)(this.clone(Web, `removeStorageEntity('${(0,_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_9__.escapeQueryStrValue)(key)}')`));
    }
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    getSubwebsFilteredForCurrentUser(nWebTemplateFilter = -1, nConfigurationFilter = -1) {
        const o = this.clone(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SharePointQueryableCollection, `getSubwebsFilteredForCurrentUser(nWebTemplateFilter=${nWebTemplateFilter},nConfigurationFilter=${nConfigurationFilter})`);
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag.configure(o, "w.getSubwebsFilteredForCurrentUser");
    }
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    createBatch() {
        return new _batch_js__WEBPACK_IMPORTED_MODULE_5__.SPBatch(this.parentUrl, this.getRuntime());
    }
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    availableWebTemplates(language = 1033, includeCrossLanugage = true) {
        const path = `getavailablewebtemplates(lcid=${language}, doincludecrosslanguage=${includeCrossLanugage})`;
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag.configure((0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.SharePointQueryableCollection)(this, path), "w.availableWebTemplates");
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag)("w.getParentWeb")
], _Web.prototype, "getParentWeb", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag)("w.update")
], _Web.prototype, "update", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag)("w.applyTheme")
], _Web.prototype, "applyTheme", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag)("w.applyWebTemplate")
], _Web.prototype, "applyWebTemplate", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag)("w.getChanges")
], _Web.prototype, "getChanges", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag)("w.mapToIcon")
], _Web.prototype, "mapToIcon", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag)("w.getStorageEntity")
], _Web.prototype, "getStorageEntity", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag)("w.setStorageEntity")
], _Web.prototype, "setStorageEntity", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_telemetry_js__WEBPACK_IMPORTED_MODULE_10__.tag)("w.removeStorageEntity")
], _Web.prototype, "removeStorageEntity", null);
_Web = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_decorators_js__WEBPACK_IMPORTED_MODULE_3__.defaultPath)("_api/web")
], _Web);

const Web = (0,_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__.spInvokableFactory)(_Web);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./src/useListItems/index.tsx":
/*!************************************!*\
  !*** ./src/useListItems/index.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./useListItems.hook */ "./src/useListItems/useListItems.hook.tsx"), exports);
__exportStar(__webpack_require__(/*! ./useListItems.hoc */ "./src/useListItems/useListItems.hoc.tsx"), exports);


/***/ }),

/***/ "./src/useListItems/useListItems.core.tsx":
/*!************************************************!*\
  !*** ./src/useListItems/useListItems.core.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.executeCAMLQuery = exports.getCAMLQuery = void 0;
var defaultQuery = "<View>\n\t<ViewFields>\n\t\t{ViewFields}\n\t</ViewFields>\n\t<RowLimit>{RowLimit}</RowLimit>\n\t<Query>\n\t\t{Query}\n\t</Query>\n</View>";
var trimAll = function (str) { return str.replace(/\s/g, ""); };
function getCAMLQuery(viewFields, rowLimit, where) {
    var vf = viewFields.map(function (v) { return "<FieldRef Name=\"" + v + "\"/>"; }).join("");
    var viewXML = trimAll(defaultQuery.replace("{RowLimit}", "" + (rowLimit || "")))
        .replace("{ViewFields}", vf)
        .replace("{Query}", where);
    return {
        ViewXml: viewXML,
    };
}
exports.getCAMLQuery = getCAMLQuery;
function executeCAMLQuery(spAdapter, listURl, query) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, spAdapter.web.getList(listURl).getItemsByCAMLQuery(query)];
        });
    });
}
exports.executeCAMLQuery = executeCAMLQuery;


/***/ }),

/***/ "./src/useListItems/useListItems.hoc.tsx":
/*!***********************************************!*\
  !*** ./src/useListItems/useListItems.hoc.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UseListItems = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var useListItems_core_1 = __webpack_require__(/*! ./useListItems.core */ "./src/useListItems/useListItems.core.tsx");
var UseListItems = (function (_super) {
    __extends(UseListItems, _super);
    function UseListItems(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            items: [],
            isLoading: true,
            error: null,
        };
        return _this;
    }
    UseListItems.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, useListItems_core_1.executeCAMLQuery(this.props.spRestAdapter, this.props.url, useListItems_core_1.getCAMLQuery(this.props.viewfields, this.props.rowlimit, this.props.where))];
                    case 1:
                        result_1 = _a.sent();
                        this.setState(function () { return ({
                            isLoading: false,
                            items: result_1,
                        }); });
                        return [3, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.setState(function () { return ({
                            isLoading: false,
                            error: err_1,
                        }); });
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    UseListItems.prototype.render = function () {
        return this.props.component(this.state.items, this.state.isLoading, this.state.error);
    };
    UseListItems.defaultProps = {
        viewfields: [],
        rowlimit: 0,
        where: "",
    };
    return UseListItems;
}(React.PureComponent));
exports.UseListItems = UseListItems;


/***/ }),

/***/ "./src/useListItems/useListItems.hook.tsx":
/*!************************************************!*\
  !*** ./src/useListItems/useListItems.hook.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useListItems = void 0;
var react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
__webpack_require__(/*! @pnp/sp/webs */ "./node_modules/@pnp/sp/webs/index.js");
__webpack_require__(/*! @pnp/sp/lists */ "./node_modules/@pnp/sp/lists/index.js");
var useListItems_core_1 = __webpack_require__(/*! ./useListItems.core */ "./src/useListItems/useListItems.core.tsx");
function useListItems(spRest, url, viewfields, rowlimit, where) {
    if (viewfields === void 0) { viewfields = []; }
    if (rowlimit === void 0) { rowlimit = 0; }
    if (where === void 0) { where = ""; }
    var _a = react_1.useState([]), items = _a[0], setItems = _a[1];
    var _b = react_1.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    react_1.useEffect(function () {
        var isUnmounted = false;
        function handleItemsResponse(items) {
            if (isUnmounted)
                return;
            setItems(items);
            setIsLoading(false);
        }
        function handleCatchError(err) {
            if (isUnmounted)
                return;
            setError(err);
            setIsLoading(false);
        }
        useListItems_core_1.executeCAMLQuery(spRest, url, useListItems_core_1.getCAMLQuery(viewfields, rowlimit, where))
            .then(handleItemsResponse)
            .catch(handleCatchError);
        return function () {
            isUnmounted = true;
        };
    }, [url, rowlimit, viewfields, where]);
    return { items: items, isLoading: isLoading, error: error };
}
exports.useListItems = useListItems;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/useListItems/index.tsx");
/******/ })()
;
//# sourceMappingURL=useListItems.js.map