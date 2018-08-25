import axios from "axios";

export default {



  getGoogleUser: function(){
    return axios.get("/info");
  },
  createUser: function (id){
    return axios.post("/api/users/" + id );
  },
  getUser: function(id){
    return axios.get("/api/users/" + id );
  },
  updateUser: function(id){
    return axios.update("api/users/" + id);
  },
  getListings: function(){
    return axios.get("/api/listings");
  },
  createListings: function(){
    return axios.post("/api/createListings");
  },
  updateListings: function(id){
    return axios.put("/api/updateListings/" + id)
  },
  deleteListings: function(id){
    return axios.delete("api/deleteListings/" +id)
  },

}