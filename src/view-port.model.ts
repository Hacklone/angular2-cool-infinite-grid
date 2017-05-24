import { EmbeddedViewRef } from '@angular/core';

export class ViewPort {
  itemsFromIndex: number;

  height: number;

  scrollTop: number;

  nativeElement: any;

  isLastViewPort: boolean;

  items: any[];

  get numberOfItems() {
    return this.items.length;
  }

  renderedItems: EmbeddedViewRef<Object>[];

  get bottomScrollTop() {
    return this.scrollTop + this.height;
  }

  constructor() {
    this.renderedItems = [];
  }
}