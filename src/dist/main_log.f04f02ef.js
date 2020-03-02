// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main_log.js":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var string = "/*\n** \u4F60\u597D,\u6211\u662F\u4E00\u540D\u524D\u7AEF\n** \u63A5\u4E0B\u6765,\u6211\u8981\u6F14\u793A\u6211\u7684\u524D\u7AEF\u529F\u5E95\n** \u6211\u8981\u52A0\u7684\u6837\u5F0F,\u5982\u4E0B\n*/\n\n/* \u767D\u8272\u80CC\u666F\u592A\u5355\u8C03\u4E86\uFF0C\u6211\u4EEC\u6765\u70B9\u80CC\u666F */\nhtml {\n    background: rgba(200,200,200,0.8);\n}\n\n/* \u51C6\u5907\u4E00\u4E2Adiv */\n\n#div1{\n    border: 1px solid whitesmoke;\n    width: 400px;\n    height: 400px;\n}\n\n/* \n** \u63A5\u4E0B\u6765\u6211\u628A div \u53D8\u6210\u4E00\u4E2A\u516B\u5366\u56FE\n** \u6CE8\u610F\u770B\u597D\u4E86\n** \u9996\u5148\uFF0C\u628A div \u53D8\u6210\u4E00\u4E2A\u5706\n**/\n\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n\n/* \u516B\u5366\u662F\u9634\u9633\u5F62\u6210\u7684\n** \u4E00\u9ED1\u4E00\u767D\n** \u7528\u4E2A\u80CC\u666F\u6E10\u53D8\u5427 gradient background generator https://cssgradient.io/\n**/\n\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/* \n** \u52A0\u4E24\u4E2A\u795E\u79D8\u7684\u5C0F\u7403\n**/\n\n#div1::before,#div1::after{\n    width: 100px;\n    height: 100px;\n    left: 50%;\n    transform: translateX(-50%);\n    border: 1px solid whitesmoke;\n    border-radius: 50%;\n    border:none;\n}\n#div1::before{\n    top: 0;\n    background: #000;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    bottom: 0;\n    left: 50%;\n    background: #fff;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n}\n\n/*\u52A0\u70B9\u9634\u5F71\u6548\u679C\u5427*/\n#div1{\n    box-shadow: 0 0 18px 18px #666666;\n}\n\n/*\u8BA9\u592A\u6781\u56FE\u8F6C\u8D77\u6765\u5427*/\n#div1{\n    animation: 5s linear infinite  taiJi;\n}\n@keyframes taiJi{\n    from{\n        left: 50%;\n        transform : translateX(-50%) rotate(0deg);\n    }\n    to{\n        left: 50%;\n        transform : translateX(-50%) rotate(360deg);\n    }\n}\n\n/* \n** \u4E00\u4E2A\u516B\u5366\u7EC8\u4E8E\u5B8C\u6210\u4E86\n** \u6E90\u7801\uFF1Ahttps://github.com/FrankFang/cv-1\n** \u6548\u679C\uFF1Ahttp://fangyinghang.com/cv-1/dist/index.html\n** \u8C22\u8C22\u8010\u5FC3\u770B\u5B8C\n** \u8FD9\u662F\u6211\u7684:\u8054\u7CFB \u4E3B\u9875 \u7B80\u5386 XXX\n*/\n\n\n\n\n\n\n";
var string2 = ""; // string = string.replace(/\n/g, "<br>");

var n = 0; // string[n]下标
// html.innerHTML = ""; //string[n]; //string.substring(0, n); // 初始 // 把`string[n]`换为`string.substring(0,n)` 显示完整字符串，即显示从`0`个到`n`个字符串
// console.log(string.length);
// console.log(html.innerHTML)

/* 用递归的setTimeout实现 封装进一个函数 */

var step = function step() {
  // console.log("1s后把" + n + "加1并显示" + string[n]);
  setTimeout(function () {
    // console.log(n);
    // n = n + 1; //放到下一次循环前
    // console.log(string[n]);
    if (string[n] === "\n") {
      //是回车就改成<br> 累加赋值给string2
      string2 += "<br>";
    } else if (string[n] === " ") {
      // 转义缩进
      string2 += "&nbsp;";
    } else {
      //如果不是回车就照搬
      string2 += string[n];
    }

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999); // console.log(string2);
    // html.innerHTML = string.substring(0, n);

    if (n < string.length - 1) {
      // n不是最后一个
      n += 1;
      step();
    } else {// n是最后一个
    }
  }, 0);
};

step();
},{}],"../../../../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62233" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
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
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
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
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main_log.js"], null)
//# sourceMappingURL=/main_log.f04f02ef.js.map