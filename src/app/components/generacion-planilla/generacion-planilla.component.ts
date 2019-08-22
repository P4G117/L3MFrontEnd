import { Component, OnInit, Input } from '@angular/core';
import {  Inventario, HorasTrabajadas } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-generacion-planilla',
  templateUrl: './generacion-planilla.component.html',
  styleUrls: ['./generacion-planilla.component.css']
})
export class GeneracionPlanillaComponent implements OnInit {

  //Lista donde estarían Datos
  users: HorasTrabajadas[];

  constructor(private dataService: DataService) { }
  //Metodo para tarer los datos de la base de Datos y enseñarlos 
  ngOnInit(){
    return this.dataService.getHTrabajadas()
    .subscribe(data => this.users = data); 
  }

}
