import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service';
/*import {Router} from "@angular/router";*/

@Component({
  selector: 'app-anadir-rol',
  templateUrl: './anadir-rol.component.html',
  styleUrls: ['./anadir-rol.component.css']
})

export class AnadirRolComponent implements OnInit {

  @Input() productRol = { rol_id:'', rol_nombre: '', rol_ape1: '', rol_ape2:'', rol_rol: '' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
  }

  addRol() {
    this.rest.addProduct(this.productRol).subscribe((result) => {
      this.router.navigate(['/gestion-rol'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}



