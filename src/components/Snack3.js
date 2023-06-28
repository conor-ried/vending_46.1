import React from 'react';
import { Link } from 'react-router-dom';
import pastaImage from '../images/pasta.jpg';
import './VendingMachine.css';
import useSnackCounter from '../hooks/useSnackCounter';

const Snack3 = () => {
  const [numSnacks, snackImages, addSnack] = useSnackCounter();;
  return (
    <div>
      <h1>Cookies</h1>
      {snackImages.map((image, index) => (
        <img src={image} alt={`Snack ${index + 1}`} key={index} className="image" />
      ))}
      <p>This is the Cookies page.</p>
      <p>Number of Cookies: {numSnacks}</p>
      <button onClick={() => addSnack(pastaImage)}>Add more Cookies</button>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
};

export default Snack3;