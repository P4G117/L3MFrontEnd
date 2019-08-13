import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-sucursales',
  templateUrl: './gestion-sucursales.component.html',
  styleUrls: ['./gestion-sucursales.component.css']
})
export class GestionSucursalesComponent implements OnInit {

  users: Array<any> = [
    {num: 1, sucursal: 'nombre1', direccion: 'dir1', telefono: 'tel1', administrador: 'admin1' },
    {num: 2, sucursal: 'nombre2', direccion: 'dir2', telefono: 'tel2', administrador: 'admin2'},
    {num: 3, sucursal: 'nombre3', direccion: 'dir3', telefono: 'tel3', administrador: 'admin3'},
    {num: 4, sucursal: 'nombre4', direccion: 'dir4', telefono: 'tel4', administrador: 'admin4'},
    {num: 5, sucursal: 'nombre5', direccion: 'dir5', telefono: 'tel5', administrador: 'admin5'},
    {num: 6, sucursal: 'nombre6', direccion: 'dir6', telefono: 'tel6', administrador: 'admin6'},
    {num: 7, sucursal: 'nombre7', direccion: 'dir7', telefono: 'tel7', administrador: 'admin7'}
]; 
  
  constructor() { }

  ngOnInit() {
  }

}
