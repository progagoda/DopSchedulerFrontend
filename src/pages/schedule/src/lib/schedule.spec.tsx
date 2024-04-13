import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

import Schedule from './schedule';

describe('Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Schedule />
      </BrowserRouter>
      );
    expect(baseElement).toBeTruthy();
  });
});
