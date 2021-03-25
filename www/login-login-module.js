(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../common/helper */ "DuXP");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../common/api.service */ "uMkL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let LoginPage = class LoginPage {
    constructor(loginApi, menuCtrl, helper, router, storage) {
        this.loginApi = loginApi;
        this.menuCtrl = menuCtrl;
        this.helper = helper;
        this.router = router;
        this.storage = storage;
        this.hasError = false;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    ionViewWillEnter() {
        this.menuCtrl.get().then((menu) => {
            menu.swipeGesture = false;
        });
        this.loginForm.reset();
    }
    login() {
        if (this.loginForm.valid) {
            let formdata = new FormData();
            formdata.append("email", this.loginForm.value.email);
            formdata.append("password", this.loginForm.value.password);
            this.helper.presentLoading().then(() => {
                this.loginApi.login(formdata).subscribe(res => {
                    console.log(res);
                    this.helper.dismissLoading();
                    if (res && res.data) {
                        this.storage.set("userInfo", res.data);
                        this.storage.set("isLoggedIn", true);
                        let form = new FormData();
                        form.append('user_id', res.data.doctor_id);
                        this.loginApi.checkTerms(form).subscribe(res => {
                            if (res.data.aggrement == 'yes') {
                                this.storage.set("tnc_filled", true);
                            }
                            if (res.data.kdp_survey == 'yes') {
                                this.storage.set('kdp_filled', true);
                            }
                            this.router.navigateByUrl("/dashboard");
                        });
                    }
                    else {
                        this.helper.presentToast(res.message);
                    }
                }, error => {
                    console.log(error);
                    this.helper.dismissLoading();
                    this.helper.presentToast("Account Number and password do not match");
                });
            });
        }
        else {
            var keys = Object.keys(this.loginForm.controls);
            for (var i = 0; i <= keys.length - 1; i++) {
                const controlErrors = this.loginForm.get(keys[i]).errors;
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
            // alert("req")
            this.helper.presentToast('Please fill all the fields');
        }
        if (type == 'email') {
            //alert("email")
            this.helper.presentToast('Please type a valid email');
        }
        if (type == 'pattern') {
            //alert("email")
            this.helper.presentToast('Please enter valid number');
        }
        setTimeout(() => {
            this.hasError = false;
        }, 1000);
    }
};
LoginPage.ctorParameters = () => [
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["MenuController"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen padding class=\"paddming\">\r\n    <div class=\"title_login\">\r\n        <div class=\"logo_main\">\r\n            <img src=\"assets/img/BIQoL_Logo_72dpi.png\">\r\n        </div>\r\n    </div>\r\n\r\n    <form [formGroup]=\"loginForm\" class=\"main_forms\">\r\n\r\n        <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">Account Number</ion-label>\r\n            <ion-input formControlName=\"email\" type=\"text\" autocomplete=\"off\" clear-input></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"full\" class=\"ion-padding-top\">\r\n            <ion-label position=\"floating\">Password</ion-label>\r\n            <ion-input formControlName=\"password\" type=\"password\" required autocomplete=\"off\" clear-input></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-row class=\"ion-padding-top\">\r\n            <ion-col size=\"8\">\r\n                <ion-text><a [routerLink]=\"['/forgotpassword']\">Forgot password?</a></ion-text>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n                <ion-button type=\"button\" class=\"custom_btn\" shape=\"round\" fill=\"outline\" (click)=\"login()\"> Login </ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n\r\n        <!-- <ion-row class=\"ion-margin-top_02\">\r\n      <ion-col size=\"12\" class=\"text_ce\">\r\n        <ion-text>Don't have an account? <a href=\"\" routerLink=\"/register\">Create</a></ion-text>\r\n      </ion-col>\r\n    </ion-row> -->\r\n\r\n    </form>\r\n\r\n    <!-- <div class=\"imge_boom\">\r\n    <img src=\"assets/images/login_bottom.png\">\r\n  </div> -->\r\n</ion-content>");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo_main {\n  padding-top: 25%;\n}\n\n.main_forms {\n  padding-top: 15%;\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-col {\n  margin: auto;\n}\n\n.text_ce {\n  text-align: center;\n}\n\n.ion-margin-top_02 {\n  margin-top: 13%;\n}\n\n.logo_main img {\n  width: 75%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFPSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb19tYWluIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNSU7XHJcbn1cclxuLm1haW5fZm9ybXN7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUlO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWNvbHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4udGV4dF9jZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW9uLW1hcmdpbi10b3BfMDJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMyU7XHJcbn1cclxuLmxvZ29fbWFpbiBpbWd7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */");

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
//# sourceMappingURL=login-login-module.js.map