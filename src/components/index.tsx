import { lazy } from "react";

const ScreenLoading = lazy(() => import("./ScreenLoading"));
const Layout = lazy(() => import("./Layout"));
const Navbar = lazy(() => import("./Navbar"));
const NewReleases = lazy(() => import("./NewReleases"));
const MusicCard = lazy(() => import("./MusicCard"));

export { ScreenLoading, Layout, Navbar, NewReleases, MusicCard };
