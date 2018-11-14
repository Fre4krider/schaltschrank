import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRackComponent } from './new-rack.component';

describe('NewRackComponent', () => {
  let component: NewRackComponent;
  let fixture: ComponentFixture<NewRackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
