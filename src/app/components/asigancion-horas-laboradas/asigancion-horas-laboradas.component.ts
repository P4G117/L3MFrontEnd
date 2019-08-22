import { Component, OnInit, Input } from '@angular/core';
import {  Inventario, HorasTrabajadas } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-asigancion-horas-laboradas',
  templateUrl: './asigancion-horas-laboradas.component.html',
  styleUrls: ['./asigancion-horas-laboradas.component.css']
})
export class AsigancionHorasLaboradasComponent implements OnInit {

  users: HorasTrabajadas[];

  constructor(private dataService: DataService) { }

  ngOnInit(){
    return this.dataService.getHTrabajadas()
    .subscribe(data => this.users = data); 
  }
/*
  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.asighorlab = data;
    });
  }

  getProducts() {
    this.asighorlab = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.asighorlab = data;
    });
  }

  add() {
    this.router.navigate(['/asignacion-horas']);
  }*/

}
