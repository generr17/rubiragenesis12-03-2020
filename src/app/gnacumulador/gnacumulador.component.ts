import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gnacumulador',
  templateUrl: './gnacumulador.component.html',
  styleUrls: ['./gnacumulador.component.css']
})
export class GnacumuladorComponent implements OnInit {

  constructor() { }
  @Input() suma?:number;
  ngOnInit(): void {
  }

}
