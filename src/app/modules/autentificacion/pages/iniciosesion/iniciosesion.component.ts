import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent {

  public data: Usuario[];

  hide= true

  constructor() {
    this.data = [
      {
        uid: "primero",
        nombre: "juliam",
        apellido: "alvarez",
        email: "julial@gmail.com",
        rol: "visitante",
        password: "1234",
      },
      {
        uid: "segundo",
        nombre: "marcos",
        apellido: "paredes",
        email: "paredes23@gmail.com",
        rol: "administrador",
        password: "33chocolate",
      },
      {
        uid: "tercero",
        nombre: "leon",
        apellido: "silva",
        email: "silvita3@gmail.com",
        rol: "visitante",
        password: "pepe222",
      },
    ]


  }

}
