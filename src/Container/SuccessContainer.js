/**
 * Created by xinzheng on 1/30/17.
 */


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../reducers/action';
import Success from '../components/Success/Success';



function mapStateToProps(state) {
  return {
    submitform: state,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const SuccessContainer = connect(mapStateToProps, mapDispachToProps)(Success);

export default SuccessContainer;
