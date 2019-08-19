import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service'; 

@Component({
  selector: 'app-editar-compras',
  templateUrl: './editar-compras.component.html',
  styleUrls: ['./editar-compras.component.css']
})
export class EditarComprasComponent implements OnInit {

  @Input() productCompras: any = { compras_descripcion:'', compras_frelc: '', compras_fregc: '',compras_prov: '', compras_foto:'', compras_sucursal:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productCompras = data;
    });
  }

  updateCompra() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productCompras).subscribe((result) => {
      this.router.navigate(['/gestion-compras/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
