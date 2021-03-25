import {Injectable} from '@angular/core';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class Helper {
    constructor(private toastController : ToastController, public loadingController : LoadingController) { 
        this.presentLoading = this.presentLoading.bind(this);
        this.presentToast = this.presentToast.bind(this);
        this.dismissLoading = this.dismissLoading.bind(this);
    }
    
    public async presentLoading() {

        const loading = await this.loadingController.create({
            //message: 'Please wait...'      
        });
        await loading.present();  

    }
    
    public async presentToast(message) {
    
        const toast = await this.toastController.create({
            message: message,
            position: 'middle',
            duration: 2000
        }); 
        toast.present(); 
    
    }

    public async presentInfo(message) {
    
        const toast = await this.toastController.create({
            message: message,
            position: 'middle',
            cssClass: 'infoPopup',
            duration: 3000
        }); 
        toast.present(); 
    
    }

    public async dismissLoading() {
        await this.loadingController.dismiss();  
    }
}