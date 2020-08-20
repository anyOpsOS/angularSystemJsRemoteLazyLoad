import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lazyA',
  template: `
    <p>
      lazy-a works!
      <lib-lazyB></lib-lazyB>
    </p>
  `,
  styles: [
  ]
})
export class LazyAComponent implements OnInit {

  constructor() {
    console.log('[LazyAComponent] Constructor');
  }

  ngOnInit(): void {
  }

}
