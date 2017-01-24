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

  handleSignInClick() {
    gapi.load('client:auth2', this.initClient);
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
      this.props.router.push('/camera')
      this.makeApiCall();
    }
  }


  render() {
    return (
      <div className="container">
        <h1>Poster-Cal</h1>
        <p>Welcome</p>
        <div className={s.areaSign}>
          <button id="signin-button" onClick={this.handleSignInClick}>Sign In with Google</button>
        </div>
      </div>
    );
  }
}

export default Login
