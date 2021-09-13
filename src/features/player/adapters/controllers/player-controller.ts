import { assert, object, string, number, array } from 'superstruct';
import { PlayerRepositoryImplementation } from '../../data/repositories/player-repository-implementation';
import { PlayerUsecaseImplementation } from '../../domain/usercases/player-usecase';

/**
 * Create a player controller
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

export const createPlayerController = async(req: any, res: any, next: any) =>{
    try {
    const { team_id , name, surname, height, position } = req.body;
  
    const player = {
        name: name,
        surname: surname,
        height : height,
        position : position
    }
    const playerRepository = new PlayerRepositoryImplementation();
    const playerUsecase = new PlayerUsecaseImplementation(playerRepository)

    const result = await playerUsecase.CreatePlayer(team_id, player)

    res.json(result)
    } catch (error) {
        next(error)
    }

};


/**
 * Create players controller
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const createPlayersController = async(req: any, res: any, next: any) =>{
    try {
    assert(
      req.body,
      object({
        team_id:number(),
        players : array()
      })
    );

    const { team_id , players } = req.body;

    const playerRepository = new PlayerRepositoryImplementation();
    const playerUsecase = new PlayerUsecaseImplementation(playerRepository)

    const result = await playerUsecase.CreatePlayers(team_id, players)

    res.json(result)

    } catch (error) {
        next(error)
    }

};
/**
 * Edit a player controller
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const editPlayerController = async(req: any, res: any, next: any) =>{
    try {
    assert(req.params, object({ player_id: string()}));
    assert(
      req.body,
      object({
        name: string(),
        surname: string(),
        height: string(),
        position:number(),
      })
    );

    const player_id = req.params;
    const player = req.body;
    const playerRepository = new PlayerRepositoryImplementation();
    const playerUsecase = new PlayerUsecaseImplementation(playerRepository)

    const result = await playerUsecase.EditPlayer(player_id, player)

    res.json(result)
    
    } catch (error) {
        next(error)
    }

};


/**
 * Edit a player team controller
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const editPlayerTeamController = async(req: any, res: any, next: any) =>{
    try {
    assert(req.params, object({ player_id: string()}));
    assert(
      req.body,
      object({
        team_id:number(),
      })
    );
    const { team_id } = req.body;
    const { player_id } = req.params;

    const playerRepository = new PlayerRepositoryImplementation();
    const playerUsecase = new PlayerUsecaseImplementation(playerRepository)

    const result = await playerUsecase.EditPlayerTeam(team_id, player_id)

    res.json(result)
    } catch (error) {
        next(error)
    }

};

/**
 * Get a player team
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

 export const getPlayerController = async(req: any, res: any, next: any) =>{
    try {
    assert(req.params, object({ player_id: string()}));
    const { player_id } = req.params;

    const playerRepository = new PlayerRepositoryImplementation();
    const playerUsecase = new PlayerUsecaseImplementation(playerRepository)

    const result = await playerUsecase.GetPlayer(player_id)
    
    res.json(result)

    } catch (error) {
        next(error)
    }

};