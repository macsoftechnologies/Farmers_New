import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormersListComponent } from './formers-list.component';

describe('FormersListComponent', () => {
  let component: FormersListComponent;
  let fixture: ComponentFixture<FormersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
