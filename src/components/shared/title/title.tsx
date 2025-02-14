"use client"; // Убедитесь, что этот файл является клиентским компонентом

import { Button } from "@/components/ui";
import { useState } from "react";

interface Props {
  className?: string;
}

export const Title: React.FC<Props> = ({ className }) => {
  const [activeButton, setActiveButton] = useState('Все');

  const categories = [
    'Все',
    'Мясное',
    'Острое',
    'Сладкое',
    'Вегетариансие',
    'С курицей',
  ];

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <p className="title-text">Все пиццы</p>
      <div className="sort-title">
        <div className="categories">
          {categories.map((category) => (
            <Button 
              key={category} 
              variant={activeButton === category ? 'default' : 'outline'} 
              onClick={() => handleButtonClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};