import { renderWithTranslation } from '@shared/configs';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import {Header} from './Header';
describe('Header', () => {
  const mockSwitchTheme = jest.fn();
  it('should render successfully', () => {
    const { baseElement } = renderWithTranslation(<Header switchTheme={mockSwitchTheme} />);
    expect(baseElement).toBeTruthy();
  });

  it('renders logo text correctly', () => {
    renderWithTranslation(<Header switchTheme={mockSwitchTheme}/>);
    expect(screen.findByText('DOP SHEDULER'))
  });

  it('render theme switcher',  () => {
    renderWithTranslation(<Header switchTheme={mockSwitchTheme} />);
    expect(screen.findByTestId('theme-switcher'))
  });

  it('switch theme',  async () => {
    renderWithTranslation(<Header switchTheme={mockSwitchTheme} />);
    await waitFor(()=> screen.getByTestId('theme-switcher'))
    const switcher = screen.getByTestId('theme-switcher');
    fireEvent.click(switcher);
    expect(mockSwitchTheme).toHaveBeenCalledTimes(1);
  });

});
