const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model{}

Item.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        cost: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
    }
);

module.exports = Item;