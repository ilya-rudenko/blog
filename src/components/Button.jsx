import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ onClick, text, type, style, to }) => {
  return to ? (
    <Link to={to}>
      <button
        onClick={onClick}
        className={`button button__${type}`}
        style={style}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`button button__${type}`}
      style={style}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(["blue", "red"]),
  to: PropTypes.string,
};

export default Button;
