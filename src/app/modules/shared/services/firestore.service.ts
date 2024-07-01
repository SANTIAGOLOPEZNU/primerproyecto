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

  agregarusuario(usuario: Usuario, id: string){
    /*creamos una nueva promesa junto los metodos 
    RESOLVE: promesa resuelta -> funciona correctamente
    REJECT: promesa rechazada -> ocurrio una falla
    */
    return new Promise(async (resolve, reject) => {
      //el bloque try encapsula la logica resuelta
      try{
        usuario.uid = id;

        /*const resultado = coleccion de usuarios, envia como numero de documento el uid
        y setea la informacion que ingresamos en el formulario de registro
        */
        const resultado = await this.usuariosCollection.doc(id).set(usuario);

        resolve (resultado)
        //bloque catch encapsula la logica rechazada
      } catch(error){
        //captura una falla y la vuelve un error
        reject (error);
      }
    })
  }
}
