import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmetHeaderComponent } from './helmet-header.component';

describe('HelmetHeaderComponent', () => {
  let component: HelmetHeaderComponent;
  let fixture: ComponentFixture<HelmetHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelmetHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelmetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
