import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service'; 

@Component({
  selector: 'app-editar-trabajadores',
  templateUrl: './editar-trabajadores.component.html',
  styleUrls: ['./editar-trabajadores.component.css']
})
export class EditarTrabajadoresComponent implements OnInit {

  @Input() productTrabajadores: any = { trab_num: '', trab_nombre: '', trab_ape1:'', trab_ape2:'', trab_ced:'', trab_fnac:'', trab_fing:'', trab_sucursal:'', trab_salxh:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productTrabajadores = data;
    });
  }

  updateTrabajador() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productTrabajadores).subscribe((result) => {
      this.router.navigate(['/gestion-trabajadores/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
