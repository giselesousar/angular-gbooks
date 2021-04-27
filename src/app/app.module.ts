import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';
import { SearchBarComponent } from './views/home/search-bar/search-bar.component';
import { CardComponent } from './views/home/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PanelComponent } from './views/home/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    SearchBarComponent,
    CardComponent,
    NavbarComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
