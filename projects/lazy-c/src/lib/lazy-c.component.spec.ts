import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCComponent } from './lazy-c.component';

describe('LazyCComponent', () => {
  let component: LazyCComponent;
  let fixture: ComponentFixture<LazyCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
