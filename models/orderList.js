const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderList extends Model {}

    OrderList.init({
        OrderId: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        DishId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    },
    {
        sequelize,
    },
    
)

module.exports = OrderList;