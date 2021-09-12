import { assert, object, string, number, array } from 'superstruct';
import { PlayerRepositoryImplementation } from '../../data/repositories/player-repository-implemention';
import { PlayerUsecaseImplementation } from '../../domain/usercases/player-usercase';

// const _player = object({
//     team_id:string(),
    
//         name: string(),
//         surname: string(),
//         height: number(),
//         position:number()
// })

/**
 * Create a player controller
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

export const createPlayerController = async(req: any, res: any, next: any) =>{
    try {
    // assert(
    //  _player,
    //   req.body
    // );
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
 * Create a players controller
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
        team_id:string(),
        players : array()
      })
    );



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
        id_team:string(),
      })
    );


    
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
   
    } catch (error) {
        next(error)
    }

};