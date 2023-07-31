import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import ArchivePage from "../pages/ArchivePage";
const routes = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/archive",
    element: <ArchivePage />,
    errorElement: <ErrorPage />,
  },
];
export default routes;
