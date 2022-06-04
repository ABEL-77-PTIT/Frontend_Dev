import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
  // baseURL: "http://www.omdbapi.com/?i=tt3896198&apikey=c66a6263",
});
