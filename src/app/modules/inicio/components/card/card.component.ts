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
        imagen: "https://www.brawlstarsdicas.com.br/wp-content/uploads/2019/09/como-jogar-com-el-primo-braw-stars-dicas.png",
        rareza: "especial",
        tipo: "tanque",
        alcanze: "bajo",
      },
      {
        id: "",
        nombre: "edgar",
        imagen: "https://media.brawltime.ninja/brawlers/edgar/skins/skin/blackbird.png?size=400",
        rareza: "epico",
        tipo: "asesino",
        alcanze: "bajo",
      },
    ]
  }

}
