/**
 * Created by xinzheng on 1/23/17.
 */
/**
 * Created by xinzheng on 1/23/17.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../reducers/action';
import Calendar from '../components/CalendarInfo/CalendarInfo';

function mapStateToProps(state) {
  return {
    ocr: state.ocr,
    url: state.url,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const CalendarContainer = connect(mapStateToProps, mapDispachToProps)(Calendar);

export default CalendarContainer;
