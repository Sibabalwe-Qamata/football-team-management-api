 import { Player } from "../../domain/entities/player-entity";
 import { PlayerRepository } from "../../domain/repositories/player-repository";
 import { createPlayer } from "../datasources/create-player";


export class PlayerRepositoryImplementation implements PlayerRepository{

    async CreatePlayer(team_id:number, player:any):Promise<Player>{
        try {
            const playerRef = await createPlayer(team_id, player);
            return new Player(playerRef, team_id, player)
        } catch (error) {
            throw error
        }
    }


    async CreatePlayers(players:any[]):Promise<Player>{
        try {
            return new Player("", 0, "")
        } catch (error) {
            throw error
        }
    }

    async EditPlayerTeam(player: any):Promise<Player>{
        try {
            return new Player("", 0, "") 
        } catch (error) {
            throw error
        }
    }


    async EditPlayer(player : any):Promise<Player>{
        try {
            return new Player("", 0, "")
        } catch (error) {
            throw error
        }
    }

    async GetPlayer(player:any):Promise<Player>{
        try {
            return new Player("", 0, "")
        } catch (error) {
            throw error
        }
    }

}