import LangSwitcher from './LangSwitcher';
import {renderWithTranslation} from '@utils/helpers'
import { screen } from '@testing-library/react';
describe('LangSwitcher', () => {
  it('should render successfully', () => {
    renderWithTranslation(<LangSwitcher/>)
    expect(screen.getByTestId('lang-switcher')).toBeInTheDocument();
  });
});
