import { useState } from 'react';

const useSnackCounter = () => {
  const [count, setCount] = useState(1);
  const [snackImages, setSnackImages] = useState([]);

  const addSnack = (image) => {
    setCount(count + 1);
    setSnackImages([...snackImages, image]);
  };

  return [count, snackImages, addSnack];
};

export default useSnackCounter;