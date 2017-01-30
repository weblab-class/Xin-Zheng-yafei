import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";


function ocr(state = [], action) {
  switch (action.type) {
    case 'receiveOCR':
      return {
        ...state,
        "ocr": JSON.parse(action.res)
      };
    default:
      return state
  }
}


function url(state = [], action) {
  switch (action.type) {
    case 'receiveURL':
      return {
        ...state,
        "URL": action.res
      };
    default:
      return state
  }
}




function submitform(state = [], action) {
  switch (action.type) {
    case 'SubmitToRedux':
      return {
        ...state,
        "selectedTitle" :action.res.selectedTitle,
        "finalStartTime" :action.res.finalStartTime,
        "finalEndTime" :action.res.finalEndTime,
        "selectedPlace" :action.res.selectedPlace,
        "selectedURL" :action.res.selectedURL,
      };
    default:
      return state
  }
}



// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  ocr,
  url,
  submitform,
  // your reducer here
});
