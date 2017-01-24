import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";


function ocr(state = [], action) {
  switch (action.type) {
    case 'OCR':
      return [
        ...state,
        {
          ocr: action.res,
        }
      ]
    default:
      return state
  }
}



// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  ocr,
  // your reducer here
});
