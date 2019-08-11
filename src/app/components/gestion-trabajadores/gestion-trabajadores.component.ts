import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-trabajadores',
  templateUrl: './gestion-trabajadores.component.html',
  styleUrls: ['./gestion-trabajadores.component.css']
})
export class GestionTrabajadoresComponent implements OnInit {

  user: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
