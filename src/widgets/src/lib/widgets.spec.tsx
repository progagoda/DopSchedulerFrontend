import {renderWithTranslation} from '@shared/configs';
import { screen } from '@testing-library/react';

import {Header, LangSwitcher, Shell} from './widgets';


describe('Render Widgets', () => {
  it('Navbar render successfully', () => {
    renderWithTranslation(<Shell/>)
    expect(screen.queryByTestId('shell')).toBeDefined();
  });
  
  it('LangSwithcer render successfully', () => {
    renderWithTranslation(<LangSwitcher/>)
    expect(screen.queryByTestId('lang-switcher')).toBeDefined();
  });

  it('Header render successfully', () => {
    renderWithTranslation(<Header switchTheme={()=> undefined}/>)
    expect(screen.queryByTestId('header')).toBeDefined();
  });
});
