import express from 'express';

import {
    createPlayerController
} from '../controllers/player-controller';


const router = express.Router()
router.post('/create', createPlayerController)

export default router;