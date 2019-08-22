import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-asignacion-horas',
  templateUrl: './asignacion-horas.component.html',
  styleUrls: ['./asignacion-horas.component.css']
})
export class AsignacionHorasComponent implements OnInit {

  //Lista Prueba
  @Input() productAsigHorLab = { horaslab_nombre:'', horaslab_ape1:'', horaslab_ape2:'', horaslab_hsem:'', horaslab_hext:'' };

  constructor() { }
//Inicia la Vista

  ngOnInit() {
  }

}
