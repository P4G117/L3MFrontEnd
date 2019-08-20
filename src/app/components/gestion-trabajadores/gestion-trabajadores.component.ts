import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gestion-trabajadores',
  templateUrl: './gestion-trabajadores.component.html',
  styleUrls: ['./gestion-trabajadores.component.css']
})

export class GestionTrabajadoresComponent implements OnInit {

  users: User[];

  constructor(private dataService: DataService) { }

  ngOnInit(){

    return this.dataService.getUsers()
    .subscribe(data => this.users = data); 
  }
  /*ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.trabajadores = data;
    });
  }

  getTrabajadores() {
    this.trabajadores = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.trabajadores = data;
    });
  }

  add() {
    this.router.navigate(['/anadir-trabajadores']);
  }

  delete(id) {
    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getTrabajadores();
        }, (err) => {
          console.log(err);
        }
      );
  }*/
}
