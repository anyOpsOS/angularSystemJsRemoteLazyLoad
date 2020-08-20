import { Component, OnInit } from '@angular/core';

import { LazyCService } from 'lazy-c';

@Component({
  selector: 'lib-lazyB',
  template: `
    <p>
      lazy-b works!
      <lib-lazyC></lib-lazyC>
    </p>
  `,
  styles: [
  ]
})
export class LazyBComponent implements OnInit {

  constructor(private readonly logger: LazyCService) {
    console.log('[LazyBComponent] Constructor');
    this.logger.error('[LazyBComponent]', 'Constructor');
  }

  ngOnInit(): void {
  }

}
