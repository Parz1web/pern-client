import React, { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import jwtDecode from "jwt-decode";
import {
  ADMIN_ROUTE,
  CONTACT_ROUTE,
  FAQ_ROUTE,
  FEEDBACK_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const Navbars = observer(() => {
  const { user } = useContext(Context);
  const history = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className="pointer" onClick={() => history(MAIN_ROUTE)}>
          <strong>Boot</strong>fury
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-2 lg:me-auto">
            <Nav.Link onClick={() => history(MAIN_ROUTE)} className="mr-2">
              <Button variant={"light"}>Главная</Button>
            </Nav.Link>
            <Nav.Link onClick={() => history(SHOP_ROUTE)}>
              <Button variant={"light"}>Каталог</Button>
            </Nav.Link>
            <Nav.Link onClick={() => history(FEEDBACK_ROUTE)}>
              <Button variant={"light"}>Отзывы</Button>
            </Nav.Link>
            <Nav.Link onClick={() => history(FAQ_ROUTE)}>
              <Button variant={"light"}>FAQ</Button>
            </Nav.Link>
            <Nav.Link onClick={() => history(CONTACT_ROUTE)}>
              <Button variant={"light"}>Контакты</Button>
            </Nav.Link>
            {user.isAuth ? (
              <Nav className="ml-auto align-items-center">
                <Nav.Link>
                  <Button
                    onClick={() => {
                      logOut();
                    }}
                    variant={"outline-light"}
                    style={{ backgroundColor: "#1aa090" }}
                  >
                    Выйти
                  </Button>
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="ml-auto align-items-center">
                <Nav.Link onClick={() => history(LOGIN_ROUTE)}>
                  <Button
                    variant={"outline-light"}
                    style={{ backgroundColor: "#1aa090" }}
                  >
                    Авторизация
                  </Button>
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default Navbars;
