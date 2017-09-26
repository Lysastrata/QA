import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { OneComponent } from './one/one.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
{path: '', pathMatch: 'full', component:DashboardComponent},
{path: 'add/:id', pathMatch: 'full', component:AddComponent},
{path: 'one/:id', pathMatch: 'full', component:OneComponent},
{path: 'create', pathMatch: 'full', component:CreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
