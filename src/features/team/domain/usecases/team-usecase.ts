import { Team } from "../entities/team-entity";
import { TeamRepository } from "../repositories/team-repository";

interface TeamUsecase {
    CreateTeam(team:any): Promise<Team>;
    LinkTeamToStadium(team_id:number,stadium_id:number): Promise<Team>;
}

export class TeamUsecaseImplementation implements TeamUsecase{
    teamRepository : TeamRepository;
    constructor(or:TeamRepository){
        this.teamRepository =or;
    }

    /**
     * Create team
     */

    CreateTeam(team:any):Promise<Team>{
        return this.teamRepository.CreateTeam(team);
    }

    /**
     * Link team to stadium
     */
    LinkTeamToStadium(team_id:number, stadium_id:number){
        return this.teamRepository.LinkTeamToStadium(team_id, stadium_id);
    }
}