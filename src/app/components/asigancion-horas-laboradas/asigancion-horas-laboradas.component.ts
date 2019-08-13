import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asigancion-horas-laboradas',
  templateUrl: './asigancion-horas-laboradas.component.html',
  styleUrls: ['./asigancion-horas-laboradas.component.css']
})
export class AsigancionHorasLaboradasComponent implements OnInit {

  users: Array<any> = [
    {nombre: 'descr1', ape1: 'frc1', ape2: 'fregcomop1', hsemana: 100 , hextra: 10 },
    {nombre: 'descr2', ape1: 'frc2', ape2: 'fregcomop2', hsemana: 200 , hextra: 20 },
    {nombre: 'descr3', ape1: 'frc3', ape2: 'fregcomop3', hsemana: 300 , hextra: 30 },
    {nombre: 'descr4', ape1: 'frc4', ape2: 'fregcomop4', hsemana: 400 , hextra: 40 },
    {nombre: 'descr5', ape1: 'frc5', ape2: 'fregcomop5', hsemana: 500 , hextra: 50 },
    {nombre: 'descr6', ape1: 'frc6', ape2: 'fregcomop6', hsemana: 600 , hextra: 60 },
    {nombre: 'descr7', ape1: 'frc7', ape2: 'fregcomop7', hsemana: 700 , hextra: 70 },
    {nombre: 'descr8', ape1: 'frc8', ape2: 'fregcomop8', hsemana: 800 , hextra: 80 }
]; 

  constructor() { }

  ngOnInit() {
  }

}
