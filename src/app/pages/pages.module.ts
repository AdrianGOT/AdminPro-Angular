import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { NotPageFoundComponent } from '../not-page-found/not-page-found.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphOneComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraphOneComponent,
    PagesComponent,
  ]
})
export class PagesModule { }
