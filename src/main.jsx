import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import KelasPages from "./Pages/KelasPages.jsx";
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPage from "./Pages/Index.jsx";
import Testimonial from "./Pages/Testimonial.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />, // HomePage
  },
  {
    path: "/kelas",
    element: <KelasPages />, // Halaman lain
  },
  {
    path: "/testimonial",
    element: <Testimonial/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* cukup ini, jangan bungkus App lagi */}
  </StrictMode>
);
