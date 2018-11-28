import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeviceErrorDialogComponent } from './new-device-error-dialog.component';

describe('NewDeviceErrorDialogComponent', () => {
  let component: NewDeviceErrorDialogComponent;
  let fixture: ComponentFixture<NewDeviceErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeviceErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeviceErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
