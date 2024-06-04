const { Router } = require('express');
const mentorController = require('../controllers/mentorController')


const router = Router();

router.post('./create-mentor', mentorController.createMentor);
router.get ('./mentor/:id', mentorController.getMentor);
router.put ('./update-mentor/:id', mentorController.updateMentor);
router.delete('./delete-mentor/:id', mentorController.deleteMentor);

module.exports = router