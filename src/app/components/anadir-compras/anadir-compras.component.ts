import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-anadir-compras',
  templateUrl: './anadir-compras.component.html',
  styleUrls: ['./anadir-compras.component.css']
})
export class AnadirComprasComponent implements OnInit {

  @Input() productCompras = { compras_descripcion:'', compras_frelc: '', compras_fregc: '',compras_prov: '', compras_foto:'', compras_sucursal:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addCompras() {
    this.rest.addProduct(this.productCompras).subscribe((result) => {
      this.router.navigate(['/gestion-compras/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
