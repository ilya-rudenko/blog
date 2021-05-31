import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import authorsReducer from "./authorsReducer";
import titlesReducer from "./titlesReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  authors: authorsReducer,
  titles: titlesReducer,
});

export default rootReducer;
