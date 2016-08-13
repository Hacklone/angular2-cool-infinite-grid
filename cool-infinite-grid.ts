import { NgModule } from '@angular/core';

import { CoolInfiniteGridComponent } from './src/infinite-grid.component';
export { CoolInfiniteGridComponent } from './src/infinite-grid.component';

/* @deprecated */
export const COOL_INFINITE_GRID_DIRECTIVES: any[] = [
    CoolInfiniteGridComponent
];

@NgModule({
    exports: [CoolInfiniteGridComponent],
    declarations: [CoolInfiniteGridComponent]
})
export class CoolInfiniteGridModule {}
