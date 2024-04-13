import type { RouteProps } from 'react-router-dom';


export enum AppRoutes {
  SHEDULE = 'schedule',
  CREATE= 'create',
}
export type TRouterConfig = Record<AppRoutes, RouteProps>

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.SHEDULE]: '/app/schedule',
    [AppRoutes.CREATE]: '/app/create',
}
