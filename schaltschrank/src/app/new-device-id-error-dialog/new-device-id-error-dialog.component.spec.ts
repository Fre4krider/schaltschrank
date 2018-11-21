import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeviceIdErrorDialogComponent } from './new-device-id-error-dialog.component';

describe('NewDeviceIdErrorDialogComponent', () => {
  let component: NewDeviceIdErrorDialogComponent;
  let fixture: ComponentFixture<NewDeviceIdErrorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDeviceIdErrorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDeviceIdErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
