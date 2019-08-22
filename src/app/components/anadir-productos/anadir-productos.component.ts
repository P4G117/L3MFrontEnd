import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-anadir-productos',
  templateUrl: './anadir-productos.component.html',
  styleUrls: ['./anadir-productos.component.css']
})
export class AnadirProductosComponent implements OnInit {

  @Input() productProductos: any = { prod_nombre:'', prod_desc: '', prod_code: '',prod_prov: '', prod_compra:'', prod_imp:'', prod_descuento: '' };

  constructor() { }
//Inicia la Vista
  ngOnInit() {
  }

}
