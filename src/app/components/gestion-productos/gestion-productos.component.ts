import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  users: Array<any> = [
    {nombre: 'nombre1', descripcion: 'descr1', code: 'code1', proveedor: 'prov1', pcomp: 10, imp: 'imp1', desc: 'desc1'},
    {nombre: 'nombre2', descripcion: 'descr2', code: 'code2', proveedor: 'prov2', pcomp: 20, imp: 'imp2', desc: 'desc2' },
    {nombre: 'nombre3', descripcion: 'descr3', code: 'code3', proveedor: 'prov3', pcomp: 30, imp: 'imp3', desc: 'desc3' },
    {nombre: 'nombre4', descripcion: 'descr4', code: 'code4', proveedor: 'prov4', pcomp: 40, imp: 'imp4', desc: 'desc4' },
    {nombre: 'nombre5', descripcion: 'descr5', code: 'code5', proveedor: 'prov5', pcomp: 50, imp: 'imp5', desc: 'desc5' },
    {nombre: 'nombre6', descripcion: 'descr6', code: 'code6', proveedor: 'prov6', pcomp: 60, imp: 'imp6', desc: 'desc6' },
    {nombre: 'nombre7', descripcion: 'descr7', code: 'code7', proveedor: 'prov7', pcomp: 70, imp: 'imp7', desc: 'desc7' },
    {nombre: 'nombre8', descripcion: 'descr8', code: 'code8', proveedor: 'prov8', pcomp: 80, imp: 'imp8', desc: 'desc8'}
]; 
  
  constructor() { }

  ngOnInit() {
  }

}
