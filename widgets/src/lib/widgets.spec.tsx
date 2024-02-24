import { render } from '@testing-library/react';
import {LangSwitcher, Navbar} from './widgets';
import _ from 'lodash';
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(_.noop),
      },
    };
  },
}));
describe('Render Widgets', () => {
  it('Navbar render successfully', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
  
  it('LangSwithcer render successfully', () => {
    const { baseElement } = render(<LangSwitcher />);
    expect(baseElement).toBeTruthy();
  });
});
