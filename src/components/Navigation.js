import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

const Navigation = () => {
  return (
    <nav className="navigation">
      <h1 className="title">
        <FontAwesomeIcon icon={faCamera} /> SnapShot
      </h1>
      <Search />
      <div className="button-container">
        <Link to="/posts?query=Mountain">
          <button className="nav-button">Mountain</button>
        </Link>
        <Link to="/posts?query=Beach">
          <button className="nav-button beach-button">Beach</button>
        </Link>
        <Link to="/posts?query=Bird">
          <button className="nav-button">Bird</button>
        </Link>
        <Link to="/posts?query=Food">
          <button className="nav-button">Food</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
