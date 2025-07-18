import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent {

  title = 'angular-ng-container';

  toggle: Boolean = true;

  onToggle(){
    this.toggle = !this.toggle
  }
}
