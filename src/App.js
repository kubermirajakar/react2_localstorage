import "./styles.css";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import LoginPage from "./LoginPage";

export default function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    let log = localStorage.getItem("isLoggedin");
    if (log === "1") {
      setLoggedIn(true);
    }
  }, []);
  function FormuserLoggedIn(a) {
    setLoggedIn(a);
    localStorage.setItem("isLoggedin", "1");
  }
  function LoginPageuserLoggedIn(a) {
    setLoggedIn(a);
    localStorage.removeItem("isLoggedin");
  }
  return (
    <React.Fragment>
      {!LoggedIn && <Form FormuserLoggedIn={FormuserLoggedIn} />}
      {LoggedIn && <LoginPage LoginPageuserLoggedIn={LoginPageuserLoggedIn} />}
    </React.Fragment>
  );
}
