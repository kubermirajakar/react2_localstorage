import React from "react";
import classes from "./LoginPage.module.css";
export default function LoginPage({ LoginPageuserLoggedIn }) {
  function onLogout() {
    LoginPageuserLoggedIn(false);
  }
  return (
    <React.Fragment>
      <div className={classes.login}>
        <h1>User loged in</h1>
        <button onClick={onLogout}> Logout</button>
      </div>
    </React.Fragment>
  );
}
