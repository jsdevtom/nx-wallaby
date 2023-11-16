import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { render, screen } from "@testing-library/angular";

interface SetupModel {
  fixture: ComponentFixture<NavComponent>;
  component: NavComponent;
}

describe('NavComponent', () => {
  async function setup(): Promise<SetupModel> {
    const { fixture } = await render(NavComponent);

    return {
      fixture,
      component: fixture.componentInstance,
    };
  }

  it('should create', async () => {
    const {component} = await setup();
    expect(component).toBeTruthy();
  });

  it('should show top nav', async () => {
    await setup();
    const topNav = screen.getByTestId('top-nav');
    expect(topNav).toBeInTheDocument();
  });

  it('should show side nav', async () => {
    await setup();
    const topNav = screen.getByTestId('side-nav');
    expect(topNav).toBeInTheDocument();
  });

  it('should show transcluded main content', async () => {
    await render(
      `<nx-wallaby-nav>
      <div data-testid="transcluded-content">Transcluded Content</div>
      </nx-wallaby-nav>`,
      {
        imports: [NavComponent],
      }
    );
    expect(screen.getByTestId('transcluded-content')).toBeInTheDocument();
  });

  // TODO-Tom:
  it('should show transcluded menu items', async () => {

    await render(
      `<nx-wallaby-nav>

      </nx-wallaby-nav>`,
      {
        imports: [NavComponent],
      }
    );
  });

});
