import { Team } from "../entities/team-entity";


export interface TeamRepository{
    CreateTeam(team:any): Promise<Team>;
    LinkTeamToStadium(team_id:number,stadium:number): Promise<Team>;
}