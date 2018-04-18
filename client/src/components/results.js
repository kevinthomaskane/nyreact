

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
    <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
        <button data-id="{{this.link}}" class="btn btn-link getSummary" data-toggle="collapse" data-target="#{{this._id}}" aria-expanded="true" aria-controls="collapseOne">
        </button>
      </h5>
      <button class="btn btn-success save" data-id="{{this._id}}">Save Article</button>
    </div>
    <div id="{{this._id}}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <a href="{{this.link}}">View the article here</a>
        <div class="summaryArea"></div>
      </div>
    </div>
  </div>
</div>
)
};

export default Navbar;