import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucursal-a',
  templateUrl: './sucursal-a.component.html',
  styleUrls: ['./sucursal-a.component.css']
})
export class SucursalAComponent implements OnInit {

  users: Array<any> = [
    {productosa: 'prod1a', descripcionsa: 'descr1a', preciosa: 'fregcomop1a', existenciasa: 'exist1a'},
    {productosa: 'prod2a', descripcionsa: 'descr2a', preciosa: 'fregcomop2a', existenciasa: 'exist2a'},
    {productosa: 'prod3a', descripcionsa: 'descr3a', preciosa: 'fregcomop3a', existenciasa: 'exist3a'},
    {productosa: 'prod4a', descripcionsa: 'descr4a', preciosa: 'fregcomop4a', existenciasa: 'exist4a'},
    {productosa: 'prod5a', descripcionsa: 'descr5a', preciosa: 'fregcomop5a', existenciasa: 'exist5a'},
    {productosa: 'prod6a', descripcionsa: 'descr6a', preciosa: 'fregcomop6a', existenciasa: 'exist6a'},
    {productosa: 'prod7a', descripcionsa: 'descr7a', preciosa: 'fregcomop7a', existenciasa: 'exist7a'},
    {productosa: 'prod8a', descripcionsa: 'descr8a', preciosa: 'fregcomop8a', existenciasa: 'exist8a'}
]; 

  constructor() { }

  //Inicio Pagina
  ngOnInit() {
  }

}
