import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrls: ['./gestion-roles.component.css']
})
export class GestionRolesComponent implements OnInit {

  users: Array<any> = [
    {id: 1, nombre: 'nombre1', apellido1: 'ape1', apellido2: 'ape1', rol: 'limpiar' },
    {id: 2, nombre: 'nombre2', apellido1: 'ape2', apellido2: 'ape2', rol: 'limpiar2' },
    {id: 3, nombre: 'nombre3', apellido1: 'ape3', apellido2: 'ape3', rol: 'limpiar3' },
    {id: 4, nombre: 'nombre4', apellido1: 'ape4', apellido2: 'ape4', rol: 'limpiar4' },
    {id: 5, nombre: 'nombre5', apellido1: 'ape5', apellido2: 'ape5', rol: 'limpiar5' },
    {id: 6, nombre: 'nombre6', apellido1: 'ape6', apellido2: 'ape6', rol: 'limpiar6' },
    {id: 7, nombre: 'nombre7', apellido1: 'ape7', apellido2: 'ape7', rol: 'limpiar7' }
]; 

  constructor() { }

  ngOnInit() {
  }

}
