import { render } from '@testing-library/react';
import {LangSwitcher, Navbar} from './widgets';
import {renderWithTranslation} from '@utils/helpers'
import { screen } from '@testing-library/react';

describe('Render Widgets', () => {
  it('Navbar render successfully', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
  
  it('LangSwithcer render successfully', () => {
    renderWithTranslation(<LangSwitcher/>)
    expect(screen.getByTestId('lang-switcher')).toBeInTheDocument();
  });
});
