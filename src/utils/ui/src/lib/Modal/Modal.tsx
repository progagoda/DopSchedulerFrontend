import {Modal as AntModal} from 'antd'
import { ModalProps } from 'antd/lib/modal'
/* eslint-disable-next-line */
export interface Modal extends ModalProps {}


export const Modal = (props: Modal) => {

  return (
    <AntModal
    {...props}>
      {props.children}
    </AntModal>
  );
}
