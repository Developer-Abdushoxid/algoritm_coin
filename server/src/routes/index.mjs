import { Router } from 'express';
import mentorRouter from './mentor.mjs';
// import authRouter from '/auth-login.mjs';
// import pupilRouter from './pupils.mjs'


const router = Router();

router.use('/api', mentorRouter);
// router.use('/api', authRouter);
// router.use('/api', pupilRouter);

export default router;