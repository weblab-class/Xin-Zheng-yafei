import React from "react";
import s from "./Login.css"
import {Router, Route, Link, browserHistory} from 'react-router'

// Login page component
class Login extends React.Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.initClient = this.initClient.bind(this);
    this.makeApiCall = this.makeApiCall.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);

  }



  componentWillMount(){
    gapi.load('client:auth2', this.initClient);

  }

  handleSignInClick() {
    gapi.auth2.getAuthInstance().signIn();

  }


  initClient() {

    // Initialize the client with API key and People API, and initialize OAuth with an
    // OAuth 2.0 client ID and scopes (space delimited string) to request access.
    gapi.client.init({
      apiKey: 'AIzaSyANWhk-aYTE-SmP4PoMHNKgTqTAiTkbfnM',
      clientId: '367785159299-tebqtl75v98og0kg5qqrtcabonnbg2i2.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/calendar'
    }).then( () => {
      // Listen for sign-in state changes.
      console.log("init");
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

      // Handle the initial sign-in state.
      this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }


  makeApiCall() {
    gapi.client.request({
      'path': 'https://www.googleapis.com/calendar/v3/calendars/primary/events?key=AIzaSyANWhk-aYTE-SmP4PoMHNKgTqTAiTkbfnM',
    }).then(function (response) {
      console.log(response.result);
    }, function (reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  }


  updateSigninStatus(isSignedIn) {
    // When signin status changes, this function is called.
    // If the signin status is changed to signedIn, we make an API call.
    if (isSignedIn) {
      console.log("signedIN");
      this.props.router.push('/camera')
      this.makeApiCall();
    }


  }


  render() {
    return (
      <div className={s.cover}>

        <div className={s.middle}>
          <h1>Welcome to Poster-Cal</h1>
            {/*<img className="google" src="g.png"/>*/}
              <button id="signin-button" onClick={this.handleSignInClick}>Sign in with Google + </button>
        </div>
        <div className = {s.backgroundImage}></div>

      </div>
    );
  }
}

export default Login;






