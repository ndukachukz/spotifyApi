import { FC } from "react";

export type AppRouterRoutes = AppRouterRoute[];

export interface AppRouterRoute {
  path: string;
  Element: FC;
  hasParams?: string;
}
