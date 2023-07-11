import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../ui-component/Loadable";

// sample page routing
const AnimeList = Loadable(
  lazy(() => import('../views/AnimeList/AnimeList'))
);
const MangaList = Loadable(
  lazy(() => import('../views/MangaList/MangaList'))
);
const AnimeViewPage = Loadable(lazy(() => import('../views/AnimeViewPage/AnimeViewPage')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Navigate to="/anime" />,
    },
    {
      path: "anime",
      element: <AnimeList />,
    },
    {
      path: 'anime/:id',
      element: <AnimeViewPage />
    },
    {
      path: "manga",
      element: <MangaList />
    },
    {
      path: "*",
      element: <Navigate to="/anime" />,
    }
  ],
};

export default MainRoutes;
