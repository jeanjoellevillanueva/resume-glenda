/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Button,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  UncontrolledDropdown
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("navbar-transparent");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-primary">
          <NavbarBrand
            data-placement="bottom"
            to="/index"
            tag={Link}
          >
            Glenda Ann Ranoco
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Nav>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              aria-expanded={false}
              aria-haspopup={true}
              caret
              data-toggle="dropdown"
              style={{ color: 'white', fontWeight: 'bold' }}
              href="#"
              id="dropdownMenuButton"
              nav
              onClick={(e) => e.preventDefault()}
              role="button"
            >
              About
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="dropdownMenuButton"
              className="dropdown-info"
            >
              <DropdownItem
                href="/about"
              >
                About Me
              </DropdownItem>
              <DropdownItem
                href=""
              >
                Contacts
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink
              href="#"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Portfolios
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Services
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Blogs
            </NavLink>
          </NavItem>
        </Nav>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/glendaranoco/"
                target="_blank"
                title="Follow me on Linked In"
              >
                <i className="fa fa-linkedin"></i>
                <p className="d-lg-none">Linked In</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/glendaranoco"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                className="btn btn-round ml-1"
                color="default"
                href="/index"
              >
                <i class="fa fa-arrow-left mr-1"></i>
                Back To Main Page
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ExamplesNavbar;
