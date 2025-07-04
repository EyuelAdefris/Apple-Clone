import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Apple_logo from "../assets/icon/logo-sm.png";
import Search from "../assets/icon/search-icon-sm.png";
import Cart from "../assets/icon/cart-sm.png";
import "../style/Header-style.css";

function Header() {
  return (
    <div className="fixed-position">
      <Navbar expand="md" className="bg-color">
        {/* Mobile header with hamburger, centered logo, and right-aligned icons */}
        <div className="d-flex d-md-none align-items-center w-100 position-relative m-2">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="position-absolute start-1 ms-1 border-0"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Nav.Link href="#home" className="mx-auto">
            <img src={Apple_logo} alt="Apple Logo" />
          </Nav.Link>

          {/* Right-aligned search and cart icons (mobile only) */}
          <div className="position-absolute end-0 me-2 d-flex">
            <Nav.Link href="#Search" className="me-2">
              <img src={Search} alt="Search" />
            </Nav.Link>
            <Nav.Link href="#Cart">
              <img src={Cart} alt="Cart" />
            </Nav.Link>
          </div>
        </div>
        <div></div>

        {/* Desktop navigation */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navwrapper">
            <Nav.Link href="#home" className="d-none d-md-block navwrapper">
              <img src={Apple_logo} alt="Apple Logo" />
            </Nav.Link>
            <Nav.Link href="#Mac" className="navwrapper">
              Mac
            </Nav.Link>
            <Nav.Link href="#Iphone" className="navwrapper">
              iPhone
            </Nav.Link>
            <Nav.Link href="#Ipad" className="navwrapper">
              iPad
            </Nav.Link>
            <Nav.Link href="#watch" className="navwrapper">
              Watch
            </Nav.Link>
            <Nav.Link href="#TV" className="navwrapper">
              TV
            </Nav.Link>
            <Nav.Link href="#Music" className="navwrapper">
              Music
            </Nav.Link>
            <Nav.Link href="#Support" className="navwrapper">
              Support
            </Nav.Link>
            <Nav.Link href="#Search" className="d-none d-md-block navwrapper">
              <img src={Search} alt="Search" />
            </Nav.Link>
            <Nav.Link href="#Cart" className="d-none d-md-block navwrapper">
              <img src={Cart} alt="Cart" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
