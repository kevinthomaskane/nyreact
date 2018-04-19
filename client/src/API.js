import axios from 'axios';


export default {

  search: function(query, beginYear, endYear) {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&begin_date=${beginYear}&end_date=${endYear}&api-key=f1bb266b9dff4541b8d3d390a067ccbe`);
  },

  save: function(info){
    return axios.post("/save", info);
  },

  getSaved: function(){
    return axios.get("/getSaved");
  },

  deleteSaved: function(id){
    return axios.delete("/delete/" + id);
  }

};