import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TmdbArtistComponent } from './tmdb-artist/tmdb-artist.component';
import { TmdbComponent } from './tmdb/tmdb.component';

const routes: Routes = [
  {path : 'tmdb',component:TmdbComponent},
  {path:'artist',component:TmdbArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
