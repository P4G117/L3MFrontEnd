import { Component, OnInit, Input } from '@angular/core';
import { Proveedor } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service'; 

@Component({
  selector: 'app-gestion-proveedores',
  templateUrl: './gestion-proveedores.component.html',
  styleUrls: ['./gestion-proveedores.component.css']
})
export class GestionProveedoresComponent implements OnInit {

  users: Proveedor[];

  constructor(private dataService: DataService) { }

  //Inicio y Carga de la Informacion para la Vista
  ngOnInit(){

    return this.dataService.getProveedor()
    .subscribe(data => this.users = data); 
  }
  
}
