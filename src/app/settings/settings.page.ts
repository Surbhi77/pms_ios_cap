import { Component, OnInit } from '@angular/core';
import { ApiService } from '../common/api.service';
import { Validators,ValidationErrors, FormGroup, FormControl } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { Router } from '@angular/router';
import { Helper } from '../common/helper';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  Form:any;
  formerror: boolean = false;
  userInfo:any;
  hasError:boolean=false;

  constructor(private loginApi:ApiService, private helper:Helper,
    private router:Router,private storage:Storage) { }

  ngOnInit() {
    this.Form =  new FormGroup({
      old_pass: new FormControl('',[Validators.required]),
      new_pass: new FormControl('',[Validators.required]),
      cnew_pass:new FormControl('',[Validators.required])
    },ConfirmPasswordValidator.MatchPassword);
    
  }

  ionViewWillEnter(){
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userInfo = res.doctor_id;    
      }
    })
  }
  
  submit(){
    if(this.Form.valid){
      let formdata = new FormData();
      formdata.append("user_id",this.userInfo )
      formdata.append('old_pass', this.Form.value.old_pass);
      formdata.append('new_pass', this.Form.value.new_pass);
      
      formdata.append('cnew_pass', this.Form.value.cnew_pass);

      this.loginApi.changePassword(formdata).subscribe(res=>{
        console.log(res)
        if(res.status){
          this.helper.presentToast("password change successfully")
          this.router.navigateByUrl('/dashboard')
        }else{
          this.helper.presentToast(res.message)
        }
      })

    }else{
      var keys = Object.keys(this.Form.controls);
      for(var i =0;i<=keys.length-1;i++){
        const controlErrors: ValidationErrors = this.Form.get(keys[i]).errors;
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
    this.helper.presentToast("Please fill all the fields");
  }
  if(type=='email'){
    this.helper.presentToast("Please enter a valid email");
  }
  if(type=='ConfirmPassword'){
    this.helper.presentToast("Passwords do not match");
  }
  setTimeout(() => {
    this.hasError = false;
  }, 1000);
  
}

}
