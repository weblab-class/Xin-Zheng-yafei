import React from "react";
import s from "./Login.css"


// Login page component
class Login extends React.Component {
  render() {
    return (
      <div className = "container">
        <h1>Poster-Cal</h1>
        <p>Welcome</p>
        <div className = {s.areaSign}>
          <button>Sign in with Google</button>
        </div>
      </div>
    );
  }
}

export default Login
