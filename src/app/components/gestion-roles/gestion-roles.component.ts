import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/user.model';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-roles',
  templateUrl: './gestion-roles.component.html',
  styleUrls: ['./gestion-roles.component.css']
})

export class GestionRolesComponent implements OnInit {

  users: Rol[];

  constructor(private dataService: DataService) { }

  ngOnInit(){
    return this.dataService.getRol()
    .subscribe(data => this.users = data); 
  }

  /*editarRol(id){
    //this.router.navigate(['editar-rol'])
    return this.dataService.GetRol(id)
    .subscribe(data => this.users = data)
  }

  eliminarRol(id){
    return this.dataService.DeleteRol(id)
    .subscribe(data => this.users = data)
  }*/

  /*ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.roles = data;
    });
  }

  getProducts() {
    this.roles = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.roles = data;
    });
  }

  add() {
    this.router.navigate(['/anadir-rol']);
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
