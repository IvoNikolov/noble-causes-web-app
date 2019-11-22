import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cause-details',
  templateUrl: './cause-details.component.html',
  styleUrls: ['./cause-details.component.scss']
})
export class CauseDetailsComponent implements OnInit {

  @Input() val: string;

  constructor() { }

  ngOnInit() {
    console.log(this.val);
  }

}
