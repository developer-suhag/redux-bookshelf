import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-3 border-bottom bg-light ">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="h5 text-dark text-decoration-none" to="/">
          Book<strong className="text-primary">Shelf</strong>
        </Link>
        <div className="d-flex align-items-center">
          <button className="btn btn-sm ms-2 btn-outline-dark">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
