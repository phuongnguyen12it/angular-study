import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css'],
})
export class TabPanelComponent {
  @Input() title: string;
  @ViewChild(TemplateRef, { static: true }) implicitBody: TemplateRef<unknown>;
  @ContentChild(TemplateRef, { static: true })
  explicitBody: TemplateRef<unknown>;
  constructor(private tabGroup: TabGroupComponent) {}
  get panelBody(): TemplateRef<unknown> {
    return this.implicitBody;
  }
  ngOnInit() {
    console.log(this.explicitBody);
    this.tabGroup.addTab(this);
  }
}
