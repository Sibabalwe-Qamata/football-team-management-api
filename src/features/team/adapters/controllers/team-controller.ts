import { TeamRepositoryImplementation } from "../../data/repositories/team-repository-implementation";
import { TeamUsecaseImplementation } from "../../domain/usecases/team-usecase";

/**
 * Create team controller
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const createTeamController = async(req: any, res: any, next: any) =>{
    try {
    const { team } = req.body;

    const teamRepository = new TeamRepositoryImplementation();
    const teamUsecase = new TeamUsecaseImplementation(teamRepository);

    const result = await teamUsecase.CreateTeam(team);
    
    res.json(result)
    } catch (error) {
        next(error)
    }

};


/**
 * Link team to a stadium controller
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const linkTeamToStadiumController = async(req: any, res: any, next: any) =>{
    try {
        const { team_id , stadium_id } = req.params;

        const teamRepository = new TeamRepositoryImplementation();
        const teamUsecase = new TeamUsecaseImplementation(teamRepository);

        const result = await teamUsecase.LinkTeamToStadium(parseInt(team_id),parseInt(stadium_id ));
    
        res.json(result)
    } catch (error) {
        next(error)
    }

};