import React from "react";
import s from "./Success.css"
import * as ICS from 'ics-js';
import FileSaver from 'file-saver';





// Success page component
class Success extends React.Component {

  handleICS(){
    const cal = new ICS.VCALENDAR();


    cal.addProp('VERSION', 2) // Number(2) is converted to '2.0'
    cal.addProp('PRODID', 'XYZ Corp');

    const event = new ICS.VEVENT();
    event.addProp('UID');
    event.addProp('DTSTAMP', new Date('2017-07-18 10:00:00'), { VALUE: 'DATE-TIME' });
    event.addProp('ATTENDEE', null, {
      CN: 'Sample Company',
      RSVP: 'FALSE:mailto:foo@example.com'
    });
    cal.addComponent(event);

    FileSaver.saveAs(cal.toBlob());


  }

  handleBackCamera(){
    this.props.router.push('/camera');
  }

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

        <div className = {s.areaSuccessMsg}>
          <i className="fa fa-check-circle-o"/>
          <h1>Success</h1>
        </div>

        <div className = {s.areaButton}>
          <button className = {s.button}> <a href="https://calendar.google.com/" target="_blank"> <i className="fa fa-google-plus-square"/></a>  </button>
          <button className = {s.button}> <a href={this.props.submitform.url.URL} target="_blank"> <i className="fa fa-file"/> </a></button>
          <button className = {s.button}onClick={this.handleBackCamera.bind(this)} ><i className="fa fa-camera"/></button>
          {/*<button className = {s.button}><i className="fa fa-file"/></button>*/}
        </div>

        <div className = {s.buttonText}>
          <p>Visit Google Calendar</p>
          <p>See the poster</p>
          <p>Add another</p>
          {/*<p>See poster</p>*/}
        </div>

      </div>

    );
  }
}

export default Success;





