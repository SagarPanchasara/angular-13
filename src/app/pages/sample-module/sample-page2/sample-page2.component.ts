import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample-page2',
  templateUrl: './sample-page2.component.html',
  styleUrls: ['./sample-page2.component.scss']
})
export class SamplePage2Component implements OnInit {

  id: string | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = params.id;
    });
  }

}
