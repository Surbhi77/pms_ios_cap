(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kdp-suvey-kdp-suvey-module"],{

/***/ "2PK3":
/*!*********************************************!*\
  !*** ./src/app/kdp-suvey/kdp-suvey.page.ts ***!
  \*********************************************/
/*! exports provided: KdpSuveyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdpSuveyPage", function() { return KdpSuveyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_kdp_suvey_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./kdp-suvey.page.html */ "aqaX");
/* harmony import */ var _kdp_suvey_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kdp-suvey.page.scss */ "iEXZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _how_to_how_to_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../how-to/how-to.page */ "g2Qt");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../common/api.service */ "uMkL");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../common/helper */ "DuXP");











let KdpSuveyPage = class KdpSuveyPage {
    constructor(storage, helper, alertController, apiService, modalController, router) {
        this.storage = storage;
        this.helper = helper;
        this.alertController = alertController;
        this.apiService = apiService;
        this.modalController = modalController;
        this.router = router;
        this.reasons = [
            '1-Are reluctant to start it',
            '2-Do not adhere to their appointments and treatment regimen',
            '3-Do not adhere to their self-monitoring of blood glucose',
            '4-Are from a low socioeconomic status',
            '5-Are ≥75 years of age because of the risk of hypoglycemia',
            '6-Have excess weight (BMI ≥ 35) because of the risk for weight gain',
            '7-Have cardiovascular diseases',
            // '8-I may be reluctant to initiate insulin therapy for my patients with T2DM',
            '8-I do not follow the medical updates on insulin therapy',
            '9-I do not have enough staff for patient education and training'
        ];
        this.reluctant_insulin = 8;
        this.socioeconomic_level = 2;
        this.reluctant_start = 1;
        this.years_of_age = 5;
        this.cardiovascular = 7;
        this.appointment_treatment = 2;
        this.excess_weight = 6;
        this.staff_notenough = 10;
        this.self_monitoring = 3;
        this.not_follow_medical = 9;
        this.mappingReasons = {
            'reluctant_start': 'Are reluctant to start it',
            'appointment_treatment': 'Do not adhere to their appointments and treatment regimen',
            'self_monitoring': 'Do not adhere to their self-monitoring of blood glucose',
            'socioeconomic_level': 'Are from a low socioeconomic status',
            'years_of_age': 'Are ≥75 years of age because of the risk of hypoglycemia',
            'excess_weight': 'Have excess weight (BMI ≥ 35) because of the risk for weight gain',
            'cardiovascular': 'Have cardiovascular diseases',
            // 'reluctant_insulin':'I may be reluctant to initiate insulin therapy for my patients with T2DM',
            'not_follow_medical': 'I do not follow the medical updates on insulin therapy',
            'staff_notenough': 'I do not have enough staff for patient education and training'
        };
        this.acceptanceInsulin = [
            '1-Fear of injection',
            '2-Fear of hypoglycemia',
            '3-Fear of weight gain',
            '4-Cost of insulin',
            '5-Skepticism about Insulin efficacy',
            '6-Perception of the initiation of insulin as a personal failure in controlling T2DM',
            '7-Perception of the initiation of insulin as worsening of the disease',
            '8-Worry about their ability to manage insulin therapy and to adhere to physicians recommendations',
            '9-Perception of the initiation of insulin therapy as a threat to their quality of life'
        ];
        this.fear_injection = 1;
        this.fear_hypoglycemia = 2;
        this.cost_insulin = 4;
        this.fear_weight = 3;
        this.skepticism_insulin = 5;
        this.insulin_failure = 6;
        this.insulin_worsening = 7;
        this.manage_insulin_therapy = 8;
        this.threat_quality = 9;
        this.mappingBarries = {
            'fear_injection': 'Fear of injection',
            'fear_hypoglycemia': 'Fear of hypoglycemia',
            'cost_insulin': 'Cost of insulin',
            'fear_weight': 'Fear of weight gain',
            'skepticism_insulin': 'Skepticism about Insulin efficacy',
            'insulin_failure': 'Perception of the initiation of insulin as a personal failure in controlling T2DM',
            'insulin_worsening': 'Perception of the initiation of insulin as worsening of the disease',
            'manage_insulin_therapy': 'Worry about their ability to manage insulin therapy and to adhere to physicians recommendations',
            'threat_quality': 'Perception of the initiation of insulin therapy as a threat to their quality of life'
        };
        this.sixMonths = 0;
        this.sum = 0;
        this.oneYear = 0;
        this.showOne = false;
        this.threeYear = 0;
        this.showThree = false;
        this.FiveYear = 0;
        this.showFive = false;
        this.impacts = [];
        this.influence = [];
        this.rangeObject = { lower: 0, upper: 100 };
        this.rangeObject1 = { lower: 0, upper: 100 };
        this.rangeObject2 = { lower: 0, upper: 100 };
        this.rangeObject3 = { lower: 0, upper: 100 };
    }
    ngOnInit() {
        this.kdpStep1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            delay_insulin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            insulin_tdm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            insulin_regardless: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            benifit_insulin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            receiving_insulin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            success_insulin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            notcomplicated_insulin: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            insulin_therapy: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
        this.kdpStep2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            six_months: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            one_to_two_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            three_to_five_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            five_years: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            impacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            influence: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
    }
    valueChanged(event) {
        console.log(event);
        this.sixMonths = event.value;
        this.sum = this.oneYear + this.FiveYear + this.threeYear + this.sixMonths;
        // this.sum=0+this.sixMonths
        this.kdpStep1.patchValue({
            'six_months': this.sixMonths
        });
        this.kdpStep1.updateValueAndValidity();
    }
    valueChangedThree(event) {
        this.threeYear = event.value;
        this.sum = this.oneYear + this.FiveYear + this.threeYear + this.sixMonths;
        this.kdpStep1.patchValue({
            'three_to_five_year': this.threeYear
        });
        this.kdpStep1.updateValueAndValidity();
    }
    valueChangedFive(event) {
        this.FiveYear = event.value;
        this.sum = this.oneYear + this.FiveYear + this.threeYear + this.sixMonths;
        this.makeFiveDisabled = true;
        this.kdpStep1.patchValue({
            'five_years': this.FiveYear
        });
        this.kdpStep1.updateValueAndValidity();
    }
    valueChangedOne(event) {
        this.oneYear = event.value;
        this.sum = this.oneYear + this.FiveYear + this.threeYear + this.sixMonths;
        this.makeSixDisabled = true;
        this.kdpStep1.patchValue({
            'six_months': event.value
        });
        this.kdpStep1.updateValueAndValidity();
    }
    impactChange(event, name) {
        if (event.target.checked) {
            this.impacts.push(name);
        }
        else {
            var index = this.impacts.indexOf(name);
            this.impacts.splice(index, 1);
        }
        if (this.impacts.length) {
            this.kdpStep2.patchValue({
                'impacts': this.impacts.toString()
            });
            this.kdpStep2.updateValueAndValidity();
        }
        else {
            this.kdpStep2.patchValue({
                'impacts': ''
            });
            this.kdpStep2.updateValueAndValidity();
        }
    }
    influenceChange(event, name) {
        if (event.target.checked) {
            this.influence.push(name);
        }
        else {
            var index = this.influence.indexOf(name);
            this.influence.splice(index, 1);
        }
        if (this.influence.length) {
            this.kdpStep2.patchValue({
                'influence': this.influence.toString()
            });
        }
        else {
            this.kdpStep2.patchValue({
                'influence': ''
            });
        }
        this.kdpStep2.updateValueAndValidity();
    }
    stepChanged(event, stepper) {
        console.log(event);
    }
    doReorderAcceptance(ev) {
        console.log(ev, 'Dragged from index', ev.detail.from, 'to', ev.detail.to);
        var element = this.acceptanceInsulin[ev.detail.from];
        this.acceptanceInsulin.splice(ev.detail.from, 1);
        this.acceptanceInsulin.splice(ev.detail.to, 0, element);
        console.log(this.acceptanceInsulin);
        var self = this;
        this.acceptanceInsulin.forEach(function (element, index) {
            var arr = element.split(/-(.+)/);
            var str = arr[1].trim();
            // console.log(str,self.mappingBarries[str]);
            // var prop = self.mappingBarries[str]
            // console.log(prop)
            // self[prop] = index+1;
            // console.log(self[prop],index+1,self.threat_quality)
            self.acceptanceInsulin[index] = (index + 1) + "-" + str;
        });
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        ev.detail.complete();
    }
    doReorder(ev) {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log(ev, 'Dragged from index', ev.detail.from, 'to', ev.detail.to);
        var element = this.reasons[ev.detail.from];
        this.reasons.splice(ev.detail.from, 1);
        this.reasons.splice(ev.detail.to, 0, element);
        console.log(this.reasons);
        var self = this;
        this.reasons.forEach(function (element, index) {
            var arr = element.split(/-(.+)/);
            var str = arr[1].trim();
            // console.log(self.mappingReasons[str]);
            // var prop = self.mappingReasons[str]
            // console.log(prop)
            // self[prop] = index+1;
            // console.log(self[prop],index+1,self.self_monitoring)
            self.reasons[index] = (index + 1) + "-" + str;
        });
        console.log(this.reasons);
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        ev.detail.complete();
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _how_to_how_to_page__WEBPACK_IMPORTED_MODULE_7__["HowToPage"],
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
    dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            'dismissed': true
        });
    }
    howtouse() {
        this.alertController.create({
            header: 'How To Use Process',
            message: '<video class="video_hm" width="100%" height="400" controls="true" loop="loop" autoplay="">' +
                '<source src="/assets/img/mobile02.mp4" type="video/mp4">' +
                '</video>',
            // message: '<video class="video_hm" width="100%" height="400" controls="true" loop="loop" autoplay=""><source src="/assets/img/mobile02.mp4" type="video/mp4"></video>',
            backdropDismiss: false,
            buttons: [{
                    text: 'Yes',
                    role: 'cancel',
                    handler: () => {
                        console.log('Application exit prevented!');
                    }
                }, {
                    text: 'No',
                    handler: () => {
                        this.router.navigateByUrl('/sign-in');
                    }
                }]
        })
            .then(alert => {
            alert.present();
        });
    }
    getIndexesReason(reason) {
        var index = this.reasons.findIndex(element => element.includes(reason));
        return index + 1;
    }
    getMappingIndexes(reason) {
        var index = this.acceptanceInsulin.findIndex(element => element.includes(reason));
        return index + 1;
    }
    showNext() {
    }
    ionViewWillEnter() {
        this.storage.get("userInfo").then(res => {
            if (res) {
                this.userInfo = res;
            }
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sum = this.oneYear + this.FiveYear + this.threeYear + this.sixMonths;
            if (this.kdpStep2.valid && this.sum == 100 && this.impacts.length == 3 && this.influence.length == 2) {
                let formdata = new FormData();
                formdata.append('user_id', this.userInfo.doctor_id);
                formdata.append('delay_insulin', this.kdpStep1.value.delay_insulin);
                formdata.append('insulin_tdm', this.kdpStep1.value.insulin_tdm);
                formdata.append('insulin_regardless', this.kdpStep1.value.insulin_regardless);
                formdata.append('benifit_insulin', this.kdpStep1.value.benifit_insulin);
                formdata.append('receiving_insulin', this.kdpStep1.value.receiving_insulin);
                formdata.append('success_insulin', this.kdpStep1.value.success_insulin);
                formdata.append('notcomplicated_insulin', this.kdpStep1.value.notcomplicated_insulin);
                formdata.append('insulin_therapy', this.kdpStep1.value.insulin_therapy);
                // var index = await this.getIndexesReason(this.mappingReasons.reluctant_insulin)
                // console.log(index)
                // formdata.append('reluctant_insulin',index+1);
                var socioeconomic_level = yield this.getIndexesReason(this.mappingReasons.socioeconomic_level);
                formdata.append('socioeconomic_level', socioeconomic_level);
                var reluctant_start = yield this.getIndexesReason(this.mappingReasons.reluctant_start);
                formdata.append('reluctant_start', reluctant_start);
                var years_of_age = yield this.getIndexesReason(this.mappingReasons.years_of_age);
                formdata.append('years_of_age', years_of_age);
                var cardiovascular = yield this.getIndexesReason(this.mappingReasons.cardiovascular);
                formdata.append('cardiovascular', cardiovascular);
                var appointment_treatment = yield this.getIndexesReason(this.mappingReasons.appointment_treatment);
                formdata.append('appointment_treatment', appointment_treatment);
                var excess_weight = yield this.getIndexesReason(this.mappingReasons.excess_weight);
                formdata.append('excess_weight', excess_weight);
                var staff_notenough = yield this.getIndexesReason(this.mappingReasons.staff_notenough);
                formdata.append('staff_notenough', staff_notenough);
                // var reluctant_therapy = await this.getIndexesReason(this.mappingReasons.reluctant_therapy);
                // formdata.append('reluctant_therapy',reluctant_therapy);
                var self_monitoring = yield this.getIndexesReason(this.mappingReasons.self_monitoring);
                formdata.append('self_monitoring', self_monitoring);
                var not_follow_medical = yield this.getIndexesReason(this.mappingReasons.not_follow_medical);
                formdata.append('not_follow_medical', not_follow_medical);
                var fear_injection = yield this.getMappingIndexes(this.mappingBarries.fear_injection);
                formdata.append('fear_injection', fear_injection);
                var fear_hypoglycemia = yield this.getMappingIndexes(this.mappingBarries.fear_hypoglycemia);
                formdata.append('fear_hypoglycemia', fear_hypoglycemia);
                var cost_insulin = yield this.getMappingIndexes(this.mappingBarries.cost_insulin);
                formdata.append('cost_insulin', cost_insulin);
                var fear_weight = yield this.getMappingIndexes(this.mappingBarries.fear_weight);
                formdata.append('fear_weight', fear_weight);
                var skepticism_insulin = yield this.getMappingIndexes(this.mappingBarries.skepticism_insulin);
                formdata.append('skepticism_insulin', skepticism_insulin);
                var insulin_failure = yield this.getMappingIndexes(this.mappingBarries.insulin_failure);
                formdata.append('insulin_failure', insulin_failure);
                var insulin_worsening = yield this.getMappingIndexes(this.mappingBarries.insulin_worsening);
                formdata.append('insulin_worsening', insulin_worsening);
                var manage_insulin_therapy = yield this.getMappingIndexes(this.mappingBarries.manage_insulin_therapy);
                formdata.append('manage_insulin_therapy', manage_insulin_therapy);
                var threat_quality = yield this.getMappingIndexes(this.mappingBarries.threat_quality);
                formdata.append('threat_quality', threat_quality);
                formdata.append('six_months', this.sixMonths);
                formdata.append('one_to_two_year', this.oneYear);
                formdata.append('three_to_five_year', this.threeYear);
                formdata.append('five_years', this.FiveYear);
                formdata.append('people_with_tdm', JSON.stringify(this.influence));
                formdata.append('insulin_to_tdmpatients', JSON.stringify(this.impacts));
                this.apiService.kdpSubmit(formdata).subscribe(res => {
                    this.storage.set("kdp_filled", true);
                    this.kdpStep1.reset();
                    this.kdpStep2.reset();
                    this.router.navigateByUrl('/dashboard');
                });
            }
            else {
                if (!this.kdpStep2.valid) {
                    this.helper.presentToast("Please fill all fields");
                }
                else {
                    this.helper.presentToast("Sum of insulinisation barriers should be equal to 100");
                }
                if (this.influence.length != 2) {
                    this.helper.presentToast('Choose two clinically relevant options');
                }
                else {
                    if (this.impacts.length != 3) {
                        this.helper.presentToast("Choose three clinically impactful options");
                    }
                }
            }
        });
    }
    firstSubmit() {
        if (this.kdpStep1.valid) {
        }
        else {
            this.helper.presentToast("Please fill all the fields");
        }
    }
};
KdpSuveyPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_10__["Helper"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
KdpSuveyPage.propDecorators = {
    reorderGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonReorderGroup"],] }]
};
KdpSuveyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-kdp-suvey',
        template: _raw_loader_kdp_suvey_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_kdp_suvey_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], KdpSuveyPage);



/***/ }),

/***/ "5RNC":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js ***!
  \************************************************************************/
/*! exports provided: MAT_SLIDER_VALUE_ACCESSOR, MatSlider, MatSliderChange, MatSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function() { return MAT_SLIDER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlider", function() { return MatSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSliderChange", function() { return MatSliderChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSliderModule", function() { return MatSliderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





const _c0 = ["sliderWrapper"];
const activeEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 */
const MIN_AUTO_TICK_SEPARATION = 30;
/** The thumb gap size for a disabled slider. */
const DISABLED_THUMB_GAP = 7;
/** The thumb gap size for a non-active slider at its minimum value. */
const MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
/** The thumb gap size for an active slider at its minimum value. */
const MIN_VALUE_ACTIVE_THUMB_GAP = 10;
/**
 * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 * @docs-private
 */
const MAT_SLIDER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSlider),
    multi: true
};
/** A simple change event emitted by the MatSlider component. */
class MatSliderChange {
}
// Boilerplate for applying mixins to MatSlider.
/** @docs-private */
class MatSliderBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSliderBase), 'accent'));
/**
 * Allows users to select from a range of values by moving the slider thumb. It is similar in
 * behavior to the native `<input type="range">` element.
 */
class MatSlider extends _MatSliderMixinBase {
    constructor(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _ngZone, _document, _animationMode) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._ngZone = _ngZone;
        this._animationMode = _animationMode;
        this._invert = false;
        this._max = 100;
        this._min = 0;
        this._step = 1;
        this._thumbLabel = false;
        this._tickInterval = 0;
        this._value = null;
        this._vertical = false;
        /** Event emitted when the slider value has changed. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Event emitted when the slider thumb moves. */
        this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the raw value of the slider changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this.onTouched = () => { };
        this._percent = 0;
        /**
         * Whether or not the thumb is sliding.
         * Used to determine if there should be a transition for the thumb and fill track.
         */
        this._isSliding = false;
        /**
         * Whether or not the slider is active (clicked or sliding).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         */
        this._isActive = false;
        /** The size of a tick interval as a percentage of the size of the track. */
        this._tickIntervalPercent = 0;
        /** The dimensions of the slider. */
        this._sliderDimensions = null;
        this._controlValueAccessorChangeFn = () => { };
        /** Subscription to the Directionality change EventEmitter. */
        this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        /** Called when the user has put their pointer down on the slider. */
        this._pointerDown = (event) => {
            // Don't do anything if the slider is disabled or the
            // user is using anything other than the main mouse button.
            if (this.disabled || this._isSliding || (!isTouchEvent(event) && event.button !== 0)) {
                return;
            }
            this._ngZone.run(() => {
                const oldValue = this.value;
                const pointerPosition = getPointerPositionOnPage(event);
                this._isSliding = true;
                this._lastPointerEvent = event;
                event.preventDefault();
                this._focusHostElement();
                this._onMouseenter(); // Simulate mouseenter in case this is a mobile device.
                this._bindGlobalEvents(event);
                this._focusHostElement();
                this._updateValueFromPosition(pointerPosition);
                this._valueOnSlideStart = oldValue;
                // Emit a change and input event if the value changed.
                if (oldValue != this.value) {
                    this._emitInputEvent();
                }
            });
        };
        /**
         * Called when the user has moved their pointer after
         * starting to drag. Bound on the document level.
         */
        this._pointerMove = (event) => {
            if (this._isSliding) {
                // Prevent the slide from selecting anything else.
                event.preventDefault();
                const oldValue = this.value;
                this._lastPointerEvent = event;
                this._updateValueFromPosition(getPointerPositionOnPage(event));
                // Native range elements always emit `input` events when the value changed while sliding.
                if (oldValue != this.value) {
                    this._emitInputEvent();
                }
            }
        };
        /** Called when the user has lifted their pointer. Bound on the document level. */
        this._pointerUp = (event) => {
            if (this._isSliding) {
                event.preventDefault();
                this._removeGlobalEvents();
                this._isSliding = false;
                if (this._valueOnSlideStart != this.value && !this.disabled) {
                    this._emitChangeEvent();
                }
                this._valueOnSlideStart = this._lastPointerEvent = null;
            }
        };
        /** Called when the window has lost focus. */
        this._windowBlur = () => {
            // If the window is blurred while dragging we need to stop dragging because the
            // browser won't dispatch the `mouseup` and `touchend` events anymore.
            if (this._lastPointerEvent) {
                this._pointerUp(this._lastPointerEvent);
            }
        };
        this._document = _document;
        this.tabIndex = parseInt(tabIndex) || 0;
        _ngZone.runOutsideAngular(() => {
            const element = elementRef.nativeElement;
            element.addEventListener('mousedown', this._pointerDown, activeEventOptions);
            element.addEventListener('touchstart', this._pointerDown, activeEventOptions);
        });
    }
    /** Whether the slider is inverted. */
    get invert() { return this._invert; }
    set invert(value) {
        this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
    /** The maximum value that the slider can have. */
    get max() { return this._max; }
    set max(v) {
        this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._max);
        this._percent = this._calculatePercentage(this._value);
        // Since this also modifies the percentage, we need to let the change detection know.
        this._changeDetectorRef.markForCheck();
    }
    /** The minimum value that the slider can have. */
    get min() { return this._min; }
    set min(v) {
        this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._min);
        // If the value wasn't explicitly set by the user, set it to the min.
        if (this._value === null) {
            this.value = this._min;
        }
        this._percent = this._calculatePercentage(this._value);
        // Since this also modifies the percentage, we need to let the change detection know.
        this._changeDetectorRef.markForCheck();
    }
    /** The values at which the thumb will snap. */
    get step() { return this._step; }
    set step(v) {
        this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._step);
        if (this._step % 1 !== 0) {
            this._roundToDecimal = this._step.toString().split('.').pop().length;
        }
        // Since this could modify the label, we need to notify the change detection.
        this._changeDetectorRef.markForCheck();
    }
    /** Whether or not to show the thumb label. */
    get thumbLabel() { return this._thumbLabel; }
    set thumbLabel(value) { this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    /**
     * How often to show ticks. Relative to the step so that a tick always appears on a step.
     * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
     */
    get tickInterval() { return this._tickInterval; }
    set tickInterval(value) {
        if (value === 'auto') {
            this._tickInterval = 'auto';
        }
        else if (typeof value === 'number' || typeof value === 'string') {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, this._tickInterval);
        }
        else {
            this._tickInterval = 0;
        }
    }
    /** Value of the slider. */
    get value() {
        // If the value needs to be read and it is still uninitialized, initialize it to the min.
        if (this._value === null) {
            this.value = this._min;
        }
        return this._value;
    }
    set value(v) {
        if (v !== this._value) {
            let value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v);
            // While incrementing by a decimal we can end up with values like 33.300000000000004.
            // Truncate it to ensure that it matches the label and to make it easier to work with.
            if (this._roundToDecimal && value !== this.min && value !== this.max) {
                value = parseFloat(value.toFixed(this._roundToDecimal));
            }
            this._value = value;
            this._percent = this._calculatePercentage(this._value);
            // Since this also modifies the percentage, we need to let the change detection know.
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Whether the slider is vertical. */
    get vertical() { return this._vertical; }
    set vertical(value) {
        this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
    /** The value to be used for display purposes. */
    get displayValue() {
        if (this.displayWith) {
            // Value is never null but since setters and getters cannot have
            // different types, the value getter is also typed to return null.
            return this.displayWith(this.value);
        }
        // Note that this could be improved further by rounding something like 0.999 to 1 or
        // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
        // every change detection cycle.
        if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
            return this.value.toFixed(this._roundToDecimal);
        }
        return this.value || 0;
    }
    /** set focus to the host element */
    focus(options) {
        this._focusHostElement(options);
    }
    /** blur the host element */
    blur() {
        this._blurHostElement();
    }
    /** The percentage of the slider that coincides with the value. */
    get percent() { return this._clamp(this._percent); }
    /**
     * Whether the axis of the slider is inverted.
     * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
     */
    _shouldInvertAxis() {
        // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
        // top. However from a y-axis standpoint this is inverted.
        return this.vertical ? !this.invert : this.invert;
    }
    /** Whether the slider is at its minimum value. */
    _isMinValue() {
        return this.percent === 0;
    }
    /**
     * The amount of space to leave between the slider thumb and the track fill & track background
     * elements.
     */
    _getThumbGap() {
        if (this.disabled) {
            return DISABLED_THUMB_GAP;
        }
        if (this._isMinValue() && !this.thumbLabel) {
            return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
        }
        return 0;
    }
    /** CSS styles for the track background element. */
    _getTrackBackgroundStyles() {
        const axis = this.vertical ? 'Y' : 'X';
        const scale = this.vertical ? `1, ${1 - this.percent}, 1` : `${1 - this.percent}, 1, 1`;
        const sign = this._shouldInvertMouseCoords() ? '-' : '';
        return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: `translate${axis}(${sign}${this._getThumbGap()}px) scale3d(${scale})`
        };
    }
    /** CSS styles for the track fill element. */
    _getTrackFillStyles() {
        const percent = this.percent;
        const axis = this.vertical ? 'Y' : 'X';
        const scale = this.vertical ? `1, ${percent}, 1` : `${percent}, 1, 1`;
        const sign = this._shouldInvertMouseCoords() ? '' : '-';
        return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: `translate${axis}(${sign}${this._getThumbGap()}px) scale3d(${scale})`,
            // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
            // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
            // the value of the slider is 0, we can easily get into this situation. We force a
            // recalculation by changing the element's `display` when it goes from 0 to any other value.
            display: percent === 0 ? 'none' : ''
        };
    }
    /** CSS styles for the ticks container element. */
    _getTicksContainerStyles() {
        let axis = this.vertical ? 'Y' : 'X';
        // For a horizontal slider in RTL languages we push the ticks container off the left edge
        // instead of the right edge to avoid causing a horizontal scrollbar to appear.
        let sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
        let offset = this._tickIntervalPercent / 2 * 100;
        return {
            'transform': `translate${axis}(${sign}${offset}%)`
        };
    }
    /** CSS styles for the ticks element. */
    _getTicksStyles() {
        let tickSize = this._tickIntervalPercent * 100;
        let backgroundSize = this.vertical ? `2px ${tickSize}%` : `${tickSize}% 2px`;
        let axis = this.vertical ? 'Y' : 'X';
        // Depending on the direction we pushed the ticks container, push the ticks the opposite
        // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
        // ticks 180 degrees so we're really cutting off the end edge abd not the start.
        let sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
        let rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
        let styles = {
            'backgroundSize': backgroundSize,
            // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
            'transform': `translateZ(0) translate${axis}(${sign}${tickSize / 2}%)${rotate}`
        };
        if (this._isMinValue() && this._getThumbGap()) {
            const shouldInvertAxis = this._shouldInvertAxis();
            let side;
            if (this.vertical) {
                side = shouldInvertAxis ? 'Bottom' : 'Top';
            }
            else {
                side = shouldInvertAxis ? 'Right' : 'Left';
            }
            styles[`padding${side}`] = `${this._getThumbGap()}px`;
        }
        return styles;
    }
    _getThumbContainerStyles() {
        const shouldInvertAxis = this._shouldInvertAxis();
        let axis = this.vertical ? 'Y' : 'X';
        // For a horizontal slider in RTL languages we push the thumb container off the left edge
        // instead of the right edge to avoid causing a horizontal scrollbar to appear.
        let invertOffset = (this._getDirection() == 'rtl' && !this.vertical) ? !shouldInvertAxis : shouldInvertAxis;
        let offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
        return {
            'transform': `translate${axis}(-${offset}%)`
        };
    }
    /**
     * Whether mouse events should be converted to a slider position by calculating their distance
     * from the right or bottom edge of the slider as opposed to the top or left.
     */
    _shouldInvertMouseCoords() {
        const shouldInvertAxis = this._shouldInvertAxis();
        return (this._getDirection() == 'rtl' && !this.vertical) ? !shouldInvertAxis : shouldInvertAxis;
    }
    /** The language direction for this slider element. */
    _getDirection() {
        return (this._dir && this._dir.value == 'rtl') ? 'rtl' : 'ltr';
    }
    ngAfterViewInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe((origin) => {
            this._isActive = !!origin && origin !== 'keyboard';
            this._changeDetectorRef.detectChanges();
        });
        if (this._dir) {
            this._dirChangeSubscription = this._dir.change.subscribe(() => {
                this._changeDetectorRef.markForCheck();
            });
        }
    }
    ngOnDestroy() {
        const element = this._elementRef.nativeElement;
        element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
        element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
        this._lastPointerEvent = null;
        this._removeGlobalEvents();
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._dirChangeSubscription.unsubscribe();
    }
    _onMouseenter() {
        if (this.disabled) {
            return;
        }
        // We save the dimensions of the slider here so we can use them to update the spacing of the
        // ticks and determine where on the slider click and slide events happen.
        this._sliderDimensions = this._getSliderDimensions();
        this._updateTickIntervalPercent();
    }
    _onFocus() {
        // We save the dimensions of the slider here so we can use them to update the spacing of the
        // ticks and determine where on the slider click and slide events happen.
        this._sliderDimensions = this._getSliderDimensions();
        this._updateTickIntervalPercent();
    }
    _onBlur() {
        this.onTouched();
    }
    _onKeydown(event) {
        if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
            return;
        }
        const oldValue = this.value;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_UP"]:
                this._increment(10);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_DOWN"]:
                this._increment(-10);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]:
                this.value = this.max;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]:
                this.value = this.min;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this._getDirection() == 'rtl' ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
                this._increment(1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this._getDirection() == 'rtl' ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
                this._increment(-1);
                break;
            default:
                // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                // it.
                return;
        }
        if (oldValue != this.value) {
            this._emitInputEvent();
            this._emitChangeEvent();
        }
        this._isSliding = true;
        event.preventDefault();
    }
    _onKeyup() {
        this._isSliding = false;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        return this._document.defaultView || window;
    }
    /**
     * Binds our global move and end events. They're bound at the document level and only while
     * dragging so that the user doesn't have to keep their pointer exactly over the slider
     * as they're swiping across the screen.
     */
    _bindGlobalEvents(triggerEvent) {
        // Note that we bind the events to the `document`, because it allows us to capture
        // drag cancel events where the user's pointer is outside the browser window.
        const document = this._document;
        const isTouch = isTouchEvent(triggerEvent);
        const moveEventName = isTouch ? 'touchmove' : 'mousemove';
        const endEventName = isTouch ? 'touchend' : 'mouseup';
        document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
        document.addEventListener(endEventName, this._pointerUp, activeEventOptions);
        if (isTouch) {
            document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
        }
        const window = this._getWindow();
        if (typeof window !== 'undefined' && window) {
            window.addEventListener('blur', this._windowBlur);
        }
    }
    /** Removes any global event listeners that we may have added. */
    _removeGlobalEvents() {
        const document = this._document;
        document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
        document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
        document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
        document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
        document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);
        const window = this._getWindow();
        if (typeof window !== 'undefined' && window) {
            window.removeEventListener('blur', this._windowBlur);
        }
    }
    /** Increments the slider by the given number of steps (negative number decrements). */
    _increment(numSteps) {
        this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
    }
    /** Calculate the new value from the new physical location. The value will always be snapped. */
    _updateValueFromPosition(pos) {
        if (!this._sliderDimensions) {
            return;
        }
        let offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
        let size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
        let posComponent = this.vertical ? pos.y : pos.x;
        // The exact value is calculated from the event and used to find the closest snap value.
        let percent = this._clamp((posComponent - offset) / size);
        if (this._shouldInvertMouseCoords()) {
            percent = 1 - percent;
        }
        // Since the steps may not divide cleanly into the max value, if the user
        // slid to 0 or 100 percent, we jump to the min/max value. This approach
        // is slightly more intuitive than using `Math.ceil` below, because it
        // follows the user's pointer closer.
        if (percent === 0) {
            this.value = this.min;
        }
        else if (percent === 1) {
            this.value = this.max;
        }
        else {
            const exactValue = this._calculateValue(percent);
            // This calculation finds the closest step by finding the closest
            // whole number divisible by the step relative to the min.
            const closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min;
            // The value needs to snap to the min and max.
            this.value = this._clamp(closestValue, this.min, this.max);
        }
    }
    /** Emits a change event if the current value is different from the last emitted value. */
    _emitChangeEvent() {
        this._controlValueAccessorChangeFn(this.value);
        this.valueChange.emit(this.value);
        this.change.emit(this._createChangeEvent());
    }
    /** Emits an input event when the current value is different from the last emitted value. */
    _emitInputEvent() {
        this.input.emit(this._createChangeEvent());
    }
    /** Updates the amount of space between ticks as a percentage of the width of the slider. */
    _updateTickIntervalPercent() {
        if (!this.tickInterval || !this._sliderDimensions) {
            return;
        }
        if (this.tickInterval == 'auto') {
            let trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            let pixelsPerStep = trackSize * this.step / (this.max - this.min);
            let stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            let pixelsPerTick = stepsPerTick * this.step;
            this._tickIntervalPercent = pixelsPerTick / trackSize;
        }
        else {
            this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
        }
    }
    /** Creates a slider change object from the specified value. */
    _createChangeEvent(value = this.value) {
        let event = new MatSliderChange();
        event.source = this;
        event.value = value;
        return event;
    }
    /** Calculates the percentage of the slider that a value is. */
    _calculatePercentage(value) {
        return ((value || 0) - this.min) / (this.max - this.min);
    }
    /** Calculates the value a percentage of the slider corresponds to. */
    _calculateValue(percentage) {
        return this.min + percentage * (this.max - this.min);
    }
    /** Return a number between two numbers. */
    _clamp(value, min = 0, max = 1) {
        return Math.max(min, Math.min(value, max));
    }
    /**
     * Get the bounding client rect of the slider track element.
     * The track is used rather than the native element to ignore the extra space that the thumb can
     * take up.
     */
    _getSliderDimensions() {
        return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
    }
    /**
     * Focuses the native element.
     * Currently only used to allow a blur event to fire but will be used with keyboard input later.
     */
    _focusHostElement(options) {
        this._elementRef.nativeElement.focus(options);
    }
    /** Blurs the native element. */
    _blurHostElement() {
        this._elementRef.nativeElement.blur();
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the component is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param isDisabled
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
MatSlider.ɵfac = function MatSlider_Factory(t) { return new (t || MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8)); };
MatSlider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSlider, selectors: [["mat-slider"]], viewQuery: function MatSlider_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
    } }, hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"], hostVars: 29, hostBindings: function MatSlider_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() { return ctx._onFocus(); })("blur", function MatSlider_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function MatSlider_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("keyup", function MatSlider_keyup_HostBindingHandler() { return ctx._onKeyup(); })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() { return ctx._onMouseenter(); })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) { return $event.preventDefault(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-valuetext", ctx.valueText == null ? ctx.displayValue : ctx.valueText)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._shouldInvertAxis())("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue())("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue() && ctx._getThumbGap() && ctx._shouldInvertAxis())("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disabled: "disabled", color: "color", tabIndex: "tabIndex", invert: "invert", max: "max", min: "min", value: "value", step: "step", thumbLabel: "thumbLabel", tickInterval: "tickInterval", vertical: "vertical", displayWith: "displayWith", valueText: "valueText" }, outputs: { change: "change", input: "input", valueChange: "valueChange" }, exportAs: ["matSlider"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 6, consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]], template: function MatSlider_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTrackBackgroundStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTrackFillStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTicksContainerStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTicksStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getThumbContainerStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displayValue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]], styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute;-webkit-print-color-adjust:exact;color-adjust:exact}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"], encapsulation: 2, changeDetection: 0 });
MatSlider.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"],] }] }
];
MatSlider.propDecorators = {
    invert: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    thumbLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tickInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    displayWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    valueText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    _sliderWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['sliderWrapper',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-slider',
                exportAs: 'matSlider',
                providers: [MAT_SLIDER_VALUE_ACCESSOR],
                host: {
                    '(focus)': '_onFocus()',
                    '(blur)': '_onBlur()',
                    '(keydown)': '_onKeydown($event)',
                    '(keyup)': '_onKeyup()',
                    '(mouseenter)': '_onMouseenter()',
                    // On Safari starting to slide temporarily triggers text selection mode which
                    // show the wrong cursor. We prevent it by stopping the `selectstart` event.
                    '(selectstart)': '$event.preventDefault()',
                    'class': 'mat-slider mat-focus-indicator',
                    'role': 'slider',
                    '[tabIndex]': 'tabIndex',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.aria-valuemax]': 'max',
                    '[attr.aria-valuemin]': 'min',
                    '[attr.aria-valuenow]': 'value',
                    // NVDA and Jaws appear to announce the `aria-valuenow` by calculating its percentage based
                    // on its value between `aria-valuemin` and `aria-valuemax`. Due to how decimals are handled,
                    // it can cause the slider to read out a very long value like 0.20000068 if the current value
                    // is 0.2 with a min of 0 and max of 1. We work around the issue by setting `aria-valuetext`
                    // to the same value that we set on the slider's thumb which will be truncated.
                    '[attr.aria-valuetext]': 'valueText == null ? displayValue : valueText',
                    '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
                    '[class.mat-slider-disabled]': 'disabled',
                    '[class.mat-slider-has-ticks]': 'tickInterval',
                    '[class.mat-slider-horizontal]': '!vertical',
                    '[class.mat-slider-axis-inverted]': '_shouldInvertAxis()',
                    // Class binding which is only used by the test harness as there is no other
                    // way for the harness to detect if mouse coordinates need to be inverted.
                    '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
                    '[class.mat-slider-sliding]': '_isSliding',
                    '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
                    '[class.mat-slider-vertical]': 'vertical',
                    '[class.mat-slider-min-value]': '_isMinValue()',
                    '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue() && _getThumbGap() && _shouldInvertAxis()',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_getTrackBackgroundStyles()\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_getTrackFillStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_getTicksContainerStyles()\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_getTicksStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_getThumbContainerStyles()\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
                inputs: ['disabled', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute;-webkit-print-color-adjust:exact;color-adjust:exact}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], invert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], thumbLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tickInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], valueText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _sliderWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['sliderWrapper']
        }] }); })();
/** Returns whether an event is a touch event. */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/** Gets the coordinates of a touch or mouse event relative to the viewport. */
function getPointerPositionOnPage(event) {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    const point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
    return { x: point.clientX, y: point.clientY };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatSliderModule {
}
MatSliderModule.ɵfac = function MatSliderModule_Factory(t) { return new (t || MatSliderModule)(); };
MatSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatSliderModule });
MatSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSliderModule, { declarations: function () { return [MatSlider]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; }, exports: function () { return [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                declarations: [MatSlider]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=slider.js.map

/***/ }),

/***/ "aqaX":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kdp-suvey/kdp-suvey.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"add-entry\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-left\">KAP Survey</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <mat-vertical-stepper (selectionChange)=\"stepChanged($event, stepper);\" linear=\"true\" #stepper class=\"setpers\">\r\n        <mat-step [stepControl]=\"kdpStep1\" class=\"StepTitle-Head\">\r\n            <ng-template matStepLabel>KAP Survey: Insulin Initiation and Barriers<br/> for Insulin Initiation</ng-template>\r\n            <form [formGroup]=\"kdpStep1\">\r\n                <div class=\"agger_group\">\r\n                    <ion-row>\r\n                        <ion-item lines=\"none\" class=\"check_nones\">\r\n                            <ion-label>I prefer to delay the initiation of insulin therapy until it is absolutely essential (after trying a combination of several classes of oral hypoglycemic agents at maximal doses) </ion-label>\r\n                        </ion-item>\r\n                    </ion-row>\r\n                    <ion-radio-group formControlName=\"delay_insulin\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Agree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Agree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Disagree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Disagree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </div>\r\n\r\n                <div class=\"agger_group\">\r\n                    <ion-row>\r\n                        <ion-item lines=\"none\" class=\"check_nones\">\r\n                            <ion-label>\r\n                                I believe that the initiation of insulin therapy is one of the most difficult aspects of managing my patients with T2DM\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-row>\r\n                    <ion-radio-group formControlName=\"insulin_tdm\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Agree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Agree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Disagree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Disagree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </div>\r\n\r\n                <div class=\"agger_group\">\r\n                    <ion-row>\r\n                        <ion-item lines=\"none\" class=\"check_nones\">\r\n                            <ion-label>\r\n                                I believe that most of my patients will eventually need to go on insulin regardless of how well they adhere to their treatment regimen\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-row>\r\n                    <ion-radio-group formControlName=\"insulin_regardless\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Agree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Agree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Disagree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Disagree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </div>\r\n\r\n\r\n                <div class=\"agger_group\">\r\n                    <ion-row>\r\n                        <ion-item lines=\"none\" class=\"check_nones\">\r\n                            <ion-label>\r\n                                I believe that for most of my patients, the benefits of insulin therapy outweigh the risks of hypoglycemia and weight gain.\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-row>\r\n                    <ion-radio-group formControlName=\"benifit_insulin\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Agree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Agree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Disagree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Disagree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </div>\r\n\r\n                <div class=\"agger_group\">\r\n                    <ion-row>\r\n                        <ion-item lines=\"none\" class=\"check_nones\">\r\n                            <ion-label>\r\n                                I believe that most of my patients would benefit from receiving insulin therapy prior to the development of diabetes complications.\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-row>\r\n                    <ion-radio-group formControlName=\"receiving_insulin\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Agree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Agree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Disagree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Disagree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </div>\r\n\r\n                <div class=\"agger_group\">\r\n                    <ion-row>\r\n                        <ion-item lines=\"none\" class=\"check_nones\">\r\n                            <ion-label>\r\n                                I believe that proper patient education and training are the keys to successful initiation of insulin therapy.\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-row>\r\n                    <ion-radio-group formControlName=\"success_insulin\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Agree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Agree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Disagree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Disagree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </div>\r\n\r\n                <div class=\"agger_group\">\r\n                    <ion-row>\r\n                        <ion-item lines=\"none\" class=\"check_nones\">\r\n                            <ion-label>\r\n                                I believe that for most of my patients, training on the proper administration and usage of insulin is not complicated.\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-row>\r\n                    <ion-radio-group formControlName=\"notcomplicated_insulin\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Agree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Agree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Disagree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Disagree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </div>\r\n\r\n                <div class=\"agger_group\">\r\n                    <ion-row>\r\n                        <ion-item lines=\"none\" class=\"check_nones\">\r\n                            <ion-label>\r\n                                I believe that most of my patients on oral diabetes therapy do not accept insulin therapy.\r\n                            </ion-label>\r\n                        </ion-item>\r\n                    </ion-row>\r\n                    <ion-radio-group formControlName=\"insulin_therapy\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Agree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Agree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Disagree</ion-label>\r\n                                    <ion-radio slot=\"start\" value=\"Disagree\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </div>\r\n\r\n                <div>\r\n                    <button (click)=\"firstSubmit()\" mat-button matStepperNext class=\"bnt_clas\">Next</button>\r\n                </div>\r\n            </form>\r\n        </mat-step>\r\n        <mat-step>\r\n            <ng-template matStepLabel>Reasons for reluctance to initiate insulin</ng-template>\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <ion-button color=\"primary\" (click)=\"presentModal()\">\r\n                        <ion-icon name=\"information-circle\"></ion-icon> How to rate</ion-button>\r\n                    <p class=\"step_titles\">\r\n                        I may be reluctant to initiate insulin therapy for my patients with T2DM who: (Can you rate in the order of importance in your practice where 1 being top most and 9 being least)\r\n                    </p>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled=\"false\">\r\n\r\n                <ion-reorder *ngFor=\"let item of reasons\">\r\n                    <ion-reorder>\r\n                        <ion-row>\r\n                            <ion-col size=\"12\">\r\n                                <p class=\"step_titles\">{{item}} </p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-reorder>\r\n                </ion-reorder>\r\n\r\n            </ion-reorder-group>\r\n\r\n            <div>\r\n                <button mat-button matStepperPrevious class=\"bnt_clas\">Back</button>\r\n                <button mat-button matStepperNext class=\"bnt_clas\">Next</button>\r\n            </div>\r\n\r\n        </mat-step>\r\n        <mat-step>\r\n            <ng-template matStepLabel>Physician perspectives of patient <br /> barriers to insulin therapy</ng-template>\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <ion-button color=\"primary\" (click)=\"presentModal()\">\r\n                        <ion-icon name=\"information-circle\"></ion-icon>How to rate</ion-button>\r\n                    <p class=\"step_titles\">\r\n                        In the order of the important barrier(s) for patient acceptance of insulin therapy, rate the following\r\n                    </p>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-reorder-group (ionItemReorder)=\"doReorderAcceptance($event)\" disabled=\"false\">\r\n\r\n                <ion-reorder *ngFor=\"let item of acceptanceInsulin\">\r\n                    <ion-row>\r\n                        <ion-col size=\"12\">\r\n                            <p class=\"step_titles\">{{item}}</p>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-reorder>\r\n\r\n            </ion-reorder-group>\r\n\r\n            <div>\r\n                <button mat-button matStepperPrevious class=\"bnt_clas\">Back</button>\r\n                <button mat-button matStepperNext (click)=\"showNext()\" class=\"bnt_clas\">Next</button>\r\n            </div>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"kdpStep2\" style=\"padding: 0;\">\r\n            <ng-template matStepLabel>Insulinisation barriers and outcomes</ng-template>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <p class=\"step_titles\">Out of 100 patients who are initiated on insulins, what percentage of patients adhere to the regimen for the below duration (Sum should be equal to 100)</p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                Sum : {{sum}}\r\n            </ion-row>\r\n\r\n            <ion-row class=\"rating-row\">\r\n                <ion-col size=\"12\">\r\n                    <div class=\"rengs\">\r\n                        <p class=\"step_titles\">6 months</p>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                    <div class=\"range-slide-info\">\r\n                        <span class=\"counts_reng\">{{sixMonths}}</span>\r\n                        <div class=\"range-slide\">\r\n                            <p>0%</p>\r\n                            <mat-slider color=\"primary\" (change)=\"valueChanged($event)\" min=\"0\" max=\"100\" step=\"1\" value=\"0\" thumbLabel tickInterval=\"1\"></mat-slider>\r\n                            <p>100%</p>\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row class=\"rating-row\">\r\n                <ion-col size=\"12\">\r\n                    <div class=\"rengs\">\r\n                        <p class=\"step_titles\">One year – two years</p>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                    <div class=\"range-slide-info\">\r\n                        <span class=\"counts_reng\">{{oneYear}}</span>\r\n                        <div class=\"range-slide\">\r\n                            <p>0%</p>\r\n                            <mat-slider color=\"primary\" (change)=\"valueChangedOne($event)\" min=\"0\" max=\"100\" step=\"1\" value=\"0\" thumbLabel tickInterval=\"1\"></mat-slider>\r\n                            <p>100%</p>\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row class=\"rating-row\">\r\n                <ion-col size=\"12\">\r\n                    <div class=\"rengs\">\r\n                        <p class=\"step_titles\">Three – Five years</p>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                    <div class=\"range-slide-info\">\r\n                        <span class=\"counts_reng\">{{threeYear}}</span>\r\n                        <div class=\"range-slide\">\r\n                            <p>0%</p>\r\n                            <mat-slider color=\"primary\" (change)=\"valueChangedThree($event)\" min=\"0\" max=\"100\" step=\"1\" value=\"0\" thumbLabel tickInterval=\"1\"></mat-slider>\r\n                            <p>100%</p>\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row class=\"rating-row\">\r\n                <ion-col size=\"12\">\r\n                    <div class=\"rengs\">\r\n                        <p class=\"step_titles\">Five years</p>\r\n                    </div>\r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                    <div class=\"range-slide-info\">\r\n                        <span class=\"counts_reng\">{{FiveYear}}</span>\r\n                        <div class=\"range-slide\">\r\n                            <p>0%</p>\r\n                            <mat-slider color=\"primary\" (change)=\"valueChangedFive($event)\" min=\"0\" max=\"100\" step=\"1\" value=\"0\" thumbLabel tickInterval=\"1\"></mat-slider>\r\n                            <p>100%</p>\r\n                        </div>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <br/>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <p class=\"step_titles\">Impact of Insulin in people with T2DM </p>\r\n                    <p class=\"step_titles\">Choose three clinically impactful options </p>\r\n\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <ion-item lines=\"none\">\r\n                        <ion-label>Beta Cell preservation</ion-label>\r\n                        <ion-checkbox (ionChange)=\"impactChange($event,'Beta Cell preservation')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <ion-item lines=\"none\">\r\n                        <ion-label>The role of Insulin in reducing <br />Micro albuminuria </ion-label>\r\n                        <ion-checkbox (ionChange)=\"impactChange($event,'The role of Insulin in reducing Micro albuminuria')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <ion-item lines=\"none\">\r\n                        <ion-label>Reducing the inflammatory <br />markers</ion-label>\r\n                        <ion-checkbox (ionChange)=\"impactChange($event,'Reducing the inflammatory markers')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <ion-item lines=\"none\">\r\n                        <ion-label>Reducing the CV risk factors</ion-label>\r\n                        <ion-checkbox (ionChange)=\"impactChange($event,'Reducing the CV risk factors')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <!-- <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label>Micro Angiopathy</ion-label>\r\n            <ion-checkbox [disabled]=\"impacts.length == 3\" (ionChange)=\"impactChange($event,'Micro Angiopathy')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n          </ion-item>\r\n        </ion-col>       \r\n      </ion-row> -->\r\n\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <ion-item lines=\"none\">\r\n                        <ion-label>Reduce Infections</ion-label>\r\n                        <ion-checkbox (ionChange)=\"impactChange($event,'Reduce Infections')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <ion-item lines=\"none\">\r\n                        <ion-label>Neuropathy</ion-label>\r\n                        <ion-checkbox (ionChange)=\"impactChange($event,'Neuropathy')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n                <ion-col size=\"12\">\r\n                    <ion-item lines=\"none\">\r\n                        <ion-label>Reduces CIMT</ion-label>\r\n                        <ion-checkbox (ionChange)=\"impactChange($event,'Reduces CIMT')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                    </ion-item>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <ion-row>\r\n                <ion-col>\r\n                    <p class=\"step_titles\">\r\n                        What factors influence in prescribing Insulin to T2DM patients<br /> Choose two clinically relevant options\r\n                    </p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-item lines=\"none\">\r\n                    <ion-label>\r\n                        Co-morbid conditions\r\n                    </ion-label>\r\n                    <ion-checkbox (ionChange)=\"influenceChange($event,'Co-morbid conditions')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-item lines=\"none\">\r\n                    <ion-label>\r\n                        High risk factors\r\n                    </ion-label>\r\n                    <ion-checkbox (ionChange)=\"influenceChange($event,'High risk factors')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-item lines=\"none\">\r\n                    <ion-label>\r\n                        Infections\r\n                    </ion-label>\r\n                    <ion-checkbox (ionChange)=\"influenceChange($event,'Infections')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-item lines=\"none\">\r\n                    <ion-label>\r\n                        High A1c (>9)\r\n                    </ion-label>\r\n                    <ion-checkbox (ionChange)=\"influenceChange($event,'High A1c (>9)')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                </ion-item>\r\n            </ion-row>\r\n            <div>\r\n                <button mat-button matStepperPrevious class=\"bnt_clas\">Back</button>\r\n                <button (click)=\"submit()\" mat-button class=\"bnt_clas\">Submit</button>\r\n            </div>\r\n        </mat-step>\r\n    </mat-vertical-stepper>\r\n</ion-content>");

/***/ }),

/***/ "hwjs":
/*!*******************************************************!*\
  !*** ./src/app/kdp-suvey/kdp-suvey-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: KdpSuveyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdpSuveyPageRoutingModule", function() { return KdpSuveyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _kdp_suvey_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kdp-suvey.page */ "2PK3");




const routes = [
    {
        path: '',
        component: _kdp_suvey_page__WEBPACK_IMPORTED_MODULE_3__["KdpSuveyPage"]
    }
];
let KdpSuveyPageRoutingModule = class KdpSuveyPageRoutingModule {
};
KdpSuveyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KdpSuveyPageRoutingModule);



/***/ }),

/***/ "iEXZ":
/*!***********************************************!*\
  !*** ./src/app/kdp-suvey/kdp-suvey.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\n.survey_btn {\n  height: 40px;\n}\n\n.rating-row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.range-slide-info {\n  display: flex;\n  align-items: center;\n}\n\n.range-slide {\n  display: flex;\n  align-items: center;\n  width: calc(100% - 45px);\n}\n\n.range-slide p {\n  margin: 0;\n}\n\n.rengs p {\n  margin-bottom: 0;\n}\n\n.counts_reng {\n  background: #0f406b;\n  color: #fff;\n  border-radius: 12px 12px 12px 0px;\n  font-size: 12px;\n  height: 30px;\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 15px;\n}\n\n.mat-slider-horizontal {\n  height: 48px;\n  width: 100%;\n}\n\n.bnt_clas {\n  background: #0f406b;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 12px;\n  margin-right: 10px;\n  padding: 8px 20px;\n  margin-top: 30px;\n}\n\n.check_nones ion-label {\n  white-space: inherit !important;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\nion-label {\n  font-size: 12px !important;\n  line-height: 1.5;\n}\n\np {\n  font-size: 12px;\n  line-height: 1.5;\n}\n\nvideo {\n  width: 100% !important;\n}\n\n.mat-radio-button ~ .mat-radio-button {\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGtkcC1zdXZleS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKIiwiZmlsZSI6ImtkcC1zdXZleS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc3VydmV5X2J0biB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5yYXRpbmctcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5yYW5nZS1zbGlkZS1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmFuZ2Utc2xpZGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDVweCk7XHJcbn1cclxuXHJcbi5yYW5nZS1zbGlkZSBwIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnJlbmdzIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvdW50c19yZW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZjQwNmI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAxMnB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJudF9jbGFzIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZjQwNmI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5jaGVja19ub25lcyBpb24tbGFiZWwge1xyXG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxudmlkZW8ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b25+Lm1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "r5fc":
/*!***********************************************!*\
  !*** ./src/app/kdp-suvey/kdp-suvey.module.ts ***!
  \***********************************************/
/*! exports provided: KdpSuveyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KdpSuveyPageModule", function() { return KdpSuveyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _kdp_suvey_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kdp-suvey-routing.module */ "hwjs");
/* harmony import */ var _kdp_suvey_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kdp-suvey.page */ "2PK3");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");













let KdpSuveyPageModule = class KdpSuveyPageModule {
};
KdpSuveyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _kdp_suvey_routing_module__WEBPACK_IMPORTED_MODULE_5__["KdpSuveyPageRoutingModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__["MatSliderModule"]
        ],
        declarations: [_kdp_suvey_page__WEBPACK_IMPORTED_MODULE_6__["KdpSuveyPage"]]
    })
], KdpSuveyPageModule);



/***/ })

}]);
//# sourceMappingURL=kdp-suvey-kdp-suvey-module.js.map