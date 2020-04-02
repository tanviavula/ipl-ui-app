import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { TournamentComponent } from './tournament/tournament.component';
import { PlayerComponent } from './player/player.component';
import { PlaygroundComponent } from './playground/playground.component';


const routes: Routes = [
  {path:'',component:PlaygroundComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'team/:label',component:TeamComponent},
  {path:'tournament',component:TournamentComponent},
  {path:'player',component:PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
