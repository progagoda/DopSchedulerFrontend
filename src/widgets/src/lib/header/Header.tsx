import { Button, Layout, Modal } from '@utils/ui';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher } from '../widgets';

/* eslint-disable-next-line */
export interface HeaderProps {
}

const { Header: AntHeader } = Layout;

export const Header = (props: HeaderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {t} = useTranslation();

  const handleOpenModal = () => setIsOpenModal(true)

  const handleCloseModal = () => setIsOpenModal(false)

  const handleOkModal = () => setIsOpenModal(true)

return (
  <AntHeader style={{ display: 'flex', alignItems: 'center', justifyContent: "flex-end", gap: "1vh"}} data-testid= 'header'>
    <LangSwitcher/>
    <Button onClick={handleOpenModal}>{t('shell.login')}</Button>
    <Modal 
    open={isOpenModal} 
    onCancel={handleCloseModal} 
    onOk={handleOkModal}>
      {t('loginContent')}
    </Modal>
  </AntHeader>
  )
};