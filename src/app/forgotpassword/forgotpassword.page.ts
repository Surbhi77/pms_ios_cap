import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../common/api.service';
import { Helper } from '../common/helper';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  

  constructor(private fb:FormBuilder,private loginApi:ApiService,private router:Router,private helper:Helper,) { }
  Form:FormGroup;

  ngOnInit() {
    this.Form =  this.fb.group({
     
      username: new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email])
    })
  }
  send(){
    if(this.Form.valid){
      let formdata = new FormData();
    
      formdata.append('username', this.Form.value.username);
      formdata.append('email', this.Form.value.email);
      
      this.loginApi.forgetpassword(formdata).subscribe(res=>{
        if(res['status'] == 'true'){
          this.helper.presentToast("Forget password Link send on your registered Email id");
          this.router.navigateByUrl("/login");
        }else{
          this.helper.presentToast("User name or email id incorrect");
        }
         
      },error=>{
        this.helper.presentToast("Something went wrong");
      })
    }else{
      this.helper.presentToast("Please fill valid username and email")
    }
    
  }
}
