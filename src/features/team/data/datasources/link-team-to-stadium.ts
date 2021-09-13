import { assert, number} from 'superstruct';

/**
 * Link team to stadium
 */

 export const linkTeamToStadium = async(team_id:number, stadium_id:number): Promise<any> =>{
    try {
    assert(team_id,number());
    assert(stadium_id,number());
   
    // To-do : DB update and data validation  
    const db_team = {
        "team_id": 546516,
        "name": "Bafana Bafana",
        "location": "South Africa",
        "headcoach": "Hugo Broos",
        "founded":  "1991-06-11T14:15:48+02:00",
        "stadium_id":135
      }

    if(db_team.team_id === team_id){
        db_team.stadium_id =stadium_id;
    }
    return db_team
    } catch (error) {
        throw error;
    }

};