import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-editar-proveedores',
  templateUrl: './editar-proveedores.component.html',
  styleUrls: ['./editar-proveedores.component.css']
})
export class EditarProveedoresComponent implements OnInit {

  //Lista Prueba
  @Input() productProveedores: any = { prov_num: '', prov_nombre:'', prov_cedula: '' };

  constructor() { }

  //Inicia la Vista
  ngOnInit() {
  }

}
