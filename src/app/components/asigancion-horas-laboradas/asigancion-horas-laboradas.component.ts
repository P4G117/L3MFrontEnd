import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-asigancion-horas-laboradas',
  templateUrl: './asigancion-horas-laboradas.component.html',
  styleUrls: ['./asigancion-horas-laboradas.component.css']
})
export class AsigancionHorasLaboradasComponent implements OnInit {

  asighorlab:any;

  constructor() { }

  ngOnInit() {
  }

/*
  ngOnInit() {
    this.rest.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.asighorlab = data;
    });
  }

  getProducts() {
    this.asighorlab = [];
    this.rest.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.asighorlab = data;
    });
  }

  add() {
    this.router.navigate(['/asignacion-horas']);
  }*/

}
