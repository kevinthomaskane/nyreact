import React from "react";
import Saved from "./saved.js";
import API from "../API.js";

const styles = {
  body: {
      height: 300,
      backgroundColor: "transparent",
      border: "none"
  },
  panel: {
    width: "60%",
    margin: "0 auto"
  },

  cardBody: {
    height: 50
  },

  white: {
    color: "white"
  }

};

const Search = props => {

    
  return (
      <div style={styles.body} className="card">
          {props.articles.map((result, i) => {
            if (i < 5){
            return (<div style={styles.panel} id="card-body">
                        <div class="card-header">
                            <h5 className="mb-0">
                                <a style={styles.white} href={result.web_url}>{result.headline.main}<br/>{result.byline.original} {result.pub_date.split("T")[0]} </a>
                            </h5> <br/>
                            <button className="btn-primary" id={result._id} onClick={() => {props.save({
                                title: result.headline.main,
                                link: result.web_url,
                                author: result.byline.original,
                                date: result.pub_date.split("T")[0]})
                            }}>Save Article</button>
                        </div>
                        
                    </div>)
                    }
                  }
                )
              }
      </div>)
    
  
  
};

export default Search;