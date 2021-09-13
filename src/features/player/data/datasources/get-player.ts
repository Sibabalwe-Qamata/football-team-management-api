import { assert, string} from 'superstruct';

/**
 * Create a players of the same team 
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const getPlayer = async(player_id:string): Promise<any> =>{
    try {
    assert(player_id,string());
   
    // To-do : DB update and data validation  
    const db_player = {
        "player_id": "Z9lak8ZOXUaGnDpjFUnyQ3l3bil9FWsi",
        "team_id": 546516,
        "name": "Leaonado",
        "surname": "Messi",
        "height": 123,
        "position": 7
      }

    if(db_player.player_id === player_id){
        return db_player;
    }
    else{
        return {  
        "player_id": " ",
        "team_id": 0,
        "name": "",
        "surname": "",
        "height": 0,
        "position":0}
    }
   
    } catch (error) {
        throw error;
    }

};