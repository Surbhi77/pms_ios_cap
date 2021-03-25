(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen padding class=\"paddming\">\n  <div class=\"title_login\">\n    <div class=\"logo_main\">\n      <img src=\"assets/img/logo_02.png\">\n    </div>\n  </div>\n  \n  <form class=\"main_forms\">\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input type=\"text\" autocomplete=\"off\" clear-input></ion-input>\n    </ion-item>\n    \n    <ion-item lines=\"full\" class=\"ion-padding-top\">\n      <ion-label position=\"floating\">Email address</ion-label>\n      <ion-input type=\"text\" autocomplete=\"off\" clear-input></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\" class=\"ion-padding-top\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" required autocomplete=\"off\" clear-input></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\" class=\"ion-padding-top\">\n      <ion-label position=\"floating\">Confirm Password</ion-label>\n      <ion-input type=\"password\" required autocomplete=\"off\" clear-input></ion-input>\n    </ion-item>\n\n    <ion-row class=\"ion-padding-top\">\n      <ion-col size=\"8\"></ion-col>\n      <ion-col size=\"4\">\n        <ion-button type=\"submit\" class=\"custom_btn\"  shape=\"round\" fill=\"outline\" routerLink=\"/dashboard\"> Register </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-margin-top_02\">\n      <ion-col size=\"12\" class=\"text_ce\">\n        <ion-text>Already have an account? <a href=\"\" routerLink=\"/login\">Login</a></ion-text>\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n  <!-- <div class=\"imge_boom\">\n    <img src=\"assets/images/login_bottom.png\">\n  </div> -->\n</ion-content>\n");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RegisterPage = class RegisterPage {
    constructor() { }
    ngOnInit() {
    }
};
RegisterPage.ctorParameters = () => [];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo_main {\n  padding-top: 5%;\n}\n\n.main_forms {\n  padding-top: 15%;\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-col {\n  margin: auto;\n}\n\n.text_ce {\n  text-align: center;\n}\n\n.ion-margin-top_02 {\n  margin-top: 13%;\n}\n\n.logo_main img {\n  width: 75%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7QUFNSjs7QUFKQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQU9KIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvX21haW4ge1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG59XHJcbi5tYWluX2Zvcm1ze1xyXG4gICAgcGFkZGluZy10b3A6IDE1JTtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlvbi1jb2x7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnRleHRfY2V7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlvbi1tYXJnaW4tdG9wXzAye1xyXG4gICAgbWFyZ2luLXRvcDogMTMlO1xyXG59XHJcbi5sb2dvX21haW4gaW1ne1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map