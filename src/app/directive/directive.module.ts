import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MondarojaDirective } from './mondaroja.directive';



@NgModule({
  declarations: [
    MondarojaDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MondarojaDirective
  ]
})
export class DirectiveModule { }
