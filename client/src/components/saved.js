import React from "react";
import Navbar from "./navbar";
import API from "../API";

class Saved extends React.Component {

  state = {
    saved: []
  }
  
  deleteSaved(id){
    API.deleteSaved(id).then((response) => {
      console.log(response)
      var newArray = this.state.saved.filter((item) => {
        return item.title !== response.data.title
      })
      this.setState({saved: newArray})
    })
  }

  render() {

    return (
      <div>
        <ul>
        {this.state.saved.map((article) => {
          return(
          <li>
            <a href={article.link}>{article.title}</a><br/>
            {article.author}<br/>
            {article.date}
            <button onClick={() => {
              this.deleteSaved(article._id)
            }}>Remove from saved</button>
          </li>)
        })}
        </ul>
      </div>
    )
  }
};

export default Saved;