import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleModuleRoutingModule } from './sample-module-routing.module';
import { SamplePage1Component } from './sample-page1/sample-page1.component';
import { SamplePage2Component } from './sample-page2/sample-page2.component';


@NgModule({
  declarations: [
    SamplePage1Component,
    SamplePage2Component
  ],
  imports: [
    CommonModule,
    SampleModuleRoutingModule
  ]
})
export class SampleModuleModule { }
