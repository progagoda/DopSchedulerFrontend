import { Route, Routes, RouteProps } from 'react-router-dom';

import { AppRoutes, RouterPath } from './routerConfig';
import { Main } from '@pages/main';
import { Shell } from '@pages/shell';

import type { TRouterConfig } from '@utils/types';
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
  };
  return (
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  );
};
