import {Type} from '@angular/core';
import {CmsComponent} from '../components/cms-component';
import {TextCmsComponent} from '../components/text-cms/text-cms.component';
import {ImageCmsComponent} from '../components/image-cms/image-cms.component';

export class CmsComponentsConfig {

  public static toArray(): Type<CmsComponent>[] {
    return Array.from(cmsComponents.values());
  }

  public static find(componentCode: string): Type<CmsComponent> {
    return cmsComponents.get(componentCode);
  }
}

const cmsComponents: Map<String, Type<CmsComponent>> = new Map<String, Type<CmsComponent>>();
cmsComponents.set('text', TextCmsComponent);
cmsComponents.set('image', ImageCmsComponent);
