import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SoccerListComponent } from './pages/soccer-list/soccer-list.component';
import { StadisticsComponent } from './pages/stadistics/stadistics.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path:'stadistics/:id', component:StadisticsComponent},
  {path:'soccer-list',component:SoccerListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
