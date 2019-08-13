import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos-sucursal-c',
  templateUrl: './gastos-sucursal-c.component.html',
  styleUrls: ['./gastos-sucursal-c.component.css']
})
export class GastosSucursalCComponent implements OnInit {

  users: Array<any> = [
    {fechagsc: 'fecha1c', proveedorgsc: 'prov1c', descripciongsc: 'desc1c', montogsc: 'monto1c'},
    {fechagsc: 'fecha2c', proveedorgsc: 'prov2c', descripciongsc: 'desc2c', montogsc: 'monto2c'},
    {fechagsc: 'fecha3c', proveedorgsc: 'prov3c', descripciongsc: 'desc3c', montogsc: 'monto3c'},
    {fechagsc: 'fecha4c', proveedorgsc: 'prov4c', descripciongsc: 'desc4c', montogsc: 'monto4c'},
    {fechagsc: 'fecha5c', proveedorgsc: 'prov5c', descripciongsc: 'desc5c', montogsc: 'monto5c'},
    {fechagsc: 'fecha6c', proveedorgsc: 'prov6c', descripciongsc: 'desc6c', montogsc: 'monto6c'},
    {fechagsc: 'fecha7c', proveedorgsc: 'prov7c', descripciongsc: 'desc7c', montogsc: 'monto7c'},
    {fechagsc: 'fecha8c', proveedorgsc: 'prov8c', descripciongsc: 'desc8c', montogsc: 'monto8c'}
]; 
  constructor() { }

  ngOnInit() {
  }

}
