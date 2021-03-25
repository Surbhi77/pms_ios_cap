(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "BjQp":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "Yuog");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "Ds8B");







let ContactPageModule = class ContactPageModule {
};
ContactPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"]
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })
], ContactPageModule);



/***/ }),

/***/ "Ds8B":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contact.page.html */ "qbrv");
/* harmony import */ var _contact_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.page.scss */ "xWG2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ContactPage = class ContactPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactPage.ctorParameters = () => [];
ContactPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactPage);



/***/ }),

/***/ "Yuog":
/*!***************************************************!*\
  !*** ./src/app/contact/contact-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.page */ "Ds8B");




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ "qbrv":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>contact</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "xWG2":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map