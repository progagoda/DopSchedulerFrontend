import {Navbar} from './Navbar';
import {renderWithTranslation} from '@utils/helpers'
import { screen } from '@testing-library/react';

describe('Navbar component', () => {
  it('should render successfully', () => {
    renderWithTranslation(<Navbar/>)
    expect(screen.queryByTestId('navbar')).toBeDefined();
  });

});
