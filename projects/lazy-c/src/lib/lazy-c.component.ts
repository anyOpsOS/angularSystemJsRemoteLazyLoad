import { Component, OnInit } from '@angular/core';

import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'lib-lazyC',
  template: `
    <p>
      lazy-c works!
    </p>
  `,
  styles: [
  ]
})
export class LazyCComponent implements OnInit {

  constructor(private readonly logger: NGXLogger) {
    console.log('[LazyCComponent] Constructor');
    this.logger.debug('[LazyCComponent] Constructor');
  }

  ngOnInit(): void {
  }

}
