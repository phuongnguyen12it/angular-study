import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('toggleCompFromHtml') toggleComp: ToggleComponent;
  @ViewChild('nameInput', {static:true}) nameInput: ElementRef<HTMLInputElement>;
  name = 'Angular ' + VERSION.major;
  isChecked = true;
  ngOnInit() {
    this.nameInput.nativeElement.focus();
  }
  ngAfterViewInit() {
    console.log(this.toggleComp);
    // apiCall.subscribe(() => {
    //   this.toggleComp.toggle();
    // });
  }
}
