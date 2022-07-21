import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  @Input() checked: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();
}
