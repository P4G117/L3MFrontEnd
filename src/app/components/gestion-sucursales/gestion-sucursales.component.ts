import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service'; 

@Component({
  selector: 'app-gestion-sucursales',
  templateUrl: './gestion-sucursales.component.html',
  styleUrls: ['./gestion-sucursales.component.css']
})
export class GestionSucursalesComponent implements OnInit {

  sucursales:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.sucursales = data;
    });
  }

  getSucursales() {
    this.sucursales = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.sucursales = data;
    });
  }

  add() {
    this.router.navigate(['/anadir-sucursal']);
  }

  delete(id) {
    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getSucursales();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
