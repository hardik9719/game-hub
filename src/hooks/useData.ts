import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import create from "../services/http-service";


export const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true);
      const { request, cancel } = create(endpoint).getAll<T>();
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
    }, []);
    return {data,error,isLoading};
}
export default useData;
