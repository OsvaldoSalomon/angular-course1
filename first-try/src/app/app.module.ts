import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { BandComponent } from "./band/band.component";
import { TourComponent } from "./tour/tour.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsItemComponent } from './albums/albums-item/albums-item.component';

const appRoutes: Routes = [
  { path: 'band', component: BandComponent },
  { path: 'tour', component: TourComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BandComponent,
    TourComponent,
    HomeComponent,
    ContactComponent,
    AlbumsComponent,
    AlbumsItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  exports: [
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

//
// {
//   path: 'heroes',
//     component: HeroListComponent,
//   data: { title: 'Heroes List' }
// },
