import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-proveedores',
  templateUrl: './gestion-proveedores.component.html',
  styleUrls: ['./gestion-proveedores.component.css']
})
export class GestionProveedoresComponent implements OnInit {

  users: Array<any> = [
    {num: 1, proveedor: 'nombre1', cedula: 192 },
    {num: 2, proveedor: 'nombre2', cedula: 8932 },
    {num: 3, proveedor: 'nombre3', cedula: 928392 },
    {num: 4, proveedor: 'nombre4', cedula: 993 },
    {num: 5, proveedor: 'nombre5', cedula: 8932 },
    {num: 6, proveedor: 'nombre6', cedula: 743 },
    {num: 7, proveedor: 'nombre7', cedula: 7483 }
]; 

  constructor() { }

  ngOnInit() {
  }

}
