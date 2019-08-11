import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-sucursales',
  templateUrl: './gestion-sucursales.component.html',
  styleUrls: ['./gestion-sucursales.component.css']
})
export class GestionSucursalesComponent implements OnInit {

  user: Array<any>;
  
  constructor() { }

  ngOnInit() {
  }

}
