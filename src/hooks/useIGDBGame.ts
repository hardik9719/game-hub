import useData from "./useData";
import { Genre } from "./useGenres";
export interface Entity{
  id:number;
  type:QueryType
}
export interface Game extends Entity{

  id:number
  name: string;
  // url:string;
  genres:number[];
  platforms?:Platform[];
  storyline:string;
  cover?:{url:string};
  screenshots:string;

}
export interface Platform{
  id:number;
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


export const useIGDBGames = (filter?:Genre | null) =>{
  let queryString = "fields name,genres,platforms.name,platforms.slug,storyline,cover.url,platforms,screenshots.url;"
  if(filter){
    // const tag = filter?tagNumber(filter):''
    queryString+=`where genres = (${filter.id});`
  }
  
 return  useData<Game>('/games',{data:queryString},[filter])
}


export default useIGDBGames;