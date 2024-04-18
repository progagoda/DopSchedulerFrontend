// eslint-disable-next-line @nx/enforce-module-boundaries
import { providersConfig } from '@app';
import { i18nConfig } from '@shared/configs';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import {Header} from './Header';
const {storeProvider} = providersConfig
const {StoreProvider} = storeProvider

describe('Header', () => {
  const mockSwitchTheme = jest.fn();

  const initialState = {
    user: {
      authData: {
        id:'1',
        username: 'admin',
        token: 'testToken',
      },
    },
    loginFormApi: undefined,
    calendarApi: undefined,
    day: {},
    }

  const renderHeader = ()=> (
    <StoreProvider initialState={initialState}>
      <Header switchTheme={mockSwitchTheme} />
    </StoreProvider>
  )
  it('should render successfully', () => {
    const { baseElement } = i18nConfig.renderWithTranslation(renderHeader());
    expect(baseElement).toBeTruthy();
  });

  it('renders logo text correctly', () => {
    i18nConfig.renderWithTranslation(renderHeader());
    expect(screen.findByText('DOP SHEDULER'))
  });

  it('render theme switcher',  () => {
    i18nConfig.renderWithTranslation(renderHeader());
    expect(screen.findByTestId('theme-switcher'))
  });

  it('switch theme',  async () => {
    i18nConfig.renderWithTranslation(renderHeader());
    await waitFor(()=> screen.getByTestId('theme-switcher'))
    const switcher = screen.getByTestId('theme-switcher');
    fireEvent.click(switcher);
    expect(mockSwitchTheme).toHaveBeenCalledTimes(1);
  });

});
