import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonComponent from "./Button";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function NavbarComponent() {
  const [changeColor, setChangeColor] = useState(false);

  useEffect(() => {
    const changeBackgroundColor = () => {
      setChangeColor(window.scrollY > 10);
    };

    window.addEventListener("scroll", changeBackgroundColor);
    changeBackgroundColor(); // cek awal

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`navbar ${changeColor ? "color-active" : ""}`}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3">
          Han Course.
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="main-nav me-auto d-flex gap-4 fs-6 fw-normal mx-auto align-items-center">
            <NavLink to="/" className="nav-item-link">
              Home
            </NavLink>
            <NavLink to="/kelas" className="nav-item-link">
              Kelas
            </NavLink>
            <NavLink to="/testimonial" className="nav-item-link">
              Testimonial
            </NavLink>
            <NavLink to="/faq" className="nav-item-link">
              Faq
            </NavLink>
            <NavLink to="/syarat" className="nav-item-link">
              Syarat & Ketentuan
            </NavLink>
          </Nav>

          <div className="text-center mt-3 mt-lg-0">
            <ButtonComponent />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
