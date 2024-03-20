/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', monospace;
  font-weight: 400;
}

.icon {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
}
.icon:hover {
  background-color: #e7e2e2;
}

header {
  display: flex;
  gap: 50px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
header h1 {
  font-size: 2.5rem;
  color: white;
  text-shadow: 3px 3px black;
  text-transform: uppercase;
  width: min-content;
  position: absolute;
  padding: 20px;
  z-index: 1;
  bottom: 10px;
}
header picture {
  position: relative;
}
header picture img {
  width: 480px;
  border-radius: 5px;
}
.about h3 {
  font-size: 3em;
  background-color: black;
  color: white;
  box-shadow: 5px 5px grey;
  width: max-content;
  position: relative;
  top: 20px;
  left: 30px;
  z-index: 1;
}
.about .text {
  font-size: 30px;
  color: grey;
  border: 0.1px solid grey;
  padding: 40px;
  max-width: 70vw;
  position: relative;
}
.about .links {
  position: absolute;
  right: 50px;
  margin: 5px;
}

main {
  padding: 2rem;
}
main h2 {
  font-size: 2.5rem;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 2rem;
}
.projects {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
}
.project {
  width: 400px;
  height: 350px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 10px 10px 10px 5px #00000033;
  transition: 0.4s transform;
  background-color: rgb(247, 247, 247);
}
.project:hover {
  transform: scale(1.1);
}

.project h3 {
  font-weight: bold;
}
.project .screenshot {
  align-self: center;
  border-radius: 5px;
}
.project .screenshot img {
  width: 300px;
}
.project .links {
  align-self: flex-end;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
}

footer {
  padding: 40px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8c52ff;
  border-radius: 10px 10px 0px 0px;
}

footer .contact .text {
  font-size: 1.5rem;
  max-width: 45ch;
}

footer .contact {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

footer picture img {
  width: 400px;
  border-radius: 5px;
}

.phone,
.mail {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bolder;
}

@media (max-width: 1100px) {
  header h1 {
    font-size: 2rem;
  }
  .about h3 {
    font-size: 2rem;
  }
  header picture img {
    width: 300px;
  }
  .about .text {
    font-size: 20px;
    padding: 40px;
  }

  footer picture img {
    width: 250px;
  }
}

@media (max-width: 710px) {
  header h1 {
    font-size: 1.5rem;
  }
  .about h3 {
    font-size: 1.5rem;
  }
  header picture img {
    width: 200px;
  }
  .about .text {
    font-size: 15px;
  }

  footer .contact .text {
    font-size: 1.2rem;
  }

  footer picture img {
    width: 150px;
  }
}

@media (max-width: 530px) {
  header {
    flex-direction: column;
  }
  header h1 {
    font-size: 1.5rem;
  }
  header picture img {
    width: 250px;
  }

  main h2 {
    font-size: 2rem;
  }
  .project {
    width: 250px;
    height: 300px;
    gap: 10px;
    padding: 20px;
  }
  .project .screenshot img {
    width: 200px;
  }

  footer {
    flex-direction: column;
    flex-flow: column-reverse;
    height: 500px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,0BAA0B;EAC1B,yBAAyB;EACzB,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,YAAY;AACd;AACA;EACE,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,uBAAuB;EACvB,YAAY;EACZ,wBAAwB;EACxB,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,UAAU;AACZ;AACA;EACE,eAAe;EACf,WAAW;EACX,wBAAwB;EACxB,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;AACb;;AAEA;EACE,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,eAAe;EACf,SAAS;EACT,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,wCAAwC;EACxC,0BAA0B;EAC1B,oCAAoC;AACtC;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;AACA;EACE,oBAAoB;EACpB,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,yBAAyB;EACzB,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;IACf,aAAa;EACf;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,YAAY;EACd;EACA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;EACA;IACE,YAAY;IACZ,aAAa;IACb,SAAS;IACT,aAAa;EACf;EACA;IACE,YAAY;EACd;;EAEA;IACE,sBAAsB;IACtB,yBAAyB;IACzB,aAAa;EACf;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', monospace;\n  font-weight: 400;\n}\n\n.icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.icon:hover {\n  background-color: #e7e2e2;\n}\n\nheader {\n  display: flex;\n  gap: 50px;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n}\nheader h1 {\n  font-size: 2.5rem;\n  color: white;\n  text-shadow: 3px 3px black;\n  text-transform: uppercase;\n  width: min-content;\n  position: absolute;\n  padding: 20px;\n  z-index: 1;\n  bottom: 10px;\n}\nheader picture {\n  position: relative;\n}\nheader picture img {\n  width: 480px;\n  border-radius: 5px;\n}\n.about h3 {\n  font-size: 3em;\n  background-color: black;\n  color: white;\n  box-shadow: 5px 5px grey;\n  width: max-content;\n  position: relative;\n  top: 20px;\n  left: 30px;\n  z-index: 1;\n}\n.about .text {\n  font-size: 30px;\n  color: grey;\n  border: 0.1px solid grey;\n  padding: 40px;\n  max-width: 70vw;\n  position: relative;\n}\n.about .links {\n  position: absolute;\n  right: 50px;\n  margin: 5px;\n}\n\nmain {\n  padding: 2rem;\n}\nmain h2 {\n  font-size: 2.5rem;\n  font-weight: bolder;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.projects {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 50px;\n  justify-content: center;\n}\n.project {\n  width: 400px;\n  height: 350px;\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  box-shadow: 10px 10px 10px 5px #00000033;\n  transition: 0.4s transform;\n  background-color: rgb(247, 247, 247);\n}\n.project:hover {\n  transform: scale(1.1);\n}\n\n.project h3 {\n  font-weight: bold;\n}\n.project .screenshot {\n  align-self: center;\n  border-radius: 5px;\n}\n.project .screenshot img {\n  width: 300px;\n}\n.project .links {\n  align-self: flex-end;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  margin-top: 10px;\n}\n\nfooter {\n  padding: 40px;\n  height: 400px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #8c52ff;\n  border-radius: 10px 10px 0px 0px;\n}\n\nfooter .contact .text {\n  font-size: 1.5rem;\n  max-width: 45ch;\n}\n\nfooter .contact {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\nfooter picture img {\n  width: 400px;\n  border-radius: 5px;\n}\n\n.phone,\n.mail {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-weight: bolder;\n}\n\n@media (max-width: 1100px) {\n  header h1 {\n    font-size: 2rem;\n  }\n  .about h3 {\n    font-size: 2rem;\n  }\n  header picture img {\n    width: 300px;\n  }\n  .about .text {\n    font-size: 20px;\n    padding: 40px;\n  }\n\n  footer picture img {\n    width: 250px;\n  }\n}\n\n@media (max-width: 710px) {\n  header h1 {\n    font-size: 1.5rem;\n  }\n  .about h3 {\n    font-size: 1.5rem;\n  }\n  header picture img {\n    width: 200px;\n  }\n  .about .text {\n    font-size: 15px;\n  }\n\n  footer .contact .text {\n    font-size: 1.2rem;\n  }\n\n  footer picture img {\n    width: 150px;\n  }\n}\n\n@media (max-width: 530px) {\n  header {\n    flex-direction: column;\n  }\n  header h1 {\n    font-size: 1.5rem;\n  }\n  header picture img {\n    width: 250px;\n  }\n\n  main h2 {\n    font-size: 2rem;\n  }\n  .project {\n    width: 250px;\n    height: 300px;\n    gap: 10px;\n    padding: 20px;\n  }\n  .project .screenshot img {\n    width: 200px;\n  }\n\n  footer {\n    flex-direction: column;\n    flex-flow: column-reverse;\n    height: 500px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM/assetLoader.js":
/*!********************************!*\
  !*** ./src/DOM/assetLoader.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assetLoader)
/* harmony export */ });
/* harmony import */ var _assets_images_profile_pc_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/profile-pc.jpeg */ "./src/assets/images/profile-pc.jpeg");
/* harmony import */ var _assets_images_profile_tablet_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/profile-tablet.jpeg */ "./src/assets/images/profile-tablet.jpeg");
/* harmony import */ var _assets_images_profile_mobile_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/profile-mobile.jpeg */ "./src/assets/images/profile-mobile.jpeg");
/* harmony import */ var _assets_images_contact_pc_JPG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/contact-pc.JPG */ "./src/assets/images/contact-pc.JPG");
/* harmony import */ var _assets_images_contact_tablet_JPG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/contact-tablet.JPG */ "./src/assets/images/contact-tablet.JPG");
/* harmony import */ var _assets_images_contact_mobile_JPG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/contact-mobile.JPG */ "./src/assets/images/contact-mobile.JPG");
/* harmony import */ var _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/github.svg */ "./src/assets/icons/github.svg");
/* harmony import */ var _assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/phone.svg */ "./src/assets/icons/phone.svg");
/* harmony import */ var _assets_icons_x_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/x.svg */ "./src/assets/icons/x.svg");
/* harmony import */ var _assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/linkedin.svg */ "./src/assets/icons/linkedin.svg");
/* harmony import */ var _assets_icons_mail_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/mail.svg */ "./src/assets/icons/mail.svg");
/* harmony import */ var _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/link.svg */ "./src/assets/icons/link.svg");
/* eslint-disable no-param-reassign */














const icons = {
  github: _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_6__,
  phone: _assets_icons_phone_svg__WEBPACK_IMPORTED_MODULE_7__,
  x: _assets_icons_x_svg__WEBPACK_IMPORTED_MODULE_8__,
  linkedin: _assets_icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_9__,
  mail: _assets_icons_mail_svg__WEBPACK_IMPORTED_MODULE_10__,
  link: _assets_icons_link_svg__WEBPACK_IMPORTED_MODULE_11__,
};

function imageLoader() {
  document.querySelector('#profile-pc').src = _assets_images_profile_pc_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  document.querySelector('#profile-tablet').srcset = _assets_images_profile_tablet_jpeg__WEBPACK_IMPORTED_MODULE_1__;
  document.querySelector('#profile-mobile').srcset = _assets_images_profile_mobile_jpeg__WEBPACK_IMPORTED_MODULE_2__;
  document.querySelector('#profile-mobile-ss').srcset = _assets_images_profile_tablet_jpeg__WEBPACK_IMPORTED_MODULE_1__;

  document.querySelector('#contact-pc').src = _assets_images_contact_pc_JPG__WEBPACK_IMPORTED_MODULE_3__;
  document.querySelector('#contact-tablet').srcset = _assets_images_contact_tablet_JPG__WEBPACK_IMPORTED_MODULE_4__;
  document.querySelector('#contact-mobile').srcset = _assets_images_contact_mobile_JPG__WEBPACK_IMPORTED_MODULE_5__;
  document.querySelector('#contact-mobile-ss').srcset = _assets_images_contact_tablet_JPG__WEBPACK_IMPORTED_MODULE_4__;
}

function iconLoader() {
  Array.from(document.querySelectorAll('.icon')).forEach((elem) => {
    elem.src = icons[elem.classList[1]];
  });
}

function assetLoader() {
  imageLoader();
  iconLoader();
}


/***/ }),

/***/ "./src/DOM/projects.js":
/*!*****************************!*\
  !*** ./src/DOM/projects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ writeProjects)
/* harmony export */ });
/* harmony import */ var _assets_screenshots_weather_app_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/screenshots/weather-app.png */ "./src/assets/screenshots/weather-app.png");
/* harmony import */ var _assets_screenshots_battleship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/screenshots/battleship.png */ "./src/assets/screenshots/battleship.png");
/* harmony import */ var _assets_screenshots_todo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/screenshots/todo.png */ "./src/assets/screenshots/todo.png");
/* harmony import */ var _assets_screenshots_etch_a_sketch_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/screenshots/etch-a-sketch.png */ "./src/assets/screenshots/etch-a-sketch.png");
/* harmony import */ var _assets_screenshots_library_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/screenshots/library.png */ "./src/assets/screenshots/library.png");
/* harmony import */ var _assets_screenshots_rock_paper_scissors_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/screenshots/rock-paper-scissors.png */ "./src/assets/screenshots/rock-paper-scissors.png");
/* harmony import */ var _assets_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/screenshots/calculator.png */ "./src/assets/screenshots/calculator.png");
/* harmony import */ var _assets_screenshots_tic_tac_toe_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/screenshots/tic-tac-toe.png */ "./src/assets/screenshots/tic-tac-toe.png");
/* harmony import */ var _assets_screenshots_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/screenshots/admin-dashboard.png */ "./src/assets/screenshots/admin-dashboard.png");
/* harmony import */ var _assets_screenshots_cv_app_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/screenshots/cv-app.png */ "./src/assets/screenshots/cv-app.png");
/* harmony import */ var _assets_screenshots_mem_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/screenshots/mem.png */ "./src/assets/screenshots/mem.png");
/* harmony import */ var _assets_screenshots_shopping_cart_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/screenshots/shopping-cart.png */ "./src/assets/screenshots/shopping-cart.png");













const data = {
  ShopIt: {
    link: 'https://durgeshbg-shopping-cart.netlify.app/',
    code: 'https://github.com/durgeshbg/shopping-cart',
    description: 'A basic Ecommerce website.',
    screenshot: _assets_screenshots_shopping_cart_png__WEBPACK_IMPORTED_MODULE_11__,
  },
  Poképick: {
    link: 'https://durgeshbg-memory-card-game.netlify.app/',
    code: 'https://github.com/durgeshbg/memory-card-game',
    description: 'A memory card game based on pokémon.',
    screenshot: _assets_screenshots_mem_png__WEBPACK_IMPORTED_MODULE_10__,
  },
  'CV Builder': {
    link: 'https://durgeshbg-cv-app.netlify.app/',
    code: 'https://github.com/durgeshbg/cv-app',
    description: 'CV Builder Web Application',
    screenshot: _assets_screenshots_cv_app_png__WEBPACK_IMPORTED_MODULE_9__,
  },
  'Battle Ship': {
    link: 'https://durgeshbg.github.io/battleship',
    code: 'https://github.com/durgeshbg/battleship',
    description: 'The classic paper and pen battleship game.',
    screenshot: _assets_screenshots_battleship_png__WEBPACK_IMPORTED_MODULE_1__,
  },
  'Weather App': {
    link: 'https://durgeshbg.github.io/weather-app',
    code: 'https://github.com/durgeshbg/weather-app',
    description: 'The OG weather app.',
    screenshot: _assets_screenshots_weather_app_png__WEBPACK_IMPORTED_MODULE_0__,
  },
  'Todo App': {
    link: 'https://durgeshbg.github.io/todo',
    code: 'https://github.com/durgeshbg/todo',
    description: 'A very complex Todo app.',
    screenshot: _assets_screenshots_todo_png__WEBPACK_IMPORTED_MODULE_2__,
  },
  Library: {
    link: 'https://durgeshbg.github.io/library',
    code: 'https://github.com/durgeshbg/library',
    description: 'Library app to manage personal reading XP.',
    screenshot: _assets_screenshots_library_png__WEBPACK_IMPORTED_MODULE_4__,
  },
  'Etch A Sketch': {
    link: 'https://durgeshbg.github.io/etch-a-sketch',
    code: 'https://github.com/durgeshbg/etch-a-sketch',
    description: 'A drawing board app.',
    screenshot: _assets_screenshots_etch_a_sketch_png__WEBPACK_IMPORTED_MODULE_3__,
  },
  'Rock Paper Scissors': {
    link: 'https://durgeshbg.github.io/rock-paper-scissors',
    code: 'https://github.com/durgeshbg/rock-paper-scissors',
    description: 'Rock paper scissors game.',
    screenshot: _assets_screenshots_rock_paper_scissors_png__WEBPACK_IMPORTED_MODULE_5__,
  },
  Calculator: {
    link: 'https://durgeshbg.github.io/calculator',
    code: 'https://github.com/durgeshbg/calculator',
    description: 'A simple calulator app.',
    screenshot: _assets_screenshots_calculator_png__WEBPACK_IMPORTED_MODULE_6__,
  },
  'Tic Tac Toe': {
    link: 'https://durgeshbg.github.io/tic-tac-toe',
    code: 'https://github.com/durgeshbg/tic-tac-toe',
    description: 'Tic Tac Toe game.',
    screenshot: _assets_screenshots_tic_tac_toe_png__WEBPACK_IMPORTED_MODULE_7__,
  },
  'Admin Dashboard': {
    link: 'https://durgeshbg.github.io/admin-dashboard',
    code: 'https://github.com/durgeshbg/admin-dashboard',
    description: 'Static admin page.',
    screenshot: _assets_screenshots_admin_dashboard_png__WEBPACK_IMPORTED_MODULE_8__,
  },
};

function projectDiv(project) {
  return `<div class="project">
  <div class="screenshot">
    <img src=${data[project].screenshot} alt="${project} screenshot" />
  </div>

  <div class="links">
      <a class="code" target="_blank" href="${data[project].code}">
        <img alt="GitHub Logo" class="icon github" />
      </a>
      <a class="preview" target="_blank" href="${data[project].link}">
        <img alt="Link Logo" class="icon link" />
      </a>
    </div>
  
  <div class="details">
    <h3>${project}</h3>
    <p>
      ${data[project].description}
    </p>
  </div>
</div>`;
}

function writeProjects() {
  const projects = document.querySelector('.projects');
  projects.innerHTML = '';
  Object.keys(data).forEach((project) => {
    const pDiv = projectDiv(project);
    projects.innerHTML += pDiv;
  });
}


/***/ }),

/***/ "./src/assets/icons/github.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/github.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aad62413a72365f887cc.svg";

/***/ }),

/***/ "./src/assets/icons/link.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/link.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f56fde8163c4b289cc2e.svg";

/***/ }),

/***/ "./src/assets/icons/linkedin.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/linkedin.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "409fab9502d8070f6666.svg";

/***/ }),

/***/ "./src/assets/icons/mail.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/mail.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b16dbfda8779922ea47e.svg";

/***/ }),

/***/ "./src/assets/icons/phone.svg":
/*!************************************!*\
  !*** ./src/assets/icons/phone.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b99db4f0cc529d864e2b.svg";

/***/ }),

/***/ "./src/assets/icons/x.svg":
/*!********************************!*\
  !*** ./src/assets/icons/x.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f08fcbe76d8b02c7d54.svg";

/***/ }),

/***/ "./src/assets/images/contact-mobile.JPG":
/*!**********************************************!*\
  !*** ./src/assets/images/contact-mobile.JPG ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9136c3fe85570f09c696.JPG";

/***/ }),

/***/ "./src/assets/images/contact-pc.JPG":
/*!******************************************!*\
  !*** ./src/assets/images/contact-pc.JPG ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd96a4c3f2b9522ac046.JPG";

/***/ }),

/***/ "./src/assets/images/contact-tablet.JPG":
/*!**********************************************!*\
  !*** ./src/assets/images/contact-tablet.JPG ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea35b3348bc5e2776737.JPG";

/***/ }),

/***/ "./src/assets/images/profile-mobile.jpeg":
/*!***********************************************!*\
  !*** ./src/assets/images/profile-mobile.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a37f0a1f45e7f3e979a.jpeg";

/***/ }),

/***/ "./src/assets/images/profile-pc.jpeg":
/*!*******************************************!*\
  !*** ./src/assets/images/profile-pc.jpeg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "055e7178f0bf4af221ab.jpeg";

/***/ }),

/***/ "./src/assets/images/profile-tablet.jpeg":
/*!***********************************************!*\
  !*** ./src/assets/images/profile-tablet.jpeg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5c15f281f9089a5587c2.jpeg";

/***/ }),

/***/ "./src/assets/screenshots/admin-dashboard.png":
/*!****************************************************!*\
  !*** ./src/assets/screenshots/admin-dashboard.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a5e5b5d661256d0aaf5.png";

/***/ }),

/***/ "./src/assets/screenshots/battleship.png":
/*!***********************************************!*\
  !*** ./src/assets/screenshots/battleship.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f311944e837b0d8fe1e6.png";

/***/ }),

/***/ "./src/assets/screenshots/calculator.png":
/*!***********************************************!*\
  !*** ./src/assets/screenshots/calculator.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38db5429b64145246d48.png";

/***/ }),

/***/ "./src/assets/screenshots/cv-app.png":
/*!*******************************************!*\
  !*** ./src/assets/screenshots/cv-app.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d631a1ed664a5abfbd18.png";

/***/ }),

/***/ "./src/assets/screenshots/etch-a-sketch.png":
/*!**************************************************!*\
  !*** ./src/assets/screenshots/etch-a-sketch.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "700a1c623ca14b4f125f.png";

/***/ }),

/***/ "./src/assets/screenshots/library.png":
/*!********************************************!*\
  !*** ./src/assets/screenshots/library.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5eaeac4dfd347e972790.png";

/***/ }),

/***/ "./src/assets/screenshots/mem.png":
/*!****************************************!*\
  !*** ./src/assets/screenshots/mem.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66da065347ab5c688563.png";

/***/ }),

/***/ "./src/assets/screenshots/rock-paper-scissors.png":
/*!********************************************************!*\
  !*** ./src/assets/screenshots/rock-paper-scissors.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a01c95834887b53b052.png";

/***/ }),

/***/ "./src/assets/screenshots/shopping-cart.png":
/*!**************************************************!*\
  !*** ./src/assets/screenshots/shopping-cart.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4354ad216bb1729c950e.png";

/***/ }),

/***/ "./src/assets/screenshots/tic-tac-toe.png":
/*!************************************************!*\
  !*** ./src/assets/screenshots/tic-tac-toe.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f95078034b9893925a54.png";

/***/ }),

/***/ "./src/assets/screenshots/todo.png":
/*!*****************************************!*\
  !*** ./src/assets/screenshots/todo.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f64557f1664cb66f891d.png";

/***/ }),

/***/ "./src/assets/screenshots/weather-app.png":
/*!************************************************!*\
  !*** ./src/assets/screenshots/weather-app.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ab6573680d6c8be9b51.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM_assetLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/assetLoader */ "./src/DOM/assetLoader.js");
/* harmony import */ var _DOM_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/projects */ "./src/DOM/projects.js");




(0,_DOM_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_DOM_assetLoader__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxL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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3VCO0FBQ0Q7O0FBRTNDLHlEQUFhO0FBQ2IsNERBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ib21lcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vSG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vSG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vSG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vSG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vSG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ib21lcGFnZS8uL3NyYy9ET00vYXNzZXRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vSG9tZXBhZ2UvLi9zcmMvRE9NL3Byb2plY3RzLmpzIiwid2VicGFjazovL0hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ib21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ib21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9Ib21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vSG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBtb25vc3BhY2U7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaWNvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2UyZTI7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggYmxhY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDEwcHg7XG59XG5oZWFkZXIgcGljdHVyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmhlYWRlciBwaWN0dXJlIGltZyB7XG4gIHdpZHRoOiA0ODBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmFib3V0IGgzIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDVweCA1cHggZ3JleTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMzBweDtcbiAgei1pbmRleDogMTtcbn1cbi5hYm91dCAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGJvcmRlcjogMC4xcHggc29saWQgZ3JleTtcbiAgcGFkZGluZzogNDBweDtcbiAgbWF4LXdpZHRoOiA3MHZ3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJvdXQgLmxpbmtzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAycmVtO1xufVxubWFpbiBoMiB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4ucHJvamVjdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucHJvamVjdCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgcGFkZGluZzogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCA1cHggIzAwMDAwMDMzO1xuICB0cmFuc2l0aW9uOiAwLjRzIHRyYW5zZm9ybTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjQ3LCAyNDcpO1xufVxuLnByb2plY3Q6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5wcm9qZWN0IGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvamVjdCAuc2NyZWVuc2hvdCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnByb2plY3QgLnNjcmVlbnNob3QgaW1nIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLnByb2plY3QgLmxpbmtzIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuZm9vdGVyIHtcbiAgcGFkZGluZzogNDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGM1MmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cblxuZm9vdGVyIC5jb250YWN0IC50ZXh0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1heC13aWR0aDogNDVjaDtcbn1cblxuZm9vdGVyIC5jb250YWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzMHB4O1xufVxuXG5mb290ZXIgcGljdHVyZSBpbWcge1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBob25lLFxuLm1haWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcbiAgaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgLmFib3V0IGgzIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbiAgaGVhZGVyIHBpY3R1cmUgaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgLmFib3V0IC50ZXh0IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxuXG4gIGZvb3RlciBwaWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MTBweCkge1xuICBoZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5hYm91dCBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgaGVhZGVyIHBpY3R1cmUgaW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmFib3V0IC50ZXh0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuICBmb290ZXIgLmNvbnRhY3QgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG5cbiAgZm9vdGVyIHBpY3R1cmUgaW1nIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUzMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBoZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIGhlYWRlciBwaWN0dXJlIGltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG5cbiAgbWFpbiBoMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5wcm9qZWN0IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAucHJvamVjdCAuc2NyZWVuc2hvdCBpbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuXG4gIGZvb3RlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNC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Lmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgbW9ub3NwYWNlO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pY29uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlN2UyZTI7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcbmhlYWRlciBoMSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IGJsYWNrO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHdpZHRoOiBtaW4tY29udGVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG5oZWFkZXIgcGljdHVyZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmhlYWRlciBwaWN0dXJlIGltZyB7XFxuICB3aWR0aDogNDgwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5hYm91dCBoMyB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCBncmV5O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAyMHB4O1xcbiAgbGVmdDogMzBweDtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hYm91dCAudGV4dCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogZ3JleTtcXG4gIGJvcmRlcjogMC4xcHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDQwcHg7XFxuICBtYXgtd2lkdGg6IDcwdnc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hYm91dCAubGlua3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDUwcHg7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbn1cXG5tYWluIGgyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA1MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0IHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCA1cHggIzAwMDAwMDMzO1xcbiAgdHJhbnNpdGlvbjogMC40cyB0cmFuc2Zvcm07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XFxufVxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnByb2plY3QgaDMge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5wcm9qZWN0IC5zY3JlZW5zaG90IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLnByb2plY3QgLnNjcmVlbnNob3QgaW1nIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuLnByb2plY3QgLmxpbmtzIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogNDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzUyZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcXG59XFxuXFxuZm9vdGVyIC5jb250YWN0IC50ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWF4LXdpZHRoOiA0NWNoO1xcbn1cXG5cXG5mb290ZXIgLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbmZvb3RlciBwaWN0dXJlIGltZyB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5waG9uZSxcXG4ubWFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIGhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIC5hYm91dCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIGhlYWRlciBwaWN0dXJlIGltZyB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5hYm91dCAudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgcGFkZGluZzogNDBweDtcXG4gIH1cXG5cXG4gIGZvb3RlciBwaWN0dXJlIGltZyB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcxMHB4KSB7XFxuICBoZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG4gIC5hYm91dCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgaGVhZGVyIHBpY3R1cmUgaW1nIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgfVxcbiAgLmFib3V0IC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIC5jb250YWN0IC50ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICBmb290ZXIgcGljdHVyZSBpbWcge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MzBweCkge1xcbiAgaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIGhlYWRlciBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcbiAgaGVhZGVyIHBpY3R1cmUgaW1nIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcblxcbiAgbWFpbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG4gIC5wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICB9XFxuICAucHJvamVjdCAuc2NyZWVuc2hvdCBpbWcge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbi1yZXZlcnNlO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBwcm9maWxlUEMgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlLXBjLmpwZWcnO1xuaW1wb3J0IHByb2ZpbGVUYWJsZXQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlLXRhYmxldC5qcGVnJztcbmltcG9ydCBwcm9maWxlTW9iaWxlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS1tb2JpbGUuanBlZyc7XG5pbXBvcnQgY29udGFjdFBDIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvY29udGFjdC1wYy5KUEcnO1xuaW1wb3J0IGNvbnRhY3RUYWJsZXQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0LXRhYmxldC5KUEcnO1xuaW1wb3J0IGNvbnRhY3RNb2JpbGUgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9jb250YWN0LW1vYmlsZS5KUEcnO1xuXG5pbXBvcnQgZ2l0aHViIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9naXRodWIuc3ZnJztcbmltcG9ydCBwaG9uZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvcGhvbmUuc3ZnJztcbmltcG9ydCB4IGZyb20gJy4uL2Fzc2V0cy9pY29ucy94LnN2Zyc7XG5pbXBvcnQgbGlua2VkaW4gZnJvbSAnLi4vYXNzZXRzL2ljb25zL2xpbmtlZGluLnN2Zyc7XG5pbXBvcnQgbWFpbCBmcm9tICcuLi9hc3NldHMvaWNvbnMvbWFpbC5zdmcnO1xuaW1wb3J0IGxpbmsgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2xpbmsuc3ZnJztcblxuY29uc3QgaWNvbnMgPSB7XG4gIGdpdGh1YixcbiAgcGhvbmUsXG4gIHgsXG4gIGxpbmtlZGluLFxuICBtYWlsLFxuICBsaW5rLFxufTtcblxuZnVuY3Rpb24gaW1hZ2VMb2FkZXIoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9maWxlLXBjJykuc3JjID0gcHJvZmlsZVBDO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS10YWJsZXQnKS5zcmNzZXQgPSBwcm9maWxlVGFibGV0O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1tb2JpbGUnKS5zcmNzZXQgPSBwcm9maWxlTW9iaWxlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1tb2JpbGUtc3MnKS5zcmNzZXQgPSBwcm9maWxlVGFibGV0O1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0LXBjJykuc3JjID0gY29udGFjdFBDO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC10YWJsZXQnKS5zcmNzZXQgPSBjb250YWN0VGFibGV0O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC1tb2JpbGUnKS5zcmNzZXQgPSBjb250YWN0TW9iaWxlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC1tb2JpbGUtc3MnKS5zcmNzZXQgPSBjb250YWN0VGFibGV0O1xufVxuXG5mdW5jdGlvbiBpY29uTG9hZGVyKCkge1xuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uJykpLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBlbGVtLnNyYyA9IGljb25zW2VsZW0uY2xhc3NMaXN0WzFdXTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2V0TG9hZGVyKCkge1xuICBpbWFnZUxvYWRlcigpO1xuICBpY29uTG9hZGVyKCk7XG59XG4iLCJpbXBvcnQgd2VhdGhlclNTIGZyb20gJy4uL2Fzc2V0cy9zY3JlZW5zaG90cy93ZWF0aGVyLWFwcC5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXBTUyBmcm9tICcuLi9hc3NldHMvc2NyZWVuc2hvdHMvYmF0dGxlc2hpcC5wbmcnO1xuaW1wb3J0IHRvZG9TUyBmcm9tICcuLi9hc3NldHMvc2NyZWVuc2hvdHMvdG9kby5wbmcnO1xuaW1wb3J0IGVhc1NTIGZyb20gJy4uL2Fzc2V0cy9zY3JlZW5zaG90cy9ldGNoLWEtc2tldGNoLnBuZyc7XG5pbXBvcnQgbGlicmFyeVNTIGZyb20gJy4uL2Fzc2V0cy9zY3JlZW5zaG90cy9saWJyYXJ5LnBuZyc7XG5pbXBvcnQgcnBzU1MgZnJvbSAnLi4vYXNzZXRzL3NjcmVlbnNob3RzL3JvY2stcGFwZXItc2Npc3NvcnMucG5nJztcbmltcG9ydCBjYWxjdWxhdG9yU1MgZnJvbSAnLi4vYXNzZXRzL3NjcmVlbnNob3RzL2NhbGN1bGF0b3IucG5nJztcbmltcG9ydCB0dHRTUyBmcm9tICcuLi9hc3NldHMvc2NyZWVuc2hvdHMvdGljLXRhYy10b2UucG5nJztcbmltcG9ydCBhZG1pblNTIGZyb20gJy4uL2Fzc2V0cy9zY3JlZW5zaG90cy9hZG1pbi1kYXNoYm9hcmQucG5nJztcbmltcG9ydCBjdmFwcFNTIGZyb20gJy4uL2Fzc2V0cy9zY3JlZW5zaG90cy9jdi1hcHAucG5nJztcbmltcG9ydCBtZW1TUyBmcm9tICcuLi9hc3NldHMvc2NyZWVuc2hvdHMvbWVtLnBuZyc7XG5pbXBvcnQgc2hvcFNTIGZyb20gJy4uL2Fzc2V0cy9zY3JlZW5zaG90cy9zaG9wcGluZy1jYXJ0LnBuZyc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIFNob3BJdDoge1xuICAgIGxpbms6ICdodHRwczovL2R1cmdlc2hiZy1zaG9wcGluZy1jYXJ0Lm5ldGxpZnkuYXBwLycsXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kdXJnZXNoYmcvc2hvcHBpbmctY2FydCcsXG4gICAgZGVzY3JpcHRpb246ICdBIGJhc2ljIEVjb21tZXJjZSB3ZWJzaXRlLicsXG4gICAgc2NyZWVuc2hvdDogc2hvcFNTLFxuICB9LFxuICBQb2vDqXBpY2s6IHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9kdXJnZXNoYmctbWVtb3J5LWNhcmQtZ2FtZS5uZXRsaWZ5LmFwcC8nLFxuICAgIGNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vZHVyZ2VzaGJnL21lbW9yeS1jYXJkLWdhbWUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBtZW1vcnkgY2FyZCBnYW1lIGJhc2VkIG9uIHBva8OpbW9uLicsXG4gICAgc2NyZWVuc2hvdDogbWVtU1MsXG4gIH0sXG4gICdDViBCdWlsZGVyJzoge1xuICAgIGxpbms6ICdodHRwczovL2R1cmdlc2hiZy1jdi1hcHAubmV0bGlmeS5hcHAvJyxcbiAgICBjb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL2R1cmdlc2hiZy9jdi1hcHAnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ1YgQnVpbGRlciBXZWIgQXBwbGljYXRpb24nLFxuICAgIHNjcmVlbnNob3Q6IGN2YXBwU1MsXG4gIH0sXG4gICdCYXR0bGUgU2hpcCc6IHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9kdXJnZXNoYmcuZ2l0aHViLmlvL2JhdHRsZXNoaXAnLFxuICAgIGNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vZHVyZ2VzaGJnL2JhdHRsZXNoaXAnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhlIGNsYXNzaWMgcGFwZXIgYW5kIHBlbiBiYXR0bGVzaGlwIGdhbWUuJyxcbiAgICBzY3JlZW5zaG90OiBiYXR0bGVzaGlwU1MsXG4gIH0sXG4gICdXZWF0aGVyIEFwcCc6IHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9kdXJnZXNoYmcuZ2l0aHViLmlvL3dlYXRoZXItYXBwJyxcbiAgICBjb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL2R1cmdlc2hiZy93ZWF0aGVyLWFwcCcsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgT0cgd2VhdGhlciBhcHAuJyxcbiAgICBzY3JlZW5zaG90OiB3ZWF0aGVyU1MsXG4gIH0sXG4gICdUb2RvIEFwcCc6IHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9kdXJnZXNoYmcuZ2l0aHViLmlvL3RvZG8nLFxuICAgIGNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vZHVyZ2VzaGJnL3RvZG8nLFxuICAgIGRlc2NyaXB0aW9uOiAnQSB2ZXJ5IGNvbXBsZXggVG9kbyBhcHAuJyxcbiAgICBzY3JlZW5zaG90OiB0b2RvU1MsXG4gIH0sXG4gIExpYnJhcnk6IHtcbiAgICBsaW5rOiAnaHR0cHM6Ly9kdXJnZXNoYmcuZ2l0aHViLmlvL2xpYnJhcnknLFxuICAgIGNvZGU6ICdodHRwczovL2dpdGh1Yi5jb20vZHVyZ2VzaGJnL2xpYnJhcnknLFxuICAgIGRlc2NyaXB0aW9uOiAnTGlicmFyeSBhcHAgdG8gbWFuYWdlIHBlcnNvbmFsIHJlYWRpbmcgWFAuJyxcbiAgICBzY3JlZW5zaG90OiBsaWJyYXJ5U1MsXG4gIH0sXG4gICdFdGNoIEEgU2tldGNoJzoge1xuICAgIGxpbms6ICdodHRwczovL2R1cmdlc2hiZy5naXRodWIuaW8vZXRjaC1hLXNrZXRjaCcsXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kdXJnZXNoYmcvZXRjaC1hLXNrZXRjaCcsXG4gICAgZGVzY3JpcHRpb246ICdBIGRyYXdpbmcgYm9hcmQgYXBwLicsXG4gICAgc2NyZWVuc2hvdDogZWFzU1MsXG4gIH0sXG4gICdSb2NrIFBhcGVyIFNjaXNzb3JzJzoge1xuICAgIGxpbms6ICdodHRwczovL2R1cmdlc2hiZy5naXRodWIuaW8vcm9jay1wYXBlci1zY2lzc29ycycsXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kdXJnZXNoYmcvcm9jay1wYXBlci1zY2lzc29ycycsXG4gICAgZGVzY3JpcHRpb246ICdSb2NrIHBhcGVyIHNjaXNzb3JzIGdhbWUuJyxcbiAgICBzY3JlZW5zaG90OiBycHNTUyxcbiAgfSxcbiAgQ2FsY3VsYXRvcjoge1xuICAgIGxpbms6ICdodHRwczovL2R1cmdlc2hiZy5naXRodWIuaW8vY2FsY3VsYXRvcicsXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kdXJnZXNoYmcvY2FsY3VsYXRvcicsXG4gICAgZGVzY3JpcHRpb246ICdBIHNpbXBsZSBjYWx1bGF0b3IgYXBwLicsXG4gICAgc2NyZWVuc2hvdDogY2FsY3VsYXRvclNTLFxuICB9LFxuICAnVGljIFRhYyBUb2UnOiB7XG4gICAgbGluazogJ2h0dHBzOi8vZHVyZ2VzaGJnLmdpdGh1Yi5pby90aWMtdGFjLXRvZScsXG4gICAgY29kZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kdXJnZXNoYmcvdGljLXRhYy10b2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGljIFRhYyBUb2UgZ2FtZS4nLFxuICAgIHNjcmVlbnNob3Q6IHR0dFNTLFxuICB9LFxuICAnQWRtaW4gRGFzaGJvYXJkJzoge1xuICAgIGxpbms6ICdodHRwczovL2R1cmdlc2hiZy5naXRodWIuaW8vYWRtaW4tZGFzaGJvYXJkJyxcbiAgICBjb2RlOiAnaHR0cHM6Ly9naXRodWIuY29tL2R1cmdlc2hiZy9hZG1pbi1kYXNoYm9hcmQnLFxuICAgIGRlc2NyaXB0aW9uOiAnU3RhdGljIGFkbWluIHBhZ2UuJyxcbiAgICBzY3JlZW5zaG90OiBhZG1pblNTLFxuICB9LFxufTtcblxuZnVuY3Rpb24gcHJvamVjdERpdihwcm9qZWN0KSB7XG4gIHJldHVybiBgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgPGRpdiBjbGFzcz1cInNjcmVlbnNob3RcIj5cbiAgICA8aW1nIHNyYz0ke2RhdGFbcHJvamVjdF0uc2NyZWVuc2hvdH0gYWx0PVwiJHtwcm9qZWN0fSBzY3JlZW5zaG90XCIgLz5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImxpbmtzXCI+XG4gICAgICA8YSBjbGFzcz1cImNvZGVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiJHtkYXRhW3Byb2plY3RdLmNvZGV9XCI+XG4gICAgICAgIDxpbWcgYWx0PVwiR2l0SHViIExvZ29cIiBjbGFzcz1cImljb24gZ2l0aHViXCIgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIGNsYXNzPVwicHJldmlld1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke2RhdGFbcHJvamVjdF0ubGlua31cIj5cbiAgICAgICAgPGltZyBhbHQ9XCJMaW5rIExvZ29cIiBjbGFzcz1cImljb24gbGlua1wiIC8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIFxuICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICAgIDxoMz4ke3Byb2plY3R9PC9oMz5cbiAgICA8cD5cbiAgICAgICR7ZGF0YVtwcm9qZWN0XS5kZXNjcmlwdGlvbn1cbiAgICA8L3A+XG4gIDwvZGl2PlxuPC9kaXY+YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JpdGVQcm9qZWN0cygpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgcHJvamVjdHMuaW5uZXJIVE1MID0gJyc7XG4gIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwRGl2ID0gcHJvamVjdERpdihwcm9qZWN0KTtcbiAgICBwcm9qZWN0cy5pbm5lckhUTUwgKz0gcERpdjtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGFzc2V0TG9hZGVyIGZyb20gJy4vRE9NL2Fzc2V0TG9hZGVyJztcbmltcG9ydCB3cml0ZVByb2plY3RzIGZyb20gJy4vRE9NL3Byb2plY3RzJztcblxud3JpdGVQcm9qZWN0cygpO1xuYXNzZXRMb2FkZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==