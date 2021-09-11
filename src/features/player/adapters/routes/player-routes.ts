import express from 'express';

import {
    createPlayerController,
    editPlayerController,
    editPlayerTeamController,
    getPlayerController
} from '../controllers/player-controller';


const router = express.Router()
router.post('/create', createPlayerController)
router.post('/:player_id/get', getPlayerController)
router.put('/:player_id/edit', editPlayerController)
router.put('/:player_id/edit/team', editPlayerTeamController)

export default router;