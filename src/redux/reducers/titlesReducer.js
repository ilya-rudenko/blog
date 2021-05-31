import { ADD_TITLE, DELETE_TITLE } from "../types";

const initialState = [];

const titlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return [action.payload, ...state];
    case DELETE_TITLE:
      return state.filter((title) => title != action.payload);
    default:
      return state;
  }
};

export default titlesReducer;
