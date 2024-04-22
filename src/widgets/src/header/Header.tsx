/* eslint-disable @typescript-eslint/ban-ts-comment */
import {getUserStateSelector, userActions} from '@entities';
import { antIcons, Button,Header as UIHeader, Switch, Typography } from '@shared/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { LangSwitcher } from '../lang-switcher';
import { StyledFlexButton, StyledLogo } from './styles';

const {MoonOutlined, SunOutlined} = antIcons

/* eslint-disable-next-line */
export interface HeaderProps {
  switchTheme: ()=> void;
}
export const Header = memo((props: HeaderProps) => {
  const {t} = useTranslation('translation', { keyPrefix: 'header' })
  const dispatch = useDispatch();
  const logoText = 'DOP SHEDULER'
  const user = useSelector(getUserStateSelector);

  const handleLogout = () =>{
    dispatch(userActions.logout())
  }

return (
  <UIHeader style={{ height: '7.9vh' }} data-testid='header'>
    <StyledLogo>{user && logoText}</StyledLogo>
    <StyledFlexButton>
      <LangSwitcher/>
      <Switch data-testid ={'theme-switcher'}defaultChecked checkedChildren={<MoonOutlined />} unCheckedChildren={<SunOutlined />}onClick={props.switchTheme}></Switch>
      <Typography>{user?.username}</Typography>
      {user && <Button onClick={handleLogout}>{t('logout')}</Button>}
    </StyledFlexButton>
  </UIHeader>
  )
});
