const jwt = require('../utils/jwt');

module.exports = (roles) => {
    return (req,res,next) => {
        const token = req.header('Authorization').replace('Bearer ', '');
        if(!token) return res.status(401).send('Access denied');

        try {
            const decoded = jwt.verifyToken(token);
            if(!roles.includes(decoded.role)) throw new Error();
            req.user = decoded;
            next();
        }catch (ex) {
            res.status(401).send('Invalid token');
        }
    }
};

/*
Ushbu middleware funksiyasi autentifikatsiya va avtorizatsiya uchun ishlatiladi. U tokenni Authorization headerdan oladi va jwt yordamida tekshiradi.
Agar token to'g'ri bo'lsa va foydalanuvchining roli ruxsat etilgan rollar qatorida bo'lsa, foydalanuvchi ma'lumotlarini req.user ga saqlaydi va 
keyingi middleware yoki route handlerga o'tish imkonini beradi. Aks holda, tegishli xatolik xabari bilan javob qaytariladi.
*/