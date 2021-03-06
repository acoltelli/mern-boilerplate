import {
  GET_DATA
} from "../actions/types";

const initialState = {
  data: []

};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
      
    default:
      return state;
  }
}
