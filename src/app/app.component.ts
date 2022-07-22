import { Component, VERSION, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('toggleCompFromHtml') toggleComp: ToggleComponent;
  name = 'Angular ' + VERSION.major;
  isChecked = true;
  ngAfterViewInit = () => {
    console.log(this.toggleComp);
    apiCall.subscribe(() => {
      this.toggleComp.toggle();
    });
  };
}
