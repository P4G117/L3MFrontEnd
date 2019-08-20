import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {

  @Input() productSucursales: any = { sucursal_nombre:'', sucursal_dir: '', sucursal_tel:'', sucursal_admin:'' };

  constructor() { }


  ngOnInit() {
  }
  /*
  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productSucursales = data;
    });
  }

  updateSucursal() {
    this.rest.updateProduct(this.route.snapshot.params['id'], this.productSucursales).subscribe((result) => {
      this.router.navigate(['/gestion-sucursales/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }*/
}
