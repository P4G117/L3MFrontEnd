import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service'; 

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})

export class EditarProductosComponent implements OnInit {

  @Input() productProductos: any = { prod_nombre:'', prod_desc: '', prod_code: '',prod_prov: '', prod_compra:'', prod_imp:'', prod_descuento: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productProductos = data;
    });
  }

  updateProductos() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productProductos).subscribe((result) => {
      this.router.navigate(['/gestion-productos/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
