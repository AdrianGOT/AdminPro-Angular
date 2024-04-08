// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Another modules
import { NgChartsModule } from 'ng2-charts';

// Components
import { DoughnutComponent } from './doughnut/doughnut.component';




@NgModule({
  declarations: [
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports:[
    DoughnutComponent
  ]
})
export class ComponentsModule { }
