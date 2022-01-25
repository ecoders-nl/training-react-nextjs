import styles from "../styles/Card.module.css";
import { useState } from "react";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <div>{loggedIn ? "You are logged in." : "You are not logged in."}</div>
      <button
        onClick={function () {
          setLoggedIn(!loggedIn);
        }}
      >
        {loggedIn ? "log out" : "log in"}
      </button>
    </div>
  );
}

export default Login;
