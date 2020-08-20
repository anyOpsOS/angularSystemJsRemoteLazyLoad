import { NgModule } from '@angular/core';
import { LazyAComponent } from './lazy-a.component';

import { LazyBModule } from 'lazy-b';

@NgModule({
  declarations: [LazyAComponent],
  imports: [
    LazyBModule
  ],
  exports: [LazyAComponent],
  entryComponents: [LazyAComponent]
})
export class LazyAModule {

  constructor() {
    console.log('[LazyAModule] Constructor');
  }

}
