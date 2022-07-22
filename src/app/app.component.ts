import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nameInput: ElementRef<HTMLInputElement>;
  name = 'Angular ' + VERSION.major;
  counter = 1;
  navs = ['Active', 'Link 1', 'Link 2'];
}
