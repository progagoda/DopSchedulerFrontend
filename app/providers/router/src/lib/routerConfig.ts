export enum AppRoutes {
  MAIN = 'main',
  SHELL = 'shell',
}

export const RouterPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/main',
  [AppRoutes.SHELL]: '/',
};
