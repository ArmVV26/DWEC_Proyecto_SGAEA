// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1Fqy1":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gLLPy":[function(require,module,exports,__globalThis) {
/**
 * @file ## SISTEMA DE GESTIÓN ACADÉMICA DE ESTUDIANTES Y ASIGNATURAS (SGAEA)
 * 
 * En este proyecto se gestiona los datos académicos de estudiantes y asignaturas, proporcionando:
 * 
 * - Matriculación y desmatriculación.
 * - Cálculo de promedios de calificaciones.
 * - Búsquedas avanzadas de Estudiantes y Asignaturas. 
 * 
 * ### Autor
 * **Armando Vaquero Vargas**
 * 
 * - **Curso:** 2º DAW
 * - **Fecha:** 10/12/2024
 * - **Github:** {@link https://github.com/ArmVV26/DWEC_Proyecto_SGAEA}
 */ /*
    ┌─────────────┐
    │ C L A S E S │
    └─────────────┘
    * En esta sección se definen las clases usadas en el proyecto. Cada clase contiene sus atributos,
        constructores y métodos.
*/ var _direccionJs = require("./Direccion.js");
var _personaJs = require("./Persona.js");
var _asignaturaJs = require("./Asignatura.js");
var _estudianteJs = require("./Estudiante.js");
var _listaJs = require("./Lista.js");
/*
    FUNCIONES MENÚ
    ──────────────
    * Sección donde se encuentran importadas las diferentes funciones necesarias para la ejecución del código.    
*/ var _menusJs = require("./Menus.js");
/*
    ┌─────────────────────────────────┐
    │ C Ó D I G O   P R I N C I P A L │
    └─────────────────────────────────┘
    * En esta sección se encuentra el código principal que se ejecuta al cargar el srcipt.
*/ /*
    AÑADIR DATOS
    ────────────
    * Aqui añado datos para probar la funcionalidades de las clases, sin la necesidad de crear todo el
        rato Estudiantes, Asignaturas, etc.
*/ //Creacion de las Direcciones.
const dir1 = new (0, _direccionJs.Direccion)("Calle Una", 1, 0, 10000, "Granada", "Pulianas");
const dir2 = new (0, _direccionJs.Direccion)("Calle Dos", 2, 1, 20000, "Granada", "Pulianas");
const dir3 = new (0, _direccionJs.Direccion)("Calle Tres", 3, 2, 30000, "Granada", "Pulianas");
const dir4 = new (0, _direccionJs.Direccion)("Calle Cuatro", 4, 3, 40000, "Granada", "Pulianas");
const dir5 = new (0, _direccionJs.Direccion)("Calle Cinco", 5, 4, 50000, "Granada", "Pulianas");
const dir6 = new (0, _direccionJs.Direccion)("Calle Seis", 6, 5, 60000, "Granada", "Pulianas");
// Creación de las Asignaturas.
const DAWEB = new (0, _asignaturaJs.Asignatura)("DAWEB");
const DWESE = new (0, _asignaturaJs.Asignatura)("DWESE");
const DWECL = new (0, _asignaturaJs.Asignatura)("DWECL");
const DIWEB = new (0, _asignaturaJs.Asignatura)("DIWEB");
const IAB = new (0, _asignaturaJs.Asignatura)("IAB");
// Creación de los Estudiantes.
const armando = new (0, _estudianteJs.Estudiante)("Armando Vaquero", 23, dir1);
const antonio = new (0, _estudianteJs.Estudiante)("Antonio Fernandez", 31, dir2);
const marcos = new (0, _estudianteJs.Estudiante)("Marcos Pineda", 22, dir3);
const andrea = new (0, _estudianteJs.Estudiante)("Andrea Lopez", 21, dir4);
const claudia = new (0, _estudianteJs.Estudiante)("Claudia Perez", 26, dir5);
const jose = new (0, _estudianteJs.Estudiante)("Jose Campos", 28, dir6);
// Creación de la Lista.
const lista = new (0, _listaJs.Lista)();
// Agregar Estudiantes
lista.agregarEstudiante(armando);
lista.agregarEstudiante(antonio);
lista.agregarEstudiante(marcos);
lista.agregarEstudiante(andrea);
lista.agregarEstudiante(claudia);
lista.agregarEstudiante(jose);
// Agregar Asignaturas
lista.agregarAsignatura(DAWEB);
lista.agregarAsignatura(DWESE);
lista.agregarAsignatura(DWECL);
lista.agregarAsignatura(DIWEB);
lista.agregarAsignatura(IAB);
// Matriculaciones
armando.matricular(DAWEB, DWESE, IAB);
antonio.matricular(DAWEB, DWESE, IAB);
marcos.matricular(DWECL, DIWEB, IAB);
andrea.matricular(DWECL, DIWEB, IAB);
claudia.matricular(DWESE, DAWEB, IAB);
jose.matricular(DWESE, DWECL, IAB);
// Desmatriculaciones
armando.desmatricular(IAB);
antonio.desmatricular(DWESE);
marcos.desmatricular(DWECL);
andrea.desmatricular(DIWEB);
claudia.desmatricular(DAWEB);
jose.desmatricular(IAB);
// Añadir Calificaciones
armando.agregarCalificacion(DAWEB, 7.5);
armando.agregarCalificacion(DAWEB, 9);
armando.agregarCalificacion(DWESE, 10);
antonio.agregarCalificacion(DAWEB, 8);
antonio.agregarCalificacion(IAB, 6);
antonio.agregarCalificacion(IAB, 9);
marcos.agregarCalificacion(DIWEB, 10);
marcos.agregarCalificacion(DIWEB, 9);
andrea.agregarCalificacion(DWECL, 6);
andrea.agregarCalificacion(DWECL, 8);
claudia.agregarCalificacion(DWESE, 10);
claudia.agregarCalificacion(IAB, 7);
claudia.agregarCalificacion(IAB, 9);
jose.agregarCalificacion(DWECL, 4);
jose.agregarCalificacion(DWECL, 8);
/**
 * @function
 * @description
 * Menú Principal del Sistema de Gestión Académica.
 * Este menú permite al usuario realizar las siguientes operaciones sobre los estudiantes y asignaturas:
 * - Agregar Estudiantes / Asignaturas.
 * - Eliminar Estudiantes / Asignaturas.
 * - Matricular al Estudiante.
 * - Desmatricular al Estudiante.
 * - Añadir calificaciones al Estudiante en una Asignatura.
 * - Mostrar historial del Estudiante.
 * - Buscar un Estudiante o Asignatura por un patrón.
 * 
 * 
 * @returns {void} No devuelve ningun valor.
 */ function menuPrincipal() {
    let salir = false;
    while(!salir){
        console.log("Men\xfa Principal: \n1. Agregar Estudiante / Asignatura \n2. Eliminar Estudiante / Asignatura \n3. Mostrar Estudiantes / Asignaturas \n4. Matricular Estudiante \n5. Desmatricular Estudiante \n6. A\xf1adir Calificaci\xf3n \n7. Mostrar Historial de un Estudiante \n8. Buscar Estudiante / Asignatura \n0. Salir del programa");
        let opcion = prompt("Seleccione una opci\xf3n: ");
        switch(opcion){
            /**
             * Opcion 1: Agregar Estudiante / Asignatura.
             * Permite crear un Estudiante o Asignatura nuevos. Depdende de lo que se seleccione en el menú secundario.
             */ case "1":
                console.clear();
                switch((0, _menusJs.menuSecundario)()){
                    case "1":
                        console.clear();
                        console.log("Comience con la creacion del Estudiante: ");
                        const nombre_Est = prompt("Introduce el nombre del estudiante:");
                        console.log(`Nombre: ${nombre_Est}`);
                        const edad = parseInt(prompt("Introduce la edad del estudiante:"));
                        console.log(`Edad: ${edad}`);
                        const calle = prompt("Introduce la calle del estudiante:");
                        console.log(`Direccion: \n` + `  - Calle: ${calle}`);
                        const numero = parseInt(prompt("Introduce el n\xfamero de la direcci\xf3n:"));
                        console.log(`  - Numero: ${numero}`);
                        const piso = parseInt(prompt("Introduce el piso (0 si no aplica):"));
                        console.log(`  - Piso: ${piso}`);
                        const cod_postal = parseInt(prompt("Introduce el c\xf3digo postal:"));
                        console.log(`  - Cod. Postal: ${cod_postal}`);
                        const provincia = prompt("Introduce la provincia:");
                        console.log(`  - Provincia: ${provincia}`);
                        const localidad = prompt("Introduce la localidad:");
                        console.log(`  - Localidad: ${localidad}`);
                        try {
                            // Creo una instancia de Dirección y de Estudiante.
                            const dir_Nueva = new (0, _direccionJs.Direccion)(calle, numero, piso, cod_postal, provincia, localidad);
                            const est_Nuevo = new (0, _estudianteJs.Estudiante)(nombre_Est, edad, dir_Nueva);
                            // Guardo al Estudiante en la Lista.
                            console.log(lista.agregarEstudiante(est_Nuevo));
                        } catch (error) {
                            console.error("Error - No se pudo crear el Estudiante: " + error.message);
                        }
                        break;
                    case "2":
                        const nombre_Asig = prompt("Introduce el nombre de la asignatura:");
                        try {
                            // Creo una instancia de Asignatura
                            const asig_Nueva = new (0, _asignaturaJs.Asignatura)(nombre_Asig);
                            console.log(lista.agregarAsignatura(asig_Nueva));
                        } catch (error) {
                            console.error("Error - No se pudo crear la Asignatura: " + error.message);
                        }
                        break;
                    case "0":
                        console.clear();
                        console.log("Vovliendo al Men\xfa Principal ...");
                        break;
                    default:
                        console.clear();
                        alert("Error al introducir una opcion");
                        break;
                }
                break;
            /**
             * Opcion 2: Eliminar Estudiante / Asignatura.
             * Permite eliminar un Estudiante o Asignatura. Depdende de lo que se seleccione en el menú secundario.
             */ case "2":
                console.clear();
                switch((0, _menusJs.menuSecundario)()){
                    case "1":
                        const posicion_Est = (0, _menusJs.seleccionarEstudiante)() - 1; // Obtengo la posición.
                        if (posicion_Est > -1) {
                            const alumno = lista.estudiantes.at(posicion_Est); // Obtengo el alumno de la Lista.
                            console.clear();
                            console.log(lista.eliminarEstudiante(alumno)); // Lo elimino.
                        } else if (posicion_Est === -1) {
                            console.clear();
                            console.log("Vovliendo al Men\xfa Principal ...");
                        } else {
                            console.log(posicion_Est);
                            alert("Error al introducir una opcion");
                        }
                        break;
                    case "2":
                        const posicion_Asig = (0, _menusJs.seleccionarAsignatura)() - 1;
                        if (posicion_Asig > -1) {
                            const materia = lista.asignaturas.at(posicion_Asig); // Obtengo la materia.
                            console.clear();
                            lista.eliminarAsignatura(materia);
                        } else if (posicion_Est === -1) {
                            console.clear();
                            console.log("Vovliendo al Men\xfa Principal ...");
                        } else alert("Error al introducir una opcion");
                        break;
                    case "0":
                        console.clear();
                        console.log("Vovliendo al Men\xfa Principal ...");
                        break;
                    default:
                        console.clear();
                        alert("Error al introducir una opcion");
                        break;
                }
                break;
            /**
             * Opcion 3: Mostrar Estudiantes / Asignaturas.
             * Permite mostrar todos los Estudiante o las Asignaturas registradas en la Lista. Depdende de lo que se seleccione en el menú secundario.
             */ case "3":
                console.clear();
                switch((0, _menusJs.menuSecundario)()){
                    case "1":
                        // Recorro "lista.estudiantes" y ejecuto para cada alumno el método "mostrarEstudiante()".
                        console.log(lista.estudiantes.map((alumno)=>alumno.mostrarEstudiante()).join("\n"));
                        break;
                    case "2":
                        // Recorro "lista.asignaturas" y ejecuto para cada materia el método "mostrarAsignaturas()".
                        console.log(lista.asignaturas.map((materia)=>materia.mostrarAsignaturas()).join("\n"));
                        break;
                    case "0":
                        console.clear();
                        console.log("Vovliendo al Men\xfa Principal ...");
                        break;
                    default:
                        console.clear();
                        alert("Error al introducir una opcion");
                        break;
                }
                break;
            /**
             * Opcion 4: Matricular Estudiante.
             * Permite matricular a un Estudiante a una Asignatura.
             */ case "4":
                console.clear();
                const posicion_Est1 = (0, _menusJs.seleccionarEstudiante)() - 1; // Obtengo la posición del Estudiante.
                const posicion_Asig1 = (0, _menusJs.mostrarAsignaturasMatricula)(posicion_Est1) - 1; // Obtengo la posición de la Asignatura.
                if (posicion_Asig1 > -1 && posicion_Asig1 < lista.asignaturas.length) {
                    const alumno = lista.estudiantes.at(posicion_Est1); // Obtengo el Estudiante.
                    const materia = lista.asignaturas.at(posicion_Asig1); // Obtengo la Asignatura.
                    alumno.matricular(materia); // Hago la matriculación.  
                    console.clear();
                    console.log(`Estudiante ${alumno.nombre} Matriculado en ${materia.nombre}`);
                } else if (posicion_Asig1 === -1) {
                    console.clear();
                    console.log("Vovliendo al Men\xfa Principal ...");
                } else {
                    console.clear();
                    alert("Error al introducir una opcion");
                }
                break;
            /**
             * Opcion 5: Desmatricular Estudiante.
             * Permite desmatricular a un Estudiante de una Asignatura.
             */ case "5":
                console.clear();
                const posicion_Alumno = (0, _menusJs.seleccionarEstudiante)() - 1;
                const posicion_Materia = (0, _menusJs.mostrarAsignaturasMatricula)(posicion_Alumno) - 1;
                if (posicion_Materia > -1 && posicion_Materia < lista.asignaturas.length) {
                    const alumno = lista.estudiantes.at(posicion_Alumno);
                    const materia = lista.asignaturas.at(posicion_Materia);
                    alumno.desmatricular(materia); // Hago la desmatriculación.
                    console.clear();
                    console.log(`Estudiante ${alumno.nombre} Desmatriculado de ${materia.nombre}`);
                } else if (posicion_Materia === -1) {
                    console.clear();
                    console.log("Vovliendo al Men\xfa Principal ...");
                } else {
                    console.clear();
                    alert("Error al introducir una opcion");
                }
                break;
            /**
             * Opcion 6: Añadir Calificación.
             * Permite añadir una calificación a un Estudiante en una Asignatura.
             */ case "6":
                console.clear();
                const pos_Estudiante = (0, _menusJs.seleccionarEstudiante)() - 1;
                const pos_Materia = (0, _menusJs.mostrarAsignaturasEstudiante)(pos_Estudiante) - 1;
                if (pos_Materia > -1 && pos_Materia < lista.asignaturas.length) {
                    const alumno = lista.estudiantes.at(pos_Estudiante);
                    const materia = lista.asignaturas.at(pos_Materia);
                    console.log("Indica la calificacion");
                    const calificacion = parseFloat(prompt("Indica la calificaci\xf3n a a\xf1adir: "));
                    try {
                        materia.addCalificacion(alumno.id, calificacion); // Añado la calificación.
                        console.clear();
                        console.log(`Al Estudiante ${alumno.nombre} se le ha a\xf1adido la nota ${calificacion} en la Asignatura ${materia.nombre}`);
                    } catch (error) {
                        console.clear();
                        console.error("Error - No se pudo a\xf1adir la calificaci\xf3n: " + error.message);
                    }
                } else if (pos_Materia === -1) {
                    console.clear();
                    console.log("Vovliendo al Men\xfa Principal ...");
                } else {
                    console.clear();
                    alert("Error al introducir una opcion");
                }
                break;
            /**
             * Opcion 7: Mostrar Historial de un Estudiante.
             * Permite mostrar el historial de un Estudiante.
             */ case "7":
                console.clear();
                const pos_Est = (0, _menusJs.seleccionarEstudiante)() - 1;
                if (pos_Est > -1 && pos_Est < lista.estudiantes.length) {
                    console.clear();
                    const alumno = lista.estudiantes.at(pos_Est);
                    console.log(alumno.mostrarHistorial()); // Muestro el historial del Estudiante.
                } else if (pos_Est === -1) {
                    console.clear();
                    console.log("Vovliendo al Men\xfa Principal ...");
                } else {
                    console.clear();
                    alert("Error al introducir una opcion");
                }
                break;
            /**
             * Opcion 8: Buscar Estudiante / Asignatura.
             * Permite buscar a un Estudiante o una Asignatura por un patrón de su nombre.
             */ case "8":
                console.clear();
                switch((0, _menusJs.menuSecundario)()){
                    case "1":
                        console.clear();
                        console.log("Indica el patron de busqueda para el Estudiante");
                        const patron_Est = prompt("Introduce el patron"); // Obtengo el patrón.
                        console.clear();
                        console.log(`Los Estudiantes que coinciden con "${patron_Est}" son: \n` + lista.buscarEstudiante(patron_Est)); // Muestro los resultados.
                        break;
                    case "2":
                        console.clear();
                        console.log("Indica el patron de busqueda para la Asignatura");
                        const patron_Asig = prompt("Introduce el patron");
                        console.clear();
                        console.log(`Las Asignaturas que coninciden con "${patron_Asig}" son: \n` + lista.buscarAsignatura(patron_Asig));
                        break;
                    case "0":
                        console.clear();
                        console.log("Vovliendo al Men\xfa Principal ...");
                        break;
                    default:
                        console.clear();
                        alert("Error al introducir una opcion");
                        break;
                }
                break;
            /**
             * Opcion 0: Salir del programa.
             * Permite salir del programa.
             */ case "0":
                alert("Saliendo de SGAEA .......");
                salir = true;
                break;
            default:
                console.clear();
                alert("Error al introducir una opcion");
                break;
        }
    }
}
// Con esto comienzo el programa a ejecutarse (llamando a la funcion principal)
menuPrincipal();
console.clear();

},{"./Direccion.js":"1lorU","./Persona.js":"l9bkg","./Asignatura.js":"jLE6v","./Estudiante.js":"jtbxU","./Lista.js":"fH2OZ","./Menus.js":"lO7fT"}],"1lorU":[function(require,module,exports,__globalThis) {
/**
 * @class Direccion
 * Clase que define los aspectos de la dirección de una persona.
 * 
 * > ---
 * > ### Atributos: 
 * > - `#calle`: Nombre de la calle. [String]
 * > - `#numero`: Numero de la casa o el bloque. [Number]
 * > - `#piso`: Piso del bloque, si es el caso. [Number]
 * > - `#cod_postal`: Codigo postal de la localidad donde viva. [Number]
 * > - `#provincia`: Nombre de la provincia. [String]
 * > - `#localidad`: Nombre de la localidad. [String]
 * > 
 * > ### Constructor:
 * > - Asigno los valores que se pasan en el constructor con sus respectivos atributos.
 * > - En el caso de el numero y del piso, compruebo que sea un número positivo y sin decimales. Si no, le asigno el valor predeterminado, 0.
 * > - Tambien compruebo que el código postal sea de 5 dígitos. Si no, le asigno el valor predeterminado 0.
 * > 
 * > ### Métodos:
 * > - `mostrarDireccion()`: Sirve para mostrar todos los valores de la dirección.
 * > ---
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Direccion", ()=>Direccion);
class Direccion {
    // Atributos privados
    #calle;
    #numero;
    #piso;
    #cod_postal;
    #provincia;
    #localidad;
    /**
     * Constructor de la clase Direccion que crea una instancia de esta.
     * 
     * @param {string} calle - Nombre de la calle.
     * @param {number} numero - Número de la casa o bloque.
     * @param {number} piso - Número del piso (0 si no aplica).
     * @param {number} cod_postal - Código postal (5 dígitos).
     * @param {string} provincia - Nombre de la provincia.
     * @param {string} localidad - Nombre de la localidad.
     * 
     * @example
     * // Crear una instancia de Dirección
     * const direccion = new Direccion("Avenida Andalucia", 45, 3, 18010, "Granada", "Granada");
     */ constructor(calle, numero, piso, cod_postal, provincia, localidad){
        this.#calle = calle;
        this.#numero = /^\d+$/.test(numero) ? numero : 0;
        this.#piso = /^\d+$/.test(piso) ? piso : 0;
        this.#cod_postal = /^\d{5}$/.test(cod_postal) ? cod_postal : 0;
        this.#provincia = provincia;
        this.#localidad = localidad;
    }
    // Metodos de la clase Direccion
    /**
     * @function
     * @description Muestra una representación de los datos formateados de la Direccion.
     * 
     * @returns {string} Cadena con los detalles completos de la dirección.
     * @example
     * const direccion = new Direccion("Avenida Andalucia", 45, 3, 18010, "Granada", "Granada");
     * console.log(direccion.mostrarDireccion());
     * // Salida:
     * //   - Calle      : Avenida Andalucia
     * //   - Numero     : 45
     * //   - Piso       : 3
     * //   - Cod. Postal: 18010
     * //   - Provincia  : Granada
     * //   - Localidad  : Granada
     */ mostrarDireccion() {
        return `   - Calle      : ${this.#calle}        \n` + `   - Numero     : ${this.#numero}       \n` + `   - Piso       : ${this.#piso}         \n` + `   - Cod. Postal: ${this.#cod_postal}   \n` + `   - Provincia  : ${this.#provincia}    \n` + `   - Localidad  : ${this.#localidad}    \n`;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l9bkg":[function(require,module,exports,__globalThis) {
/**
 * @class Persona
 * Clase que sirve para poder implementar la herencia con la clase Estudiante.
 * 
 * > ---
 * > ### Atributos:
 * > - `#nombre`: Nombre de la persona. [String] 
 * > - `#edad`: Edad de la persona. [Number]
 * > - `#direccion`: Dirección de la persona. [Object]
 * >
 * > ### Constructor:
 * > - Lo primero que hago es verificar:
 * >     + Que el nombre sea válido (solo letras y espacios).
 * >     + Y que la edad sea  válida (entre 6 y 80 años).
 * > - Si son correctos los valores, le asigno los valores que paso por parámetros a los atributos.
 * > - Si no son correctos, lanzo un error indicando que el nombre o la edad no son válidos.
 * > 
 * > ### Getters:
 * > - Declaro los getters de los atributos nombre, edad y dirección. Este último, llamando al método de la clase Direccion, mostrarDireccion().
 * > ---
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Persona", ()=>Persona);
class Persona {
    // Atributos privados
    #nombre;
    #edad;
    #direccion;
    /**
     * Constructor de la clase Persona que crea una instancia de esta.
     * 
     * @param {string} nombre - Nombre de la Persona.
     * @param {number} edad - Edad de la Persona.
     * @param {object} direccion - Dirección de la Persona.
     * @throws {Error} Si el nombre contiene números o si la edad no es válida (entre 6 y 80).
     * 
     * @example
     * // Crear una instancia de Persona.
     * const direccion = new Direccion("Avenida Andalucia", 45, 3, 18010, "Granada", "Granada");
     * const persona = new Persona("Armando Vaquero", 23, direccion);
     */ constructor(nombre, edad, direccion){
        if (/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/.test(nombre) && edad >= 6 && edad <= 80) {
            this.#nombre = nombre;
            this.#edad = edad;
            this.#direccion = direccion;
        } else throw new Error("El nombre debe de tener solo letras y espacios. | La edad tiene que estar entre los 6 y 80 a\xf1os");
    }
    /**
     * Obtiene el nombre de la Persona.
     * 
     * @returns {string} Nombre de la Persona.
     */ get nombre() {
        return this.#nombre;
    }
    /**
     * Obtiene la edad de la Persona.
     * 
     * @returns {number} Edad de la Persona.
     */ get edad() {
        return this.#edad;
    }
    /**
     * Obtiene la dirección de la Persona.
     * 
     * @returns {string} Dirección de la Persona.
     */ get direccion() {
        return this.#direccion.mostrarDireccion();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLE6v":[function(require,module,exports,__globalThis) {
/**
 * @class Asignatura
 * Clase que crea las asignaturas y contiene las calificaciones de los estudiantes.
 * > ---
 * > ### Atributos:
 * > - `#nombre`: Nombre para las asignaturas. [String]
 * > - `#calificaciones`: Mapa que contendrá el ID el Estudiante y sus calificaciones. [Object]
 * >
 * > ### Constructor:
 * > - Lo primero que hago es verificar si el nombre es válido (solo letras y espacios).
 * >     + Si es válido, le asigno el nombre al atributo "this.#nombre" y el atributo "this.#calificacion" lo inicializo a un mapa vacío.
 * >     + Si no es válido, mostrará un error indicando que el nombre no es válido.
 * >
 * > ### Getter:
 * > - Declaro el getter de nombre, que me devuelve el nombre de la Asignatura.
 * >
 * > ### Métodos:
 * > - `obtenerCalificaciones(id_Estudiante)`: Devuelvo un array con las calificaciones del Estudiante que paso por parámetros, de una asignatura determinada.
 * > - `addCalificacion(id_Estudiante, calificacion)`: Añade una nota al Estudiante en una asignatura determinada. Pide por parámetros el id_Estudiante y la calificación a añadir.
 * >     + 1º - Comprueba que la calificación es correcta (un número y, >0 y <10). Si no es correcta, lanza un error.
 * >     + 2º - Comprueba si "this.#calificaciones" ya tiene registrado el ID del Estudiante.
 * >         - Si tiene dentro ya una Key que es la del Id del Estudiante, le añade otra calificación.
 * >         - Si no, añade de un nuevo id_Estudiante y una calificación a "this.#calificacion".
 * >> ( Compruebo con "mapa.has.(key)", añado calificación con "mapa.get(key).push(valor)" y añado uno nuevo con "mapa.set(key, [valor])").
 * > - `calcularPromedioGeneral()`: Calcula el promedio de las calificaciones que hay en una Asignatura. Para hacerlo hago lo siguiente:
 * >     + 1º - Declaro dos variables:
 * >         - "total_Notas": contendrá la suma total de todas las notas. [Number]
 * >         - "cantidad_Notas":  contendrá el número total de notas. [Number]
 * >     + 2º - Luego recorro "this.#calificaciones" (usando un .forEach).
 * >     + 3º - Dentro de este creo:
 * >         - "suma_Notas": variable que sumará todas las notas (usando .reduce).
 * >         - "total_Notas": sumará todas las suma_Notas con la iteración del bucle.
 * >         - "contidad_Notas": sumará la cantidad de notas que tiene cada Estudiante.
 * >    + 4º - Compruebo si hay alguna calificación (total_Notas > 0):
 * >        - Si no, devuelvo "Sin calificaciones".
 * >       - Si tenia, devuelvo el cálculo del promedio (total_Notas / cantidad_Notas), con dos decimales (usando .toFixed(2) -> [String]).
 * > - `calcularPromedioEstudiante(id_Estudiante)`: Calcula el promedio de las calificaciones de un Estudiante en una Asignatura. Para hacerlo hago lo siguiente:
 * >     + 1º - Declaro:
 * >         - "notas": usa el método "obtenerCalificaciones(id_Estudiante)" para obtener las calificaciones.
 * >         - "total_Notas": sumará todas las notas.
 * >         - "cantidad_Notas": obtendrá la cantidad de notas.
 * >    + 2º - Y por último, devuelvo lo mismo que en el método anterior.
 * > - `mostrarAsignaturas()`: Sirve para mostrar todas las Asignaturas de una forma formateada.
 * > ---
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Asignatura", ()=>Asignatura);
class Asignatura {
    // Atributos privados
    #nombre;
    #calificaciones;
    /**
     * Constructor de la clase Asignatura que crea una instancia de esta.
     * 
     * @param {string} nombre - Nombre de la Asignatura.
     * @throws {Error} Si el nombre no esta formado solo por letras y espacios.
     * 
     * @example
     * // Crear una instancia de Asignatura.
     * const asignatura = new Asignatura("DAWES");
     */ constructor(nombre){
        if (/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/.test(nombre)) {
            this.#nombre = nombre;
            this.#calificaciones = new Map();
        } else throw new Error("El nombre de la Asignatura es erroneo");
    }
    /**
     * Obtiene el nombre de la Asignatura.
     * 
     * @returns {string} Nombre de la Asignatura.
     */ get nombre() {
        return this.#nombre;
    }
    // Metodos de la clase Asignatura.
    /**
     * @function
     * @description Obtener calificaciones de un Estudiante en una Asignatura.
     * 
     * @param {string} id_Estudiante - ID del Estudiante.
     * @returns {number[]} Array con las calificaciones del Estudiante en una Asignatura.
     * 
     * @example
     * // Devuelve un array con las calificaciones del Estudiante.
     * // Por ejemplo: [5, 10, 7, 8]
     */ obtenerCalificaciones(id_Estudiante) {
        return this.#calificaciones.get(id_Estudiante) || [];
    }
    /**
     * @function
     * @description Añade una calificación para un Estudiante en una Asignatura.
     * 
     * @param {string} id_Estudiante - ID del Estudiante.
     * @param {number} calificacion - Calificación a añadir.
     * 
     * @throws {Error} Si la calificación no es un número o es NaN.
     * @throws {Error} Si la calificación no es válida (0 a 10).
     */ addCalificacion(id_Estudiante, calificacion) {
        if (typeof calificacion !== "number" || isNaN(calificacion)) throw new Error(`La calificaci\xf3n asignada a la asignatura ${this.nombre} no es un numero`);
        if (calificacion < 0 || calificacion > 10) throw new Error(`La calificac\xf3n asignada a la asignatura ${this.#nombre} no es valida (0 a 10)`);
        if (this.#calificaciones.has(id_Estudiante)) this.#calificaciones.get(id_Estudiante).push(calificacion);
        else this.#calificaciones.set(id_Estudiante, [
            calificacion
        ]);
    }
    /**
     * @function
     * @description Calcula el promedio general de las calificaciones totales, de una Asignatura.
     * 
     * @returns {string | number} Promedio General o sin calificaciones.
     * 
     * @example
     * // Devuelve el promedio general de las calificaciones o, en su defecto, "sin calificaciones" .
     * // Por ejemplo: 7.50
     */ calcularPromedioGeneral() {
        let total_Notas = 0;
        let cantidad_Notas = 0;
        this.#calificaciones.forEach((notas, id)=>{
            let suma_Notas = 0;
            suma_Notas = notas.reduce((total, valorAct)=>total + valorAct, 0);
            total_Notas += suma_Notas;
            cantidad_Notas += notas.length;
        });
        return total_Notas > 0 ? (total_Notas / cantidad_Notas).toFixed(2) : "Sin calificaciones";
    }
    /**
     * @function
     * @description Calcula el promedio de las calificaciones de un Estudiante en una Asignatura.
     * 
     * @param {string} id_Estudiante - ID del Estudiante. 
     * 
     * @returns {string|number} Promedio del Estudiante en una Asignatura.
     * 
     * @example
     * // Devuelve el promedio de las calificaciones de un Estudiante en una Asignatura o, en su defecto, "sin evaluar".
     * // Por ejemplo: 7.50
     */ calcularPromedioEstudiante(id_Estudiante) {
        const notas = this.obtenerCalificaciones(id_Estudiante);
        const total_Notas = notas.reduce((total, valorAct)=>total + valorAct, 0);
        const cantidad_Notas = notas.length;
        return total_Notas > 0 ? (total_Notas / cantidad_Notas).toFixed(2) : "Sin evaluar";
    }
    /**
     * @function
     * @description Muestra una representación de los datos formateados de las Asignaturas y sus calificaciones.
     * 
     * @returns {string} Cadena con los datos de las Asignaturas formateados.
     * 
     * @example
     * // Devuelve una cadena con los datos de las Asignaturas formateados.
     * // Por ejemplo:
     * // ───────────────────────────────
     * //            DAWES
     * // ===============================
     * // - DAWES: 5 - 10 - 7 - 8
     * // ------------------------------
     * //   - Promedio = 7.50
     */ mostrarAsignaturas() {
        let mostrar_Asig = "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \n" + `            ${this.#nombre} \n` + "=============================== \n";
        if (this.#calificaciones.size === 0) mostrar_Asig += "Sin calificaciones \n============================== \n";
        else {
            this.#calificaciones.forEach((notas, id)=>{
                mostrar_Asig += `${id}: ${notas.join(" - ")} \n`;
            });
            mostrar_Asig += "------------------------------ \n" + `  - Promedio = ${this.calcularPromedioGeneral()} \n` + "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \n";
        }
        return mostrar_Asig;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtbxU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class Estudiante
 * Clase que hereda de Persona y gestiona la información de los Estudiantes.
 * 
 * > ---
 * > ### Atributos:
 * > - `static id_contador = 1`: Contador global para generar IDs. [Number]
 * > - `static id_Disponibles = []`: Array que contendrá los IDs libres. [Array]
 * > - `#id`: ID del Estudiante. [String]
 * > - `#asignatura`: Lista de Asignaturas matriculadas del Estudiante. [Array<Asignatura>]
 * > - `#historial`: Historial de las matrículas y desmatrículas (con fecha) del Estudiante. [Array]
 * >
 * > ### Constructor:
 * > - Captura posibles errores al generar la instancia Persona. Por el nombre o la edad.
 * > - Llama al constructor de la clase Persona usando "super(nombre, edad, direccion)".
 * > - Genera el ID del Estudiante. Para generar el ID:
 * >     + En la variable "id_gen_letras" obtiene las 3 primeras letras del nombre.
 * >     + Dos posibilidades:
 * >         - Si "Estudiante.id_Disponibles" tiene valores (un Estudiante ha sido eliminado de la lista), se le asigna el menor número y se elimina de "id_Disponibles".
 * >         - Si no tiene valores, se le asigna el siguiente número disponible que está indicado en la variable "id_contador". Y esta variable aumenta.
 * >     + Formatea el número con ".padStart(3, "0")".
 * >     + Este proceso generará un ID parecido a este: "ARM001".
 * > - Por último, inicializo los atributos que he declarado antes, a arrays vacíos.
 * >
 * > ### Getters:
 * > - Declaro los getters de id y asignaturas. El primero me devuelve el id y el segundo me devuelve un array con las Asignaturas matriculadas del Estudiante.
 * >
 * > ### Métodos:
 * > - `matricular(...asignaturas)`: Asigno una o varias Asignaturas al Estudiante. Funcionamiento:
 * >     + Recorre todas las asignaturas que se pasan por parámetros (con un .forEach).
 * >     + Para cada asignatura, se verifica que no este incluida en "this.#asignaturas".
 * >     + Si no lo está, se añade la asignatura a "this.#asignaturas" y a "this.#historial" un registro de esta matriculación.
 * > - `desmatricular(..asignaturas)`: Desasigno una o varias Asignaturas del Estudiante. El funcionamiento es parecido al método anterior pero usando el método ".splice" y en "this.#historial" se guarda como desmatriculación.
 * > - `agregarCalificacion(materia, nota)`: Añade una calificación al Estudiante en la Asignatura indicada. Para hacerlo hago lo siguiente:
 * >     + Compruebo que el Estudiante está matriculado en la Asignatura indicada en los parámetros.
 * >     + Si está matriculado, llamo al método de la clase Asignatura "addCalificacion(id_Estudiante, nota)" y le añado la nota. Se recogeriá el error si la nota no fuese válida.
 * > - `promedioTotalEstudiante()`: Calcula el promedio de notas del Estudiante en todas las Asignaturas matriculadas. El funcionamiento es semejante al método "calcularPromedioGeneral()" de la clase Asignatura, pero modifico:
 * >     + Para obtener las notas del Estudiante en un array, lo que hago es llamar al método de la clase Asignatura "obtenerCalificaciones(id_Estudiante)".
 * > - `mostrarHistorial()`: Mostrará el historial del Estudiante formateado. En "matricular" y "desmatricular" se guardaba un array compuesto de:
 * >     + En la posición [0], la fecha actual en Español (método privado #generarFechaActual()).
 * >     + En la posición [1], el nombre de la materia.
 * >     + En la posición [2], el nombre del proceso (matricula o desmatricula).
 * >> Recorro "this.#historial" y muestro los registros formateados. Por ejemplo: `06/12/2024 - DAWES - Matrícula/Desmatricula`.  
 * > - `mostrarPersona()`: Sirve para mostar los datos del Estudiante formateados.
 * > - `#generarFechaActual()`: Método privado que devuelve la fecha actual. Para hacerlo hago lo siguiente:
 * >     + Genero una instancia Date() (contiene toda la información del día actual).
 * >     + Luego formateo la fecha usando ".toLocaleDateString()" para convertirla en una cadena legible.
 * >         - Le indico que el idioma es Español ("es-ES").
 * >         - Le indico que el día lo muestre con dos dígitos (day: "2-digit").
 * >         - Le indico que el mes lo muestre con dos dígitos (month: "2-digit").
 * >         - Le indico que el año lo muestre con cuatro dígitos (day: "numeric").
 * > ---
 */ parcelHelpers.export(exports, "Estudiante", ()=>Estudiante);
var _personaJs = require("./Persona.js");
class Estudiante extends (0, _personaJs.Persona) {
    // Atributos estáticos
    static id_contador = 1;
    static id_Disponibles = [];
    // Atributos privados
    #id;
    #asignatura;
    #historial;
    /**
     * Constructor de la clase Estudiante que crea una instancia de esta.
     * 
     * @param {string} nombre - Nombre del Estudiante.
     * @param {number} edad - Edad del Estudiante.
     * @param {Direccion} direccion - Instancia de la clase Direccion.
     * 
     * @example
     * // Crear una instancia de Estudiante.
     * const direccion = new Direccion("Avenida Andalucia", 45, 3, 18010, "Granada", "Granada");
     * const estudiante = new Estudiante("Armando Vaquero", 23, direccion);
     */ constructor(nombre, edad, direccion){
        super(nombre, edad, direccion); // Llamar al constructor de la clase Persona.
        const id_gen_letras = nombre.substring(0, 3).toUpperCase(); // Genero las letras del ID del Estudiante.
        if (Estudiante.id_Disponibles.length !== 0) {
            const id_Minimo = Math.min(...Estudiante.id_Disponibles); // Consigo el valor del minimo ID.
            const id_gen_numeros = id_Minimo.toString().padStart(3, "0"); // Genero el codigo de numeros del Id.
            this.#id = `${id_gen_letras}${id_gen_numeros}`; // Añado el ID.
            const posicion = Estudiante.id_Disponibles.indexOf(id_Minimo); // Posición del ID usado.
            Estudiante.id_Disponibles.splice(posicion, 1); // Eliminar posición de id_Disponibles.
        } else {
            const id_gen_numeros = Estudiante.id_contador.toString().padStart(3, "0");
            this.#id = `${id_gen_letras}${id_gen_numeros}`; // Añado el ID.
            Estudiante.id_contador++; // Aumenta el id_contador.
        }
        this.#asignatura = [];
        this.#historial = [];
    }
    /**
     * Obtiene el ID del Estudiante.
     * 
     * @returns {string} ID del Estudiante.
     */ get id() {
        return this.#id;
    }
    /**
     * Obtiene las Asignaturas matriculadas del Estudiante.
     * 
     * @returns {Asignatura[]} Lista de Asignaturas matriculadas del Estudiante.
     */ get asignaturas() {
        return this.#asignatura;
    }
    // Metodos de la clase Estudiante.
    /**
     * @function
     * @description Matricula al Estudiante en una o varias Asignaturas. Añade un registro al historial.
     * 
     * @param  {...Asignaturas} asignaturas - Lista de Asignaturas a matricular. 
     */ matricular(...asignaturas) {
        asignaturas.forEach((materia)=>{
            if (!this.#asignatura.includes(materia)) {
                this.#asignatura.push(materia); // Añado la Asignatura.
                this.#historial.push([
                    this.#generarFechaActual(),
                    materia.nombre,
                    "Matricula"
                ]);
            }
        });
    }
    /**
     * @function
     * @description Desmatricula al Estudiante en una o varias Asignaturas. Añade un registro al historial.
     * 
     * @param  {...Asignaturas} asignaturas - Lista de Asignaturas a desmatricular. 
     */ desmatricular(...asignaturas) {
        asignaturas.forEach((materia)=>{
            if (this.#asignatura.includes(materia)) {
                const posicion = this.#asignatura.indexOf(materia); // Obtengo la posición.
                this.#asignatura.splice(posicion, 1); // Borro la Asignatura que me indica la posición.
                this.#historial.push([
                    this.#generarFechaActual(),
                    materia.nombre,
                    "Desmatricula"
                ]);
            }
        });
    }
    /**
     * @function
     * @description Añade una calificación a una Asignatura.
     * 
     * @param {Asignatura} materia - Asignatura en la que añadir la calificación. 
     * @param {number} nota - Calificación a añadir.
     */ agregarCalificacion(materia, nota) {
        if (this.#asignatura.includes(materia)) try {
            materia.addCalificacion(this.#id, nota);
        } catch (error) {
            console.error("Error - No se pudo a\xf1adir la nota: " + error.message);
        }
    }
    /**
     * @function
     * @description Calcula el promedio total de todas las calificaciones del Estudiante.
     * 
     * @returns {string | number} Promedio total del Estudiante.
     * 
     * @example
     * // Devuelve el promedio total de las calificaciones del Estudiante o, en su defecto, "sin evaluar".
     * // Por ejemplo: 7.50
     */ promedioTotalEstudiante() {
        let total_Notas = 0;
        let cantidad_Notas = 0;
        this.#asignatura.forEach((materia)=>{
            const notas = materia.obtenerCalificaciones(this.#id);
            let suma_Notas = notas.reduce((total, valorAct)=>total + valorAct, 0);
            total_Notas += suma_Notas;
            cantidad_Notas += notas.length;
        });
        return total_Notas > 0 ? (total_Notas / cantidad_Notas).toFixed(2) : "Sin evaluar";
    }
    /**
     * @function
     * @description Muestra una representación de los datos formateados del historial.
     * 
     * @returns {string} Cadena con los datos del historial formateados.
     * 
     * @example
     * // Devuelve una cadena con los datos del historial formateados.
     * // Por ejemplo:
     * //   06/12/2024 - DAWES - Matrícula
     * //   06/12/2024 - DAWES - Desmatrícula
     */ mostrarHistorial() {
        const registros = `El historial del Estudiante ${this.nombre} es: \n` + this.#historial.map((registro)=>`${registro[0]} - ${registro[1]} - ${registro[2]}`).join("\n");
        return registros;
    }
    /**
     * @function
     * @description Muestra una representación de los datos formateados del Estudiante.
     * 
     * @returns {string} Cadena con los datos el Estudiante formateados.
     * 
     * @example
     * // Devuelve una cadena con los datos del Estudiante formateados.
     * // Por ejemplo:
     * // ────────────────────────────────────
     * //     ARM001 - Armando Vaquero
     * // ===================================
     * // Edad: 23
     * // Direccion:
     * //    - Calle      : Avenida Andalucia
     * //    - Numero     : 45
     * //    - Piso       : 3
     * //    - Cod. Postal: 18010
     * //    - Provincia  : Granada
     * //    - Localidad  : Granada
     * // ===================================
     * //    Asignaturas y Calificaciones
     * // ===================================
     * // DAWES: 5 - 10 - 7 - 8 | Promedio: 7.50
     * // -----------------------------------
     * // Promedio Total: 7.50
     * // ────────────────────────────────────
     */ mostrarEstudiante() {
        let datos_asignaturas = "";
        this.#asignatura.forEach((materia)=>{
            const notas = materia.obtenerCalificaciones(this.#id);
            const promedio = materia.calcularPromedioEstudiante(this.#id);
            datos_asignaturas += `${materia.nombre}: ${notas.join(" - ")} | Promedio: ${promedio} \n`;
        });
        return "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \n" + `     ${this.#id} - ${this.nombre}   \n` + "==================================== \n" + ` Edad: ${this.edad}    \n` + ` Direccion:             \n` + this.direccion + "==================================== \n" + "    Asignaturas y Calificaciones \n" + "==================================== \n" + `${datos_asignaturas}` + "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \n";
    }
    /**
     * @function
     * @description Método privado que genera la fecha actual en formato "dd/mm/yyyy".
     * 
     * @returns {string} Fecha actual formateada en Español.
     * 
     * @example
     * // Devuelve la fecha actual en formato "dd/mm/yyyy".
     * // Por ejemplo: 06/12/2024
     */ #generarFechaActual() {
        const fecha_Actual = new Date(); // Instancia de Date().
        return fecha_Actual.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }
}

},{"./Persona.js":"l9bkg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fH2OZ":[function(require,module,exports,__globalThis) {
/**
 * @class Lista
 * Clase que gestiona los Estudiantes y Asginaturas, permitiendo agregar, eliminar, listar o buscar los elementos que contienen estas listas.
 * 
 * > ---
 * > ### Atributos:
 * > - `#estudiantes`: Lista que contendrá todos los Estudiantes. [Array<Estudiante>]
 * > - `#asignaturas`: Lista que contendrá todas las Asignaturas. [Array<Asignatura>]
 * >
 * > ### Constructor:
 * > - Lo que hago es inicializar las listas como arrays vacíos.
 * >
 * > ### Getters:
 * > - Declaro dos métodos Getters para las listas estudiantes y asignaturas.
 * >
 * > ### Métodos:
 * > - `agregarEstudiante(alumno)`: Añade un Estudiante a "this.#estudiantes". Funcionalidad:
 * >     + Compruebo si el Estudiante ya se encuentra dentro.
 * >     + Si está dentro, devuelvo un mensaje indicándolo.
 * >     + Si no, lo añado y muestro un mensaje indicando que lo he añadido.
 * > - `agregarAsignatura(materia)`: Añade una Asignatura a "this.#asignaturas". Su funcionalidad es la misma que el anterior método, pero con Asignatura.
 * > - `eliminarEstudiante(alumno)`: Elimina un Estudiante de "this.#estudiantes". Funcionalidad:
 * >     + Busco la posición en "this.#estudiantes" del alumno que paso por parámetros.
 * >     + Si la posición es !== -1, el Estudiante está en la lista. Se elimina el alumno de "this.#estudiantes" y se guarda el número del ID en la variable constante de la clase Estudiante, "id_Disponibles".
 * >     + Si es eliminado, mostrarar un mensaje indicándolo, y si no es eliminado, se indicara con un mensaje también.
 * > - `eliminarAsignatura(materia)`: Elimina una Asignatura de "this.#asignaturas". Su funcionalidad es la misma que el anterior método, pero con Asignatura. No añade nada a "id_Disponibles".
 * > - `buscarEstudiante(patron)`: Busca Estudiantes en "this.#estudiantes" por un patrón de su nombre. Funcionalidad:
 * >     + Con el método ".filter", recorro todos los alumnos que están registrados en "this.#estudiantes" y con su nombre en minúscula, compruebo si contiene el patrón que paso por parámetros en el nombre. Si lo contiene, este alumno se guarda en la variable "resultado".
 * >     + Compruebo que la variable "resultado" no esta vacía:
 * >         - Si no lo está, recorre "resultado" y ejecuta para cada instacia el método de la clase Estudiante, "mostrarEstudiante()".
 * >         - Si lo está, muestra un mensaje indicando que no existen Estudiantes registrados con ese patrón.
 * > - `buscarAsignatura(patron)`: Busca Asignaturas en "this.#asignaturas" por un patrón de su nombre. Su funcionalidad es la misma que la del anterior método, pero con Asignatura.
 * > ---
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Lista", ()=>Lista);
class Lista {
    // Atributos privados
    #estudiantes;
    #asignaturas;
    /**
     * Constructor de la clase Lista.
     * 
     * @example
     * // Crear una instancia de Lista.
     * const lista = new Lista();
     */ constructor(){
        this.#estudiantes = [];
        this.#asignaturas = [];
    }
    /**
     * Obtiene la lista de Estudiantes.
     * 
     * @returns {Estudiante[]} Lista de Estudiantes.
     */ get estudiantes() {
        return this.#estudiantes;
    }
    /**
     * Obtiene la lista de Asignaturas.
     * 
     * @returns {Asignatura[]} Lista de Asignaturas.
     */ get asignaturas() {
        return this.#asignaturas;
    }
    // Metodos de la clase Lista
    /**
     * @function
     * @description Agrega un Estudiante a "this.#estudiantes".
     * 
     * @param {Estudiante} alumno - Instancia de la clase Estudiante.
     * @returns {string} Mensaje que indica si el Estudiante a sido añadido o no.
     * 
     * @example
     * // Añadir un Estudiante a la lista.
     * // Por ejemplo: "El estudiante ha sido añadido"
     */ agregarEstudiante(alumno) {
        if (this.#estudiantes.includes(alumno)) return "El estudiante ya est\xe1 en la lista";
        else {
            this.#estudiantes.push(alumno);
            return "El estudiante ha sido a\xf1adido";
        }
    }
    /**
     * @function
     * @description Agrega una Asignatura a "this.#asignaturas".
     * 
     * @param {Asignatura} materia - Instancia de la clase Asignatura. 
     * @returns {string} Mensaje que indica si la Asignatura a sido añadido o no.
     * 
     * @example
     * // Añadir una Asignatura a la lista.
     * // Por ejemplo: "La asignatura ha sido añadida"
     */ agregarAsignatura(materia) {
        if (this.#asignaturas.includes(materia)) return "La asignatura ya est\xe1 en la lista";
        else {
            this.#asignaturas.push(materia);
            return "La asignatura ha sido a\xf1adida";
        }
    }
    /**
     * @function
     * @description Elimina un Estudiante a "this.#estudiantes".
     * 
     * @param {Estudiante} alumno - Instancia de la clase Estudiante. 
     * @returns {string} Mensaje que indica si el Estudiante a sido eliminado o no.
     * 
     * @example
     * // Eliminar un Estudiante de la lista.
     * // Por ejemplo: "Estudiante eliminado
     */ eliminarEstudiante(alumno) {
        const posicion = this.#estudiantes.indexOf(alumno);
        if (posicion !== -1) {
            this.#estudiantes.splice(posicion, 1);
            Estudiante.id_Disponibles.push(parseInt(alumno.id.substring(3))); // Guardo el ID en id_Disponibles
            return "Estudiante eliminado";
        } else return "El estudiante no esta en la lista";
    }
    /**
     * @function
     * @description Elimina una Asignatura a "this.#asignaturas".
     * 
     * @param {Asignatura} materia - Instancia de la clase Asignatura. 
     * @returns {string} Mensaje que indica si la Asignatura a sido eliminado o no.
     * 
     * @example
     * // Eliminar una Asignatura de la lista.
     * // Por ejemplo: "Asignatura eliminada"
     */ eliminarAsignatura(materia) {
        const posicion = this.#asignaturas.indexOf(materia);
        if (posicion !== -1) {
            this.#asignaturas.splice(posicion, 1);
            return "Asignatura eliminada";
        } else return "La asignatura no esta en la lista";
    }
    /**
     * @function
     * @description Busca Estudiantes en "this.#estudiantes" por un patrón de su nombre.
     * 
     * @param {string} patron - Cadena a buscar en los nombres de los Estudiantes. 
     * @returns {string} Cadena formateada de los Estudiantes o mensaje indicando que no sean encotrado.
     * 
     * @example
     * // Buscar un Estudiante en la lista.
     * // Por ejemplo:
     * // ────────────────────────────────────
     * //     ARM001 - Armando Vaquero
     * // ===================================
     * // Edad: 23
     * // Direccion:
     * //    - Calle      : Avenida Andalucia
     * //    - Numero     : 45
     * //    - Piso       : 3
     * //    - Cod. Postal: 18010
     * //    - Provincia  : Granada
     * //    - Localidad  : Granada
     * // ===================================
     * //    Asignaturas y Calificaciones
     * // ===================================
     * // DAWES: 5 - 10 - 7 - 8 | Promedio: 7.50
     * // -----------------------------------
     * // Promedio Total: 7.50 
     */ buscarEstudiante(patron) {
        const resultado = this.#estudiantes.filter((alumno)=>alumno.nombre.toLowerCase().includes(patron.toLowerCase()));
        if (resultado.length > 0) return resultado.map((alumno)=>alumno.mostrarEstudiante()).join("\n");
        else return "No se ha encontrado estudiantes con ese patron";
    }
    /**
     * @function
     * @description Busca Asignaturas en "this.#asignaturas" por un patrón de su nombre.
     * 
     * @param {string} patron - Cadena a buscar en los nombres de las Asignaturas. 
     * @returns {string} Cadena formateada de las Asignaturas o mensaje indicando que no sean encotrado.
     * 
     * @example
     * // Buscar una Asignatura en la lista.
     * // Por ejemplo:
     * // ───────────────────────────────
     * //            DAWES
     * // ===============================
     * // - DAWES: 5 - 10 - 7 - 8
     * // ------------------------------
     * //   - Promedio = 7.50
     */ buscarAsignatura(patron) {
        const resultado = this.#asignaturas.filter((materia)=>materia.nombre.toLowerCase().includes(patron.toLowerCase()));
        if (resultado.length > 0) return resultado.map((materia)=>materia.mostrarAsignaturas()).join("\n");
        else return "No se ha encontrado materias con ese patron";
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lO7fT":[function(require,module,exports,__globalThis) {
/**
 * FUNCIONES DEL MENÚ
 * ──────────────────
 * Aqui creo las funciones principales que son la estructura principal del proyecto. Se crean diferentes menús en los que se pueden realizar operaciones relacionadas con Estudiantes y Asignaturas.
 * 
 * > ---
 * > ### Funciones Principales:
 * > - `menuPrincipal()`: Punto de entrada principal que permite seleccionar una acción en relación con los Estudiantes y las Asignaturas. Funcionalidad: 
 * >    + Genero un bucle que finalizara cuando se indique con una opción del menú.
 * >    + Muestro el menú. Ejemplo:
 * >> "Menú Principal:
 * >> 1. Agregar Estudiante / Asignatura
 * >> 2. Eliminar Estudiante / Asignatura
 * >> 3. Mostrar Estudiantes / Asignaturas
 * >> 4. Matricular Estudiante
 * >> 5. Desmatricular Estudiante
 * >> 6. Añadir Calificacion
 * >> 7. Mostrar Historial de un Estudiante
 * >> 8. Buscar Estudiante / Asignatura
 * >> 0. Salir del programa"
 * >    + Pido una opción con "prompt" y está la uso en un "switch". En función de la opción que se seleccione hará una cosa u otra.
 * > - `menúSecundario()`: Menú que permite seleccionar Estudiantes o Asignaturas. Usando en las opciones de "1. Agregar Estudiante / Asignatura" o "2. Eliminar Estudiante / Asignatura", entre otras. Ejemplo:
 * >> "Seleccione una opcion: 
 * >> 1. Estudiantes 
 * >> 2. Asignaturas 
 * >> 0. Salir"
 * >
 * > ### Funciones Auxiliares:
 * > - `seleccionarEstudiante()`: Muestra una lista numerada de los Estudiantes registrados, permitiendo seleccionar uno para realizar operaciones con él. Usado en "2. Eliminar Estudiante / Asignatura", por ejemplo.
 * > - `seleccionarAsignatura()`: Muestra una lista numerada de las Asignaturas registradas, permitiendo seleccionar una para realizar operaciones con ella. Usado en "2. Eliminar Estudiante / Asignatura", por ejemplo.
 * > - `mostrarAsignaturasMatricula(posicion_Est)`: Con el valor que se pasa por parámetros se obtiene el alumno. De esta manera, permite ver todas las Asignaturas que están registradas y al lado en cuales el alumno está matriculado. Usado en "4. Matricular Estudiante".
 * > - `mostrarAsignaturasEstudiante(posicion_Est)`: Con el valor que se pasa por parámetros se obtiene el alumno. De esta manera, permite mostrar solo las asignaturas en las que se encuentra matriculado este. Usado en "5. Desmatricular Estudiante".
 * >
 * > ### Lógica de Iteracción:
 * > El funcionamiento del proyecto es el siguiente:
 * > - Se muestra el menú principal por consola y se piede con un "prompt" que se introduzca una opción. Una vez seleccionada se seleccionara en el "switch" la opción indicada, ejecutando los procesos necesarios para realizar el proceso seleccionado.
 * > - Cuando se halla completado el proceso se volvera al menú principal, de esta manera se podrá seleccionar otra opción o se podrá salir del programa indicando la opción de salida.
 * >
 * > ### Notas:
 * > - Todo el sistema usa "console.log" para mostrar datos, "prompt" para recoger datos de entrada y "console.clear()" para limpiar la consola (para que queda algo mejor).
 * > - Se tiene en cuenta que el usuario, en los menús, seleccione una opción no valida, indicando a través de un "alert()" que ha introducido una opción no válida.
 * > ---
 */ /**
 * @function
 * @description Muestra el menú secundario y recoge la opción indicada.
 * 
 * @returns {string} La opción indicada.
 * 
 * @example
 * // Devolvera lo que el usuario introduzca.
 * // Por ejemplo: 2
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "menuSecundario", ()=>menuSecundario);
/**
 * @function
 * @description Muestra el menú de Estudiantes y recoge la opción indicada.
 * 
 * @returns {string|number} La opción indicada.
 * 
 * @example
 * // Devolvera lo que el usuario introduzca.
 * // Por ejemplo: 2
 */ parcelHelpers.export(exports, "seleccionarEstudiante", ()=>seleccionarEstudiante);
/**
 * @function
 * @description Muestra el menú de Asignaturas y recoge la opción indicada.
 * 
 * @returns {string|number} La opción indicada.
 * 
 * @example
 * // Devolvera lo que el usuario introduzca.
 * // Por ejemplo: 2
 */ parcelHelpers.export(exports, "seleccionarAsignatura", ()=>seleccionarAsignatura);
/**
 * @function
 * @description Muestra todas las Asignaturas registradas e indica en cuales está matriculado el Estudiante.
 * 
 * @param {number} posicion_Est - Índice del Estudiante en "lista.estudiantes". 
 * 
 * @returns {string|number} La opción indicada.
 * 
 * @example
 * // Devolvera lo que el usuario introduzca.
 * // Por ejemplo: 2
 */ parcelHelpers.export(exports, "mostrarAsignaturasMatricula", ()=>mostrarAsignaturasMatricula);
/**
 * @function
 * @description Muestra todas las Asignaturas en las que está matriculado el Estudiante.
 * 
 * @param {number} posicion_Est - Índice del Estudiante en "lista.estudiantes".
 * 
 * @returns {string|number} La opción indicada.
 * 
 * @example
 * // Devolvera lo que el usuario introduzca.
 * // Por ejemplo: 2
 */ parcelHelpers.export(exports, "mostrarAsignaturasEstudiante", ()=>mostrarAsignaturasEstudiante);
function menuSecundario() {
    console.log("Seleccione una opcion: \n1. Estudiantes \n2. Asignaturas \n0. Salir");
    return prompt("Seleccione una opcion: ");
}
function seleccionarEstudiante() {
    let lista_Estudiantes = "";
    let contador = 1;
    lista.estudiantes.forEach((alumno)=>{
        lista_Estudiantes += `${contador} - [${alumno.id}] ${alumno.nombre}\n`;
        contador++;
    });
    console.log("Seleccione un Estudiante:\n" + `${lista_Estudiantes}` + "0 - Salir");
    return prompt("Seleccione una opcion: ") || 0;
}
function seleccionarAsignatura() {
    let lista_Asignaturas = "";
    let contador = 1;
    lista.asignaturas.forEach((materia)=>{
        lista_Asignaturas += `${contador} - ${materia.nombre}\n`;
        contador++;
    });
    console.log("Seleccione una Asignatura:\n" + `${lista_Asignaturas}` + "0 - Salir");
    return prompt("Seleccione una opcion: ") || 0;
}
function mostrarAsignaturasMatricula(posicion_Est) {
    // Compruebo que la posición sea positiva y no sea mayor a la cantidad de Estudiantes que hay en Lista.
    if (posicion_Est > -1 && posicion_Est < lista.estudiantes.length) {
        const alumno = lista.estudiantes.at(posicion_Est);
        let lista_Asignaturas = `Asignaturas para el Estudiante ${alumno.nombre}: \n`;
        let contador = 1;
        lista.asignaturas.forEach((materia)=>{
            const matriculacion = alumno.asignaturas.includes(materia) ? "[Matriculado]" : "";
            lista_Asignaturas += `${contador} - ${materia.nombre} ${matriculacion}\n`;
            contador++;
        });
        console.log(` ${lista_Asignaturas}` + "0 - Salir");
        return prompt("Seleccione una opcion: ") || 0;
    } else return lista.asignaturas.length + 2; // Devuelvo la cantidad de Estudiantes + 2.
}
function mostrarAsignaturasEstudiante(posicion_Est) {
    if (posicion_Est > -1 && posicion_Est < lista.estudiantes.length) {
        const alumno = lista.estudiantes.at(posicion_Est);
        let lista_Asignaturas = `Asignaturas para el Estudiante ${alumno.nombre}: \n`;
        let contador = 1;
        lista.asignaturas.forEach((materia)=>{
            if (alumno.asignaturas.includes(materia)) {
                const notas = materia.obtenerCalificaciones(alumno.id);
                lista_Asignaturas += `${contador} - ${materia.nombre} [${notas.join(" - ")}] \n`;
                contador++;
            }
        });
        console.log(` ${lista_Asignaturas}` + "0 - Salir");
        const opcion = prompt("Seleccione una opcion: ");
        return opcion < contador ? opcion : lista.asignaturas.length + 2;
    } else return lista.asignaturas.length + 2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1Fqy1","gLLPy"], "gLLPy", "parcelRequire94c2")

//# sourceMappingURL=index.4d6bcbeb.js.map
