import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageTemplatesConfig} from '../../config/page-templates-config';

@Component({
  selector: 'app-abstract-page',
  templateUrl: './page-template-wrapper.component.html',
})
export class PageTemplateWrapperComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    const content = this.activatedRoute.snapshot.data['content'];

    const PageTemplateType = PageTemplatesConfig.find(content.template.code);

    const pageComponentFactory = this.componentFactoryResolver.resolveComponentFactory(PageTemplateType);

    const pageComponent = this.viewContainerRef.createComponent(pageComponentFactory);

    pageComponent.instance['contentSlots'] = content.contentSlots;
  }
}
