(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-list-patient-list-module"],{

/***/ "QJZF":
/*!***************************************************!*\
  !*** ./src/app/patient-list/patient-list.page.ts ***!
  \***************************************************/
/*! exports provided: PatientListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListPage", function() { return PatientListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_patient_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./patient-list.page.html */ "bOK/");
/* harmony import */ var _patient_list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-list.page.scss */ "nyUU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../common/api.service */ "uMkL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let PatientListPage = class PatientListPage {
    constructor(alertController, storage, activatedRoute, router, apiService) {
        this.alertController = alertController;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.apiService = apiService;
        this.beginLists = [];
    }
    ionViewWillEnter() {
        this.storage.get("userInfo").then(res => {
            if (res) {
                this.userInfo = res;
                if (this.userInfo.type == 'i') {
                    this.initiateList();
                    this.completedInitiateList();
                }
                else {
                    this.beginList();
                    this.beginCompletedList();
                }
            }
        });
    }
    showAlert(item, type, i) {
        this.alertController.create({
            message: 'Do you confirm to delete?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        console.log('Yes clicked');
                        let formdata = new FormData();
                        formdata.append("id", item.id);
                        if (type == 'i') {
                            this.apiService.deleteInitiate(formdata).subscribe(res => {
                                this.beginLists.splice(i, 1);
                            });
                        }
                        else {
                            this.apiService.deleteBegin(formdata).subscribe(res => {
                                this.beginLists.splice(i, 1);
                            });
                        }
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    ngOnInit() {
    }
    completedPatientDetails(item) {
        if (this.userInfo.type == 'i') {
            this.router.navigateByUrl('/step-form/' + item.id + '/completed');
        }
        else {
            this.router.navigateByUrl('/begin/' + item.id + '/completed');
        }
    }
    deleteItem(item, i) {
        let formdata = new FormData();
        formdata.append("id", item.id);
        this.showAlert(item, this.userInfo.type, i);
    }
    completedInitiateList() {
        let formdata = new FormData();
        formdata.append('user_id', this.userInfo.doctor_id);
        this.apiService.completedInitiate(formdata).subscribe(res => {
            console.log(res);
            this.completedList = res['data'];
        });
    }
    beginCompletedList() {
        let formdata = new FormData();
        formdata.append('user_id', this.userInfo.doctor_id);
        this.apiService.completedBegin(formdata).subscribe(res => {
            this.completedList = res['data'];
        });
    }
    initiateList() {
        let formdata = new FormData();
        formdata.append('user_id', this.userInfo.doctor_id);
        this.apiService.getInitiateDraft(formdata).subscribe(res => {
            console.log(res);
            this.beginLists = res['data'];
        });
    }
    patientDetails(item) {
        if (this.userInfo.type == 'i') {
            this.router.navigateByUrl('/step-form/' + item.id);
        }
        else {
            this.router.navigateByUrl('/begin/' + item.id);
        }
    }
    beginList() {
        console.log("calleddd");
        let formdata = new FormData();
        formdata.append('user_id', this.userInfo.doctor_id);
        this.apiService.getDraftBegin(formdata).subscribe(res => {
            console.log(res);
            this.beginLists = res['data'];
        });
    }
};
PatientListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
PatientListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-patient-list',
        template: _raw_loader_patient_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_patient_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PatientListPage);



/***/ }),

/***/ "V2AS":
/*!*************************************************************!*\
  !*** ./src/app/patient-list/patient-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PatientListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListPageRoutingModule", function() { return PatientListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _patient_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-list.page */ "QJZF");




const routes = [
    {
        path: '',
        component: _patient_list_page__WEBPACK_IMPORTED_MODULE_3__["PatientListPage"]
    }
];
let PatientListPageRoutingModule = class PatientListPageRoutingModule {
};
PatientListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatientListPageRoutingModule);



/***/ }),

/***/ "bOK/":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient-list/patient-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"add-entry\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-left\">Patient List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"pation_mm\">\r\n  <ion-list>\r\n    <ion-list-header>\r\n     <strong>Draft ECRF</strong> \r\n    </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let item of beginLists;let i = index\" class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Mobile : {{item.mobile}}</h2>\r\n        <h3>Age : {{item.age}}</h3>\r\n      </ion-label>\r\n      <ion-button (click)=\"patientDetails(item)\" expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n      <ion-button (click)=\"deleteItem(item,i)\" expand=\"block\" color=\"danger\" shape=\"round\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n      \r\n    </ion-item>\r\n\r\n    <!-- <ion-item class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Patient Name</h2>\r\n        <h3>Age : 25</h3>\r\n      </ion-label>\r\n      <ion-button expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Patient Name</h2>\r\n        <h3>Age : 25</h3>\r\n      </ion-label>\r\n      <ion-button expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Patient Name</h2>\r\n        <h3>Age : 25</h3>\r\n      </ion-label>\r\n      <ion-button expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Patient Name</h2>\r\n        <h3>Age : 25</h3>\r\n      </ion-label>\r\n      <ion-button expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Patient Name</h2>\r\n        <h3>Age : 25</h3>\r\n      </ion-label>\r\n      <ion-button expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n    </ion-item> -->\r\n\r\n  </ion-list>\r\n\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n     <strong>Completed ECRF</strong> \r\n    </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let item of completedList\" class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Mobile : {{item.mobile}}</h2>\r\n        <h3>Age : {{item.age}}</h3>\r\n      </ion-label>\r\n      <ion-button (click)=\"completedPatientDetails(item)\" expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n      <ion-button *ngIf=\"item.helpcenter_status == 'Approve'\" expand=\"block\" color=\"success\" shape=\"round\"><ion-icon name=\"checkmark\"></ion-icon></ion-button>\r\n      \r\n      <ion-button *ngIf=\"item.helpcenter_status == 'Rejected'\" expand=\"block\" color=\"danger\" shape=\"round\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n      \r\n    </ion-item>\r\n\r\n    <!-- <ion-item class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Patient Name</h2>\r\n        <h3>Age : 25</h3>\r\n      </ion-label>\r\n      <ion-button expand=\"block\" color=\"success\" shape=\"round\"><ion-icon name=\"checkmark\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Patient Name</h2>\r\n        <h3>Age : 25</h3>\r\n      </ion-label>\r\n      <ion-button expand=\"block\" color=\"success\" shape=\"round\"><ion-icon name=\"checkmark\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Patient Name</h2>\r\n        <h3>Age : 25</h3>\r\n      </ion-label>\r\n      <ion-button expand=\"block\" color=\"tertiary\" shape=\"round\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Patient Name</h2>\r\n        <h3>Age : 25</h3>\r\n      </ion-label>\r\n      <ion-button expand=\"block\" color=\"tertiary\" shape=\"round\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"bor_b\" lines=\"none\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/img/patient.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Patient Name</h2>\r\n        <h3>Age : 25</h3>\r\n      </ion-label>\r\n      <ion-button expand=\"block\" color=\"tertiary\" shape=\"round\"><ion-icon name=\"close\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"primary\" shape=\"round\"><ion-icon name=\"eye-outline\"></ion-icon></ion-button>\r\n      <ion-button expand=\"block\" color=\"danger\" shape=\"round\"><ion-icon name=\"trash\"></ion-icon></ion-button>\r\n    </ion-item> -->\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "mPk8":
/*!*****************************************************!*\
  !*** ./src/app/patient-list/patient-list.module.ts ***!
  \*****************************************************/
/*! exports provided: PatientListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientListPageModule", function() { return PatientListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _patient_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-list-routing.module */ "V2AS");
/* harmony import */ var _patient_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-list.page */ "QJZF");







let PatientListPageModule = class PatientListPageModule {
};
PatientListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _patient_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientListPageRoutingModule"]
        ],
        declarations: [_patient_list_page__WEBPACK_IMPORTED_MODULE_6__["PatientListPage"]]
    })
], PatientListPageModule);



/***/ }),

/***/ "nyUU":
/*!*****************************************************!*\
  !*** ./src/app/patient-list/patient-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  margin: auto;\n  text-align: center;\n}\n\n.botton_bs ion-col:first-child {\n  border-left: none;\n}\n\n.botton_bs ion-col {\n  border-left: 1px solid;\n}\n\n.botton_bs {\n  border: 1px solid;\n  border-collapse: collapse;\n}\n\n.bords {\n  border: 1px solid;\n  border-top: 0;\n}\n\n.bords ion-col {\n  border-left: 1px solid;\n}\n\n.bords ion-col:first-child {\n  border-left: none;\n}\n\n.pation_mm ion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\n.pation_mm ion-item {\n  --background: transparent !important;\n  background: transparent !important;\n  border-bottom: 1px solid #cccccc70;\n}\n\n.pation_mm ion-list-header {\n  --background: transparent !important;\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhdGllbnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxzQkFBQTtBQUdKOztBQURBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxzQkFBQTtBQU1KOztBQUpBO0VBQ0ksaUJBQUE7QUFPSjs7QUFMQTtFQUNJLG9DQUFBO0VBQ0Esa0NBQUE7QUFRSjs7QUFOQTtFQUNJLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtBQVNKOztBQVBBO0VBQ0ksb0NBQUE7RUFDQSxrQ0FBQTtBQVVKIiwiZmlsZSI6InBhdGllbnQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29se1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ib3R0b25fYnMgaW9uLWNvbDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG4uYm90dG9uX2JzIGlvbi1jb2wge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZDtcclxufVxyXG4uYm90dG9uX2JzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG4uYm9yZHMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG59XHJcbi5ib3JkcyBpb24tY29sIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XHJcbn1cclxuLmJvcmRzIGlvbi1jb2w6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbn1cclxuLnBhdGlvbl9tbSBpb24tbGlzdCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5wYXRpb25fbW0gaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M3MDtcclxufVxyXG4ucGF0aW9uX21tIGlvbi1saXN0LWhlYWRlcntcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

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
//# sourceMappingURL=patient-list-patient-list-module.js.map