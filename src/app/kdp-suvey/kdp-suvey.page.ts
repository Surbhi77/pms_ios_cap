import { Component, ViewChild } from '@angular/core';
import { Validators,ValidationErrors, FormGroup, FormControl } from '@angular/forms';
import { IonReorderGroup, AlertController,ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import {HowToPage} from  './../how-to/how-to.page'
import {ApiService} from './../common/api.service';
import { Storage } from '@ionic/storage';
import { Helper } from './../common/helper';
  

@Component({
  selector: 'app-kdp-suvey',
  templateUrl: './kdp-suvey.page.html',
  styleUrls: ['./kdp-suvey.page.scss'],
})
export class KdpSuveyPage {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  kdpStep1:any;
  reasons:any=[
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
  reluctant_insulin:any=8
  socioeconomic_level:any=2
  reluctant_start:any=1
  years_of_age:any=5
  cardiovascular:any=7
  appointment_treatment:any=2
  excess_weight:any=6
  staff_notenough:any=10
  self_monitoring:any=3
  not_follow_medical:any=9
  mappingReasons:any={
    'reluctant_start':'Are reluctant to start it',
    'appointment_treatment':'Do not adhere to their appointments and treatment regimen',
    'self_monitoring':'Do not adhere to their self-monitoring of blood glucose',
    'socioeconomic_level':'Are from a low socioeconomic status',
    'years_of_age':'Are ≥75 years of age because of the risk of hypoglycemia',
    'excess_weight':'Have excess weight (BMI ≥ 35) because of the risk for weight gain',
    'cardiovascular':'Have cardiovascular diseases',
    // 'reluctant_insulin':'I may be reluctant to initiate insulin therapy for my patients with T2DM',
    'not_follow_medical':'I do not follow the medical updates on insulin therapy',
    'staff_notenough':'I do not have enough staff for patient education and training'
};
acceptanceInsulin:any=[
  '1-Fear of injection',
  '2-Fear of hypoglycemia',
  '3-Fear of weight gain',
  '4-Cost of insulin',
  '5-Skepticism about Insulin efficacy',
  '6-Perception of the initiation of insulin as a personal failure in controlling T2DM',
  '7-Perception of the initiation of insulin as worsening of the disease',
  '8-Worry about their ability to manage insulin therapy and to adhere to physicians recommendations',
  '9-Perception of the initiation of insulin therapy as a threat to their quality of life'  
]
fear_injection:any=1
fear_hypoglycemia:any=2
cost_insulin:any=4
fear_weight:any=3
skepticism_insulin:any=5
insulin_failure:any=6
insulin_worsening:any=7
manage_insulin_therapy:any=8
threat_quality:any=9;

mappingBarries:any={
  'fear_injection':'Fear of injection',
  'fear_hypoglycemia':'Fear of hypoglycemia',
  'cost_insulin':'Cost of insulin',
  'fear_weight':'Fear of weight gain',
  'skepticism_insulin':'Skepticism about Insulin efficacy',
  'insulin_failure':'Perception of the initiation of insulin as a personal failure in controlling T2DM',
  'insulin_worsening':'Perception of the initiation of insulin as worsening of the disease',
  'manage_insulin_therapy':'Worry about their ability to manage insulin therapy and to adhere to physicians recommendations',
  'threat_quality':'Perception of the initiation of insulin therapy as a threat to their quality of life'
}
  sixMonths: any=0;
  sum:any=0;
  oneYear: any=0;
  showOne: boolean = false;
  threeYear: any=0;
  showThree: boolean =false;
  FiveYear: any=0;
  showFive:boolean=false
  makeSixDisabled: boolean;
  makeOneDisabled: boolean;
  makeFiveDisabled: boolean;
  impacts: any=[];
  influence:any=[];
  kdpStep2: FormGroup;
  public rangeObject:any= {lower: 0, upper: 100};
  public rangeObject1:any= {lower: 0, upper: 100};
  public rangeObject2:any= {lower: 0, upper: 100};
  public rangeObject3:any= {lower: 0, upper: 100};
  userInfo: any;



  
  constructor(public storage:Storage,
              private helper:Helper,
              private alertController:AlertController,
              private apiService:ApiService,
              public modalController: ModalController,
              private router:Router) { }

  ngOnInit() {    
    this.kdpStep1 =  new FormGroup({
      delay_insulin : new FormControl('', [Validators.required]),
      insulin_tdm: new FormControl('',[Validators.required]),
      insulin_regardless: new FormControl('',[Validators.required]),
      benifit_insulin:new FormControl('',[Validators.required]),
      receiving_insulin:new FormControl('',[Validators.required]),
      success_insulin:new FormControl('',[Validators.required]),
      notcomplicated_insulin:new FormControl('',[Validators.required]),
      insulin_therapy:new FormControl('',[Validators.required])
    });

    this.kdpStep2 = new FormGroup({
      six_months:new FormControl('0',[Validators.required]),
      one_to_two_year:new FormControl('0',[Validators.required]),
      three_to_five_year:new FormControl('0',[Validators.required]),
      five_years:new FormControl('0',[Validators.required]),
      impacts:new FormControl('',[Validators.required]),
      influence:new FormControl('',[Validators.required])
    });

    
  }

  valueChanged(event){
    console.log(event);
    this.sixMonths = event.value;
    this.sum = this.oneYear+this.FiveYear+this.threeYear+this.sixMonths;
    // this.sum=0+this.sixMonths
    this.kdpStep1.patchValue({
      'six_months':this.sixMonths
    })
    this.kdpStep1.updateValueAndValidity(); 
  }

  valueChangedThree(event){
    this.threeYear = event.value;
    this.sum = this.oneYear+this.FiveYear+this.threeYear+this.sixMonths;
    this.kdpStep1.patchValue({
      'three_to_five_year':this.threeYear
    })
    this.kdpStep1.updateValueAndValidity()
  }

  valueChangedFive(event){
    this.FiveYear = event.value;
    this.sum = this.oneYear+this.FiveYear+this.threeYear+this.sixMonths;
    this.makeFiveDisabled=true
    this.kdpStep1.patchValue({
      'five_years':this.FiveYear
    })
    this.kdpStep1.updateValueAndValidity()
  }

  valueChangedOne(event){
    this.oneYear = event.value;
    this.sum = this.oneYear+this.FiveYear+this.threeYear+this.sixMonths;
    this.makeSixDisabled=true;
    this.kdpStep1.patchValue({
      'six_months':event.value
    });
    this.kdpStep1.updateValueAndValidity()
  }

  impactChange(event,name){
    if(event.target.checked){
      this.impacts.push(name);
    }else{
      var index= this.impacts.indexOf(name);
      this.impacts.splice(index,1);
    }
    if(this.impacts.length){
      this.kdpStep2.patchValue({
        'impacts':this.impacts.toString()
      })
      this.kdpStep2.updateValueAndValidity();
    }else{
      this.kdpStep2.patchValue({
        'impacts':''
      })
      this.kdpStep2.updateValueAndValidity();
    }
  }

  influenceChange(event,name){
    if(event.target.checked){
      this.influence.push(name);
    }else{
      var index = this.influence.indexOf(name);
      this.influence.splice(index,1);
    }
    if(this.influence.length){
      this.kdpStep2.patchValue({
        'influence':this.influence.toString()
      })
    }else{
      this.kdpStep2.patchValue({
        'influence':''
      })
    }
    this.kdpStep2.updateValueAndValidity();
  }

  stepChanged(event, stepper){
    console.log(event)
  }

  doReorderAcceptance(ev:any){
    console.log(ev,'Dragged from index', ev.detail.from, 'to', ev.detail.to);
    var element = this.acceptanceInsulin[ev.detail.from];
    this.acceptanceInsulin.splice(ev.detail.from, 1);
    this.acceptanceInsulin.splice(ev.detail.to, 0, element);
    console.log(this.acceptanceInsulin);
    var self = this;
    this.acceptanceInsulin.forEach(function(element,index) {
      var arr = element.split(/-(.+)/);
      var str = arr[1].trim();
      // console.log(str,self.mappingBarries[str]);
      // var prop = self.mappingBarries[str]
      // console.log(prop)
      // self[prop] = index+1;
      // console.log(self[prop],index+1,self.threat_quality)
      self.acceptanceInsulin[index]= (index+1)+"-"+str
      
    });
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log(ev,'Dragged from index', ev.detail.from, 'to', ev.detail.to);
    var element = this.reasons[ev.detail.from];
    this.reasons.splice(ev.detail.from, 1);
    this.reasons.splice(ev.detail.to, 0, element);
    console.log(this.reasons);
    var self = this;
    this.reasons.forEach(function(element,index) {
      var arr = element.split(/-(.+)/);
      var str = arr[1].trim();
      // console.log(self.mappingReasons[str]);
      // var prop = self.mappingReasons[str]
      // console.log(prop)
      // self[prop] = index+1;
      // console.log(self[prop],index+1,self.self_monitoring)
      self.reasons[index]= (index+1)+"-"+str
      
    });
    console.log(this.reasons)
    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: HowToPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  howtouse(){
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
         this.router.navigateByUrl('/sign-in')
        }
      }]
    })
    .then(alert => {
        alert.present();
    });
  }

  getIndexesReason(reason){
    var index = this.reasons.findIndex(element => element.includes(reason));
    return index+1;
  }

  getMappingIndexes(reason){
    var index = this.acceptanceInsulin.findIndex(element => element.includes(reason));
    return index+1;
  }

  showNext(){
    
  }

  ionViewWillEnter(){
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userInfo = res;    
      }
    })
  }

  async submit(){
    this.sum = this.oneYear+this.FiveYear+this.threeYear+this.sixMonths;
    if(this.kdpStep2.valid && this.sum == 100 && this.impacts.length == 3 && this.influence.length == 2){
      let formdata = new FormData();
      formdata.append('user_id',this.userInfo.doctor_id)
      formdata.append('delay_insulin',this.kdpStep1.value.delay_insulin);
      formdata.append('insulin_tdm',this.kdpStep1.value.insulin_tdm);
      formdata.append('insulin_regardless',this.kdpStep1.value.insulin_regardless);
      formdata.append('benifit_insulin',this.kdpStep1.value.benifit_insulin);
      formdata.append('receiving_insulin',this.kdpStep1.value.receiving_insulin);
      formdata.append('success_insulin',this.kdpStep1.value.success_insulin);
      formdata.append('notcomplicated_insulin',this.kdpStep1.value.notcomplicated_insulin);
      formdata.append('insulin_therapy',this.kdpStep1.value.insulin_therapy);
      // var index = await this.getIndexesReason(this.mappingReasons.reluctant_insulin)
      // console.log(index)
      // formdata.append('reluctant_insulin',index+1);
      var socioeconomic_level = await this.getIndexesReason(this.mappingReasons.socioeconomic_level);
      formdata.append('socioeconomic_level',socioeconomic_level);
      var reluctant_start = await this.getIndexesReason(this.mappingReasons.reluctant_start);
      formdata.append('reluctant_start',reluctant_start);
      var years_of_age = await this.getIndexesReason(this.mappingReasons.years_of_age);
      formdata.append('years_of_age',years_of_age);
      var cardiovascular = await this.getIndexesReason(this.mappingReasons.cardiovascular);
      formdata.append('cardiovascular',cardiovascular);
      var appointment_treatment = await this.getIndexesReason(this.mappingReasons.appointment_treatment);
      formdata.append('appointment_treatment',appointment_treatment);
      var excess_weight = await this.getIndexesReason(this.mappingReasons.excess_weight);
      formdata.append('excess_weight',excess_weight);
      var staff_notenough= await this.getIndexesReason(this.mappingReasons.staff_notenough);
      formdata.append('staff_notenough',staff_notenough);
      // var reluctant_therapy = await this.getIndexesReason(this.mappingReasons.reluctant_therapy);
      // formdata.append('reluctant_therapy',reluctant_therapy);
      var self_monitoring = await this.getIndexesReason(this.mappingReasons.self_monitoring);
      formdata.append('self_monitoring',self_monitoring);
      var not_follow_medical = await this.getIndexesReason(this.mappingReasons.not_follow_medical);
      formdata.append('not_follow_medical',not_follow_medical);
      var fear_injection = await this.getMappingIndexes(this.mappingBarries.fear_injection);
      formdata.append('fear_injection',fear_injection);
      var fear_hypoglycemia = await this.getMappingIndexes(this.mappingBarries.fear_hypoglycemia);
      formdata.append('fear_hypoglycemia',fear_hypoglycemia);
      var cost_insulin = await this.getMappingIndexes(this.mappingBarries.cost_insulin);
      formdata.append('cost_insulin',cost_insulin);
      var fear_weight = await this.getMappingIndexes(this.mappingBarries.fear_weight);
      formdata.append('fear_weight',fear_weight);
      var skepticism_insulin = await this.getMappingIndexes(this.mappingBarries.skepticism_insulin)
      formdata.append('skepticism_insulin',skepticism_insulin);
      var insulin_failure = await this.getMappingIndexes(this.mappingBarries.insulin_failure)
      formdata.append('insulin_failure',insulin_failure)
      var insulin_worsening = await this.getMappingIndexes(this.mappingBarries.insulin_worsening);
      formdata.append('insulin_worsening',insulin_worsening);
      var manage_insulin_therapy = await this.getMappingIndexes(this.mappingBarries.manage_insulin_therapy);
      formdata.append('manage_insulin_therapy',manage_insulin_therapy);
      var threat_quality = await this.getMappingIndexes(this.mappingBarries.threat_quality);
      formdata.append('threat_quality',threat_quality)
      formdata.append('six_months',this.sixMonths);
      formdata.append('one_to_two_year',this.oneYear);
      formdata.append('three_to_five_year',this.threeYear);
      formdata.append('five_years',this.FiveYear);
      formdata.append('people_with_tdm',JSON.stringify(this.influence));
      formdata.append('insulin_to_tdmpatients',JSON.stringify(this.impacts));
      this.apiService.kdpSubmit(formdata).subscribe(res=>{
        this.storage.set("kdp_filled",true);
  
        this.kdpStep1.reset();
        this.kdpStep2.reset();
        this.router.navigateByUrl('/dashboard')
      })
  
    }else{
      if(!this.kdpStep2.valid){
        this.helper.presentToast("Please fill all fields")
      }else{
        this.helper.presentToast("Sum of insulinisation barriers should be equal to 100")
      }
      if( this.influence.length != 2){
        this.helper.presentToast('Choose two clinically relevant options')
      }else{
        if(this.impacts.length != 3 ){
          this.helper.presentToast("Choose three clinically impactful options");
       }
      }
      
    }
    
  }

  firstSubmit(){
    if(this.kdpStep1.valid){

    }else{
      this.helper.presentToast("Please fill all the fields")
      
    }
  }


}
