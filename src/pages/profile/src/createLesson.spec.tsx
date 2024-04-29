import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CreateLesson from './createLesson';

describe('CreateLesson', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <CreateLesson />
      </BrowserRouter>);
    expect(baseElement).toBeTruthy();
  });
});
