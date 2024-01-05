"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/hooks/useCart.tsx":
/*!*******************************!*\
  !*** ./src/hooks/useCart.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: function() { return /* binding */ CartContext; },\n/* harmony export */   CartProvider: function() { return /* binding */ CartProvider; },\n/* harmony export */   useCart: function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useToast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useToast */ \"(app-pages-browser)/./src/hooks/useToast.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst useCart = ()=>{\n    _s();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) {\n        throw new Error(\"useCart must be used within a CartProvider\");\n    }\n    return context;\n};\n_s(useCart, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nconst CartProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [passengerCount, setPassengerCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [passengerMeals, setPassengerMeals] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [drinks, setDrinks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { toastError } = (0,_useToast__WEBPACK_IMPORTED_MODULE_2__.useToast)();\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleAddPassenger = ()=>{\n        const newPassengerCount = passengerCount + 1;\n        setPassengerCount(newPassengerCount);\n    };\n    const handleSelectMeal = (meal, drink)=>{\n        if (passengerMeals.length === passengerCount) {\n            toastError(\"Add more passenger's before selecting meals\");\n        } else {\n            let updateSelectedMeals = [\n                ...passengerMeals\n            ];\n            updateSelectedMeals.push(meal);\n            setTotal(total + meal.price);\n            setPassengerMeals(updateSelectedMeals);\n            let updateSelectedDrinks = [\n                ...drinks\n            ];\n            updateSelectedDrinks.push(drink);\n            setDrinks(updateSelectedDrinks);\n        }\n    };\n    const handleRemoveItem = (passengerNumber)=>{\n        let updateSelectedMeals = [\n            ...passengerMeals\n        ];\n        let updateSelectedDrinks = [\n            ...drinks\n        ];\n        if (updateSelectedMeals.length >= passengerNumber) {\n            const removedMeal = updateSelectedMeals.splice(passengerNumber - 1, 1)[0];\n            updateSelectedDrinks.splice(passengerNumber - 1, 1)[0];\n            setPassengerMeals(updateSelectedMeals);\n            setDrinks(updateSelectedDrinks);\n            setTotal(total - removedMeal.price);\n            setPassengerCount((prevCount)=>prevCount - 1);\n        }\n    };\n    const cartFunctions = {\n        passengerCount,\n        total,\n        passengerMeals,\n        handleAddPassenger,\n        handleSelectMeal,\n        drinks,\n        handleRemoveItem\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: cartFunctions,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/aryagirigoudar/Documents/Python/Allo health/Allo_health/Air-Book-FE/src/hooks/useCart.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(CartProvider, \"zVwLo0c7NOVXslWLHO/x1KsPG4M=\", false, function() {\n    return [\n        _useToast__WEBPACK_IMPORTED_MODULE_2__.useToast\n    ];\n});\n_c = CartProvider;\nvar _c;\n$RefreshReg$(_c, \"CartProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VDYXJ0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDdUU7QUFDakM7QUFZL0IsTUFBTUksNEJBQWNKLG9EQUFhQSxDQUFzQixNQUFNO0FBRTdELE1BQU1LLFVBQVU7O0lBQ3JCLE1BQU1DLFVBQVVMLGlEQUFVQSxDQUFDRztJQUUzQixJQUFJLENBQUNFLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFFQSxPQUFPRDtBQUNULEVBQUU7R0FSV0Q7QUFVTixNQUFNRyxlQUFvQjtRQUFDLEVBQUVDLFFBQVEsRUFBTzs7SUFDakQsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFnQixFQUFFO0lBQ3RFLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBZ0IsRUFBRTtJQUN0RCxNQUFNLEVBQUVjLFVBQVUsRUFBRSxHQUFHYixtREFBUUE7SUFDL0IsTUFBTSxDQUFDYyxPQUFPQyxTQUFTLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNaUIscUJBQXFCO1FBQ3pCLE1BQU1DLG9CQUFvQlYsaUJBQWlCO1FBQzNDQyxrQkFBa0JTO0lBQ3BCO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDLE1BQWNDO1FBQ3RDLElBQUlYLGVBQWVZLE1BQU0sS0FBS2QsZ0JBQWdCO1lBQzVDTSxXQUFXO1FBQ2IsT0FBTztZQUNMLElBQUlTLHNCQUFzQjttQkFBSWI7YUFBZTtZQUM3Q2Esb0JBQW9CQyxJQUFJLENBQUNKO1lBQ3pCSixTQUFTRCxRQUFRSyxLQUFLSyxLQUFLO1lBQzNCZCxrQkFBa0JZO1lBQ2xCLElBQUlHLHVCQUF1QjttQkFBSWQ7YUFBTztZQUN0Q2MscUJBQXFCRixJQUFJLENBQUNIO1lBQzFCUixVQUFVYTtRQUNaO0lBQ0Y7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0M7UUFDeEIsSUFBSUwsc0JBQXNCO2VBQUliO1NBQWU7UUFDN0MsSUFBSWdCLHVCQUF1QjtlQUFJZDtTQUFPO1FBQ3RDLElBQUlXLG9CQUFvQkQsTUFBTSxJQUFJTSxpQkFBaUI7WUFDakQsTUFBTUMsY0FBY04sb0JBQW9CTyxNQUFNLENBQUNGLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBQ3pFRixxQkFBcUJJLE1BQU0sQ0FBQ0Ysa0JBQWtCLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDdERqQixrQkFBa0JZO1lBRWxCVixVQUFVYTtZQUVWVixTQUFTRCxRQUFRYyxZQUFZSixLQUFLO1lBRWxDaEIsa0JBQWtCLENBQUNzQixZQUFjQSxZQUFZO1FBQy9DO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBOEI7UUFDbEN4QjtRQUNBTztRQUNBTDtRQUNBTztRQUNBRTtRQUNBUDtRQUNBZTtJQUNGO0lBRUEscUJBQ0UsOERBQUN6QixZQUFZK0IsUUFBUTtRQUFDQyxPQUFPRjtrQkFDMUJ6Qjs7Ozs7O0FBR1AsRUFBRTtJQXpEV0Q7O1FBSVlMLCtDQUFRQTs7O0tBSnBCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlQ2FydC50c3g/NTQ5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTWVhbHMgfSBmcm9tIFwiQC9hcGkvbWVhbHMvTWVhbHNJbnRlcmZhY2VcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIi4vdXNlVG9hc3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ2FydENvbnRleHQge1xuICBwYXNzZW5nZXJDb3VudDogbnVtYmVyO1xuICB0b3RhbDogbnVtYmVyO1xuICBwYXNzZW5nZXJNZWFsczogSU1lYWxzW107XG4gIGRyaW5rczogc3RyaW5nW107XG4gIGhhbmRsZUFkZFBhc3NlbmdlcjogKCkgPT4gdm9pZDtcbiAgaGFuZGxlU2VsZWN0TWVhbDogKG1lYWw6IElNZWFscywgZHJpbms6IHN0cmluZykgPT4gdm9pZDtcbiAgaGFuZGxlUmVtb3ZlSXRlbTogKHBhc3Nlbmdlck51bWJlcjogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0PElDYXJ0Q29udGV4dCB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpOiBJQ2FydENvbnRleHQgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG5cbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlQ2FydCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ2FydFByb3ZpZGVyXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyOiBhbnkgPSAoeyBjaGlsZHJlbiB9OiBhbnkpID0+IHtcbiAgY29uc3QgW3Bhc3NlbmdlckNvdW50LCBzZXRQYXNzZW5nZXJDb3VudF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3Bhc3Nlbmdlck1lYWxzLCBzZXRQYXNzZW5nZXJNZWFsc10gPSB1c2VTdGF0ZTxJTWVhbHNbXSB8IFtdPihbXSk7XG4gIGNvbnN0IFtkcmlua3MsIHNldERyaW5rc10gPSB1c2VTdGF0ZTxzdHJpbmdbXSB8IFtdPihbXSk7XG4gIGNvbnN0IHsgdG9hc3RFcnJvciB9ID0gdXNlVG9hc3QoKTtcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVBZGRQYXNzZW5nZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3UGFzc2VuZ2VyQ291bnQgPSBwYXNzZW5nZXJDb3VudCArIDE7XG4gICAgc2V0UGFzc2VuZ2VyQ291bnQobmV3UGFzc2VuZ2VyQ291bnQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdE1lYWwgPSAobWVhbDogSU1lYWxzLCBkcmluazogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHBhc3Nlbmdlck1lYWxzLmxlbmd0aCA9PT0gcGFzc2VuZ2VyQ291bnQpIHtcbiAgICAgIHRvYXN0RXJyb3IoXCJBZGQgbW9yZSBwYXNzZW5nZXIncyBiZWZvcmUgc2VsZWN0aW5nIG1lYWxzXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdXBkYXRlU2VsZWN0ZWRNZWFscyA9IFsuLi5wYXNzZW5nZXJNZWFsc107XG4gICAgICB1cGRhdGVTZWxlY3RlZE1lYWxzLnB1c2gobWVhbCk7XG4gICAgICBzZXRUb3RhbCh0b3RhbCArIG1lYWwucHJpY2UpO1xuICAgICAgc2V0UGFzc2VuZ2VyTWVhbHModXBkYXRlU2VsZWN0ZWRNZWFscyk7XG4gICAgICBsZXQgdXBkYXRlU2VsZWN0ZWREcmlua3MgPSBbLi4uZHJpbmtzXTtcbiAgICAgIHVwZGF0ZVNlbGVjdGVkRHJpbmtzLnB1c2goZHJpbmspO1xuICAgICAgc2V0RHJpbmtzKHVwZGF0ZVNlbGVjdGVkRHJpbmtzKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IChwYXNzZW5nZXJOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgIGxldCB1cGRhdGVTZWxlY3RlZE1lYWxzID0gWy4uLnBhc3Nlbmdlck1lYWxzXTtcbiAgICBsZXQgdXBkYXRlU2VsZWN0ZWREcmlua3MgPSBbLi4uZHJpbmtzXTtcbiAgICBpZiAodXBkYXRlU2VsZWN0ZWRNZWFscy5sZW5ndGggPj0gcGFzc2VuZ2VyTnVtYmVyKSB7XG4gICAgICBjb25zdCByZW1vdmVkTWVhbCA9IHVwZGF0ZVNlbGVjdGVkTWVhbHMuc3BsaWNlKHBhc3Nlbmdlck51bWJlciAtIDEsIDEpWzBdO1xuICAgICAgdXBkYXRlU2VsZWN0ZWREcmlua3Muc3BsaWNlKHBhc3Nlbmdlck51bWJlciAtIDEsIDEpWzBdO1xuICAgICAgc2V0UGFzc2VuZ2VyTWVhbHModXBkYXRlU2VsZWN0ZWRNZWFscyk7XG4gICAgICBcbiAgICAgIHNldERyaW5rcyh1cGRhdGVTZWxlY3RlZERyaW5rcyk7XG5cbiAgICAgIHNldFRvdGFsKHRvdGFsIC0gcmVtb3ZlZE1lYWwucHJpY2UpO1xuXG4gICAgICBzZXRQYXNzZW5nZXJDb3VudCgocHJldkNvdW50KSA9PiBwcmV2Q291bnQgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2FydEZ1bmN0aW9uczogSUNhcnRDb250ZXh0ID0ge1xuICAgIHBhc3NlbmdlckNvdW50LFxuICAgIHRvdGFsLFxuICAgIHBhc3Nlbmdlck1lYWxzLFxuICAgIGhhbmRsZUFkZFBhc3NlbmdlcixcbiAgICBoYW5kbGVTZWxlY3RNZWFsLFxuICAgIGRyaW5rcyxcbiAgICBoYW5kbGVSZW1vdmVJdGVtLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjYXJ0RnVuY3Rpb25zfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlVG9hc3QiLCJDYXJ0Q29udGV4dCIsInVzZUNhcnQiLCJjb250ZXh0IiwiRXJyb3IiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInBhc3NlbmdlckNvdW50Iiwic2V0UGFzc2VuZ2VyQ291bnQiLCJwYXNzZW5nZXJNZWFscyIsInNldFBhc3Nlbmdlck1lYWxzIiwiZHJpbmtzIiwic2V0RHJpbmtzIiwidG9hc3RFcnJvciIsInRvdGFsIiwic2V0VG90YWwiLCJoYW5kbGVBZGRQYXNzZW5nZXIiLCJuZXdQYXNzZW5nZXJDb3VudCIsImhhbmRsZVNlbGVjdE1lYWwiLCJtZWFsIiwiZHJpbmsiLCJsZW5ndGgiLCJ1cGRhdGVTZWxlY3RlZE1lYWxzIiwicHVzaCIsInByaWNlIiwidXBkYXRlU2VsZWN0ZWREcmlua3MiLCJoYW5kbGVSZW1vdmVJdGVtIiwicGFzc2VuZ2VyTnVtYmVyIiwicmVtb3ZlZE1lYWwiLCJzcGxpY2UiLCJwcmV2Q291bnQiLCJjYXJ0RnVuY3Rpb25zIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/useCart.tsx\n"));

/***/ })

});