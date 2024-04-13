import { routerConfig } from '@shared/configs';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { antIcons,Menu, Sider } from 'src/shared/ui/src';

const {AppRoutes} = routerConfig
const {CalendarOutlined, PlusOutlined} = antIcons;

type AppRoutes = routerConfig.AppRoutes
/* eslint-disable-next-line */
interface ShellProps {}

export const Shell=(props: ShellProps)=> {
  const {t} = useTranslation();
  
  const icons:Record<AppRoutes, ReactNode>= {
    [AppRoutes.SHEDULE]: <CalendarOutlined />,
    [AppRoutes.CREATE]: <PlusOutlined />,
  }

  const items = Object.values(AppRoutes).map((path) => ({
    key: path,
    label: <Link to={`/app/${path}`}>{t(`routes.${path}`)}</Link>,
    icon: icons[path]
  }));

  return (
    <Sider data-testid= 'shell'>
      <div className="demo-logo-vertical" />
      <Menu defaultSelectedKeys={['schedule']} mode="inline" items={items} />
    </Sider>
  );
}


