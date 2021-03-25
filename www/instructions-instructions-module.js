(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["instructions-instructions-module"],{

/***/ "C+xH":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/instructions/instructions.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-left\">Instructions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"firstFormGroup\">\n    <ion-textarea formControlName=\"message\" placeHolder=\"Enter query\"></ion-textarea>\n    <ion-button [disabled]=\"!firstFormGroup.valid\" (click)=\"submitQuery()\">Submit Query</ion-button>\n  </form>\n  <!-- <ion-row class=\"ion-margin-top\">\n    <ion-col size=\"12\">\n     \n      <video width=\"100%\" height=\"240\" controls>\n        <source src=\"assets/icon/video.mp4\" type=\"video/mp4\">\n      </video>\n    </ion-col>\n  </ion-row>\n\n  <ion-list class=\"ion-margin-top\">\n  <ion-item class=\"itns_p\">\n    <ion-label>\n      <h2>Finn</h2>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item class=\"itns_p\">\n    <ion-label>\n      <h2>Han</h2>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item class=\"itns_p\">\n    <ion-label>\n      <h2>Rey</h2>\n      <p>You will remove these restraints and leave...Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n    </ion-label>\n  </ion-item>\n\n  <ion-item class=\"itns_p\">\n    <ion-label>\n      <h2>Luke</h2>\n      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n    </ion-label>\n  </ion-item>\n</ion-list> -->\n</ion-content>\n\n");

/***/ }),

/***/ "E127":
/*!*****************************************************!*\
  !*** ./src/app/instructions/instructions.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnN0cnVjdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "KSKB":
/*!*****************************************************!*\
  !*** ./src/app/instructions/instructions.module.ts ***!
  \*****************************************************/
/*! exports provided: InstructionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsPageModule", function() { return InstructionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _instructions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instructions-routing.module */ "hRqY");
/* harmony import */ var _instructions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./instructions.page */ "k2dp");







let InstructionsPageModule = class InstructionsPageModule {
};
InstructionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _instructions_routing_module__WEBPACK_IMPORTED_MODULE_5__["InstructionsPageRoutingModule"]
        ],
        declarations: [_instructions_page__WEBPACK_IMPORTED_MODULE_6__["InstructionsPage"]]
    })
], InstructionsPageModule);



/***/ }),

/***/ "hRqY":
/*!*************************************************************!*\
  !*** ./src/app/instructions/instructions-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: InstructionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsPageRoutingModule", function() { return InstructionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _instructions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instructions.page */ "k2dp");




const routes = [
    {
        path: '',
        component: _instructions_page__WEBPACK_IMPORTED_MODULE_3__["InstructionsPage"]
    }
];
let InstructionsPageRoutingModule = class InstructionsPageRoutingModule {
};
InstructionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InstructionsPageRoutingModule);



/***/ }),

/***/ "k2dp":
/*!***************************************************!*\
  !*** ./src/app/instructions/instructions.page.ts ***!
  \***************************************************/
/*! exports provided: InstructionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructionsPage", function() { return InstructionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_instructions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./instructions.page.html */ "C+xH");
/* harmony import */ var _instructions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instructions.page.scss */ "E127");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../common/api.service */ "uMkL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../common/helper */ "DuXP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









let InstructionsPage = class InstructionsPage {
    constructor(_formBuilder, router, storage, apiService, helper) {
        this._formBuilder = _formBuilder;
        this.router = router;
        this.storage = storage;
        this.apiService = apiService;
        this.helper = helper;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])]
        });
    }
    ionViewWillEnter() {
        this.storage.get("userInfo").then(res => {
            if (res) {
                this.userDetails = res;
            }
        });
    }
    submitQuery() {
        if (this.firstFormGroup.valid) {
            //alert("here")
            let formdata = new FormData();
            formdata.append('message', this.firstFormGroup.value.message);
            formdata.append('user_id', this.userDetails.doctor_id);
            this.apiService.addEnquiry(formdata).subscribe(res => {
                this.firstFormGroup.reset();
                this.helper.presentToast("Enquiry sent successfully");
                this.router.navigateByUrl('/dashboard');
            });
        }
    }
};
InstructionsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"] }
];
InstructionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-instructions',
        template: _raw_loader_instructions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_instructions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InstructionsPage);



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
//# sourceMappingURL=instructions-instructions-module.js.map