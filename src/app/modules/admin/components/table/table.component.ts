import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from '../../services/crud.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  //creamos collecion local de productos -> la definimos como array
  collecionProductos: Producto[] = [];

  //definimos formulario para los productos 
  /*
  *atributos alfanumericos (string) se inicializan con comillas simples 
  *atributos numericos (number) se inicializan en 0
  * */
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required),
    alt: new FormControl('', Validators.required),
  })

  constructor(public servicioCrud: CrudService) { }

  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.collecionProductos = producto;
    })
  };

  async agregarproducto() {
    if (this.producto.valid) {
      let nuevoproducto: Producto = {
        idProducto: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        descripcion: this.producto.value.descripcion!,
        categoria: this.producto.value.categoria!,
        imagen: this.producto.value.imagen!,
        alt: this.producto.value.alt!,
      }

      await this.servicioCrud.crearProducto(nuevoproducto)
        .then(producto=> {
          alert("agrego un nuevo producto con exito");
        })
        .catch(error => {
          alert("ocurrio un error al cargar un producto");
        })
    }


  }
}
