import { Router } from 'express';
import mentorRouter from './mentor.mjs';
// import authRouter from '/auth.route.mjs';
import pupilRouter from './pupil.route.mjs'


const router = Router();

router.use('/api', mentorRouter);
// router.use('/api', authRouter);
router.use('/api', pupilRouter);

export default router;