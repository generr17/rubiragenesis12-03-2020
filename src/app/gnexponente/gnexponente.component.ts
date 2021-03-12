import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gnexponente',
  templateUrl: './gnexponente.component.html',
  styleUrls: ['./gnexponente.component.css']
})
export class GnexponenteComponent implements OnInit {

  constructor() { }
  @Input() basenumero!:number;
   exponente!:number;

  ngOnInit(): void {
  }

}
