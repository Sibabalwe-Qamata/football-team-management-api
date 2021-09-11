import { assert, object, string, number } from 'superstruct';
/**
 * Create a player controller
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param  {express.NextFunction} next
 */

export const createPlayerController = async(req: any, res: any, next: any) =>{
    try {
    assert(req.player, object({ id: string() }));
    assert(
      req.body,
      object({
        id: string(),
        id_team:string(),
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