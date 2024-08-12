import axios, {CanceledError} from "axios";
export default axios.create({
    baseURL:"https://free-to-play-games-database.p.rapidapi.com/api",
    headers:{
        "x-rapidapi-key":"0bc73958c3msha92a3ec7aa9ad6dp1730fbjsnab4bc79bbd0a",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    }
})
export {CanceledError}
