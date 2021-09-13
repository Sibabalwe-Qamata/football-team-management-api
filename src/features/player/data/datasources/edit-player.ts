import { assert, string} from 'superstruct';

/**
 * Create a players of the same team 
 */

 export const editPlayer = async(player_id:string, player:any): Promise<any> =>{
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
        db_player.position = player.position;
        db_player.surname = player.surname;
        db_player.name = player.name;
    }
    return db_player
    } catch (error) {
        throw error;
    }

};