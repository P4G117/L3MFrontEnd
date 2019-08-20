import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-editar-compras',
  templateUrl: './editar-compras.component.html',
  styleUrls: ['./editar-compras.component.css']
})
export class EditarComprasComponent implements OnInit {

  @Input() productCompras: any = { compras_descripcion:'', compras_frelc: '', compras_fregc: '',compras_prov: '', compras_foto:'', compras_sucursal:'' };

  constructor() { }
  
  ngOnInit() {
  }
  /*
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
  }*/

}
