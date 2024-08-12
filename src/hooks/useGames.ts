import useData from "./useData";
export interface Game{
  id:number
  title: string;
  thumbnail:string;
  game_url:string;
  genre:string;
  platform:string;
  freetogame_profile_url:string;
  short_description:string;

}

export const useGames = (selectedCategory:string | null) => useData<Game>('/games',{params:{category:selectedCategory?selectedCategory:undefined}},[selectedCategory])
export default useGames;
