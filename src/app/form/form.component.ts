import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('inputEl') inputElements: ElementRef;

  show() {
    console.log(this.inputElements.nativeElement);
  }
}
