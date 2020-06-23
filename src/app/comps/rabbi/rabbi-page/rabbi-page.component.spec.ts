import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbiPageComponent } from './rabbi-page.component';

describe('RabbiPageComponent', () => {
  let component: RabbiPageComponent;
  let fixture: ComponentFixture<RabbiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
