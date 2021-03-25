(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\BIQOL\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DuXP":
/*!**********************************!*\
  !*** ./src/app/common/helper.ts ***!
  \**********************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");




let Helper = class Helper {
    constructor(toastController, loadingController) {
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.presentLoading = this.presentLoading.bind(this);
        this.presentToast = this.presentToast.bind(this);
        this.dismissLoading = this.dismissLoading.bind(this);
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
            //message: 'Please wait...'      
            });
            yield loading.present();
        });
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: 'middle',
                duration: 2000
            });
            toast.present();
        });
    }
    presentInfo(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                position: 'middle',
                cssClass: 'infoPopup',
                duration: 3000
            });
            toast.present();
        });
    }
    dismissLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadingController.dismiss();
        });
    }
};
Helper.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
Helper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Helper);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");









let AppComponent = class AppComponent {
    constructor(platform, storage, router, splashScreen, statusBar) {
        this.platform = platform;
        this.storage = storage;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.storage.get("isLoggedIn").then(res => {
                if (res) {
                    //this.statusBar.styleDefault();
                    this.statusBar.styleDefault();
                    this.splashScreen.hide();
                    this.router.navigateByUrl('/dashboard');
                    return;
                }
                else {
                    //this.statusBar.styleDefault();
                    // alert("error 2")
                    this.statusBar.styleDefault();
                    this.splashScreen.hide();
                    this.router.navigateByUrl('/login');
                    return;
                }
            }, err => {
                //this.statusBar.styleDefault();
                // alert("error")
                this.splashScreen.hide();
                this.router.navigateByUrl('/login');
                return;
            });
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/helper */ "DuXP");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["IonicStorageModule"].forRoot({
                name: 'pms-app',
                driverOrder: ['localstorage', 'sqlite', 'indexeddb', 'websql']
            }),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]],
        providers: [
            _common_helper__WEBPACK_IMPORTED_MODULE_11__["Helper"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_6__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kd~040fed64"), __webpack_require__.e("default~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kdp-suvey-module~step-form-st~0e4eb13f"), __webpack_require__.e("default~faqs-faqs-module~home-home-module"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => __webpack_require__.e(/*! import() | contact-contact-module */ "contact-contact-module").then(__webpack_require__.bind(null, /*! ./contact/contact.module */ "BjQp")).then(m => m.ContactPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~dashboard-dashboard-module~tnc-tnc-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then(m => m.DashboardPageModule)
    },
    {
        path: 'detail-list',
        loadChildren: () => __webpack_require__.e(/*! import() | detail-list-detail-list-module */ "detail-list-detail-list-module").then(__webpack_require__.bind(null, /*! ./detail-list/detail-list.module */ "22Je")).then(m => m.DetailListPageModule)
    },
    {
        path: 'sub-detail',
        loadChildren: () => __webpack_require__.e(/*! import() | sub-detail-sub-detail-module */ "sub-detail-sub-detail-module").then(__webpack_require__.bind(null, /*! ./sub-detail/sub-detail.module */ "3eQA")).then(m => m.SubDetailPageModule)
    },
    {
        path: 'faqs',
        loadChildren: () => Promise.all(/*! import() | faqs-faqs-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kd~040fed64"), __webpack_require__.e("default~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kdp-suvey-module~step-form-st~0e4eb13f"), __webpack_require__.e("default~faqs-faqs-module~home-home-module"), __webpack_require__.e("faqs-faqs-module")]).then(__webpack_require__.bind(null, /*! ./faqs/faqs.module */ "Toy+")).then(m => m.FaqsPageModule)
    },
    {
        path: 'queries-comments',
        loadChildren: () => __webpack_require__.e(/*! import() | queries-comments-queries-comments-module */ "queries-comments-queries-comments-module").then(__webpack_require__.bind(null, /*! ./queries-comments/queries-comments.module */ "/DEv")).then(m => m.QueriesCommentsPageModule)
    },
    {
        path: 'right-patients',
        loadChildren: () => __webpack_require__.e(/*! import() | right-patients-right-patients-module */ "right-patients-right-patients-module").then(__webpack_require__.bind(null, /*! ./right-patients/right-patients.module */ "Q1Sz")).then(m => m.RightPatientsPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | register-register-module */ "register-register-module").then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then(m => m.RegisterPageModule)
    },
    {
        path: 'add-entry',
        loadChildren: () => Promise.all(/*! import() | add-entry-add-entry-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kd~040fed64"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("add-entry-add-entry-module")]).then(__webpack_require__.bind(null, /*! ./add-entry/add-entry.module */ "DNcQ")).then(m => m.AddEntryPageModule)
    },
    {
        path: 'survey',
        loadChildren: () => __webpack_require__.e(/*! import() | survey-survey-module */ "survey-survey-module").then(__webpack_require__.bind(null, /*! ./survey/survey.module */ "UQSm")).then(m => m.SurveyPageModule)
    },
    {
        path: 'patient-list',
        loadChildren: () => __webpack_require__.e(/*! import() | patient-list-patient-list-module */ "patient-list-patient-list-module").then(__webpack_require__.bind(null, /*! ./patient-list/patient-list.module */ "mPk8")).then(m => m.PatientListPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsPageModule)
    },
    {
        path: 'how-its-work',
        loadChildren: () => __webpack_require__.e(/*! import() | how-its-work-how-its-work-module */ "how-its-work-how-its-work-module").then(__webpack_require__.bind(null, /*! ./how-its-work/how-its-work.module */ "j0QO")).then(m => m.HowItsWorkPageModule)
    },
    {
        path: 'instructions',
        loadChildren: () => __webpack_require__.e(/*! import() | instructions-instructions-module */ "instructions-instructions-module").then(__webpack_require__.bind(null, /*! ./instructions/instructions.module */ "KSKB")).then(m => m.InstructionsPageModule)
    },
    {
        path: 'step-form',
        loadChildren: () => Promise.all(/*! import() | step-form-step-form-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kd~040fed64"), __webpack_require__.e("default~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kdp-suvey-module~step-form-st~0e4eb13f"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~step-form-step-form-module"), __webpack_require__.e("step-form-step-form-module")]).then(__webpack_require__.bind(null, /*! ./step-form/step-form.module */ "7DZ+")).then(m => m.StepFormPageModule)
    },
    {
        path: 'step-form/:id/:completed',
        loadChildren: () => Promise.all(/*! import() | step-form-step-form-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kd~040fed64"), __webpack_require__.e("default~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kdp-suvey-module~step-form-st~0e4eb13f"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~step-form-step-form-module"), __webpack_require__.e("step-form-step-form-module")]).then(__webpack_require__.bind(null, /*! ./step-form/step-form.module */ "7DZ+")).then(m => m.StepFormPageModule)
    },
    {
        path: 'step-form/:id',
        loadChildren: () => Promise.all(/*! import() | step-form-step-form-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kd~040fed64"), __webpack_require__.e("default~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kdp-suvey-module~step-form-st~0e4eb13f"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~step-form-step-form-module"), __webpack_require__.e("step-form-step-form-module")]).then(__webpack_require__.bind(null, /*! ./step-form/step-form.module */ "7DZ+")).then(m => m.StepFormPageModule)
    },
    {
        path: 'kdp-suvey',
        loadChildren: () => Promise.all(/*! import() | kdp-suvey-kdp-suvey-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kd~040fed64"), __webpack_require__.e("default~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kdp-suvey-module~step-form-st~0e4eb13f"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("common"), __webpack_require__.e("kdp-suvey-kdp-suvey-module")]).then(__webpack_require__.bind(null, /*! ./kdp-suvey/kdp-suvey.module */ "r5fc")).then(m => m.KdpSuveyPageModule)
    },
    {
        path: 'begin',
        loadChildren: () => Promise.all(/*! import() | begin-begin-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kd~040fed64"), __webpack_require__.e("default~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kdp-suvey-module~step-form-st~0e4eb13f"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~step-form-step-form-module"), __webpack_require__.e("begin-begin-module")]).then(__webpack_require__.bind(null, /*! ./begin/begin.module */ "L236")).then(m => m.BeginPageModule)
    },
    {
        path: 'begin/:id',
        loadChildren: () => Promise.all(/*! import() | begin-begin-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kd~040fed64"), __webpack_require__.e("default~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kdp-suvey-module~step-form-st~0e4eb13f"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~step-form-step-form-module"), __webpack_require__.e("begin-begin-module")]).then(__webpack_require__.bind(null, /*! ./begin/begin.module */ "L236")).then(m => m.BeginPageModule)
    },
    {
        path: 'begin/:id/:completed',
        loadChildren: () => Promise.all(/*! import() | begin-begin-module */[__webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~dashboard-dashboard-module~faqs-faqs-module~ho~104f6569"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kd~040fed64"), __webpack_require__.e("default~begin-begin-module~faqs-faqs-module~home-home-module~kdp-suvey-kdp-suvey-module~step-form-st~0e4eb13f"), __webpack_require__.e("default~add-entry-add-entry-module~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~kdp-suvey-kdp-suvey-module~step-form-step-form-module"), __webpack_require__.e("default~begin-begin-module~step-form-step-form-module"), __webpack_require__.e("begin-begin-module")]).then(__webpack_require__.bind(null, /*! ./begin/begin.module */ "L236")).then(m => m.BeginPageModule)
    },
    {
        path: 'tnc',
        loadChildren: () => Promise.all(/*! import() | tnc-tnc-module */[__webpack_require__.e("default~dashboard-dashboard-module~tnc-tnc-module"), __webpack_require__.e("tnc-tnc-module")]).then(__webpack_require__.bind(null, /*! ./tnc/tnc.module */ "Cjoe")).then(m => m.TncPageModule)
    },
    {
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() | welcome-welcome-module */ "welcome-welcome-module").then(__webpack_require__.bind(null, /*! ./welcome/welcome.module */ "pi15")).then(m => m.WelcomePageModule)
    },
    {
        path: 'how-to',
        loadChildren: () => Promise.all(/*! import() | how-to-how-to-module */[__webpack_require__.e("common"), __webpack_require__.e("how-to-how-to-module")]).then(__webpack_require__.bind(null, /*! ./how-to/how-to.module */ "KFXf")).then(m => m.HowToPageModule)
    },
    {
        path: 'forgotpassword',
        loadChildren: () => __webpack_require__.e(/*! import() | forgotpassword-forgotpassword-module */ "forgotpassword-forgotpassword-module").then(__webpack_require__.bind(null, /*! ./forgotpassword/forgotpassword.module */ "IoKB")).then(m => m.ForgotpasswordPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map