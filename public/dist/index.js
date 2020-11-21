/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("//call of the init function\ninit();\n\n//declaration of init function\nasync function init() {\n  if (location.search.split(\"=\")[1] === undefined) {\n    const workout = await API.getLastWorkout();\n    if (workout) {\n      location.search = \"?id=\" + workout._id;\n    } else {\n      document.querySelector(\"#continue-btn\").classList.add(\"d-none\");\n    }\n  }\n}\n\n\n//# sourceURL=webpack://mongoose_skeleton/./public/js/index.js?");
/******/ })()
;