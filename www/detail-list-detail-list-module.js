(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-list-detail-list-module"],{

/***/ "22Je":
/*!***************************************************!*\
  !*** ./src/app/detail-list/detail-list.module.ts ***!
  \***************************************************/
/*! exports provided: DetailListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailListPageModule", function() { return DetailListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-list-routing.module */ "Id+r");
/* harmony import */ var _detail_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-list.page */ "vx8T");







let DetailListPageModule = class DetailListPageModule {
};
DetailListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailListPageRoutingModule"]
        ],
        declarations: [_detail_list_page__WEBPACK_IMPORTED_MODULE_6__["DetailListPage"]]
    })
], DetailListPageModule);



/***/ }),

/***/ "5xhL":
/*!***************************************************!*\
  !*** ./src/app/detail-list/detail-list.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lines {\n  border-bottom: 1px solid #ddd;\n  --background: transparent;\n}\n\nion-list {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtDQUFBO0FBRUoiLCJmaWxlIjoiZGV0YWlsLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmVzIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "Id+r":
/*!***********************************************************!*\
  !*** ./src/app/detail-list/detail-list-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailListPageRoutingModule", function() { return DetailListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-list.page */ "vx8T");




const routes = [
    {
        path: '',
        component: _detail_list_page__WEBPACK_IMPORTED_MODULE_3__["DetailListPage"]
    }
];
let DetailListPageRoutingModule = class DetailListPageRoutingModule {
};
DetailListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailListPageRoutingModule);



/***/ }),

/***/ "Xb9T":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-list/detail-list.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">Covid-19</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list class=\"ion-margin-top\">\n\n    <ion-item class=\"lines\" lines=\"none\" routerLink=\"/sub-detail\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/Coronavirus.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Epidemiology</h2>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"lines\" lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/Coronavirus.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Virology and Pathogenesis</h2>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"lines\" lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/Coronavirus.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Source and mode of transmission</h2>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"lines\" lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/Coronavirus.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Clinical Progression</h2>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"lines\" lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/Coronavirus.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Diagnosis</h2>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"lines\" lines=\"none\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/Coronavirus.jpg\">\n      </ion-avatar>\n      <ion-label>\n        <h2>Treatment and Protection</h2>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "vx8T":
/*!*************************************************!*\
  !*** ./src/app/detail-list/detail-list.page.ts ***!
  \*************************************************/
/*! exports provided: DetailListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailListPage", function() { return DetailListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-list.page.html */ "Xb9T");
/* harmony import */ var _detail_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-list.page.scss */ "5xhL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let DetailListPage = class DetailListPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailListPage.ctorParameters = () => [];
DetailListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-list',
        template: _raw_loader_detail_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailListPage);



/***/ })

}]);
//# sourceMappingURL=detail-list-detail-list-module.js.map