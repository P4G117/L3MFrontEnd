import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-anadir-proveedor',
  templateUrl: './anadir-proveedor.component.html',
  styleUrls: ['./anadir-proveedor.component.css']
})
export class AnadirProveedorComponent implements OnInit {

  //Lista Prueba
  @Input() productProveedores: any = { prov_num: '', prov_nombre:'', prov_cedula: '' };

  constructor() { }
//Inicia la vista
  ngOnInit() {
  }

}
