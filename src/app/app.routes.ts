import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageTemplateResolve} from './pages/resolvers/page-template.resolve';
import {PageTemplateWrapperComponent} from './pages/components/page-template-wrapper/page-template-wrapper.component';

const appRoutes: Routes = [
  {
    path: 'page/:pageCode',
    component: PageTemplateWrapperComponent,
    resolve: {
      content: PageTemplateResolve
    }
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
