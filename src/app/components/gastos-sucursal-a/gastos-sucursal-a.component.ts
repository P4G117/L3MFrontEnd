import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos-sucursal-a',
  templateUrl: './gastos-sucursal-a.component.html',
  styleUrls: ['./gastos-sucursal-a.component.css']
})
export class GastosSucursalAComponent implements OnInit {

  users: Array<any> = [
    {fechagsa: 'fecha1', proveedorgsa: 'prov1', descripciongsa: 'desc1', montogsa: 'monto1'},
    {fechagsa: 'fecha2', proveedorgsa: 'prov2', descripciongsa: 'desc2', montogsa: 'monto2'},
    {fechagsa: 'fecha3', proveedorgsa: 'prov3', descripciongsa: 'desc3', montogsa: 'monto3'},
    {fechagsa: 'fecha4', proveedorgsa: 'prov4', descripciongsa: 'desc4', montogsa: 'monto4'},
    {fechagsa: 'fecha5', proveedorgsa: 'prov5', descripciongsa: 'desc5', montogsa: 'monto5'},
    {fechagsa: 'fecha6', proveedorgsa: 'prov6', descripciongsa: 'desc6', montogsa: 'monto6'},
    {fechagsa: 'fecha7', proveedorgsa: 'prov7', descripciongsa: 'desc7', montogsa: 'monto7'},
    {fechagsa: 'fecha8', proveedorgsa: 'prov8', descripciongsa: 'desc8', montogsa: 'monto8'}
]; 
  constructor() { }

  ngOnInit() {
  }

}
