import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {ApiService} from './../common/api.service';
import { Helper } from './../common/helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage implements OnInit {
  userInfo: any;
  invoiceAvailable: boolean=false;
  link: any='';
  invoiceAcceptShow: boolean=false;
  acceptChecked:boolean=false;

  constructor(private storage:Storage,
              private helper:Helper,
              private router:Router,
              private apiService:ApiService) { }
  
  ionViewWillEnter() {
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userInfo = res;
        this.getInvoice()
      }
    })
  }

  ngOnInit() {
  }

  changeValue($event){
    if($event.target.checked){
      this.acceptChecked = true;
    }else{
      this.acceptChecked = false;
    }
  }

  submit(){
    let formdata = new FormData();
    formdata.append('user_id',this.userInfo.doctor_id);
    formdata.append('status','1');
    this.apiService.checkInvoice(formdata).subscribe(res=>{
      this.helper.presentToast("Invoice updated successfully");
      this.router.navigateByUrl('/dashboard')
    })
  }

  getInvoice(){
    let formData = new FormData();
    formData.append('user_id',this.userInfo.doctor_id);
    this.helper.presentLoading().then(res=>{
      this.apiService.getInvoice(formData).subscribe(res=>{
        console.log(res);
        this.helper.dismissLoading();
        if(res.status == "1"){
          this.link = res.data.file;
          this.invoiceAvailable = (this.link!="")?true:false
          //this.invoiceAvailable = true;
          
          if(res.data.invoicestatus == 0 && this.link != ""){
            this.invoiceAcceptShow = true
          }else{
            this.invoiceAcceptShow=false
          }
          
  
        }
      })
    })
  }

}
