import {Component, OnInit} from '@angular/core';
import {AbstractPageTemplate} from '../abstract-page-template';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent extends AbstractPageTemplate implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    console.log('contentSlots', this.contentSlots);
  }

}
