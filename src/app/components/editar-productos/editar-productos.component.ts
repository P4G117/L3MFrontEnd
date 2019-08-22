import { Component, OnInit, Input } from '@angular/core';
 

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})

export class EditarProductosComponent implements OnInit {

  //Lista Prueba
  @Input() productProductos: any = { prod_nombre:'', prod_desc: '', prod_code: '',prod_prov: '', prod_compra:'', prod_imp:'', prod_descuento: '' };

  constructor() { }

  //Inicia la Vista
  ngOnInit() {
  }

}
