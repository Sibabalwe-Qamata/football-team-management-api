 import { Player } from "../../domain/entities/player-entity";
 import { PlayerRepository } from "../../domain/repositories/player-repository";
 import { createPlayer } from "../datasources/create-player";
import { createPlayers } from "../datasources/create-players";
import { editPlayer } from "../datasources/edit-player";
import { editPlayerTeam } from "../datasources/edit-player-team";
import { getPlayer } from "../datasources/get-player";


export class PlayerRepositoryImplementation implements PlayerRepository{

    async CreatePlayer(team_id:number, player:any):Promise<Player>{
        try {
            const playerRef = await createPlayer(team_id, player);
            return new Player(playerRef, team_id, player)
        } catch (error) {
            throw error
        }
    }


    async CreatePlayers(team_id:number, players:any[]):Promise<Player>{
        try {
            const result = await createPlayers(team_id, players)
            return result.map((player:any) => new Player(player.player_id,team_id, player));
        } catch (error) {
            throw error
        }
    }

    async EditPlayerTeam(team_id:number, player_id:string):Promise<Player>{
        try {
            const result = await editPlayerTeam(team_id, player_id)
            return new Player(player_id, team_id, result) 
        } catch (error) {
            throw error
        }
    }


    async EditPlayer(player_id:string, player:any):Promise<Player>{
        try {
            const result = await editPlayer(player_id, player);
            return new Player(player_id,result.team_id, result)
        } catch (error) {
            throw error
        }
    }

    async GetPlayer(player_id:string):Promise<Player>{
        try {
            const result = await getPlayer(player_id);
            return new Player(player_id, result.team_id, result)
        } catch (error) {
            throw error
        }
    }

}