import React from "react";

const Saved = props => {

  const style = {
    backgroundColor: "purple",
    color: "white",
    height: 100,
    paddingTop: 30,
    boxShadow: "0px 10px 10px grey" 

  }

  return (
  <div style={style}>
   <div className="row">
    <div className="col-md-1"></div>
      <div className="col-md-3">
      <h3>Score: {props.score}</h3>
      </div>
      <div className="col-md-4">
      <h3>{props.message}</h3>
      </div>
      <div className="col-md-3">
      <h3>High Score: {props.highScore}</h3>
      </div>
      <div className="col-md-1"></div>
    </div>
</div>
)
};

export default Saved;