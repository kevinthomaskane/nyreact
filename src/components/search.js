import React from "react";
import API from "../API.js";


class Search extends React.Component {

  state = {
    search: "",
    beginYear: 20160101,
    endYear: 20180101,
    results: []
  }

  getArticles = () => {
    API.search(this.state.search, this.state.beginYear, this.state.endYear).then((response)=>{
      console.log(response)
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

  // componentDidMount = () => {
  //   API.search("trump", 20110101, 20160101).then((response)=>{
  //     console.log(response)
  //   })
  // }

  render(){
    console.log(this.state)
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
      
      <ul>
        {this.state.results.length > 0 ? (console.log(this.state.results), this.state.results.map((result) => {
      return <li key={result.headline}><a href={result.web_url}>{result.headline.main}</a> 
      <br/> 
      {result.byline.original} 
      <br/>
      {result.pub_date.split("T")[0]}
      </li>
    })) : console.log("nothing")}
      </ul>
    </div>
    )
  }
  
};

export default Search;