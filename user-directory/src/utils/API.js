// Import Axios to obtain outbound info
import axios from "axios";
// eslint-disable-next-line
export default {
    // Gets all users
    getUsers: function () {

        return axios.get("https://randomuser.me/api/?results=400");
    }
};