import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnresultadoComponent } from './gnresultado.component';

describe('GnresultadoComponent', () => {
  let component: GnresultadoComponent;
  let fixture: ComponentFixture<GnresultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnresultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnresultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
