import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <div className="header__wrapper">
      <h1 className="header__text">{title}</h1>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
