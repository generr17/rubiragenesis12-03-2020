import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnbaseComponent } from './gnbase.component';

describe('GnbaseComponent', () => {
  let component: GnbaseComponent;
  let fixture: ComponentFixture<GnbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnbaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
