import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import {AlbumsComponent} from "./albums/albums.component";
import {SongsItemComponent} from "./albums/albums-list/songs-item/songs-item.component";
import {AlbumListComponent} from "./albums/albums-list/album-list.component";
import {MediaComponent} from "./albums/media/media.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumsComponent,
    SongsItemComponent,
    AlbumListComponent,
    MediaComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
