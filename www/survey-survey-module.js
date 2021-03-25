(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["survey-survey-module"],{

/***/ "0Mao":
/*!***************************************!*\
  !*** ./src/app/survey/survey.page.ts ***!
  \***************************************/
/*! exports provided: SurveyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPage", function() { return SurveyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_survey_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./survey.page.html */ "Ki//");
/* harmony import */ var _survey_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey.page.scss */ "3dlz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../common/api.service */ "uMkL");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../common/helper */ "DuXP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let SurveyPage = class SurveyPage {
    constructor(storage, helper, router, apiService) {
        this.storage = storage;
        this.helper = helper;
        this.router = router;
        this.apiService = apiService;
        this.invoiceAvailable = false;
        this.link = '';
        this.invoiceAcceptShow = false;
        this.acceptChecked = false;
    }
    ionViewWillEnter() {
        this.storage.get("userInfo").then(res => {
            if (res) {
                this.userInfo = res;
                this.getInvoice();
            }
        });
    }
    ngOnInit() {
    }
    changeValue($event) {
        if ($event.target.checked) {
            this.acceptChecked = true;
        }
        else {
            this.acceptChecked = false;
        }
    }
    submit() {
        let formdata = new FormData();
        formdata.append('user_id', this.userInfo.doctor_id);
        formdata.append('status', '1');
        this.apiService.checkInvoice(formdata).subscribe(res => {
            this.helper.presentToast("Invoice updated successfully");
            this.router.navigateByUrl('/dashboard');
        });
    }
    getInvoice() {
        let formData = new FormData();
        formData.append('user_id', this.userInfo.doctor_id);
        this.helper.presentLoading().then(res => {
            this.apiService.getInvoice(formData).subscribe(res => {
                console.log(res);
                this.helper.dismissLoading();
                if (res.status == "1") {
                    this.link = res.data.file;
                    this.invoiceAvailable = (this.link != "") ? true : false;
                    //this.invoiceAvailable = true;
                    if (res.data.invoicestatus == 0 && this.link != "") {
                        this.invoiceAcceptShow = true;
                    }
                    else {
                        this.invoiceAcceptShow = false;
                    }
                }
            });
        });
    }
};
SurveyPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
SurveyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-survey',
        template: _raw_loader_survey_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_survey_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SurveyPage);



/***/ }),

/***/ "3dlz":
/*!*****************************************!*\
  !*** ./src/app/survey/survey.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\n.survey_btn {\n  height: 40px;\n}\n\nion-list {\n  background: transparent !important;\n}\n\nion-footer ion-toolbar {\n  border-radius: 0;\n  --background: #fffcf3;\n}\n\n.img_invoice {\n  width: 50%;\n  margin: auto;\n  display: block;\n  margin-top: 30px;\n}\n\n.data_notfound h1 {\n  text-align: center;\n  color: #000;\n  padding: 20px;\n}\n\n.bnt_clas {\n  background: #0f406b;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 12px;\n  margin-right: 10px;\n  padding: 8px 20px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN1cnZleS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksa0NBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFJSjs7QUFGQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFPSiIsImZpbGUiOiJzdXJ2ZXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc3VydmV5X2J0bntcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5pb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmNmMztcclxufVxyXG4uaW1nX2ludm9pY2Uge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uZGF0YV9ub3Rmb3VuZCBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmJudF9jbGFzIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZjQwNmI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "Ki//":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survey/survey.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"add-entry\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">Invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-card>\n    <div class=\"main_data\">\n    <!-- <img src=\"assets/img/pdf-icon.png\" class=\"img_invoice\" /> -->\n    <ion-card-header>\n      <!-- <ion-card-subtitle>Invoice</ion-card-subtitle> -->\n      <ion-card-title class=\"ion-text-center\">Invoice</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf=\"invoiceAvailable\">\n      <ion-button color=\"primary\" [href]=\"link\" target=\"_blank\" expand=\"full\" shape=\"round\">Download Invoice</ion-button>\n      <br/>\n      <ng-container *ngIf=\"invoiceAcceptShow\">\n        <ion-row class=\"ion-no-padding\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-item lines=\"none\">\n              <ion-label>I accept above invoice </ion-label>\n            <ion-checkbox (ionChange)=\"changeValue($event)\" color=\"primary\"  slot=\"start\"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <button (click)=\"submit()\" [disabled]=\"!acceptChecked\" mat-button class=\"bnt_clas\">Submit</button>\n      </ng-container>\n      <ng-container *ngIf=\"!invoiceAcceptShow\">\n        <ion-row class=\"ion-no-padding\">\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <ion-item lines=\"none\">\n              <p>Your invoice has been submitted</p>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n    </ion-card-content>\n  </div>\n  <div *ngIf=\"!invoiceAvailable\" class=\"data_notfound\">\n    <h1>Invoice Not Found</h1>\n  </div>\n  </ion-card>\n</ion-content>\n\n<!--  -->");

/***/ }),

/***/ "UQSm":
/*!*****************************************!*\
  !*** ./src/app/survey/survey.module.ts ***!
  \*****************************************/
/*! exports provided: SurveyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPageModule", function() { return SurveyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _survey_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./survey-routing.module */ "lXyq");
/* harmony import */ var _survey_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./survey.page */ "0Mao");







let SurveyPageModule = class SurveyPageModule {
};
SurveyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _survey_routing_module__WEBPACK_IMPORTED_MODULE_5__["SurveyPageRoutingModule"]
        ],
        declarations: [_survey_page__WEBPACK_IMPORTED_MODULE_6__["SurveyPage"]]
    })
], SurveyPageModule);



/***/ }),

/***/ "lXyq":
/*!*************************************************!*\
  !*** ./src/app/survey/survey-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SurveyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPageRoutingModule", function() { return SurveyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _survey_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey.page */ "0Mao");




const routes = [
    {
        path: '',
        component: _survey_page__WEBPACK_IMPORTED_MODULE_3__["SurveyPage"]
    }
];
let SurveyPageRoutingModule = class SurveyPageRoutingModule {
};
SurveyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SurveyPageRoutingModule);



/***/ }),

/***/ "uMkL":
/*!***************************************!*\
  !*** ./src/app/common/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");





let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    login(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/login";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    viewInitiate(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/draft_view";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    checkMobile(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/check_mobile";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    completedInitiate(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/initiate_completed_list";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    addEnquiry(params) {
        let url = "http://20.198.84.242/pms-app/pms_app/enquiry";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    checkInvoice(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/check_invoice";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    deleteInitiate(param) {
        let url = "http://20.198.84.242/pms-app/Pms_app/draft_delete";
        return this.httpClient.post(url, param).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    changePassword(param) {
        let url = "http://20.198.84.242/pms-app/Pms_app/change_password";
        return this.httpClient.post(url, param).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    getInvoice(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/userinvoice";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    deleteBegin(param) {
        let url = "http://20.198.84.242/pms-app/Pms_app/begin_delete";
        return this.httpClient.post(url, param).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    completedBegin(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/begin_completed_list";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    getTermsnConditions(id) {
        let url = "http://20.198.84.242/pms-app/Pms_app/get_serviceagreement";
        return this.httpClient.post(url, id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    kdpSubmit(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/kdp_survey";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    checkTerms(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/terms_checking";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    postAgreement(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/agreement";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    addBegin(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/add_begin";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    getBeginDetails(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/begin_view";
        return this.httpClient.post(url, params).pipe();
    }
    getNotifications(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/invoice_cheeck_notification";
        return this.httpClient.post(url, params).pipe();
    }
    addInitiate(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/add_initiate";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    getInitiateDraft(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/draft_list";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    getDraftBegin(params) {
        let url = "http://20.198.84.242/pms-app/Pms_app/draft_begin_list";
        return this.httpClient.post(url, params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandl));
    }
    forgetpassword(data) {
        return this.httpClient.post("http://20.198.84.24/pms-app/Pms_app/forget_password", data);
    }
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ })

}]);
//# sourceMappingURL=survey-survey-module.js.map