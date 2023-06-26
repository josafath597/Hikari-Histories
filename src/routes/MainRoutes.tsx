import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "../ui-component/Loadable";

// sample page routing
const AnimeList = Loadable(
  lazy(() => import('./../views/AnimeList'))
);
const AnimeViewPage = Loadable(lazy(() => import('../views/AnimeViewPage/AnimeViewPage')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <AnimeList />,
    },
    {
      path: 'Anime/:id',
      element: <AnimeViewPage />
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    }
  ],
};

export default MainRoutes;
