/* eslint-disable @typescript-eslint/no-empty-interface */
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button'


export interface Button extends ButtonProps{
}

export const Button = (props: Button) => {
  return (
    <AntButton color=''{...props}>{props.children}saasa</AntButton>
  );
}

export default Button;
