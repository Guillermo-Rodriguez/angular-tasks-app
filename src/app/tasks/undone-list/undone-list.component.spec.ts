import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoneListComponent } from './undone-list.component';

describe('UndoneListComponent', () => {
  let component: UndoneListComponent;
  let fixture: ComponentFixture<UndoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndoneListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
