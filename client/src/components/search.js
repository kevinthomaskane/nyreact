import React from "react";
import API from "../API.js";


class Search extends React.Component {

  state = {
    search: "",
    beginYear: 20160101,
    endYear: 20180101,
    results: [],
    open: true
  }

  getArticles = () => {
    API.search(this.state.search, this.state.beginYear, this.state.endYear).then((response)=>{
      this.setState({results: response.data.response.docs})
    });
  };

  printArticles = () => {
    this.state.results.map((result, i) => {
      return <li>result</li>
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
    })
  }

  // componentDidMount = () => {
  //   API.search("trump", 20110101, 20160101).then((response)=>{
  //     console.log(response)
  //   })
  // }

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
      
      <div id="accordian">
        {this.state.results.map((result) => {
      return (<div className="card">
      <div className="card-header" id="headingOne" expanded={this.state.open}>
        <h5 className="mb-0">
        <a href={result.web_url} >{result.headline.main}</a>
      </h5>
          <button id={result._id} onClick={() => {this.saveArticle({
              title: result.headline.main,
              link: result.web_url,
              author: result.byline.original,
              date: result.pub_date.split("T")[0]})
          this.setState({ open: !this.state.open })
          }}>Save Article</button>
      </div>
        <div id="{{this._id}}" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
        {result.byline.original} 
         <div className="summaryArea">{result.pub_date.split("T")[0]}</div>
        </div>
        </div>
        </div>)
    })}
      </div>
    </div>
    )
  }
  
};

export default Search;