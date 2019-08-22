import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  users: Producto[];

  constructor(private dataService: DataService) { }

  //Inicio y Carga de la Informacion para la Vista
  ngOnInit(){
    return this.dataService.getProducto()
    .subscribe(data => this.users = data); 
  }

}
