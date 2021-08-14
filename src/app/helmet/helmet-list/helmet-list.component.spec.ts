import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelmetListComponent } from './helmet-list.component';

describe('HelmetListComponent', () => {
  let component: HelmetListComponent;
  let fixture: ComponentFixture<HelmetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelmetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelmetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
