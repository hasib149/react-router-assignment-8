import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      axios("../data.json")
        .then((data) => setProducts(data.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 300);
    return () => {
      clearTimeout(delay);
    };
  }, []);

  return { products, loading, error };
};

export default useProduct;
