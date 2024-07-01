import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {

  hide = true;

  /*public data: Usuario[];

  constructor() {
    //en este arreglo subimos los datos de usuarios cargados predeterminadamente
    this.data = [
      {
        uid: "primero",
        nombre: "juliam",
        apellido: "alvarez",
        email: "julial@gmail.com",
        rol: "vis",
        password: "1234567",
      },
      {
        uid: "segundo",
        nombre: "marcos",
        apellido: "paredes",
        email: "paredes23@gmail.com",
        rol: "admin",
        password: "33chocolate",
      },
      {
        uid: "tercero",
        nombre: "leon",
        apellido: "silva",
        email: "silvita3@gmail.com",
        rol: "vis",
        password: "pepe222",
      },
    ]
  }*/

  constructor(
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router,
  ) { }

  //importar la interfaz de usuario -> inicializar
  usuarios: Usuario = {
    uid: '', // -> inicializamos con comillas simples porque es de tipo STRING
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  //FUNCION PARA EL REGISTRO DE NUEVOS USUARIOS
  async comparar() {
    /*
    //constante credenciales va a resguardar la informacion que ingrese el usuario
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }

    for(let i=0; i<=this.data.length; i++){
      if(typeof this.data === (credenciales.uid && credenciales.nombre && credenciales.apellido && credenciales.email && credenciales.rol && credenciales.password)){
    //creo un for para recorrer el arreglo con los usuarios subidos
    for (let i=0; i<this.data.length; i++){
      //creo const guardado para guardar cada posicion del arreglo
      const guardado =this.data[i]
      //creo un if para comparar propiedad por propiedad del objeto que esta en guardado y del objeto que esta en credenciales
      if(guardado.uid === credenciales.uid && guardado.nombre === credenciales.nombre && guardado.apellido === credenciales.apellido && guardado.email === credenciales.email && guardado.rol === credenciales.rol && guardado.password === credenciales.password){
        alert("ingresaste")
        break
      }
      else{
        alert("no ingresaste")
        break
      }
    };    
    }


    for (let i = 0; i <= this.data.length; i++) {
       //creo const guardado para guardar cada posicion del arreglo
       const guardado =this.data[i]
      if (guardado.uid === credenciales.uid && guardado.nombre === credenciales.nombre && guardado.apellido === credenciales.apellido && guardado.email === credenciales.email && guardado.rol === credenciales.rol && guardado.password === credenciales.password) {
        alert("ingresaste")
        break
      }
      else {
        alert("no ingresaste")
        break
      }
    };*/

    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password,
    }

    try {
      const usuarioBD = await this.servicioAuth.obtenerusuario(credenciales.email);

      if (!usuarioBD || usuarioBD.empty) {
        alert("correo electronico no esta registrado");
        this.limpiarinputs();
        return;
      }

      const usuarioDOC = usuarioBD.docs[0];

      const usuarioData = usuarioDOC.data() as Usuario;

      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      if (hashedPassword !== usuarioData.password) {
        alert("contraseña incorrecta")

        this.usuarios.password = '';
        return;
      }

      const res = await this.servicioAuth.iniciarsesion(credenciales.email, credenciales.password)
        .then(res => {
          alert('se pudo ingresar con exito');

          this.servicioRutas.navigate(['/inicio']);
        })
        .catch(err => {
          -alert('hubo un problema al iniciar sesion' + err);

          this.limpiarinputs()
        })
    } catch(error){
      this.limpiarinputs();
    }

    
    
  }
  limpiarinputs() {
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = '',
    }
  }

}




