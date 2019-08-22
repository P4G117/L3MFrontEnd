import { Component, OnInit, Input } from '@angular/core';
import { Sucursal } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service'; 

@Component({
  selector: 'app-gestion-sucursales',
  templateUrl: './gestion-sucursales.component.html',
  styleUrls: ['./gestion-sucursales.component.css']
})
export class GestionSucursalesComponent implements OnInit {

  users: Sucursal[];

  constructor(private dataService: DataService) { }

  ngOnInit(){

    return this.dataService.getSucursal()
    .subscribe(data => this.users = data); 
  }
/*
  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.sucursales = data;
    });
  }

  getSucursales() {
    this.sucursales = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.sucursales = data;
    });
  }

  add() {
    this.router.navigate(['/anadir-sucursal']);
  }

  delete(id) {
    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getSucursales();
        }, (err) => {
          console.log(err);
        }
      );
  }*/

}
