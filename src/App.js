import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbars from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return (
      <div className="d-flex justify-content-center text-center align-items-center">
        <Spinner animation="border" className="" />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Navbars />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
});

export default App;
