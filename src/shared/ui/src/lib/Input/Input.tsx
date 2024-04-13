/* eslint-disable @typescript-eslint/no-empty-interface */
import { Input as AntInput } from 'antd';
import styled from 'styled-components';

import { backgroundColor, borderColor, textColor } from '../Colors';


export const Input = styled(AntInput)`
    color: ${textColor};
    background: ${backgroundColor};
    border: 1px solid ${backgroundColor};
    border-bottom: 1px solid red;
    &:hover,:focus {
        background: ${backgroundColor};
        border: 1px solid ${borderColor};
        border-bottom: 1px solid red;
    };
    &.ant-input-outlined.ant-input-status-error:not(.ant-input-disabled), :focus-within{
        background: ${backgroundColor};
    }
    &:placeholder-shown{
        color: #FFFFFF;
    }
`