import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../src/pages/CatalogPage/CatalogPage.jsx")
);
const CamperPage = lazy(() => import("../src/pages/CamperPage/CamperPage.jsx"));
const NotFoundPage = lazy(() =>
  import("../src/pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <Layout>
      <Toaster />

      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
