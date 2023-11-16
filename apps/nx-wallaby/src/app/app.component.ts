import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { initFlowbite } from 'flowbite';
import { NavComponent, SideNavItemComponent } from "@nx-wallaby/shared-ui";
import { CalculatorComponent } from "./calculator/calculator.component";

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    NavComponent,
    SideNavItemComponent,
    CalculatorComponent,
  ],
  selector: 'nx-wallaby-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nx-wallaby';

  constructor() {
    initFlowbite();
  }
}
