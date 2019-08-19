import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service'; 

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit {
  
  @Input() productRol:any = { rol_id:'', rol_nombre: '', rol_ape1: '', rol_ape2:'', rol_rol: '' };
  
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productRol = data;
    });
  }

  updateProduct() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productRol).subscribe((result) => {
      this.router.navigate(['/gestion-roles/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
