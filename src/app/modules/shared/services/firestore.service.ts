import { Injectable } from '@angular/core';
//base de datos o cloud firestore, accedemos a las colecciones 
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //definimos de forma privada la coleccion de usuarios, para que no sea accesible en toda la aplicacion.
  //lo definimos como una collecion de firestore que respete la estructura de nuestra interfaz de 'usuario'
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) { 
    //usuariosCollection va a definir la nueva collecion 'usuarios' que estara en nuestra base de datos
    this.usuariosCollection= this.database.collection<Usuario>('usuarios');

  }
}
