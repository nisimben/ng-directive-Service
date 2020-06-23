import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbiDetailsComponent } from './rabbi-details.component';

describe('RabbiDetailsComponent', () => {
  let component: RabbiDetailsComponent;
  let fixture: ComponentFixture<RabbiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
