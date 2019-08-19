import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service'; 

@Component({
  selector: 'app-editar-proveedores',
  templateUrl: './editar-proveedores.component.html',
  styleUrls: ['./editar-proveedores.component.css']
})
export class EditarProveedoresComponent implements OnInit {

  @Input() productProveedores: any = { prov_num: '', prov_nombre:'', prov_cedula: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productProveedores = data;
    });
  }

  updateProveedor() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productProveedores).subscribe((result) => {
      this.router.navigate(['/gestion-Proveedores/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
