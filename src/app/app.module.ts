import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { AuthorDetailsComponent } from './authors/author-details/author-details.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabComponent } from './tag/tab.component';
import { TabGroupComponent } from './tabs/tab-group/tab-group.component';
import { TabPanelComponent } from './tabs/tab-panel/tab-panel.component';
import { TabBsGroupComponent } from './tabs/tab-bs-group/tab-bs-group.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    ToggleComponent,
    TabComponent,
    TabPanelComponent,
    TabBsGroupComponent,
    TabGroupComponent,
    CounterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
