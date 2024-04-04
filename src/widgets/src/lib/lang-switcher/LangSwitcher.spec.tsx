import {renderWithTranslation} from '@shared/configs';
import { screen } from '@testing-library/react';

import LangSwitcher from './LangSwitcher';
describe('LangSwitcher', () => {
  it('should render successfully', () => {
    renderWithTranslation(<LangSwitcher/>)
    expect(screen.queryByTestId('lang-switcher')).toBeDefined();
  });
});
