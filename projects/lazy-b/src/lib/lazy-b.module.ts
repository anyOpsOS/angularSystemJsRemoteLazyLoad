import { NgModule } from '@angular/core';
import { LazyBComponent } from './lazy-b.component';

import { LazyCModule } from 'lazy-c';

@NgModule({
  declarations: [LazyBComponent],
  imports: [
    LazyCModule
  ],
  exports: [LazyBComponent]
})
export class LazyBModule {

  constructor() {
    console.log('[LazyBModule] Constructor');
  }

}
