import { Component, OnInit, Input } from '@angular/core';
import { Trabajador } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gestion-trabajadores',
  templateUrl: './gestion-trabajadores.component.html',
  styleUrls: ['./gestion-trabajadores.component.css']
})

export class GestionTrabajadoresComponent implements OnInit {

  users: Trabajador[];

  constructor(private dataService: DataService) { }

  //Inicio y Carga de la Informacion de la Vista
  ngOnInit(){

    return this.dataService.getTrabajador()
    .subscribe(data => this.users = data); 
  }
  
}
