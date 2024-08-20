import useData from "./useData";
import { Platform } from "./useIGDBGame";

const usePlatforms = () => useData<Platform>('/platform_families',{data:"fields *;"})
export default usePlatforms;