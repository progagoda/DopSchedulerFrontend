import { render } from '@testing-library/react';

import LangSwitcher from './LangSwitcher';

describe('LangSwitcher', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LangSwitcher />);
    expect(baseElement).toBeTruthy();
  });
});
