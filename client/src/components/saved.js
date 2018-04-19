import React from "react";
import Navbar from "./navbar";
import API from "../API";

class Saved extends React.Component {

  state = {
    saved: []
  }

  componentDidMount(){
    API.getSaved().then((response) => {
      this.setState({saved: response.data})
    })
  }

  render() {
    console.log(this.state.saved)

    return (
      <div>
        <ul>
        {this.state.saved.map((article) => {
          return(
          <li>
            <a href={article.link}>{article.title}</a><br/>
            {article.author}<br/>
            {article.date}
          </li>)
        })}
        </ul>
      </div>
    )
  }
};

export default Saved;