import { Player } from "../entities/player-entity";
import { PlayerRepository } from "../repositories/player-repository";

interface PlayerUsecase {
    CreatePlayer(player:any): Promise<Player>;
    CreatePlayers(players:any[]): Promise<Player>;
    EditPlayerTeam(player:any):Promise<Player>;
    EditPlayer(player:any):Promise<Player>;
    GetPlayer(player:any):Promise<Player>;
}

export class PlayerUsecaseImplementation implements PlayerUsecase{
    playerRepository : PlayerRepository;

    constructor(or:PlayerRepository){
        this.playerRepository = or;
    }


    /**
     * Create player
     */

     CreatePlayer(player:any):Promise<Player>{
        return this.playerRepository.CreatePlayer(player);
     }


     /**
      * Create players
      */

     CreatePlayers(players : any[]):Promise<Player>{
         return this.playerRepository.CreatePlayers(players);
     }

     /**
      * Edit player team
      */

     EditPlayerTeam(player:any):Promise<Player>{
        return this.playerRepository.EditPlayerTeam(player);
     }

     /**
      * Edit player
      */
      EditPlayer(player:any):Promise<Player>{
        return this.playerRepository.EditPlayer(player);
      }

    /**
     * Get player
     */
     GetPlayer(player:any):Promise<Player>{
         return this.playerRepository.GetPlayer(player);
     }
     

}