import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-anadir-sucursal',
  templateUrl: './anadir-sucursal.component.html',
  styleUrls: ['./anadir-sucursal.component.css']
})
export class AnadirSucursalComponent implements OnInit {

  @Input() productSucursales: any = { sucursal_nombre:'', sucursal_dir: '', sucursal_tel:'', sucursal_admin:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addSucursal() {
    this.rest.addProduct(this.productSucursales).subscribe((result) => {
      this.router.navigate(['/gestion-sucursales/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
