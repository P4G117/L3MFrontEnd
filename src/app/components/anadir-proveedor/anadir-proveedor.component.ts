import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-anadir-proveedor',
  templateUrl: './anadir-proveedor.component.html',
  styleUrls: ['./anadir-proveedor.component.css']
})
export class AnadirProveedorComponent implements OnInit {

  @Input() productProveedores: any = { prov_num: '', prov_nombre:'', prov_cedula: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProveedor() {
    this.rest.addProduct(this.productProveedores).subscribe((result) => {
      this.router.navigate(['/gestion-proveedores/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
