import { Player } from "../entities/player-entity";


export interface PlayerRepository{
    CreatePlayer(team_id:number,player:any): Promise<Player>;
    CreatePlayers(players:any[]): Promise<Player>;
    EditPlayerTeam(player:any):Promise<Player>;
    EditPlayer(player:any):Promise<Player>;
    GetPlayer(player:any):Promise<Player>;
}