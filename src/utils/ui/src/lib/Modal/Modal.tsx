import {Modal as AntModal} from 'antd'
import styled from 'styled-components';

import { backgroundColor, textColor } from '../Colors';


export const Modal = styled(AntModal)`
  &.ant-modal-root {
    background-color: ${backgroundColor};
    &.ant-modal-body{
      color: ${textColor};
    }
  }
`
