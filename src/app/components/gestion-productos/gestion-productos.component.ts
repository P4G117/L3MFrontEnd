import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {

  users: User[];

  constructor(private dataService: DataService) { }

  ngOnInit(){

    return this.dataService.getUsers()
    .subscribe(data => this.users = data); 
  }

  /*ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.productos = data;
    });
  }

  getProducts() {
    this.productos = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.productos = data;
    });
  }

  add() {
    this.router.navigate(['/anadir-productos']);
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
