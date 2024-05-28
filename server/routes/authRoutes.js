const express = require('express');
const authController = require('../controllers/AuthController');
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/users',authController.getAllUsers);
router.delete('/users/:id',authController.deleteUser)

module.exports = router;

/*
Ushbu kodda Express.js yordamida foydalanuvchilarni ro'yxatdan o'tkazish, kirish va 
profil ma'lumotlarini olish uchun marshrutlar aniqlangan. Marshrutlar tegishli kontrol funksiyalariga yo'naltirilgan va profil ma'lumotlarini 
olish marshrutida autentifikatsiya va avtorizatsiya middleware funksiyasi qo'llanilgan.
*/