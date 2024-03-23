import { screen } from '@testing-library/react';
import {renderWithTranslation} from '@utils/helpers'

import {Shell} from './Shell';

describe('Shell component', () => {
  it('should render successfully', () => {
    renderWithTranslation(<Shell/>)
    expect(screen.queryByTestId('shell')).toBeDefined();
  });

});
