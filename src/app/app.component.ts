import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  show = false;
  isDanger = false;
  isWarning = false;
  currentProgress = 70;
  currentProgressColor = 'dodgerBlue';
}
