"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/MyLink.jsx":
/*!***************************************!*\
  !*** ./src/app/components/MyLink.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_images_zenn_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/images/zenn.png */ \"(app-pages-browser)/./public/images/zenn.png\");\n/* harmony import */ var _public_images_gitHub_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/images/gitHub.png */ \"(app-pages-browser)/./public/images/gitHub.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst MyLink = ()=>{\n    _s();\n    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n        triggerOnce: true\n    });\n    const [ref2, inView2] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n        triggerOnce: true\n    });\n    const fadeInVariants = {\n        hidden: {\n            opacity: 0\n        },\n        visible: {\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"contact\",\n        id: \"contact\",\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n            initial: \"hidden\",\n            animate: inView ? \"visible\" : \"hidden\",\n            variants: fadeInVariants,\n            transition: {\n                duration: 2.0\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: \"Blog/GitHub\"\n                }, void 0, false, {\n                    fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"works-app-box\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"works-app\",\n                            ref: ref,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                initial: \"hidden\",\n                                animate: inView ? \"visible\" : \"hidden\",\n                                variants: fadeInVariants,\n                                transition: {\n                                    duration: 2.5\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"works-img\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _public_images_zenn_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                            alt: \"works-image\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"button-link\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://zenn.dev/shin_re\",\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            className: \"btn btn-flat\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"Zenn\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"works-app\",\n                            ref: ref2,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                initial: \"hidden\",\n                                animate: inView2 ? \"visible\" : \"hidden\",\n                                variants: fadeInVariants,\n                                transition: {\n                                    duration: 2.5\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"works-img\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _public_images_gitHub_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                            alt: \"works-image\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"button-link\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://github.com/shin-tc-10\",\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            className: \"btn btn-flat\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"GitHub\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nakata/reactProject/shin-react-portfolio/src/app/components/MyLink.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyLink, \"3H4aJ7pES3wqUW2NuekItC8vszk=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\n_c = MyLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyLink);\nvar _c;\n$RefreshReg$(_c, \"MyLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9NeUxpbmsuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNhO0FBQ2lCO0FBQ3pCO0FBQ3lCO0FBQ0k7QUFHNUQsTUFBTU0sU0FBUzs7SUFDYixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR04sc0VBQVNBLENBQUM7UUFDOUJPLGFBQWE7SUFDZjtJQUNBLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHVCxzRUFBU0EsQ0FBQztRQUNoQ08sYUFBYTtJQUNmO0lBQ0EsTUFBTUcsaUJBQWlCO1FBQ3JCQyxRQUFRO1lBQUVDLFNBQVM7UUFBRTtRQUNyQkMsU0FBUztZQUFFRCxTQUFTO1FBQUU7SUFDeEI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSUMsV0FBVTtRQUFVQyxJQUFHO1FBQVVYLEtBQUtBO2tCQUN6Qyw0RUFBQ04saURBQU1BLENBQUNlLEdBQUc7WUFDVEcsU0FBUTtZQUNSQyxTQUFTWixTQUFTLFlBQVk7WUFDOUJhLFVBQVVUO1lBQ1ZVLFlBQVk7Z0JBQUVDLFVBQVU7WUFBSTs7OEJBRTVCLDhEQUFDQzs4QkFBRzs7Ozs7OzhCQUNKLDhEQUFDUjtvQkFBSUMsV0FBVTs7c0NBQ2YsOERBQUNEOzRCQUFJQyxXQUFVOzRCQUFZVixLQUFLQTtzQ0FDOUIsNEVBQUNOLGlEQUFNQSxDQUFDZSxHQUFHO2dDQUFDRyxTQUFRO2dDQUFTQyxTQUFTWixTQUFTLFlBQVk7Z0NBQVVhLFVBQVVUO2dDQUFnQlUsWUFBWTtvQ0FBRUMsVUFBVTtnQ0FBSTs7a0RBQ3pILDhEQUFDUDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ2QsbURBQUtBOzRDQUFDc0IsS0FBS3JCLCtEQUFTQTs0Q0FBRXNCLEtBQUk7Ozs7Ozs7Ozs7O2tEQUU3Qiw4REFBQ1Y7d0NBQUlDLFdBQVU7a0RBQ1gsNEVBQUNVOzRDQUFFQyxNQUFLOzRDQUEyQkMsUUFBTzs0Q0FBU0MsS0FBSTs0Q0FBc0JiLFdBQVU7c0RBQ3JGLDRFQUFDYzswREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUtoQiw4REFBQ2Y7NEJBQUlDLFdBQVU7NEJBQVlWLEtBQUtHO3NDQUM5Qiw0RUFBQ1QsaURBQU1BLENBQUNlLEdBQUc7Z0NBQUNHLFNBQVE7Z0NBQVNDLFNBQVNULFVBQVUsWUFBWTtnQ0FBVVUsVUFBVVQ7Z0NBQWdCVSxZQUFZO29DQUFFQyxVQUFVO2dDQUFJOztrREFDMUgsOERBQUNQO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDZCxtREFBS0E7NENBQUNzQixLQUFLcEIsaUVBQVdBOzRDQUFFcUIsS0FBSTs7Ozs7Ozs7Ozs7a0RBRS9CLDhEQUFDVjt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ1U7NENBQUVDLE1BQUs7NENBQWdDQyxRQUFPOzRDQUFTQyxLQUFJOzRDQUFzQmIsV0FBVTtzREFDMUYsNEVBQUNjOzBEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDdEI7R0FqRk16Qjs7UUFDa0JKLGtFQUFTQTtRQUdQQSxrRUFBU0E7OztLQUo3Qkk7QUFtRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL015TGluay5qc3g/NjA2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgWmVubkltYWdlIGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL3plbm4ucG5nXCI7XG5pbXBvcnQgR2l0SHViSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbWFnZXMvZ2l0SHViLnBuZ1wiO1xuXG5cbmNvbnN0IE15TGluayA9ICgpID0+IHtcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldyh7XG4gICAgdHJpZ2dlck9uY2U6IHRydWUsXG4gIH0pO1xuICBjb25zdCBbcmVmMiwgaW5WaWV3Ml0gPSB1c2VJblZpZXcoe1xuICAgIHRyaWdnZXJPbmNlOiB0cnVlLFxuICB9KTtcbiAgY29uc3QgZmFkZUluVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiIGlkPVwiY29udGFjdFwiIHJlZj17cmVmfT5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICBhbmltYXRlPXtpblZpZXcgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XG4gICAgICAgIHZhcmlhbnRzPXtmYWRlSW5WYXJpYW50c31cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMi4wIH19XG4gICAgICA+XG4gICAgICAgIDxoMj5CbG9nL0dpdEh1YjwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3MtYXBwLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtzLWFwcFwiIHJlZj17cmVmfT5cbiAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT17aW5WaWV3ID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifSB2YXJpYW50cz17ZmFkZUluVmFyaWFudHN9IHRyYW5zaXRpb249e3sgZHVyYXRpb246IDIuNSB9fSA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtzLWltZ1wiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtaZW5uSW1hZ2V9IGFsdD1cIndvcmtzLWltYWdlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tbGlua1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3plbm4uZGV2L3NoaW5fcmVcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1mbGF0XCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5aZW5uPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya3MtYXBwXCIgcmVmPXtyZWYyfT5cbiAgICAgICAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT17aW5WaWV3MiA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn0gdmFyaWFudHM9e2ZhZGVJblZhcmlhbnRzfSB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAyLjUgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtzLWltZ1wiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtHaXRIdWJJbWFnZX0gYWx0PVwid29ya3MtaW1hZ2VcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saW5rXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2hpbi10Yy0xMFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJidG4gYnRuLWZsYXRcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5HaXRIdWI8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJsaW5rLXRhYmxlXCIgaWQ9XCJsaW5rXCI+XG4gICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPlplbm48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3plbm4uZGV2L3NoaW5fcmVcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgaHR0cHM6Ly96ZW5uLmRldi9zaGluX3JlXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZD5HaXRIdWI8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc2hpbi10Yy0xMFwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vc2hpbi10Yy0xMFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15TGluaztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsInVzZUluVmlldyIsIkltYWdlIiwiWmVubkltYWdlIiwiR2l0SHViSW1hZ2UiLCJNeUxpbmsiLCJyZWYiLCJpblZpZXciLCJ0cmlnZ2VyT25jZSIsInJlZjIiLCJpblZpZXcyIiwiZmFkZUluVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwidmlzaWJsZSIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImgyIiwic3JjIiwiYWx0IiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/MyLink.jsx\n"));

/***/ })

});