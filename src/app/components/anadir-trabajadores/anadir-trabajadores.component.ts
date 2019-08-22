import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-anadir-trabajadores',
  templateUrl: './anadir-trabajadores.component.html',
  styleUrls: ['./anadir-trabajadores.component.css']
})
export class AnadirTrabajadoresComponent implements OnInit {

  //Lista Prueba
  @Input() productTrabajadores: any = { trab_num: '', trab_nombre: '', trab_ape1:'', trab_ape2:'', trab_ced:'', trab_fnac:'', trab_fing:'', trab_sucursal:'', trab_salxh:'' };

  constructor() { }
//Inicia la Vista
  ngOnInit() {
  }


}
