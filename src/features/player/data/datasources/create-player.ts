// import { assert, object, string, number} from 'superstruct';

import  randomstring  from 'randomstring';


// const _player = object({
//     team_id:string(),
//         name: string(),
//         surname: string(),
//         height: number(),
//         position:number()
// })

/**
 * Create a player 
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const createPlayer = async(team_id:number, player:any): Promise<any> =>{
    try {
    // assert(
    // _player,
    // player
    // );
    
    const playerRef = randomstring.generate();
    // To-do : DB insertion 
    

    return playerRef
    } catch (error) {
        throw error;
    }

};