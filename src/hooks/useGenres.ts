import { Entity } from "./useIGDBGame";
import genres from '../data/genre'
export interface Genre extends Entity{
  name: string;
  slug:string;
}

export const useGenres = () => ({data:genres,isLoading:false,error:null})
export default useGenres;
