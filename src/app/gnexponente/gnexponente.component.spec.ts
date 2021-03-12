import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnexponenteComponent } from './gnexponente.component';

describe('GnexponenteComponent', () => {
  let component: GnexponenteComponent;
  let fixture: ComponentFixture<GnexponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnexponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnexponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
