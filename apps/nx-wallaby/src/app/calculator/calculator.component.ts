import { Component, computed, signal } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-wallaby-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {

  readonly count = signal(0);
  readonly product = computed(() => this.count() * 2);

  increment() {
    this.count.update(n => n + 1);
  }

  decrement() {
    this.count.update(n => n - 1);
  }
}
