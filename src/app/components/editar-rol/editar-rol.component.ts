import { Component, OnInit, Input } from '@angular/core';
 

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit {

  //Lista Prueba
  @Input() productRol:any = { rol_id:'', rol_nombre: '', rol_ape1: '', rol_ape2:'', rol_rol: '' };
  
  constructor() { }

  //Inicia la Vista
  ngOnInit() {
  }

}
