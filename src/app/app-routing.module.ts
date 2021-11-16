import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { window: "browse"}
  },
  {
    path: 'browse',
    component: HomePageComponent,
    data: { window: "browse"}
  },
  {
    path: 'tv-shows',
    component: TvShowsComponent,
    data: { window: "tv-shows"}
  },
  {
    path: 'movies',
    component: MoviesComponent,
    data: { window: 'movies'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
