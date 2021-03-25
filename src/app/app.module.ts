import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import {Helper} from './common/helper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserAnimationsModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: 'pms-app',
      driverOrder: ['localstorage', 'sqlite', 'indexeddb', 'websql']
    }),
    BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule],
  providers: [
    Helper,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
