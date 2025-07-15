import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChildren('inputEl') inputElements: QueryList<ElementRef>;

  show() {
    this.inputElements.forEach((el) => {
      console.log(el.nativeElement.value);
    });
  }
}
