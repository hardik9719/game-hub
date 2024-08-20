import useData from "./useData";
import { Entity } from "./useIGDBGame";
export interface Genre extends Entity{
  name: string;
  slug:string;
}

export const useGenres = (body:string | null) => useData<Genre>('/genres',{data:body},[])
export default useGenres;
