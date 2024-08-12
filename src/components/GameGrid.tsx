import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import gameService, {
  AccessToken,
  Game,
  getToken,
} from "../services/game-service";
import apiClient from "../services/api-client";

export const GameGrid = () => {
  const [acessToken, setAcessToken] = useState<AccessToken>();
  useEffect(() => {
    // getToken()
    //   .then(({ data }) => setAcessToken(data))
    //   .catch((err) => console.log(err));
  }, []);
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //   apiClient.interceptors.request.use(
  //     function (config) {
  //       if (!acessToken) return Promise.reject(error);
  //       config.headers["Authorization"] = "Bearer " + acessToken.access_token;
  //       config.headers["access-control-allow-origin"] = "*";

  //       return config;
  //     },
  //     function (error) {
  //       return Promise.reject(error);
  //     }
  //   );

  useEffect(() => {
    setIsLoading(true);
    console.log("sending");
    console.log(apiClient.defaults);
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    // apiClient
    //   .get("/games")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Ereror:", error);
    //   });
    // axios
    //   .post("https://api.igdb.com/v4/games", "fields name; limit 10;", {
    //     headers: {
    //       Client-ID: "nz6zfkre0wra9k6hgecit3sjo77hkv",
    //       Authorization: "Bearer " + acessToken?.access_token,
    //       Access-Control-Allow-origin: "*",
    //       Access-Control-Allow-Headers:"Origin, X-Requested-With, Content-Type, Accept",
    //     },
    //   })
    //   //   moby_Q7ndcibdGRygIJvmV3WsIxCwJun
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    const { request, cancel } = gameService.getAll<Game>();
    request
      .then(({ data }) => {
        console.log(data);

        setGames(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ee");

        console.log(JSON.stringify(error));

        if (error instanceof CanceledError) return;
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
    return () => cancel();
    //optionally return to do clean up basically unsubscribe to what use effect is doing
  }, []);
  // return {users,error,isLoading, setUsers: setGames,setError};
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}

      <button
        className="btn btn-primary mb-3"
        //   onClick={addUser}
      >
        Add User
      </button>
      <ul className="list-group">
        {games.map((g) => (
          <li
            key={g.id}
            className="list-group-item d-flex justify-content-between"
          >
            {g.title}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                // onClick={() => updateUser(u)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                // onClick={() => deleteUser(u)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
