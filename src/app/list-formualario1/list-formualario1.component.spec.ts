import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormualario1Component } from './list-formualario1.component';

describe('ListFormualario1Component', () => {
  let component: ListFormualario1Component;
  let fixture: ComponentFixture<ListFormualario1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFormualario1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFormualario1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
