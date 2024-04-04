import {renderWithTranslation} from '@shared/configs';
import { screen } from '@testing-library/react';

import {Shell} from './Shell';

describe('Shell component', () => {
  it('should render successfully', () => {
    renderWithTranslation(<Shell/>)
    expect(screen.queryByTestId('shell')).toBeDefined();
  });

});
