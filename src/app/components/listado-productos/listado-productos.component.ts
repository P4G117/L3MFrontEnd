import { Component, OnInit } from '@angular/core';
import {  Inventario } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  users: Inventario[];

  constructor(private dataService: DataService) { }

  //Inicio y Carga de la Informacion de la Vista
  ngOnInit(){
    return this.dataService.getInventario()
    .subscribe(data => this.users = data); 
  }

}
