/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**************************!*\
  !*** ./public/js/api.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("//API variable creating object of application functions\r\nconst API = {\r\n  //get Last Workout function declaration\r\n  async getLastWorkout() {\r\n    let res;\r\n    try {\r\n      res = await fetch(\"/api/workouts\");\r\n    } catch (err) {\r\n      console.log(err);\r\n    }\r\n    const json = await res.json();\r\n\r\n    return json[json.length - 1];\r\n  },\r\n  //add exercise function declaration\r\n  async addExercise(data) {\r\n    const id = location.search.split(\"=\")[1];\r\n\r\n    const res = await fetch(\"/api/workouts/\" + id, {\r\n      method: \"PUT\",\r\n      headers: { \"Content-Type\": \"application/json\" },\r\n      body: JSON.stringify(data),\r\n    });\r\n\r\n    const json = await res.json();\r\n\r\n    return json;\r\n  },\r\n  //create workout function declaration\r\n  async createWorkout(data = {}) {\r\n    const res = await fetch(\"/api/workouts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: { \"Content-Type\": \"application/json\" },\r\n    });\r\n\r\n    const json = await res.json();\r\n\r\n    return json;\r\n  },\r\n  //get workouts in range function declaration\r\n  async getWorkoutsInRange() {\r\n    const res = await fetch(`/api/workouts/range`);\r\n    const json = await res.json();\r\n\r\n    return json;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://mongoose_skeleton/./public/js/api.js?");
/******/ })()
;