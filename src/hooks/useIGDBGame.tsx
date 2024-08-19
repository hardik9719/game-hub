import useData from "./useData";
export interface Game{
    id:number
    name: string;
  
  }
export const useIGDBGames = (body:string | null) =>useData<Game>('/games',{data:body})
export default useIGDBGames;