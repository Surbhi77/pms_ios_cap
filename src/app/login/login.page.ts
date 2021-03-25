import { Component, OnInit } from '@angular/core';
import { Validators,ValidationErrors, FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Helper } from './../common/helper';
import {ApiService} from './../common/api.service';
import { Router } from '@angular/router';
import {MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  loginForm:any;
  hasError:boolean=false;

  constructor(private loginApi:ApiService,
    private menuCtrl : MenuController,
    private helper:Helper,
    private router:Router,
    public storage:Storage) { }

  ngOnInit() {
    this.loginForm =  new FormGroup({
      email : new FormControl('', [Validators.required]),
      password: new FormControl('',[Validators.required])
    });
  }

  ionViewWillEnter(){
    this.menuCtrl.get().then((menu: HTMLIonMenuElement) => {
      menu.swipeGesture = false;
    });

    this.loginForm.reset();
  }

  login(){
    if(this.loginForm.valid){
      let formdata = new FormData();
      formdata.append("email",this.loginForm.value.email);
      formdata.append("password",this.loginForm.value.password);
      this.helper.presentLoading().then(()=>{
        this.loginApi.login(formdata).subscribe(res=>{
          console.log(res);
          this.helper.dismissLoading();
          if(res && res.data){
            this.storage.set("userInfo",res.data);
            this.storage.set("isLoggedIn",true);
            let form = new FormData();
            form.append('user_id',res.data.doctor_id)
            this.loginApi.checkTerms(form).subscribe(res=>{
              if(res.data.aggrement == 'yes'){
                this.storage.set("tnc_filled",true)
              }
              if(res.data.kdp_survey == 'yes'){
                this.storage.set('kdp_filled',true)
              }
              this.router.navigateByUrl("/dashboard");
            })
           

          }else{
            this.helper.presentToast(res.message)
          }      
        },error=>{
          console.log(error)
          this.helper.dismissLoading();
          this.helper.presentToast("Account Number and password do not match")
        })
      })
      
    }else{
      var keys = Object.keys(this.loginForm.controls);
      for(var i =0;i<=keys.length-1;i++){
        const controlErrors: ValidationErrors = this.loginForm.get(keys[i]).errors;
        console.log(controlErrors,i);
        if(this.hasError){
          break;
        }
        if (controlErrors != null) {
          var err = [];
          err = Object.keys(controlErrors);
          for(var j =0;j<=err.length-1;j++){
              this.hasError = true;
              this.showError(err[j].toString());
               break;
          }
        }
      }
    }
  }

  showError(type){   
    if(type=='required'){
     // alert("req")
      this.helper.presentToast('Please fill all the fields');
    }
    if(type=='email'){
      //alert("email")
      this.helper.presentToast('Please type a valid email');
    }

    if(type=='pattern'){
      //alert("email")
      this.helper.presentToast('Please enter valid number');
    }
    
    setTimeout(() => {
      this.hasError = false;
    }, 1000);
    
  }


}
