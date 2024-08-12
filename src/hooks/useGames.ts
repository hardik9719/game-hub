import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import gameService, { Game } from "../services/game-service";

export const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      const { request, cancel } = gameService.getAll<Game>();
      request
        .then(({ data }) => {
          // console.log(data);
  
          setGames(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
          if (error instanceof CanceledError) return;
          setError(error.message);
        })
        .finally(() => setIsLoading(false));
      return () => cancel();
      //optionally return to do clean up basically unsubscribe to what use effect is doing
    }, []);
    return {games,error,isLoading, setUsers: setGames,setError};
}
export default useGames;