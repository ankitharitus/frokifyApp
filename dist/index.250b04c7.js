// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7BONy":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "6315ebf922a29661e8263da0250b04c7";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
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
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] ???? Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ??? Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
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
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
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
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3miIZ":[function(require,module,exports) {
var _ModelJs = require('./Model.js');
var _ViewsRecipeView = require('./Views/recipeView');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _ViewsRecipeViewDefault = _parcelHelpers.interopDefault(_ViewsRecipeView);
var _ViewsSearchView = require('./Views/searchView');
var _ViewsSearchViewDefault = _parcelHelpers.interopDefault(_ViewsSearchView);
require('./Views/View.js');
var _ViewsPagingView = require('./Views/pagingView');
var _ViewsPagingViewDefault = _parcelHelpers.interopDefault(_ViewsPagingView);
var _ViewsBookmarkView = require('./Views/bookmarkView');
var _ViewsBookmarkViewDefault = _parcelHelpers.interopDefault(_ViewsBookmarkView);
var _ViewsAddRecipeView = require('./Views/addRecipeView');
var _ViewsAddRecipeViewDefault = _parcelHelpers.interopDefault(_ViewsAddRecipeView);
const recipeContainer = document.querySelector('.recipe');
// https://forkify-api.herokuapp.com/v2
// /////////////////////////////////////
const getRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    _ViewsRecipeViewDefault.default.renderSpinner();
    await _ModelJs.loadRecipe(id);
    const recipe = _ModelJs.state.recipe;
    await _ModelJs.loadSearchResult(id);
    // console.log(model.getSearchResult());
    // searchView.render(model.getSearchResult());
    _ViewsBookmarkViewDefault.default.update(_ModelJs.state.bookmark);
    _ViewsRecipeViewDefault.default.render(recipe);
  } catch (err) {
    _ViewsRecipeViewDefault.default.renderError(err);
  }
};
const searchRecipe = async function () {
  try {
    _ViewsSearchViewDefault.default.renderSpinner();
    const query = _ViewsSearchViewDefault.default.getQuery();
    await _ModelJs.loadSearchResult(query);
    const searchresult = _ModelJs.state.search.result;
    // searchView.render(searchresult);
    _ViewsSearchViewDefault.default.render(_ModelJs.getSearchResult());
    _ViewsPagingViewDefault.default.render(_ModelJs.state.search);
  } catch (err) {
    throw err;
  }
};
const paginationhandle = function (goto) {
  _ViewsSearchViewDefault.default.render(_ModelJs.getSearchResult(goto));
  _ViewsPagingViewDefault.default.render(_ModelJs.state.search);
};
const controlServing = function (servings) {
  _ModelJs.updateServing(servings);
  // recipeView.render(model.state.recipe);
  _ViewsRecipeViewDefault.default.update(_ModelJs.state.recipe);
};
const bookMark = function () {
  if (!_ModelJs.state.recipe.bookmarked) _ModelJs.addBookmark(_ModelJs.state.recipe); else {
    _ModelJs.deleteBookmark(_ModelJs.state.recipe.id);
  }
  _ViewsRecipeViewDefault.default.update(_ModelJs.state.recipe);
  _ViewsBookmarkViewDefault.default.render(_ModelJs.state.bookmark);
};
const controlBookmarks = function () {
  _ViewsBookmarkViewDefault.default.render(_ModelJs.state.bookmark);
};
const newRecipe = async function (recipe) {
  try {
    _ViewsAddRecipeViewDefault.default.renderSpinner();
    await _ModelJs.uploadNewRecipe(recipe);
    _ViewsRecipeViewDefault.default.render(_ModelJs.state.recipe);
    _ViewsAddRecipeViewDefault.default.renderMessage();
    _ViewsBookmarkViewDefault.default.render(_ModelJs.state.bookmark);
    window.history.pushState(null, '', `#${_ModelJs.state.recipe.id}`);
    setTimeout(function () {
      _ViewsAddRecipeViewDefault.default.toggleWindow();
    }, 2500);
  } catch (err) {
    _ViewsAddRecipeViewDefault.default.renderError(err);
  }
};
const init = function () {
  _ViewsRecipeViewDefault.default.renderHandler(getRecipe);
  _ViewsSearchViewDefault.default.searchHandler(searchRecipe);
  _ViewsPagingViewDefault.default.clickHandler(paginationhandle);
  _ViewsRecipeViewDefault.default.updateServingHandler(controlServing);
  _ViewsRecipeViewDefault.default.updateBookmark(bookMark);
  _ViewsBookmarkViewDefault.default.eventHandler(controlBookmarks);
  _ViewsAddRecipeViewDefault.default.uploadRecipe(newRecipe);
};
init();

},{"./Model.js":"2YNLM","./Views/recipeView":"4vRet","./Views/searchView":"4JWUQ","./Views/View.js":"KbLrW","./Views/pagingView":"2O0nK","./Views/bookmarkView":"2sr4j","./Views/addRecipeView":"20x4u","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2YNLM":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "state", function () {
  return state;
});
_parcelHelpers.export(exports, "loadRecipe", function () {
  return loadRecipe;
});
_parcelHelpers.export(exports, "loadSearchResult", function () {
  return loadSearchResult;
});
_parcelHelpers.export(exports, "getSearchResult", function () {
  return getSearchResult;
});
_parcelHelpers.export(exports, "updateServing", function () {
  return updateServing;
});
_parcelHelpers.export(exports, "addBookmark", function () {
  return addBookmark;
});
_parcelHelpers.export(exports, "deleteBookmark", function () {
  return deleteBookmark;
});
_parcelHelpers.export(exports, "addLocalstorage", function () {
  return addLocalstorage;
});
_parcelHelpers.export(exports, "uploadNewRecipe", function () {
  return uploadNewRecipe;
});
var _config = require('./config');
var _helper = require('./helper');
const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    page: 1,
    resultPerPage: 10
  },
  bookmark: []
};
const loadRecipe = async function (id) {
  try {
    if (!id) return;
    let recipe = await _helper.getJson(`${_config.URL_API}/${id}?key=${_config.Key}`);
    recipe = recipe.recipe;
    state.recipe = formataData(recipe);
    if (state.bookmark.some(book => book.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    throw err;
  }
};
const formataData = function (recipe) {
  newRecipe = {
    publisher: recipe.publisher,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    id: recipe.id,
    title: recipe.title,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    sourceUrl: recipe.source_url,
    ...recipe.key && ({
      key: recipe.key
    })
  };
  return newRecipe;
};
const loadSearchResult = async function (query) {
  try {
    if (!query) return;
    const data = await _helper.getJson(`${_config.URL_API}?search=${query}&key=${_config.Key}`);
    state.search.result = data.recipes.map(rec => {
      return {
        publisher: rec.publisher,
        image: rec.image_url,
        id: rec.id,
        title: rec.title,
        ...rec.key && ({
          key: rec.key
        })
      };
    });
  } catch (err) {
    throw err;
  }
};
const getSearchResult = function (page = this.state.search.page) {
  this.state.search.page = page;
  // const totalp = Math.ceil(this.state.search.result.length / 10);
  const start = (page - 1) * 10;
  const end = page * 10;
  return this.state.search.result.slice(start, end);
};
const updateServing = function (newserving) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = ing.quantity * newserving / state.recipe.servings;
  });
  state.recipe.servings = newserving;
};
const addBookmark = function (recipe) {
  state.bookmark.push(recipe);
  state.recipe.bookmarked = true;
  addLocalstorage();
};
const deleteBookmark = function (id) {
  const index = state.bookmark.find(book => book.id === id);
  state.bookmark.splice(index, 1);
  state.recipe.bookmarked = false;
  addLocalstorage();
};
const addLocalstorage = function () {
  localStorage.setItem('bookmark', JSON.stringify(state.bookmark));
};
const clearLocalstorage = function () {
  localStorage.clear('bookmark');
};
const uploadNewRecipe = async function (newRecipe) {
  try {
    const indegridents = Object.entries(newRecipe).filter(ent => ent[0].startsWith('ingredient') && ent[1].length > 0).map(ing => {
      // const ingArr = ing[1].replaceAll(' ', '').split(',');
      const ingArr = ing[1].split(',').map(el => el.trim());
      if (ingArr.length < 3) throw new Error('Wrong ingredients format!');
      const [quantity, unit, description] = ingArr;
      return {
        quantity: quantity ? +quantity : null,
        unit,
        description
      };
    });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients: indegridents
    };
    const resp = await _helper.setJson(`${_config.URL_API}?key=${_config.Key}`, recipe);
    state.recipe = formataData(resp.recipe);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
const init = function () {
  const data = localStorage.getItem('bookmark');
  if (data) {
    state.bookmark = JSON.parse(data);
  }
};
init();

},{"./config":"6pr2F","./helper":"dSCNX","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6pr2F":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "URL_API", function () {
  return URL_API;
});
_parcelHelpers.export(exports, "TimeOut", function () {
  return TimeOut;
});
_parcelHelpers.export(exports, "Key", function () {
  return Key;
});
const URL_API = 'https://forkify-api.herokuapp.com/api/v2/recipes';
const TimeOut = 10;
const Key = '03310ea0-650f-42e1-9a97-b79cb3f0d317';

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"dSCNX":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "getJson", function () {
  return getJson;
});
_parcelHelpers.export(exports, "setJson", function () {
  return setJson;
});
var _config = require('./config');
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
const getJson = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(`${_config.TimeOut}`)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}`);
    let recipe = data.data;
    return recipe;
  } catch (err) {
    throw new Error(err);
  }
};
const setJson = async function (url, newData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(newData)
    });
    const res = await Promise.race([fetchPro, timeout(`${_config.TimeOut}`)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message}`);
    let recipe = data.data;
    return recipe;
  } catch (err) {
    throw new Error(err);
  }
};

},{"./config":"6pr2F","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4vRet":[function(require,module,exports) {
"use strict";
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _urlImgIconsSvg = require('url:../../img/icons.svg');
var _urlImgIconsSvgDefault = _parcelHelpers.interopDefault(_urlImgIconsSvg);
var _fractional = require('fractional');
var _View = require('./View');
var _ViewDefault = _parcelHelpers.interopDefault(_View);
class recipeView extends _ViewDefault.default {
  parent = document.querySelector('.recipe');
  errorMessage = 'Could not found this recipe.Please try with another one!';
  renderHandler(fun) {
    window.addEventListener('hashchange', fun);
    window.addEventListener('load', fun);
  }
  updateServingHandler(func) {
    parent.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--tiny');
      if (!btn) return;
      if (+btn.dataset.update > 0) func(+btn.dataset.update);
    });
  }
  updateBookmark(func) {
    this.parent.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      func();
    });
  }
  generateMarkup() {
    const recipe = this.data;
    return `<figure class="recipe__fig">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>
  
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href=""></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}
        </span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${_urlImgIconsSvgDefault.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
        <span class="recipe__info-text">servings</span>
  
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings" data-update=${recipe.servings - 1}>
            <svg>
              <use href="${_urlImgIconsSvgDefault.default}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings" data-update=${recipe.servings + 1}>
            <svg>
              <use href="${_urlImgIconsSvgDefault.default}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
  
      <div class="recipe__user-generated ${recipe.key ? '' : 'hidden'}" >
        <svg>
          <use href="${_urlImgIconsSvgDefault.default}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${_urlImgIconsSvgDefault.default}#icon-bookmark${recipe.bookmarked ? '-fill' : ''}"></use>
        </svg>
      </button>
    </div>
  
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${recipe.ingredients.map(ing => {
      return `<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${_urlImgIconsSvgDefault.default}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ing.quantity ? new _fractional.Fraction(ing.quantity).toString() : ''}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>`;
    }).join('')}
       
      </ul>
    </div>
  
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${_urlImgIconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;
  }
}
exports.default = new recipeView();

},{"url:../../img/icons.svg":"3t5dV","fractional":"5jzJt","./View":"KbLrW","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3t5dV":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "icons.d4a14980.svg"
},{"./bundle-url":"3seVR"}],"3seVR":[function(require,module,exports) {
"use strict";

/* globals document:readonly */
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.


function getOrigin(url) {
  let matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);

  if (!matches) {
    throw new Error('Origin not found');
  }

  return matches[0];
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;
},{}],"5jzJt":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/


/* Fractions */
/* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */

/*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */
Fraction = function(numerator, denominator)
{
    /* double argument invocation */
    if (typeof numerator !== 'undefined' && denominator) {
        if (typeof(numerator) === 'number' && typeof(denominator) === 'number') {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof(numerator) === 'string' && typeof(denominator) === 'string') {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */
    } else if (typeof denominator === 'undefined') {
        num = numerator; // swap variable names for legibility
        if (typeof(num) === 'number') {  // just a straight number init
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof(num) === 'string') {
            var a, b;  // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
                       // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(' ')
            if (arr[0]) a = arr[0]
            if (arr[1]) b = arr[1]
            /* compound fraction e.g. 'A B/C' */
            //  if a is an integer ...
            if (a % 1 === 0 && b && b.match('/')) {
                return (new Fraction(a)).add(new Fraction(b));
            } else if (a && !b) {
                /* simple fraction e.g. 'A/B' */
                if (typeof(a) === 'string' && a.match('/')) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split('/');
                    this.numerator = f[0]; this.denominator = f[1];
                /* string floating point */
                } else if (typeof(a) === 'string' && a.match('\.')) {
                    return new Fraction(parseFloat(a));
                /* whole number e.g. 'A' */
                } else { // just passed a whole number as a string
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else {
                return undefined; // could not parse
            }
        }
    }
    this.normalize();
}


Fraction.prototype.clone = function()
{
    return new Fraction(this.numerator, this.denominator);
}


/* pretty-printer, converts fractions into whole numbers and fractions */
Fraction.prototype.toString = function()
{
    if (this.denominator==='NaN') return 'NaN'
    var wholepart = (this.numerator/this.denominator>0) ?
      Math.floor(this.numerator / this.denominator) :
      Math.ceil(this.numerator / this.denominator)
    var numerator = this.numerator % this.denominator 
    var denominator = this.denominator;
    var result = []; 
    if (wholepart != 0)  
        result.push(wholepart);
    if (numerator != 0)  
        result.push(((wholepart===0) ? numerator : Math.abs(numerator)) + '/' + denominator);
    return result.length > 0 ? result.join(' ') : 0;
}


/* destructively rescale the fraction by some integral factor */
Fraction.prototype.rescale = function(factor)
{
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
}


Fraction.prototype.add = function(b)
{
    var a = this.clone();
    if (b instanceof Fraction) {
        b = b.clone();
    } else {
        b = new Fraction(b);
    }
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);

    a.numerator += b.numerator;

    return a.normalize();
}


Fraction.prototype.subtract = function(b)
{
    var a = this.clone();
    if (b instanceof Fraction) {
        b = b.clone();  // we scale our argument destructively, so clone
    } else {
        b = new Fraction(b);
    }
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);

    a.numerator -= b.numerator;

    return a.normalize();
}


Fraction.prototype.multiply = function(b)
{
    var a = this.clone();
    if (b instanceof Fraction)
    {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === 'number') {
        a.numerator *= b;
    } else {
        return a.multiply(new Fraction(b));
    }
    return a.normalize();
}

Fraction.prototype.divide = function(b)
{
    var a = this.clone();
    if (b instanceof Fraction)
    {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === 'number') {
        a.denominator *= b;
    } else {
        return a.divide(new Fraction(b));
    }
    return a.normalize();
}

Fraction.prototype.equals = function(b)
{
    if (!(b instanceof Fraction)) {
        b = new Fraction(b);
    }
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return (a.numerator === b.numerator && a.denominator === b.denominator);
}


/* Utility functions */

/* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */
Fraction.prototype.normalize = (function()
{

    var isFloat = function(n)
    {
        return (typeof(n) === 'number' && 
                ((n > 0 && n % 1 > 0 && n % 1 < 1) || 
                 (n < 0 && n % -1 < 0 && n % -1 > -1))
               );
    }

    var roundToPlaces = function(n, places) 
    {
        if (!places) {
            return Math.round(n);
        } else {
            var scalar = Math.pow(10, places);
            return Math.round(n*scalar)/scalar;
        }
    }
        
    return (function() {

        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */
        if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        } 
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if ((this.numerator < 0 && this.denominator < 0) || (this.numerator > 0 && this.denominator < 0)) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    });

})();


/* Takes two numbers and returns their greatest common factor.
 */
Fraction.gcf = function(a, b)
{

    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function (factor) 
    { 
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i,1); // remove from fb
        }
    });

    if (common_factors.length === 0)
        return 1;

    var gcf = (function() {
        var r = common_factors[0];
        var i;
        for (i=1;i<common_factors.length;i++)
        {
            r = r * common_factors[i];
        }
        return r;
    })();

    return gcf;

};


// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) 
{

    var num = Math.abs(n);
    var factors = [];
    var _factor = 2;  // first potential prime factor

    while (_factor * _factor <= num)  // should we keep looking for factors?
    {      
      if (num % _factor === 0)  // this is a factor
        { 
            factors.push(_factor);  // so keep it
            num = num/_factor;  // and divide our search point by it
        }
        else
        {
            _factor++;  // and increment
        }
    }

    if (num != 1)                    // If there is anything left at the end...
    {                                // ...this must be the last prime factor
        factors.push(num);           //    so it too should be recorded
    }

    return factors;                  // Return the prime factors
}

module.exports.Fraction = Fraction

},{}],"KbLrW":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _urlImgIconsSvg = require('url:../../img/icons.svg');
var _urlImgIconsSvgDefault = _parcelHelpers.interopDefault(_urlImgIconsSvg);
class View {
  data;
  render(_data) {
    if (!_data || Array.isArray(_data) && _data.length === 0) return this.renderError();
    this.data = _data;
    const markup = this.generateMarkup();
    this.clear();
    this.parent.insertAdjacentHTML('afterbegin', markup);
  }
  update(_data) {
    this.data = _data;
    if (this.data.length < 1) return;
    const newMarkUp = this.generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkUp);
    const currentEl = Array.from(this.parent.querySelectorAll('*'));
    const newEl = Array.from(newDOM.querySelectorAll('*'));
    newEl.forEach((newel, i) => {
      const currel = currentEl[i];
      if (!newel.isEqualNode(currel) && newel.firstChild?.nodeValue?.trim?.() !== '') currel.textContent = newel.textContent;
      if (!newel.isEqualNode(currel)) {
        Array.from(newel.attributes).forEach(att => {
          currel.setAttribute(att.name, att.value);
        });
      }
    });
  }
  clear() {
    this.parent.innerHTML = '';
  }
  renderSpinner() {
    const markup = `<div class="spinner">
    <svg>
      <use href="${_urlImgIconsSvgDefault.default}#icon-loader"></use>
    </svg>
  </div>`;
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(mess = this.message) {
    const markup = `<div class='error'>
    <div>
      <svg>
        <use href="${_urlImgIconsSvgDefault.default}#icon-smile"></use>
      </svg>
    </div>
    <p>${mess}</p>
  </div>`;
    this.clear();
    this.parent.insertAdjacentHTML('afterbegin', markup);
  }
  renderError(mes = this.errorMessage) {
    const markup = `<div class="error">
      <div>
        <svg>
          <use href="${_urlImgIconsSvgDefault.default}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${mes}</p>
    </div>`;
    this.clear();
    this.parent.insertAdjacentHTML('afterbegin', markup);
  }
}
exports.default = View;

},{"url:../../img/icons.svg":"3t5dV","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4JWUQ":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _View = require('./View');
var _ViewDefault = _parcelHelpers.interopDefault(_View);
var _urlImgIconsSvg = require('url:../../img/icons.svg');
var _urlImgIconsSvgDefault = _parcelHelpers.interopDefault(_urlImgIconsSvg);
const searchForm = document.querySelector('.search');
class SearchView extends _ViewDefault.default {
  query;
  parent = document.querySelector('.results');
  errorMessage = 'Could not found this recipe.Please try with another one!';
  getQuery() {
    this.query = searchForm.querySelector('.search__field').value;
    this.clearSearchbar();
    return this.query;
  }
  clearSearchbar() {
    searchForm.querySelector('.search__field').value = '';
  }
  searchHandler(fun) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      fun();
    });
  }
  generateMarkup() {
    let data = this.data;
    const id = window.location.hash.slice(1);
    return data.map(el => {
      return ` <li class="preview">
        <a class="preview__link ${id === el.id ? 'preview__link--active' : ''} " href="#${el.id}">
          <figure class="preview__fig">
            <img src="${el.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${el.title}</h4>
            <p class="preview__publisher">${el.publisher}</p>
            <div class="preview__user-generated ${el.key ? '' : 'hidden'}">
              <svg>
                <use href="${_urlImgIconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
    }).join('');
  }
}
exports.default = new SearchView();

},{"./View":"KbLrW","url:../../img/icons.svg":"3t5dV","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2O0nK":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _urlImgIconsSvg = require('url:../../img/icons.svg');
var _urlImgIconsSvgDefault = _parcelHelpers.interopDefault(_urlImgIconsSvg);
var _View = require('./View');
var _ViewDefault = _parcelHelpers.interopDefault(_View);
class PagingView extends _ViewDefault.default {
  parent = document.querySelector('.pagination');
  clickHandler(fun) {
    this.parent.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goto = +btn.dataset.offno;
      fun(goto);
    });
  }
  generateMarkup() {
    const noPage = Math.ceil(this.data.result.length / this.data.resultPerPage);
    const curPage = this.data.page;
    if (curPage === 1 && noPage > 1) return `
    <button data-offNo=${curPage + 1} class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
        <use href="${_urlImgIconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
    </button>`;
    if (curPage === noPage && noPage > 1) return `
      <button data-offNo=${curPage - 1} class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${_urlImgIconsSvgDefault.default}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>`;
    if (curPage < noPage) return ` 
      <button data-offNo=${curPage + 1} class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
        <use href="${_urlImgIconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
     </button>
     <button data-offNo=${curPage - 1} class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${_urlImgIconsSvgDefault.default}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>`;
    return '';
  }
}
exports.default = new PagingView();

},{"url:../../img/icons.svg":"3t5dV","./View":"KbLrW","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2sr4j":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _View = require('./View');
var _ViewDefault = _parcelHelpers.interopDefault(_View);
var _urlImgIconsSvg = require('url:../../img/icons.svg');
var _urlImgIconsSvgDefault = _parcelHelpers.interopDefault(_urlImgIconsSvg);
class BookMarkView extends _ViewDefault.default {
  query;
  parent = document.querySelector('.bookmarks__list');
  errorMessage = 'No bookmark yet !';
  eventHandler(fun) {
    window.addEventListener('load', fun);
  }
  generateMarkup() {
    let data = this.data;
    const id = window.location.hash.slice(1);
    return data.map(el => {
      return ` <li class="preview">
          <a class="preview__link ${id === el.id ? 'preview__link--active' : ''} " href="#${el.id}">
            <figure class="preview__fig">
              <img src="${el.image}" alt="Test" />
            </figure>
            <div class="preview__data">
              <h4 class="preview__title">${el.title}</h4>
              <p class="preview__publisher">${el.publisher}</p>
              <div class="preview__user-generated ${el.key ? '' : 'hidden'}">
                <svg>
                  <use href="${_urlImgIconsSvgDefault.default}#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>`;
    }).join('');
  }
}
exports.default = new BookMarkView();

},{"./View":"KbLrW","url:../../img/icons.svg":"3t5dV","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"20x4u":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
var _View = require('./View');
var _ViewDefault = _parcelHelpers.interopDefault(_View);
require('url:../../img/icons.svg');
class AddRecipeView extends _ViewDefault.default {
  parent = document.querySelector('.upload');
  window = document.querySelector('.add-recipe-window');
  overlay = document.querySelector('.overlay');
  recipeBtn = document.querySelector('.nav__btn--add-recipe');
  closeBtn = document.querySelector('.btn--close-modal');
  message = 'Recipe was successfully added ';
  constructor() {
    super();
    this.showWindow();
    this.hideWindow();
  }
  showForm() {
    const markup = this.generateMarkup();
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('afterbegin', markup);
  }
  toggleWindow() {
    this.window.classList.toggle('hidden');
    this.overlay.classList.toggle('hidden');
  }
  showWindow() {
    const _self = this;
    this.recipeBtn.addEventListener('click', function () {
      _self.toggleWindow();
      console.log('hii');
      _self.showForm();
    });
  }
  hideWindow() {
    this.closeBtn.addEventListener('click', this.toggleWindow.bind(this));
    this.overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
  uploadRecipe(fun) {
    this.parent.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = [...new FormData(this)];
      const objData = Object.fromEntries(data);
      fun(objData);
    });
  }
  generateMarkup() {
    return `     <form class="upload">
      <div class="upload__column">
        <h3 class="upload__heading">Recipe data</h3>
        <label>Title</label>
        <input value="Test123" required name="title" type="text" />
        <label>URL</label>
        <input value="Test123" required name="sourceUrl" type="text" />
        <label>Image URL</label>
        <input value="Test123" required name="image" type="text" />
        <label>Publisher</label>
        <input value="Test123" required name="publisher" type="text" />
        <label>Prep time</label>
        <input value="23" required name="cookingTime" type="number" />
        <label>Servings</label>
        <input value="23" required name="servings" type="number" />
      </div>

      <div class="upload__column">
        <h3 class="upload__heading">Ingredients</h3>
        <label>Ingredient 1</label>
        <input
          value="0.5,kg,Rice"
          type="text"
          required
          name="ingredient-1"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 2</label>
        <input
          value="1,,Avocado"
          type="text"
          name="ingredient-2"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 3</label>
        <input
          value=",,salt"
          type="text"
          name="ingredient-3"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 4</label>
        <input
          type="text"
          name="ingredient-4"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 5</label>
        <input
          type="text"
          name="ingredient-5"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
        <label>Ingredient 6</label>
        <input
          type="text"
          name="ingredient-6"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
      </div>

      <button class="btn upload__btn">
        <svg>
          <use href="src/img/icons.svg#icon-upload-cloud"></use>
        </svg>
        <span>Upload</span>
      </button>
    </form>`;
  }
}
exports.default = new AddRecipeView();

},{"./View":"KbLrW","url:../../img/icons.svg":"3t5dV","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["7BONy","3miIZ"], "3miIZ", "parcelRequirec56c")

//# sourceMappingURL=index.250b04c7.js.map
