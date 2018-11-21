import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRackErrorDialogComponent } from './new-rack-error-dialog.component';

describe('NewRackErrorDialogComponent', () => {
  let component: NewRackErrorDialogComponent;
  let fixture: ComponentFixture<NewRackErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRackErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRackErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
