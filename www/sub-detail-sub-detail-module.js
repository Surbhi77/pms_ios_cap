(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub-detail-sub-detail-module"],{

/***/ "3eQA":
/*!*************************************************!*\
  !*** ./src/app/sub-detail/sub-detail.module.ts ***!
  \*************************************************/
/*! exports provided: SubDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubDetailPageModule", function() { return SubDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _sub_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sub-detail-routing.module */ "Lfuh");
/* harmony import */ var _sub_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub-detail.page */ "mQUw");







let SubDetailPageModule = class SubDetailPageModule {
};
SubDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sub_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SubDetailPageRoutingModule"]
        ],
        declarations: [_sub_detail_page__WEBPACK_IMPORTED_MODULE_6__["SubDetailPage"]]
    })
], SubDetailPageModule);



/***/ }),

/***/ "7yJ7":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sub-detail/sub-detail.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"detail-list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">Epidemiology</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"ion-margin-top\">\n    <ion-col size=\"12\">\n      <ion-card class=\"ion-no-margin\">\n        <img src=\"assets/img/covid-background.jpg\">\n        <ion-card-header>\n          <ion-card-subtitle>Destination</ion-card-subtitle>\n          <ion-card-title>Madison, WI</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "Lfuh":
/*!*********************************************************!*\
  !*** ./src/app/sub-detail/sub-detail-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SubDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubDetailPageRoutingModule", function() { return SubDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sub_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub-detail.page */ "mQUw");




const routes = [
    {
        path: '',
        component: _sub_detail_page__WEBPACK_IMPORTED_MODULE_3__["SubDetailPage"]
    }
];
let SubDetailPageRoutingModule = class SubDetailPageRoutingModule {
};
SubDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SubDetailPageRoutingModule);



/***/ }),

/***/ "TcZS":
/*!*************************************************!*\
  !*** ./src/app/sub-detail/sub-detail.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "mQUw":
/*!***********************************************!*\
  !*** ./src/app/sub-detail/sub-detail.page.ts ***!
  \***********************************************/
/*! exports provided: SubDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubDetailPage", function() { return SubDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sub_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sub-detail.page.html */ "7yJ7");
/* harmony import */ var _sub_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sub-detail.page.scss */ "TcZS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SubDetailPage = class SubDetailPage {
    constructor() { }
    ngOnInit() {
    }
};
SubDetailPage.ctorParameters = () => [];
SubDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sub-detail',
        template: _raw_loader_sub_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sub_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SubDetailPage);



/***/ })

}]);
//# sourceMappingURL=sub-detail-sub-detail-module.js.map