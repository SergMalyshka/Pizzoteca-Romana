const Item = require('./item');
const Order = require('./order');
const Customer = require('./customer')
const OrderList = require('./orderList')

Customer.hasMany(Order);
Order.belongsTo(Customer)

Order.belongsToMany(Item, {
    through: OrderList,
});

Item.belongsToMany(Order, {
    through: OrderList,
});

module.exports = {
    Order,
    Item,
    Customer,
    OrderList
}