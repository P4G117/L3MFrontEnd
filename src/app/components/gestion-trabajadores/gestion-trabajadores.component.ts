import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service'; 

@Component({
  selector: 'app-gestion-trabajadores',
  templateUrl: './gestion-trabajadores.component.html',
  styleUrls: ['./gestion-trabajadores.component.css']
})

export class GestionTrabajadoresComponent implements OnInit {

  trabajadores:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.trabajadores = data;
    });
  }

  getTrabajadores() {
    this.trabajadores = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.trabajadores = data;
    });
  }

  add() {
    this.router.navigate(['/anadir-trabajadores']);
  }

  delete(id) {
    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getTrabajadores();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
