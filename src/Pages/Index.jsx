import FooterComponent from "../Components/FooterComponent";
import NavbarComponent from "../Components/NavbarComponent";
import HeroPage from "./HomePage";
import KelasComponent from "../Components/KelasComponent"

function IndexPage() {
  return (
    <div>
      {/* Navbar */}
      <NavbarComponent/>

      {/* Hero Section */}
      <HeroPage/>

      {/* Kelas Page */}
      <KelasComponent/>

      {/* Hero Section */}
      <FooterComponent/>
    </div>
  )
}

export default IndexPage;