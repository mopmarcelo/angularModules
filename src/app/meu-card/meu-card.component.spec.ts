import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuCardComponent } from './meu-card.component';

describe('MeuCardComponent', () => {
  let component: MeuCardComponent;
  let fixture: ComponentFixture<MeuCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
