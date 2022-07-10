/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Mylibrary = lazy(() => import("./Mylibrary"));
const Auth = lazy(() => import("./Auth"));
const PageNotFound = lazy(() => import("./404"));

export { Mylibrary, Auth, PageNotFound, Home };
