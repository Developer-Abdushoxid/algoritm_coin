const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;


/*
yuqoridagi kodlar xulosa shuki 
.env faylida saqlangan ma'lumotlar bazasi  URL orqali PostgreSQL ma'lumotlar
bazasiga ulanish uchun Sequelize instansiyasini yaratadi va bu instansiya boshqa fayllarda ishlatish uchun 
eksport qiladi
*/