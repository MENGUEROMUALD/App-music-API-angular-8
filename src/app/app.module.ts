import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { MusicComponent } from './music/music.component';
import { MusicListComponent } from './music-list/music-list.component';
import { LibrairieComponent } from './librairie/librairie.component';
import { RechercheComponent } from './recherche/recherche.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfigModule } from './app-config/app-config.module';
import { ItuneService } from './model/itune-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicComponent,
    MusicListComponent,
    LibrairieComponent,
    RechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppConfigModule,
    HttpClientModule
  ],
  providers: [
    ItuneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
