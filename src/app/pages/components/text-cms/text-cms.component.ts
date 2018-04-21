import { Component, OnInit } from '@angular/core';
import {CmsComponent} from '../cms-component';

@Component({
  selector: 'app-text-cms',
  templateUrl: './text-cms.component.html',
  styleUrls: ['./text-cms.component.css']
})
export class TextCmsComponent implements OnInit, CmsComponent {

  title: string;
  body: string;

  constructor() { }

  ngOnInit() {
  }

}
