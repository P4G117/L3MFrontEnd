import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-editar-compras',
  templateUrl: './editar-compras.component.html',
  styleUrls: ['./editar-compras.component.css']
})
export class EditarComprasComponent implements OnInit {

  //Lista Prueba
  @Input() productCompras: any = { compras_descripcion:'', compras_frelc: '', compras_fregc: '',compras_prov: '', compras_foto:'', compras_sucursal:'' };

  constructor() { }

  //Inicia la Vista  
  ngOnInit() {
  }

}
