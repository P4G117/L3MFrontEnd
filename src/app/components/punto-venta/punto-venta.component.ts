import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punto-venta',
  templateUrl: './punto-venta.component.html',
  styleUrls: ['./punto-venta.component.css']
})
export class PuntoVentaComponent implements OnInit {

  users: Array<any> = [
    {cajero: 'cajero1', sucursal: 'sucursal1', productos: 'prods1', cantidad: 1, punit: 10, ptotal: 100, vtotal: 1000, descuento:'desc1', impuesto: 'imp1' },
    {cajero: 'cajero2', sucursal: 'sucursal2', productos: 'prods2', cantidad: 2, punit: 20, ptotal: 200, vtotal: 2000, descuento:'desc2', impuesto: 'imp2' },
    {cajero: 'cajero3', sucursal: 'sucursal3', productos: 'prods3', cantidad: 3, punit: 30, ptotal: 300, vtotal: 3000, descuento:'desc3', impuesto: 'imp3' },
    {cajero: 'cajero4', sucursal: 'sucursal4', productos: 'prods4', cantidad: 4, punit: 40, ptotal: 400, vtotal: 4000, descuento:'desc4', impuesto: 'imp4' },
    {cajero: 'cajero5', sucursal: 'sucursal5', productos: 'prods5', cantidad: 5, punit: 50, ptotal: 500, vtotal: 5000, descuento:'desc5', impuesto: 'imp5' },
    {cajero: 'cajero6', sucursal: 'sucursal6', productos: 'prods6', cantidad: 6, punit: 60, ptotal: 600, vtotal: 6000, descuento:'desc6', impuesto: 'imp6' },
    {cajero: 'cajero7', sucursal: 'sucursal7', productos: 'prods7', cantidad: 7, punit: 70, ptotal: 700, vtotal: 7000, descuento:'desc7', impuesto: 'imp7' },
    {cajero: 'cajero8', sucursal: 'sucursal8', productos: 'prods8', cantidad: 8, punit: 80, ptotal: 800, vtotal: 8000, descuento:'desc8', impuesto: 'imp8' }
];
  constructor() { }

  ngOnInit() {
  }

}
