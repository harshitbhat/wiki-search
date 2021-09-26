import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { PageListComponent } from './components/page-list/page-list.component';

@NgModule({
  declarations: [AppComponent, SearchbarComponent, PageListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
