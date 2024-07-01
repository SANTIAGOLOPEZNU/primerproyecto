import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from '../../shared/services/firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar auth de firebase en el servicio 
  constructor( private auth: AngularFireAuth, private servicioFirestore: AngularFirestore) { }

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
    return this.auth.signOut();
  }

  //funcion para tomar el uid}
  async ObtenerUid(){
    //esto nos va a generar una promes y la constante la va a guardar
    const user = await this.auth.currentUser;

    if(user == null){
      return null;
    }
    else{
      return user.uid
    }
  }

  obtenerusuario(email:string){
    /*
    retornamos del servicioFirestore la collecion de 'usuario', uscamos una referencia en los emails registrados
    y los comparamos con los que ingrese el usuario al iniciar sesion, y lo obtiene con el .get()
    lo vuelve una promesa  => da un reseultado resuelto o rechazado
    */ 
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }
}
