import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-gnbase',
  templateUrl: './gnbase.component.html',
  styleUrls: ['./gnbase.component.css']
})
export class GnbaseComponent implements OnInit {

  constructor() { }
  @Input() base!:number;
  ngOnInit(): void {
  }

}
