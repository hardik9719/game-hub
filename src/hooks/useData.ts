import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import create from "../services/http-service";


export const useData = <T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true);
      const { request, cancel } = create(endpoint,requestConfig).postData<T>();
      request
        .then(({ data }) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
      return () => cancel();
      //optionally return to do clean up basically unsubscribe to what use effect is doing
    }, deps?[...deps]:[]);
    return {data,error,isLoading};
}
export default useData;
