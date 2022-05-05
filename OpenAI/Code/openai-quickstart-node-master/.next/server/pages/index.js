(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "H:\\hcl\\temp\\project\\OpenAI\\openai-quickstart-node-master\\openai-quickstart-node-master\\pages\\index.js";




function Home() {
  const {
    0: animalInput,
    1: setAnimalInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: result,
    1: setResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        animal: animalInput
      })
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "OpenAI Quickstart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "icon",
        href: "/dog.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "/dog.png",
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
        children: "Name my pet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
        onSubmit: onSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          name: "animal",
          placeholder: "Enter an animal",
          value: animalInput,
          onChange: e => setAnimalInput(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "submit",
          value: "Generate names"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().result),
        children: result
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"main": "index_main___Ajca",
	"icon": "index_icon__2FeAx",
	"result": "index_result__QuWa4"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0csSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NKLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDSyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQk4sK0NBQVEsRUFBcEM7O0FBRUEsaUJBQWVPLFFBQWYsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzdCQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGVBQUQsRUFBa0I7QUFDNUNDLE1BQUFBLE1BQU0sRUFBRSxNQURvQztBQUU1Q0MsTUFBQUEsT0FBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGbUM7QUFLNUNDLE1BQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBRUMsUUFBQUEsTUFBTSxFQUFFZDtBQUFWLE9BQWY7QUFMc0MsS0FBbEIsQ0FBNUI7QUFPQSxVQUFNZSxJQUFJLEdBQUcsTUFBTVIsUUFBUSxDQUFDUyxJQUFULEVBQW5CO0FBQ0FiLElBQUFBLFNBQVMsQ0FBQ1ksSUFBSSxDQUFDYixNQUFOLENBQVQ7QUFDQUQsSUFBQUEsY0FBYyxDQUFDLEVBQUQsQ0FBZDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBTSxlQUFTLEVBQUVILCtEQUFqQjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFDLFVBQVQ7QUFBb0IsaUJBQVMsRUFBRUEsK0RBQVdvQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxnQkFBUSxFQUFFZCxRQUFoQjtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxjQUFJLEVBQUMsUUFGUDtBQUdFLHFCQUFXLEVBQUMsaUJBSGQ7QUFJRSxlQUFLLEVBQUVKLFdBSlQ7QUFLRSxrQkFBUSxFQUFHbUIsQ0FBRCxJQUFPbEIsY0FBYyxDQUFDa0IsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVY7QUFMakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsZUFBSyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFhRTtBQUFLLGlCQUFTLEVBQUV2QixpRUFBaEI7QUFBQSxrQkFBZ0NJO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7Ozs7Ozs7OztBQzlDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzIiwid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYW5pbWFsSW5wdXQsIHNldEFuaW1hbElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbmltYWw6IGFuaW1hbElucHV0IH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICBzZXRBbmltYWxJbnB1dChcIlwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T3BlbkFJIFF1aWNrc3RhcnQ8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9kb2cucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2RvZy5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICA8aDM+TmFtZSBteSBwZXQ8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImFuaW1hbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGFuIGFuaW1hbFwiXG4gICAgICAgICAgICB2YWx1ZT17YW5pbWFsSW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuaW1hbElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBuYW1lc1wiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHR9PntyZXN1bHR9PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiaW5kZXhfbWFpbl9fX0FqY2FcIixcblx0XCJpY29uXCI6IFwiaW5kZXhfaWNvbl9fMkZlQXhcIixcblx0XCJyZXN1bHRcIjogXCJpbmRleF9yZXN1bHRfX1F1V2E0XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJIZWFkIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwiYW5pbWFsSW5wdXQiLCJzZXRBbmltYWxJbnB1dCIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbmltYWwiLCJkYXRhIiwianNvbiIsIm1haW4iLCJpY29uIiwiZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==