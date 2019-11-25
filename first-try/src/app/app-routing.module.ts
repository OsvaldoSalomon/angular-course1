import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full' },
  { path: 'header', loadChildren: './header/header.module#HeaderModule' },
  {
    path: 'band',
    loadChildren: './band/band.module#BandModule'
  },
  {
    path: 'tour',
    loadChildren: './tour/tour.module#TourModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
