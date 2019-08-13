import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-trabajadores',
  templateUrl: './gestion-trabajadores.component.html',
  styleUrls: ['./gestion-trabajadores.component.css']
})
export class GestionTrabajadoresComponent implements OnInit {

  users: Array<any> = [
    {num: 1, nombre: 'nombre1', ape1: 'dir1', ape2: 'tel1', ced: 10, fnac: 'fnac1', fing: 'fing1', sucursal: 'sucursal1',salariohora: 'sxhora1' },
    {num: 2, nombre: 'nombre2', ape1: 'dir2', ape2: 'tel2', ced: 20, fnac: 'fnac2', fing: 'fing2', sucursal: 'sucursal2',salariohora: 'sxhora2' },
    {num: 3, nombre: 'nombre3', ape1: 'dir3', ape2: 'tel3', ced: 30, fnac: 'fnac3', fing: 'fing3', sucursal: 'sucursal3',salariohora: 'sxhora3' },
    {num: 4, nombre: 'nombre4', ape1: 'dir4', ape2: 'tel4', ced: 40, fnac: 'fnac4', fing: 'fing4', sucursal: 'sucursal4',salariohora: 'sxhora4' },
    {num: 5, nombre: 'nombre5', ape1: 'dir5', ape2: 'tel5', ced: 50, fnac: 'fnac5', fing: 'fing5', sucursal: 'sucursal5',salariohora: 'sxhora5' },
    {num: 6, nombre: 'nombre6', ape1: 'dir6', ape2: 'tel6', ced: 60, fnac: 'fnac6', fing: 'fing6', sucursal: 'sucursal6',salariohora: 'sxhora6' },
    {num: 7, nombre: 'nombre7', ape1: 'dir7', ape2: 'tel7', ced: 70, fnac: 'fnac7', fing: 'fing7', sucursal: 'sucursal7',salariohora: 'sxhora7' }
]; 
  constructor() { }

  ngOnInit() {
  }

}
