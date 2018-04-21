import {Component, OnInit} from '@angular/core';
import {CmsComponent} from '../cms-component';

@Component({
  selector: 'app-image-cms',
  templateUrl: './image-cms.component.html',
  styleUrls: ['./image-cms.component.css']
})
export class ImageCmsComponent implements OnInit, CmsComponent {

  title: string;
  body: string;

  constructor() { }

  ngOnInit() {
  }

}
