import { FC, ReactElement, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRouterRoutes } from "../types/appRouter";
import { Mylibrary, PageNotFound, Auth, Home } from "../pages";
import { ScreenLoading } from "../components";

const routes: AppRouterRoutes = [
  {
    path: "/",
    Element: () => <Home />,
  },
  {
    path: "/mylibrary",
    Element: () => <Mylibrary />,
  },
  {
    path: "/auth",
    Element: () => <Auth />,
  },
  {
    path: "*",
    Element: () => <PageNotFound />,
  },
];

const AppRouter: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Suspense fallback={<ScreenLoading />}>
        <Routes>
          {routes.map(({ Element, path, hasParams }, index) => (
            <>
              {!hasParams ? (
                <Route key={index} path={path} element={<Element />} />
              ) : (
                <Route key={index} path={path} element={<Element />}>
                  <Route path={hasParams} element={<Element />} />
                </Route>
              )}
            </>
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
