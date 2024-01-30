import { useEffect, useState } from 'react';

const UseProductsHook = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData =  () => {
      try {
        const response = fetch ('http://localhost:5000/allproducts');
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Handle error, show error message, etc.
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [product, loading];
};

export default UseProductsHook;
