import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos-generales',
  templateUrl: './gastos-generales.component.html',
  styleUrls: ['./gastos-generales.component.css']
})
export class GastosGeneralesComponent implements OnInit {

  //Lista Prueba
  users: Array<any> = [
    {fechagg: 'fecha1g', proveedorgg: 'prov1c', descripciongg: 'desc1c', montogg: 'monto1c'},
    {fechagg: 'fecha2g', proveedorgg: 'prov2c', descripciongg: 'desc2c', montogg: 'monto2c'},
    {fechagg: 'fecha3g', proveedorgg: 'prov3c', descripciongg: 'desc3c', montogg: 'monto3c'},
    {fechagg: 'fecha4g', proveedorgg: 'prov4c', descripciongg: 'desc4c', montogg: 'monto4c'},
    {fechagg: 'fecha5g', proveedorgg: 'prov5c', descripciongg: 'desc5c', montogg: 'monto5c'},
    {fechagg: 'fecha6g', proveedorgg: 'prov6c', descripciongg: 'desc6c', montogg: 'monto6c'},
    {fechagg: 'fecha7g', proveedorgg: 'prov7c', descripciongg: 'desc7c', montogg: 'monto7c'},
    {fechagg: 'fecha8g', proveedorgg: 'prov8c', descripciongg: 'desc8c', montogg: 'monto8c'},
    {fechagg: 'fecha9g', proveedorgg: 'prov1c', descripciongg: 'desc1c', montogg: 'monto1c'},
    {fechagg: 'fecha2g', proveedorgg: 'prov2c', descripciongg: 'desc2c', montogg: 'monto2c'},
    {fechagg: 'fecha3g', proveedorgg: 'prov3c', descripciongg: 'desc3c', montogg: 'monto3c'},
    {fechagg: 'fecha4g', proveedorgg: 'prov4c', descripciongg: 'desc4c', montogg: 'monto4c'},
    {fechagg: 'fecha5g', proveedorgg: 'prov5c', descripciongg: 'desc5c', montogg: 'monto5c'},
    {fechagg: 'fecha6g', proveedorgg: 'prov6c', descripciongg: 'desc6c', montogg: 'monto6c'},
    {fechagg: 'fecha7g', proveedorgg: 'prov7c', descripciongg: 'desc7c', montogg: 'monto7c'},
    {fechagg: 'fecha8g', proveedorgg: 'prov8c', descripciongg: 'desc8c', montogg: 'monto8c'}
]; 
  constructor() { }

  //Inicia Vista
  ngOnInit() {
  }

}
