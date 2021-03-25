(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["right-patients-right-patients-module"],{

/***/ "Q1Sz":
/*!*********************************************************!*\
  !*** ./src/app/right-patients/right-patients.module.ts ***!
  \*********************************************************/
/*! exports provided: RightPatientsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPatientsPageModule", function() { return RightPatientsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _right_patients_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./right-patients-routing.module */ "gbrv");
/* harmony import */ var _right_patients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./right-patients.page */ "v179");







let RightPatientsPageModule = class RightPatientsPageModule {
};
RightPatientsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _right_patients_routing_module__WEBPACK_IMPORTED_MODULE_5__["RightPatientsPageRoutingModule"]
        ],
        declarations: [_right_patients_page__WEBPACK_IMPORTED_MODULE_6__["RightPatientsPage"]]
    })
], RightPatientsPageModule);



/***/ }),

/***/ "gbrv":
/*!*****************************************************************!*\
  !*** ./src/app/right-patients/right-patients-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RightPatientsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPatientsPageRoutingModule", function() { return RightPatientsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _right_patients_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./right-patients.page */ "v179");




const routes = [
    {
        path: '',
        component: _right_patients_page__WEBPACK_IMPORTED_MODULE_3__["RightPatientsPage"]
    }
];
let RightPatientsPageRoutingModule = class RightPatientsPageRoutingModule {
};
RightPatientsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RightPatientsPageRoutingModule);



/***/ }),

/***/ "ixov":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/right-patients/right-patients.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">Right patients for Itolizumab</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-margin-top\">\n    <ion-col size=\"12\">\n      <img src=\"assets/img/covid-background.jpg\">\n    </ion-col>\n  </ion-row>\n\n  <ion-list class=\"ion-margin-top\">\n  <ion-item class=\"itns_p\">\n    <ion-label>\n      <h2>Finn</h2>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item class=\"itns_p\">\n    <ion-label>\n      <h2>Han</h2>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item class=\"itns_p\">\n    <ion-label>\n      <h2>Rey</h2>\n      <p>You will remove these restraints and leave...Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item class=\"itns_p\">\n    <ion-label>\n      <h2>Luke</h2>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>\n");

/***/ }),

/***/ "l5C/":
/*!*********************************************************!*\
  !*** ./src/app/right-patients/right-patients.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".itns_p p {\n  white-space: break-spaces;\n}\n\nion-list {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJpZ2h0LXBhdGllbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQ0FBQTtBQUVKIiwiZmlsZSI6InJpZ2h0LXBhdGllbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdG5zX3AgcHtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbn1cclxuaW9uLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "v179":
/*!*******************************************************!*\
  !*** ./src/app/right-patients/right-patients.page.ts ***!
  \*******************************************************/
/*! exports provided: RightPatientsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPatientsPage", function() { return RightPatientsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_right_patients_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./right-patients.page.html */ "ixov");
/* harmony import */ var _right_patients_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./right-patients.page.scss */ "l5C/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RightPatientsPage = class RightPatientsPage {
    constructor() { }
    ngOnInit() {
    }
};
RightPatientsPage.ctorParameters = () => [];
RightPatientsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-right-patients',
        template: _raw_loader_right_patients_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_right_patients_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RightPatientsPage);



/***/ })

}]);
//# sourceMappingURL=right-patients-right-patients-module.js.map