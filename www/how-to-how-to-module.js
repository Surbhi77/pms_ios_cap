(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["how-to-how-to-module"],{

/***/ "AueF":
/*!*************************************************!*\
  !*** ./src/app/how-to/how-to-routing.module.ts ***!
  \*************************************************/
/*! exports provided: HowToPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToPageRoutingModule", function() { return HowToPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _how_to_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how-to.page */ "g2Qt");




const routes = [
    {
        path: '',
        component: _how_to_page__WEBPACK_IMPORTED_MODULE_3__["HowToPage"]
    }
];
let HowToPageRoutingModule = class HowToPageRoutingModule {
};
HowToPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HowToPageRoutingModule);



/***/ }),

/***/ "KFXf":
/*!*****************************************!*\
  !*** ./src/app/how-to/how-to.module.ts ***!
  \*****************************************/
/*! exports provided: HowToPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToPageModule", function() { return HowToPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _how_to_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./how-to-routing.module */ "AueF");
/* harmony import */ var _how_to_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./how-to.page */ "g2Qt");







let HowToPageModule = class HowToPageModule {
};
HowToPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _how_to_routing_module__WEBPACK_IMPORTED_MODULE_5__["HowToPageRoutingModule"]
        ],
        declarations: [_how_to_page__WEBPACK_IMPORTED_MODULE_6__["HowToPage"]]
    })
], HowToPageModule);



/***/ })

}]);
//# sourceMappingURL=how-to-how-to-module.js.map