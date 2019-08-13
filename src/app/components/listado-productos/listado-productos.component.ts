import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  users: Array<any> = [
    {producto: 'prod1', precioprod: 'pprod1', existencia: 'fregcomop1'},
    {producto: 'prod1', precioprod: 'pprod1', existencia: 'fregcomop1'},
    {producto: 'prod1', precioprod: 'pprod1', existencia: 'fregcomop1'},
    {producto: 'prod1', precioprod: 'pprod1', existencia: 'fregcomop1'},
    {producto: 'prod1', precioprod: 'pprod1', existencia: 'fregcomop1'},
    {producto: 'prod1', precioprod: 'pprod1', existencia: 'fregcomop1'},
    {producto: 'prod1', precioprod: 'pprod1', existencia: 'fregcomop1'},
    {producto: 'prod1', precioprod: 'pprod1', existencia: 'fregcomop1'}
]; 
  
  constructor() { }

  ngOnInit() {
  }

}
