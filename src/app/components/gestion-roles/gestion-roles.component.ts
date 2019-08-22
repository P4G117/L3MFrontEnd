import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrls: ['./gestion-roles.component.css']
})

export class GestionRolesComponent implements OnInit {

  users: Rol[];

  constructor(private dataService: DataService) { }
  //Metodo para captar datos  
  ngOnInit(){
    return this.dataService.getRol()
    .subscribe(data => this.users = data); 
  }

}
