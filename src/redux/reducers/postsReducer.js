import { ADD_POST, DELETE_POST } from "../types";

const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [action.payload, ...state];
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

export default postsReducer;
