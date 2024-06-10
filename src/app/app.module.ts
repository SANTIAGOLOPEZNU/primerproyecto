import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/components/shared.module';

//firebase
import { environmet } from 'src/environments/environment'; //vincula a la BD con la APP
import {AngularFireModule} from '@angular/fire/compat'; //trabaja con las colecciones de informacion 
import {AngularFireAuthModule} from '@angular/fire/compat/auth'; //trabaja con la autentificacion
import {AngularFireStorageModule} from '@angular/fire/compat/storage'; //trabaja con imagenes y archivos

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environmet.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
