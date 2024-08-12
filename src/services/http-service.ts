import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";
class HttpService{
    endpoint:string;
    requestConfig?:AxiosRequestConfig;

    constructor(endpoint:string,requestConfig?:AxiosRequestConfig){
        this.endpoint = endpoint;
        this.requestConfig = requestConfig
    }
    getAll<T>(){
    const controller = new AbortController();
    
    const request=  apiClient
    .get<T[]>(this.endpoint,{signal:controller.signal,...this.requestConfig});
    return {request,cancel:()=>controller.abort()}
    
    }
     delete(id:number){
        return apiClient
      .delete(this.endpoint + id);
     }

    // create<T>(entity:T){
    //     return apiClient
    //   .post(this.endpoint, entity)
    // }
    // update<T>(entity:T){
    //     return apiClient
    //     .patch(
    //       this.endpoint + "/"+ entity.id,
    //       entity
    //     )
    // }


}

const create = (endpoint:string,requestConfig?:AxiosRequestConfig) => new HttpService(endpoint,requestConfig);
export default create;