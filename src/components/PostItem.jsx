import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostItem = ({ id, title, date, authorName }) => {
  return (
    <Link to={`/post/${id}`} className="post-item__link">
      <div className="post-item__wrapper">
        <h2 className="post-item__title">{title}</h2>
        <div className="post-item__info">
          <span className="post-item__author">Автор: {authorName}</span>
          <span className="post-item__date">
            {dayjs(date).format("HH:mm, MMMM YYYY")}
          </span>
        </div>
      </div>
    </Link>
  );
};

PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
};

export default PostItem;
