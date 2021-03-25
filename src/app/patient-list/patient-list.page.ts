import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {ApiService} from './../common/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.page.html',
  styleUrls: ['./patient-list.page.scss'],
})
export class PatientListPage implements OnInit {
  userInfo: any;
  beginLists: any=[];
  isEditScreen: boolean;
  listingId: any;
  completedList: any;

  constructor(public alertController: AlertController,private storage:Storage,public activatedRoute: ActivatedRoute,private router:Router,private apiService:ApiService) { }

  ionViewWillEnter() {
    this.storage.get("userInfo").then(res=>{
      if(res){
        this.userInfo = res;
        if(this.userInfo.type == 'i'){
          this.initiateList();
          this.completedInitiateList()
        }else{
          this.beginList();
          this.beginCompletedList()
        }
      }
    })
  }

  showAlert(item,type,i) {
    this.alertController.create({
      
      message: 'Do you confirm to delete?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            let formdata = new FormData();
            formdata.append("id",item.id);
            if(type == 'i'){
              this.apiService.deleteInitiate(formdata).subscribe(res=>{
                this.beginLists.splice(i,1)
              })
            }else{
              this.apiService.deleteBegin(formdata).subscribe(res=>{
                this.beginLists.splice(i,1)
              })
            }
          }
        }
      ]
    }).then(res => {
      res.present();
    });

  }

  ngOnInit(){

  }

  completedPatientDetails(item){
    if(this.userInfo.type == 'i'){
      this.router.navigateByUrl('/step-form/'+item.id+'/completed')
    }else{
      this.router.navigateByUrl('/begin/'+item.id+'/completed')
    }
  }

  deleteItem(item,i){
    let formdata = new FormData();
    formdata.append("id",item.id);
    this.showAlert(item,this.userInfo.type,i); 
  }

  completedInitiateList(){
    let formdata = new FormData();
    formdata.append('user_id',this.userInfo.doctor_id);
    this.apiService.completedInitiate(formdata).subscribe(res=>{
      console.log(res);
      this.completedList=res['data']
    })
  }

  beginCompletedList(){
    let formdata = new FormData();
    formdata.append('user_id',this.userInfo.doctor_id);
    this.apiService.completedBegin(formdata).subscribe(res=>{
      this.completedList=res['data']
    })
  }

  initiateList() {
    let formdata = new FormData();
    formdata.append('user_id',this.userInfo.doctor_id);
    this.apiService.getInitiateDraft(formdata).subscribe(res=>{
      console.log(res);
      this.beginLists=res['data']
    })
  }

  patientDetails(item){
    if(this.userInfo.type == 'i'){
      this.router.navigateByUrl('/step-form/'+item.id)
    }else{
      this.router.navigateByUrl('/begin/'+item.id)
    }
    
  }

  beginList() {
    console.log("calleddd")
    let formdata = new FormData();
    formdata.append('user_id',this.userInfo.doctor_id);
    this.apiService.getDraftBegin(formdata).subscribe(res=>{
      console.log(res);
      this.beginLists = res['data']
    })    
  }

}
