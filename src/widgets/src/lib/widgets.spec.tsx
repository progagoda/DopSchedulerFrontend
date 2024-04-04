import {i18nConfig} from '@shared/configs';
import { screen } from '@testing-library/react';

import {Header, LangSwitcher, Shell} from './widgets';


describe('Render Widgets', () => {
  it('Navbar render successfully', () => {
    i18nConfig.renderWithTranslation(<Shell/>)
    expect(screen.queryByTestId('shell')).toBeDefined();
  });
  
  it('LangSwithcer render successfully', () => {
    i18nConfig.renderWithTranslation(<LangSwitcher/>)
    expect(screen.queryByTestId('lang-switcher')).toBeDefined();
  });

  it('Header render successfully', () => {
    i18nConfig.renderWithTranslation(<Header switchTheme={()=> undefined}/>)
    expect(screen.queryByTestId('header')).toBeDefined();
  });
});
