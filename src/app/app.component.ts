import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  inputType = 'text';
  user = {
    name: 'a',
    age: 12,
  };

  handler = (event) => {
    console.log('click', event);
  };
}
