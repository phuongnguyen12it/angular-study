import {
  Component,
  EventEmitter,
  Input,
  Output,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabPanelComponent } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
})
export class TabGroupComponent {
  tabPanelList: TabPanelComponent[] = [];
  @Input() activeIndex = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  @ContentChildren(TabPanelComponent) tabPanels: QueryList<TabPanelComponent>;

  ngAfterContentInit() {
    console.log(this.tabPanels);
    this.tabPanels.changes.subscribe(console.log);
  }

  addTab(tab: TabPanelComponent) {
    this.tabPanelList = [...this.tabPanelList, tab];
    this.tabPanelList[this.activeIndex].selected = true;
  }

  removeTab(tab: TabPanelComponent) {
    let found = -1;
    this.tabPanelList = this.tabPanelList.filter((tp, index) => {
      if (tp === tab) {
        found = index;
        return false;
      }
      return true;
    });

    if (found === this.activeIndex) {
      this.activeIndexChange.emit(
        found === this.tabPanelList.length ? found - 1 : found
      );
    }
  }
}
