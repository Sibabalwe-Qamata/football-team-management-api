import express from 'express';

import {
    createTeamController,
    linkTeamToStadium,
} from '../controllers/team-controller';


const router = express.Router()
router.post('/create', createTeamController)
router.post('/link/stadium', linkTeamToStadium)


export default router;