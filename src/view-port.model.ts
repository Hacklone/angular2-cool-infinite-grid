import { EmbeddedViewRef } from '@angular/core';

export class ViewPort {
    itemsFromIndex: number;
    numberOfItems: number;

    height: number;

    scrollTop: number;

    nativeElement: any;

    isLastViewPort: boolean;

    items: any[];

    renderedItems: EmbeddedViewRef<Object>[];

    get bottomScrollTop() {
        return this.scrollTop + this.height;
    }

    constructor() {
        this.renderedItems = [];
    }
}