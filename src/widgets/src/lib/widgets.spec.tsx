import {LangSwitcher, Navbar} from './widgets';
import {renderWithTranslation} from '@utils/helpers'
import { screen } from '@testing-library/react';

describe('Render Widgets', () => {
  it('Navbar render successfully', () => {
    renderWithTranslation(<Navbar/>)
    expect(screen.queryByTestId('navbar')).toBeDefined();
  });
  
  it('LangSwithcer render successfully', () => {
    renderWithTranslation(<LangSwitcher/>)
    expect(screen.queryByTestId('lang-switcher')).toBeDefined();
  });
});
