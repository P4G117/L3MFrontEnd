import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service'; 

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  @Input() productSucursales: any = { sucursal_nombre:'', sucursal_dir: '', sucursal_tel:'', sucursal_admin:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productSucursales = data;
    });
  }

  updateSucursal() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productSucursales).subscribe((result) => {
      this.router.navigate(['/gestion-sucursales/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
