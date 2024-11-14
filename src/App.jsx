import React, { useState } from 'react';
import Header from './Header';
import Post from './Post';
import SignUpForm from './SignUpForm';
import ShoppingCart from './ShoppingCart';
import './App.css';

import cycleImage from '../images/cycle.jpg';

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const items = [
    { name: 'Kettle', price: 800, imageURL: '../images/kettle.jpg', starRating: 4, description: '1 litre kettle can be used for boiling water and even cooking those late night snacks' },
    { name: 'Umbrella', price: 600, imageURL: '../images/umbrella.jpg', starRating: 4, description: '3 fold umbrealla which can be easily carried along your books. The gring never stops, even in monsoon' },
    { name: 'Cycle', price: 7000, imageURL: cycleImage, starRating: 4, description: 'Gear firefox cycle. Used for 2 years. Good condition.' },
    { name: 'Mattress', price: 4500, imageURL: '../images/mattress.jpg', starRating: 4, description: 'Sleepwell mattress' },
    { name: 'Mouse pad', price: 200, imageURL: '../images/mousePad.jpg', starRating: 4, description: 'Redgear pad used for 2 years.' },
    { name: 'Extender', price: 350, imageURL: '../images/extender.jpg', starRating: 4, description: 'Got an extra one by mistake' },
    { name: 'Iron', price: 1200, imageURL: '../images/iron.jpg', starRating: 4, description: 'Warden is not allowing to keep it in my room. Works great' },
    { name: 'Calculator', price: 750, imageURL: '../images/calculator.jpg', starRating: 4, description: 'Casio scientific calculator' },
    { name: 'Charger', price: 900, imageURL: '../images/charger.jpg', starRating: 4, description: 'USB-c type 65 watt charger samsung' },
    { name: 'Shoes', price: 80000, imageURL: '../images/shoes.jpg', starRating: 4, description: 'Adidas air size 11 (80000 ke shoes tera ghar jayega)' },
    { name: 'Bag', price: 2300, imageURL: '../images/bag.jpg', starRating: 4, description: 'Wildcraft bag comes with raincover and charging ports' },
    { name: 'Bottle', price: 650, imageURL: '../images/bottle.jpg', starRating: 4, description: 'Stainless steel 1L water bottle' }
  ];

  const toggleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      <Header onCartClick={() => setIsCartOpen(true)} onJoinUsClick={toggleSignUp} />
      {isSignUpOpen && <SignUpForm onClose={() => setIsSignUpOpen(false)} />}
      <h1 className='top-products'>Top products...</h1>
      <div className="posts-container">
        {items.map((item, index) => (
          <Post
            key={index}
            name={item.name}
            price={item.price}
            starRating={item.starRating}
            description={item.description}
            imageURL={item.imageURL}
            onAddToCart={() => addToCart(item)} // Pass addToCart function as prop
          />
        ))}
      </div>
      {isSignUpOpen && <SignUpForm onClose={() => setIsSignUpOpen(false)} />}
      {isCartOpen && (
        <ShoppingCart
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => { /* Handle checkout logic */ }}
          removeFromCart={(index) => {
            const updatedCart = [...cartItems];
            updatedCart.splice(index, 1);
            setCartItems(updatedCart);
          }}
        />
      )}
    </>
  );
}

export default App;
