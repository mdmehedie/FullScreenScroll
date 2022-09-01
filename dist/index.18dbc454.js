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
        this
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
})({"jQVXF":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1SICI":[function(require,module,exports) {
(function(window1) {
    "use strict";
    /**
	 * StackFx: The parent class.
	 */ function StackFx(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.stack = this.DOM.el.querySelector(".stack");
        this.DOM.stackItems = [].slice.call(this.DOM.stack.children);
        this.totalItems = this.DOM.stackItems.length;
        this.DOM.img = this.DOM.stack.querySelector(".stack__figure > .stack__img");
        this.DOM.caption = this.DOM.el.querySelector(".grid__item-caption");
        this.DOM.title = this.DOM.caption.querySelector(".grid__item-title");
        this.DOM.columns = {
            left: this.DOM.caption.querySelector(".column--left"),
            right: this.DOM.caption.querySelector(".column--right")
        };
    }
    StackFx.prototype._removeAnimeTargets = function() {
        anime.remove(this.DOM.stackItems);
        anime.remove(this.DOM.img);
        anime.remove(this.DOM.title);
        anime.remove(this.DOM.columns.left);
        anime.remove(this.DOM.columns.right);
    };
    /************************************************************************
	 * VegaFx.
	 ************************************************************************/ function VegaFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
    VegaFx.prototype = Object.create(StackFx.prototype);
    VegaFx.prototype.constructor = VegaFx;
    VegaFx.prototype._initEvents = function() {
        var self = this;
        this._mouseenterFn = function() {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function() {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.stack.addEventListener("mouseleave", this._mouseleaveFn);
    };
    VegaFx.prototype._in = function() {
        var self = this;
        this.DOM.stackItems.map(function(e, i) {
            e.style.opacity = i !== self.totalItems - 1 ? 0.2 * i + 0.2 : 1;
        });
        anime({
            targets: this.DOM.stackItems,
            translateZ: [
                {
                    value: function(target, index) {
                        return index * 8 + 8;
                    },
                    duration: 200,
                    easing: [
                        0.42,
                        0,
                        1,
                        1
                    ]
                },
                {
                    value: function(target, index) {
                        return index * 20 + 20;
                    },
                    duration: 700,
                    easing: [
                        0.2,
                        1,
                        0.3,
                        1
                    ]
                }
            ],
            rotateX: [
                {
                    value: function(target, index) {
                        return -1 * (index * 2 + 2);
                    },
                    duration: 200,
                    easing: [
                        0.42,
                        0,
                        1,
                        1
                    ]
                },
                {
                    value: 0,
                    duration: 700,
                    easing: [
                        0.2,
                        1,
                        0.3,
                        1
                    ]
                }
            ]
        });
        anime({
            targets: this.DOM.img,
            duration: 900,
            easing: [
                0.2,
                1,
                0.3,
                1
            ],
            scale: 0.7
        });
        anime({
            targets: this.DOM.title,
            translateY: {
                value: [
                    35,
                    0
                ],
                duration: 500,
                easing: [
                    0.5,
                    1,
                    0.3,
                    1
                ]
            },
            opacity: {
                value: [
                    0,
                    1
                ],
                duration: 400,
                easing: "linear"
            }
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            translateY: [
                {
                    value: function(target, index) {
                        return index === 0 ? [
                            40,
                            0
                        ] : [
                            60,
                            0
                        ];
                    },
                    duration: 500,
                    easing: [
                        0.5,
                        1,
                        0.3,
                        1
                    ],
                    delay: 100
                }
            ],
            opacity: [
                {
                    value: [
                        0,
                        0
                    ],
                    duration: 1,
                    easing: "linear"
                },
                {
                    value: 1,
                    delay: 100,
                    duration: 400,
                    easing: "linear"
                }
            ]
        });
    };
    VegaFx.prototype._out = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            translateZ: [
                {
                    value: function(target, index) {
                        return index * 20 + 20 - 8;
                    },
                    duration: 200,
                    easing: [
                        0.42,
                        0,
                        1,
                        1
                    ]
                },
                {
                    value: 0,
                    duration: 900,
                    easing: [
                        0.2,
                        1,
                        0.3,
                        1
                    ]
                }
            ],
            rotateX: [
                {
                    value: function(target, index) {
                        return index * 2 + 2;
                    },
                    duration: 200,
                    easing: [
                        0.42,
                        0,
                        1,
                        1
                    ]
                },
                {
                    value: 0,
                    duration: 900,
                    easing: [
                        0.2,
                        1,
                        0.3,
                        1
                    ]
                }
            ],
            opacity: {
                value: function(target, index, cnt) {
                    return index !== cnt - 1 ? 0 : 1;
                },
                duration: 900,
                delay: 200,
                easing: [
                    0.2,
                    1,
                    0.3,
                    1
                ]
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 900,
            easing: [
                0.2,
                1,
                0.3,
                1
            ],
            scale: 1
        });
        anime({
            targets: this.DOM.title,
            duration: 750,
            easing: [
                0.2,
                1,
                0.3,
                1
            ],
            translateY: 0,
            opacity: 1
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 750,
            easing: [
                0.2,
                1,
                0.3,
                1
            ],
            translateY: 0,
            opacity: 1
        });
    };
    window1.VegaFx = VegaFx;
    /************************************************************************
	 * CastorFx.
	 ************************************************************************/ function CastorFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
    CastorFx.prototype = Object.create(StackFx.prototype);
    CastorFx.prototype.constructor = CastorFx;
    CastorFx.prototype._initEvents = function() {
        var self = this;
        this._mouseenterFn = function() {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function() {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.stack.addEventListener("mouseleave", this._mouseleaveFn);
    };
    CastorFx.prototype._in = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            rotateX: {
                value: function(target, index, cnt) {
                    return index === cnt - 1 ? 0 : [
                        70,
                        0
                    ];
                },
                duration: 1000,
                easing: "easeOutExpo"
            },
            translateZ: {
                value: function(target, index, cnt) {
                    return index === cnt - 1 ? index * 20 : [
                        -300,
                        index * 20
                    ];
                },
                duration: 1000,
                easing: "easeOutExpo"
            },
            opacity: {
                value: function(target, index, cnt) {
                    return index === cnt - 1 ? 1 : [
                        0,
                        0.2 * index + 0.2
                    ];
                },
                duration: 1000,
                easing: "linear"
            },
            delay: function(target, index, cnt) {
                return (cnt - index - 1) * 100;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 1000,
            easing: "easeOutExpo",
            scale: 0.7
        });
        anime({
            targets: this.DOM.title,
            duration: 1000,
            easing: "easeOutExpo",
            translateZ: 30
        });
    };
    CastorFx.prototype._out = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            easing: "easeOutExpo",
            translateZ: 0,
            opacity: function(target, index, cnt) {
                return index !== cnt - 1 ? 0 : 1;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 1000,
            easing: "easeOutExpo",
            scale: 1
        });
        anime({
            targets: this.DOM.title,
            duration: 1000,
            easing: "easeOutExpo",
            translateZ: 0
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 500,
            easing: "easeOutExpo",
            delay: function(target, index) {
                return index === 0 ? 150 : 200;
            },
            translateX: 0,
            translateY: 0
        });
    };
    window1.CastorFx = CastorFx;
    /************************************************************************
	 * HamalFx.
	 ************************************************************************/ function HamalFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
    HamalFx.prototype = Object.create(StackFx.prototype);
    HamalFx.prototype.constructor = HamalFx;
    HamalFx.prototype._initEvents = function() {
        var self = this;
        this._mouseenterFn = function() {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function() {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.stack.addEventListener("mouseleave", this._mouseleaveFn);
    };
    HamalFx.prototype._in = function() {
        var self = this;
        this.DOM.stackItems.map(function(e, i) {
            e.style.opacity = i !== self.totalItems - 1 ? 0.2 * i + 0.2 : 1;
        });
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            easing: "easeOutExpo",
            translateY: function(target, index) {
                return -1 * index * 5;
            },
            rotate: function(target, index, cnt) {
                if (index === cnt - 1) return 0;
                else return index % 2 ? (cnt - index) * 1 : -1 * (cnt - index) * 1;
            },
            scale: function(target, index, cnt) {
                if (index === cnt - 1) return 1;
                else return 1.05;
            },
            delay: function(target, index, cnt) {
                return (cnt - index - 1) * 30;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 1000,
            easing: "easeOutExpo",
            scale: 0.7
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 1000,
            easing: "easeOutExpo",
            translateX: function(target, index) {
                return index === 0 ? -30 : 30;
            }
        });
    };
    HamalFx.prototype._out = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 500,
            easing: "easeOutExpo",
            translateY: 0,
            rotate: 0,
            scale: 1,
            opacity: function(target, index, cnt) {
                return index !== cnt - 1 ? 0 : 1;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 1000,
            easing: "easeOutElastic",
            scale: 1
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 500,
            easing: "easeOutExpo",
            translateX: 0
        });
    };
    window1.HamalFx = HamalFx;
    /************************************************************************
	 * PolarisFx.
	 ************************************************************************/ function PolarisFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
    PolarisFx.prototype = Object.create(StackFx.prototype);
    PolarisFx.prototype.constructor = PolarisFx;
    PolarisFx.prototype._initEvents = function() {
        var self = this;
        this._mouseenterFn = function() {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function() {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.stack.addEventListener("mouseleave", this._mouseleaveFn);
    };
    PolarisFx.prototype._in = function() {
        var self = this;
        this.DOM.stackItems.map(function(e, i) {
            e.style.opacity = i !== self.totalItems - 1 ? 0.2 * i + 0.2 : 1;
        });
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            easing: "easeOutElastic",
            translateZ: function(target, index) {
                return index * 10;
            },
            delay: function(target, index, cnt) {
                return (cnt - index - 1) * 20;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 500,
            easing: "easeOutExpo",
            scale: 0.7
        });
        anime({
            targets: this.DOM.title,
            duration: 1000,
            easing: "easeOutElastic",
            translateZ: 30
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 1000,
            easing: "easeOutElastic",
            translateX: function(target, index) {
                return index === 0 ? -30 : 30;
            },
            translateY: 30
        });
    };
    PolarisFx.prototype._out = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            easing: "easeOutExpo",
            translateZ: 0,
            opacity: function(target, index, cnt) {
                return index !== cnt - 1 ? 0 : 1;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 1000,
            easing: "easeOutExpo",
            scale: 1
        });
        anime({
            targets: this.DOM.title,
            duration: 500,
            delay: 100,
            easing: "easeOutExpo",
            translateZ: 0
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 500,
            easing: "easeOutExpo",
            delay: function(target, index) {
                return index === 0 ? 150 : 200;
            },
            translateX: 0,
            translateY: 0
        });
    };
    window1.PolarisFx = PolarisFx;
    /************************************************************************
	 * AlphardFx.
	 ************************************************************************/ function AlphardFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
    AlphardFx.prototype = Object.create(StackFx.prototype);
    AlphardFx.prototype.constructor = AlphardFx;
    AlphardFx.prototype._initEvents = function() {
        var self = this;
        this._mouseenterFn = function() {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function() {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.stack.addEventListener("mouseleave", this._mouseleaveFn);
    };
    AlphardFx.prototype._in = function() {
        var self = this;
        this.DOM.stackItems.map(function(e, i) {
            e.style.opacity = i !== self.totalItems - 1 ? 0.2 * i + 0.2 : 1;
        });
        anime({
            targets: this.DOM.stackItems,
            opacity: {
                value: function(target, index, cnt) {
                    return index !== cnt - 1 ? [
                        0,
                        0.2 * index + 0.2
                    ] : 1;
                },
                duration: 1,
                easing: "linear",
                delay: function(target, index, cnt) {
                    return (cnt - index - 1) * 30 + 250;
                }
            },
            rotate: [
                {
                    value: 12,
                    duration: 250,
                    easing: "easeOutQuad"
                },
                {
                    value: function(target, index) {
                        return -1 * index * 3 - 3;
                    },
                    duration: 1000,
                    easing: "easeOutExpo"
                }
            ],
            delay: function(target, index, cnt) {
                return (cnt - index - 1) * 30;
            }
        });
        anime({
            targets: this.DOM.img,
            rotate: [
                {
                    value: [
                        0,
                        12
                    ],
                    duration: 250,
                    easing: "easeOutQuad"
                },
                {
                    value: [
                        12,
                        0
                    ],
                    duration: 1200,
                    delay: 50,
                    easing: "easeOutExpo"
                }
            ]
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 500,
            easing: "easeOutExpo",
            translateY: function(target, index) {
                return index === 0 ? -5 : 5;
            }
        });
    };
    AlphardFx.prototype._out = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 500,
            easing: "easeOutExpo",
            rotate: 0,
            opacity: function(target, index, cnt) {
                return index !== cnt - 1 ? 0 : 1;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 1000,
            easing: "easeOutExpo",
            rotate: 1
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 500,
            easing: "easeOutExpo",
            translateY: 0
        });
    };
    window1.AlphardFx = AlphardFx;
    /************************************************************************
	 * AltairFx.
	 ************************************************************************/ function AltairFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
    AltairFx.prototype = Object.create(StackFx.prototype);
    AltairFx.prototype.constructor = AltairFx;
    AltairFx.prototype._initEvents = function() {
        var self = this;
        this._mouseenterFn = function() {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function() {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.stack.addEventListener("mouseleave", this._mouseleaveFn);
    };
    AltairFx.prototype._in = function() {
        var self = this;
        this.DOM.stackItems.map(function(e, i) {
            e.style.opacity = i !== self.totalItems - 1 ? 0.2 * i + 0.2 : 1;
        });
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            easing: "easeOutElastic",
            translateZ: function(target, index, cnt) {
                return index * 3;
            },
            rotateX: function(target, index, cnt) {
                return -1 * index * 4;
            },
            delay: function(target, index, cnt) {
                return (cnt - index - 1) * 30;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 500,
            easing: "easeOutExpo",
            scale: 0.7
        });
        anime({
            targets: this.DOM.title,
            duration: 1000,
            easing: "easeOutElastic",
            translateY: 20
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 1000,
            easing: "easeOutElastic",
            translateY: function(target, index) {
                return index === 0 ? 30 : 20;
            }
        });
    };
    AltairFx.prototype._out = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 500,
            easing: "easeOutExpo",
            opacity: function(target, index, cnt) {
                return index !== cnt - 1 ? 0 : 1;
            },
            translateZ: 0,
            rotateX: 0
        });
        anime({
            targets: this.DOM.img,
            duration: 500,
            easing: "easeOutExpo",
            scale: 1
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right,
                this.DOM.title
            ],
            duration: 500,
            easing: "easeOutExpo",
            translateY: 0
        });
    };
    window1.AltairFx = AltairFx;
    /************************************************************************
	 * RigelFx.
	 ************************************************************************/ function RigelFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
    RigelFx.prototype = Object.create(StackFx.prototype);
    RigelFx.prototype.constructor = RigelFx;
    RigelFx.prototype._initEvents = function() {
        var self = this;
        this._mouseenterFn = function() {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function() {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.stack.addEventListener("mouseleave", this._mouseleaveFn);
    };
    RigelFx.prototype._in = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            translateZ: {
                value: function(target, index) {
                    return index * 10;
                },
                duration: 800,
                easing: "easeOutExpo",
                delay: 200
            },
            opacity: {
                value: function(target, index, cnt) {
                    return index !== cnt - 1 ? [
                        0,
                        0.1 * index + 0.1
                    ] : 1;
                },
                duration: 1,
                easing: "linear",
                delay: 200
            },
            translateY: [
                {
                    value: function(target, index) {
                        return -1 * index * 10;
                    },
                    duration: 800,
                    delay: 200,
                    elasticity: 300
                }, 
            ],
            scaleY: [
                {
                    value: 0.8,
                    duration: 200,
                    easing: "easeOutExpo"
                },
                {
                    value: 1,
                    duration: 800,
                    elasticity: 300
                }
            ],
            scaleX: [
                {
                    value: 1.1,
                    duration: 200,
                    easing: "easeOutExpo"
                },
                {
                    value: 1,
                    duration: 800,
                    elasticity: 300
                }
            ]
        });
        anime({
            targets: this.DOM.img,
            duration: 900,
            easing: "easeOutExpo",
            delay: 200,
            scale: 0.7
        });
        anime({
            targets: this.DOM.title,
            translateY: {
                value: [
                    200,
                    0
                ],
                duration: 800,
                easing: "easeOutExpo"
            },
            opacity: {
                value: [
                    0,
                    1
                ],
                duration: 400,
                delay: 200,
                easing: "linear"
            }
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            translateY: [
                {
                    value: [
                        60,
                        0
                    ],
                    duration: 800,
                    easing: "easeOutExpo",
                    delay: 200
                }
            ],
            opacity: [
                {
                    value: [
                        0,
                        0
                    ],
                    duration: 1,
                    easing: "linear"
                },
                {
                    value: 1,
                    delay: 300,
                    duration: 400,
                    easing: "linear"
                }
            ]
        });
    };
    RigelFx.prototype._out = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 800,
            easing: "easeOutElastic",
            translateZ: 0,
            opacity: function(target, index, cnt) {
                return index !== cnt - 1 ? 0 : 1;
            },
            translateY: 0
        });
        anime({
            targets: this.DOM.img,
            duration: 800,
            easing: "easeOutElastic",
            scale: 1
        });
        anime({
            targets: this.DOM.title,
            duration: 800,
            easing: "easeOutExpo",
            translateY: 0,
            opacity: 1
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 800,
            easing: "easeOutExpo",
            translateY: 0,
            opacity: 1
        });
    };
    window1.RigelFx = RigelFx;
    /************************************************************************
	 * CanopusFx.
	 ************************************************************************/ function CanopusFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
    CanopusFx.prototype = Object.create(StackFx.prototype);
    CanopusFx.prototype.constructor = CanopusFx;
    CanopusFx.prototype._initEvents = function() {
        var self = this;
        this._mouseenterFn = function() {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function() {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.stack.addEventListener("mouseleave", this._mouseleaveFn);
    };
    CanopusFx.prototype._in = function() {
        var self = this;
        this.DOM.stackItems.map(function(e, i) {
            e.style.opacity = i !== self.totalItems - 1 ? 0 : 1;
        });
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            translateZ: {
                value: function(target, index, cnt) {
                    return -1 * (cnt - index - 1) * 20;
                },
                duration: 800,
                easing: "easeOutExpo",
                delay: function(target, index, cnt) {
                    return (cnt - index - 1) * 70 + 200;
                }
            },
            translateY: [
                {
                    value: function(target, index) {
                        return -1 * index * 20 - 30;
                    },
                    duration: 800,
                    delay: function(target, index, cnt) {
                        return (cnt - index - 1) * 70 + 200;
                    },
                    elasticity: 500
                }, 
            ],
            scaleY: [
                {
                    value: function(target, index, cnt) {
                        return index === cnt - 1 ? 0.6 : 1;
                    },
                    duration: 200,
                    easing: "easeOutExpo"
                },
                {
                    value: 0.8,
                    duration: 800,
                    elasticity: 450
                }
            ],
            scaleX: [
                {
                    value: function(target, index, cnt) {
                        return index === cnt - 1 ? 1.1 : 1;
                    },
                    duration: 200,
                    easing: "easeOutExpo"
                },
                {
                    value: 0.8,
                    duration: 800,
                    elasticity: 300
                }
            ],
            opacity: {
                value: function(target, index, cnt) {
                    return index === cnt - 1 ? 1 : [
                        0,
                        0.2 * index + 0.2
                    ];
                },
                duration: 200,
                easing: "linear",
                delay: function(target, index, cnt) {
                    return (cnt - index - 1) * 70 + 200;
                }
            }
        });
        anime({
            targets: this.DOM.img,
            scale: [
                {
                    value: 1.8,
                    duration: 200,
                    easing: "easeOutExpo"
                },
                {
                    value: 0.7,
                    duration: 1100,
                    easing: "easeOutExpo"
                }
            ]
        });
        anime({
            targets: [
                this.DOM.title,
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 1000,
            easing: "easeOutElastic",
            translateY: -30,
            delay: 200
        });
    };
    CanopusFx.prototype._out = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 500,
            easing: "easeOutExpo",
            translateZ: 0,
            translateY: 0,
            scaleY: 1,
            scaleX: 1,
            opacity: function(target, index, cnt) {
                return index !== cnt - 1 ? 0 : 1;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 500,
            easing: "easeOutExpo",
            scale: 1
        });
        anime({
            targets: [
                this.DOM.title,
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 500,
            easing: "easeOutExpo",
            translateY: 0
        });
    };
    window1.CanopusFx = CanopusFx;
    /************************************************************************
	 * PolluxFx.
	 ************************************************************************/ function PolluxFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
    PolluxFx.prototype = Object.create(StackFx.prototype);
    PolluxFx.prototype.constructor = PolluxFx;
    PolluxFx.prototype._initEvents = function() {
        var self = this;
        this._mouseenterFn = function() {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function() {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.stack.addEventListener("mouseleave", this._mouseleaveFn);
    };
    PolluxFx.prototype._in = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            opacity: {
                value: function(target, index, cnt) {
                    return index !== cnt - 1 ? [
                        0,
                        0.1 * index + 0.1
                    ] : 1;
                },
                easing: "linear",
                delay: function(target, index, cnt) {
                    return (cnt - index - 1) * 60;
                }
            },
            translateY: {
                value: function(target, index) {
                    return -1 * index * 10;
                },
                easing: "easeInOutCubic"
            },
            rotateX: {
                value: 80,
                easing: "easeInOutCubic"
            },
            rotateZ: {
                value: 360,
                easing: "easeInOutCubic",
                delay: function(target, index, cnt) {
                    return (cnt - index - 1) * 60;
                }
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 1000,
            easing: "easeInOutCubic",
            scale: 0.7
        });
        anime({
            targets: this.DOM.title,
            rotate: [
                {
                    value: [
                        0,
                        10
                    ],
                    duration: 300,
                    delay: 300,
                    easing: "easeOutCubic"
                },
                {
                    value: [
                        -20,
                        0
                    ],
                    duration: 300,
                    easing: "easeOutCubic"
                }
            ],
            opacity: [
                {
                    value: [
                        1,
                        0
                    ],
                    duration: 100,
                    delay: 300,
                    easing: "easeOutCubic"
                },
                {
                    value: [
                        0,
                        1
                    ],
                    duration: 100,
                    delay: 300,
                    easing: "easeOutCubic"
                }
            ]
        });
    };
    PolluxFx.prototype._out = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            opacity: {
                value: function(target, index, cnt) {
                    return index !== cnt - 1 ? 0 : 1;
                },
                easing: "linear",
                delay: function(target, index) {
                    return index * 60;
                }
            },
            translateY: {
                value: 0,
                easing: "easeInOutCubic"
            },
            rotateX: {
                value: 0,
                easing: "easeInOutCubic"
            },
            rotateZ: {
                value: 0,
                easing: "easeInOutCubic",
                delay: function(target, index, cnt) {
                    return (cnt - index - 1) * 60;
                }
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 1000,
            easing: "easeInOutCubic",
            scale: 1
        });
        anime({
            targets: this.DOM.title,
            duration: 1000,
            easing: "easeInOutCubic",
            rotate: 0,
            opacity: 1
        });
    };
    window1.PolluxFx = PolluxFx;
    /************************************************************************
	 * DenebFx.
	 ************************************************************************/ function DenebFx(el) {
        StackFx.call(this, el);
        this._initEvents();
    }
    DenebFx.prototype = Object.create(StackFx.prototype);
    DenebFx.prototype.constructor = DenebFx;
    DenebFx.prototype._initEvents = function() {
        var self = this;
        this._mouseenterFn = function() {
            self._removeAnimeTargets();
            self._in();
        };
        this._mouseleaveFn = function() {
            self._removeAnimeTargets();
            self._out();
        };
        this.DOM.stack.addEventListener("mouseenter", this._mouseenterFn);
        this.DOM.stack.addEventListener("mouseleave", this._mouseleaveFn);
    };
    DenebFx.prototype._in = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            easing: [
                0.2,
                1,
                0.3,
                1
            ],
            rotate: 360,
            opacity: function(target, index, cnt) {
                return index !== cnt - 1 ? [
                    0,
                    0.1 * index + 0.1
                ] : 1;
            },
            delay: function(target, index, cnt) {
                return (cnt - index - 1) * 30;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 1100,
            delay: 20,
            easing: [
                0.2,
                1,
                0.3,
                1
            ],
            scale: 0.7,
            rotate: 360
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 650,
            delay: 400,
            easing: [
                0.2,
                1,
                0.3,
                1
            ],
            rotate: [
                -20,
                0
            ],
            opacity: 1
        });
    };
    DenebFx.prototype._out = function() {
        var self = this;
        anime({
            targets: this.DOM.stackItems,
            duration: 1000,
            easing: [
                0.2,
                1,
                0.3,
                1
            ],
            rotate: 0,
            opacity: function(target, index, cnt) {
                return index !== cnt - 1 ? [
                    0,
                    0.1 * index + 0.1
                ] : 1;
            },
            delay: function(target, index, cnt) {
                return (cnt - index - 1) * 30;
            }
        });
        anime({
            targets: this.DOM.img,
            duration: 1750,
            easing: [
                0.2,
                1,
                0.3,
                1
            ],
            scale: 1,
            rotate: 0
        });
        anime({
            targets: [
                this.DOM.columns.left,
                this.DOM.columns.right
            ],
            duration: 400,
            easing: "easeInCubic",
            rotate: [
                0,
                -10
            ],
            opacity: 0
        });
    };
    window1.DenebFx = DenebFx;
})(window);

},{}]},["jQVXF","1SICI"], "1SICI", "parcelRequire1f3e")

//# sourceMappingURL=index.18dbc454.js.map
