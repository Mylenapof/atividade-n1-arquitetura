import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCelularComponent } from './adicionar-celular.component';

describe('AdicionarCelularComponent', () => {
  let component: AdicionarCelularComponent;
  let fixture: ComponentFixture<AdicionarCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarCelularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
