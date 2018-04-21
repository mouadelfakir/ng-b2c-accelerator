import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {routing} from './app.routes';

import {AppComponent} from './app.component';
import {PageTemplateWrapperComponent} from './pages/components/page-template-wrapper/page-template-wrapper.component';
import {PageTemplateResolve} from './pages/resolvers/page-template.resolve';
import {PageTemplatesConfig} from './pages/config/page-templates-config';
import {ContentSlotComponent} from './pages/components/content-slot/content-slot.component';
import {TextCmsComponent} from './pages/components/text-cms/text-cms.component';
import {ImageCmsComponent} from './pages/components/image-cms/image-cms.component';
import {CmsComponentWrapperDirective} from './pages/directives/cms-component-wrapper.directive';
import {CmsComponentsConfig} from './pages/config/cms-components-config';


@NgModule({
  declarations: [
    AppComponent,
    PageTemplateWrapperComponent,
    ContentSlotComponent,
    TextCmsComponent,
    ImageCmsComponent,
    CmsComponentWrapperDirective,
    ...PageTemplatesConfig.toArray(),
    ...CmsComponentsConfig.toArray()
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    routing,
  ],
  entryComponents: [...PageTemplatesConfig.toArray(), ...CmsComponentsConfig.toArray()],
  providers: [PageTemplateResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
