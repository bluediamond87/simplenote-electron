(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1113:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),c=r(12),i=r.n(c),a=r(165),u=r(13),s=r.n(u),l=r(887),f=r.n(l),p=r(888),m=r.n(p);function y(){return o.a.createElement("svg",{className:"icon-file",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.a.createElement("g",{transform:"translate(-46.000000, -124.000000)"},o.a.createElement("g",{transform:"translate(28.000000, 110.000000)"},o.a.createElement("g",{transform:"translate(18.000000, 14.000000)"},o.a.createElement("path",{d:"M8,0 L12,4 L12,16 L0,16 L0,0 L8,0 Z M8,4 L11,4 L8,1 L8,4 Z"})))))}var b=r(1095);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,c=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw c}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e){var t=e.acceptedTypes,r=e.locked,c=e.multiple,i=e.onAccept,a=e.onReset,u=h(Object(n.useState)(),2),l=u[0],p=u[1],v=h(Object(n.useState)(),2),g=v[0],O=v[1],w=Object(n.useCallback)((function(e,t){0===e.length?function(e){!c&&e.length>1?O("Choose a single file"):O("File type is incorrect"),p(void 0),a()}(t):function(e){var t=e.length,r=t>1?"".concat(t," files"):e[0].name;p(r),i(e)}(e)}),[]),j=Object(b.a)({accept:t,disabled:r,multiple:c,onDrop:w}),E=j.getRootProps,k=j.getInputProps,S=j.isDragActive;Object(n.useEffect)((function(){if(g){var e=setTimeout((function(){return O(void 0)}),2500);return function(){return clearTimeout(e)}}}),[g]);var P=g||"Drag a file, or click to choose",R=function(){return o.a.createElement(n.Fragment,null,g?o.a.createElement(m.a,null):o.a.createElement(f.a,null),S?"Drop files here":P)},D=function(){return o.a.createElement(n.Fragment,null,o.a.createElement(y,null),o.a.createElement("span",{className:"importer-dropzone__filename"},l))};return o.a.createElement("div",d({},E(),{className:s()({"is-accepted":l},"importer-dropzone theme-color-border")}),o.a.createElement("input",k()),l?o.a.createElement(D,null):o.a.createElement(R,null))}g.propTypes={acceptedTypes:i.a.string,locked:i.a.bool.isRequired,multiple:i.a.bool,onAccept:i.a.func.isRequired,onReset:i.a.func.isRequired};var O=g,w=r(307),j=r(4),E=r(8),k=r(1106);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var P=function(e){return o.a.createElement(k.a,S({classes:{root:"progress-bar",bar:"progress-bar__bar"}},e))};function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C,A,M,I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(a,e);var t,r,n,c,i=(t=a,function(){var e,r=B(t);if(T()){var n=B(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return x(this,e)});function a(){return D(this,a),i.apply(this,arguments)}return r=a,(n=[{key:"shouldComponentUpdate",value:function(e){return!(!this.props.endValue&&this.props.isDone===e.isDone)}},{key:"render",value:function(){var e=this.props,t=e.currentValue,r=e.endValue,n=e.isDone,c=function(){return n?o.a.createElement(P,{variant:"determinate",value:100}):o.a.createElement(P,null)};return r?o.a.createElement(P,{variant:"determinate",value:t/r*100}):o.a.createElement(c,null)}}])&&_(r.prototype,n),c&&_(r,c),a}(o.a.Component);C=I,A="propTypes",M={currentValue:i.a.number.isRequired,endValue:i.a.number,isDone:i.a.bool.isRequired},A in C?Object.defineProperty(C,A,{value:M,enumerable:!0,configurable:!0,writable:!0}):C[A]=M;var q=I,L=function(e){var t,r=e.currentValue,n=1===r?"note":"notes";return t=e.isDone?"Done! ".concat(r," ").concat(n," imported."):r?"".concat(r," ").concat(n," imported..."):"Importing...",o.a.createElement("p",{role:"status","aria-live":"polite"},t)};L.propTypes={currentValue:i.a.number.isRequired,isDone:i.a.bool.isRequired};var V=L,F=function(e){var t=e.currentValue,r=e.endValue,n=e.isDone;return o.a.createElement("section",null,o.a.createElement(q,{currentValue:t,endValue:n?t:r,isDone:n}),o.a.createElement(V,{currentValue:t,isDone:n}))};F.propTypes={currentValue:i.a.number.isRequired,endValue:i.a.number,isDone:i.a.bool.isRequired};var W=F,z=r(15),U=r(890),$=r(9),H=r(904),J=r(891),Z=r.n(J);function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){ne(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?ee(e):t}function ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function te(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var oe=["content","creationDate","deleted","markdown","modificationDate","pinned","tags"],ce=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(n,e);var t,r=(t=n,function(){var e,r=re(t);if(te()){var n=re(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return Y(this,e)});function n(e){var t,o=e.noteBucket,c=e.tagBucket;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),ne(ee(t=r.call(this)),"importNote",(function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.isTrashed,o=void 0!==n&&n,c=r.isMarkdown,i=void 0!==c&&c,a=Object(j.pick)(e,oe);return a.publishURL="",a.shareURL="",a.deleted=o,a.tags=Object(j.get)(a,"tags",[]),a.systemTags=Object(j.get)(a,"systemTags",[]),a.pinned&&(a.systemTags.push("pinned"),delete a.pinned),(a.markdown||i)&&(a.systemTags.push("markdown"),delete a.markdown),a.creationDate&&isNaN(a.creationDate)&&(a.creationDate=new Date(a.creationDate).getTime()/1e3),a.creationDate=a.creationDate||a.modificationDate||Date.now(),a.modificationDate=a.modificationDate||a.creationDate||Date.now(),Object.prototype.hasOwnProperty.call(a,"content")||(a.content=""),a.tags&&a.tags.map((function(e){Object(j.isEmpty)(e)||t.tagBucket.update(e,{name:e})})),t.limiter.schedule((function(){return t.noteBucket.add.bind(t.noteBucket)(a)})).catch()})),ne(ee(t),"importNotes",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(Object(j.isEmpty)(e))t.emit("status","error","No notes to import.");else{if(e.activeNotes||e.trashedNotes){var n=Object(j.get)(e,"activeNotes",[]).map((function(e){return t.importNote(e,r)})),o=Object(j.get)(e,"trashedNotes",[]).map((function(e){return t.importNote(e,Q({},r,{isTrashed:!0}))}));return Promise.all(n.concat(o))}t.emit("status","error","Invalid import format: No active or trashed notes found.")}})),t.noteBucket=o,t.tagBucket=c,t.limiter=new Z.a({reservoir:50,reservoirRefreshAmount:50,reservoirRefreshInterval:1e3}),t}return n}(z.EventEmitter),ie=r(902),ae=function(e){var t=e.getAttribute("alt"),r=e.getAttribute("type")||"media";return t?"".concat(t," (").concat(r,")"):"(".concat(r,")")},ue=function(e){ie.a.prototype.escape=j.identity;var t=new ie.a({blankReplacement:function(e,t){if("EN-MEDIA"===t.nodeName)return ae(t);var r=Array.from(t.querySelectorAll("a"));return r.length?r.map((function(){return e})).join(" "):Array.from(t.querySelectorAll("en-media")).map(ae).join(" ")},codeBlockStyle:"fenced",emDelimiter:"*",headingStyle:"atx"});return t.addRule("lineBreaks",{filter:"br",replacement:function(){return"\n"}}).addRule("divs",{filter:"div",replacement:function(e,t){return"LI"===t.parentNode.nodeName?e:/-en-codeblock:true/.test(t.getAttribute("style"))?"```\n"+e+"```\n":e+"\n"}}).addRule("links",{filter:"a",replacement:function(e,t){var r=t.getAttribute("href");return r&&e!==r?"[".concat(e,"](").concat(r,")"):e}}).addRule("svgImages",{filter:function(e){return"IMG"===e.nodeName&&Object(j.startsWith)(e.getAttribute("src"),"data:image/svg")},replacement:function(e,t){return t.setAttribute("type","image/svg"),ae(t)}}).addRule("lineItems",{filter:"li",replacement:function(e,t,r){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var n=r.bulletListMarker+" ",o=t.parentNode;if("OL"===o.nodeName){var c=o.getAttribute("start"),i=Array.prototype.indexOf.call(o.children,t);n=(c?Number(c)+i:i+1)+". "}return n+e+(t.nextSibling&&!/\n$/.test(e)?"\n":"")}}).addRule("mediaItems",{filter:"en-media",replacement:function(e,t){return ae(t)}}).addRule("tasklistItems",{filter:"en-todo",replacement:function(e,t){var r="true"===t.getAttribute("checked")?"x":" ";return"- [".concat(r,"] ").concat(e).trim()}}),t.turndown(e)};function se(e){return(se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){return(le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function fe(e,t){return!t||"object"!==se(t)&&"function"!=typeof t?pe(e):t}function pe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function me(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var de=null;$.a&&(de=require("fs"));var he=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&le(e,t)}(n,e);var t,r=(t=n,function(){var e,r=ye(t);if(me()){var n=ye(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return fe(this,e)});function n(e){var t,o=e.noteBucket,c=e.tagBucket,i=e.options;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),be(pe(t=r.call(this)),"importNotes",(function(e){e&&0!==e.length||t.emit("status","error","Invalid Evernote export file.");var r=e[0];if(r&&r.path||t.emit("status","error","Could not find Evernote export file."),r.path&&Object(j.endsWith)(r.path.toLowerCase(),".enex")){var n=Object(U.createStream)(!0,!1),o=new DOMParser,c=new ce({noteBucket:t.noteBucket,tagBucket:t.tagBucket}),i={},a=0;n.on("error",(function(){this.emit("status","error","Error processing Evernote data.")})),n.on("opentag",(function(e){"note"===e.name&&(i={tags:[]})})),n.on("cdata",(function(e){var t=o.parseFromString(e,"text/html");if(Object(j.endsWith)(Object(j.get)(t,"doctype.name",""),"note")){var r=ue(t.body.innerHTML);""!==r&&(i.content+="\n"+r)}})),n.on("text",(function(e){if(e)switch(n._parser.tagName){case"title":i.content=e;break;case"created":i.creationDate=t.getConvertedDate(e);break;case"updated":i.modificationDate=t.getConvertedDate(e);break;case"tag":i.tags.push(e)}})),n.on("closetag",(function(e){"note"===e&&(c.importNote(i,t.options),a++,t.emit("status","progress",a))})),n.on("end",(function(){0!==a?t.emit("status","complete",a):t.emit("status","error","No notes were found to import.")})),de.createReadStream(r.path).pipe(n)}else t.emit("status","error","An Evernote .enex file is required.")})),be(pe(t),"getConvertedDate",(function(e){var t=Object(H.a)(e).getTime()/1e3;return isNaN(t)&&(t=Date.now()/1e3),t})),t.noteBucket=o,t.tagBucket=c,t.options=i,t}return n}(z.EventEmitter);function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function Oe(e){return(Oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t){return(we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function je(e,t){return!t||"object"!==Oe(t)&&"function"!=typeof t?Ee(e):t}function Ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Pe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Re(e){return e.map((function(e){var t=e.lastModified,r=ge(e,["lastModified"]),n=r.modificationDate||t;n&&isNaN(n)&&(n=new Date(n).getTime()/1e3);var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){Pe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);return n&&(o.modificationDate=n),o}))}var De=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&we(e,t)}(n,e);var t,r=(t=n,function(){var e,r=Se(t);if(ke()){var n=Se(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return je(this,e)});function n(e){var t,o=e.noteBucket,c=e.tagBucket,i=e.options;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),Pe(Ee(t=r.call(this)),"importNotes",(function(e){var r=new ce({noteBucket:t.noteBucket,tagBucket:t.tagBucket});if(Object(j.isEmpty)(e))t.emit("status","error","No file to import.");else{var n=e[0];if(Object(j.endsWith)(n.name.toLowerCase(),".json"))if(n.size>5e6)t.emit("status","error","File should be less than 5 MB.");else{var o=new FileReader;o.onload=function(e){var n=e.target.result;if(n){var o=JSON.parse(n),c=o.activeNotes.length+o.trashedNotes.length,i={activeNotes:Re(o.activeNotes),trashedNotes:Re(o.trashedNotes)};r.importNotes(i,t.options).then((function(){t.emit("status","complete",c)}))}else t.emit("status","error","File was empty.")},o.readAsText(n)}else t.emit("status","error",'File name does not end in ".json".')}})),t.noteBucket=o,t.tagBucket=c,t.options=i,t}return n}(z.EventEmitter);function _e(e){return(_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ne(e,t){return(Ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function xe(e,t){return!t||"object"!==_e(t)&&"function"!=typeof t?Te(e):t}function Te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Be(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Ce(e){return(Ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ae(e){return(Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(r),!0).forEach((function(t){$e(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function qe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Le(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ve(e,t){return(Ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Fe(e,t){return!t||"object"!==Ae(t)&&"function"!=typeof t?We(e):t}function We(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ze(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function Ue(e){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var He={evernote:he,plaintext:function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ne(e,t)}(n,e);var t,r=(t=n,function(){var e,r=Ce(t);if(Be()){var n=Ce(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return xe(this,e)});function n(e){var t,o=e.noteBucket,c=e.tagBucket,i=e.options;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(Te(t=r.call(this)),"importNotes",(function(e){var r=new ce({noteBucket:t.noteBucket,tagBucket:t.tagBucket}),n=0,o="";if(e)for(var c=function(e){if(e&&Object(j.endsWith)(e.name.toLowerCase(),".txt")&&!(e.size>1e6)){var c=new FileReader;c.onload=function(c){var i=c.target.result,a=e.name.slice(0,-4);if(Object(j.startsWith)(i,a)||(i=a+"\n\n"+i),i){var u=e.lastModified/1e3;r.importNote({content:i,modificationDate:u,creationDate:u},t.options),n++,e.name===o?t.emit("status","complete",n):t.emit("status","progress",n)}},c.readAsText(e)}},i=0;i<e.length;i++){var a=e[i];i+1===e.length&&(o=a.name),c(a)}else t.emit("status","error","No text files to import.")})),t.noteBucket=o,t.tagBucket=c,t.options=i,t}return n}(z.EventEmitter),simplenote:De},Je=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ve(e,t)}(u,e);var t,r,n,c,i=(t=u,function(){var e,r=Ue(t);if(ze()){var n=Ue(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return Fe(this,e)});function u(){var e;qe(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return $e(We(e=i.call.apply(i,[this].concat(r))),"state",{errorMessage:void 0,finalNoteCount:void 0,importedNoteCount:0,isDone:!1,setMarkdown:!1,shouldShowProgress:!1}),$e(We(e),"initImporter",(function(){var t=e.props.source.slug,r=He[t];if(!r)throw new Error('Unrecognized importer slug "${slug}"');var n=new r(Ie({},e.props.buckets,{options:{isMarkdown:e.state.setMarkdown}})),o=Object(j.throttle)((function(t){e.setState({importedNoteCount:t})}),20);return n.on("status",(function(r,n){switch(r){case"progress":o(n);break;case"complete":e.setState({finalNoteCount:n,isDone:!0}),E.a.tracks.recordEvent("importer_import_completed",{source:t,note_count:n});break;case"error":e.setState({errorMessage:n,shouldShowProgress:!1}),window.setTimeout((function(){e.setState({isDone:!0})}),200)}})),n})),$e(We(e),"startImport",(function(){e.setState({shouldShowProgress:!0}),e.props.onStart(),e.initImporter().importNotes(e.props.files)})),e}return r=u,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.endValue,n=t.locked,c=t.onClose,i=this.props.source.optionsHint,u=this.state,s=u.errorMessage,l=u.finalNoteCount,f=u.importedNoteCount,p=u.isDone,m=u.setMarkdown,y=u.shouldShowProgress;return o.a.createElement("div",{className:"source-importer-executor"},o.a.createElement("section",{className:"source-importer-executor__options"},o.a.createElement(a.a,{headingLevel:"3"},"Options"),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:m,className:"source-importer-executor__checkbox",disabled:n,onChange:function(){return e.setState({setMarkdown:!m})}}),"Enable Markdown on all notes"),i&&o.a.createElement("p",{className:"theme-color-fg-dim"},i)),o.a.createElement(w.a,{shouldMount:Boolean(s)},o.a.createElement("div",{role:"alert",className:"source-importer-executor__error"},s)),o.a.createElement(w.a,{shouldMount:y},o.a.createElement(W,{currentValue:p?l:f,endValue:r,isDone:p})),o.a.createElement("div",{className:"source-importer-executor__button"},p?o.a.createElement("button",{className:"button button-primary",type:"button",onClick:c},"Close"):o.a.createElement("button",{className:"button button-primary",disabled:n,type:"button",onClick:this.startImport},"Import")))}}])&&Le(r.prototype,n),c&&Le(r,c),u}(o.a.Component);$e(Je,"propTypes",{buckets:i.a.shape({noteBucket:i.a.object.isRequired,tagBucket:i.a.object.isRequired}),endValue:i.a.number,files:i.a.array,locked:i.a.bool.isRequired,onClose:i.a.func.isRequired,onStart:i.a.func.isRequired,source:i.a.shape({optionsHint:i.a.string,slug:i.a.string.isRequired})});var Ze=Je;function Ge(e){return(Ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ke(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Xe(e,t){return(Xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ye(e,t){return!t||"object"!==Ge(t)&&"function"!=typeof t?et(e):t}function et(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function tt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function rt(e){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function nt(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ot=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Xe(e,t)}(u,e);var t,r,n,c,i=(t=u,function(){var e,r=rt(t);if(tt()){var n=rt(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return Ye(this,e)});function u(){var e;Ke(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return nt(et(e=i.call.apply(i,[this].concat(r))),"state",{acceptedFiles:void 0}),e}return r=u,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.buckets,n=t.onClose,c=t.onStart,i=t.locked,u=void 0!==i&&i,s=t.source,l=this.props.source,f=l.acceptedTypes,p=l.instructions,m=l.multiple,y=void 0!==m&&m,b=this.state.acceptedFiles,d=Boolean(b);return o.a.createElement("div",{className:"source-importer"},o.a.createElement(a.a,{headingLevel:"3"},"Import file",y&&"s"),o.a.createElement(O,{acceptedTypes:f,locked:u,multiple:y,onAccept:function(t){return e.setState({acceptedFiles:t})},onReset:function(){return e.setState({acceptedFiles:void 0})}}),!d&&o.a.createElement("p",{className:"theme-color-fg-dim"},p),o.a.createElement(w.a,{wrapperClassName:"source-importer__executor-wrapper",shouldMount:d},o.a.createElement(Ze,{buckets:r,endValue:y&&d?b.length:void 0,files:b,locked:u,onClose:n,onStart:c,source:s})))}}])&&Qe(r.prototype,n),c&&Qe(r,c),u}(o.a.Component);nt(ot,"propTypes",{buckets:i.a.object,locked:i.a.bool,onClose:i.a.func.isRequired,onStart:i.a.func.isRequired,source:i.a.shape({acceptedTypes:i.a.string,instructions:i.a.string,multiple:i.a.bool})});t.default=ot},903:function(e,t){}}]);