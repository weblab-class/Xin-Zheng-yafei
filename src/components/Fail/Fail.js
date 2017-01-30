import React from "react";
import s from "./Fail.css"


// Fail page component
class Fail extends React.Component {
  render() {
    return (
		<div className={s.container}>

			<div className = {s.areaHeading}>
	          <button className={s.buttonSignOut}><i className="fa fa-sign-out  fa-2.5x"/></button>
	        </div>

	        <div className = {s.areaFailMsg}>
	        	<i className = "fa fa-undo" aria-hidden="true"></i>
	        	<h1>Let's try again</h1>
	        </div>

	        <div className = {s.areaCamera}>
	        	<button className={s.buttonToCamera}><i className="fa fa-camera"/></button>
	        </div>
			
		</div>

    );
  }
}

export default Fail;





