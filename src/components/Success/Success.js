import React from "react";
import s from "./Success.css"


// Success page component
class Success extends React.Component {
  render() {
    return (
      <div className={s.container}>

        <div className = {s.areaHeading}>
          <button className={s.buttonSignOut}><i className="fa fa-sign-out  fa-2.5x"/></button>
        </div>

        <div className = {s.areaSuccessMsg}>
          <i className="fa fa-check-circle-o"/>
          <h1>Success</h1>
        </div>
        
        <div className = {s.areaButton}>
          <button className = {s.button}><i className="fa fa-google-plus-square"/></button>
          <button className = {s.button}><i className="fa fa-apple"/></button>
          <button className = {s.button}><i className="fa fa-camera"/></button>
          <button className = {s.button}><i className="fa fa-file"/></button>
        </div>

        <div className = {s.buttonText}>
          <p>Visit Google Calendar</p>
          <p>Save to iCal</p>
          <p>Add another</p>
          <p>See poster</p>
        </div>

      </div>

    );
  }
}

export default Success;





