import { render } from '@testing-library/react';

import Shell from './shell';
import { BrowserRouter } from 'react-router-dom'

describe('Shell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Shell />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
