import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
 {
  path: 'dashboard',
  component: PagesComponent,
  children: [
    {path: '', component: DashboardComponent},
    {path: 'account-settings', component: AccountSettingsComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'graph-one', component: GraphOneComponent},
    {path: 'promises', component: PromisesComponent},
    {path: 'rxjs', component: RxjsComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {}
