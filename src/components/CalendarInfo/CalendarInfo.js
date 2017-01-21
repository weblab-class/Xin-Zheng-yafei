import React from "react";
import s from "./CalendarInfo.css"


// CalendarInfo page component
class CalendarInfo extends React.Component {
  render() {
    return (
      <div className="container">

        <div className={s.areaSubmit}>
          <button>Submit</button>
        </div>

        <div className={s.areaContent}>
          <p>text.....</p>
          <p>text.....</p>
          <p>text.....</p>
        </div>

        <nav className={s.areaOption}>
          <ul className={s.containerOption}>
            <li><img src="" alt="Title"/></li>
            <li><img src="" alt="Place"/></li>
            <li><img src="" alt="Time"/></li>
            <li><img src="" alt="URL"/></li>
          </ul>
        </nav>

      </div>
  );
  }
  }

  export default CalendarInfo;





