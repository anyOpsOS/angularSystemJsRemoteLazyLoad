import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyAComponent } from './lazy-a.component';

describe('LazyAComponent', () => {
  let component: LazyAComponent;
  let fixture: ComponentFixture<LazyAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
