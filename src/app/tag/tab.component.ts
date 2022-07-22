import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  @Input() navs: string[];
  @Input() linkTemplate: TemplateRef<any>;
}
