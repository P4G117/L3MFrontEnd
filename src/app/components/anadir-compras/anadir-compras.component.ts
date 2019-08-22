import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-anadir-compras',
  templateUrl: './anadir-compras.component.html',
  styleUrls: ['./anadir-compras.component.css']
})
export class AnadirComprasComponent implements OnInit {

    constructor() { }

  ngOnInit() {
  }
/*
  addCompras() {
    this.rest.addProduct(this.productCompras).subscribe((result) => {
      this.router.navigate(['/gestion-compras/'+result._id]);
    }, (err) => {
      console.log(err);
    });
  }*/

}
