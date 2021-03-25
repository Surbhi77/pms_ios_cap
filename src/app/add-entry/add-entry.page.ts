import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Helper } from './../common/helper';
import {ApiService} from './../common/api.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
// export class AddEntryPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class AddEntryPage implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  userDetails: any;
  checked: boolean=false;

  constructor(private _formBuilder: FormBuilder,
              private apiService:ApiService,
              private helper:Helper,
              private router:Router,
              private storage:Storage) {

  }

  ngOnInit() {

    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userDetails = res
      }
    })
    
    this.firstFormGroup = this._formBuilder.group({
      mobile: ['', Validators.compose([Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])]
    });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

  tnc($event){
    if($event.target.checked){
      this.checked =true
    }else{
      this.checked = false
    }
  }

  checkMobile(){
    let formdata = new FormData();
    formdata.append('mobile',this.firstFormGroup.value.mobile);
    formdata.append('user_type',this.userDetails.type);
    this.apiService.checkMobile(formdata).subscribe(res=>{
      console.log(res);
      if(res.message == 'Already exists'){
        this.helper.presentToast("Mobile Number already exists")
      }else{
        this.storage.set("mobile_no",this.firstFormGroup.value.mobile)
        if(this.userDetails.type != "i"){
          this.router.navigateByUrl("/begin")
        }else{
          this.router.navigateByUrl('/step-form')
          
        }
      }
    })
  }

  submit(){
    if(this.firstFormGroup.valid && this.checked){
      this.checkMobile();
    }else{
      this.helper.presentToast("All the fields are required")
    }
    
  }
}