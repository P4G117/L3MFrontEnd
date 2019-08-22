import { Component, OnInit, Input, NgZone } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Rol } from 'src/app/user.model';


@Component({
  selector: 'app-anadir-rol',
  templateUrl: './anadir-rol.component.html',
  styleUrls: ['./anadir-rol.component.css']
})

export class AnadirRolComponent implements OnInit {

  issueForm: FormGroup;

  Nombre=null;
  Descripcion: null;
  Funciono=null; 

  ngOnInit() {
    this.addIssue()
  }
  hola;
  
  constructor(private dataService: DataService, private router: Router, private ngZone: NgZone, public fb: FormBuilder,) { 
    
  }

  addIssue() {
    this.issueForm = this.fb.group({
      issue_name: [''],
      issue_message: ['']
    })
  }

PostData(){
  const url = "http://192.168.100.21:8080/api/Roles" 
  const retVal = this.dataService.post(url, {Name: this.Nombre, Description: this.Descripcion}).subscribe
  (data =>{this.hola = data});
}


  createTraveller(){
    let traveller:Rol = {
      Name: this.Nombre,
      Description: this.Descripcion,

    };
 // uses instance of data access service to call createTraveller function   
 this.dataService.createTraveller(traveller)
      .subscribe(
        success => alert("Done"),
        error => alert(error)
      );
  }


  prueba(){
    //this.Funciono = this.Nombre + this.Descripcion;

    this.Funciono = this.Nombre + this.Descripcion
  }

  addRol(){
    this.Funciono = this.Nombre + this.Descripcion;
    return this.dataService.postRol(this.Nombre)
    .subscribe(res => {
      console.log('Issue added!')
      this.ngZone.run(() => this.router.navigateByUrl('/gestion-rol'))
      });
  }
  
  RegisterUser(Nombre){ 
    console.log(Nombre);
    // User data which we have received from the registration form.
    this.dataService.registerUsers(Nombre).subscribe((Nombre)=>{
      console.log(Nombre);
     }); 
  }


}



