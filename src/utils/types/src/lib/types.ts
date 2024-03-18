import type { RouteProps } from 'react-router-dom';


export enum AppRoutes {
  MAIN = 'main',
  SHELL = 'shell',
  DEFAULT = 'app'
}
export type TRouterConfig = Record<AppRoutes, RouteProps>