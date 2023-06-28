import React from 'react';
import { Link } from 'react-router-dom';
import cookiesImage from '../images/cookies.jpg';
import './styles.css'; // Import the CSS file
import useSnackCounter from '../hooks/useSnackCounter';

const Snack1 = () => {
  const [numSnacks, snackImages, addSnack] = useSnackCounter();;
  return (
    <div>
      <h1>Cookies</h1>
      {snackImages.map((image, index) => (
        <img src={image} alt={`Snack ${index + 1}`} key={index} className="image" />
      ))}
      <p>This is the Cookies page.</p>
      <p>Number of Cookies: {numSnacks}</p>
      <button onClick={() => addSnack(cookiesImage)}>Add more Cookies</button>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
};

export default Snack1;