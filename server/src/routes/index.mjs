import { Router } from "express";;
import mentorRoter from './mentor.mjs';
import authRouter from './auth-login.mjs';
import pupilRouter from './pupils.mjs';

const router = Router();

router.use('/api', mentorRoter);
router.use('/api', authRoter);
router.use('/api', pupilRoter);

export default router;
