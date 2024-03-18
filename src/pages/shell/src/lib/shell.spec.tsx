import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

import Shell from './shell';

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
