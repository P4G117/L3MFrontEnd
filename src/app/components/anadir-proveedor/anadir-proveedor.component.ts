import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-anadir-proveedor',
  templateUrl: './anadir-proveedor.component.html',
  styleUrls: ['./anadir-proveedor.component.css']
})
export class AnadirProveedorComponent implements OnInit {

  @Input() productProveedores: any = { prov_num: '', prov_nombre:'', prov_cedula: '' };

  constructor() { }

  ngOnInit() {
  }
/*
  addProveedor() {
    this.rest.addProduct(this.productProveedores).subscribe((result) => {
      this.router.navigate(['/gestion-proveedores/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }*/

}
