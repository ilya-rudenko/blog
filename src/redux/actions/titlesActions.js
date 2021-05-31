import { ADD_TITLE, DELETE_TITLE } from "../types";

export const addTitle = (title) => {
  return {
    type: ADD_TITLE,
    payload: title,
  };
};

export const deleteTitle = (title) => {
  return {
    type: DELETE_TITLE,
    payload: title,
  };
};
