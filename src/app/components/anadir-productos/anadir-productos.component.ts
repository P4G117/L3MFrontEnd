import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-anadir-productos',
  templateUrl: './anadir-productos.component.html',
  styleUrls: ['./anadir-productos.component.css']
})
export class AnadirProductosComponent implements OnInit {

  @Input() productProductos: any = { prod_nombre:'', prod_desc: '', prod_code: '',prod_prov: '', prod_compra:'', prod_imp:'', prod_descuento: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProductos() {
    this.rest.addProduct(this.productProductos).subscribe((result) => {
      this.router.navigate(['/gestion-compras/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }
}
