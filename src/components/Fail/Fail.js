import React from "react";
import s from "./Fail.css"


// Fail page component
class Fail extends React.Component {


  handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
    this.props.router.push('/');
  }


  render() {
    return (
		<div className={s.container}>

			<div className = {s.areaHeading}>
	          <button className={s.buttonSignOut} onClick={this.handleSignOutClick.bind(this)}><i className="fa fa-power-off fa-2.5x"/></button>
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





