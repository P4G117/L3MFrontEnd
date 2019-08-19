import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service'; 

@Component({
  selector: 'app-asigancion-horas-laboradas',
  templateUrl: './asigancion-horas-laboradas.component.html',
  styleUrls: ['./asigancion-horas-laboradas.component.css']
})
export class AsigancionHorasLaboradasComponent implements OnInit {

  asighorlab:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.asighorlab = data;
    });
  }

  getProducts() {
    this.asighorlab = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.asighorlab = data;
    });
  }

  add() {
    this.router.navigate(['/asignacion-horas']);
  }

}
