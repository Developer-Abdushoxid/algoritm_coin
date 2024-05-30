const User = require('../models/user'); 
const authService = require('../services/AuthService');
const { body, validationResult } = require('express-validator');


exports.getAllUsers = async (req, res) => {
try{
    const users = await authService.getAllUsers();
    if(users && users.length === 0){
        res.json({message: 'Users not found'})
    }else {
        res.status(201).json({ users });
    }
} catch( error ) {
    console.error('Error fetching users:', error);
    throw error;
}
}

exports.register = [
    body('username').isLength({min: 3}).withMessage('Enter a valid username'),
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json
        ({ errors: errors.array() });

        const { username, email, password} = req.body;
        try {
            const {user, token} = await authService.register(username, email, password);
            res.cookie('token', token, {
                maxAge:900000,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
            });
            res.status(201).json({ message: 'Registraction succesfull', user });
        } catch(err){
            res.status(400).json({ error: err.message });
        }
    }
];

exports.login = [
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').exists().withMessage('Something went wrong'),
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json
        ({ errors: errors.array() });

        const { email, password } = req.body;
        try{
            const {token, user} = await authService.login(email, password);
            res.cookie('token', token, {
                maxAge:900000,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
            });
            res.status(200).json({message: 'Login succesfull', user});
        }catch(err) {
            res.status(400).json({ error: err.message });
        }
    }
];

exports.logout = async (req, res) => {
try{
    res.clearCookie('token');
    res.status(200).json({message: 'Logout succesfull'});   
}catch(error) {
    res.status(500).json({ error: 'Error logging out'});
}
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try{
        // sequelize yordamida ma'lumot o'chirish
        await User.destroy({ where: { id }})
        res.json({ message: "Ma'lumot muvaffaqiyatli o'chirildi"})
    }catch(error) {
        // xatolik haqida ma'lumot berish
        console.error('Xatolik', error);
        res.status(500).json({ error: "Ma'lumot o'chirishda xatolik yuz berdi"})
    }
}


/*
Ushbu kodlar Express.js va express-validator kutubxonalari yordamida foydalanuvchilarni ro'yxatdan o'tkazish,
 kirish va profil ma'lumotlarini olish funksiyalarini amalga oshiradi. Har bir funksiyada ma'lumotlarni 
 tasdiqlash va xatoliklarni qayta ishlash mexanizmlari o'rnatilgan
*/