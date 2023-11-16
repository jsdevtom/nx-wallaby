import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
jest.mock('flowbite');
import { initFlowbite } from 'flowbite';


describe('AppComponent', () => {

  beforeEach(async () => {
    (initFlowbite as unknown as jest.SpyInstance).mockReturnValue(undefined);

    await TestBed.configureTestingModule({
      imports: [AppComponent, NxWelcomeComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')!.textContent).toContain(
      'Welcome nx-wallaby'
    );
  });

  it(`should have as title 'nx-wallaby'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('nx-wallaby');
  });

  it('should have called initFlowbite', () => {
    expect(initFlowbite).toHaveBeenCalled();
  })
});
