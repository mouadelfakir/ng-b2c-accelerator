import {Component, OnInit} from '@angular/core';
import {AbstractPageTemplate} from '../abstract-page-template';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent extends AbstractPageTemplate implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    console.log('contentSlots', this.contentSlots);
  }

}
