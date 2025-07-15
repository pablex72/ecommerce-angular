import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

  title = 'angular-view-children';
  fullName : string = '';

  @ViewChildren('inputEl', {}) inputElements: QueryList<ElementRef>;

  show() {
    let name = ''
    this.inputElements.forEach((el) => {
      name += el.nativeElement.value + ''
    });
    this.fullName = name.trim()
  }
}
