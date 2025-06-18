import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent {
  menuElements: String[] = ['Home', 'Products', 'Sale', 'New Arrival', 'Contact'];
}
