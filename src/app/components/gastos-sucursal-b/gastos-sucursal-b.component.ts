import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos-sucursal-b',
  templateUrl: './gastos-sucursal-b.component.html',
  styleUrls: ['./gastos-sucursal-b.component.css']
})
export class GastosSucursalBComponent implements OnInit {

  //Lista Prueba
  users: Array<any> = [
    {fechagsb: 'fecha1b', proveedorgsb: 'prov1b', descripciongsb: 'desc1b', montogsb: 'monto1b'},
    {fechagsb: 'fecha2b', proveedorgsb: 'prov2b', descripciongsb: 'desc2b', montogsb: 'monto2b'},
    {fechagsb: 'fecha3b', proveedorgsb: 'prov3b', descripciongsb: 'desc3b', montogsb: 'monto3b'},
    {fechagsb: 'fecha4b', proveedorgsb: 'prov4b', descripciongsb: 'desc4b', montogsb: 'monto4b'},
    {fechagsb: 'fecha5b', proveedorgsb: 'prov5b', descripciongsb: 'desc5b', montogsb: 'monto5b'},
    {fechagsb: 'fecha6b', proveedorgsb: 'prov6b', descripciongsb: 'desc6b', montogsb: 'monto6b'},
    {fechagsb: 'fecha7b', proveedorgsb: 'prov7b', descripciongsb: 'desc7b', montogsb: 'monto7b'},
    {fechagsb: 'fecha8b', proveedorgsb: 'prov8b', descripciongsb: 'desc8b', montogsb: 'monto8b'}
]; 

  constructor() { }

  //Inicia Vista
  ngOnInit() {
  }

}
