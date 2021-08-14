import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmetItemComponent } from './helmet-item.component';

describe('HelmetItemComponent', () => {
  let component: HelmetItemComponent;
  let fixture: ComponentFixture<HelmetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelmetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelmetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
