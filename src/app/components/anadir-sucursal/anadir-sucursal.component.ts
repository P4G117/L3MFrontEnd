import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-anadir-sucursal',
  templateUrl: './anadir-sucursal.component.html',
  styleUrls: ['./anadir-sucursal.component.css']
})
export class AnadirSucursalComponent implements OnInit {

  @Input() productSucursales: any = { sucursal_nombre:'', sucursal_dir: '', sucursal_tel:'', sucursal_admin:'' };

  constructor() { }
//Inicia la Vista
  ngOnInit() {
  }


}
