import {i18nConfig} from '@shared/configs';
import { screen } from '@testing-library/react';

import LangSwitcher from './LangSwitcher';
describe('LangSwitcher', () => {
  it('should render successfully', () => {
    i18nConfig.renderWithTranslation(<LangSwitcher/>)
    expect(screen.queryByTestId('lang-switcher')).toBeDefined();
  });
});
