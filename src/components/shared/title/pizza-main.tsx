// pages/pizzas.js
import { useEffect, useState } from 'react';

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('https://api.dodois.io/dodopizza/ru');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPizzas(data.data || []); // Предполагаем, что пиццы находятся в data.data
      } catch (error) {
        console.error('Ошибка при загрузке пицц:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Пиццы</h1>
      <ul>
        {pizzas.slice(0, 6).map((pizza) => (
          <li key={pizza.id}>{pizza.name}</li> // Предполагаем, что у пиццы есть id и name
        ))}
      </ul>
    </div>
  );
};

export default Pizzas;