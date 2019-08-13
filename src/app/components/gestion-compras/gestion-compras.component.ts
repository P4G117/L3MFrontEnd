import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-compras',
  templateUrl: './gestion-compras.component.html',
  styleUrls: ['./gestion-compras.component.css']
})
export class GestionComprasComponent implements OnInit {

  users: Array<any> = [
    {descripcion: 'descr1', frealcomp: 'frc1', fregcomp: 'fregcomop1', proveedor: 'prov1', foto: 10, sucursal: 'suc1' },
    {descripcion: 'descr2', frealcomp: 'frc2', fregcomp: 'fregcomop2', proveedor: 'prov2', foto: 20, sucursal: 'suc2' },
    {descripcion: 'descr3', frealcomp: 'frc3', fregcomp: 'fregcomop3', proveedor: 'prov3', foto: 30, sucursal: 'suc3' },
    {descripcion: 'descr4', frealcomp: 'frc4', fregcomp: 'fregcomop4', proveedor: 'prov4', foto: 40, sucursal: 'suc4' },
    {descripcion: 'descr5', frealcomp: 'frc5', fregcomp: 'fregcomop5', proveedor: 'prov5', foto: 50, sucursal: 'suc5' },
    {descripcion: 'descr6', frealcomp: 'frc6', fregcomp: 'fregcomop6', proveedor: 'prov6', foto: 60, sucursal: 'suc6' },
    {descripcion: 'descr7', frealcomp: 'frc7', fregcomp: 'fregcomop7', proveedor: 'prov7', foto: 70, sucursal: 'suc7' },
    {descripcion: 'descr8', frealcomp: 'frc8', fregcomp: 'fregcomop8', proveedor: 'prov8', foto: 80, sucursal: 'suc8' }
]; 
  
  constructor() { }

  ngOnInit() {
  }

}
