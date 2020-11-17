import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibrairieComponent } from './librairie/librairie.component';
import { MusicComponent } from './music/music.component';
import { RechercheComponent } from './recherche/recherche.component';

const routes: Routes = [
  {path:'librairie', component: LibrairieComponent},
  {path: 'music/:id', component: MusicComponent},
  {path: 'recherche', component: RechercheComponent},
  {path: '', redirectTo: 'recherche', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
