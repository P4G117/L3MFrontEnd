import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-anadir-trabajadores',
  templateUrl: './anadir-trabajadores.component.html',
  styleUrls: ['./anadir-trabajadores.component.css']
})
export class AnadirTrabajadoresComponent implements OnInit {

  @Input() productTrabajadores: any = { trab_num: '', trab_nombre: '', trab_ape1:'', trab_ape2:'', trab_ced:'', trab_fnac:'', trab_fing:'', trab_sucursal:'', trab_salxh:'' };

  constructor() { }

  ngOnInit() {
  }
/*
  addTrabajador() {
    this.rest.addProduct(this.productTrabajadores).subscribe((result) => {
      this.router.navigate(['/gestion-trabajadores/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }*/

}
