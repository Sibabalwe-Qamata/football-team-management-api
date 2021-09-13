import express from 'express';

import {
    createTeamController,
    linkTeamToStadiumController,
} from '../controllers/team-controller';


const router = express.Router()
router.post('/create', createTeamController)
router.post('/link/stadium', linkTeamToStadiumController)


export default router;