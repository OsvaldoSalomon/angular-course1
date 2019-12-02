import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { BandComponent } from "./band/band.component";
import { TourComponent } from "./tour/tour.component";
import {HomeComponent} from "./home/home.component";
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsItemComponent } from './albums/albums-list/albums-item/albums-item.component';
import { MerchComponent } from './merch/merch.component';
import { AlbumsDetailComponent } from './albums/albums-detail/albums-detail.component';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';

const appRoutes: Routes = [
  { path: 'band', component: BandComponent },
  { path: 'tour', component: TourComponent },
  { path: 'home', component: HomeComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'merch', component: MerchComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BandComponent,
    TourComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumsItemComponent,
    MerchComponent,
    AlbumsDetailComponent,
    AlbumsListComponent
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
