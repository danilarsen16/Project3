import axios from "axios";

export default {

  createUser: function (id){
    return axios.post("/api/" + id );
  },
  getUser: function(id){
    return axios.get("/api/" + id );
  },
  updateUser: function(id){
    return axios.update("api/" + id);
  },
  getListings: function(id){
    return axios.get("api/listings" + id);
  },
  createListings: function(){
    return axios.post("/api/createListings");
  },
  updateListings: function(id){
    return axios.put("/api/updateListings" + id)
  },
  deleteListings: function(id){
    return axios.delete("api/deleteListings" +id)
  },

}