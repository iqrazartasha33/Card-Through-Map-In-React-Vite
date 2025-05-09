import React from 'react';
import './App.css';

function App() {
  const array = [
    { id: 1, imgSrc: '/burger.jpg', name: 'Burger', price: '$2.00', alt: 'Delicious Burger' },
    { id: 2, imgSrc: '/pizza.jpg', name: 'Pizza', price: '$3.00', alt: 'Cheesy Pizza' },
    { id: 3, imgSrc: '/roll.webp', name: 'Roll', price: '$1.50', alt: 'Spicy Roll' },
    { id: 4, imgSrc: '/momos.jpg', name: 'Momos', price: '$2.50', alt: 'Steamed Momos' },
    { id: 5, imgSrc: '/sandwich.jpg', name: 'Sandwich', price: '$1.75', alt: 'Fresh Sandwich' },
    { id: 6, imgSrc: '/chaat.webp', name: 'Chaat', price: '$2.20', alt: 'Spicy Chaaat' },
    { id: 7, imgSrc: '/biryani.webp', name: 'Biryani', price: '$4.00', alt: 'Flavourful Biryani' },
    { id: 8, imgSrc: '/malai tikka boti.avif', name: 'Malai Tikka Boti', price: '$3.00', alt: 'Grilled Malai Tikka Boti' },
    { id: 9, imgSrc: '/seekh kabab.jpg', name: 'Seekh Kabab', price: '$3.50', alt: 'Juicy Seekh Kabab' }
  ];

  return (
    <>
      <h1 className="heading">Display Cards Through Map in React!</h1>

      <div className="card-container">
        {array.map(item => (
          <div
            key={`card-${item.id}`}
            className="card"
          >
            <img
              src={item.imgSrc}
              alt={`Card Image ${item.id}`}
              className="card-image"
            />
            <h2 className="card-title">{item.name}</h2>
            <p className="card-price">{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
