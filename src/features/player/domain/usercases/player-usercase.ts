import { Player } from "../entities/player-entity";
import { PlayerRepository } from "../repositories/player-repository";

interface PlayerUsecase {
    CreatePlayer(team_id:number, player:any): Promise<Player>;
    CreatePlayers(team_id:number, players:any[]): Promise<Player>;
    EditPlayerTeam(team_id:number, player_id:string):Promise<Player>;
    EditPlayer(player_id:string, player:any):Promise<Player>;
    GetPlayer(player_id:string):Promise<Player>;
}

export class PlayerUsecaseImplementation implements PlayerUsecase{
    playerRepository : PlayerRepository;

    constructor(or:PlayerRepository){
        this.playerRepository = or;
    }


    /**
     * Create player
     */

     CreatePlayer(team_id:number,player:any):Promise<Player>{
        return this.playerRepository.CreatePlayer(team_id,player);
     }


     /**
      * Create players
      */

     CreatePlayers(team_id:number, players : any[]):Promise<Player>{
         return this.playerRepository.CreatePlayers(team_id, players);
     }

     /**
      * Edit player team
      */

     EditPlayerTeam(team_id:number, player_id:string):Promise<Player>{
        return this.playerRepository.EditPlayerTeam(team_id, player_id);
     }

     /**
      * Edit player
      */
      EditPlayer(player_id:string, player:any):Promise<Player>{
        return this.playerRepository.EditPlayer(player_id, player);
      }

    /**
     * Get player
     */
     GetPlayer(player_id:string):Promise<Player>{
         return this.playerRepository.GetPlayer(player_id);
     }
     

}