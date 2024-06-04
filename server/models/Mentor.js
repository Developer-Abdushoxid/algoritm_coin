const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Mentor = sequelize.define('Mentor',{
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    role: {
       type:DataTypes.ENUM('mentor','admin','pupil'),
       defaultValue: 'mentor'
    },
    route: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});
module.exports = Mentor;