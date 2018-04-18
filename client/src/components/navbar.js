import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {

  const style = {
    backgroundColor: "black",
    color: "white",
    height: 100,
    paddingTop: 30,
    boxShadow: "0px 10px 10px grey" 

  }

  return (
  <div style={style}>
   <div className="row">
      <div className="col-md-3">
      <Link to="/saved"> Saved Articles {props.score}</Link>
      </div>
    </div>
</div>
)
};

export default Navbar;