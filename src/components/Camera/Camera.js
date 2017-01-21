import React from "react";
import cameraPhoto from "./img/cameraIcon.jpg"
import s from "./Camera.css"



// Camera page component
class Camera extends React.Component {
  render() {
    return (
      <div className = "container">
        <img className={s.cameraPhoto} src={cameraPhoto} alt="camera"/>
      </div>
    );
  }
}

export default Camera
