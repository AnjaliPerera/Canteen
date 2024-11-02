import React from 'react';
import OrderItem from '../OrderItem/OrderItem';
import './OrderList.css';

const OrderList = ({ mealType }) => {
    const orders = [
        { name: "Dhal Curry and Bread", quantity: 4, image:"dhal-curry-and-bread.jpeg" },
        { name: "String Hopper", quantity: 8, image:"string-hoppers.jpg" },
        { name: "Noodles", quantity: 6, image:"noodles.jpeg" },
        { name: "Rice and Curry", quantity: 7, image:"rice-and-curry.jpeg" },
        { name: "Chicken Potion", quantity: 2, image:"chicken-potion.jpeg"},
        { name: "Sausage", quantity: 3, image:"sausages.jpg" },
        { name: "Boiled Egg", quantity: 6, image:"boiled-egg.jpg" },
        { name: "Fried Egg", quantity: 3, image:"fried-egg.jpeg" }
    ];

    return (
        <div className="order-list">
            <h2>Order List</h2>
            {/* Meal type heading */}
            <div className="meal-type">
                <h3>{mealType}</h3> {/* Display the selected meal type */}
                <h4>Quantity</h4>
                {/* Display orders */}
                {orders.map((order, index) => (
                    <OrderItem key={index} order={order} />
                ))}
            </div>
        </div>
    );
};

export default OrderList;
