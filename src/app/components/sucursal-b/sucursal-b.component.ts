import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucursal-b',
  templateUrl: './sucursal-b.component.html',
  styleUrls: ['./sucursal-b.component.css']
})
export class SucursalBComponent implements OnInit {

  users: Array<any> = [
    {productosb: 'prod1b', descripcionsb: 'descr1b', preciosb: 'fregcomop1b', existenciasb: 'exist1b'},
    {productosb: 'prod2b', descripcionsb: 'descr2b', preciosb: 'fregcomop2b', existenciasb: 'exist2b'},
    {productosb: 'prod3b', descripcionsb: 'descr3b', preciosb: 'fregcomop3b', existenciasb: 'exist3b'},
    {productosb: 'prod4b', descripcionsb: 'descr4b', preciosb: 'fregcomop4b', existenciasb: 'exist4b'},
    {productosb: 'prod5b', descripcionsb: 'descr5b', preciosb: 'fregcomop5b', existenciasb: 'exist5b'},
    {productosb: 'prod6b', descripcionsb: 'descr6b', preciosb: 'fregcomop6b', existenciasb: 'exist6b'},
    {productosb: 'prod7b', descripcionsb: 'descr7b', preciosb: 'fregcomop7b', existenciasb: 'exist7b'},
    {productosb: 'prod8b', descripcionsb: 'descr8b', preciosb: 'fregcomop8b', existenciasb: 'exist8b'}
]; 

  constructor() { }

  ngOnInit() {
  }

}
