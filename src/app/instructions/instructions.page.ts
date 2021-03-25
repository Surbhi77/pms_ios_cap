import { Component, OnInit } from '@angular/core';
import {ApiService} from './../common/api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Helper } from './../common/helper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
})
export class InstructionsPage implements OnInit {
  firstFormGroup: FormGroup;
  userDetails: any;
 
  constructor(private _formBuilder: FormBuilder,
              private router:Router,
              private storage:Storage,
              private apiService:ApiService,
              private helper:Helper) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      message: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewWillEnter(){
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userDetails = res
      }
    })
  }

  submitQuery(){
    if(this.firstFormGroup.valid){
      //alert("here")
      let formdata = new FormData();
      formdata.append('message',this.firstFormGroup.value.message);
      formdata.append('user_id',this.userDetails.doctor_id);
      this.apiService.addEnquiry(formdata).subscribe(res=>{
        this.firstFormGroup.reset();
        this.helper.presentToast("Enquiry sent successfully");
        this.router.navigateByUrl('/dashboard')
      })
    }
  }

}
