const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcryptjs');

const User = sequelize.define('User', {
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user','admin','pupil'),
        defaultValue: 'admin',
    },
},{
    hooks:{
        beforeCreate: async (user) => {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        },
    }
});

module.exports = User

/*
Ushbu kod User modelini Sequelize yordamida ta'riflaydi. Modelda username, email, password, va role xossalari mavjud. 
beforeCreate hook yordamida yangi foydalanuvchi yaratilishidan oldin parol hash qilinadi, bu foydalanuvchi xavfsizligini ta'minlaydi. 
Model eksport qilinadi va boshqa joylarda foydalanish uchun tayyor bo'ladi.
*/