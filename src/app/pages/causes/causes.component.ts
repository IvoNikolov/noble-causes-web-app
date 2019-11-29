import { Component, OnInit } from '@angular/core';
import { Cause } from './cause.model';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss']
})
export class CausesComponent implements OnInit {

  causes: Cause[] = [new Cause('Ivo', 'Hobby', 'Seeking Funds for IT StartUps', 'None', '0')];

  constructor() {
    console.log(this.causes);
  }

  ngOnInit() {
  }

}
