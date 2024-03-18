import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

import Main from './main';

describe('Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });
});
