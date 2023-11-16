import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { screen } from '@testing-library/dom';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show 0 as initial value', () => {
    expect(screen.getByTestId('count').textContent!.trim()).toBe('0');
  });

  it('should increment the value', () => {
    screen.getByTestId('increment-button').click();
    screen.getByTestId('increment-button').click();
    fixture.detectChanges();
    expect(screen.getByTestId('count').textContent!.trim()).toBe('2');
    expect(screen.getByTestId('product').textContent!.trim()).toBe('4');
  });

  it('should decrement the value', () => {
    screen.getByTestId('decrement-button').click();
    screen.getByTestId('decrement-button').click();
    fixture.detectChanges();
    expect(screen.getByTestId('count').textContent!.trim()).toBe('-2');
    expect(screen.getByTestId('product').textContent!.trim()).toBe('-4');
  });
});
