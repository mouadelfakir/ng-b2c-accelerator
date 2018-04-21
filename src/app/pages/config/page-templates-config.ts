import {Type} from '@angular/core';
import {PageTemplate} from '../components/page-template';
import {HomePageComponent} from '../components/home-page/home-page.component';
import {TestPageComponent} from '../components/test-page/test-page.component';

export class PageTemplatesConfig {

  public static toArray(): Type<PageTemplate>[] {
    return Array.from(pageTemplates.values());
  }

  public static find(templateCode: string): Type<PageTemplate> {
    return pageTemplates.get(templateCode);
  }
}

const pageTemplates: Map<String, Type<PageTemplate>> = new Map<String, Type<PageTemplate>>();
pageTemplates.set('homepage', HomePageComponent);
pageTemplates.set('testpage', TestPageComponent);
