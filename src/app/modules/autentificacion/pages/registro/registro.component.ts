import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //input de la contraseña para ver los caracteres o no
  hide=true;

  //importar la interfaz de usuario -> inicializar
  usuarios: Usuario = {
    uid: '', // -> inicializamos con comillas simples porque es STRING
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }

  // CREAMOS COLECCIÓN DE USUARIOS, TIPO 'USUARIO' PARA ARRAYS
  coleccionUsuarios: Usuario[] = [];

  //################################################################################ fin importaciones

  constructor(public servicioauth: AuthService,public serviciorutas:Router){}

  //FUNCION PARA EL REGISTRO DE NUEVOS USUARIOS
  async registrar(){
    //constante credenciales va a resguardar la informacion que ingrese el usuario
    /*
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }
    */

    const credenciales={
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    const respuesta = await this.servicioauth.registrar(credenciales.email,credenciales.password)
    .then(respuesta=>{
      alert("se pudo registrar con exito")

      this.serviciorutas.navigate(['/inicio'])
    })
    .catch(error =>{
      alert("hubo un problema al registrarse \n"+error)
    })

    //envamos la nueva info como un nuevo objeto a la coleccion de usuarios
    //this.coleccionUsuarios.push(credenciales)

    //notificamos con exito al usuario registrado
    alert("te registraste con exito")

    //llamamos a la funcion para que limpie los inputs
    this.limpiarinputs()

    //mostramos credenciales por consola
    console.log(credenciales)
    console.log(this.coleccionUsuarios)
  }

  //creamos esta funcion para que una vez subidos los datos los inputs se limpien
  limpiarinputs(){
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

