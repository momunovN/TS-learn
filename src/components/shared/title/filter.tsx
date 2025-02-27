'use client'

import { useState } from "react";
import "../shared.css";
import { Checkbox } from "@/components/ui";
import { Button } from "@/components/ui";
import { Input } from "@/components/ui";
interface Props {
  className?: string;
}

export const Filter: React.FC<Props> = ({ className }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1950 });
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedSets, setSelectedSets] = useState<string[]>([]);

  const ingredients = [
    "сырный соус",
    "моцарелла",
    "чеснок",
    "солёные огурчики",
    "красный лук",
    "томаты",
  ];

  const typesOfDough = ["Традиционное", "Тонкое"];
  const filterSets = ["Можно собирать", "Новинки"];

  const toggleSet = (set: string) => {
    setSelectedSets((prev) =>
      prev.includes(set) ? prev.filter((i) => i !== set) : [...prev, set]
    );
  };

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient) ? prev.filter((i) => i !== ingredient) : [...prev, ingredient]
    );
  };



  const handleApplyFilters = () => {
    console.log("Примененные фильтры:", { priceRange, selectedIngredients, selectedSets });
  };

  return (
    <div className={`filter ${className}`}>
      <h3>Фильтрация</h3>
      <div className="filter-sets flex flex-col">
        {filterSets.map((set) => (
          <label key={set} htmlFor={set}>
            <Checkbox
              id={set}
              checked={selectedSets.includes(set)}
              onCheckedChange={() => toggleSet(set)}
            />
            {set}
          </label>
        ))}
      </div>

      <div className="price-range">
        <h4>Цена от и до:</h4>
        <div className="flex gap-[10px]">
          <Input
            type="number"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({ ...priceRange, min: Number(e.target.value) })
            }
            className="inp-num"
          />
          <Input
            type="number"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: Number(e.target.value) })
            }
            className="inp-num"
          />
        </div>
      </div>

      <div className="ingredients">
        <h4>Ингредиенты:</h4>
        {ingredients.map((ingredient) => (
          <label key={ingredient} htmlFor={ingredient}>
            <Checkbox
              id={ingredient}
              checked={selectedIngredients.includes(ingredient)}
              onCheckedChange={() => toggleIngredient(ingredient)}
            />
            {ingredient}
          </label>
        ))}
        <Button className="btn-view-all" >
          + Показать всё
        </Button>
      </div>

      <div className="type-of-dough">
        {typesOfDough.map((type) => (
          <label key={type} htmlFor={type}>
            <Checkbox
              id={type}
              checked={selectedIngredients.includes(type)}
              onCheckedChange={() => toggleIngredient(type)}
            />
            {type}
          </label>
        ))}
      </div>

      <Button onClick={handleApplyFilters}>Применить</Button>
    </div>
  );
};