/* eslint-disable i18next/no-literal-string */
import { render } from '@testing-library/react';

import {Button} from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });
});
