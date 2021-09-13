import express from 'express';

import {
    createTeamController,
    linkTeamToStadiumController,
} from '../controllers/team-controller';


const router = express.Router()
router.post('/create', createTeamController)
router.patch('/link/:team_id/stadium/:stadium_id', linkTeamToStadiumController)


export default router;