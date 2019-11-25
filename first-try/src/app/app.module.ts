import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { BandComponent } from "./band/band.component";
import { TourComponent } from "./tour/tour.component";
import {HomeComponent} from "./home/home.component";
import {PlaylistComponent} from "./OwnPlayList/playlist.component";
import {ContactComponent} from "./contact/contact.component";
import {HeaderContent} from "./header/header-content.component/header-content.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderContent,
    BandComponent,
    TourComponent,
    HomeComponent,
    PlaylistComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    HeaderContent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
