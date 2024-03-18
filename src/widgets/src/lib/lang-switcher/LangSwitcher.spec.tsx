import { screen } from '@testing-library/react';
import {renderWithTranslation} from '@utils/helpers'

import LangSwitcher from './LangSwitcher';
describe('LangSwitcher', () => {
  it('should render successfully', () => {
    renderWithTranslation(<LangSwitcher/>)
    expect(screen.queryByTestId('lang-switcher')).toBeDefined();
  });
});
