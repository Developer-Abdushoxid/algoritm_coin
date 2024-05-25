const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = (userId) => {
    return jwt.sign({ id: userId}, process.env.JWT_SECRET,{
        expiresIn: '1h',
    });
};

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

/*
Ushbu kodlar JWT yaratish va tekshirish uchun yordamchi funksiyalarni ta'riflaydi. generateToken funksiyasi foydalanuvchi
 identifikatori asosida JWT yaratadi va 1 soat muddat bilan amal qiladi. verifyToken funksiyasi berilgan tokenni tekshiradi va uni dekodlaydi. 
 JWT yaratish va tekshirishda ishlatiladigan maxfiy kalit .env faylidan olinadi, bu esa maxfiy ma'lumotlarni kodda ochiq holda saqlamaslikka imkon beradi.
*/