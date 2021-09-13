import express from 'express';

import {
    createPlayerController,
    editPlayerController,
    editPlayerTeamController,
    getPlayerController,
    createPlayersController
} from '../controllers/player-controller';


const router = express.Router()
router.post('/create', createPlayerController)
router.post('/create/many', createPlayersController)
router.get('/:player_id', getPlayerController)
router.patch('/:player_id/edit', editPlayerController)
router.patch('/:player_id/edit/team', editPlayerTeamController)

export default router;