import { Component, OnInit, Input } from '@angular/core';
import {  Compras } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gestion-compras',
  templateUrl: './gestion-compras.component.html',
  styleUrls: ['./gestion-compras.component.css']
})
export class GestionComprasComponent implements OnInit {

  users: Compras[];

  constructor(private dataService: DataService) { }

  //Inicio y carga de informacion de la Vista
  ngOnInit(){

    return this.dataService.getCompras()
    .subscribe(data => this.users = data); 
  }

}
