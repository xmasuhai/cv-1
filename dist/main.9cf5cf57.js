parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),e="/*\n** 你好,我是一名前端\n** 接下来,我要演示我的前端功底\n** 我要加的样式,如下\n*/\n\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n    background: rgba(200,200,200,0.8);\n}\n\n/* 准备一个div */\n\n#div1{\n    border: 1px solid whitesmoke;\n    width: 400px;\n    height: 400px;\n}\n\n/*\n** 接下来我把 div 变成一个八卦图\n** 注意看好了\n** 首先，把 div 变成一个圆\n**/\n\n#div1{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n\n/* 八卦是阴阳形成的\n** 一黑一白\n** 用个背景渐变吧 gradient background generator https://cssgradient.io/\n**/\n\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n\n/*\n** 加两个神秘的小球\n**/\n\n#div1::before,#div1::after{\n    width: 200px;\n    height: 200px;\n    left: 50%;\n    transform: translateX(-50%);\n    border: 1px solid whitesmoke;\n    border-radius: 50%;\n}\n#div1::before{\n    top: 0;\n    background: #000;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n    border:none;\n}\n#div1::after{\n    bottom: 0;\n    left: 50%;\n    background: #fff;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n    border:none;\n}\n\n/* 加点阴影效果吧 */\n#div1{\n    box-shadow: 0 0 18px 18px #666666;\n}\n\n/* 让太极图转起来吧 */\n\n#div1{\n    animation: 5s linear infinite taiJi;\n}\n\n@keyframes taiJi{\n    from{\n        left: 50%;\n        transform : translateX(-50%) rotate(0deg);\n    }\n    to{\n        left: 50%;\n        transform : translateX(-50%) rotate(360deg);\n    }\n}\n\n/*\n** 一个八卦终于完成了\n** 源码：https://github.com/FrankFang/cv-1\n** 效果：http://fangyinghang.com/cv-1/dist/index.html\n** 谢谢耐心看完\n** 这是我的:联系 主页 简历 XXX\n*/\n\n",a="",t=0,i=function i(){setTimeout(function(){"\n"===e[t]?a+="<br>":" "===e[t]?a+="&nbsp;":a+=e[t],n.innerHTML=a,r.innerHTML=e.substring(0,t),window.scrollTo(0,9999),n.scrollTo(0,9999),t<e.length-1&&(t+=1,i())},0)};i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.9cf5cf57.js.map