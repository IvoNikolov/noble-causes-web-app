import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-cause',
  templateUrl: './create-cause.component.html',
  styleUrls: ['./create-cause.component.scss']
})
export class CreateCauseComponent implements OnInit {

  @ViewChild('imgd') imgData: ElementRef;

  imagePath: any;
  imgURL: any;
  message: string;

  constructor() {}

  ngOnInit() {}

  onFileSelected(event) {
    console.log('ok');
    console.log(event);
  }

  preview(files) {
    if (files.length === 0) {return; }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
      this.add();
    };

  }

  add() {
    console.log(this.imgData);
  }
}
