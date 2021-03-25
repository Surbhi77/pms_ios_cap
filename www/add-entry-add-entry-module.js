(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-entry-add-entry-module"],{

/***/ "0Ol8":
/*!*******************************************************!*\
  !*** ./src/app/add-entry/add-entry-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AddEntryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageRoutingModule", function() { return AddEntryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-entry.page */ "NPEe");




const routes = [
    {
        path: '',
        component: _add_entry_page__WEBPACK_IMPORTED_MODULE_3__["AddEntryPage"]
    }
];
let AddEntryPageRoutingModule = class AddEntryPageRoutingModule {
};
AddEntryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddEntryPageRoutingModule);



/***/ }),

/***/ "DNcQ":
/*!***********************************************!*\
  !*** ./src/app/add-entry/add-entry.module.ts ***!
  \***********************************************/
/*! exports provided: AddEntryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPageModule", function() { return AddEntryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-entry-routing.module */ "0Ol8");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _add_entry_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-entry.page */ "NPEe");









let AddEntryPageModule = class AddEntryPageModule {
};
AddEntryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_entry_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddEntryPageRoutingModule"]
        ],
        declarations: [_add_entry_page__WEBPACK_IMPORTED_MODULE_8__["AddEntryPage"]]
    })
], AddEntryPageModule);



/***/ }),

/***/ "NPEe":
/*!*********************************************!*\
  !*** ./src/app/add-entry/add-entry.page.ts ***!
  \*********************************************/
/*! exports provided: AddEntryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryPage", function() { return AddEntryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-entry.page.html */ "f09M");
/* harmony import */ var _add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-entry.page.scss */ "d9Ro");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../common/helper */ "DuXP");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../common/api.service */ "uMkL");









let AddEntryPage = class AddEntryPage {
    constructor(_formBuilder, apiService, helper, router, storage) {
        this._formBuilder = _formBuilder;
        this.apiService = apiService;
        this.helper = helper;
        this.router = router;
        this.storage = storage;
        this.isLinear = false;
        this.checked = false;
    }
    ngOnInit() {
        this.storage.get("userInfo").then(res => {
            if (res) {
                this.userDetails = res;
            }
        });
        this.firstFormGroup = this._formBuilder.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")])]
        });
        // this.secondFormGroup = this._formBuilder.group({
        //   secondCtrl: ['', Validators.required]
        // });
    }
    tnc($event) {
        if ($event.target.checked) {
            this.checked = true;
        }
        else {
            this.checked = false;
        }
    }
    checkMobile() {
        let formdata = new FormData();
        formdata.append('mobile', this.firstFormGroup.value.mobile);
        formdata.append('user_type', this.userDetails.type);
        this.apiService.checkMobile(formdata).subscribe(res => {
            console.log(res);
            if (res.message == 'Already exists') {
                this.helper.presentToast("Mobile Number already exists");
            }
            else {
                this.storage.set("mobile_no", this.firstFormGroup.value.mobile);
                if (this.userDetails.type != "i") {
                    this.router.navigateByUrl("/begin");
                }
                else {
                    this.router.navigateByUrl('/step-form');
                }
            }
        });
    }
    submit() {
        if (this.firstFormGroup.valid && this.checked) {
            this.checkMobile();
        }
        else {
            this.helper.presentToast("All the fields are required");
        }
    }
};
AddEntryPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_7__["Helper"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
AddEntryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-entry',
        template: _raw_loader_add_entry_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_entry_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    // export class AddEntryPage implements OnInit {
    //   constructor() { }
    //   ngOnInit() {
    //   }
    // }
], AddEntryPage);



/***/ }),

/***/ "d9Ro":
/*!***********************************************!*\
  !*** ./src/app/add-entry/add-entry.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\n.survey_btn {\n  height: 40px;\n}\n\nion-label {\n  font-size: 12px !important;\n  line-height: 1.5;\n}\n\np {\n  font-size: 12px;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFkZC1lbnRyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksMEJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSUoiLCJmaWxlIjoiYWRkLWVudHJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnN1cnZleV9idG57XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59ICJdfQ== */");

/***/ }),

/***/ "f09M":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-entry/add-entry.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-left\">Add Entry</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<form [formGroup]=\"firstFormGroup\">\r\n  <ion-row class=\"ion-margin-top\">\r\n    <ion-col size=\"12\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Patient Mobile Number</ion-label>\r\n        <ion-input formControlName=\"mobile\"></ion-input>\r\n      </ion-item>\r\n    </ion-col> \r\n    <ion-col size=\"12\">\r\n      <div class=\"trams\">\r\n        <ion-checkbox color=\"primary\" (ionChange)=\"tnc($event)\" slot=\"start\"></ion-checkbox>\r\n        <ion-label> I hereby acknowledge that I have explained to the “Patient” in a language the Patient understands, that he/she would be reached out by third party service providers (diabetes helpline) who would share educational information about the “Insulin Device” and would also guide them about various aspects of diabetes viz quality of life, during the course of their treatment. I have informed the “Patient” that any data generated during the course of the treatment will be used for educational, scientific research and commercial purposes. I do hereby confirm that the “Patient” has given his/her unconditional written consent for the aforementioned and that I undertake to share the same if so required by response to any directions from a government department/authority.</ion-label>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n    \r\n  <ion-row class=\"ion-padding-top\">\r\n    <ion-col size=\"12\">\r\n      <ion-button [disabled]=\"!firstFormGroup.valid\" type=\"submit\" class=\"survey_btn\" expand=\"full\" shape=\"round\" fill=\"outline\" (click)=\"submit()\"> Submit </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</form>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=add-entry-add-entry-module.js.map