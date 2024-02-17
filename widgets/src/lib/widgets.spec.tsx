import { render } from '@testing-library/react';

import {LangSwitcher, Navbar} from './widgets';

describe('Render Widgets', () => {
  it('Navbar render successfully', () => {
    const { baseElement } = render(<Navbar />);
    expect(baseElement).toBeTruthy();
  });
  
  it('LangSwithcer render successfully', () => {
    const { baseElement } = render(<LangSwitcher />);
    expect(baseElement).toBeTruthy();
  });
});
