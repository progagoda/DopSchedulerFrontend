import { AppRoutes } from '@utils/types';
import { antIcons,Menu, Sider } from '@utils/ui';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface ShellProps {}


export const Shell=(props: ShellProps)=> {
  const {t} = useTranslation();
  const {DesktopOutlined,TeamOutlined,UserOutlined} = antIcons;
  const icons: Record<AppRoutes, ReactNode> = {
    [AppRoutes.MAIN]: <DesktopOutlined/>,
    [AppRoutes.DEFAULT]: <TeamOutlined/>,
    [AppRoutes.SHELL]: <UserOutlined/>
  }
  const items = Object.values(AppRoutes).map((path) => ({
    key: path,
    label: <Link to={`/${path}`}>{t(`routes.${path}`)}</Link>,
    icon: icons[path]
  }));

  return (
    <Sider data-testid= 'shell'>
      <div className="demo-logo-vertical" />
      <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  );
}


