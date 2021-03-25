import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-how-its-work',
  templateUrl: './how-its-work.page.html',
  styleUrls: ['./how-its-work.page.scss'],
})
export class HowItsWorkPage implements OnInit {
  type: any;

  constructor(private storage:Storage) { }

  ngOnInit() {
    this.storage.get("userInfo").then(res=>{
      this.type=res.type
      console.log(this.type)
    })
  }

}
