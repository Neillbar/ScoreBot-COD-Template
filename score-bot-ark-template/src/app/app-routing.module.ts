import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './Views/MainScreen/main-screen/main-screen.component';

const routes: Routes = [
  {path: 'tournament/serverid=:id/tournamentid:tourneyid', component: MainScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
