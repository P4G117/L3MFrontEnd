import { Component, OnInit, Input } from '@angular/core';
import {  Inventario, HorasTrabajadas } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-asigancion-horas-laboradas',
  templateUrl: './asigancion-horas-laboradas.component.html',
  styleUrls: ['./asigancion-horas-laboradas.component.css']
})
export class AsigancionHorasLaboradasComponent implements OnInit {

  //Lista donde estarían Datos
  users: HorasTrabajadas[];

  constructor(private dataService: DataService) { }
  //Metodo para tarer los datos de la base de Datos y enseñarlos 
  ngOnInit(){
    return this.dataService.getHTrabajadas()
    .subscribe(data => this.users = data); 
  }


}
