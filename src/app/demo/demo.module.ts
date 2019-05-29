import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DemoComponent],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
