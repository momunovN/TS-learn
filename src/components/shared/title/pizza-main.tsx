"use client";

import React from "react";
import { PizzaList } from "./pizzaList";
import './pizza.css'



interface Props {
  className?: string;
}

export const PizzaMain: React.FC<Props> = ({ className }) => {
  const firstSixPizzas = PizzaList.slice(0, 6);
  return (
    <div className="pizza-cards">
      {firstSixPizzas.map((pizza, index) => (
        <div key={index} className="pizza-card">
          <div className="pizza-img">
            <img src={pizza.imgUrl} className="pizzaImg" alt={pizza.name} />
          </div>
          <div>
            <p>{pizza.name}</p>

            <p>{pizza.ingredients.join(", ")}</p>
          </div>
          <p>от <span> {pizza.price} ₽ </span></p>
        </div>
      ))}
    </div>
  );
};
