import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabContentDirective } from '../tab-content.directive';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.css'],
})
export class TabPanelComponent {
  @Input() title: string;
  @Input() cache = false;
  @ViewChild(TemplateRef, { static: true }) implicitBody: TemplateRef<unknown>;
  @ContentChild(TabContentDirective, { static: true, read: TemplateRef })
  explicitBody: TemplateRef<unknown>;

  private _selected = false;
  get selected() {
    return this._selected;
  }

  @Input()
  set selected(v: boolean) {
    this._selected = v;

    if (!this.loaded) {
      this.cdr.detectChanges();
    }

    this.loaded = true;
  }

  loaded = false;

  constructor(
    private tabGroup: TabGroupComponent,
    private cdr: ChangeDetectorRef
  ) {}

  get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody;
  }

  ngOnInit() {
    this.tabGroup.addTab(this);
  }

  ngOnDestroy() {
    this.tabGroup.removeTab(this);
  }
}
