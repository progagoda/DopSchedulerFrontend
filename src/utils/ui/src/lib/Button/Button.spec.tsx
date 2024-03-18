/* eslint-disable i18next/no-literal-string */
import { fireEvent,render,screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);
    expect(baseElement).toBeTruthy();
  });

  it('render text', () => {
    render(<Button>Some Text</Button>)
    expect(screen.getByText('Some Text')).toBeTruthy();
  });
  it('calls onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = getByText('Click me');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
