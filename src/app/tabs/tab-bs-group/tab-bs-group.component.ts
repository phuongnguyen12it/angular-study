import { Component } from '@angular/core';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'tab-bs-group',
  templateUrl: './tab-bs-group.component.html',
  styleUrls: ['./tab-bs-group.component.css'],
  providers: [
    {
      provide: TabGroupComponent,
      useExisting: TabBsGroupComponent,
    },
  ],
})
export class TabBsGroupComponent extends TabGroupComponent {
  onTabClicked(idx: number) {
    this.tabPanelList.find((tab) => tab.selected).selected = false;
    this.tabPanelList[idx].selected = true;
    this.activeIndexChange.emit(idx);
  }
}
