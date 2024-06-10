import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar auth de firebase en el servicio 
  constructor( public auth: AngularFireAuth) { }

  //funcion para registro
  registrar(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  } 

  //funcion para inicio sesion 
  iniciarsesion(email:string, password:string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //funcion para cerrar sesion
  cerrarsesion(){
    return this.auth.signOut
  }
  //funcion para tomar el uid
}
