import React from "react";
import API from "../API";

const styles = {
  body: {
      marginTop: 425
  },
  header: {
    fontFamily: 'Vollkorn SC',
    fontSize: 50,
    paddingTop: 30,
    textAlign: "center"
  }
  
};

const Saved = props => {

    return (
      <div style={styles.body} className="card">
        <h3 style={styles.header} >Your Saved Articles</h3>
        {props.saved.map((article) => {
          return(
          <div id="card-body">
            <div className="card-header">
                <h5 className="mb-0">
                  <a href={article.link}>{article.title}</a>
                </h5><br/>
                <button className="btn-danger" onClick={() => {
                props.deleteSaved(article._id)
                }}>Remove from saved
                </button>
            </div>
            <div className="card-body">
            <p>{article.author}</p>
            <footer className="blockquote-footer">{article.date}</footer>
            </div>
          </div>)
        })}
      </div>
    )
  }

export default Saved;