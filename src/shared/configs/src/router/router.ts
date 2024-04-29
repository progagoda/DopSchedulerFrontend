import type { RouteProps } from 'react-router-dom';


export enum AppRoutes {
  SHEDULE = 'schedule',
  PROFILE= 'profile',
  DAY = 'day'
}
export type TRouterConfig = Record<AppRoutes, RouteProps>

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.SHEDULE]: '/app/schedule',
    [AppRoutes.PROFILE]: '/app/profile',
    [AppRoutes.DAY]: "/app/schedule/day/:date"
}
