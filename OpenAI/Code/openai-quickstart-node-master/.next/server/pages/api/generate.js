"use strict";
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ "openai");
/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);

const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6
  });
  res.status(200).json({
    result: completion.data.choices[0].text
  });
}

function generatePrompt(animal) {
  const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dlbmVyYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1FLGFBQWEsR0FBRyxJQUFJRixpREFBSixDQUFrQjtBQUN0Q0csRUFBQUEsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEa0IsQ0FBbEIsQ0FBdEI7QUFHQSxNQUFNQyxNQUFNLEdBQUcsSUFBSU4sNkNBQUosQ0FBY0MsYUFBZCxDQUFmO0FBRUEsNkJBQWUsMENBQWdCTSxHQUFoQixFQUFxQkMsR0FBckIsRUFBMEI7QUFDdkMsUUFBTUMsVUFBVSxHQUFHLE1BQU1ILE1BQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDO0FBQ25FQyxJQUFBQSxNQUFNLEVBQUVDLGNBQWMsQ0FBQ0wsR0FBRyxDQUFDTSxJQUFKLENBQVNDLE1BQVYsQ0FENkM7QUFFbkVDLElBQUFBLFdBQVcsRUFBRTtBQUZzRCxHQUE1QyxDQUF6QjtBQUlBUCxFQUFBQSxHQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxJQUFBQSxNQUFNLEVBQUVULFVBQVUsQ0FBQ1UsSUFBWCxDQUFnQkMsT0FBaEIsQ0FBd0IsQ0FBeEIsRUFBMkJDO0FBQXJDLEdBQXJCO0FBQ0Q7O0FBRUQsU0FBU1QsY0FBVCxDQUF3QkUsTUFBeEIsRUFBZ0M7QUFDOUIsUUFBTVEsaUJBQWlCLEdBQ3JCUixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVTLFdBQVYsS0FBMEJULE1BQU0sQ0FBQ1UsS0FBUCxDQUFhLENBQWIsRUFBZ0JDLFdBQWhCLEVBRDVCO0FBRUEsU0FBUTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVSCxpQkFBa0I7QUFDNUIsT0FQRTtBQVFEOzs7Ozs7Ozs7O0FDMUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS5qcyIsIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlL2V4dGVybmFsIFwib3BlbmFpXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKFwidGV4dC1kYXZpbmNpLTAwMlwiLCB7XG4gICAgcHJvbXB0OiBnZW5lcmF0ZVByb21wdChyZXEuYm9keS5hbmltYWwpLFxuICAgIHRlbXBlcmF0dXJlOiAwLjYsXG4gIH0pO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogY29tcGxldGlvbi5kYXRhLmNob2ljZXNbMF0udGV4dCB9KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9tcHQoYW5pbWFsKSB7XG4gIGNvbnN0IGNhcGl0YWxpemVkQW5pbWFsID1cbiAgICBhbmltYWxbMF0udG9VcHBlckNhc2UoKSArIGFuaW1hbC5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gYFN1Z2dlc3QgdGhyZWUgbmFtZXMgZm9yIGFuIGFuaW1hbCB0aGF0IGlzIGEgc3VwZXJoZXJvLlxuXG5BbmltYWw6IENhdFxuTmFtZXM6IENhcHRhaW4gU2hhcnBjbGF3LCBBZ2VudCBGbHVmZmJhbGwsIFRoZSBJbmNyZWRpYmxlIEZlbGluZVxuQW5pbWFsOiBEb2dcbk5hbWVzOiBSdWZmIHRoZSBQcm90ZWN0b3IsIFdvbmRlciBDYW5pbmUsIFNpciBCYXJrcy1hLUxvdFxuQW5pbWFsOiAke2NhcGl0YWxpemVkQW5pbWFsfVxuTmFtZXM6YDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9wZW5haVwiKTsiXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsInByb21wdCIsImdlbmVyYXRlUHJvbXB0IiwiYm9keSIsImFuaW1hbCIsInRlbXBlcmF0dXJlIiwic3RhdHVzIiwianNvbiIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCIsImNhcGl0YWxpemVkQW5pbWFsIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==