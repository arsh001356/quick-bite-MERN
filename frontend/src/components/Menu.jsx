import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
const menuItems = [
    { id: 'all', label: 'All' },
    { id: 'burger', label: 'Burger' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'fries', label: 'Fries' },
];

const foodItems = [
    {
        category: 'pizza',
        image: '/images/f1.png',
        name: 'Margherita Pizza',
        description: 'A classic Italian pizza topped with fresh tomato sauce, mozzarella cheese, and fragrant basil leaves. Simple, yet incredibly delicious.',
        price: '₹300',
    },
    {
        category: 'burger',
        image: '/images/f2.png',
        name: 'Classic Cheeseburger',
        description: 'A juicy beef patty grilled to perfection, topped with melted cheddar cheese, crisp lettuce, ripe tomato, and our signature burger sauce, all nestled in a toasted sesame seed bun.',
        price: '₹350',
    },
    {
        category: 'pizza',
        image: '/images/f3.png',
        name: 'Pepperoni Pizza',
        description: 'A crowd favorite! This pizza features a generous layer of savory pepperoni slices on top of our signature tomato sauce and melted mozzarella cheese.',
        price: '₹500',
    },
    {
        category: 'pasta',
        image: '/images/f4.png',
        name: 'Fettuccine Alfredo',
        description: 'Tender fettuccine pasta coated in a rich and creamy Alfredo sauce, made with butter, Parmesan cheese, and a touch of cream. Garnished with fresh parsley.',
        price: '₹370',
    },
    {
        category: 'fries',
        image: '/images/f5.png',
        name: 'Crispy French Fries',
        description: 'Perfectly golden and crispy French fries, seasoned with just the right amount of salt. A classic side dish that complements any meal.',
        price: '₹200',
    },
    {
        category: 'pizza',
        image: '/images/f6.png',
        name: 'Vegetarian Pizza',
        description: 'A delightful vegetarian option loaded with fresh vegetables such as bell peppers, onions, mushrooms, olives, and tomatoes, on a bed of tomato sauce and melted mozzarella.',
        price: '₹300',
    },
    {
        category: 'burger',
        image: '/images/f7.png',
        name: 'Bacon Cheeseburger',
        description: 'Take our classic cheeseburger and add crispy bacon for an extra layer of smoky flavor. A truly satisfying burger experience.',
        price: '₹250',
    },
    {
        category: 'burger',
        image: '/images/f8.png',
        name: 'Double Cheeseburger',
        description: 'For the serious burger lover! This double cheeseburger features two juicy beef patties, double the cheese, and all the classic toppings.',
        price: '₹199',
    },
    {
        category: 'pasta',
        image: '/images/f9.png',
        name: 'Spaghetti Carbonara',
        description: 'A Roman classic! Spaghetti tossed in a creamy sauce made with eggs, Pecorino Romano cheese, guanciale (or pancetta), and black pepper.',
        price: '₹399',
    },
];



function Menu() {
    const [activeCategory, setActiveCategory] = useState('all');

    const handleClick = (category) => {
        setActiveCategory(category);
    };

    const filteredItems = activeCategory === 'all' ? foodItems : foodItems.filter(item => item.category === activeCategory);

    return (
        <div className='w-full h-auto mb-20 mt-10 bg-white'>
            <div className="w-full h-auto bg-white flex flex-col items-center">
                <h1 className="font-bold text-4xl italic text-slate-800">Our Menu</h1>
                <div className="border-b-4 rounded-lg border-yellow-500 w-20 my-1"></div>
            </div>
            <div className='w-full flex justify-center items-center my-20'>
                <ul className='w-full flex justify-center items-center text-lg'>
                    {menuItems.map(item => (
                        <li
                            key={item.id}
                            className={`px-6 py-1 rounded-3xl hover:cursor-pointer ${activeCategory === item.id ? 'text-white bg-slate-800' : 'text-black bg-white'}`}
                            onClick={() => handleClick(item.id)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="bg-white w-full min-h-[62vh]">
                <div className="flex justify-evenly w-full mt-10 flex-wrap gap-8">
                    {filteredItems.map((food, index) => (
                        <div key={index} className="w-[23rem] h-[26rem] bg-slate-800 rounded-xl flex flex-col items-center overflow-hidden hover:shadow-2xl shadow-black transition delay-150 duration-300 ease-in-out">
                            <div className="bg-gray-200 w-full h-[50%] flex flex-col items-center justify-center rounded-bl-3xl">
                                <img className="h-40" src={food.image} alt={food.name} />
                            </div>
                            <div className="text-white flex flex-col flex-wrap my-6 mx-5">
                                <h1 className="text-3xl my-2 font-bold">{food.name}</h1>
                                <p>{food.description}</p>
                                <div className="font-semibold text-lg flex justify-between items-center mt-8">
                                    <p>{food.price}</p>
                                    <a href="/booktable" className="w-10 h-10 bg-yellow-500 rounded-full self-end hover:bg-orange-500 flex justify-center items-center">
                                        <FaShoppingCart />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;