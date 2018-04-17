import React from "react";
import API from "../API.js";


class Search extends React.Component {

  state = {
    search: "",
    beginYear: 2016,
    endYear: 2018,
    results: []
  }

  getArticles = () => {
    API.search("trump", 2011, 2016).then((response)=>{
      this.setState({results: response.data.response.docs})
    });
  };

  handleInputChange = event => {
    var input = event.target.value
    this.setState({search: input})
  }

  componentDidMount = () => {
    API.search("trump", 2011, 2016).then((response)=>{
    })
  }

  render(){
    return (
      <div className="container">
       <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Article Search</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter search terms" />
          </div>
          <div className="form-group">
            <label for="endYear">Begin Year</label>
            <input onChange={this.handleInputChange} className="form-control" id="endYear" placeholder="beginning year" />
           </div>
           <div className="form-group">
            <label for="endYear">End Year</label>
            <input className="form-control" id="endYear" placeholder="ending year" />
           </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
        <button data-id="{{this.link}}" class="btn btn-link getSummary" data-toggle="collapse" data-target="#{{this._id}}" aria-expanded="true" aria-controls="collapseOne">
        </button>
      </h5>
      <button class="btn btn-success save" data-id="{{this._id}}">Save Article</button>
    </div>

    <div id="{{this._id}}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <a href="{{this.link}}">View the article here</a>
        <div class="summaryArea"></div>
      </div>
    </div>
  </div>
</div>
    </div>
    )
  }
  
};

export default Search;