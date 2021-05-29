import { ADD_AUTHOR } from "../types";

export const addAuthor = (authorName) => {
  return {
    type: ADD_AUTHOR,
    payload: authorName,
  };
};
