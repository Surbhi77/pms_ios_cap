(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["how-its-work-how-its-work-module"],{

/***/ "4ubn":
/*!***************************************************!*\
  !*** ./src/app/how-its-work/how-its-work.page.ts ***!
  \***************************************************/
/*! exports provided: HowItsWorkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItsWorkPage", function() { return HowItsWorkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_how_its_work_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./how-its-work.page.html */ "uAya");
/* harmony import */ var _how_its_work_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./how-its-work.page.scss */ "YMw/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");





let HowItsWorkPage = class HowItsWorkPage {
    constructor(storage) {
        this.storage = storage;
    }
    ngOnInit() {
        this.storage.get("userInfo").then(res => {
            this.type = res.type;
            console.log(this.type);
        });
    }
};
HowItsWorkPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
HowItsWorkPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-how-its-work',
        template: _raw_loader_how_its_work_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_how_its_work_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HowItsWorkPage);



/***/ }),

/***/ "MWNB":
/*!*************************************************************!*\
  !*** ./src/app/how-its-work/how-its-work-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HowItsWorkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItsWorkPageRoutingModule", function() { return HowItsWorkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _how_its_work_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./how-its-work.page */ "4ubn");




const routes = [
    {
        path: '',
        component: _how_its_work_page__WEBPACK_IMPORTED_MODULE_3__["HowItsWorkPage"]
    }
];
let HowItsWorkPageRoutingModule = class HowItsWorkPageRoutingModule {
};
HowItsWorkPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HowItsWorkPageRoutingModule);



/***/ }),

/***/ "YMw/":
/*!*****************************************************!*\
  !*** ./src/app/how-its-work/how-its-work.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col_inst ion-col {\n  margin: auto;\n}\n\n.col_inst p {\n  margin-top: 0;\n  font-size: 12px;\n}\n\n.col_inst h5 {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvdy1pdHMtd29yay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBR0oiLCJmaWxlIjoiaG93LWl0cy13b3JrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xfaW5zdCBpb24tY29se1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5jb2xfaW5zdCBwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmNvbF9pbnN0IGg1IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "j0QO":
/*!*****************************************************!*\
  !*** ./src/app/how-its-work/how-its-work.module.ts ***!
  \*****************************************************/
/*! exports provided: HowItsWorkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItsWorkPageModule", function() { return HowItsWorkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _how_its_work_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./how-its-work-routing.module */ "MWNB");
/* harmony import */ var _how_its_work_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./how-its-work.page */ "4ubn");







let HowItsWorkPageModule = class HowItsWorkPageModule {
};
HowItsWorkPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _how_its_work_routing_module__WEBPACK_IMPORTED_MODULE_5__["HowItsWorkPageRoutingModule"]
        ],
        declarations: [_how_its_work_page__WEBPACK_IMPORTED_MODULE_6__["HowItsWorkPage"]]
    })
], HowItsWorkPageModule);



/***/ }),

/***/ "uAya":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/how-its-work/how-its-work.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-left\">How It Works</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"ion-margin-top\">\r\n\r\n    <ion-item *ngIf=\"type=='b'\" >\r\n      <ion-row class=\"col_inst\">\r\n        <ion-col size=\"12\">\r\n          <h3>For Begin</h3>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"videos_jm\" >\r\n            <video width=\"100%\" height=\"240\" controls>\r\n              <source src=\"http://20.198.84.242/pms-app/assets/video/video01.mp4\" type=\"video/mp4\">\r\n              Your browser does not support the video tag.\r\n            </video>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n\r\n    <ion-item *ngIf=\"type=='i'\">\r\n      <ion-row class=\"col_inst\">\r\n        <ion-col size=\"12\">\r\n          <h3>For Initiate</h3>\r\n        </ion-col>\r\n        <ion-col size=\"12\">\r\n          <div class=\"videos_jm\">\r\n            <video width=\"100%\" height=\"240\" controls>\r\n              <source src=\"http://20.198.84.242/pms-app/assets/video/video02.mp4\" type=\"video/mp4\">\r\n              Your browser does not support the video tag.\r\n            </video>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=how-its-work-how-its-work-module.js.map