import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonComponent from "./Button";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/index";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" className="Navbar py-3 ">
      <Container>
        {/* Brand */}
        <Navbar.Brand className="fw-bold fs-3">Han Course.</Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menu kiri */}
          <Nav className="me-auto d-flex gap-3 fs-6 fw-normal mx-auto align-items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-simple active" : "nav-simple"
                }
              >
                {link.text}
              </NavLink>
            ))}
          </Nav>

          {/* Tombol di kanan */}
          <div className="text-center mt-3 mt-lg-0">
            <ButtonComponent />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
