import React from "react";
import API from "../API";

const Saved = props => {

    return (
      <div>
        <ul>
        {props.saved.map((article) => {
          return(
          <li>
            <a href={article.link}>{article.title}</a><br/>
            {article.author}<br/>
            {article.date}
            <button onClick={() => {
              props.deleteSaved(article._id)
            }}>Remove from saved</button>
          </li>)
        })}
        </ul>
      </div>
    )
  }

export default Saved;