import {PageTemplate} from './page-template';
import {AfterViewInit, Input, QueryList, ViewChildren} from '@angular/core';
import {ContentSlotComponent} from './content-slot/content-slot.component';

export class AbstractPageTemplate implements PageTemplate, AfterViewInit {

  title: string;

  @Input()
  contentSlots: any[];

  @ViewChildren(ContentSlotComponent)
  children: QueryList<ContentSlotComponent>;

  ngAfterViewInit(): void {
    this.children.forEach(contentSlot => {
      const contentSlotBody = this.getContentSlot(contentSlot.id);
      contentSlot.setComponents(contentSlotBody.components);
      contentSlot.ngOnInit();
    });
  }

  getContentSlot(id: string) {
    return this.contentSlots.find(value => {
      return value.code === id;
    });
  }
}
