import { NgModule } from '@angular/core';

import { CoolInfiniteGridComponent } from './src/infinite-grid.component';
export { CoolInfiniteGridComponent } from './src/infinite-grid.component';

export { IIterator, IIterated } from './src/iterator.interface';

@NgModule({
  exports: [CoolInfiniteGridComponent],
  declarations: [CoolInfiniteGridComponent]
})
export class CoolInfiniteGridModule {
}
