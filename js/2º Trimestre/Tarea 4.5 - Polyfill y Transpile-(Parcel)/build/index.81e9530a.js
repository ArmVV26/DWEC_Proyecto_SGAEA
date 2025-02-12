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
})({"kCeF4":[function(require,module,exports,__globalThis) {
var HMR_HOST = null;var HMR_PORT = null;var HMR_SECURE = false;var HMR_ENV_HASH = "d6ea1d42532a7575";var HMR_USE_SSE = false;module.bundle.HMR_BUNDLE_ID = "3521c07f81e9530a";"use strict";

/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */
/*::
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
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData[moduleName],
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */, disposedAssets /*: {|[string]: boolean|} */, assetsToDispose /*: Array<[ParcelRequire, string]> */, assetsToAccept /*: Array<[ParcelRequire, string]> */;
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
  var protocol = HMR_SECURE || location.protocol == 'https:' && !['localhost', '127.0.0.1', '0.0.0.0'].includes(hostname) ? 'wss' : 'ws';
  var ws;
  if (HMR_USE_SSE) {
    ws = new EventSource('/__parcel_hmr');
  } else {
    try {
      ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
      if (err.message) {
        console.error(err.message);
      }
      ws = {};
    }
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
  ws.onmessage = async function (event /*: {data: string, ...} */) {
    checkedAssets = {} /*: {|[string]: boolean|} */;
    disposedAssets = {} /*: {|[string]: boolean|} */;
    assetsToAccept = [];
    assetsToDispose = [];
    var data /*: HMRMessage */ = JSON.parse(event.data);
    if (data.type === 'reload') {
      fullReload();
    } else if (data.type === 'update') {
      // Remove error overlay if there is one
      if (typeof document !== 'undefined') {
        removeErrorOverlay();
      }
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);

      // Handle HMR Update
      let handled = assets.every(asset => {
        return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
      });
      if (handled) {
        console.clear();

        // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
        if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') {
          window.dispatchEvent(new CustomEvent('parcelhmraccept'));
        }
        await hmrApplyUpdates(assets);
        hmrDisposeQueue();

        // Run accept callbacks. This will also re-execute other disposed assets in topological order.
        let processedAssets = {};
        for (let i = 0; i < assetsToAccept.length; i++) {
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
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
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
    ws.onerror = function (e) {
      if (e.message) {
        console.error(e.message);
      }
    };
    ws.onclose = function () {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
  }
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame) => {
      return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
    }, '') : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>💡 ' + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function fullReload() {
  if ('reload' in location) {
    location.reload();
  } else if (extCtx && extCtx.runtime && extCtx.runtime.reload) {
    extCtx.runtime.reload();
  }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var href = link.getAttribute('href');
  if (!href) {
    return;
  }
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href',
  // $FlowFixMe
  href.split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href /*: string */ = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrDownload(asset) {
  if (asset.type === 'js') {
    if (typeof document !== 'undefined') {
      let script = document.createElement('script');
      script.src = asset.url + '?t=' + Date.now();
      if (asset.outputFormat === 'esmodule') {
        script.type = 'module';
      }
      return new Promise((resolve, reject) => {
        var _document$head;
        script.onload = () => resolve(script);
        script.onerror = reject;
        (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
      });
    } else if (typeof importScripts === 'function') {
      // Worker scripts
      if (asset.outputFormat === 'esmodule') {
        return __parcel__import__(asset.url + '?t=' + Date.now());
      } else {
        return new Promise((resolve, reject) => {
          try {
            __parcel__importScripts__(asset.url + '?t=' + Date.now());
            resolve();
          } catch (err) {
            reject(err);
          }
        });
      }
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
      let promises = assets.map(asset => {
        var _hmrDownload;
        return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch(err => {
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
    assets.forEach(function (asset) {
      hmrApply(module.bundle.root, asset);
    });
  } finally {
    delete global.parcelHotUpdate;
    if (scriptsToRemove) {
      scriptsToRemove.forEach(script => {
        if (script) {
          var _document$head2;
          (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
        }
      });
    }
  }
}
function hmrApply(bundle /*: ParcelRequire */, asset /*:  HMRAsset */) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
  } else if (asset.type === 'js') {
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
      if (modules[asset.id]) {
        // Remove dependencies that are removed and will become orphaned.
        // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
        let oldDeps = modules[asset.id][1];
        for (let dep in oldDeps) {
          if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
            let id = oldDeps[dep];
            let parents = getParents(module.bundle.root, id);
            if (parents.length === 1) {
              hmrDelete(module.bundle.root, id);
            }
          }
        }
      }
      if (supportsSourceURL) {
        // Global eval. We would use `new Function` here but browser
        // support for source maps is better with eval.
        (0, eval)(asset.output);
      }

      // $FlowFixMe
      let fn = global.parcelHotUpdate[asset.id];
      modules[asset.id] = [fn, deps];
    }

    // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
    // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
    if (bundle.parent) {
      hmrApply(bundle.parent, asset);
    }
  }
}
function hmrDelete(bundle, id) {
  let modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[id]) {
    // Collect dependencies that will become orphaned when this module is deleted.
    let deps = modules[id][1];
    let orphans = [];
    for (let dep in deps) {
      let parents = getParents(module.bundle.root, deps[dep]);
      if (parents.length === 1) {
        orphans.push(deps[dep]);
      }
    }

    // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
    delete modules[id];
    delete bundle.cache[id];

    // Now delete the orphans.
    orphans.forEach(id => {
      hmrDelete(module.bundle.root, id);
    });
  } else if (bundle.parent) {
    hmrDelete(bundle.parent, id);
  }
}
function hmrAcceptCheck(bundle /*: ParcelRequire */, id /*: string */, depsByBundle /*: ?{ [string]: { [string]: string } }*/) {
  if (hmrAcceptCheckOne(bundle, id, depsByBundle)) {
    return true;
  }

  // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
  let parents = getParents(module.bundle.root, id);
  let accepted = false;
  while (parents.length > 0) {
    let v = parents.shift();
    let a = hmrAcceptCheckOne(v[0], v[1], null);
    if (a) {
      // If this parent accepts, stop traversing upward, but still consider siblings.
      accepted = true;
    } else {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */, id /*: string */, depsByBundle /*: ?{ [string]: { [string]: string } }*/) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return true;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToDispose.push([bundle, id]);
  if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
    assetsToAccept.push([bundle, id]);
    return true;
  }
}
function hmrDisposeQueue() {
  // Dispose all old assets.
  for (let i = 0; i < assetsToDispose.length; i++) {
    let id = assetsToDispose[i][1];
    if (!disposedAssets[id]) {
      hmrDispose(assetsToDispose[i][0], id);
      disposedAssets[id] = true;
    }
  }
  assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */, id /*: string */) {
  var cached = bundle.cache[id];
  bundle.hotData[id] = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData[id];
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData[id]);
    });
  }
  delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */, id /*: string */) {
  // Execute the module.
  bundle(id);

  // Run the accept callbacks in the new version of the module.
  var cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    let assetsToAlsoAccept = [];
    cached.hot._acceptCallbacks.forEach(function (cb) {
      let additionalAssets = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (Array.isArray(additionalAssets) && additionalAssets.length) {
        assetsToAlsoAccept.push(...additionalAssets);
      }
    });
    if (assetsToAlsoAccept.length) {
      let handled = assetsToAlsoAccept.every(function (a) {
        return hmrAcceptCheck(a[0], a[1]);
      });
      if (!handled) {
        return fullReload();
      }
      hmrDisposeQueue();
    }
  }
}
},{}],"gLLPy":[function(require,module,exports,__globalThis) {
"use strict";

var _Direccion = require("./Direccion.js");
var _Persona = require("./Persona.js");
var _Asignatura = require("./Asignatura.js");
var _Estudiante = require("./Estudiante.js");
var _Lista = require("./Lista.js");
var _Menus = require("./Menus.js");
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
 */

/*
    ┌─────────────┐
    │ C L A S E S │
    └─────────────┘
    * En esta sección se definen las clases usadas en el proyecto. Cada clase contiene sus atributos,
        constructores y métodos.
*/

/*
    ┌─────────────────────────────────┐
    │ C Ó D I G O   P R I N C I P A L │
    └─────────────────────────────────┘
    * En esta sección se encuentra el código principal que se ejecuta al cargar el srcipt.
*/
/*
    AÑADIR DATOS
    ────────────
    * Aqui añado datos para probar la funcionalidades de las clases, sin la necesidad de crear todo el
        rato Estudiantes, Asignaturas, etc.
*/

//Creacion de las Direcciones.
var dir1 = new _Direccion.Direccion("Calle Una", 1, 0, 10000, "Granada", "Pulianas");
var dir2 = new _Direccion.Direccion("Calle Dos", 2, 1, 20000, "Granada", "Pulianas");
var dir3 = new _Direccion.Direccion("Calle Tres", 3, 2, 30000, "Granada", "Pulianas");
var dir4 = new _Direccion.Direccion("Calle Cuatro", 4, 3, 40000, "Granada", "Pulianas");
var dir5 = new _Direccion.Direccion("Calle Cinco", 5, 4, 50000, "Granada", "Pulianas");
var dir6 = new _Direccion.Direccion("Calle Seis", 6, 5, 60000, "Granada", "Pulianas");

// Creación de las Asignaturas.
var DAWEB = new _Asignatura.Asignatura("DAWEB");
var DWESE = new _Asignatura.Asignatura("DWESE");
var DWECL = new _Asignatura.Asignatura("DWECL");
var DIWEB = new _Asignatura.Asignatura("DIWEB");
var IAB = new _Asignatura.Asignatura("IAB");

// Creación de los Estudiantes.
var armando = new _Estudiante.Estudiante("Armando Vaquero", 23, dir1);
var antonio = new _Estudiante.Estudiante("Antonio Fernandez", 31, dir2);
var marcos = new _Estudiante.Estudiante("Marcos Pineda", 22, dir3);
var andrea = new _Estudiante.Estudiante("Andrea Lopez", 21, dir4);
var claudia = new _Estudiante.Estudiante("Claudia Perez", 26, dir5);
var jose = new _Estudiante.Estudiante("Jose Campos", 28, dir6);

// Creación de la Lista.
var lista = new _Lista.Lista();

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

/*
    FUNCIONES MENÚ
    ──────────────
    * Sección donde se encuentran importadas las diferentes funciones necesarias para la ejecución del código.    
*/

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
 */
function menuPrincipal() {
  var salir = false;
  while (!salir) {
    console.log("Menú Principal: \n" + "1. Agregar Estudiante / Asignatura \n" + "2. Eliminar Estudiante / Asignatura \n" + "3. Mostrar Estudiantes / Asignaturas \n" + "4. Matricular Estudiante \n" + "5. Desmatricular Estudiante \n" + "6. Añadir Calificación \n" + "7. Mostrar Historial de un Estudiante \n" + "8. Buscar Estudiante / Asignatura \n" + "0. Salir del programa");
    var opcion = prompt("Seleccione una opción: ");
    switch (opcion) {
      /**
       * Opcion 1: Agregar Estudiante / Asignatura.
       * Permite crear un Estudiante o Asignatura nuevos. Depdende de lo que se seleccione en el menú secundario.
       */
      case "1":
        console.clear();
        switch ((0, _Menus.menuSecundario)()) {
          case "1":
            console.clear();
            console.log("Comience con la creacion del Estudiante: ");
            var nombre_Est = prompt("Introduce el nombre del estudiante:");
            console.log("Nombre: ".concat(nombre_Est));
            var edad = parseInt(prompt("Introduce la edad del estudiante:"));
            console.log("Edad: ".concat(edad));
            var calle = prompt("Introduce la calle del estudiante:");
            console.log("Direccion: \n" + "  - Calle: ".concat(calle));
            var numero = parseInt(prompt("Introduce el número de la dirección:"));
            console.log("  - Numero: ".concat(numero));
            var piso = parseInt(prompt("Introduce el piso (0 si no aplica):"));
            console.log("  - Piso: ".concat(piso));
            var cod_postal = parseInt(prompt("Introduce el código postal:"));
            console.log("  - Cod. Postal: ".concat(cod_postal));
            var provincia = prompt("Introduce la provincia:");
            console.log("  - Provincia: ".concat(provincia));
            var localidad = prompt("Introduce la localidad:");
            console.log("  - Localidad: ".concat(localidad));
            try {
              // Creo una instancia de Dirección y de Estudiante.
              var dir_Nueva = new _Direccion.Direccion(calle, numero, piso, cod_postal, provincia, localidad);
              var est_Nuevo = new _Estudiante.Estudiante(nombre_Est, edad, dir_Nueva);

              // Guardo al Estudiante en la Lista.
              console.log(lista.agregarEstudiante(est_Nuevo));
            } catch (error) {
              console.error("Error - No se pudo crear el Estudiante: " + error.message);
            }
            break;
          case "2":
            var nombre_Asig = prompt("Introduce el nombre de la asignatura:");
            try {
              // Creo una instancia de Asignatura
              var asig_Nueva = new _Asignatura.Asignatura(nombre_Asig);
              console.log(lista.agregarAsignatura(asig_Nueva));
            } catch (error) {
              console.error("Error - No se pudo crear la Asignatura: " + error.message);
            }
            break;
          case "0":
            console.clear();
            console.log("Vovliendo al Menú Principal ...");
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
       */
      case "2":
        console.clear();
        switch ((0, _Menus.menuSecundario)()) {
          case "1":
            var _posicion_Est = (0, _Menus.seleccionarEstudiante)() - 1; // Obtengo la posición.
            if (_posicion_Est > -1) {
              var alumno = lista.estudiantes.at(_posicion_Est); // Obtengo el alumno de la Lista.

              console.clear();
              console.log(lista.eliminarEstudiante(alumno)); // Lo elimino.
            } else if (_posicion_Est === -1) {
              console.clear();
              console.log("Vovliendo al Menú Principal ...");
            } else {
              console.log(_posicion_Est);
              alert("Error al introducir una opcion");
            }
            break;
          case "2":
            var _posicion_Asig = (0, _Menus.seleccionarAsignatura)() - 1;
            if (_posicion_Asig > -1) {
              var materia = lista.asignaturas.at(_posicion_Asig); // Obtengo la materia.

              console.clear();
              lista.eliminarAsignatura(materia);
            } else if (_posicion_Est === -1) {
              console.clear();
              console.log("Vovliendo al Menú Principal ...");
            } else {
              alert("Error al introducir una opcion");
            }
            break;
          case "0":
            console.clear();
            console.log("Vovliendo al Menú Principal ...");
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
       */
      case "3":
        console.clear();
        switch ((0, _Menus.menuSecundario)()) {
          case "1":
            // Recorro "lista.estudiantes" y ejecuto para cada alumno el método "mostrarEstudiante()".
            console.log(lista.estudiantes.map(function (alumno) {
              return alumno.mostrarEstudiante();
            }).join("\n"));
            break;
          case "2":
            // Recorro "lista.asignaturas" y ejecuto para cada materia el método "mostrarAsignaturas()".
            console.log(lista.asignaturas.map(function (materia) {
              return materia.mostrarAsignaturas();
            }).join("\n"));
            break;
          case "0":
            console.clear();
            console.log("Vovliendo al Menú Principal ...");
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
       */
      case "4":
        console.clear();
        var posicion_Est = (0, _Menus.seleccionarEstudiante)() - 1; // Obtengo la posición del Estudiante.
        var posicion_Asig = (0, _Menus.mostrarAsignaturasMatricula)(posicion_Est) - 1; // Obtengo la posición de la Asignatura.

        if (posicion_Asig > -1 && posicion_Asig < lista.asignaturas.length) {
          var _alumno = lista.estudiantes.at(posicion_Est); // Obtengo el Estudiante.
          var _materia = lista.asignaturas.at(posicion_Asig); // Obtengo la Asignatura.

          _alumno.matricular(_materia); // Hago la matriculación.  
          console.clear();
          console.log("Estudiante ".concat(_alumno.nombre, " Matriculado en ").concat(_materia.nombre));
        } else if (posicion_Asig === -1) {
          console.clear();
          console.log("Vovliendo al Menú Principal ...");
        } else {
          console.clear();
          alert("Error al introducir una opcion");
        }
        break;
      /**
       * Opcion 5: Desmatricular Estudiante.
       * Permite desmatricular a un Estudiante de una Asignatura.
       */
      case "5":
        console.clear();
        var posicion_Alumno = (0, _Menus.seleccionarEstudiante)() - 1;
        var posicion_Materia = (0, _Menus.mostrarAsignaturasMatricula)(posicion_Alumno) - 1;
        if (posicion_Materia > -1 && posicion_Materia < lista.asignaturas.length) {
          var _alumno2 = lista.estudiantes.at(posicion_Alumno);
          var _materia2 = lista.asignaturas.at(posicion_Materia);
          _alumno2.desmatricular(_materia2); // Hago la desmatriculación.
          console.clear();
          console.log("Estudiante ".concat(_alumno2.nombre, " Desmatriculado de ").concat(_materia2.nombre));
        } else if (posicion_Materia === -1) {
          console.clear();
          console.log("Vovliendo al Menú Principal ...");
        } else {
          console.clear();
          alert("Error al introducir una opcion");
        }
        break;
      /**
       * Opcion 6: Añadir Calificación.
       * Permite añadir una calificación a un Estudiante en una Asignatura.
       */
      case "6":
        console.clear();
        var pos_Estudiante = (0, _Menus.seleccionarEstudiante)() - 1;
        var pos_Materia = (0, _Menus.mostrarAsignaturasEstudiante)(pos_Estudiante) - 1;
        if (pos_Materia > -1 && pos_Materia < lista.asignaturas.length) {
          var _alumno3 = lista.estudiantes.at(pos_Estudiante);
          var _materia3 = lista.asignaturas.at(pos_Materia);
          console.log("Indica la calificacion");
          var calificacion = parseFloat(prompt("Indica la calificación a añadir: "));
          try {
            _materia3.addCalificacion(_alumno3.id, calificacion); // Añado la calificación.

            console.clear();
            console.log("Al Estudiante ".concat(_alumno3.nombre, " se le ha a\xF1adido la nota ").concat(calificacion, " en la Asignatura ").concat(_materia3.nombre));
          } catch (error) {
            console.clear();
            console.error("Error - No se pudo añadir la calificación: " + error.message);
          }
        } else if (pos_Materia === -1) {
          console.clear();
          console.log("Vovliendo al Menú Principal ...");
        } else {
          console.clear();
          alert("Error al introducir una opcion");
        }
        break;
      /**
       * Opcion 7: Mostrar Historial de un Estudiante.
       * Permite mostrar el historial de un Estudiante.
       */
      case "7":
        console.clear();
        var pos_Est = (0, _Menus.seleccionarEstudiante)() - 1;
        if (pos_Est > -1 && pos_Est < lista.estudiantes.length) {
          console.clear();
          var _alumno4 = lista.estudiantes.at(pos_Est);
          console.log(_alumno4.mostrarHistorial()); // Muestro el historial del Estudiante.
        } else if (pos_Est === -1) {
          console.clear();
          console.log("Vovliendo al Menú Principal ...");
        } else {
          console.clear();
          alert("Error al introducir una opcion");
        }
        break;
      /**
       * Opcion 8: Buscar Estudiante / Asignatura.
       * Permite buscar a un Estudiante o una Asignatura por un patrón de su nombre.
       */
      case "8":
        console.clear();
        switch ((0, _Menus.menuSecundario)()) {
          case "1":
            console.clear();
            console.log("Indica el patron de busqueda para el Estudiante");
            var patron_Est = prompt("Introduce el patron"); // Obtengo el patrón.

            console.clear();
            console.log("Los Estudiantes que coinciden con \"".concat(patron_Est, "\" son: \n") + lista.buscarEstudiante(patron_Est)); // Muestro los resultados.
            break;
          case "2":
            console.clear();
            console.log("Indica el patron de busqueda para la Asignatura");
            var patron_Asig = prompt("Introduce el patron");
            console.clear();
            console.log("Las Asignaturas que coninciden con \"".concat(patron_Asig, "\" son: \n") + lista.buscarAsignatura(patron_Asig));
            break;
          case "0":
            console.clear();
            console.log("Vovliendo al Menú Principal ...");
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
       */
      case "0":
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
},{}]},["kCeF4","gLLPy"], "gLLPy", "parcelRequire94c2")

//# sourceMappingURL=index.81e9530a.js.map
