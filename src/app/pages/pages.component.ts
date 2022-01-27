import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pages',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div >
 <app-layout></app-layout>
</div>
  `,
})
export class PagesComponent {


  constructor() {
    //
  }

  ngOnInit() {
    //
  }

  ngOnDestroy() {
    //
  }

}
