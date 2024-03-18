import { screen } from '@testing-library/react';
import {renderWithTranslation} from '@utils/helpers'

import {Navbar} from './Navbar';

describe('Navbar component', () => {
  it('should render successfully', () => {
    renderWithTranslation(<Navbar/>)
    expect(screen.queryByTestId('navbar')).toBeDefined();
  });

});
