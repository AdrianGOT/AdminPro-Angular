import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { authGuard } from '../guard/auth.guard';


const routes: Routes = [
 {
  path: 'dashboard',
  component: PagesComponent,
  canActivate: [authGuard],
  children: [
    {path: '', component: DashboardComponent, data: {title: 'Dashboard'}},
    {path: 'account-settings', component: AccountSettingsComponent, data: {title: 'Account Settings'}},
    {path: 'progress', component: ProgressComponent, data: {title: 'Progress bar'}},
    {path: 'graph-one', component: GraphOneComponent, data: {title: 'Graph One'}},
    {path: 'promises', component: PromisesComponent, data: {title: 'Promises'}},
    {path: 'rxjs', component: RxjsComponent, data: {title: 'RXJS'}},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {}
