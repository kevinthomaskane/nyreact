import React from "react";
import Saved from "./saved.js";
import API from "../API.js";
import Results from "./results.js";
import image from "./background.jpg";

const styles = {
  body: {
      background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${image})`,
      height: 1050
  },
  header: {
    fontFamily: 'Vollkorn SC',
    zIndex: 100,
    fontSize: 50,
    paddingTop: 225,
    textAlign: "center"
  },
  search: {
    width: "50%",
    marginLeft: 250,
    borderRadius: 5,
    height: 40
  },
  button: {
    display: "inline-block",
    height: 30,
    width: 80,
    paddingBottom: 30,
    textAlign: "center"
  }
};


class Search extends React.Component {

  state = {
    search: "",
    beginYear: 20160101,
    endYear: 20180404,
    results: [],
    saved: []
  }

  componentDidMount = () => {
    API.getSaved().then((response) => {
      this.setState({saved: response.data})
    })
  }

  getArticles = () => {
    API.search(this.state.search, this.state.beginYear, this.state.endYear).then((response)=>{
      this.setState({results: response.data.response.docs})
    });
  };

  deleteSaved = (id) => {
    API.deleteSaved(id).then((response) => {
      var newArray = this.state.saved.filter((item) => {
        return item.title !== response.data.title
      })
      this.setState({saved: newArray})
    })
  }

  handleSearchChange = event => {
    let input = event.target.value
    this.setState({search: input})
  }

  saveArticle = (object) => {
    API.save(object).then((response) => {
      API.getSaved().then((response) => {
        this.setState({saved: response.data})
      })
    })
  }

  render(){
    return (
      <div style={styles.body}>
      <div className="container">
          <div className="form-group">
          <h2 style={styles.header} >The New York Times</h2>
            <input style={styles.search} onChange={this.handleSearchChange} type="text" placeholder="Enter search terms" />
          <button style={styles.button} onClick={this.getArticles} type="submit" className="btn btn-dark">Search</button>
          </div>
      <Results articles={this.state.results} save={this.saveArticle} />
      <Saved saved={this.state.saved} deleteSaved={this.deleteSaved}/>
    </div>
    </div>
    )
  }
  
};

export default Search;