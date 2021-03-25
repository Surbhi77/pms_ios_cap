(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["begin-begin-module"],{

/***/ "AGQn":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/begin/begin.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"add-entry\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-left\">BEGIN CRF</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"pation_mm\">\r\n    <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n        <mat-step [stepControl]=\"firstFormGroup\">\r\n            <form [formGroup]=\"firstFormGroup\">\r\n                <ng-template matStepLabel>Step 1</ng-template>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <h4 class=\"main_he\">Demographic Data</h4>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Pen Serial No.</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"ion-bottom-padding autos\">\r\n                    <ion-col size=\"2\" class=\"ion-no-padding\">\r\n                        <p>GP.</p>\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" class=\"ion-no-padding\">\r\n                        <ion-input type=\"text\" formControlName=\"panNo\" placeholder=\"Enter Pen Serial No.\"></ion-input>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <mat-label>Date of Visit</mat-label>\r\n                            <input name=\"date_of_visit\" [value]=\"date_of_visit\" formControlName=\"date_of_visit\" matInput [matDatepicker]=\"picker\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>\r\n                        </mat-form-field>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Sex</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-list lines=\"none\">\r\n                    <ion-radio-group formControlName=\"gender\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Male</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"male\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Female</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"female\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </ion-list>\r\n                <!-- <ion-row class=\"ion-no-padding\">\r\n          <ion-col size=\"12\" class=\"ion-no-padding\">\r\n            <p class=\"step_titles\">Date of Birth</p>\r\n          </ion-col>\r\n        </ion-row> -->\r\n                <!-- <mat-form-field class=\"example-full-width\">\r\n          <mat-label>Date of Birth</mat-label>\r\n          <input matInput formControlName=\"date_of_birth\" [matDatepicker]=\"picker1\"  (dateChange)=\"valueChanged($event)\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker1></mat-datepicker>\r\n        </mat-form-field> -->\r\n\r\n\r\n\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Age (Years):</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <ion-input formControlName=\"age\" type=\"number\" placeholder=\"Enter age in years\"></ion-input>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Present Body Weight (Kg):</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-input type=\"text\" formControlName=\"weight\" placeholder=\"Body Weight\" readonly (ionFocus)=\"showPicker()\"></ion-input>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Height (cm):</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-input type=\"text\" formControlName=\"height\" placeholder=\"Height\" readonly (ionFocus)=\"showHeightPicker()\"></ion-input>\r\n                </ion-row>\r\n\r\n\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">BMI (Kg/m2):</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <ion-input readonly formControlName=\"bmi\" placeholder=\"Enter BMI in Kg/m2\"></ion-input>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Education</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <ion-select name=\"education\" formControlName=\"education\">\r\n                            <ion-select-option value=\"none\">None</ion-select-option>\r\n                            <ion-select-option value=\"Primary\">Primary</ion-select-option>\r\n                            <ion-select-option value=\"High school\">High school</ion-select-option>\r\n                            <ion-select-option value=\"Pre-University\">Pre-University</ion-select-option>\r\n                            <ion-select-option value=\"Graduate\">Graduate</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Employment</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <ion-select name=\"employment\" formControlName=\"employment\">\r\n                            <ion-select-option value=\"none\">None</ion-select-option>\r\n                            <ion-select-option value=\"Employed\">Employed</ion-select-option>\r\n                            <ion-select-option value=\"Unemployed\">Unemployed</ion-select-option>\r\n\r\n                        </ion-select>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <div>\r\n                    <button (click)=\"firstSubmit(true)\" *ngIf=\"!completed\" mat-button class=\"bnt_clas\">Save as Draft</button>\r\n                    <button mat-button (click)=\"(!completed)?firstSubmit(false):'javascript:void(0)'\" matStepperNext class=\"bnt_clas\">Next</button>\r\n\r\n                </div>\r\n            </form>\r\n        </mat-step>\r\n\r\n        <!----------------------------------Step 02--------------------------------------------------->\r\n\r\n        <mat-step [stepControl]=\"secondFormGroup\">\r\n            <form [formGroup]=\"secondFormGroup\">\r\n                <ng-template matStepLabel>Step 2</ng-template>\r\n\r\n                <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <h4 class=\"main_he\">Medical History</h4>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-list>\r\n                    <ion-item lines=\"none\">\r\n                        <ion-label>Duration of Diabetes(in years)</ion-label>\r\n                        <ion-select value=\"0\" name=\"diabetes\" formControlName=\"diabetes\">\r\n                            <ion-select-option value=\"0.5\">Less than 1 year</ion-select-option>\r\n                            <ion-select-option *ngFor=\"let index of getOptions(50)\">{{index}}</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-item>\r\n                </ion-list>\r\n\r\n                <ion-item lines=\"none\">\r\n                    <ion-label>Treated for Diabetes since</ion-label>\r\n                    <ion-select value=\"0\" name=\"treated_diabetes\" formControlName=\"treated_diabetes\">\r\n                        <ion-select-option value=\"0.5\">Less than 1 year</ion-select-option>\r\n                        <ion-select-option *ngFor=\"let index of getOptions(50)\">{{index}}</ion-select-option>\r\n\r\n                    </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Family History of Diabetes</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-list>\r\n                    <ion-radio-group name=\"history_of_diabetes\" formControlName=\"history_of_diabetes\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Yes</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"1\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>No</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"0\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </ion-list>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Hypertension</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-list>\r\n                    <ion-radio-group name=\"hypertension\" formControlName=\"hypertension\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Yes</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"1\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>No</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"0\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </ion-list>\r\n\r\n                <ion-item lines=\"none\">\r\n                    <ion-label>Duration of Hypertension(in years)</ion-label>\r\n                    <ion-select value=\"0\" name=\"duration_hypertension\" formControlName=\"duration_hypertension\">\r\n                        <ion-select-option value=\"0.5\">Less than 1 year</ion-select-option>\r\n                        <ion-select-option *ngFor=\"let index of getOptions(50)\">{{index}}</ion-select-option>\r\n                    </ion-select>\r\n                </ion-item>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Blood pressure (mmHg) Systolic </p>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                    <ion-input type=\"text\" formControlName=\"systolicpicker\" placeholder=\"Blood pressure\" readonly (ionFocus)=\"showSystolicPicker()\"></ion-input>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Blood pressure (mmHg) Diastolic</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-input type=\"text\" formControlName=\"diastolicpicker\" placeholder=\"Blood pressure\" readonly (ionFocus)=\"showDiastolicPicker()\"></ion-input>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Smoking</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-list>\r\n                    <ion-radio-group name=\"smoking\" formControlName=\"smoking\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Yes</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"1\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>No</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"0\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </ion-list>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Alcohol</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-list>\r\n                    <ion-radio-group name=\"alcohol\" formControlName=\"alcohol\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Yes</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"1\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>No</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"0\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </ion-list>\r\n\r\n\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Complications and Co morbid medical conditions:</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-list>\r\n                    <ion-radio-group (ionChange)=\"coMorbid($event)\" name=\"comorbid_medical\" formControlName=\"comorbid_medical\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Yes</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"yes\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>No</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"no\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </ion-list>\r\n\r\n                <div *ngIf=\"coMorbidDesc\">\r\n                    <ion-row class=\"ion-no-padding\">\r\n                        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Hypertension</ion-label>\r\n                                <ion-checkbox (ionChange)=\"showHypertension($event)\" color=\"primary\" name=\"comorbid_hypertension\" formControlName=\"comorbid_hypertension\" slot=\"start\"></ion-checkbox>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ng-container *ngIf=showHypertensionDiv>\r\n                        <ion-row>\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Duration (Years)</ion-label>\r\n                                    <ion-select value=\"0\" name=\"comorbid_hypertension_duration\" formControlName=\"comorbid_hypertension_duration\">\r\n                                        <ion-select-option value=\"0.5\">Less than 1 year</ion-select-option>\r\n                                        <ion-select-option *ngFor=\"let index of getOptions(50)\">{{index}}</ion-select-option>\r\n                                    </ion-select>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <p class=\"step_titles\">Medication</p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-list>\r\n                            <ion-radio-group name=\"comorbid_hypertension_medication\" formControlName=\"comorbid_hypertension_medication\">\r\n                                <ion-row class=\"ion-no-padding\">\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>Yes</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"yes\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>No</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"no\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-radio-group>\r\n                        </ion-list>\r\n                    </ng-container>\r\n\r\n\r\n                    <ion-row class=\"ion-no-padding\">\r\n                        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Dyslipidemia</ion-label>\r\n                                <ion-checkbox color=\"primary\" (ionChange)=\"dislipidemia($event)\" name=\"comorbid_Dyslipidemia\" formControlName=\"comorbid_Dyslipidemia\" slot=\"start\"></ion-checkbox>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ng-container *ngIf=\"showDyslipidemia\">\r\n                        <ion-row>\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Duration (Years)</ion-label>\r\n                                    <ion-select value=\"0\" name=\"comorbid_Dyslipidemia_duration\" formControlName=\"comorbid_Dyslipidemia_duration\">\r\n                                        <ion-select-option value=\"0.5\">Less than 1 year</ion-select-option>\r\n                                        <ion-select-option *ngFor=\"let index of getOptions(50)\">{{index}}</ion-select-option>\r\n                                    </ion-select>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <p class=\"step_titles\">Medication</p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-list>\r\n                            <ion-radio-group name=\"comorbid_Dyslipidemia_medication\" formControlName=\"comorbid_Dyslipidemia_medication\">\r\n                                <ion-row class=\"ion-no-padding\">\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>Yes</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"yes\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>No</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"no\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-radio-group>\r\n                        </ion-list>\r\n                    </ng-container>\r\n\r\n\r\n                    <ion-row class=\"ion-no-padding\">\r\n                        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Coronary Artery Disease</ion-label>\r\n                                <ion-checkbox (ionChange)=\"coronaryArtery($event)\" color=\"primary\" name=\"comorbid_Artery\" formControlName=\"comorbid_Artery\" slot=\"start\"></ion-checkbox>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ng-container *ngIf=\"coronary\">\r\n                        <ion-row>\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Duration (Years)</ion-label>\r\n                                    <ion-select value=\"0\" name=\"comorbid_Artery_duration\" formControlName=\"comorbid_Artery_duration\">\r\n                                        <ion-select-option value=\"0.5\">Less than 1 year</ion-select-option>\r\n                                        <ion-select-option *ngFor=\"let index of getOptions(50)\">{{index}}</ion-select-option>\r\n                                    </ion-select>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <p class=\"step_titles\">Medication</p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-list>\r\n                            <ion-radio-group name=\"comorbid_Artery_medication\" formControlName=\"comorbid_Artery_medication\">\r\n                                <ion-row class=\"ion-no-padding\">\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>Yes</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"yes\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>No</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"no\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-radio-group>\r\n                        </ion-list>\r\n                    </ng-container>\r\n\r\n\r\n                    <ion-row class=\"ion-no-padding\">\r\n                        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Stroke</ion-label>\r\n                                <ion-checkbox (ionChange)=\"showStroke($event)\" color=\"primary\" name=\"comorbid_Stroke\" formControlName=\"comorbid_Stroke\" slot=\"start\"></ion-checkbox>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ng-container *ngIf=\"stroke\">\r\n                        <ion-row>\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Duration (Years)</ion-label>\r\n                                    <ion-select value=\"0\" name=\"comorbid_Stroke_duration\" formControlName=\"comorbid_Stroke_duration\">\r\n                                        <ion-select-option value=\"0.5\">Less than 1 year</ion-select-option>\r\n                                        <ion-select-option *ngFor=\"let index of getOptions(50)\">{{index}}</ion-select-option>\r\n                                    </ion-select>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <p class=\"step_titles\">Medication</p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-list>\r\n                            <ion-radio-group name=\"comorbid_Stroke_medication\" formControlName=\"comorbid_Stroke_medication\">\r\n                                <ion-row class=\"ion-no-padding\">\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>Yes</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"yes\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>No</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"no\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-radio-group>\r\n                        </ion-list>\r\n                    </ng-container>\r\n\r\n\r\n\r\n\r\n                    <ion-row class=\"ion-no-padding\">\r\n                        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Neuropathy</ion-label>\r\n                                <ion-checkbox (ionChange)=\"changeNeuropathy($event)\" color=\"primary\" name=\"comorbid_Neuropathy\" formControlName=\"comorbid_Neuropathy\" slot=\"start\"></ion-checkbox>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ng-container *ngIf=\"showNeuro\">\r\n                        <ion-row>\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Duration (Years)</ion-label>\r\n                                    <ion-select value=\"0\" name=\"comorbid_Neuropathy_duration\" formControlName=\"comorbid_Neuropathy_duration\">\r\n                                        <ion-select-option value=\"0.5\">Less than 1 year</ion-select-option>\r\n                                        <ion-select-option *ngFor=\"let index of getOptions(50)\">{{index}}</ion-select-option>\r\n                                    </ion-select>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <p class=\"step_titles\">Medication</p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-list>\r\n                            <ion-radio-group name=\"comorbid_Neuropathy_medication\" formControlName=\"comorbid_Neuropathy_medication\">\r\n                                <ion-row class=\"ion-no-padding\">\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>Yes</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"yes\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>No</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"no\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-radio-group>\r\n                        </ion-list>\r\n                    </ng-container>\r\n\r\n\r\n\r\n                    <ion-row class=\"ion-no-padding\">\r\n                        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Retinopathy</ion-label>\r\n                                <ion-checkbox (ionChange)=\"showRetinopathy($event)\" color=\"primary\" name=\"comorbid_Retinopathy\" formControlName=\"comorbid_Retinopathy\" slot=\"start\"></ion-checkbox>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ng-container *ngIf=\"showRetino\">\r\n                        <ion-row>\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Duration (Years)</ion-label>\r\n                                    <ion-select value=\"0\" name=\"comorbid_Retinopathy_duration\" formControlName=\"comorbid_Retinopathy_duration\">\r\n                                        <ion-select-option value=\"0.5\">Less than 1 year</ion-select-option>\r\n                                        <ion-select-option *ngFor=\"let index of getOptions(50)\">{{index}}</ion-select-option>\r\n                                    </ion-select>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <p class=\"step_titles\">Medication</p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-list>\r\n                            <ion-radio-group name=\"comorbid_Retinopathy_medication\" formControlName=\"comorbid_Retinopathy_medication\">\r\n                                <ion-row class=\"ion-no-padding\">\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>Yes</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"yes\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>No</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"no\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-radio-group>\r\n                        </ion-list>\r\n                    </ng-container>\r\n\r\n\r\n\r\n                    <ion-row class=\"ion-no-padding\">\r\n                        <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                            <ion-item lines=\"none\">\r\n                                <ion-label>Nephropathy</ion-label>\r\n                                <ion-checkbox (ionChange)=\"showNephropathy($event)\" color=\"primary\" name=\"comorbid_Nephropathy\" formControlName=\"comorbid_Nephropathy\" slot=\"start\"></ion-checkbox>\r\n                            </ion-item>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ng-container *ngIf=\"showNephro\">\r\n                        <ion-row>\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Duration (Years)</ion-label>\r\n                                    <ion-select value=\"0\" name=\"comorbid_Nephropathy_duration\" formControlName=\"comorbid_Nephropathy_duration\">\r\n                                        <ion-select-option value=\"0.5\">Less than 1 year</ion-select-option>\r\n                                        <ion-select-option *ngFor=\"let index of getOptions(50)\">{{index}}</ion-select-option>\r\n                                    </ion-select>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                                <p class=\"step_titles\">Medication</p>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-list>\r\n                            <ion-radio-group name=\"comorbid_Nephropathy_medication\" formControlName=\"comorbid_Nephropathy_medication\">\r\n                                <ion-row class=\"ion-no-padding\">\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>Yes</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"yes\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                    <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                        <ion-item lines=\"none\">\r\n                                            <ion-label>No</ion-label>\r\n                                            <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"no\"></ion-radio>\r\n                                        </ion-item>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-radio-group>\r\n                        </ion-list>\r\n                    </ng-container>\r\n\r\n                </div>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Anti-Diabetes Medication (Except Insulin):</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-list>\r\n                    <ion-item>\r\n                        <ion-label>Biguanides</ion-label>\r\n                        <ion-checkbox [disabled]=\"completed\" [checked]=\"checkAntiDiabetes('Biguanides')\" (ionChange)=\"antiDiabetes($event,'Biguanides')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-checkbox [disabled]=\"completed\" [checked]=\"checkAntiDiabetes('Sulphonylureas')\" (ionChange)=\"antiDiabetes($event,'Sulphonylureas')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                        <ion-label>Sulphonylureas</ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-checkbox [disabled]=\"completed\" [checked]=\"checkAntiDiabetes('SGLT2 Inhibitors')\" (ionChange)=\"antiDiabetes($event,'SGLT2 Inhibitors')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                        <ion-label>SGLT2 Inhibitors</ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-checkbox [disabled]=\"completed\" [checked]=\"checkAntiDiabetes('Thiazolidendiones')\" (ionChange)=\"antiDiabetes($event,'Thiazolidendiones')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                        <ion-label>Thiazolidendiones</ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-checkbox [disabled]=\"completed\" [checked]=\"checkAntiDiabetes('GLP Analogues')\" (ionChange)=\"antiDiabetes($event,'GLP Analogues')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                        <ion-label>GLP Analogues</ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-checkbox [disabled]=\"completed\" [checked]=\"checkAntiDiabetes('DPP4 Inhibitors')\" (ionChange)=\"antiDiabetes($event,'DPP4 Inhibitors')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                        <ion-label>DPP4 Inhibitors</ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-checkbox [disabled]=\"completed\" [checked]=\"checkAntiDiabetes('Double Drug Fixed Dose Combination')\" (ionChange)=\"antiDiabetes($event,'Double Drug Fixed Dose Combination')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                        <ion-label>Double Drug Fixed Dose <br /> Combination</ion-label>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-checkbox [disabled]=\"completed\" [checked]=\"checkAntiDiabetes('Triple Drug Fixed Dose Combination')\" (ionChange)=\"antiDiabetes($event,'Triple Drug Fixed Dose Combinations')\" color=\"primary\" slot=\"start\"></ion-checkbox>\r\n                        <ion-label>Triple Drug Fixed Dose <br /> Combinations</ion-label>\r\n                    </ion-item>\r\n                </ion-list>\r\n\r\n                <div>\r\n                    <button mat-button matStepperPrevious class=\"bnt_clas\">Back</button>\r\n                    <button *ngIf=\"!completed\" (click)=\"secondSubmit(true)\" mat-button class=\"bnt_clas\">Save as Draft</button>\r\n                    <button (click)=\"(!completed)?secondSubmit(false):'javascript:void(0)'\" mat-button matStepperNext class=\"bnt_clas\">Next</button>\r\n                </div>\r\n            </form>\r\n        </mat-step>\r\n\r\n        <!---------------------------------Step 03----------------------------------------->\r\n\r\n        <mat-step [stepControl]=\"thirdFormGroup\">\r\n            <form [formGroup]=\"thirdFormGroup\">\r\n                <ng-template matStepLabel>Step 3</ng-template>\r\n                <!------------------------------------------------------------->\r\n\r\n                <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <h4 class=\"main_he\">Blood Investigations</h4>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Fasting Plasma Glucose (FPG)</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-input type=\"text\" formControlName=\"FastingPlasma\" placeholder=\"Fasting Plasma\" readonly (ionFocus)=\"showFastingPlasmaPicker()\"></ion-input>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Postprandial Plasma Glucose (PPG)</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-input type=\"text\" formControlName=\"PostprandialPlasma\" placeholder=\"Postprandial Plasma\" readonly (ionFocus)=\"showPostprandialPlasmaPicker()\"></ion-input>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Glycosylated Hemoglobin (HbA1c) </p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\">\r\n                        <ion-input type=\"text\" formControlName=\"Glycosylated\" placeholder=\"Glycosylated Hemoglobin (HbA1c)\" readonly (ionFocus)=\"showHbac1()\"></ion-input>\r\n                        <!-- <ion-select name=\"Glycosylated\" formControlName=\"Glycosylated\">\r\n            <ion-select-option *ngFor=\"let index of getglycosylated(20)\">{{index}}</ion-select-option>\r\n              \r\n            </ion-select> -->\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">HbA1c test performed in Lab(HPLC)</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-list>\r\n                    <ion-radio-group name=\"HbA1c\" formControlName=\"HbA1c\">\r\n                        <ion-row class=\"ion-no-padding\">\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Yes</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"1\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                            <ion-col size=\"6\" class=\"ion-no-padding\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>No</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"0\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                    </ion-radio-group>\r\n                </ion-list>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">S.Creatinine (mg/dl ) </p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"12\">\r\n                        <ion-select name=\"Creatinine\" formControlName=\"Creatinine\">\r\n                            <ion-select-option value=\"\">Choose Creatinine Value </ion-select-option>\r\n                            <ion-select-option value=\"0\">None</ion-select-option>\r\n                            <ion-select-option [value]=\"index\" *ngFor=\"let index of getCreatinine()\">{{index}}</ion-select-option>\r\n                        </ion-select>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <div>\r\n                    <button mat-button matStepperPrevious class=\"bnt_clas\">Back</button>\r\n                    <button *ngIf=\"!completed\" (click)=\"thirdFormSubmit(true)\" mat-button class=\"bnt_clas\">Save as Draft</button>\r\n                    <button (click)=\"(!completed)?thirdFormSubmit(false):'javascript:void(0)'\" mat-button matStepperNext class=\"bnt_clas\">Next</button>\r\n                </div>\r\n            </form>\r\n        </mat-step>\r\n        <!---------------------->\r\n        <mat-step [stepControl]=\"fourthFormGroup\">\r\n            <form [formGroup]=\"fourthFormGroup\">\r\n                <ng-template matStepLabel>Step 4</ng-template>\r\n\r\n                <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <h4 class=\"main_he\">Insulinisation</h4>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <p class=\"step_titles\">Dose of Insulin Glargine at initiation</p>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <ion-list>\r\n                            <ion-radio-group name=\"Dose_of_Insulin\" formControlName=\"Dose_of_Insulin\">\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>0.1U/kg body weight</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"0.1U/kg body weight\"></ion-radio>\r\n                                </ion-item>\r\n\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>0.2U/kg body weight</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"0.2U/kg body weight\"></ion-radio>\r\n                                </ion-item>\r\n\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>10 U</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"10 U\"></ion-radio>\r\n                                </ion-item>\r\n\r\n                                <ion-item lines=\"none\">\r\n                                    <ion-label>Other</ion-label>\r\n                                    <ion-radio [disabled]=\"completed\" slot=\"start\" value=\"Other\"></ion-radio>\r\n                                </ion-item>\r\n                            </ion-radio-group>\r\n                        </ion-list>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n\r\n                <ion-row class=\"ion-no-padding\">\r\n                    <ion-col size=\"12\" class=\"ion-no-padding\">\r\n                        <ion-item lines=\"none\">\r\n                            <ion-label>Insulin Glargine (In Units)</ion-label>\r\n                            <ion-checkbox (ionChange)=\"changeGlargine($event)\" color=\"primary\" [disabled]=\"completed\" [checked]=\"completed && showHpFields4\" name=\"Insulin_Glargine\" slot=\"start\"></ion-checkbox>\r\n                            <!-- <p class=\"text-danger\" *ngIf=\"glargineinsulinrequired\">Please select Insulin Glargine </p> -->\r\n                        </ion-item>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <div *ngIf=\"showHpFields4\">\r\n                    <ion-list>\r\n                        <ion-item>\r\n                            <ion-label>Breakfast (IU)</ion-label>\r\n                            <ion-select name=\"Insulin_Glargine_Breakfast\" formControlName=\"Insulin_Glargine_Breakfast\" (ionChange)=\"select1($event,'Insulin_Glargine_Breakfast')\">\r\n                                <ion-select-option value=\"0\">None</ion-select-option>\r\n                                <ion-select-option *ngFor=\"let index of gethuman(198)\">{{index}}</ion-select-option>\r\n                                <!-- <ion-select-option value=\"3\">3</ion-select-option>\r\n              <ion-select-option value=\"200\">200</ion-select-option> -->\r\n                            </ion-select>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label>Lunch (IU)</ion-label>\r\n                            <ion-select name=\"Insulin_Glargine_Lunch\" formControlName=\"Insulin_Glargine_Lunch\" (ionChange)=\"select1($event,'Insulin_Glargine_Lunch')\">\r\n                                <ion-select-option value=\"0\">None</ion-select-option>\r\n                                <ion-select-option [value]=\"index\" *ngFor=\"let index of gethuman(198)\">{{index}}</ion-select-option>\r\n                            </ion-select>\r\n                        </ion-item>\r\n                        <ion-item>\r\n                            <ion-label>Dinner (IU)</ion-label>\r\n                            <ion-select name=\"Insulin_Glargine_Dinner\" formControlName=\"Insulin_Glargine_Dinner\" (ionChange)=\"select1($event,'Insulin_Glargine_Dinner')\">\r\n                                <ion-select-option value=\"0\">None</ion-select-option>\r\n                                <ion-select-option *ngFor=\"let index of gethuman(198)\">{{index}}</ion-select-option>\r\n                                <!-- <ion-select-option value=\"3\">3</ion-select-option>\r\n              <ion-select-option value=\"200\">200</ion-select-option> -->\r\n                            </ion-select>\r\n                        </ion-item>\r\n                    </ion-list>\r\n                </div>\r\n                <div>\r\n                    <!-- <button mat-button matStepperPrevious class=\"bnt_clas\">Back</button> -->\r\n                    <button mat-button matStepperPrevious *ngIf=\"!completed\" class=\"bnt_clas\">Back</button>\r\n                    <button mat-button matStepperPrevious *ngIf=\"completed\" (click)=\"back()\" class=\"bnt_clas\">Back</button>\r\n                    <button *ngIf=\"!completed\" (click)=\"fourthFormSubmit()\" mat-button class=\"bnt_clas\">Submit</button>\r\n                </div>\r\n            </form>\r\n        </mat-step>\r\n    </mat-horizontal-stepper>\r\n</ion-content>");

/***/ }),

/***/ "L236":
/*!***************************************!*\
  !*** ./src/app/begin/begin.module.ts ***!
  \***************************************/
/*! exports provided: BeginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginPageModule", function() { return BeginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _begin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./begin-routing.module */ "dIH+");
/* harmony import */ var _begin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./begin.page */ "taP+");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");












let BeginPageModule = class BeginPageModule {
};
BeginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridListModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _begin_routing_module__WEBPACK_IMPORTED_MODULE_5__["BeginPageRoutingModule"]
        ],
        declarations: [_begin_page__WEBPACK_IMPORTED_MODULE_6__["BeginPage"]]
    })
], BeginPageModule);



/***/ }),

/***/ "XeHh":
/*!***************************************!*\
  !*** ./src/app/begin/begin.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-size: 13px !important;\n  line-height: 1.5;\n}\n\np {\n  font-size: 13px;\n  line-height: 1.5;\n  padding-left: 16px;\n}\n\nion-input {\n  font-size: 13px !important;\n}\n\n.bnt_clas {\n  background: #0f406b;\n  color: #fff;\n  border-radius: 50px;\n  font-size: 12px;\n  margin-right: 10px;\n  padding: 8px 20px;\n  margin-top: 30px;\n}\n\n.pation_mm ion-list {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\n.pation_mm ion-item {\n  --background: transparent !important;\n  background: transparent !important;\n  border-bottom: 1px solid #cccccc70;\n}\n\n.pation_mm ion-list-header {\n  --background: transparent !important;\n  background: transparent !important;\n}\n\n.mat-form-field {\n  display: block;\n}\n\nion-input input {\n  padding-left: 0 !important;\n}\n\n.autos ion-col {\n  margin: auto;\n}\n\nmat-form-field {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJlZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSwwQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkU7RUFDRSxvQ0FBQTtFQUNBLGtDQUFBO0FBS0o7O0FBSEE7RUFDSSxvQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7QUFNSjs7QUFKQTtFQUNJLG9DQUFBO0VBQ0Esa0NBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7QUFRSjs7QUFOQTtFQUNJLDBCQUFBO0FBU0o7O0FBUEE7RUFDSSxZQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBV0oiLCJmaWxlIjoiYmVnaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59IFxyXG5pb24taW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJudF9jbGFzIHtcclxuICAgIGJhY2tncm91bmQ6ICMwZjQwNmI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5wYXRpb25fbW0gaW9uLWxpc3Qge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4ucGF0aW9uX21tIGlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjNzA7XHJcbn1cclxuLnBhdGlvbl9tbSBpb24tbGlzdC1oZWFkZXJ7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmlvbi1pbnB1dCBpbnB1dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4uYXV0b3MgaW9uLWNvbCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxubWF0LWZvcm0tZmllbGQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "dIH+":
/*!***********************************************!*\
  !*** ./src/app/begin/begin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: BeginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginPageRoutingModule", function() { return BeginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _begin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./begin.page */ "taP+");




const routes = [
    {
        path: '',
        component: _begin_page__WEBPACK_IMPORTED_MODULE_3__["BeginPage"]
    }
];
let BeginPageRoutingModule = class BeginPageRoutingModule {
};
BeginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BeginPageRoutingModule);



/***/ }),

/***/ "taP+":
/*!*************************************!*\
  !*** ./src/app/begin/begin.page.ts ***!
  \*************************************/
/*! exports provided: BeginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginPage", function() { return BeginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_begin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./begin.page.html */ "AGQn");
/* harmony import */ var _begin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./begin.page.scss */ "XeHh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../common/helper */ "DuXP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../common/api.service */ "uMkL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "e8h1");











let BeginPage = class BeginPage {
    constructor(pickerController, storage, activatedRoute, apiService, router, helper, _formBuilder) {
        this.pickerController = pickerController;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.router = router;
        this.helper = helper;
        this._formBuilder = _formBuilder;
        this.isLinear = true;
        this.showComplicationsDesc = false;
        this.coMorbidDesc = false;
        this.efficacyDesc = false;
        this.showHpFields = false;
        this.showHpFields1 = false;
        this.showHpFields2 = false;
        this.showHpFields3 = false;
        this.showHpFields4 = false;
        this.oneSelected = false;
        this.showHypertensionDiv = false;
        this.showDyslipidemia = false;
        this.coronary = false;
        this.stroke = false;
        this.showNeuro = false;
        this.showRetino = false;
        this.showNephro = false;
        this.diabetesMedi = [];
        this.diabetesMedi1 = [];
        this.glargineval = [];
        //weight
        this.simpleColumns = [
            {
                name: 'col1',
                options: [
                    { text: '0', value: '0' },
                    { text: '1', value: '1' },
                    { text: '2', value: '2' },
                    { text: '3', value: '3' },
                    { text: '4', value: '4' },
                    { text: '5', value: '5' },
                    { text: '6', value: '6' },
                    { text: '7', value: '7' },
                    { text: '8', value: '8' },
                    { text: '9', value: '9' }
                ]
            }, {
                name: 'col2',
                options: [
                    { text: '0', value: '0' },
                    { text: '1', value: '1' },
                    { text: '2', value: '2' },
                    { text: '3', value: '3' },
                    { text: '4', value: '4' },
                    { text: '5', value: '5' },
                    { text: '6', value: '6' },
                    { text: '7', value: '7' },
                    { text: '8', value: '8' },
                    { text: '9', value: '9' }
                ]
            }, {
                name: 'col3',
                options: [
                    { text: '0', value: '0' },
                    { text: '1', value: '1' },
                    { text: '2', value: '2' },
                    { text: '3', value: '3' },
                    { text: '4', value: '4' },
                    { text: '5', value: '5' },
                    { text: '6', value: '6' },
                    { text: '7', value: '7' },
                    { text: '8', value: '8' },
                    { text: '9', value: '9' }
                ]
            }
        ];
        this.glycosylatedColumns = [
            {
                name: 'col1',
                options: [
                    { text: '0', value: '0' },
                    { text: '1', value: '1' },
                    { text: '2', value: '2' },
                    { text: '3', value: '3' },
                    { text: '4', value: '4' },
                    { text: '5', value: '5' },
                    { text: '6', value: '6' },
                    { text: '7', value: '7' },
                    { text: '8', value: '8' },
                    { text: '9', value: '9' },
                    { text: '10', value: '10' },
                    { text: '11', value: '11' },
                    { text: '12', value: '12' },
                    { text: '13', value: '13' },
                    { text: '14', value: '14' },
                    { text: '15', value: '15' },
                    { text: '16', value: '16' },
                    { text: '17', value: '17' },
                    { text: '18', value: '18' },
                    { text: '19', value: '19' },
                    { text: '20', value: '20' }
                ]
            },
            {
                name: 'col2',
                options: [
                    { text: '.', value: '.' }
                ]
            },
            {
                name: 'col3',
                options: [
                    { text: '0', value: '0' },
                    { text: '1', value: '1' },
                    { text: '2', value: '2' },
                    { text: '3', value: '3' },
                    { text: '4', value: '4' },
                    { text: '5', value: '5' },
                    { text: '6', value: '6' },
                    { text: '7', value: '7' },
                    { text: '8', value: '8' },
                    { text: '9', value: '9' },
                    { text: '10', value: '10' }
                ]
            }
        ];
    }
    showHbac1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // alert("vahjg")
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            console.log(value);
                        }
                    }
                ],
                columns: this.glycosylatedColumns
            };
            let self = this;
            let picker = yield this.pickerController.create(options);
            picker.onDidDismiss().then(data => {
                console.log(data);
                if (data && data.data && data.data.col1 && data.data.col2 && data.data.col3) {
                    var selection = data.data.col1.value + data.data.col2.value + data.data.col3.value;
                    self.thirdFormGroup.patchValue({
                        "Glycosylated": selection
                    });
                }
            });
            picker.present();
        });
    }
    //for weight
    showPicker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            console.log(value);
                        }
                    }
                ],
                columns: this.simpleColumns
            };
            let self = this;
            let picker = yield this.pickerController.create(options);
            picker.onDidDismiss().then(data => {
                if (data && data.data && data.data.col1 && data.data.col2 && data.data.col3) {
                    var selection = data.data.col1.value + data.data.col2.value + data.data.col3.value;
                    if (+selection >= 40 && +selection <= 150) {
                        self.firstFormGroup.patchValue({
                            "weight": selection
                        });
                        self.firstFormGroup.updateValueAndValidity();
                    }
                    else {
                        alert("value should be between 40 and 150");
                        self.firstFormGroup.patchValue({
                            "weight": ''
                        });
                        self.firstFormGroup.updateValueAndValidity();
                        selection = 0;
                    }
                }
                else {
                    self.firstFormGroup.patchValue({
                        "weight": ''
                    });
                    self.firstFormGroup.updateValueAndValidity();
                    selection = 0;
                }
                if (self.firstFormGroup.value.height && self.firstFormGroup.value.height != '') {
                    var height = self.firstFormGroup.value.height;
                    if (height != '') {
                        var bmi = ((selection / height / height) * 10000).toFixed(1);
                        console.log(bmi);
                        self.firstFormGroup.patchValue({ "bmi": bmi });
                        self.firstFormGroup.updateValueAndValidity();
                    }
                }
                else {
                    self.helper.presentToast("Please enter height");
                }
                picker.columns.forEach(col => {
                    col.options.forEach(el => {
                        delete el.selected;
                        delete el.duration;
                        delete el.transform;
                    });
                });
            });
            picker.present();
        });
    }
    ageFromDateOfBirthday(dateOfBirth) {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    showStroke($event) {
        if ($event.target.checked) {
            this.stroke = true;
            this.secondFormGroup.controls['comorbid_Stroke_duration'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Stroke_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Stroke_medication'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Stroke_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
        else {
            this.stroke = false;
            this.secondFormGroup.controls['comorbid_Stroke_duration'].clearValidators();
            this.secondFormGroup.controls['comorbid_Stroke_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Stroke_medication'].clearValidators();
            this.secondFormGroup.controls['comorbid_Stroke_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
    }
    changeNeuropathy($event) {
        if ($event.target.checked) {
            this.showNeuro = true;
            this.secondFormGroup.controls['comorbid_Neuropathy_duration'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Neuropathy_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Neuropathy_medication'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Neuropathy_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
        else {
            this.showNeuro = false;
            this.secondFormGroup.controls['comorbid_Neuropathy_duration'].clearValidators();
            this.secondFormGroup.controls['comorbid_Neuropathy_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Neuropathy_medication'].clearValidators();
            this.secondFormGroup.controls['comorbid_Neuropathy_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
    }
    showRetinopathy($event) {
        if ($event.target.checked) {
            this.showRetino = true;
            this.secondFormGroup.controls['comorbid_Retinopathy_duration'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Retinopathy_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Retinopathy_medication'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Retinopathy_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
        else {
            this.showRetino = false;
            this.secondFormGroup.controls['comorbid_Retinopathy_duration'].clearValidators();
            this.secondFormGroup.controls['comorbid_Retinopathy_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Retinopathy_medication'].clearValidators();
            this.secondFormGroup.controls['comorbid_Retinopathy_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
    }
    showNephropathy($event) {
        if ($event.target.checked) {
            this.showNephro = true;
            this.secondFormGroup.controls['comorbid_Nephropathy_duration'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Nephropathy_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Nephropathy_medication'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Nephropathy_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
        else {
            this.showNephro = false;
            this.secondFormGroup.controls['comorbid_Nephropathy_duration'].clearValidators();
            this.secondFormGroup.controls['comorbid_Nephropathy_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Nephropathy_medication'].clearValidators();
            this.secondFormGroup.controls['comorbid_Nephropathy_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
    }
    coronaryArtery($event) {
        if ($event.target.checked) {
            this.coronary = true;
            this.secondFormGroup.controls['comorbid_Artery_duration'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Artery_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Artery_medication'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Artery_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
        else {
            this.coronary = false;
            this.secondFormGroup.controls['comorbid_Artery_duration'].clearValidators();
            this.secondFormGroup.controls['comorbid_Artery_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Artery_medication'].clearValidators();
            this.secondFormGroup.controls['comorbid_Artery_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
    }
    dislipidemia($event) {
        if ($event.target.checked) {
            this.showDyslipidemia = true;
            this.secondFormGroup.controls['comorbid_Dyslipidemia_duration'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Dyslipidemia_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Dyslipidemia_medication'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_Dyslipidemia_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
        else {
            this.showDyslipidemia = false;
            this.secondFormGroup.controls['comorbid_Dyslipidemia_duration'].clearValidators();
            this.secondFormGroup.controls['comorbid_Dyslipidemia_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_Dyslipidemia_medication'].clearValidators();
            this.secondFormGroup.controls['comorbid_Dyslipidemia_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
    }
    showHypertension(event) {
        if (event.target.checked) {
            this.showHypertensionDiv = true;
            this.secondFormGroup.controls['comorbid_hypertension_duration'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_hypertension_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_hypertension_medication'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.secondFormGroup.controls['comorbid_hypertension_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
        else {
            this.showHypertensionDiv = false;
            this.secondFormGroup.controls['comorbid_hypertension_duration'].clearValidators();
            this.secondFormGroup.controls['comorbid_hypertension_duration'].updateValueAndValidity();
            this.secondFormGroup.controls['comorbid_hypertension_medication'].clearValidators();
            this.secondFormGroup.controls['comorbid_hypertension_medication'].updateValueAndValidity();
            this.secondFormGroup.updateValueAndValidity();
        }
    }
    valueChanged(event) {
        // console.log(event.value);
        // console.log(this.ageFromDateOfBirthday(event.value));
        var age = this.ageFromDateOfBirthday(event.value);
        this.firstFormGroup.patchValue({
            "age": age
        });
        this.firstFormGroup.updateValueAndValidity();
    }
    //for height
    showHeightPicker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            console.log(value);
                        }
                    }
                ],
                columns: this.simpleColumns
            };
            let self = this;
            let picker = yield this.pickerController.create(options);
            picker.onDidDismiss().then(data => {
                var selection = data.data.col1.value + data.data.col2.value + data.data.col3.value;
                if (selection >= 120 && selection <= 200) {
                    self.firstFormGroup.patchValue({
                        "height": selection
                    });
                    self.firstFormGroup.updateValueAndValidity();
                }
                else {
                    alert("value selection must be between 120 to  200");
                    self.firstFormGroup.patchValue({
                        "height": ''
                    });
                    self.firstFormGroup.updateValueAndValidity();
                    selection = 0;
                }
                if (self.firstFormGroup.value.weight && self.firstFormGroup.value.weight != '') {
                    var weight = self.firstFormGroup.value.weight;
                    if (selection != '') {
                        var bmi = ((weight / selection / selection) * 10000).toFixed(1);
                        console.log(bmi);
                        self.firstFormGroup.patchValue({ "bmi": bmi });
                        self.firstFormGroup.updateValueAndValidity();
                    }
                }
                else {
                    self.helper.presentToast("Please enter weight");
                }
                picker.columns.forEach(col => {
                    col.options.forEach(el => {
                        delete el.selected;
                        delete el.duration;
                        delete el.transform;
                    });
                });
            });
            picker.present();
        });
    }
    //for Systolic Picker
    showSystolicPicker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            console.log(value);
                        }
                    }
                ],
                columns: this.simpleColumns
            };
            let self = this;
            let picker = yield this.pickerController.create(options);
            picker.onDidDismiss().then(data => {
                var selection = data.data.col1.value + data.data.col2.value + data.data.col3.value;
                if (selection >= 40 && selection <= 400) {
                    self.secondFormGroup.patchValue({
                        "systolicpicker": selection
                    });
                    self.secondFormGroup.updateValueAndValidity();
                }
                else {
                    alert("value selection must be between 40 to  400");
                    self.secondFormGroup.patchValue({
                        "systolicpicker": ''
                    });
                    self.secondFormGroup.updateValueAndValidity();
                }
                picker.columns.forEach(col => {
                    col.options.forEach(el => {
                        delete el.selected;
                        delete el.duration;
                        delete el.transform;
                    });
                });
            });
            picker.present();
        });
    }
    //for Systolic Picker
    showDiastolicPicker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            console.log(value);
                        }
                    }
                ],
                columns: this.simpleColumns
            };
            let self = this;
            let picker = yield this.pickerController.create(options);
            picker.onDidDismiss().then(data => {
                var selection = data.data.col1.value + data.data.col2.value + data.data.col3.value;
                if (selection >= 40 && selection <= 400) {
                    self.secondFormGroup.patchValue({
                        "diastolicpicker": selection
                    });
                    self.secondFormGroup.updateValueAndValidity();
                }
                else {
                    alert("value selection must be between 40 to  400");
                    self.secondFormGroup.patchValue({
                        "diastolicpicker": ''
                    });
                    self.secondFormGroup.updateValueAndValidity();
                }
                picker.columns.forEach(col => {
                    col.options.forEach(el => {
                        delete el.selected;
                        delete el.duration;
                        delete el.transform;
                    });
                });
            });
            picker.present();
        });
    }
    //for Fasting Plasma
    showFastingPlasmaPicker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            console.log(value);
                        }
                    }
                ],
                columns: this.simpleColumns
            };
            let self = this;
            let picker = yield this.pickerController.create(options);
            picker.onDidDismiss().then(data => {
                var selection = data.data.col1.value + data.data.col2.value + data.data.col3.value;
                if (selection >= 40 && selection <= 400) {
                    self.thirdFormGroup.patchValue({
                        "FastingPlasma": selection
                    });
                    self.thirdFormGroup.updateValueAndValidity();
                }
                else {
                    alert("value selection must be between 40 to  400");
                    self.thirdFormGroup.patchValue({
                        "FastingPlasma": ''
                    });
                    self.thirdFormGroup.updateValueAndValidity();
                }
                picker.columns.forEach(col => {
                    col.options.forEach(el => {
                        delete el.selected;
                        delete el.duration;
                        delete el.transform;
                    });
                });
            });
            picker.present();
        });
    }
    //for Fasting Plasma
    showPostprandialPlasmaPicker() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let options = {
                buttons: [
                    {
                        text: "Cancel",
                        role: 'cancel'
                    },
                    {
                        text: 'Ok',
                        handler: (value) => {
                            console.log(value);
                        }
                    }
                ],
                columns: this.simpleColumns
            };
            let self = this;
            let picker = yield this.pickerController.create(options);
            picker.onDidDismiss().then(data => {
                var selection = data.data.col1.value + data.data.col2.value + data.data.col3.value;
                if (selection >= 50 && selection <= 500) {
                    self.thirdFormGroup.patchValue({
                        "PostprandialPlasma": selection
                    });
                    self.thirdFormGroup.updateValueAndValidity();
                }
                else {
                    alert("value selection must be between 50 to  500");
                    self.thirdFormGroup.patchValue({
                        "PostprandialPlasma": ''
                    });
                    self.thirdFormGroup.updateValueAndValidity();
                }
                picker.columns.forEach(col => {
                    col.options.forEach(el => {
                        delete el.selected;
                        delete el.duration;
                        delete el.transform;
                    });
                });
            });
            picker.present();
        });
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            "panNo": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "date_of_visit": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "gender": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "age": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "weight": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "height": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "bmi": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "education": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('none', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "employment": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('none', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
        this.secondFormGroup = this._formBuilder.group({
            "diabetes_valid": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "treated_diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "history_of_diabetes": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "duration_hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "systolicpicker": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "diastolicpicker": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "smoking": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "alcohol": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "comorbid_medical": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "comorbid_hypertension": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            "comorbid_hypertension_duration": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_hypertension_medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Dyslipidemia": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            "comorbid_Dyslipidemia_duration": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Dyslipidemia_medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Artery": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            "comorbid_Artery_duration": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Artery_medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Stroke": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            "comorbid_Stroke_duration": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Stroke_medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Neuropathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            "comorbid_Neuropathy_duration": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Neuropathy_medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Retinopathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            "comorbid_Retinopathy_duration": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Retinopathy_medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Nephropathy": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            "comorbid_Nephropathy_duration": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "comorbid_Nephropathy_medication": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.thirdFormGroup = this._formBuilder.group({
            "FastingPlasma": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "PostprandialPlasma": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "Glycosylated": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('1', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "HbA1c": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "Creatinine": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.fourthFormGroup = this._formBuilder.group({
            "Dose_of_Insulin": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "Insulin_Glargine": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            "Insulin_Glargine_Breakfast": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "Insulin_Glargine_Lunch": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "Insulin_Glargine_Dinner": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            "glarginevalidation": new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
    }
    ionViewWillEnter() {
        this.storage.get("userInfo").then(res => {
            if (res) {
                this.userInfo = res;
            }
        });
        this.storage.get("mobile_no").then(res => {
            if (res) {
                this.mob_no = res;
            }
        });
        const routeParams = this.activatedRoute.snapshot.params;
        if (routeParams != undefined && Object.keys(routeParams).length > 0) {
            this.isEditScreen = true;
            this.listingId = routeParams.id;
            if (routeParams && routeParams.completed) {
                this.completed = true;
                this.firstFormGroup.disable();
                this.secondFormGroup.disable();
                this.thirdFormGroup.disable();
                this.fourthFormGroup.disable();
            }
            else {
                this.completed = false;
            }
            this.getDetails();
        }
        else {
            this.isEditScreen = false;
        }
    }
    getDetails() {
        let formdata = new FormData();
        formdata.append('id', this.listingId);
        this.apiService.getBeginDetails(formdata).subscribe(res => {
            console.log(res['data']);
            this.beginDetails = res['data'];
            this.populateDetails();
        });
    }
    populateDetails() {
        console.log(this.beginDetails);
        //populate first form
        if (this.beginDetails && this.beginDetails.pen_serial != '') {
            this.firstFormGroup.patchValue({
                "panNo": this.beginDetails.pen_serial
            });
            this.firstFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.date_visit != '') {
            this.firstFormGroup.patchValue({
                'date_of_visit': new Date(this.beginDetails.date_visit)
            });
            this.date_of_visit = new Date(this.beginDetails.date_visit);
            this.firstFormGroup.get('date_of_visit').updateValueAndValidity();
            this.firstFormGroup.updateValueAndValidity();
        }
        // if(this.beginDetails && this.beginDetails.date_of_visit!=''){
        //   this.firstFormGroup.patchValue({
        //     'date_of_visit':this.beginDetails.date_of_visit
        //   });
        //   this.firstFormGroup.updateValueAndValidity()
        // }
        if (this.beginDetails && this.beginDetails.sex != '') {
            this.firstFormGroup.patchValue({
                "gender": this.beginDetails.sex
            });
            this.firstFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.age) {
            this.firstFormGroup.patchValue({
                'age': this.beginDetails.age
            });
            this.firstFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.weight) {
            this.firstFormGroup.patchValue({
                'weight': this.beginDetails.weight
            });
            this.firstFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.height) {
            this.firstFormGroup.patchValue({
                'height': this.beginDetails.height
            });
            this.firstFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.bmi) {
            this.firstFormGroup.patchValue({
                'bmi': this.beginDetails.bmi
            });
            this.firstFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.education) {
            this.firstFormGroup.patchValue({
                'education': this.beginDetails.education
            });
            this.firstFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.employment) {
            this.firstFormGroup.patchValue({
                'employment': this.beginDetails.employment
            });
            this.firstFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.duration_diabetes) {
            this.secondFormGroup.patchValue({
                'diabetes': this.beginDetails.duration_diabetes
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.treated_diabetes) {
            this.secondFormGroup.patchValue({
                'treated_diabetes': this.beginDetails.treated_diabetes
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.family_diabetes) {
            this.secondFormGroup.patchValue({
                'history_of_diabetes': this.beginDetails.family_diabetes
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.hypertension) {
            this.secondFormGroup.patchValue({
                'hypertension': this.beginDetails.hypertension
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.systolic) {
            this.secondFormGroup.patchValue({
                'systolicpicker': this.beginDetails.systolic
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.diastolic) {
            this.secondFormGroup.patchValue({
                'diastolicpicker': this.beginDetails.diastolic
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.smoking) {
            this.secondFormGroup.patchValue({
                'smoking': this.beginDetails.smoking
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.alcohol) {
            this.secondFormGroup.patchValue({
                'alcohol': this.beginDetails.alcohol
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.hypertension_dur == '' &&
            this.beginDetails.dyslipidemia_dur == '' && this.beginDetails.coronary_artery_dur == ''
            && this.beginDetails.stroke_dur == '' && this.beginDetails.neuropathy_dur == ''
            && this.beginDetails.retinopathy_dur == '' && this.beginDetails.nephropathy_dur == '') {
            this.secondFormGroup.patchValue({
                'comorbid_medical': 'no'
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.duration_hypertension != '') {
            this.secondFormGroup.patchValue({
                'duration_hypertension': this.beginDetails.duration_hypertension
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.hypertension_dur != '') {
            this.coMorbidDesc = true;
            this.showHypertensionDiv = true;
            this.secondFormGroup.patchValue({
                'comorbid_medical': 'yes'
            });
            let obj = JSON.parse(this.beginDetails.hypertension_dur);
            this.secondFormGroup.patchValue({
                'comorbid_hypertension': obj.hypertension_dur
            });
            this.secondFormGroup.patchValue({
                'comorbid_hypertension_duration': obj.duration_hypertension
            });
            this.secondFormGroup.patchValue({
                'comorbid_hypertension_medication': obj.hypertension_medications
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.dyslipidemia_dur != '') {
            this.coMorbidDesc = true;
            this.showDyslipidemia = true;
            this.secondFormGroup.patchValue({
                'comorbid_medical': 'yes'
            });
            let obj = JSON.parse(this.beginDetails.dyslipidemia_dur);
            this.secondFormGroup.patchValue({
                'comorbid_Dyslipidemia': obj.dyslipidemia_dur
            });
            this.secondFormGroup.patchValue({
                'comorbid_Dyslipidemia_duration': obj.dyslipidemia_duration
            });
            this.secondFormGroup.patchValue({
                'comorbid_Dyslipidemia_medication': obj.dyslipidemia_medication
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.coronary_artery_dur != '') {
            this.coMorbidDesc = true;
            this.coronary = true;
            let obj = JSON.parse(this.beginDetails.coronary_artery_dur);
            this.secondFormGroup.patchValue({
                'comorbid_Artery': obj.coronary_artery_dur
            });
            this.secondFormGroup.patchValue({
                'comorbid_Artery_duration': obj.coronary_artery_duration
            });
            this.secondFormGroup.patchValue({
                'comorbid_Artery_medication': obj.coronary_artery_medication
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.stroke_dur != '') {
            this.coMorbidDesc = true;
            this.stroke = true;
            let obj = JSON.parse(this.beginDetails.stroke_dur);
            this.secondFormGroup.patchValue({
                'comorbid_Stroke': obj.stroke_dur
            });
            this.secondFormGroup.patchValue({
                'comorbid_Stroke_duration': obj.stroke_duration
            });
            this.secondFormGroup.patchValue({
                'comorbid_Stroke_medication': obj.stroke_medication
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.neuropathy_dur != '') {
            this.coMorbidDesc = true;
            this.showNeuro = true;
            let obj = JSON.parse(this.beginDetails.neuropathy_dur);
            this.secondFormGroup.patchValue({
                'comorbid_Neuropathy': obj.neuropathy_dur
            });
            this.secondFormGroup.patchValue({
                'comorbid_Neuropathy_duration': obj.neuropathy_duration
            });
            this.secondFormGroup.patchValue({
                'comorbid_Neuropathy_medication': obj.neuropathy_medication
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.retinopathy_dur != '') {
            this.coMorbidDesc = true;
            this.showRetino = true;
            let obj = JSON.parse(this.beginDetails.retinopathy_dur);
            this.secondFormGroup.patchValue({
                'comorbid_Retinopathy': obj.retinopathy_dur
            });
            this.secondFormGroup.patchValue({
                'comorbid_Retinopathy_duration': obj.retinopathy_duration
            });
            this.secondFormGroup.patchValue({
                'comorbid_Retinopathy_medication': obj.retinopathy_medication
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.nephropathy_dur != '') {
            this.coMorbidDesc = true;
            this.showNephro = true;
            let obj = JSON.parse(this.beginDetails.nephropathy_dur);
            this.secondFormGroup.patchValue({
                'comorbid_Nephropathy': obj.nephropathy_dur
            });
            this.secondFormGroup.patchValue({
                'comorbid_Nephropathy_duration': obj.nephropathy_duration
            });
            this.secondFormGroup.patchValue({
                'comorbid_Nephropathy_medication': obj.nephropathy_medication
            });
            this.secondFormGroup.updateValueAndValidity();
            console.log(this.beginDetails.anti_diabetes_medication);
        }
        this.diabetesMedi1 = this.beginDetails.anti_diabetes_medication;
        console.log(this.diabetesMedi1);
        if (this.beginDetails && this.beginDetails.fasting_plasma) {
            this.thirdFormGroup.patchValue({
                'FastingPlasma': this.beginDetails.fasting_plasma
            });
            this.thirdFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.postprandial_plasma) {
            this.thirdFormGroup.patchValue({
                'PostprandialPlasma': this.beginDetails.postprandial_plasma
            });
            this.thirdFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.glycosylated) {
            this.thirdFormGroup.patchValue({
                'Glycosylated': this.beginDetails.glycosylated
            });
            this.thirdFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.hbac_lab) {
            this.thirdFormGroup.patchValue({
                'HbA1c': this.beginDetails.hbac_lab
            });
            this.thirdFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.s_creatinine) {
            this.thirdFormGroup.patchValue({
                'Creatinine': parseFloat(this.beginDetails.s_creatinine)
            });
            this.thirdFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.dose_insulin) {
            this.fourthFormGroup.patchValue({
                'Dose_of_Insulin': this.beginDetails.dose_insulin
            });
            this.fourthFormGroup.updateValueAndValidity();
        }
        if (this.beginDetails && this.beginDetails.glargine_insulin) {
            this.showHpFields4 = true;
            let obj = JSON.parse(this.beginDetails.glargine_insulin);
            console.log(obj);
            this.fourthFormGroup.patchValue({
                'Insulin_Glargine_Breakfast': obj.glargine_insulin_breakfast,
                'Insulin_Glargine_Lunch': obj.glargine_insulin_lunch,
                'Insulin_Glargine_Dinner': obj.glargine_insulin_dinner
            });
            this.fourthFormGroup.get('Insulin_Glargine_Breakfast').updateValueAndValidity();
            this.fourthFormGroup.updateValueAndValidity();
        }
    }
    checkAntiDiabetes(name) {
        if (this.diabetesMedi1.indexOf(name) > -1) {
            return true;
        }
        else {
            return false;
        }
    }
    back() {
        this.router.navigateByUrl('/dashboard');
    }
    gethuman(num) {
        return Array.from({ length: num }, (v, k) => k + 3);
    }
    getCreatinine() {
        let arr = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0];
        return arr;
    }
    getglycosylated(num) {
        return Array.from({ length: num }, (v, k) => k + 1);
    }
    getOptions(num) {
        return Array.from({ length: num }, (v, k) => k + 1);
    }
    complicationChange($events) {
        if ($events.target.value == 'yes') {
            //alert("yes");
            this.showComplicationsDesc = true;
        }
        else {
            //alert("false")
            this.showComplicationsDesc = false;
        }
    }
    fourthFormSubmit() {
        // this.helper.presentToast("Form submitted successfully");
        //   this.router.navigateByUrl('/dashboard')
        if (this.fourthFormGroup.valid) {
            this.selectglagrine = false;
            let formdata = new FormData();
            formdata.append('dose_insulin', this.fourthFormGroup.value.Dose_of_Insulin);
            formdata.append('status', 'yes');
            if (this.isEditScreen) {
                formdata.append('id', this.listingId);
            }
            else {
                formdata.append("id", this.formId);
            }
            if (this.showHpFields4) {
                let obj = {
                    "glargine_insulin": true,
                    "glargine_insulin_breakfast": this.fourthFormGroup.value.Insulin_Glargine_Breakfast,
                    "glargine_insulin_lunch": this.fourthFormGroup.value.Insulin_Glargine_Lunch,
                    "glargine_insulin_dinner": this.fourthFormGroup.value.Insulin_Glargine_Dinner
                };
                formdata.append("glargine_insulin", JSON.stringify(obj));
            }
            this.apiService.addBegin(formdata).subscribe(res => {
                this.helper.presentToast("Form submitted successfully");
                this.router.navigateByUrl('/dashboard');
            });
        }
        else {
            console.log(this.fourthFormGroup.valid);
            this.helper.presentToast("Please fill all the fields");
            if (this.fourthFormGroup.value.Insulin_Glargine != '' && this.fourthFormGroup.value.glarginevalidation == '') {
                this.helper.presentToast("Please select atleast one option");
            }
            else {
                this.helper.presentToast("Please fill all the fields");
            }
        }
    }
    secondSubmit(redirect) {
        if (this.secondFormGroup.valid) {
            let formdata = new FormData();
            formdata.append('duration_diabetes', this.secondFormGroup.value.diabetes);
            formdata.append('treated_diabetes', this.secondFormGroup.value.treated_diabetes);
            formdata.append('family_diabetes', this.secondFormGroup.value.history_of_diabetes);
            formdata.append('hypertension', this.secondFormGroup.value.hypertension);
            formdata.append('duration_hypertension', this.secondFormGroup.value.duration_hypertension);
            formdata.append('systolic', this.secondFormGroup.value.systolicpicker);
            formdata.append('medical_condition', this.secondFormGroup.value.comorbid_medical);
            formdata.append('diastolic', this.secondFormGroup.value.diastolicpicker);
            formdata.append('smoking', this.secondFormGroup.value.smoking);
            formdata.append('alcohol', this.secondFormGroup.value.alcohol);
            if (this.showHypertensionDiv) {
                let obj = {
                    "hypertension_dur": true,
                    "duration_hypertension": this.secondFormGroup.value.comorbid_hypertension_duration,
                    "hypertension_medications": this.secondFormGroup.value.comorbid_hypertension_medication
                };
                formdata.append("hypertension_dur", JSON.stringify(obj));
            }
            if (this.showDyslipidemia) {
                let obj = {
                    "dyslipidemia_dur": true,
                    "dyslipidemia_duration": this.secondFormGroup.value.comorbid_Dyslipidemia_duration,
                    "dyslipidemia_medication": this.secondFormGroup.value.comorbid_Dyslipidemia_medication
                };
                formdata.append("dyslipidemia_dur", JSON.stringify(obj));
            }
            if (this.coronary) {
                let obj = {
                    "coronary_artery_dur": true,
                    "coronary_artery_duration": this.secondFormGroup.value.comorbid_Artery_duration,
                    "coronary_artery_medication": this.secondFormGroup.value.comorbid_Artery_medication
                };
                formdata.append("coronary_artery_dur", JSON.stringify(obj));
            }
            if (this.stroke) {
                let obj = {
                    "stroke_dur": true,
                    "stroke_duration": this.secondFormGroup.value.comorbid_Stroke_duration,
                    "stroke_medication": this.secondFormGroup.value.comorbid_Stroke_medication
                };
                formdata.append("stroke_dur", JSON.stringify(obj));
            }
            if (this.showNeuro) {
                let obj = {
                    "neuropathy_dur": true,
                    "neuropathy_duration": this.secondFormGroup.value.comorbid_Neuropathy_duration,
                    "neuropathy_medication": this.secondFormGroup.value.comorbid_Neuropathy_medication
                };
                formdata.append("neuropathy_dur", JSON.stringify(obj));
            }
            if (this.showRetino) {
                let obj = {
                    "retinopathy_dur": true,
                    "retinopathy_duration": this.secondFormGroup.value.comorbid_Retinopathy_duration,
                    "retinopathy_medication": this.secondFormGroup.value.comorbid_Retinopathy_medication
                };
                formdata.append("retinopathy_dur", JSON.stringify(obj));
            }
            if (this.showNephro) {
                let obj = {
                    "nephropathy_dur": true,
                    "nephropathy_duration": this.secondFormGroup.value.comorbid_Nephropathy_duration,
                    "nephropathy_medication": this.secondFormGroup.value.comorbid_Nephropathy_medication
                };
                formdata.append("nephropathy_dur", JSON.stringify(obj));
            }
            console.log(JSON.stringify(this.diabetesMedi));
            formdata.append("anti_diabetes_medication", JSON.stringify(this.diabetesMedi));
            if (this.isEditScreen) {
                formdata.append('id', this.listingId);
            }
            else {
                formdata.append("id", this.formId);
            }
            this.apiService.addBegin(formdata).subscribe(res => {
                console.log(res);
                if (redirect) {
                    this.helper.presentToast("The draft has been saved successfully");
                    this.router.navigateByUrl("/dashboard");
                }
            });
        }
        else {
            this.helper.presentToast("Please fill all the fields");
        }
    }
    antiDiabetes($event, name) {
        console.log($event);
        if ($event.detail.checked) {
            this.diabetesMedi.push(name);
            this.secondFormGroup.patchValue({
                'diabetes_valid': 'abc'
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        else {
            let i = this.diabetesMedi.indexOf(name);
            this.diabetesMedi.splice(i, 1);
            this.secondFormGroup.patchValue({
                'diabetes_valid': ''
            });
            this.secondFormGroup.updateValueAndValidity();
        }
        console.log(this.diabetesMedi);
    }
    thirdFormSubmit(redirect) {
        if (this.thirdFormGroup.valid) {
            let formdata = new FormData();
            formdata.append('fasting_plasma', this.thirdFormGroup.value.FastingPlasma);
            formdata.append('postprandial_plasma', this.thirdFormGroup.value.PostprandialPlasma);
            formdata.append('glycosylated', this.thirdFormGroup.value.Glycosylated);
            formdata.append('hbac_lab', this.thirdFormGroup.value.HbA1c);
            formdata.append('s_creatinine', this.thirdFormGroup.value.Creatinine);
            if (this.isEditScreen) {
                formdata.append('id', this.listingId);
            }
            else {
                formdata.append("id", this.formId);
            }
            this.apiService.addBegin(formdata).subscribe(res => {
                console.log(res);
                if (redirect) {
                    this.helper.presentToast("The draft has been submitted successfully");
                    this.router.navigateByUrl("/dashboard");
                }
            });
        }
        else {
            this.helper.presentToast("Please fill all the fields");
        }
    }
    firstSubmit(saveAsDraft) {
        if (this.firstFormGroup.valid) {
            let date = new Date(this.firstFormGroup.value.date_of_visit);
            let formdata = new FormData();
            //formdata.append('mobile',this.mob_no);
            formdata.append('user_id', this.userInfo.doctor_id);
            formdata.append('pen_serial', this.firstFormGroup.value.panNo);
            formdata.append('date_visit', moment__WEBPACK_IMPORTED_MODULE_9__(date).format('YYYY-MM-DD'));
            formdata.append('sex', this.firstFormGroup.value.gender);
            formdata.append('age', this.firstFormGroup.value.age);
            formdata.append('weight', this.firstFormGroup.value.weight);
            formdata.append('height', this.firstFormGroup.value.height);
            formdata.append('bmi', this.firstFormGroup.value.bmi);
            formdata.append('education', this.firstFormGroup.value.education);
            formdata.append('employment', this.firstFormGroup.value.employment);
            if (this.isEditScreen) {
                formdata.append('id', this.listingId);
            }
            else {
                formdata.append('mobile', this.mob_no);
            }
            this.apiService.addBegin(formdata).subscribe(res => {
                this.formId = res['data'].from_id;
                if (saveAsDraft) {
                    this.helper.presentToast("The draft has been saved successfully");
                    this.router.navigateByUrl("/dashboard");
                }
            });
        }
        else {
            this.helper.presentToast("Please fill all the fields");
        }
    }
    coMorbid($event) {
        if ($event.target.value == 'yes') {
            //alert("yes");
            this.coMorbidDesc = true;
        }
        else {
            //alert("false")
            this.coMorbidDesc = false;
        }
    }
    changeHp($events) {
        //console.log($events.detail.checked);
        if ($events.detail.checked) {
            this.showHpFields = true;
        }
        else {
            this.showHpFields = false;
        }
    }
    changeRi($event) {
        if ($event.detail.checked) {
            this.showHpFields2 = true;
        }
        else {
            this.showHpFields2 = false;
        }
    }
    changeNph($event) {
        if ($event.detail.checked) {
            this.showHpFields3 = true;
        }
        else {
            this.showHpFields3 = false;
        }
    }
    changeGlargine($event) {
        if ($event.detail.checked) {
            this.showHpFields4 = true;
            this.glargineinsulinrequired = false;
            if (!this.completed) {
                this.fourthFormGroup.patchValue({
                    'glarginevalidation': '',
                    'Insulin_Glargine_Breakfast': '',
                    'Insulin_Glargine_Lunch': '',
                    'Insulin_Glargine_Dinner': ''
                });
            }
            this.fourthFormGroup.updateValueAndValidity();
            this.fourthFormGroup.controls['glarginevalidation'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]);
            this.fourthFormGroup.controls['glarginevalidation'].updateValueAndValidity();
            this.fourthFormGroup.patchValue({
                "Insulin_Glargine": 'filled'
            });
            this.fourthFormGroup.controls['Insulin_Glargine'].updateValueAndValidity();
            this.fourthFormGroup.updateValueAndValidity();
        }
        else {
            this.showHpFields4 = false;
            this.glargineinsulinrequired = true;
            if (!this.completed) {
                this.fourthFormGroup.patchValue({
                    'glarginevalidation': '',
                    'Insulin_Glargine_Breakfast': '',
                    'Insulin_Glargine_Lunch': '',
                    'Insulin_Glargine_Dinner': ''
                });
            }
            this.fourthFormGroup.updateValueAndValidity();
            this.fourthFormGroup.controls['glarginevalidation'].clearValidators();
            this.fourthFormGroup.controls['glarginevalidation'].updateValueAndValidity();
            this.fourthFormGroup.patchValue({
                "Insulin_Glargine": ''
            });
            this.fourthFormGroup.controls['Insulin_Glargine'].updateValueAndValidity();
            this.fourthFormGroup.updateValueAndValidity();
        }
    }
    select1($event, type) {
        if ($event.target.value == 0 || $event.target.value == undefined) {
            let index = this.glargineval.indexOf(type);
            if (index >= 0) {
                this.glargineval.splice(index, 1);
            }
            if (this.glargineval.length > 0) {
                this.fourthFormGroup.patchValue({
                    'glarginevalidation': 'filled'
                });
                this.fourthFormGroup.updateValueAndValidity();
            }
            else {
                this.fourthFormGroup.patchValue({
                    'glarginevalidation': ''
                });
                this.fourthFormGroup.updateValueAndValidity();
            }
        }
        else {
            let index = this.glargineval.indexOf(type);
            if (index < 0) {
                this.glargineval.push(type);
            }
            if (this.glargineval.length > 0) {
                this.fourthFormGroup.patchValue({
                    'glarginevalidation': 'filled'
                });
                this.fourthFormGroup.updateValueAndValidity();
            }
            else {
                this.fourthFormGroup.patchValue({
                    'glarginevalidation': ''
                });
                this.fourthFormGroup.updateValueAndValidity();
            }
        }
    }
    select2($event) {
        if ($event.target.value == 0) {
            this.glargineval = $event.target.value;
        }
        if ($event.target.value == 0 && this.glargineval != 0) {
            this.fourthFormGroup.patchValue({
                'glarginevalidation': ''
            });
            this.fourthFormGroup.updateValueAndValidity();
            this.selectglagrine = true;
        }
        else {
            this.selectglagrine = false;
            this.fourthFormGroup.patchValue({
                'glarginevalidation': $event.target.value
            });
            this.fourthFormGroup.updateValueAndValidity();
        }
        console.log('glargineval', this.glargineval);
    }
    select3($event) {
        if ($event.target.value == 0) {
            this.glargineval = $event.target.value;
        }
        if ($event.target.value == 0 && this.glargineval != 0) {
            this.fourthFormGroup.patchValue({
                'glarginevalidation': ''
            });
            this.fourthFormGroup.updateValueAndValidity();
            this.selectglagrine = true;
        }
        else {
            this.selectglagrine = false;
            this.fourthFormGroup.patchValue({
                'glarginevalidation': $event.target.value
            });
            this.fourthFormGroup.updateValueAndValidity();
        }
        console.log('glargineval', this.glargineval);
    }
    changeHp50($event) {
        if ($event.detail.checked) {
            this.showHpFields1 = true;
        }
        else {
            this.showHpFields1 = false;
        }
    }
    efficacyChange($event) {
        if ($event.target.value == 'yes') {
            this.efficacyDesc = true;
        }
        else {
            this.efficacyDesc = false;
        }
    }
};
BeginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PickerController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _common_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _common_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
BeginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-begin',
        template: _raw_loader_begin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_begin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BeginPage);



/***/ })

}]);
//# sourceMappingURL=begin-begin-module.js.map