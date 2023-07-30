import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage.tsx";
import NotFound from "./pages/NotFoundPage.tsx";
import ArchivePage from "./pages/ArchivePage.tsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} errorElement={<ErrorPage />} />
      <Route
        path="/archive"
        element={<ArchivePage />}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
