import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import {AlbumsComponent} from "./albums/albums.component";
import {SongsItemComponent} from "./albums/albums-list/songs-item/songs-item.component";
import {AlbumListComponent} from "./albums/albums-list/album-list.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumsComponent,
    SongsItemComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
