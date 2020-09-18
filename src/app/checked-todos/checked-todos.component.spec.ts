import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedTodosComponent } from './checked-todos.component';

describe('CheckedTodosComponent', () => {
  let component: CheckedTodosComponent;
  let fixture: ComponentFixture<CheckedTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
