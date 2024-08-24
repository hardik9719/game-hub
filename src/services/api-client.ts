import axios, {CanceledError} from "axios";

const tokenData= {
  baseURL:"https://api.igdb.com/v4",
  params:{
      clientId: "nz6zfkre0wra9k6hgecit3sjo77hkv",
      clientSecret: "r5192bua37c9bzjfnjiij4gha48qmq",
      token:{
          "access_token": "c2ajx9tfczz9uvnokp1fyv1w81zsu6",
          "expires_in": 5217430,
          "token_type": "bearer"
      }
  }}
export default axios.create(
  {
      baseURL:"https://api.igdb.com/v4",
      headers:{
          "Client-ID":tokenData.params.clientId,
          "Authorization": "Bearer "+tokenData.params.token.access_token,
          "Content-Type": "application/x-www-form-urlencoded"
      }
  }
)

// export default axios.create({
//     baseURL:"https://express-proxy-3bksjzsth-hardik-tannas-projects.vercel.app",
//     headers: {
//         "Content-Type": "text/plain", // Set content type to text/plain
//       },
// })
export {CanceledError}
