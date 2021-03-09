import _ from "lodash";

import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types.js";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // Omit is not going to change the original state object, instead it creates a new object with all the previous properties of State MINUS whatever we pass-in with the action.payload
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
