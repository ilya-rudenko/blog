import { ADD_AUTHOR } from "../types";

const initialState = [];

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTHOR:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default authorsReducer;
