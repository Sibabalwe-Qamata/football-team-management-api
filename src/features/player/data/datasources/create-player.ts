import { assert, number} from 'superstruct';

import  randomstring  from 'randomstring';

/**
 * Create a player 
 */

 export const createPlayer = async(team_id:number, player:any): Promise<any> =>{
    try {
    assert(team_id, number());
    
    const playerRef = randomstring.generate();
    // To-do : DB insertion 
    
    return playerRef
    } catch (error) {
        throw error;
    }

};