// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

// Another modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphOneComponent } from './graph-one/graph-one.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule } from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphOneComponent,
    PagesComponent,
    AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraphOneComponent,
    PagesComponent,
    AccountSettingsComponent,
  ]
})
export class PagesModule { }
