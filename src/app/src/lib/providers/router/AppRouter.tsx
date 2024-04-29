// eslint-disable-next-line @nx/enforce-module-boundaries
import {Day} from '@pages/day';
import {Profile} from '@pages/profile'
import { Schedule } from '@pages/schedule';
import { routerConfig } from '@shared/configs';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuid } from 'uuid'


const {AppRoutes, RouterPath} = routerConfig;
export const AppRouter = () => {
  const routerConfig: routerConfig.TRouterConfig = {
    [AppRoutes.SHEDULE]: {
      path: RouterPath.schedule ,
      element: <Schedule/>,
    },
    [AppRoutes.PROFILE]: {
      path: RouterPath.profile,
      element: <Profile />,
    },
    [AppRoutes.DAY]: {
      path: RouterPath.day,
      element: <Day/>,
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
