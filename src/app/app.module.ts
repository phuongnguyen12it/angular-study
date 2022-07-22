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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
