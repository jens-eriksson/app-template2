import { LayoutState } from './../layout';
import { LayoutProvider } from './../layout.provider';
import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  @ViewChild('modalContent', { read: ViewContainerRef }) private modalContent: ViewContainerRef;
  layoutState: LayoutState;
  maxWidth;
  maxHeight;
  content;
  close;

  constructor(private resolver: ComponentFactoryResolver, private layout: LayoutProvider) { }

  ngOnInit(): void {
    this.layout.layoutState.subscribe(layoutState => {
      this.layoutState = layoutState;
    });
  }

  ngAfterViewInit() {
    if (this.content) {
      const factory = this.resolver.resolveComponentFactory(this.content);
      this.modalContent.createComponent(factory);
    }
  }
}
