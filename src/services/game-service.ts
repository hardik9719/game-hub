import create, { Entity } from "./http-service";
export interface Game extends Entity{
    title: string;
    thumbnail:string;
    game_url:string;
    genre:string;
    platform:string;
    freetogame_profile_url:string;
    short_description:string;

}

export default create('/games');