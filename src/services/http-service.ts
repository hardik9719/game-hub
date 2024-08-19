import { AxiosRequestConfig } from "axios";
import apiClient from "./api-client";
class HttpService{
    endpoint:string;
    requestConfig?:AxiosRequestConfig;
    controller:AbortController = new AbortController();

    constructor(endpoint:string,requestConfig?:AxiosRequestConfig){
        this.endpoint = endpoint;
        this.requestConfig = requestConfig
    }
    getAll<T>(){
    
    const request=  apiClient
    .get<T[]>(this.endpoint,{signal:this.controller.signal,...this.requestConfig});
    return {request,cancel:()=>this.controller.abort()}
    
    }
    postData<T>(){
        const request=  apiClient
                                .post<T[]>(this.endpoint,this.requestConfig?.data,{signal:this.controller.signal,...this.requestConfig});
        return {request,cancel:()=>this.controller.abort()}
    }
     delete(id:number){
        return apiClient
      .delete(this.endpoint + id);
     }

}

const create = (endpoint:string,requestConfig?:AxiosRequestConfig) => new HttpService(endpoint,requestConfig);
export default create;