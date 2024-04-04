import {i18nConfig} from '@shared/configs';
import { screen } from '@testing-library/react';

import {Shell} from './Shell';

describe('Shell component', () => {
  it('should render successfully', () => {
    i18nConfig.renderWithTranslation(<Shell/>)
    expect(screen.queryByTestId('shell')).toBeDefined();
  });

});
