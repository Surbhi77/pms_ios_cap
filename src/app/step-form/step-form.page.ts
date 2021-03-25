import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { Helper } from './../common/helper';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiService} from './../common/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-step-form',
  templateUrl: './step-form.page.html',
  styleUrls: ['./step-form.page.scss'],
})
// export class StepFormPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class StepFormPage implements OnInit {
  
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  showComplicationsDesc:boolean= false;
  coMorbidDesc:boolean=false;
  efficacyDesc:boolean=false;
  showHpFields:boolean=false;
  showHpFields1:boolean=false;
  showHpFields2:boolean=false;
  showHpFields3:boolean=false;
  showHpFields4:boolean=false;
  simpleColumns:any;
  heightColumns:any;
  oneSelected: boolean;
  showHypertensionDiv: any;
  showDyslipidemia: boolean;
  coronary: boolean;
  stroke: boolean;
  showNeuro: boolean;
  showRetino: boolean;
  showNephro: boolean;
  antiDiabetesArr: any=[];
  userInfo: any;
  formId: any;
  fourthFormGroup: FormGroup;
  mob_no: any;
  doseArr: any=[];
  isEditScreen: boolean;
  listingId: any;
  initiateDetails: any;
  date_of_visit: Date;
  diabetesMedi1: any=[];
  completed: boolean;
  glycosylatedColumns: { name: string; options: { text: string; value: string; }[]; }[];
  
  constructor(private pickerController: PickerController,
    public activatedRoute: ActivatedRoute,
    private storage:Storage,
    private router:Router,
    private apiService:ApiService,
    private helper:Helper,private _formBuilder: FormBuilder) {
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
      },{
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
      },{
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
          { text : '.' , value: '.'}
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



  //for weight
  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            console.log(value);
          }
        }
      ],
      columns:this.simpleColumns
    };
    let self =this;
    let picker = await this.pickerController.create(options);
   
    
    picker.onDidDismiss().then(data=>{
      if(data && data.data && data.data.col1 && data.data.col2 && data.data.col3){
        var selection = data.data.col1.value+data.data.col2.value+data.data.col3.value;
        if(+selection >= 40 && +selection <= 150){
          self.firstFormGroup.patchValue({
            "weight":selection
          })
          self.firstFormGroup.updateValueAndValidity();
        }else{
          alert("value cannot be greater than 150")
          self.firstFormGroup.patchValue({
            "weight":''
          })
          self.firstFormGroup.updateValueAndValidity();
          selection=0;
        }
      }else{
        self.firstFormGroup.patchValue({
          "weight":''
        })
        self.firstFormGroup.updateValueAndValidity();
        selection=0
      }
      
      if(self.firstFormGroup.value.height && self.firstFormGroup.value.height!=''){
        var height = self.firstFormGroup.value.height
        if(height!=''){
          var bmi = ((selection/height/height)*10000).toFixed(1)
          self.firstFormGroup.patchValue({"bmi":bmi})
          self.firstFormGroup.updateValueAndValidity();
        } 
      }else{
        self.helper.presentToast("Please enter height")
      }

      picker.columns.forEach(col => {
        col.options.forEach(el => {
          delete el.selected;
          delete el.duration;
          delete el.transform;
        });
      });
    })
    picker.present()
  }

  public ageFromDateOfBirthday(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }

  public valueChanged(event){
    // console.log(event.value);
    // console.log(this.ageFromDateOfBirthday(event.value));
    var age = this.ageFromDateOfBirthday(event.value);
    this.firstFormGroup.patchValue({
      "age":age
    });
    this.firstFormGroup.updateValueAndValidity()

  }

  //for height
  async showHeightPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            console.log(value);
          }
        }
      ],
      columns:this.simpleColumns
    };
    let self =this;
    let picker = await this.pickerController.create(options);
   
    
    picker.onDidDismiss().then(data=>{
      var selection = data.data.col1.value+data.data.col2.value+data.data.col3.value;
      //console.log(selection)
      if(+selection >= 120 && +selection <= 200){
        self.firstFormGroup.patchValue({
          "height":selection
        })
        self.firstFormGroup.updateValueAndValidity();

      }else{
        alert("value selection must be between 120 to  200")
        self.firstFormGroup.patchValue({
          "height":''
        })
        self.firstFormGroup.updateValueAndValidity();
        selection=0
      }
      if(self.firstFormGroup.value.weight && self.firstFormGroup.value.weight!=''){
        var weight = self.firstFormGroup.value.weight
        if(selection != ''){
          var bmi = ((weight/selection/selection)*10000).toFixed(1)
          self.firstFormGroup.patchValue({"bmi":bmi})
          self.firstFormGroup.updateValueAndValidity();
        }
      }else{
        self.helper.presentToast("Please enter weight")
      }
      //if(self.firstFormGroup.weight.)
      picker.columns.forEach(col => {
        col.options.forEach(el => {
          delete el.selected;
          delete el.duration;
          delete el.transform;
        });
      });
    })
    picker.present()
  }

  //for Systolic Picker
  async showSystolicPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            console.log(value);
          }
        }
      ],
      columns:this.simpleColumns
    };
    let self =this;
    let picker = await this.pickerController.create(options);
   
    
    picker.onDidDismiss().then(data=>{
      var selection = data.data.col1.value+data.data.col2.value+data.data.col3.value;
      if(selection >= 40 && selection <= 400){
        self.secondFormGroup.patchValue({
          "systolicpicker":selection
        })

      }else{
        alert("value selection must be between 40 to  400")
        self.secondFormGroup.patchValue({
          "systolicpicker":''
        })
      }
      picker.columns.forEach(col => {
        col.options.forEach(el => {
          delete el.selected;
          delete el.duration;
          delete el.transform;
        });
      });
    })
    picker.present()
  }

 //for Systolic Picker
 async showDiastolicPicker() {
  let options: PickerOptions = {
    buttons: [
      {
        text: "Cancel",
        role: 'cancel'
      },
      {
        text:'Ok',
        handler:(value:any) => {
          console.log(value);
        }
      }
    ],
    columns:this.simpleColumns
  };
  let self =this;
  let picker = await this.pickerController.create(options);
 
  
  picker.onDidDismiss().then(data=>{
    var selection = data.data.col1.value+data.data.col2.value+data.data.col3.value;
    if(selection >= 40 && selection <= 400){
      self.secondFormGroup.patchValue({
        "diastolicpicker":selection
      })

    }else{
      alert("value selection must be between 40 to  400")
      self.secondFormGroup.patchValue({
        "diastolicpicker":''
      })
    }
    picker.columns.forEach(col => {
      col.options.forEach(el => {
        delete el.selected;
        delete el.duration;
        delete el.transform;
      });
    });
  })
  picker.present()
}

//for Fasting Plasma
async showFastingPlasmaPicker() {
  let options: PickerOptions = {
    buttons: [
      {
        text: "Cancel",
        role: 'cancel'
      },
      {
        text:'Ok',
        handler:(value:any) => {
          console.log(value);
        }
      }
    ],
    columns:this.simpleColumns
  };
  let self =this;
  let picker = await this.pickerController.create(options);
 
  
  picker.onDidDismiss().then(data=>{
    var selection = data.data.col1.value+data.data.col2.value+data.data.col3.value;
    if(selection >= 40 && selection <= 400){
      self.thirdFormGroup.patchValue({
        "FastingPlasma":selection
      })

    }else{
      alert("value selection must be between 40 to  400")
      self.thirdFormGroup.patchValue({
        "FastingPlasma":''
      })
    }
    picker.columns.forEach(col => {
      col.options.forEach(el => {
        delete el.selected;
        delete el.duration;
        delete el.transform;
      });
    });
  })
  picker.present()
}

//for Fasting Plasma
async showPostprandialPlasmaPicker() {
  let options: PickerOptions = {
    buttons: [
      {
        text: "Cancel",
        role: 'cancel'
      },
      {
        text:'Ok',
        handler:(value:any) => {
          console.log(value);
        }
      }
    ],
    columns:this.simpleColumns
  };
  let self =this;
  let picker = await this.pickerController.create(options);
 
  
  picker.onDidDismiss().then(data=>{
    var selection = data.data.col1.value+data.data.col2.value+data.data.col3.value;
    if(selection >= 50 && selection <= 500){
      self.thirdFormGroup.patchValue({
        "PostprandialPlasma":selection
      })

    }else{
      alert("value selection must be between 50 to  500")
      self.thirdFormGroup.patchValue({
        "PostprandialPlasma":''
      })
    }
    picker.columns.forEach(col => {
      col.options.forEach(el => {
        delete el.selected;
        delete el.duration;
        delete el.transform;
      });
    });
  })
  picker.present()
}

  submitFourth(){
    if(this.fourthFormGroup.valid && this.doseArr.length>0){
      let formdata = new FormData();
      if(this.showHpFields){
        let obj = {
          "human_premixed_thirty":this.fourthFormGroup.value.Human_Premixed_30,
          "human_premixed_thirty_breakfast":this.fourthFormGroup.value.Human_Premixed_30_Breakfast,
          "human_premixed_thirty_lunch":this.fourthFormGroup.value.Human_Premixed_30_Lunch,
          "human_premixed_thirty_dinner":this.fourthFormGroup.value.Human_Premixed_30_Dinner
        };
        formdata.append('human_premixed_thirty',JSON.stringify(obj));
      }
      if(this.showHpFields1){
        let obj ={
          "human_premixed_fifty":this.fourthFormGroup.value.Human_Premixed_50,
          "human_premixed_50_breakfast":this.fourthFormGroup.value.Human_Premixed_50_Breakfast,
          "human_premixed_fifty_lunch":this.fourthFormGroup.value.Human_Premixed_50_Lunch,
          "human_premixed_fifty_dinner":this.fourthFormGroup.value.Human_Premixed_50_Dinner
        }
        formdata.append("human_premixed_fifty",JSON.stringify(obj));
      }
      if(this.showHpFields2){
        let obj={
          "regular_insulin":this.fourthFormGroup.value.Regular_insulin,
          "regular_insulin_lunch":this.fourthFormGroup.value.Regular_insulin_Lunch,
          "regular_insulin_breakfast":this.fourthFormGroup.value.Regular_insulin_Breakfast,
          "regular_insulin_dinner":this.fourthFormGroup.value.Regular_insulin_Dinner
        }
        formdata.append("regular_insulin",JSON.stringify(obj))
      }
      if(this.showHpFields3){
        let obj = {
          "nph_insulin":this.fourthFormGroup.value.Regular_NPH,
          "nph_insulin_breakfast":this.fourthFormGroup.value.Regular_NPH_Breakfast,
          "nph_insulin_lunch":this.fourthFormGroup.value.Regular_NPH_Lunch,
          "nph_insulin_dinner":this.fourthFormGroup.value.Regular_NPH_Dinner
        }
        formdata.append("nph_insulin",JSON.stringify(obj))
      }
      if(this.showHpFields4){
        let obj = {
          "glargine_insulin":this.fourthFormGroup.value.Insulin_Glargine,
          "glargine_insulin_breakfast": this.fourthFormGroup.value.Insulin_Glargine_Breakfast,
          "glargine_insulin_lunch":this.fourthFormGroup.value.Insulin_Glargine_Lunch,
          "glargine_insulin_dinner": this.fourthFormGroup.value.Insulin_Glargine_Dinner
        }
        formdata.append('glargine_insulin',JSON.stringify(obj))
      }
      if(this.isEditScreen){
        formdata.append('id',this.listingId);
      }else{
        formdata.append("id",this.formId);
      }
      formdata.append('status','yes');
      this.apiService.addInitiate(formdata).subscribe(res=>{
        this.helper.presentToast("Form submitted successfully");
        this.router.navigateByUrl('/dashboard')
      })
    }else{
      if(this.doseArr.length==0){
        this.helper.presentToast("Select atleast one dose")       
      }else{
        console.log("here",this.fourthFormGroup.value.Human_Premixed,this.fourthFormGroup.value.Human_Premixed_30,this.fourthFormGroup.valid)
        if(this.fourthFormGroup.value.humanpremixed50 == 0 && this.fourthFormGroup.value.Human_Premixed_50!='' ){
          console.log(this.fourthFormGroup.valid)
          this.helper.presentToast("Please select Atleast one option.")
        }
        if(this.fourthFormGroup.value.Human_Premixed == '' && this.fourthFormGroup.value.Human_Premixed_30!=''){
          this.helper.presentToast("Please select Atleast one option.")
          console.log("here 2",this.fourthFormGroup.valid)
        }
        if(this.fourthFormGroup.value.RegularNPH==0 && this.fourthFormGroup.value.Regular_NPH!=''){
          this.helper.presentToast("Please select Atleast one option.")
          console.log(this.fourthFormGroup.valid)
        }
        if(this.fourthFormGroup.value.Regularinsulin ==0 && this.fourthFormGroup.value.Regular_insulin!=''){
          this.helper.presentToast("Please select Atleast one option.")
          console.log(this.fourthFormGroup.valid)
        }
        if(this.fourthFormGroup.value.InsulinGlargine ==0 && this.fourthFormGroup.value.Insulin_Glargine!=''){
          this.helper.presentToast("Please select Atleast one option.")
          console.log(this.fourthFormGroup.valid)
        }
       
        //this.helper.presentToast("Please fill all the fields")
      }
    }
  }

  ionViewWillEnter(){
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userInfo = res;    
      }
    })
    this.storage.get("mobile_no").then(res=>{
      if(res){
        this.mob_no = res;
      }
    })
    const routeParams = this.activatedRoute.snapshot.params;
    if(routeParams != undefined && Object.keys(routeParams).length>0){
      console.log(routeParams)
      this.isEditScreen =  true;
      this.listingId = routeParams.id;
      if(routeParams && routeParams.completed){
        this.completed = true;
        this.firstFormGroup.disable();
        this.secondFormGroup.disable();
        this.thirdFormGroup.disable();
        this.fourthFormGroup.disable();
      }else{
        this.completed = false
      }
      this.getDetails()
    }else{
      this.isEditScreen = false;
      this.completed = false;
    }
  }

  getDetails(){
    let formdata = new FormData();
    formdata.append('id',this.listingId)
    this.apiService.viewInitiate(formdata).subscribe(res=>{
      console.log(res['data']);
      this.initiateDetails = res['data'];
      this.populateDetails()
    });
    
  }
  
  populateDetails(){
    if(this.initiateDetails && this.initiateDetails.pen_serial!=''){
      this.firstFormGroup.patchValue({
        "panNo":this.initiateDetails.pen_serial
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.date_visit!=''){
      this.firstFormGroup.patchValue({
        'date_of_visit':new Date(this.initiateDetails.date_visit)
      });
      this.date_of_visit = new Date(this.initiateDetails.date_visit);
      this.firstFormGroup.get('date_of_visit').updateValueAndValidity();
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.sex!=''){
      this.firstFormGroup.patchValue({
        "gender":this.initiateDetails.sex
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.age){
      this.firstFormGroup.patchValue({
        'age':this.initiateDetails.age
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.weight){
      this.firstFormGroup.patchValue({
        'weight':this.initiateDetails.weight
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.height){
      this.firstFormGroup.patchValue({
        'height':this.initiateDetails.height 
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.bmi){
      this.firstFormGroup.patchValue({
        'bmi':this.initiateDetails.bmi
      });
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.initiateDetails && this.initiateDetails.education){
      this.firstFormGroup.patchValue({
        'education':this.initiateDetails.education
      })
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.initiateDetails && this.initiateDetails.employment){
      this.firstFormGroup.patchValue({
        'employment':this.initiateDetails.employment
      });
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.initiateDetails && this.initiateDetails.duration_diabetes){
      this.secondFormGroup.patchValue({
        'diabetes':this.initiateDetails.duration_diabetes
      });
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.treated_diabetes){
      this.secondFormGroup.patchValue({
        'treated_diabetes':this.initiateDetails.treated_diabetes
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.family_diabetes){
      this.secondFormGroup.patchValue({
        'history_of_diabetes':this.initiateDetails.family_diabetes
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.hypertension){
      this.secondFormGroup.patchValue({
        'hypertension':this.initiateDetails.hypertension
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.duration_hypertension !=''){
      this.secondFormGroup.patchValue({
        'duration_hypertension':this.initiateDetails.duration_hypertension
      });
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.initiateDetails && this.initiateDetails.systolic){
      this.secondFormGroup.patchValue({
        'systolicpicker':this.initiateDetails.systolic
      });
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.initiateDetails && this.initiateDetails.diastolic){
      this.secondFormGroup.patchValue({
        'diastolicpicker':this.initiateDetails.diastolic
      });
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.smoking){
      this.secondFormGroup.patchValue({
        'smoking':this.initiateDetails.smoking
      });
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.initiateDetails && this.initiateDetails.alcohol){
      this.secondFormGroup.patchValue({
        'alcohol':this.initiateDetails.alcohol
      })
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.initiateDetails && this.initiateDetails.hypertension_dur == '' && 
    this.initiateDetails.dyslipidemia_dur == '' && this.initiateDetails.coronary_artery_dur == ''
    && this.initiateDetails.stroke_dur == '' && this.initiateDetails.neuropathy_dur == ''
    && this.initiateDetails.retinopathy_dur == '' && this.initiateDetails.nephropathy_dur == '')
    {
      this.secondFormGroup.patchValue({
        'comorbid_medical':'no'
      });
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.initiateDetails && this.initiateDetails.hypertension_dur != ''){
      this.coMorbidDesc=true;
      this.showHypertensionDiv=true;
      this.secondFormGroup.patchValue({
        'comorbid_medical':'yes'
      });
      let obj = JSON.parse(this.initiateDetails.hypertension_dur)
      this.secondFormGroup.patchValue({
        'comorbid_hypertension':obj.hypertension_dur
      });
      this.secondFormGroup.patchValue({
        'comorbid_hypertension_duration':obj.duration_hypertension
      })
      this.secondFormGroup.patchValue({
        'comorbid_hypertension_medication':obj.hypertension_medications
      })
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.initiateDetails && this.initiateDetails.dyslipidemia_dur !=''){
      this.coMorbidDesc=true;
      this.showDyslipidemia=true;
      this.secondFormGroup.patchValue({
        'comorbid_medical':'yes'
      });
      let obj = JSON.parse(this.initiateDetails.dyslipidemia_dur);

      this.secondFormGroup.patchValue({
        'comorbid_Dyslipidemia':obj.dyslipidemia_dur
      });
      this.secondFormGroup.patchValue({
        'comorbid_Dyslipidemia_duration':obj.dyslipidemia_duration
      });
      this.secondFormGroup.patchValue({
        'comorbid_Dyslipidemia_medication':obj.dyslipidemia_medication
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.coronary_artery_dur != ''){
      this.coMorbidDesc=true;
      this.coronary=true;
      let obj = JSON.parse(this.initiateDetails.coronary_artery_dur)
      this.secondFormGroup.patchValue({
        'comorbid_Artery':obj.coronary_artery_dur
      });
      this.secondFormGroup.patchValue({
        'comorbid_Artery_duration':obj.coronary_artery_duration
      });
      this.secondFormGroup.patchValue({
        'comorbid_Artery_medication':obj.coronary_artery_medication
      })
      this.secondFormGroup.updateValueAndValidity()
    }

    if(this.initiateDetails && this.initiateDetails.stroke_dur!=''){
      this.coMorbidDesc=true;
      this.stroke=true;
      let obj = JSON.parse(this.initiateDetails.stroke_dur);
      this.secondFormGroup.patchValue({
        'comorbid_Stroke':obj.stroke_dur
      });
      this.secondFormGroup.patchValue({
        'comorbid_Stroke_duration':obj.stroke_duration
      });
      this.secondFormGroup.patchValue({
        'comorbid_Stroke_medication':obj.stroke_medication
      })
      this.secondFormGroup.updateValueAndValidity()
    }

    if(this.initiateDetails && this.initiateDetails.neuropathy_dur!=''){
      this.coMorbidDesc=true;
      this.showNeuro=true;
      let obj = JSON.parse(this.initiateDetails.neuropathy_dur);
      this.secondFormGroup.patchValue({
        'comorbid_Neuropathy':obj.neuropathy_dur
      });
      this.secondFormGroup.patchValue({
        'comorbid_Neuropathy_duration':obj.neuropathy_duration
      });
      this.secondFormGroup.patchValue({
        'comorbid_Neuropathy_medication':obj.neuropathy_medication
      })
      this.secondFormGroup.updateValueAndValidity()
    }

    if(this.initiateDetails && this.initiateDetails.retinopathy_dur!=''){
      this.coMorbidDesc=true;
      this.showRetino=true;
      let obj = JSON.parse(this.initiateDetails.retinopathy_dur)
      this.secondFormGroup.patchValue({
        'comorbid_Retinopathy':obj.retinopathy_dur
      });
      this.secondFormGroup.patchValue({
        'comorbid_Retinopathy_duration':obj.retinopathy_duration
      });
      this.secondFormGroup.patchValue({
        'comorbid_Retinopathy_medication':obj.retinopathy_medication
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.nephropathy_dur!=''){
      this.coMorbidDesc=true;
      this.showNephro=true;
      let obj = JSON.parse(this.initiateDetails.nephropathy_dur)
      this.secondFormGroup.patchValue({
        'comorbid_Nephropathy':obj.nephropathy_dur
      });
      this.secondFormGroup.patchValue({
        'comorbid_Nephropathy_duration':obj.nephropathy_duration
      })
      this.secondFormGroup.patchValue({
        'comorbid_Nephropathy_medication':obj.nephropathy_medication
      })
      this.secondFormGroup.updateValueAndValidity();
      
      console.log(this.initiateDetails.anti_diabetes_medication)
     
    }
    this.diabetesMedi1=this.initiateDetails.anti_diabetes_medication;
    if(this.initiateDetails && this.initiateDetails.blood_investigation!=''){
      let obj = JSON.parse(this.initiateDetails.blood_investigation)
      this.thirdFormGroup.patchValue({
        'FastingPlasma':obj.fasting_plasma,
        'PostprandialPlasma':obj.postprandial_plasma,
        'Glycosylated':obj.glyscolated,
        'HbA1c':obj.hba1_c,
        'Creatinine':obj.s_creatinine
      });
      this.thirdFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.human_premixed_thirty!=''){
      let obj = JSON.parse(this.initiateDetails.human_premixed_thirty);
      this.showHpFields=true;
      this.fourthFormGroup.patchValue({
        "Human_Premixed_30":obj.human_premixed_thirty,
        "Human_Premixed_30_Lunch":obj.human_premixed_thirty_lunch,
        "Human_Premixed_30_Breakfast":obj.human_premixed_thirty_breakfast,
        "Human_Premixed_30_Dinner":obj.human_premixed_thirty_dinner
      });
      this.fourthFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.human_premixed_fifty!=''){
      let obj = JSON.parse(this.initiateDetails.human_premixed_fifty);
      this.showHpFields1=true;
      this.fourthFormGroup.patchValue({
        "Human_Premixed_50":obj.human_premixed_fifty,
        "Human_Premixed_50_Breakfast":obj.human_premixed_50_breakfast,
        "Human_Premixed_50_Lunch":obj.human_premixed_fifty_lunch,
        "Human_Premixed_50_Dinner":obj.human_premixed_fifty_dinner
      });
      this.fourthFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.regular_insulin!=''){
      this.showHpFields2=true;
      let obj = JSON.parse(this.initiateDetails.regular_insulin);
      this.fourthFormGroup.patchValue({
        "Regular_insulin":obj.regular_insulin,
        "Regular_insulin_Lunch":obj.regular_insulin_lunch,
        "Regular_insulin_Breakfast":obj.regular_insulin_breakfast,
        "Regular_insulin_Dinner":obj.regular_insulin_dinner
      });
      this.fourthFormGroup.updateValueAndValidity()
    }
    if(this.initiateDetails && this.initiateDetails.nph_insulin){
      this.showHpFields3=true;
      let obj = JSON.parse(this.initiateDetails.nph_insulin);
      this.fourthFormGroup.patchValue({
        "Regular_NPH":obj.nph_insulin,
        "Regular_NPH_Breakfast":obj.nph_insulin_breakfast,
        "Regular_NPH_Lunch":obj.nph_insulin_lunch,
        "Regular_NPH_Dinner":obj.nph_insulin_dinner
      });
      this.fourthFormGroup.updateValueAndValidity();
    }
    if(this.initiateDetails && this.initiateDetails.glargine_insulin){
      this.showHpFields4=true;
      let obj = JSON.parse(this.initiateDetails.glargine_insulin);
      this.fourthFormGroup.patchValue({
        "Insulin_Glargine":obj.glargine_insulin,
        "Insulin_Glargine_Breakfast":obj.glargine_insulin_breakfast,
        "Insulin_Glargine_Lunch":obj.glargine_insulin_lunch,
        "Insulin_Glargine_Dinner":obj.glargine_insulin_dinner
      });
      this.fourthFormGroup.updateValueAndValidity();
    }
  }

  async showHbac1(){
    // alert("vahjg")
     let options: PickerOptions = {
       buttons: [
         {
           text: "Cancel",
           role: 'cancel'
         },
         {
           text:'Ok',
           handler:(value:any) => {
             console.log(value);
           }
         }
       ],
       columns:this.glycosylatedColumns
     };
     let self =this;
     let picker = await this.pickerController.create(options);
   
     picker.onDidDismiss().then(data=>{
       console.log(data)
       if(data && data.data && data.data.col1 && data.data.col2 && data.data.col3){
         var selection = data.data.col1.value+data.data.col2.value+data.data.col3.value;
         self.thirdFormGroup.patchValue({
           "Glycosylated":selection
         })
       }  
     })
     picker.present();
   }

  checkAntiDiabetes(name){
    if(this.diabetesMedi1.indexOf(name)>-1){
      return true
    }else{
      return false
    }
  }

  submitFirst(redirect){
   if(this.firstFormGroup.valid){
     
    let date = new Date(this.firstFormGroup.value.date_of_visit);
    let formdata = new FormData();
    formdata.append('user_id',this.userInfo.doctor_id);
  
    formdata.append('pen_serial',this.firstFormGroup.value.panNo);
    formdata.append('date_visit',moment(date).format('YYYY-MM-DD'));
    formdata.append('sex',this.firstFormGroup.value.gender);
    formdata.append('age',this.firstFormGroup.value.age);
    formdata.append('weight',this.firstFormGroup.value.weight);
    formdata.append('height',this.firstFormGroup.value.height);
    formdata.append('bmi',this.firstFormGroup.value.bmi);
    formdata.append('education',this.firstFormGroup.value.education);
    formdata.append('employment',this.firstFormGroup.value.employment);
    if(this.isEditScreen){
      formdata.append('id',this.listingId);
    }else{
      formdata.append('mobile',this.mob_no);
    }
    this.apiService.addInitiate(formdata).subscribe(res=>{
      console.log(res);
      if(res.status == "0"){
        this.helper.presentToast(res.message);
        return false
      }else{
        this.formId = res['data'].id;
        if(redirect){
          this.helper.presentToast("The draft has been saved successfully")
          this.router.navigateByUrl("/dashboard");
        }
      }
      
    })
   }else{
    this.helper.presentToast("Please fill all the fields")
   }
  }

  submitSecond(redirect){
    if(this.secondFormGroup.valid){
      let formdata = new FormData();
      formdata.append('duration_diabetes',this.secondFormGroup.value.diabetes);
      formdata.append('treated_diabetes',this.secondFormGroup.value.treated_diabetes);
      formdata.append('family_diabetes',this.secondFormGroup.value.history_of_diabetes);
      formdata.append('hypertension',this.secondFormGroup.value.hypertension);
      formdata.append('medical_condition',this.secondFormGroup.value.comorbid_medical)
      formdata.append('duration_hypertension',this.secondFormGroup.value.duration_hypertension);
      formdata.append('systolic',this.secondFormGroup.value.systolicpicker);
      formdata.append('diastolic',this.secondFormGroup.value.diastolicpicker);
      formdata.append('smoking',this.secondFormGroup.value.smoking);
      formdata.append('alcohol',this.secondFormGroup.value.alcohol);
      if(this.showHypertensionDiv){
        let obj ={
          "hypertension_dur":true,
          "duration_hypertension":this.secondFormGroup.value.comorbid_hypertension_duration,
          "hypertension_medications":this.secondFormGroup.value.comorbid_hypertension_medication
        }
        formdata.append("hypertension_dur",JSON.stringify(obj))
      }

      if(this.showDyslipidemia){
        let obj ={
          "dyslipidemia_dur":true,
          "dyslipidemia_duration":this.secondFormGroup.value.comorbid_Dyslipidemia_duration,
          "dyslipidemia_medication":this.secondFormGroup.value.comorbid_Dyslipidemia_medication
        }
        formdata.append("dyslipidemia_dur",JSON.stringify(obj))
      }

      if(this.coronary){
        let obj = {
          "coronary_artery_dur":true,
          "coronary_artery_duration":this.secondFormGroup.value.comorbid_Artery_duration,
          "coronary_artery_medication":this.secondFormGroup.value.comorbid_Artery_medication
        }
        formdata.append("coronary_artery_dur",JSON.stringify(obj))
      }

      if(this.stroke){
        let obj = {
          "stroke_dur":true,
          "stroke_duration":this.secondFormGroup.value.comorbid_Stroke_duration,
          "stroke_medication":this.secondFormGroup.value.comorbid_Stroke_medication
        }
        formdata.append("stroke_dur",JSON.stringify(obj))
      }

      if(this.showNeuro){
        let obj = {
          "neuropathy_dur":true,
          "neuropathy_duration":this.secondFormGroup.value.comorbid_Neuropathy_duration,
          "neuropathy_medication":this.secondFormGroup.value.comorbid_Neuropathy_medication
        }
        formdata.append("neuropathy_dur",JSON.stringify(obj))
      }

      if(this.showRetino){
        let obj={
          "retinopathy_dur":true,
          "retinopathy_duration":this.secondFormGroup.value.comorbid_Retinopathy_duration,
          "retinopathy_medication":this.secondFormGroup.value.comorbid_Retinopathy_medication
        }
        formdata.append("retinopathy_dur",JSON.stringify(obj))
      }

      if(this.showNephro){
        let obj={
          "nephropathy_dur":true,
          "nephropathy_duration":this.secondFormGroup.value.comorbid_Nephropathy_duration,
          "nephropathy_medication":this.secondFormGroup.value.comorbid_Nephropathy_medication
        }
        formdata.append("nephropathy_dur",JSON.stringify(obj))
      }
      formdata.append("anti_diabetes_medication",JSON.stringify(this.antiDiabetesArr));
      if(this.isEditScreen){
        formdata.append('id',this.listingId);
      }else{
        formdata.append("id",this.formId);
      }
      this.apiService.addInitiate(formdata).subscribe(res=>{
        console.log(res);
        if(redirect){
          this.helper.presentToast("The draft has been saved successfully");
          this.router.navigateByUrl('/dashboard')
        }
      })

    }else{
      this.helper.presentToast("Please fill all the fields")
    }
  }

  getCreatinine(){
    let arr = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3,2.5,2.6,2.7,2.8,2.9,3.0,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.0]
    return arr;
  }

  submitThird(redirect){
    // this.helper.presentToast("Form submitted successfully");
    // this.router.navigateByUrl('/dashboard')
    if(this.thirdFormGroup.valid){
      let obj = {
        "fasting_plasma":this.thirdFormGroup.value.FastingPlasma,
        "postprandial_plasma":this.thirdFormGroup.value.PostprandialPlasma,
        "glyscolated":this.thirdFormGroup.value.Glycosylated,
        "hba1_c":this.thirdFormGroup.value.HbA1c,
        "s_creatinine":this.thirdFormGroup.value.Creatinine
      }
      let formdata = new FormData();
      formdata.append('blood_investigation',JSON.stringify(obj));
      if(this.isEditScreen){
        formdata.append('id',this.listingId);
      }else{
        formdata.append("id",this.formId);
      }
      this.apiService.addInitiate(formdata).subscribe(res=>{
        console.log(res);
        if(redirect){
          this.helper.presentToast("Draft has been saved successfully");
          this.router.navigateByUrl("/dashboard")
        }
      })
    }else{
      this.helper.presentToast("Please fill all the fields")
    }
  }
  
  ngOnInit() {
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userInfo = res;    
      }
    })
    this.storage.get("mobile_no").then(res=>{
      if(res){
        this.mob_no = res;
      }
    })

    this.firstFormGroup = this._formBuilder.group({
      "panNo":new FormControl(''),
      "date_of_visit":new FormControl('',[Validators.required]),
      "gender":new FormControl('',[Validators.required]),
      "age":new FormControl('',[Validators.required]),
      "weight":new FormControl('',[Validators.required]),
      "height":new FormControl('',[Validators.required]),
      "bmi":new FormControl('',[Validators.required]),
      "education":new FormControl('none',[Validators.required]),
      "employment":new FormControl('none',[Validators.required])
    });
    this.secondFormGroup = this._formBuilder.group({
      "diabetes_valid":new FormControl('',[Validators.required]),
      "diabetes":new FormControl('',[Validators.required]),
      "treated_diabetes":new FormControl('',[Validators.required]),
      "history_of_diabetes":new FormControl('',[Validators.required]),
      "hypertension":new FormControl('',[Validators.required]),
      "duration_hypertension":new FormControl('',[Validators.required]),
      "systolicpicker":new FormControl('',[Validators.required]),
      "diastolicpicker":new FormControl('',[Validators.required]),
      "smoking":new FormControl('',[Validators.required]),
      "alcohol":new FormControl('',[Validators.required]),
      "comorbid_medical":new FormControl('',[Validators.required]),
      "comorbid_hypertension":new FormControl(false),
      "comorbid_hypertension_duration":new FormControl(''),
      "comorbid_hypertension_medication":new FormControl(''),
      "comorbid_Dyslipidemia":new FormControl(false),
      "comorbid_Dyslipidemia_duration":new FormControl(''),
      "comorbid_Dyslipidemia_medication":new FormControl(''),
      "comorbid_Artery":new FormControl(false),
      "comorbid_Artery_duration":new FormControl(''),
      "comorbid_Artery_medication":new FormControl(''),
      "comorbid_Stroke":new FormControl(false),
      "comorbid_Stroke_duration":new FormControl(''),
      "comorbid_Stroke_medication":new FormControl(''),
      "comorbid_Neuropathy":new FormControl(false),
      "comorbid_Neuropathy_duration":new FormControl(''),
      "comorbid_Neuropathy_medication":new FormControl(''),
      "comorbid_Retinopathy":new FormControl(false),
      "comorbid_Retinopathy_duration":new FormControl(''),
      "comorbid_Retinopathy_medication":new FormControl(''),
      "comorbid_Nephropathy":new FormControl(false),
      "comorbid_Nephropathy_duration":new FormControl(''),
      "comorbid_Nephropathy_medication":new FormControl(''),
    });

    this.thirdFormGroup = this._formBuilder.group({
      "FastingPlasma":new FormControl('',[Validators.required]),
       "PostprandialPlasma":new FormControl('',[Validators.required]),
       "Glycosylated":new FormControl('1',[Validators.required]),
       "HbA1c":new FormControl('',[Validators.required]),
       "Creatinine":new FormControl(''),
          

    });

    this.fourthFormGroup = this._formBuilder.group({
      "Human_Premixed_30":new FormControl(false),    
      "Human_Premixed":new FormControl(''), 
      "Human_Premixed_30_Breakfast":new FormControl(''),
      "Human_Premixed_30_Lunch":new FormControl(''), 
      "Human_Premixed_30_Dinner":new FormControl(''),
      "Human_Premixed_50":new FormControl(false),
      "humanpremixed50":new FormControl(),
      "Human_Premixed_50_Breakfast":new FormControl(''),
      "Human_Premixed_50_Lunch":new FormControl(''),
      "Human_Premixed_50_Dinner":new FormControl(''),
      "Regular_insulin":new FormControl(false),
      "Regularinsulin":new FormControl(''),
      "Regular_insulin_Breakfast":new FormControl(''),
      "Regular_insulin_Lunch":new FormControl(''),
      "Regular_insulin_Dinner":new FormControl(''),
      "Regular_NPH":new FormControl(false),
      "RegularNPH":new FormControl(''),
      "Regular_NPH_Breakfast":new FormControl(''),
      "Regular_NPH_Lunch":new FormControl(''),
      "Regular_NPH_Dinner":new FormControl(''),   
      "Insulin_Glargine":new FormControl(false),
      "InsulinGlargine":new  FormControl(''),
      "Insulin_Glargine_Breakfast":new FormControl(''),
      "Insulin_Glargine_Lunch":new FormControl(''),
      "Insulin_Glargine_Dinner":new FormControl(''),  
    })
    
  }

  showHypertension(event){
    if(event.target.checked){
      this.showHypertensionDiv = true ;
      this.secondFormGroup.controls['comorbid_hypertension_duration'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_hypertension_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_hypertension_medication'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_hypertension_medication'].updateValueAndValidity();
      this.secondFormGroup.updateValueAndValidity()
          }else{
      this.showHypertensionDiv = false;
      this.secondFormGroup.controls['comorbid_hypertension_duration'].clearValidators();
      this.secondFormGroup.controls['comorbid_hypertension_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_hypertension_medication'].clearValidators();
      this.secondFormGroup.controls['comorbid_hypertension_medication'].updateValueAndValidity();
      this.secondFormGroup.updateValueAndValidity();
    }
  }

  showStroke($event){
    if($event.target.checked){
      this.stroke = true;
      this.secondFormGroup.controls['comorbid_Stroke_duration'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_Stroke_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Stroke_medication'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_Stroke_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }else{
      this.stroke = false
      this.secondFormGroup.controls['comorbid_Stroke_duration'].clearValidators();
      this.secondFormGroup.controls['comorbid_Stroke_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Stroke_medication'].clearValidators();
      this.secondFormGroup.controls['comorbid_Stroke_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }
  }


  coronaryArtery($event){
    if($event.target.checked){
      this.coronary= true;
      this.secondFormGroup.controls['comorbid_Artery_duration'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_Artery_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Artery_medication'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_Artery_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }else{
      this.coronary=false
      this.secondFormGroup.controls['comorbid_Artery_duration'].clearValidators();
      this.secondFormGroup.controls['comorbid_Artery_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Artery_medication'].clearValidators();
      this.secondFormGroup.controls['comorbid_Artery_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }
  }

  changeNeuropathy($event){
    if($event.target.checked){
      this.showNeuro =true;
      this.secondFormGroup.controls['comorbid_Neuropathy_duration'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_Neuropathy_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Neuropathy_medication'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_Neuropathy_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }else{
      this.showNeuro =false;
      this.secondFormGroup.controls['comorbid_Neuropathy_duration'].clearValidators();
      this.secondFormGroup.controls['comorbid_Neuropathy_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Neuropathy_medication'].clearValidators();
      this.secondFormGroup.controls['comorbid_Neuropathy_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }
  }

  showRetinopathy($event){
    if($event.target.checked){
      this.showRetino = true
      this.secondFormGroup.controls['comorbid_Retinopathy_duration'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_Retinopathy_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Retinopathy_medication'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_Retinopathy_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }else{
      this.showRetino = false;
      this.secondFormGroup.controls['comorbid_Retinopathy_duration'].clearValidators();
      this.secondFormGroup.controls['comorbid_Retinopathy_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Retinopathy_medication'].clearValidators();
      this.secondFormGroup.controls['comorbid_Retinopathy_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }
  }

  showNephropathy($event){
    if($event.target.checked){
      this.showNephro = true;
      this.secondFormGroup.controls['comorbid_Nephropathy_duration'].clearValidators();
      this.secondFormGroup.controls['comorbid_Nephropathy_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Nephropathy_medication'].clearValidators();
      this.secondFormGroup.controls['comorbid_Nephropathy_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }else{
      this.showNephro = false;
      this.secondFormGroup.controls['comorbid_Nephropathy_duration'].clearValidators();
      this.secondFormGroup.controls['comorbid_Nephropathy_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Nephropathy_medication'].clearValidators();
      this.secondFormGroup.controls['comorbid_Nephropathy_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }
  }

  dislipidemia($event){
    if($event.target.checked){
      this.showDyslipidemia=true;
      this.secondFormGroup.controls['comorbid_Dyslipidemia_duration'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_Dyslipidemia_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Dyslipidemia_medication'].setValidators([Validators.required]);
      this.secondFormGroup.controls['comorbid_Dyslipidemia_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }else{
      this.showDyslipidemia=false;
      this.secondFormGroup.controls['comorbid_Dyslipidemia_duration'].clearValidators()
      this.secondFormGroup.controls['comorbid_Dyslipidemia_duration'].updateValueAndValidity();
      this.secondFormGroup.controls['comorbid_Dyslipidemia_medication'].clearValidators()
      this.secondFormGroup.controls['comorbid_Dyslipidemia_medication'].updateValueAndValidity()
      this.secondFormGroup.updateValueAndValidity()
    }
  }

  antiDiabetes(event,name){
    if(event.target.checked){
      this.antiDiabetesArr.push(name)
      this.secondFormGroup.patchValue({
        'diabetes_valid':'abc'
      })
      this.secondFormGroup.updateValueAndValidity()
    }else{
      var i = this.antiDiabetesArr.indexOf(name);
      this.antiDiabetesArr.splice(i,1);
      this.secondFormGroup.patchValue({
        'diabetes_valid':''
      })
      this.secondFormGroup.updateValueAndValidity()
    }
  }

  getOptions(num: number) {
    return Array.from({length: num}, (v, k) => k + 1);
  }

  gethuman(num: number) {
    return Array.from({length: num}, (v, k) => k + 3);
  }

  getglycosylated(num:number){
    return Array.from({length: num}, (v, k) => k + 1);
  }

  complicationChange($events){
    if($events.target.value == 'yes'){
      //alert("yes");
      this.showComplicationsDesc=true
    }else{
      //alert("false")
      this.showComplicationsDesc=false
    }
  }

  coMorbid($event){
    if($event.target.value == 'yes'){
      //alert("yes");
      this.coMorbidDesc=true
    }else{
      //alert("false")
      this.coMorbidDesc=false
    }
  }
  back(){
    this.router.navigateByUrl('/dashboard')
  }

  changeHp($events){
    //console.log($events.detail.checked);
    if($events.detail.checked){
      this.showHpFields=true;
      this.doseArr.push('hp');
      this.fourthFormGroup.patchValue({
        'Human_Premixed':'',
        'Human_Premixed_30_Breakfast':'',
        'Human_Premixed_30_Lunch':'',
        'Human_Premixed_30_Dinner':''
      });
      this.fourthFormGroup.updateValueAndValidity();
      this.fourthFormGroup.controls['Human_Premixed'].setValidators([Validators.required])
      this.fourthFormGroup.controls['Human_Premixed'].updateValueAndValidity();
    }else{
      this.showHpFields=false;
      let index = this.doseArr.indexOf('hp');
      this.fourthFormGroup.patchValue({
        'Human_Premixed':'',
        'Human_Premixed_30_Breakfast':'',
        'Human_Premixed_30_Lunch':'',
        'Human_Premixed_30_Dinner':''
      });
      this.fourthFormGroup.updateValueAndValidity();
      this.doseArr.splice(index,1);
      this.fourthFormGroup.controls['Human_Premixed'].clearValidators()
      this.fourthFormGroup.controls['Human_Premixed'].updateValueAndValidity();
    }
  }
  hp30val;
  hp30NoFields = [];
  
  SelectHP1($event,type){
    if($event.target.value == 0 || $event.target.value == undefined){
      let index = this.hp30NoFields.indexOf(type);
      if(index>=0){
        this.hp30NoFields.splice(index,1)
      }
      if(this.hp30NoFields.length>0){
        this.fourthFormGroup.patchValue({
          'Human_Premixed':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'Human_Premixed':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }else{
      let index = this.hp30NoFields.indexOf(type);
      if(index<0){
        this.hp30NoFields.push(type)
      }
      if(this.hp30NoFields.length>0){
        this.fourthFormGroup.patchValue({
          'Human_Premixed':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'Human_Premixed':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }
  }
  
  changeRi($event){
    if($event.detail.checked){
      this.showHpFields2=true;
      this.doseArr.push('ri');
      this.fourthFormGroup.patchValue({
        'Regularinsulin':'',
        'Regular_insulin_Breakfast':'',
        'Regular_insulin_Lunch':'',
        'Regular_insulin_Dinner':''
      });
      this.fourthFormGroup.updateValueAndValidity();
      this.fourthFormGroup.controls['Regularinsulin'].setValidators([Validators.required])
      this.fourthFormGroup.controls['Regularinsulin'].updateValueAndValidity();
    
    }else{
      this.showHpFields2=false;
      let index = this.doseArr.indexOf('ri');
      this.doseArr.splice(index,1);
      this.fourthFormGroup.patchValue({
        'Regularinsulin':'',
        'Regular_insulin_Breakfast':'',
        'Regular_insulin_Lunch':'',
        'Regular_insulin_Dinner':''
      });
      this.fourthFormGroup.updateValueAndValidity();
      this.fourthFormGroup.controls['Regularinsulin'].clearValidators()
      this.fourthFormGroup.controls['Regularinsulin'].updateValueAndValidity();
    }
  }
  Regularinsulinval;
  Regularinsulinfields=[];
  
  SelectIs1($event,type){
    if($event.target.value == 0 || $event.target.value == undefined){
      let index = this.Regularinsulinfields.indexOf(type);
      if(index>=0){
        this.Regularinsulinfields.splice(index,1)
      }
      if(this.Regularinsulinfields.length>0){
        this.fourthFormGroup.patchValue({
          'Regularinsulin':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'Regularinsulin':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }else{
      let index = this.Regularinsulinfields.indexOf(type);
      if(index<0){
        this.Regularinsulinfields.push(type)
      }
      if(this.Regularinsulinfields.length>0){
        this.fourthFormGroup.patchValue({
          'Regularinsulin':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'Regularinsulin':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }
  }

  SelectIs2($event){
    if($event.target.value==0){
      this.Regularinsulinval = $event.target.value
    }
    if($event.target.value==0 && this.Regularinsulinval!=0){
      this.fourthFormGroup.patchValue({
        'Regularinsulin':''
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
    else{
      this.fourthFormGroup.patchValue({
        'Regularinsulin':$event.target.value
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
  }
  SelectIs3($event){
    if($event.target.value==0){
      this.Regularinsulinval = $event.target.value
    }
    if($event.target.value==0 && this.Regularinsulinval!=0){
      this.fourthFormGroup.patchValue({
        'Regularinsulin':''
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
    else{
      this.fourthFormGroup.patchValue({
        'Regularinsulin':$event.target.value
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
  }
 
  changeNph($event){
    if($event.detail.checked){
      this.showHpFields3=true;
      this.doseArr.push('nph');
      this.fourthFormGroup.patchValue({
        'RegularNPH':'',
        'Regular_NPH_Breakfast':'',
        'Regular_NPH_Lunch':'',
        'Regular_NPH_Dinner':''
      });
      this.fourthFormGroup.updateValueAndValidity();
      this.fourthFormGroup.controls['RegularNPH'].setValidators([Validators.required])
      this.fourthFormGroup.controls['RegularNPH'].updateValueAndValidity();
      // this.fourthFormGroup.controls['Regular_NPH_Lunch'].setValidators([Validators.required])
      // this.fourthFormGroup.controls['Regular_NPH_Lunch'].updateValueAndValidity()
      // this.fourthFormGroup.controls['Regular_NPH_Dinner'].setValidators([Validators.required])
      // this.fourthFormGroup.controls['Regular_NPH_Dinner'].updateValueAndValidity()
    }else{
      this.showHpFields3=false;
      let index = this.doseArr.indexOf('nph');
      this.doseArr.splice(index,1);
      this.fourthFormGroup.patchValue({
        'RegularNPH':'',
        'Regular_NPH_Breakfast':'',
        'Regular_NPH_Lunch':'',
        'Regular_NPH_Dinner':''
      });
      this.fourthFormGroup.updateValueAndValidity();
      this.fourthFormGroup.controls['RegularNPH'].clearValidators()
      this.fourthFormGroup.controls['RegularNPH'].updateValueAndValidity();
      // this.fourthFormGroup.controls['Regular_NPH_Lunch'].clearValidators()
      // this.fourthFormGroup.controls['Regular_NPH_Lunch'].updateValueAndValidity()
      // this.fourthFormGroup.controls['Regular_NPH_Dinner'].clearValidators()
      // this.fourthFormGroup.controls['Regular_NPH_Dinner'].updateValueAndValidity()
    }
  }

  RegularNPHval;
  nphFields=[];
  RegularNPH;
  
  Selectnph1($event,type){
    if($event.target.value == 0 || $event.target.value == undefined){
      let index = this.nphFields.indexOf(type);
      if(index>=0){
        this.nphFields.splice(index,1)
      }
      if(this.nphFields.length>0){
        this.fourthFormGroup.patchValue({
          'RegularNPH':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'RegularNPH':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }else{
      let index = this.nphFields.indexOf(type);
      if(index<0){
        this.nphFields.push(type)
      }
      if(this.nphFields.length>0){
        this.fourthFormGroup.patchValue({
          'RegularNPH':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'RegularNPH':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }
  }

  Selectnph2($event){
    if($event.target.value==0){
      this.RegularNPHval = $event.target.value
    }
    if($event.target.value==0 && this.RegularNPHval!=0){
      this.fourthFormGroup.patchValue({
        'RegularNPH':''
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
    else{
      this.fourthFormGroup.patchValue({
        'RegularNPH':$event.target.value
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
  }
 
  Selectnph3($event){
    if($event.target.value==0){
      this.RegularNPHval = $event.target.value
    }
    if($event.target.value==0 && this.RegularNPHval!=0){
      this.fourthFormGroup.patchValue({
        'RegularNPH':''
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
    else{
      this.fourthFormGroup.patchValue({
        'RegularNPH':$event.target.value
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
  }
  changeGlargine($event){
    if($event.detail.checked){
      this.showHpFields4=true;
      this.doseArr.push('glargine');
      this.fourthFormGroup.patchValue({
        'InsulinGlargine':'',
        'Insulin_Glargine_Breakfast':'',
        'Insulin_Glargine_Lunch':'',
        'Insulin_Glargine_Dinner':''
      });
      this.fourthFormGroup.updateValueAndValidity();
      this.fourthFormGroup.controls['InsulinGlargine'].setValidators([Validators.required])
      this.fourthFormGroup.controls['InsulinGlargine'].updateValueAndValidity();
      // this.fourthFormGroup.controls['Insulin_Glargine_Lunch'].setValidators([Validators.required])
      // this.fourthFormGroup.controls['Insulin_Glargine_Lunch'].updateValueAndValidity()
      // this.fourthFormGroup.controls['Insulin_Glargine_Dinner'].setValidators([Validators.required])
      // this.fourthFormGroup.controls['Insulin_Glargine_Dinner'].updateValueAndValidity()
    }else{
      this.showHpFields4=false;
      let index = this.doseArr.indexOf('glargine');
      this.doseArr.splice(index,1);
      this.fourthFormGroup.patchValue({
        'InsulinGlargine':'',
        'Insulin_Glargine_Breakfast':'',
        'Insulin_Glargine_Lunch':'',
        'Insulin_Glargine_Dinner':''
      });
      this.fourthFormGroup.updateValueAndValidity();
      this.fourthFormGroup.controls['InsulinGlargine'].clearValidators()
       this.fourthFormGroup.controls['InsulinGlargine'].updateValueAndValidity();
      // this.fourthFormGroup.controls['Insulin_Glargine_Lunch'].clearValidators()
      // this.fourthFormGroup.controls['Insulin_Glargine_Lunch'].updateValueAndValidity()
      // this.fourthFormGroup.controls['Insulin_Glargine_Dinner'].clearValidators()
      // this.fourthFormGroup.controls['Insulin_Glargine_Dinner'].updateValueAndValidity()

    }
  }
  glargineval:any = 0;
  glargineFields=[];
  
  Select1($event,type){
    if($event.target.value == 0 || $event.target.value == undefined){
      let index = this.glargineFields.indexOf(type);
      if(index>=0){
        this.glargineFields.splice(index,1)
      }
      if(this.glargineFields.length>0){
        this.fourthFormGroup.patchValue({
          'InsulinGlargine':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'InsulinGlargine':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }else{
      let index = this.glargineFields.indexOf(type);
      if(index<0){
        this.glargineFields.push(type)
      }
      if(this.glargineFields.length>0){
        this.fourthFormGroup.patchValue({
          'InsulinGlargine':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'InsulinGlargine':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }
  }

  Select2($event){
    if($event.target.value==0){
      this.glargineval = $event.target.value
    }
    if($event.target.value==0 && this.glargineval!=0){
  
      this.fourthFormGroup.patchValue({
        'InsulinGlargine': ''
      })
      
      this.fourthFormGroup.updateValueAndValidity()
    }
    else{
      this.fourthFormGroup.patchValue({
        'InsulinGlargine':$event.target.value
      })
      this.fourthFormGroup.updateValueAndValidity()
     
    }
    console.log('glargineval',this.glargineval);

  }
  Select3($event){
    if($event.target.value==0){
      this.glargineval = $event.target.value
    }
    if($event.target.value==0 &&  this.glargineval!=0){
     
      this.fourthFormGroup.patchValue({
        'InsulinGlargine':''
      })
      this.fourthFormGroup.updateValueAndValidity()  
    }
    else{
      this.fourthFormGroup.patchValue({
        'InsulinGlargine': $event.target.value
      })
      this.fourthFormGroup.updateValueAndValidity()
     
    }
    console.log('glargineval',this.glargineval);

  }

  changeHp50($event){
    if($event.detail.checked){
      this.showHpFields1=true;
      this.doseArr.push('hp50');
      this.fourthFormGroup.patchValue({
        'humanpremixed50':'',
        'Human_Premixed_50_Breakfast':'',
        'Human_Premixed_50_Lunch':'',
        'Human_Premixed_50_Dinner':''
      });
      this.fourthFormGroup.updateValueAndValidity();
      this.fourthFormGroup.controls['humanpremixed50'].setValidators([Validators.required])
      this.fourthFormGroup.controls['humanpremixed50'].updateValueAndValidity();
      // this.fourthFormGroup.patchValue({
      //   "Human_Premixed_50":'filled'
      // });
      // this.fourthFormGroup.updateValueAndValidity()
      // this.fourthFormGroup.controls['Human_Premixed_50_Lunch'].setValidators([Validators.required])
      // this.fourthFormGroup.controls['Human_Premixed_50_Lunch'].updateValueAndValidity()
      // this.fourthFormGroup.controls['Human_Premixed_50_Dinner'].setValidators([Validators.required]);
      // this.fourthFormGroup.controls['Human_Premixed_50_Dinner'].updateValueAndValidity()
      // this.fourthFormGroup.updateValueAndValidity()
    }else{
      this.showHpFields1=false;
      let index = this.doseArr.indexOf('hp50');
      this.fourthFormGroup.patchValue({
        'humanpremixed50':'',
        'Human_Premixed_50_Breakfast':'',
        'Human_Premixed_50_Lunch':'',
        'Human_Premixed_50_Dinner':''
      });
      this.fourthFormGroup.updateValueAndValidity();
      this.doseArr.splice(index,1)
      this.fourthFormGroup.controls['humanpremixed50'].clearValidators()
      this.fourthFormGroup.controls['humanpremixed50'].updateValueAndValidity();
      // this.fourthFormGroup.patchValue({
      //   "Human_Premixed_50":''
      // });
      // this.fourthFormGroup.updateValueAndValidity()
      // this.fourthFormGroup.controls['Human_Premixed_50_Lunch'].clearValidators()
      // this.fourthFormGroup.controls['Human_Premixed_50_Lunch'].updateValueAndValidity()
      // this.fourthFormGroup.controls['Human_Premixed_50_Dinner'].clearValidators()
      // this.fourthFormGroup.controls['Human_Premixed_50_Dinner'].updateValueAndValidity()
      // this.fourthFormGroup.updateValueAndValidity()
    }
  }
  h50val;
  h50fields=[];
  
  SelectHPf1($event,type){
    if($event.target.value == 0 || $event.target.value == undefined){
      let index = this.h50fields.indexOf(type);
      if(index>=0){
        this.h50fields.splice(index,1)
      }
      if(this.h50fields.length>0){
        this.fourthFormGroup.patchValue({
          'humanpremixed50':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'humanpremixed50':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }else{
      let index = this.h50fields.indexOf(type);
      if(index<0){
        this.h50fields.push(type)
      }
      if(this.h50fields.length>0){
        this.fourthFormGroup.patchValue({
          'humanpremixed50':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'humanpremixed50':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }
  }

  SelectHPf2($event){
    if($event.target.value==0){
      this.h50val = $event.target.value
    }
    if($event.target.value==0 && this.h50val!=0){
      this.fourthFormGroup.patchValue({
        'humanpremixed50':''
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
    else{
      this.fourthFormGroup.patchValue({
        'humanpremixed50':$event.target.value
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
  }
  SelectHPf3($event){
    if($event.target.value==0){
      this.h50val = $event.target.value
    }
    if($event.target.value==0 && this.h50val!=0){
      this.fourthFormGroup.patchValue({
        'humanpremixed50':''
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
    else{
      this.fourthFormGroup.patchValue({
        'humanpremixed50':$event.target.value
      })
      this.fourthFormGroup.updateValueAndValidity()
    }
  }
  efficacyChange($event){
    if($event.target.value == 'yes'){
     this.efficacyDesc=true
    }else{
     this.efficacyDesc=false
    }
  }

}