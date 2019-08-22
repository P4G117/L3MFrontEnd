import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  //Lista de Prueba
  @Input() productSucursales: any = { sucursal_nombre:'', sucursal_dir: '', sucursal_tel:'', sucursal_admin:'' };

  constructor() { }

  //Inicia la Vista
  ngOnInit() {
  }
  
}
