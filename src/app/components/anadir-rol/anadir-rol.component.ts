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


//Inicia la Vista
  ngOnInit() {
    
  }
  
  
  constructor(private dataService: DataService, private router: Router, private ngZone: NgZone, public fb: FormBuilder,) { 
    
  }

}



