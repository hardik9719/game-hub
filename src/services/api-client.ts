import axios, {CanceledError} from "axios";
export default axios.create({
    baseURL:"https://free-to-play-games-database.p.rapidapi.com/api",
    headers:{
        "x-rapidapi-key":"0bc73958c3msha92a3ec7aa9ad6dp1730fbjsnab4bc79bbd0a",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    }
})

// export default axios.create({
//     baseURL:"https://api.mobygames.com/v1",
//     params:{
//         'api_key':'moby_Q7ndcibdGRygIJvmV3WsIxCwJun'
//     }
// })
// const igdb =  axios.create({
//     baseURL:"https://api.igdb.com/v4",
//     headers:{
//         'Client-ID':"nz6zfkre0wra9k6hgecit3sjo77hkv"
//     },
//     params:{
        
//     }
// })
export {CanceledError}
