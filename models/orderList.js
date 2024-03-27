const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderList extends Model {}

    OrderList.init({
        OrderId: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        ItemId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize,
    },
    
)

module.exports = OrderList;