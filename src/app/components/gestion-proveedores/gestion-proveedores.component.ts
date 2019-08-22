import { Component, OnInit, Input } from '@angular/core';
import { Proveedor } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service'; 

@Component({
  selector: 'app-gestion-proveedores',
  templateUrl: './gestion-proveedores.component.html',
  styleUrls: ['./gestion-proveedores.component.css']
})
export class GestionProveedoresComponent implements OnInit {

  users: Proveedor[];

  constructor(private dataService: DataService) { }

  ngOnInit(){

    return this.dataService.getProveedor()
    .subscribe(data => this.users = data); 
  }
  /*ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.proveedores = data;
    });
  }

  getProducts() {
    this.proveedores = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.proveedores = data;
    });
  }

  add() {
    this.router.navigate(['/anadir-proveedor']);
  }

  delete(id) {
    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  }*/
}
