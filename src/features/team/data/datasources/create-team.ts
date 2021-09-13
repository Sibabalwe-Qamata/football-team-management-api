
import  randomstring  from 'randomstring';
/**
 * Create a team 
 */
 export const createTeam = async(team:any): Promise<any> =>{
    try {
    
    const teamRef = randomstring.generate({
        length:6,
        charset:'numeric'
    });
    // To-do : DB insertion 
    
    return parseInt(teamRef);
    } catch (error) {
        throw error;
    }

};