const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const User = require('../models/user');

exports.getAllUsers = async () => {
const users = await User.findAll();
return users     
}
exports.register = async (username, email, password ) => {
    const user = await User.create({ username, email, password });
    const token = jwt.generateToken(user.id);
    return {token, user}
};

exports.login = async (email, password) => {
    const user = await User.findOne({ where: { email }});
    if (!user) throw new Error('Invalid email or password');

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error('Invalid email or password');

    const token = jwt.generateToken(user.id);
    return {token, user};
};

/*
Ushbu kodda foydalanuvchilarni ro'yxatdan o'tkazish va tizimga kirishini ta'minlovchi funksiyalar aniqlangan. 
register funksiyasi yangi foydalanuvchi yaratadi va login funksiyasi foydalanuvchining email va parolini tekshiradi, 
agar ular to'g'ri bo'lsa, JWT token yaratadi. Parollarni solishtirish uchun bcrypt kutubxonasidan, token yaratish uchun esa jwt yordamchi funksiyalaridan foydalaniladi.
*/