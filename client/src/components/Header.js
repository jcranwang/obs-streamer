import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui massive menu">
      <Link to="/" className="item">OBS Streamer</Link>
      <div className="right menu">
        <Link to="/" className="item">Streams</Link>
      </div>
    </div>
  );
};

export default Header;
