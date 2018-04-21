import {ComponentFactoryResolver, Directive, Input, OnChanges, SimpleChanges, ViewContainerRef} from '@angular/core';
import {CmsComponentsConfig} from '../config/cms-components-config';

@Directive({
  selector: '[appCmsComponentWrapper]'
})
export class CmsComponentWrapperDirective implements OnChanges {

  @Input() component: any;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.viewContainerRef.clear();

      const componentType = CmsComponentsConfig.find(this.component.type);

      const cmsComponentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

      const cmsComponent = this.viewContainerRef.createComponent(cmsComponentFactory);

      cmsComponent.instance['body'] = this.component.body;
    }
  }
}
