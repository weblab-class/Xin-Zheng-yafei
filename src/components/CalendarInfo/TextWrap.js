import React from "react";
import s from "./TextWrap.css"



// CalendarInfo page component
class CalendarInfo extends React.Component {
  render() {
    // let textClass = cx(s.box, {
    //   [s.onclick]: this.props.click,
    // });

    return (
        <div className={s.textWrap}>
          <p>{this.props.text}</p>
        </div>
    );
  }
}

export default CalendarInfo;





