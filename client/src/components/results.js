import React from "react";
import Saved from "./saved.js";
import API from "../API.js";


const Search = props => {

    
  return (
      <div className="card">
          {props.articles.map((result) => {
            return (<div id="card-body">
                        <div class="card-header">
                            <h2 className="mb-0">
                                <a href={result.web_url}>{result.headline.main}</a>
                            </h2>
                            <button className="btn-primary" id={result._id} onClick={() => {props.save({
                                title: result.headline.main,
                                link: result.web_url,
                                author: result.byline.original,
                                date: result.pub_date.split("T")[0]})
                            }}>Save Article</button>
                        </div>
                        <div class="card-body">
                          <blockquote class="blockquote mb-0">
                            <p>{result.byline.original} </p>
                            <footer class="blockquote-footer">{result.pub_date.split("T")[0]}</footer>
                          </blockquote>
                        </div>
                    </div>)})}
          </div>)
    
  
  
};

export default Search;