import { Component, OnInit } from '@angular/core';
import { AlertController,ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Helper } from './../common/helper';
import {ApiService} from './../common/api.service';
import { TncPage } from './../tnc/tnc.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  today:any= Date.now();
  userInfo:any;
  kdpFilled: boolean;
  constructor(private router:Router,private api:ApiService,private modalController:ModalController,private helper:Helper,public alertController: AlertController,
    public storage:Storage) { }

  logout(){
    this.storage.clear();
    this.router.navigateByUrl('/login')
  }

  presentAlert() {
   this.storage.get("tnc_filled").then(async res=>{
    if(!res){
      const modal = await this.modalController.create({
        component: TncPage,
        backdropDismiss:false,
        cssClass: 'my-custom-class'
      });
      modal.onDidDismiss().then(res=>{
        this.storage.get("kdp_filled").then(async res=>{
          if(!res){
            this.storage.get("tnc_filled").then(async res=>{
              if(!res){
              }else{
                this.router.navigateByUrl('/kdp-suvey')
              }
            }) 
          }
        })
      })
      return await modal.present();
    }else{
      this.storage.get("kdp_filled").then(async res=>{
        if(!res){
          this.router.navigateByUrl('/kdp-suvey')
        }
      })
    }
   })
  }

 

  ionViewWillEnter(){
    //alert("dashboard called")
    let date = new Date();
    console.log(date.toLocaleDateString())
    this.today = date.toDateString()+" "+date.toLocaleTimeString();
    this.storage.get("kdp_filled").then(async res=>{
      if(res){
        this.kdpFilled = true
      }else{
        this.kdpFilled = false
      }
    })
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userInfo = res;
      }
    })
    this.storage.get("lastNoti").then(res=>{
      if(res){
        if(res != date.toLocaleDateString()){
          this.getNotification();
        }
      }else{
        this.getNotification();
      }
    })
    this.presentAlert()
  }

  getNotification() {
    let formdata = new FormData();
    formdata.append('user_id',this.userInfo.doctor_id);
    this.api.getNotifications(formdata).subscribe(async res=>{
      console.log(res.status);
      if(res.status == 'true'){
        let date = new Date();
        this.storage.set("lastNoti",date.toLocaleDateString())
        const alert = await this.alertController.create({
          header:'Notification',
          subHeader: res['message'],
          buttons: ['ok']
        });
        alert.present()
      }
    })
  }

  ngOnInit() {
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userInfo = res;
      }
    })
  }

}
