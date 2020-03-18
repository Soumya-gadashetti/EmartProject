import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EkartComponent } from './ekart.component';

describe('EkartComponent', () => {
  let component: EkartComponent;
  let fixture: ComponentFixture<EkartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EkartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
