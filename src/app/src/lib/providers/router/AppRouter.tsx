import { Main } from '@pages/main';
import { Shell } from '@pages/shell';
import { AppRoutes, TRouterConfig } from '@utils/types';
import { App } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid'

import { RouterPath } from './routerConfig';
export const AppRouter = () => {
  
  const routerConfig: TRouterConfig = {
    [AppRoutes.MAIN]: {
      path: RouterPath.main,
      element: <Main />,
    },
    [AppRoutes.SHELL]: {
      path: RouterPath.shell,
      element: <Shell />,
    },
    [AppRoutes.DEFAULT]: {
      path: RouterPath.app,
      element: <App />,
    },
  };


  return (
    <Routes key={uuid()}>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
