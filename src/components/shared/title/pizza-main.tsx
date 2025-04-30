"use client";

import React from "react";
import { PizzaList } from "./pizzaList";
import "./pizza.css";
import { Button } from "@/components/ui";

interface Props {
  className?: string;
}

export const PizzaMain: React.FC<Props> = ({ className }) => {
  const firstSixPizzas = PizzaList.slice(0, 6);
  return (
    <div className="pizza-cards">
      {firstSixPizzas.map((pizza, index) => (
        <div key={index} className="pizza-card">
          <div>
            <div className="pizza-img">
              <img src={pizza.imgUrl} className="pizzaImg" alt={pizza.name} />
            </div>
            <div>
              <p className="pizza-name">{pizza.name}</p>

              <p className="pizza-igredients">{pizza.ingredients.join(", ")}</p>
            </div>
          </div>
          <div className="price-btn flex">

          <p>
            от <span className="pizza-price"> {pizza.price} ₽</span>
          </p>
          <Button className="card-btn">+ Добавить</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
