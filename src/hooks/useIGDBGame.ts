import useData from "./useData";
import { Genre } from "./useGenres";
export interface Entity{
  id:number;
  type:QueryType
}
export interface Game extends Entity{

  name: string;
  // url:string;
  genres:Genre[];
  platforms?:Platform[];
  storyline:string;
  cover?:{url:string};
  screenshots:string;
  aggregated_rating:number;

}
export interface Platform extends Entity{
  name:string;
  slug:string;
}
interface Cover extends Entity{
  url:string
}
export interface Query{
  entity:Entity;
  queryType:QueryType;

}
export enum QueryType{
  Theme,
  Genre,
  Keyword,
  Game,
  PlayerPerspective,
  None
}
const tagNumber = (query:Query)=>query.queryType << 28 | query.entity.id;


export const useIGDBGames = (selectedGenre?:Genre | null,selectedPlatform?:Platform | null) =>{
  let queryString = "fields name,genres.name,genres.slug,platforms.name,platforms.slug,storyline,cover.url,aggregated_rating;"
  let filters:string[] =[];
  if (selectedGenre) filters.push(`genres = ${selectedGenre.id}`);
  if (selectedPlatform) filters.push(`release_dates.platform = ${selectedPlatform.id}`);

  if (filters.length > 0) {
    queryString += " where " + filters.join(" & ")+";";
  }

  
 return  useData<Game>('/games',{data:queryString},[selectedGenre,selectedPlatform])
}


export default useIGDBGames;