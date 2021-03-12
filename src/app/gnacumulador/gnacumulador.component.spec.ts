import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnacumuladorComponent } from './gnacumulador.component';

describe('GnacumuladorComponent', () => {
  let component: GnacumuladorComponent;
  let fixture: ComponentFixture<GnacumuladorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnacumuladorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnacumuladorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
