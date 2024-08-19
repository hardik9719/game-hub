import { useEffect } from "react";
import apiClient from "../services/api-client";
import { useIGDBGames } from "../hooks/useIGDBGame";
export const IGDBView = () => {
    const {data} = useIGDBGames('fields name; limit 10;');
    console.log(data);
  return <div>IGDBView</div>;
};
