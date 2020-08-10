import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { geComponent } from './upload-image.component';

describe('geComponent', () => {
  let component: geComponent;
  let fixture: ComponentFixture<geComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ geComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(geComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
