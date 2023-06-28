import React from 'react';
import { Link } from 'react-router-dom';
import cookiesImage from '../images/cookies.jpg';
import drinksImage from '../images/drinks.jpg';
import pastaImage from '../images/pasta.jpg';
import vendingMachineImage from '../images/vending-machine.jpg';

const VendingMachine = () => {
  return (
    <div className="vending-machine-container">
    <h1>Vending Machine</h1>
    <div className="vending-machine">
      <img src={vendingMachineImage} alt="Vending Machine" className="vending-machine-image" />
      <ul className="snacks-list">
        <li>
          <Link to="/snack1">
            <img src={cookiesImage} alt="Cookies" className="snack-image" />
            <span>Cookies</span>
          </Link>
        </li>
        <li>
          <Link to="/snack2">
            <img src={drinksImage} alt="Drinks" className="snack-image" />
            <span>Drinks</span>
          </Link>
        </li>
        <li>
          <Link to="/snack3">
            <img src={pastaImage} alt="Pasta" className="snack-image" />
            <span>Pasta</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default VendingMachine;