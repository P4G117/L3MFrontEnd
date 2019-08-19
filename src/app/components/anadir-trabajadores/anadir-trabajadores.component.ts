import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-anadir-trabajadores',
  templateUrl: './anadir-trabajadores.component.html',
  styleUrls: ['./anadir-trabajadores.component.css']
})
export class AnadirTrabajadoresComponent implements OnInit {

  @Input() productTrabajadores: any = { trab_num: '', trab_nombre: '', trab_ape1:'', trab_ape2:'', trab_ced:'', trab_fnac:'', trab_fing:'', trab_sucursal:'', trab_salxh:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addTrabajador() {
    this.rest.addProduct(this.productTrabajadores).subscribe((result) => {
      this.router.navigate(['/gestion-trabajadores/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
