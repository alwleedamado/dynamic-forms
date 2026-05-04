import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularAdapter } from './angular-adapter';

describe('AngularAdapter', () => {
  let component: AngularAdapter;
  let fixture: ComponentFixture<AngularAdapter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAdapter],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularAdapter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
