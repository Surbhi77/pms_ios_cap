(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tnc-tnc-module"],{

/***/ "Cjoe":
/*!***********************************!*\
  !*** ./src/app/tnc/tnc.module.ts ***!
  \***********************************/
/*! exports provided: TncPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncPageModule", function() { return TncPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tnc_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tnc-routing.module */ "Y2gI");
/* harmony import */ var _tnc_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tnc.page */ "BPev");







let TncPageModule = class TncPageModule {
};
TncPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tnc_routing_module__WEBPACK_IMPORTED_MODULE_5__["TncPageRoutingModule"]
        ],
        declarations: [_tnc_page__WEBPACK_IMPORTED_MODULE_6__["TncPage"]]
    })
], TncPageModule);



/***/ }),

/***/ "Y2gI":
/*!*******************************************!*\
  !*** ./src/app/tnc/tnc-routing.module.ts ***!
  \*******************************************/
/*! exports provided: TncPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncPageRoutingModule", function() { return TncPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tnc_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tnc.page */ "BPev");




const routes = [
    {
        path: '',
        component: _tnc_page__WEBPACK_IMPORTED_MODULE_3__["TncPage"]
    }
];
let TncPageRoutingModule = class TncPageRoutingModule {
};
TncPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TncPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tnc-tnc-module.js.map