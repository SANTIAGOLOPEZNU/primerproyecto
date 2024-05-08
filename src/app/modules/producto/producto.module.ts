import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { RarezaComponent } from './pages/rareza/rareza.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { TipoComponent } from './pages/tipo/tipo.component';


@NgModule({
  declarations: [
    ProductoComponent,
    RarezaComponent,
    TiendaComponent,
    TipoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    RarezaComponent,
    TiendaComponent,
    TipoComponent
  ]
})
export class ProductoModule { }
