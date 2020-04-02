import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { TournamentComponent } from './tournament/tournament.component';
import { PlayerComponent } from './player/player.component';
import { PlaygroundComponent } from './playground/playground.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {RouterModule} from '@angular/router'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeamComponent,
    TournamentComponent,
    PlayerComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    RouterModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
