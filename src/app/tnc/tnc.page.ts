import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Helper } from './../common/helper';
import {ApiService} from './../common/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.page.html',
  styleUrls: ['./tnc.page.scss'],
})
export class TncPage implements OnInit {
  tncMessage:any;
  today:any= Date.now();
  showGst:boolean=false;
  userInfo:any;
  gst_no:any='';
  messeage: boolean=false;

  constructor(private router:Router,private loginApi:ApiService,private modalController:ModalController,private helper:Helper,public storage:Storage) {

   }

  ngOnInit() {
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userInfo = res;
      }
    })
    let formdata = new FormData();
   
    formdata.append("doctor_id",this.userInfo.doctor_id)
    this.loginApi.getTermsnConditions(formdata).subscribe(async res=>{
      this.tncMessage = res.data
      if(this.tncMessage==null){
        this.messeage = true
      }
      else{
        this.messeage=false
      }
      console.log(this.userInfo.doctor_id)
    })
  }

  ionViewWillEnter(){
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userInfo = res;
        console.log(this.userInfo.doctor_id)
        
      }
    })
    
    let formdata = new FormData();
    formdata.append("doctor_id",this.userInfo.doctor_id)
    this.loginApi.getTermsnConditions(formdata).subscribe(async res=>{
      this.tncMessage = res.data
      console.log(this.userInfo.doctor_id)
      if(this.tncMessage==null){
        this.messeage = true
      }
      else{
        this.messeage=false
      }
    })
  }

  showTncInput($event){
    console.log($event)
    if($event.target.checked){
      this.showGst = true
    }else{
      this.showGst = false
    }
  }

  cancel(){
    //  navigator['app'].exitApp();
    
    this.storage.clear();
    this.modalController.dismiss({'dismissed':true})
    this.router.navigateByUrl('/login')
  }
  

  agree(){
    console.log(this.showGst,this.gst_no)
    if(this.showGst && this.gst_no!=''){
      
      let formdata = new FormData();
      formdata.append("user_id",this.userInfo.doctor_id)
      formdata.append("gst",(this.showGst)?"yes":"no")
      this.loginApi.postAgreement(formdata).subscribe(res=>{
       this.storage.set("tnc_filled",true)
       this.modalController.dismiss({'dismissed':true})
      },error=>{

      })
    }else{
     if(this.showGst && this.gst_no == ''){
      this.helper.presentToast("Supply GST no"); 
     }
    }

    if(!this.showGst){
      let obj = {
        "user_id":this.userInfo.userId,
        "gst": (this.showGst)?"yes":"no"
      };
      let formdata = new FormData();
      formdata.append("user_id",this.userInfo.doctor_id);
      formdata.append("gst",(this.showGst)?"yes":"no")
      console.log(obj);
      this.loginApi.postAgreement(formdata).subscribe(res=>{
        this.storage.set("tnc_filled",true)
        this.modalController.dismiss({'dismissed':true})
      },error=>{
        
      })
    }
    
  }

}
