import { render } from '@testing-library/react';
import {Navbar} from './Navbar';

describe('Navbar component', () => {
  it('renders correctly', () => {
    const { container } = render(<Navbar />);
    expect(container).toBeInTheDocument();
  });

  it('renders a menu with items', () => {
    const { getAllByRole } = render(<Navbar />);
    const menuItems = getAllByRole('menuitem');
    expect(menuItems.length).toBe(15); // Assuming you have 15 items in your menu
  });

  it('renders a language switcher', () => {
    const { getByTestId } = render(<Navbar />);
    const langSwitcher = getByTestId('lang-switcher');
    expect(langSwitcher).toBeInTheDocument();
  });
});
