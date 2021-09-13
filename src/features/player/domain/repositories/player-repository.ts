import { Player } from "../entities/player-entity";


export interface PlayerRepository{
    CreatePlayer(team_id:number,player:any): Promise<Player>;
    CreatePlayers(team_id:number,players:any[]): Promise<Player>;
    EditPlayerTeam(team_id:number, player_id:string):Promise<Player>;
    EditPlayer(player_id:string, player:any):Promise<Player>;
    GetPlayer(player_id:string):Promise<Player>;
}