import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucursal-c',
  templateUrl: './sucursal-c.component.html',
  styleUrls: ['./sucursal-c.component.css']
})
export class SucursalCComponent implements OnInit {

  users: Array<any> = [
    {productosc: 'prod1c', descripcionsc: 'descr1c', preciosc: 'fregcomop1c', existenciasc: 'exist1c'},
    {productosc: 'prod2c', descripcionsc: 'descr2c', preciosc: 'fregcomop2c', existenciasc: 'exist2c'},
    {productosc: 'prod3c', descripcionsc: 'descr3c', preciosc: 'fregcomop3c', existenciasc: 'exist3c'},
    {productosc: 'prod4c', descripcionsc: 'descr4c', preciosc: 'fregcomop4c', existenciasc: 'exist4c'},
    {productosc: 'prod5c', descripcionsc: 'descr5c', preciosc: 'fregcomop5c', existenciasc: 'exist5c'},
    {productosc: 'prod6c', descripcionsc: 'descr6c', preciosc: 'fregcomop6c', existenciasc: 'exist6c'},
    {productosc: 'prod7c', descripcionsc: 'descr7c', preciosc: 'fregcomop7c', existenciasc: 'exist7c'},
    {productosc: 'prod8c', descripcionsc: 'descr8c', preciosc: 'fregcomop8c', existenciasc: 'exist8c'}
]; 
  constructor() { }

  ngOnInit() {
  }

}
