import { assert, object, string, number} from 'superstruct';

/**
 * Create a player 
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const createPlayer = async(player:any): Promise<any> =>{
    try {
    assert(
    player,
      object({
        team_id:string(),
        name: string(),
        surname: string(),
        height: string(),
        position:number(),
      })
    );


    // Data base insertion 
    const playerRef = "";

    return {player_id: playerRef}
    } catch (error) {
        throw error;
    }

};