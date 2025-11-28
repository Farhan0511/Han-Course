import IndexPage from "../Pages/Index.jsx";
import KelasPages from "../Pages/KelasPages.jsx";
import Testimonial from "../Pages/Testimonial.jsx";
import FaqPages from "../Pages/FaqPages.jsx";
import SyaratKetentuan from "../Pages/SyaratKetentuan.jsx";

const routes = [
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/kelas",
    element: <KelasPages />,
  },
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
  {
    path: "/faq",
    element: <FaqPages />,
  },
  {
    path: "/syarat",
    element: <SyaratKetentuan />,
  },
];

export default routes;
