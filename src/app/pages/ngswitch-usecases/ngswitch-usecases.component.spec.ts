import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchUsecasesComponent } from './ngswitch-usecases.component';

describe('NgswitchUsecasesComponent', () => {
  let component: NgswitchUsecasesComponent;
  let fixture: ComponentFixture<NgswitchUsecasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgswitchUsecasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswitchUsecasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
