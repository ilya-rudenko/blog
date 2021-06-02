import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Home as HomeIcon, Create as CreateIcon } from "@material-ui/icons";

import "./Header.scss";

const Header = ({ title, addPost }) => {
  return (
    <div className="header__wrapper">
      <h1 className="header__text">{title}</h1>
      <div className="header__icon-wrapper">
        {addPost ? (
          <Link to="/add-post">
            <CreateIcon className="header__icon" style={{ fontSize: 40 }} />
          </Link>
        ) : (
          <Link to="/">
            <HomeIcon className="header__icon" style={{ fontSize: 40 }} />
          </Link>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
