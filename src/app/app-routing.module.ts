import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { PagesRoutingModule } from './pages/pages-routing.module';

// Components
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [
  { path: "", redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NotPageFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
