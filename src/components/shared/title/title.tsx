"use client"; // Убедитесь, что этот файл является клиентским компонентом

import { Button } from "@/components/ui";
import { useState } from "react";
import { ArrowDownUp } from 'lucide-react';
import '../shared.css'

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
    <div className="sort-all flex flex-col">
      <p className="title-text">Все пиццы</p>
      <div className="sort-title flex justify-between">
        <div className="categories">
          {categories.map((category) => (
            <Button 
            className="btn-sort"
              key={category} 
              variant={activeButton === category ? 'default' : 'outline'} 
              onClick={() => handleButtonClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="sort-rating">
          <Button className="sort-btn flex gap-[10px]">
            <ArrowDownUp/>
            <span >Сортировка:</span>
            рейтингу
          </Button>
        </div>
      </div>
    </div>
  );
};