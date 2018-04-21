import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-slot',
  templateUrl: './content-slot.component.html'
})
export class ContentSlotComponent implements OnInit {

  @Input() id: string;
  @Input() components: string;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  public setComponents(components: string) {
    this.components = components;
    this.cdr.detectChanges();
  }
}
