import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-editar-proveedores',
  templateUrl: './editar-proveedores.component.html',
  styleUrls: ['./editar-proveedores.component.css']
})
export class EditarProveedoresComponent implements OnInit {

  @Input() productProveedores: any = { prov_num: '', prov_nombre:'', prov_cedula: '' };

  constructor() { }

  ngOnInit() {
  }
  /*
  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productProveedores = data;
    });
  }

  updateProveedor() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productProveedores).subscribe((result) => {
      this.router.navigate(['/gestion-Proveedores/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }*/

}
