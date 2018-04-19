import React from "react";
import Saved from "./saved.js";
import API from "../API.js";
import Results from "./results.js";


class Search extends React.Component {

  state = {
    search: "",
    beginYear: 20160101,
    endYear: 20180101,
    results: [],
    saved: []
  }

  componentDidMount(){
    API.getSaved().then((response) => {
      this.setState({saved: response.data})
    })
  }

  getArticles = () => {
    API.search(this.state.search, this.state.beginYear, this.state.endYear).then((response)=>{
      this.setState({results: response.data.response.docs})
    });
  };

  deleteSaved(id){
    API.deleteSaved(id).then((response) => {
      console.log(response)
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

  handleBeginChange = event => {
    let input = event.target.value
    this.setState({beginYear: input})
  }

  handleEndChange = event => {
    let input = event.target.value
    this.setState({endYear: input})
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
      <div className="container">
       
          <div className="form-group">
            <label for="search">Article Search</label>
            <input onChange={this.handleSearchChange} type="text" className="form-control" id="search" placeholder="Enter search terms" />
          </div>
          <div className="form-group">
            <label for="endYear">Begin Year</label>
            <input onChange={this.handleBeginChange} className="form-control" id="endYear" placeholder="YYYYMMDD" />
           </div>
           <div className="form-group">
            <label for="endYear">End Year</label>
            <input onChange={this.handleEndChange} className="form-control" id="endYear" placeholder="YYYYMMDD" />
           </div>
          <button onClick={this.getArticles} type="submit" className="btn btn-primary">Submit</button>
      <Results articles={this.state.results} save={this.saveArticle} />
      <Saved saved={this.state.saved}/>
    </div>
    )
  }
  
};

export default Search;