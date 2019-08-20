import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-anadir-compras',
  templateUrl: './anadir-compras.component.html',
  styleUrls: ['./anadir-compras.component.css']
})
export class AnadirComprasComponent implements OnInit {

  @Input() productCompras = { compras_descripcion:'', compras_frelc: '', compras_fregc: '',compras_prov: '', compras_foto:'', compras_sucursal:'' };

  constructor() { }

  ngOnInit() {
  }
/*
  addCompras() {
    this.rest.addProduct(this.productCompras).subscribe((result) => {
      this.router.navigate(['/gestion-compras/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }*/

}
