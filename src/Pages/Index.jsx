import FooterComponent from "../Components/FooterComponent";
import NavbarComponent from "../Components/NavbarComponent";
import HeroPage from "./HomePage";
import KelasComponent from "../Components/KelasComponent"
import TestimonialComponent from "../Components/TestimonialComponent";
import FaqComponent from "../Components/FaqComponen";

function IndexPage() {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent/>

      {/* Hero Section */}
      <HeroPage/>

      {/* Kelas Page */}
      <KelasComponent/>

      {/* Testimonial */}
      <TestimonialComponent/>

      {/* FAQ */}
      <FaqComponent/>

      {/* Hero Section */}
      <FooterComponent/>
    </div>
  )
}

export default IndexPage;