import { assert, number} from 'superstruct';

/**
 * Create a players of the same team 
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const editPlayerTeam = async(team_id:number, player_id:string): Promise<any> =>{
    try {
    assert(team_id,number());
   
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
        db_player.team_id = team_id;
    }
    return db_player
    } catch (error) {
        throw error;
    }

};