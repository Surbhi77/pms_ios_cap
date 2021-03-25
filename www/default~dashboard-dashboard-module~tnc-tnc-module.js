(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~tnc-tnc-module"],{

/***/ "BPev":
/*!*********************************!*\
  !*** ./src/app/tnc/tnc.page.ts ***!
  \*********************************/
/*! exports provided: TncPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TncPage", function() { return TncPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tnc_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tnc.page.html */ "qz/G");
/* harmony import */ var _tnc_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tnc.page.scss */ "zkC6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../common/helper */ "DuXP");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../common/api.service */ "uMkL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let TncPage = class TncPage {
    constructor(router, loginApi, modalController, helper, storage) {
        this.router = router;
        this.loginApi = loginApi;
        this.modalController = modalController;
        this.helper = helper;
        this.storage = storage;
        this.today = Date.now();
        this.showGst = false;
        this.gst_no = '';
        this.messeage = false;
    }
    ngOnInit() {
        this.storage.get("userInfo").then(res => {
            if (res) {
                this.userInfo = res;
            }
        });
        let formdata = new FormData();
        formdata.append("doctor_id", this.userInfo.doctor_id);
        this.loginApi.getTermsnConditions(formdata).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tncMessage = res.data;
            if (this.tncMessage == null) {
                this.messeage = true;
            }
            else {
                this.messeage = false;
            }
            console.log(this.userInfo.doctor_id);
        }));
    }
    ionViewWillEnter() {
        this.storage.get("userInfo").then(res => {
            if (res) {
                this.userInfo = res;
                console.log(this.userInfo.doctor_id);
            }
        });
        let formdata = new FormData();
        formdata.append("doctor_id", this.userInfo.doctor_id);
        this.loginApi.getTermsnConditions(formdata).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tncMessage = res.data;
            console.log(this.userInfo.doctor_id);
            if (this.tncMessage == null) {
                this.messeage = true;
            }
            else {
                this.messeage = false;
            }
        }));
    }
    showTncInput($event) {
        console.log($event);
        if ($event.target.checked) {
            this.showGst = true;
        }
        else {
            this.showGst = false;
        }
    }
    cancel() {
        //  navigator['app'].exitApp();
        this.storage.clear();
        this.modalController.dismiss({ 'dismissed': true });
        this.router.navigateByUrl('/login');
    }
    agree() {
        console.log(this.showGst, this.gst_no);
        if (this.showGst && this.gst_no != '') {
            let formdata = new FormData();
            formdata.append("user_id", this.userInfo.doctor_id);
            formdata.append("gst", (this.showGst) ? "yes" : "no");
            this.loginApi.postAgreement(formdata).subscribe(res => {
                this.storage.set("tnc_filled", true);
                this.modalController.dismiss({ 'dismissed': true });
            }, error => {
            });
        }
        else {
            if (this.showGst && this.gst_no == '') {
                this.helper.presentToast("Supply GST no");
            }
        }
        if (!this.showGst) {
            let obj = {
                "user_id": this.userInfo.userId,
                "gst": (this.showGst) ? "yes" : "no"
            };
            let formdata = new FormData();
            formdata.append("user_id", this.userInfo.doctor_id);
            formdata.append("gst", (this.showGst) ? "yes" : "no");
            console.log(obj);
            this.loginApi.postAgreement(formdata).subscribe(res => {
                this.storage.set("tnc_filled", true);
                this.modalController.dismiss({ 'dismissed': true });
            }, error => {
            });
        }
    }
};
TncPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
TncPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tnc',
        template: _raw_loader_tnc_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tnc_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TncPage);



/***/ }),

/***/ "qz/G":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tnc/tnc.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Service Agreement</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n \r\n  <p [innerHtml]=\"tncMessage\"></p>\r\n  <h6 class=\"mt-3\" *ngIf=\"messeage\">Awaiting for Agreement</h6>\r\n<p *ngIf=\"tncMessage\">\r\n<br/><br/>Agreement Date & Time:<br/>{{this.today | date}}\r\n</p>\r\n<p *ngIf=\"tncMessage\" class=\"mt-2\">\r\n  <ion-label>GST</ion-label>\r\n  <ion-checkbox ></ion-checkbox>\r\n</p>\r\n<!-- <div *ngIf=\"showGst\">\r\n  <ion-label>GST Number</ion-label>\r\n  <ion-input type=\"text\" [(ngModel)]=\"gst_no\" name=\"gst_no\" placeholder=\"GST No\"></ion-input>\r\n</div> -->\r\n<div>\r\n  <ion-button *ngIf=\"tncMessage\" (click)=\"agree()\">Agree</ion-button>\r\n  <ion-button (click)=\"cancel()\">Cancel</ion-button>\r\n</div>\r\n</ion-content>\r\n");

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



/***/ }),

/***/ "zkC6":
/*!***********************************!*\
  !*** ./src/app/tnc/tnc.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bmMucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~tnc-tnc-module.js.map