import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gestion-compras',
  templateUrl: './gestion-compras.component.html',
  styleUrls: ['./gestion-compras.component.css']
})
export class GestionComprasComponent implements OnInit {

  users: User[];

  constructor(private dataService: DataService) { }

  ngOnInit(){

    return this.dataService.getUsers()
    .subscribe(data => this.users = data); 
  }
  /*ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.compras = data;
    });
  }

  getProducts() {
    this.compras = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.compras = data;
    });
  }

  add() {
    this.router.navigate(['/anadir-compras']);
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
