import axios from "axios";

export default {


  createUser: function (id){
    return axios.post("/api/user" + id, userData);
  },
  getUser: function(id){
    return axios.get("/api/user" + id, userData);
  },
  updateUser: function(id){
    return axios.update("api/user" + id);
  },
  getListings: function(id){
    return axios.get("api/listing" + id, listingData);
  },
  createListing: function(){
    return axios.post("/api/createListing");
  },
  updateListing: function(id){
    return axios.put("/api/updateListing" + id, listingData)
  },
  deleteListing: function(id){
    return axios.delete("api/deleteListing" +id, listingData)
  },

}