import { Component, OnInit, Input } from '@angular/core';
import { NgModule  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-asignacion-horas',
  templateUrl: './asignacion-horas.component.html',
  styleUrls: ['./asignacion-horas.component.css']
})
export class AsignacionHorasComponent implements OnInit {

  @Input() productAsigHorLab = { horaslab_nombre:'', horaslab_ape1:'', horaslab_ape2:'', horaslab_hsem:'', horaslab_hext:'' };

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addHorasLab() {
    this.rest.addProduct(this.productAsigHorLab).subscribe((result) => {
      this.router.navigate(['/asignacion-horas-laboradas/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }

}
