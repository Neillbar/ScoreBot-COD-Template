import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './Views/MainScreen/main-screen/main-screen.component';

const routes: Routes = [
  {path: 'tournament/:id/:tourneyid', component: MainScreenComponent},

  {path: '**', component: MainScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// http://fortnitescorebot.com/tournament/568904661885779971/scq7
