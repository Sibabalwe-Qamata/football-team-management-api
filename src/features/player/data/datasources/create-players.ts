import { assert, number} from 'superstruct';

import  randomstring  from 'randomstring';


/**
 * Create a players of the same team 
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const createPlayers = async(team_id:number, players:any[]): Promise<any> =>{
    try {
    assert(team_id,number());
   
    // To-do : DB insertion and data validation  
    
    players.forEach((player)=> 
    player.player_id = randomstring.generate());

    return players
    } catch (error) {
        throw error;
    }

};