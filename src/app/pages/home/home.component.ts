import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data;
  val = 'one';
  test = 'this is the value';

  constructor() { }

  ngOnInit() {
  }

  onInput(event: Event) {
    this.data = (event.target as HTMLInputElement).value;
    console.log(this.val);
  }

}
