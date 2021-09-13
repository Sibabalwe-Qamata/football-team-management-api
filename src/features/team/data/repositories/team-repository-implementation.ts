import { Team } from "../../domain/entities/team-entity";
import { TeamRepository } from "../../domain/repositories/team-repository";
import { createTeam } from "../datasources/create-team";
import { linkTeamToStadium } from "../datasources/link-team-to-stadium";


export class TeamRepositoryImplementation implements TeamRepository{
    async CreateTeam(team:any):Promise<Team>{
        try {
            const result = await createTeam(team);
            return new Team(result,team.stadium_id,team)
        } catch (err) {
            throw err
        }
    }

    async LinkTeamToStadium(team_id:number, stadium_id:number):Promise<Team>{
        try {
            const result = await linkTeamToStadium(team_id, stadium_id);
            return new Team(team_id,stadium_id,result)
        } catch (err) {
            throw err
        }
    }
}