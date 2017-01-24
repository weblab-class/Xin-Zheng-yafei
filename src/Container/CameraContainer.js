/**
 * Created by xinzheng on 1/23/17.
 */
/**
 * Created by xinzheng on 1/23/17.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../reducers/action';
import Camera from '../components/Camera/Camera';



function mapStateToProps(state) {
  return {
    ocr: state.ocr,
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const CameraContainer = connect(mapStateToProps, mapDispachToProps)(Camera);

export default CameraContainer;
