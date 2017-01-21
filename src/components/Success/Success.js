import React from "react";
import s from "./Success.css"


// Success page component
class Success extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Success!</h1>
        <button className={s.buttonAddAnother}>Add another</button>
        <button className={s.buttonGoogleCal}>Go to <img src="#" alt = "Google Calendar"/></button>
        <button className={s.buttonICal}>Save to <img src="#" alt = "iCal"/></button>
      </div>

    );
  }
}

export default Success;





