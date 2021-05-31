import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import dayjs from "dayjs";

import Button from "../components/Button";
import Header from "../components/Header";
//redux
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../redux/actions/postsActions";
import { deleteTitle } from "../redux/actions/titlesActions";

const PostPage = ({ match }) => {
  const postId = match.params.postId;

  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state) => {
    return state.posts.filter((post) => post.id === postId);
  })[0];

  let createContentMarkup = () => {
    return { __html: post ? post.body : "" };
  };

  const onDeletePost = () => {
    if (window.confirm("Вы уверены что хотите удалить пост?")) {
      dispatch(deletePost(postId));
      dispatch(deleteTitle(post.title));
      history.push("/");
    }
  };

  return post ? (
    <Fragment>
      <Header title={post.title} />
      <div className="content-wrapper">
        <div className="post__author">{post.authorName}</div>

        <div className="post__data">
          {dayjs(post.date).format("HH:mm, MMMM YYYY")}
        </div>
        <hr className="post__separator" />
        <div
          className="post__body"
          dangerouslySetInnerHTML={createContentMarkup()}
        />
        <hr className="post__separator" />
        <Button text="Вернуться на главную" type="blue" to="/" />
        <Button
          text="Удалить запись"
          type="red"
          style={{ marginLeft: "10px" }}
          onClick={onDeletePost}
        />
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <Header title="Такого поста нет" />
      <div className="content-wrapper">
        <Button text="Вернуться на главную страницу" type="blue" to="/" />
      </div>
    </Fragment>
  );
};

PostPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PostPage;
