import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './Views/MainScreen/main-screen/main-screen.component';
import { SchoolCupComponent } from './Views/school-cup/school-cup.component';

const routes: Routes = [
  {path: 'tournament/:id/:tourneyid', component: MainScreenComponent},

  {path: 'schoolcup/:id/:tourneyid', component: SchoolCupComponent},

  {path: '**', component: SchoolCupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// http://fortnitescorebot.com/tournament/568904661885779971/scq7
