import { useRef } from "react";
import classes from "./Form.module.css";

export default function Form({ FormuserLoggedIn }) {
  const username = useRef();
  const password = useRef();

  function onSave(e) {
    e.preventDefault();
    if (
      username.current.value === "kuber" &&
      password.current.value === "kuber"
    ) {
      FormuserLoggedIn(true);
      console.log(username.current.value, password.current.value);
    }
  }
  return (
    <form onSubmit={onSave} className={classes.form}>
      <div className={classes.input}>
        <label htmlFor="username">username</label>
        <input type="text" id="username" ref={username} />
      </div>
      <div className={classes.input}>
        <label htmlFor="password">password</label>
        <input type="password" id="password" ref={password} />
      </div>
      <button className={classes.btn}>Log in</button>
    </form>
  );
}
