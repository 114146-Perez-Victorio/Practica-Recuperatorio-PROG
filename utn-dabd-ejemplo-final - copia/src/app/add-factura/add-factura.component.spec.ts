import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacturaComponent } from './add-factura.component';

describe('AddFacturaComponent', () => {
  let component: AddFacturaComponent;
  let fixture: ComponentFixture<AddFacturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFacturaComponent]
    });
    fixture = TestBed.createComponent(AddFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
