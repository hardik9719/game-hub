import axios from "axios";
import create, { Entity } from "./http-service";
export interface Game extends Entity{
    title: string;
  }
// export interface AccessToken{
//     access_token:string,
//     expires_in:number,
//     token_type:string
//   }
//  export const getToken = ()=> {
//   return axios.post<AccessToken>("https://id.twitch.tv/oauth2/token", {
//   client_id: "nz6zfkre0wra9k6hgecit3sjo77hkv",
//   client_secret:"r5192bua37c9bzjfnjiij4gha48qmq",
//   grant_type:'client_credentials'
// })}

export default create('/games');