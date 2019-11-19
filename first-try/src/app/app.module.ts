import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { BandComponent } from "./band/band.component";
import { TourComponent } from "./tour/tour.component";
import {HomeComponent} from "./home/home.component";
import {PlaylistComponent} from "./OwnPlayList/playlist.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BandComponent,
    TourComponent,
    HomeComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
