import { Component } from '@angular/core';

import { Brawlers } from 'src/app/models/brawlers';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //propiedad publica (tipo array)
  public info: Brawlers[];
  
  //inicializar la propiedad info
  constructor(){
    this.info=[
      {
        id: "",
        nombre: "señor p",
        imagen: "https://static.wikia.nocookie.net/brawlstars/images/1/1b/Mr._P_Skin-Agent.png/revision/latest?cb=20220102011050&path-prefix=es",
        rareza: "mitico",
        tipo: "control",
        alcanze: "medio",
      },
      {
        id: "",
        nombre: "el primo",
        imagen: "https://static.wikia.nocookie.net/brawlstars/images/0/04/El_Primo_Skin-Default.png/revision/latest?cb=20191108132435&path-prefix=es",
        rareza: "especial",
        tipo: "tanque",
        alcanze: "bajo",
      },
      {
        id: "",
        nombre: "edgar",
        imagen: "https://static.wikia.nocookie.net/brawlstars/images/2/2b/Edgar_Skin-Default.png/revision/latest?cb=20210111155348&path-prefix=es",
        rareza: "epico",
        tipo: "asesino",
        alcanze: "bajo",
      },
    ]
  }

}
