import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gnresultado',
  templateUrl: './gnresultado.component.html',
  styleUrls: ['./gnresultado.component.css']
})
export class GnresultadoComponent implements OnInit {

  constructor() { }
  @Input()  numBase?:number;
  @Input() denExponente?:number;
  resultado?:number;
  acumulador:number=0;
  ngOnInit(): void {
  }

}
