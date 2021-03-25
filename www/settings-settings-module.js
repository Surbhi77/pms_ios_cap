(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "7Dlj":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "Uncc");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "7wo0":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "7Dlj");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "Uncc");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "ADm/":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\n.survey_btn {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0FBRUoiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uc3VydmV5X2J0bntcclxuICAgIGhlaWdodDogNDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "O67P":
/*!********************************************************!*\
  !*** ./src/app/settings/confirm-password.validator.ts ***!
  \********************************************************/
/*! exports provided: ConfirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return ConfirmPasswordValidator; });
class ConfirmPasswordValidator {
    static MatchPassword(control) {
        let password = control.get('new_pass').value;
        let confirmPassword = control.get('cnew_pass').value;
        if (password != confirmPassword) {
            control.get('cnew_pass').setErrors({ ConfirmPassword: true });
        }
        else {
            return null;
        }
    }
}


/***/ }),

/***/ "Uncc":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "mzE/");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "ADm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/api.service */ "uMkL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _confirm_password_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-password.validator */ "O67P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/helper */ "DuXP");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "e8h1");










let SettingsPage = class SettingsPage {
    constructor(loginApi, helper, router, storage) {
        this.loginApi = loginApi;
        this.helper = helper;
        this.router = router;
        this.storage = storage;
        this.formerror = false;
        this.hasError = false;
    }
    ngOnInit() {
        this.Form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            old_pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            new_pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            cnew_pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        }, _confirm_password_validator__WEBPACK_IMPORTED_MODULE_6__["ConfirmPasswordValidator"].MatchPassword);
    }
    ionViewWillEnter() {
        this.storage.get("userInfo").then(res => {
            if (res) {
                this.userInfo = res.doctor_id;
            }
        });
    }
    submit() {
        if (this.Form.valid) {
            let formdata = new FormData();
            formdata.append("user_id", this.userInfo);
            formdata.append('old_pass', this.Form.value.old_pass);
            formdata.append('new_pass', this.Form.value.new_pass);
            formdata.append('cnew_pass', this.Form.value.cnew_pass);
            this.loginApi.changePassword(formdata).subscribe(res => {
                console.log(res);
                if (res.status) {
                    this.helper.presentToast("password change successfully");
                    this.router.navigateByUrl('/dashboard');
                }
                else {
                    this.helper.presentToast(res.message);
                }
            });
        }
        else {
            var keys = Object.keys(this.Form.controls);
            for (var i = 0; i <= keys.length - 1; i++) {
                const controlErrors = this.Form.get(keys[i]).errors;
                console.log(controlErrors, i);
                if (this.hasError) {
                    break;
                }
                if (controlErrors != null) {
                    var err = [];
                    err = Object.keys(controlErrors);
                    for (var j = 0; j <= err.length - 1; j++) {
                        this.hasError = true;
                        this.showError(err[j].toString());
                        break;
                    }
                }
            }
        }
    }
    showError(type) {
        if (type == 'required') {
            this.helper.presentToast("Please fill all the fields");
        }
        if (type == 'email') {
            this.helper.presentToast("Please enter a valid email");
        }
        if (type == 'ConfirmPassword') {
            this.helper.presentToast("Passwords do not match");
        }
        setTimeout(() => {
            this.hasError = false;
        }, 1000);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_8__["Helper"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "mzE/":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-left\">Settings</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <form [formGroup]=\"Form\" class=\"main_forms\">\r\n        <ion-row class=\"ion-margin-top\">\r\n            <ion-col size=\"12\">\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Current Password</ion-label>\r\n                    <ion-input type=\"password\" formControlName=\"old_pass\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-margin-top\">\r\n            <ion-col size=\"12\">\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">New Password</ion-label>\r\n                    <ion-input type=\"password\" formControlName=\"new_pass\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-margin-top\">\r\n            <ion-col size=\"12\">\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Confirm New Password</ion-label>\r\n                    <ion-input type=\"password\" formControlName=\"cnew_pass\"></ion-input>\r\n                </ion-item>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"ion-padding-top\">\r\n            <ion-col size=\"12\">\r\n                <ion-button type=\"submit\" class=\"survey_btn\" expand=\"full\" shape=\"round\" fill=\"outline\" (click)='submit()'> CHANGE PASSWORD </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n    </form>\r\n</ion-content>");

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
//# sourceMappingURL=settings-settings-module.js.map