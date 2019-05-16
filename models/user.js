const Sequelize = require('sequelize');
const db = require('../config/database');
const User = db.define('User',{
    // id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    username: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: false
      },
      address: {
        type: Sequelize.STRING(256),
        allowNull: true,
        unique: false
      },
      phone: {
        type: Sequelize.STRING(10),
        allowNull: false,
        
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type:Sequelize.INTEGER,
        allowNull: false,
      }
     
 });
 module.exports = User;