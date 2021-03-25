(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["queries-comments-queries-comments-module"],{

/***/ "/DEv":
/*!*************************************************************!*\
  !*** ./src/app/queries-comments/queries-comments.module.ts ***!
  \*************************************************************/
/*! exports provided: QueriesCommentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueriesCommentsPageModule", function() { return QueriesCommentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _queries_comments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queries-comments-routing.module */ "b0Da");
/* harmony import */ var _queries_comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queries-comments.page */ "ZO+V");







let QueriesCommentsPageModule = class QueriesCommentsPageModule {
};
QueriesCommentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _queries_comments_routing_module__WEBPACK_IMPORTED_MODULE_5__["QueriesCommentsPageRoutingModule"]
        ],
        declarations: [_queries_comments_page__WEBPACK_IMPORTED_MODULE_6__["QueriesCommentsPage"]]
    })
], QueriesCommentsPageModule);



/***/ }),

/***/ "25JJ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/queries-comments/queries-comments.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">Queries Comments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"ion-margin-top\">\n    <ion-list-header>\n      Recent Comments\n    </ion-list-header>\n\n    <ion-item class=\"itns_p\">\n      <ion-label>\n        <h2>Finn</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"itns_p\">\n      <ion-label>\n        <h2>Han</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"itns_p\">\n      <ion-label>\n        <h2>Rey</h2>\n        <p>You will remove these restraints and leave...</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item class=\"itns_p\">\n      <ion-label>\n        <h2>Luke</h2>\n        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "ZO+V":
/*!***********************************************************!*\
  !*** ./src/app/queries-comments/queries-comments.page.ts ***!
  \***********************************************************/
/*! exports provided: QueriesCommentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueriesCommentsPage", function() { return QueriesCommentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_queries_comments_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./queries-comments.page.html */ "25JJ");
/* harmony import */ var _queries_comments_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queries-comments.page.scss */ "uz7L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let QueriesCommentsPage = class QueriesCommentsPage {
    constructor() { }
    ngOnInit() {
    }
};
QueriesCommentsPage.ctorParameters = () => [];
QueriesCommentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-queries-comments',
        template: _raw_loader_queries_comments_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_queries_comments_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], QueriesCommentsPage);



/***/ }),

/***/ "b0Da":
/*!*********************************************************************!*\
  !*** ./src/app/queries-comments/queries-comments-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: QueriesCommentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueriesCommentsPageRoutingModule", function() { return QueriesCommentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _queries_comments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queries-comments.page */ "ZO+V");




const routes = [
    {
        path: '',
        component: _queries_comments_page__WEBPACK_IMPORTED_MODULE_3__["QueriesCommentsPage"]
    }
];
let QueriesCommentsPageRoutingModule = class QueriesCommentsPageRoutingModule {
};
QueriesCommentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QueriesCommentsPageRoutingModule);



/***/ }),

/***/ "uz7L":
/*!*************************************************************!*\
  !*** ./src/app/queries-comments/queries-comments.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".itns_p p {\n  white-space: break-spaces;\n}\n\nion-list {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHF1ZXJpZXMtY29tbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGtDQUFBO0FBRUoiLCJmaWxlIjoicXVlcmllcy1jb21tZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRuc19wIHB7XHJcbiAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG59XHJcbmlvbi1saXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=queries-comments-queries-comments-module.js.map