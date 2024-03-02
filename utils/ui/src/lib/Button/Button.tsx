/* eslint-disable @typescript-eslint/no-empty-interface */
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button'


export interface Button extends ButtonProps{
}

export const Button = (props: Button) => {
  return (
    <AntButton {...props}>{props.children}</AntButton>
  );
}

export default Button;
