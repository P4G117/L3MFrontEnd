import { Component, OnInit, Input } from '@angular/core';
 

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})

export class EditarProductosComponent implements OnInit {

  @Input() productProductos: any = { prod_nombre:'', prod_desc: '', prod_code: '',prod_prov: '', prod_compra:'', prod_imp:'', prod_descuento: '' };

  constructor() { }
  ngOnInit() {
  }
  /*
  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productProductos = data;
    });
  }

  updateProductos() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productProductos).subscribe((result) => {
      this.router.navigate(['/gestion-productos/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }*/
}
