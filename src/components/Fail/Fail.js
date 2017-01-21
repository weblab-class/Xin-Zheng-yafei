import React from "react";
import s from "./Fail.css"


// Fail page component
class Fail extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Let's try again</h1>
        <button className={s.buttonToCamera}>Back to Camera</button>
      </div>

    );
  }
}

export default Fail;





