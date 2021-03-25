import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { Helper } from './../common/helper';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiService} from './../common/api.service';
import * as moment from 'moment';
import { Storage } from '@ionic/storage';
import { $ } from 'protractor';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.page.html',
  styleUrls: ['./begin.page.scss'],
})
export class BeginPage implements OnInit {
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
  oneSelected: boolean=false;
  showHypertensionDiv: boolean=false;
  showDyslipidemia: boolean=false;
  coronary: boolean=false;
  stroke: boolean=false;
  showNeuro: boolean=false;
  showRetino: boolean=false;
  fourthFormGroup: FormGroup;
  formId:any;
  showNephro: boolean=false;
  diabetesMedi: any[]=[];
  isEditScreen: boolean;
  listingId: any;
  beginDetails: any;
  diabetesMedi1: any=[];
  date_of_visit: Date;
  userInfo: any;
  mob_no: any;
  completed: boolean;
 // glarginevalidation:boolean;
  glycosylatedColumns: { name: string; options: { text: string; value: string; }[]; }[];
  glargineinsulinrequired: boolean;
  selectglagrine: boolean;

  constructor(private pickerController: PickerController,
              private storage:Storage,
              public activatedRoute: ActivatedRoute,
              private apiService:ApiService,
              private router:Router,
              private helper:Helper,
              private _formBuilder: FormBuilder) {

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
]



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
      });
      self.firstFormGroup.updateValueAndValidity();
      
    }else{
      alert("value should be between 40 and 150")
      self.firstFormGroup.patchValue({
        "weight":''
      })
      self.firstFormGroup.updateValueAndValidity()
      selection=0
    }
  }else{
    self.firstFormGroup.patchValue({
      "weight":''
    })
    self.firstFormGroup.updateValueAndValidity()
    selection=0
  }

  
  if(self.firstFormGroup.value.height && self.firstFormGroup.value.height!=''){
    var height = self.firstFormGroup.value.height
    if(height!=''){
      var bmi = ((selection/height/height)*10000).toFixed(1)
      console.log(bmi)
      self.firstFormGroup.patchValue({"bmi":bmi});
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
    this.showNephro = true
    this.secondFormGroup.controls['comorbid_Nephropathy_duration'].setValidators([Validators.required]);
    this.secondFormGroup.controls['comorbid_Nephropathy_duration'].updateValueAndValidity();
    this.secondFormGroup.controls['comorbid_Nephropathy_medication'].setValidators([Validators.required]);
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
  if(selection >= 120 && selection <= 200){
    self.firstFormGroup.patchValue({
      "height":selection
    });
    self.firstFormGroup.updateValueAndValidity();

  }else{
    alert("value selection must be between 120 to  200")
    self.firstFormGroup.patchValue({
      "height":''
    })
    self.firstFormGroup.updateValueAndValidity();
    selection=0;
  }

  if(self.firstFormGroup.value.weight && self.firstFormGroup.value.weight!=''){
    var weight = self.firstFormGroup.value.weight
    if(selection != ''){
      var bmi = ((weight/selection/selection)*10000).toFixed(1)
      console.log(bmi)
      self.firstFormGroup.patchValue({"bmi":bmi})
      self.firstFormGroup.updateValueAndValidity();
    }
  }else{
    self.helper.presentToast("Please enter weight")
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
    self.secondFormGroup.updateValueAndValidity();

  }else{
    alert("value selection must be between 40 to  400")
    self.secondFormGroup.patchValue({
      "systolicpicker":''
    })
    self.secondFormGroup.updateValueAndValidity();
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
  });
  self.secondFormGroup.updateValueAndValidity()

}else{
  alert("value selection must be between 40 to  400")
  self.secondFormGroup.patchValue({
    "diastolicpicker":''
  })
  self.secondFormGroup.updateValueAndValidity()
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
  });
  self.thirdFormGroup.updateValueAndValidity()

}else{
  alert("value selection must be between 40 to  400")
  self.thirdFormGroup.patchValue({
    "FastingPlasma":''
  })
  self.thirdFormGroup.updateValueAndValidity()
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
  self.thirdFormGroup.updateValueAndValidity()

}else{
  alert("value selection must be between 50 to  500")
  self.thirdFormGroup.patchValue({
    "PostprandialPlasma":''
  })
  self.thirdFormGroup.updateValueAndValidity()
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

  ngOnInit() {
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
"diabetes_valid":new FormControl('', [Validators.required]),
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
       "Creatinine":new FormControl('')
    });

    this.fourthFormGroup = this._formBuilder.group({
      "Dose_of_Insulin":new FormControl('',[Validators.required]),
       "Insulin_Glargine":new FormControl('',[Validators.required]),
       "Insulin_Glargine_Breakfast":new FormControl(''),
       "Insulin_Glargine_Lunch" : new FormControl(''),
       "Insulin_Glargine_Dinner":new FormControl(''),
       "glarginevalidation":new FormControl('')  
    })
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
    }
  }

  getDetails(){
    let formdata = new FormData();
    formdata.append('id',this.listingId)
    this.apiService.getBeginDetails(formdata).subscribe(res=>{
      console.log(res['data']);
      this.beginDetails = res['data'];
      this.populateDetails()
    });
    
  }

  populateDetails(){
    console.log(this.beginDetails)
    //populate first form
    if(this.beginDetails && this.beginDetails.pen_serial!=''){
      this.firstFormGroup.patchValue({
        "panNo":this.beginDetails.pen_serial
      });
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.beginDetails && this.beginDetails.date_visit!=''){
      this.firstFormGroup.patchValue({
        'date_of_visit':new Date(this.beginDetails.date_visit)
      });
      this.date_of_visit = new Date(this.beginDetails.date_visit);
      this.firstFormGroup.get('date_of_visit').updateValueAndValidity();
      this.firstFormGroup.updateValueAndValidity()
    }
    // if(this.beginDetails && this.beginDetails.date_of_visit!=''){
    //   this.firstFormGroup.patchValue({
    //     'date_of_visit':this.beginDetails.date_of_visit
    //   });
    //   this.firstFormGroup.updateValueAndValidity()
    // }
    if(this.beginDetails && this.beginDetails.sex!=''){
      this.firstFormGroup.patchValue({
        "gender":this.beginDetails.sex
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.age){
      this.firstFormGroup.patchValue({
        'age':this.beginDetails.age
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.weight){
      this.firstFormGroup.patchValue({
        'weight':this.beginDetails.weight
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.height){
      this.firstFormGroup.patchValue({
        'height':this.beginDetails.height 
      });
      this.firstFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.bmi){
      this.firstFormGroup.patchValue({
        'bmi':this.beginDetails.bmi
      });
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.beginDetails && this.beginDetails.education){
      this.firstFormGroup.patchValue({
        'education':this.beginDetails.education
      })
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.beginDetails && this.beginDetails.employment){
      this.firstFormGroup.patchValue({
        'employment':this.beginDetails.employment
      });
      this.firstFormGroup.updateValueAndValidity();
    }
    if(this.beginDetails && this.beginDetails.duration_diabetes){
      this.secondFormGroup.patchValue({
        'diabetes':this.beginDetails.duration_diabetes
      });
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.treated_diabetes){
      this.secondFormGroup.patchValue({
        'treated_diabetes':this.beginDetails.treated_diabetes
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.family_diabetes){
      this.secondFormGroup.patchValue({
        'history_of_diabetes':this.beginDetails.family_diabetes
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.hypertension){
      this.secondFormGroup.patchValue({
        'hypertension':this.beginDetails.hypertension
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.systolic){
      this.secondFormGroup.patchValue({
        'systolicpicker':this.beginDetails.systolic
      });
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.beginDetails && this.beginDetails.diastolic){
      this.secondFormGroup.patchValue({
        'diastolicpicker':this.beginDetails.diastolic
      });
      this.secondFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.smoking){
      this.secondFormGroup.patchValue({
        'smoking':this.beginDetails.smoking
      });
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.beginDetails && this.beginDetails.alcohol){
      this.secondFormGroup.patchValue({
        'alcohol':this.beginDetails.alcohol
      })
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.beginDetails && this.beginDetails.hypertension_dur == '' && 
    this.beginDetails.dyslipidemia_dur == '' && this.beginDetails.coronary_artery_dur == ''
    && this.beginDetails.stroke_dur == '' && this.beginDetails.neuropathy_dur == ''
    && this.beginDetails.retinopathy_dur == '' && this.beginDetails.nephropathy_dur == '')
    {
      this.secondFormGroup.patchValue({
        'comorbid_medical':'no'
      });
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.beginDetails && this.beginDetails.duration_hypertension !=''){
      this.secondFormGroup.patchValue({
        'duration_hypertension':this.beginDetails.duration_hypertension
      });
      this.secondFormGroup.updateValueAndValidity();
    }
    if(this.beginDetails && this.beginDetails.hypertension_dur != ''){
      this.coMorbidDesc=true;
      this.showHypertensionDiv=true;
      this.secondFormGroup.patchValue({
        'comorbid_medical':'yes'
      });
      let obj = JSON.parse(this.beginDetails.hypertension_dur)
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
    if(this.beginDetails && this.beginDetails.dyslipidemia_dur !=''){
      this.coMorbidDesc=true;
      this.showDyslipidemia=true;
      this.secondFormGroup.patchValue({
        'comorbid_medical':'yes'
      });
      let obj = JSON.parse(this.beginDetails.dyslipidemia_dur);

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
    if(this.beginDetails && this.beginDetails.coronary_artery_dur != ''){
      this.coMorbidDesc=true;
      this.coronary=true;
      let obj = JSON.parse(this.beginDetails.coronary_artery_dur)
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
    if(this.beginDetails && this.beginDetails.stroke_dur!=''){
      this.coMorbidDesc=true;
      this.stroke=true;
      let obj = JSON.parse(this.beginDetails.stroke_dur);
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
    if(this.beginDetails && this.beginDetails.neuropathy_dur!=''){
      this.coMorbidDesc=true;
      this.showNeuro=true;
      let obj = JSON.parse(this.beginDetails.neuropathy_dur);
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
    if(this.beginDetails && this.beginDetails.retinopathy_dur!=''){
      this.coMorbidDesc=true;
      this.showRetino=true;
      let obj = JSON.parse(this.beginDetails.retinopathy_dur)
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
    if(this.beginDetails && this.beginDetails.nephropathy_dur!=''){
      this.coMorbidDesc=true;
      this.showNephro=true;
      let obj = JSON.parse(this.beginDetails.nephropathy_dur)
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
      
      console.log(this.beginDetails.anti_diabetes_medication)
     
    }
    this.diabetesMedi1=this.beginDetails.anti_diabetes_medication;
    console.log(this.diabetesMedi1)
    if(this.beginDetails && this.beginDetails.fasting_plasma){
      this.thirdFormGroup.patchValue({
        'FastingPlasma':this.beginDetails.fasting_plasma
      });
      this.thirdFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.postprandial_plasma){
      this.thirdFormGroup.patchValue({
        'PostprandialPlasma':this.beginDetails.postprandial_plasma
      });
      this.thirdFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.glycosylated){
      this.thirdFormGroup.patchValue({
        'Glycosylated':this.beginDetails.glycosylated
      });
      this.thirdFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.hbac_lab){
      this.thirdFormGroup.patchValue({
        'HbA1c':this.beginDetails.hbac_lab
      })
      this.thirdFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.s_creatinine){
      this.thirdFormGroup.patchValue({
        'Creatinine':parseFloat(this.beginDetails.s_creatinine)
      });
      this.thirdFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.dose_insulin){
      this.fourthFormGroup.patchValue({
        'Dose_of_Insulin':this.beginDetails.dose_insulin
      });
      this.fourthFormGroup.updateValueAndValidity()
    }
    if(this.beginDetails && this.beginDetails.glargine_insulin){
      this.showHpFields4 = true;
      let obj = JSON.parse(this.beginDetails.glargine_insulin)
      
      console.log(obj)
      
      this.fourthFormGroup.patchValue({
        'Insulin_Glargine_Breakfast':obj.glargine_insulin_breakfast,
        'Insulin_Glargine_Lunch':obj.glargine_insulin_lunch,
        'Insulin_Glargine_Dinner':obj.glargine_insulin_dinner
      }); 
      this.fourthFormGroup.get('Insulin_Glargine_Breakfast').updateValueAndValidity()
      this.fourthFormGroup.updateValueAndValidity();
      
    }
  }

  checkAntiDiabetes(name){
    if(this.diabetesMedi1.indexOf(name)>-1){
      return true
    }else{
      return false
    }
  }

  back(){
    this.router.navigateByUrl('/dashboard')
  }

  gethuman(num: number) {
    return Array.from({length: num}, (v, k) => k + 3);
  }
  getCreatinine(){
    let arr = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3,2.5,2.6,2.7,2.8,2.9,3.0,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.7,4.8,4.9,5.0]
    return arr;
  }
  getglycosylated(num:number){
    return Array.from({length: num}, (v, k) => k + 1);

  }
  getOptions(num: number) {
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

  fourthFormSubmit(){
    // this.helper.presentToast("Form submitted successfully");
    //   this.router.navigateByUrl('/dashboard')
    if(this.fourthFormGroup.valid){
      this.selectglagrine = false
      let formdata = new FormData();
      formdata.append('dose_insulin',this.fourthFormGroup.value.Dose_of_Insulin);
      formdata.append('status','yes');
      if(this.isEditScreen){
        formdata.append('id',this.listingId);
      }else{
        formdata.append("id",this.formId);
      }
      if(this.showHpFields4){
        let obj = {
          "glargine_insulin":true,
          "glargine_insulin_breakfast":this.fourthFormGroup.value.Insulin_Glargine_Breakfast,
          "glargine_insulin_lunch":this.fourthFormGroup.value.Insulin_Glargine_Lunch,
          "glargine_insulin_dinner":this.fourthFormGroup.value.Insulin_Glargine_Dinner
        }
        formdata.append("glargine_insulin",JSON.stringify(obj))
      }
      
      this.apiService.addBegin(formdata).subscribe(res=>{
        this.helper.presentToast("Form submitted successfully");
        this.router.navigateByUrl('/dashboard')
      })
    }else{
      console.log(this.fourthFormGroup.valid)
      this.helper.presentToast("Please fill all the fields") 
     
        if(this.fourthFormGroup.value.Insulin_Glargine != '' && this.fourthFormGroup.value.glarginevalidation==''){
          this.helper.presentToast("Please select atleast one option")
        }else{
          this.helper.presentToast("Please fill all the fields") 
        }
       

      
    }
  }

  secondSubmit(redirect){
    if(this.secondFormGroup.valid){
      let formdata = new FormData();
      formdata.append('duration_diabetes',this.secondFormGroup.value.diabetes);
      formdata.append('treated_diabetes',this.secondFormGroup.value.treated_diabetes);
      formdata.append('family_diabetes',this.secondFormGroup.value.history_of_diabetes);
      formdata.append('hypertension',this.secondFormGroup.value.hypertension);
      formdata.append('duration_hypertension',this.secondFormGroup.value.duration_hypertension);
      formdata.append('systolic',this.secondFormGroup.value.systolicpicker);
      formdata.append('medical_condition',this.secondFormGroup.value.comorbid_medical)
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
      console.log(JSON.stringify(this.diabetesMedi))
      formdata.append("anti_diabetes_medication",JSON.stringify(this.diabetesMedi));   
      if(this.isEditScreen){
        formdata.append('id',this.listingId);
      }else{
        formdata.append("id",this.formId);
      }
      this.apiService.addBegin(formdata).subscribe(res=>{
        console.log(res)
        if(redirect){
          this.helper.presentToast("The draft has been saved successfully")
          this.router.navigateByUrl("/dashboard")
        }
        
      })

    }else{
      this.helper.presentToast("Please fill all the fields")
    }
  }

  antiDiabetes($event,name){
    console.log($event)
    if($event.detail.checked){
      this.diabetesMedi.push(name)
      this.secondFormGroup.patchValue({
        'diabetes_valid':'abc'
      })
      this.secondFormGroup.updateValueAndValidity()
    }else{
      let i = this.diabetesMedi.indexOf(name);
      this.diabetesMedi.splice(i,1)
      this.secondFormGroup.patchValue({
        'diabetes_valid':''
      })
      this.secondFormGroup.updateValueAndValidity()
    }
    console.log(this.diabetesMedi)
  }

  

  thirdFormSubmit(redirect){
    if(this.thirdFormGroup.valid){
      let formdata = new FormData();
      formdata.append('fasting_plasma',this.thirdFormGroup.value.FastingPlasma);
      formdata.append('postprandial_plasma',this.thirdFormGroup.value.PostprandialPlasma);
      formdata.append('glycosylated',this.thirdFormGroup.value.Glycosylated);
      formdata.append('hbac_lab',this.thirdFormGroup.value.HbA1c);
      formdata.append('s_creatinine',this.thirdFormGroup.value.Creatinine);
      if(this.isEditScreen){
        formdata.append('id',this.listingId);
      }else{
        formdata.append("id",this.formId);
      }
      this.apiService.addBegin(formdata).subscribe(res=>{
        console.log(res);
        if(redirect){
          this.helper.presentToast("The draft has been submitted successfully");
          this.router.navigateByUrl("/dashboard")
        }
      });
    }else{
      this.helper.presentToast("Please fill all the fields")
    }
  }

  firstSubmit(saveAsDraft){
    if(this.firstFormGroup.valid){
      let date = new Date(this.firstFormGroup.value.date_of_visit);

      let formdata = new FormData();
      //formdata.append('mobile',this.mob_no);
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
      this.apiService.addBegin(formdata).subscribe(res=>{
        this.formId = res['data'].from_id;
        if(saveAsDraft){
          this.helper.presentToast("The draft has been saved successfully")
          this.router.navigateByUrl("/dashboard")
        }
      })
      
    }else{

      this.helper.presentToast("Please fill all the fields")
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

  changeHp($events){
    //console.log($events.detail.checked);
    if($events.detail.checked){
      this.showHpFields=true
    }else{
      this.showHpFields=false;
    }
  }

  changeRi($event){
    if($event.detail.checked){
      this.showHpFields2=true
    }else{
      this.showHpFields2=false;
    }
  }

  changeNph($event){
    if($event.detail.checked){
      this.showHpFields3=true
    }else{
      this.showHpFields3=false;
    }
  }

  changeGlargine($event){
    if($event.detail.checked){
      this.showHpFields4=true
      this.glargineinsulinrequired=false
      if(!this.completed){
        this.fourthFormGroup.patchValue({
          'glarginevalidation':'',
          'Insulin_Glargine_Breakfast':'',
          'Insulin_Glargine_Lunch':'',
          'Insulin_Glargine_Dinner':''
        });
      }
      
      this.fourthFormGroup.updateValueAndValidity();
      this.fourthFormGroup.controls['glarginevalidation'].setValidators([Validators.required])
      this.fourthFormGroup.controls['glarginevalidation'].updateValueAndValidity();
      this.fourthFormGroup.patchValue({
        "Insulin_Glargine":'filled'
      });
      this.fourthFormGroup.controls['Insulin_Glargine'].updateValueAndValidity();
      this.fourthFormGroup.updateValueAndValidity()
    }else{
      this.showHpFields4=false;
      this.glargineinsulinrequired=true;
      if(!this.completed){
        this.fourthFormGroup.patchValue({
          'glarginevalidation':'',
          'Insulin_Glargine_Breakfast':'',
          'Insulin_Glargine_Lunch':'',
          'Insulin_Glargine_Dinner':''
        });
      }
      this.fourthFormGroup.updateValueAndValidity();
      this.fourthFormGroup.controls['glarginevalidation'].clearValidators()
      this.fourthFormGroup.controls['glarginevalidation'].updateValueAndValidity();
      this.fourthFormGroup.patchValue({
        "Insulin_Glargine":''
      });
      this.fourthFormGroup.controls['Insulin_Glargine'].updateValueAndValidity();
      this.fourthFormGroup.updateValueAndValidity()
    }
  }
  glargineval:any = [];
  
  select1($event,type){
    if($event.target.value == 0 || $event.target.value == undefined){
      let index = this.glargineval.indexOf(type);
      if(index>=0){
        this.glargineval.splice(index,1)
      }
      if(this.glargineval.length>0){
        this.fourthFormGroup.patchValue({
          'glarginevalidation':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'glarginevalidation':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }else{
      let index = this.glargineval.indexOf(type);
      if(index<0){
        this.glargineval.push(type)
      }
      if(this.glargineval.length>0){
        this.fourthFormGroup.patchValue({
          'glarginevalidation':'filled'
        });
        this.fourthFormGroup.updateValueAndValidity();
      }else{
        this.fourthFormGroup.patchValue({
          'glarginevalidation':''
        })
        this.fourthFormGroup.updateValueAndValidity();
      }
    }

  }
  select2($event){
    if($event.target.value==0){
      this.glargineval = $event.target.value
    }
    if($event.target.value==0 && this.glargineval!=0){
  
      this.fourthFormGroup.patchValue({
        'glarginevalidation': ''
      })
      
      this.fourthFormGroup.updateValueAndValidity()
      this.selectglagrine = true
      
    }
    else{
     
      this.selectglagrine = false
      this.fourthFormGroup.patchValue({
        'glarginevalidation':$event.target.value
      })
      this.fourthFormGroup.updateValueAndValidity()
     
    }
    console.log('glargineval',this.glargineval);

  }
  select3($event){
    if($event.target.value==0){
      this.glargineval = $event.target.value
    }
    if($event.target.value==0 &&  this.glargineval!=0){
     
      this.fourthFormGroup.patchValue({
        'glarginevalidation':''
      })
      this.fourthFormGroup.updateValueAndValidity()
      this.selectglagrine = true
      
    }
    else{
    
      this.selectglagrine = false
      this.fourthFormGroup.patchValue({
        'glarginevalidation': $event.target.value
      })
      this.fourthFormGroup.updateValueAndValidity()
     
    }
    console.log('glargineval',this.glargineval);

  }

  changeHp50($event){
    if($event.detail.checked){
      this.showHpFields1=true
    }else{
      this.showHpFields1=false;
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
