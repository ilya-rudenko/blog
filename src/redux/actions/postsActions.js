import { ADD_POST, DELETE_POST } from "../types";

export const addPost = ({ id, title, authorName, date, body }) => {
  return {
    type: ADD_POST,
    payload: {
      id,
      title,
      authorName,
      date,
      body,
    },
  };
};

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});
