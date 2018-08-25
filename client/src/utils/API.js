import axios from "axios";

export default {


//   createUser: function (id){
//     return axios.post("/api/user" + id, userData);
//   },
//   getUser: function(id){
//     return axios.get("/api/user" + id, userData);
//   },
//   updateUser: function(id){
//     return axios.update("api/user" + id);
//   },
  getListings: function(){
    return axios.get("/api/listings");
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