import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
{path: '', pathMatch: 'full', component:DashboardComponent},
{path: 'add', pathMatch: 'full', component:AddComponent},
{path: 'quiz', pathMatch: 'full', component:QuizComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
