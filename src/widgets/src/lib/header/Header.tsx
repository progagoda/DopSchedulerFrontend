import { antIcons,Button, Header as UIHeader,Modal, Switch } from '@utils/ui';
import {useState} from "react";
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

import { LangSwitcher } from '../widgets';
import { StyledFlexButton, StyledLogo } from './styles';

/* eslint-disable-next-line */
export interface HeaderProps {
  switchTheme: ()=> void;
}
export const Header = (props: HeaderProps) => {
  const {t} = useTranslation();
  const {MoonOutlined, SunOutlined} = antIcons
  const [isOpenModal, setIsOpenModal] = useState(false);
  const logoText = 'DOP SHEDULER'
  const handleOpenModal = () => setIsOpenModal(true)

  const handleCloseModal = () => setIsOpenModal(false)

  const handleOkModal = () => setIsOpenModal(true)

return (
  <UIHeader style={{ height: '7.9vh' }} data-testid='header'>
    <StyledLogo>{logoText}</StyledLogo>
    <StyledFlexButton>
      <LangSwitcher/>
      <Switch data-testid ={'theme-switcher'}defaultChecked checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />}onClick={props.switchTheme}></Switch>
      <Button onClick={handleOpenModal}>{t('shell.login')}</Button>
      {createPortal(
        <Modal 
          open={isOpenModal} 
          onCancel={handleCloseModal} 
          onOk={handleOkModal}>
          {t('loginContent')}
        </Modal>, document.body)}
    </StyledFlexButton>
  </UIHeader>
  )
};
