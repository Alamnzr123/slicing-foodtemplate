import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Gambar1 from "../Assets/User icon.png";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navigation = () => {
  // Collapse isOpen State
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   isLogin();
  // }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const mainMenu = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return (
        <>
          <NavItem>
            <NavLink
              tag={Link}
              to="/addrecipe"
              active={location.pathname === "/recipe"}
            >
              add recipe
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              tag={Link}
              to="/profile"
              active={location.pathname === "/profile"}
            >
              profile
            </NavLink>
          </NavItem>
        </>
      );
    }
  };

  const isLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      return (
        <div className={location.pathname === "/" ? "nav-auth" : "nav-inverse"}>
          <img src={Gambar1} alt="User Icon" />
          <Link to="/profile">{decoded.name}</Link>
          <button title="Logout" onClick={logout}>
            <i class="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      );
    } else {
      return (
        <div className="nav-auth">
          <img src={Gambar1} alt="User Icon" />
          <Link to="/login">Login</Link>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar expand="lg" className="fixed-top">
        <Container>
          <NavbarBrand href="/" className="d-lg-none">
            Mama Recipe.
          </NavbarBrand>
          <NavbarToggler
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <i className="fas fa-bars"></i>
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/" active={location.pathname === "/"}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to="/view"
                  active={location.pathname === "/view"}
                >
                  view recipe
                </NavLink>
              </NavItem>
              {mainMenu()}
            </Nav>
            {isLogin()}
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
