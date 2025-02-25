"use client";
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
  const ingredients = [
    "сырный соус",
    "моцарелла",
    "чеснок",
    "солёные огурчики",
    "красный лук",
    "томаты",
  ];

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((i) => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleApplyFilters = () => {
    console.log("Примененные фильтры:", { priceRange, selectedIngredients });
  };

  return (
    <div className={`filter ${className}`}>
      <h3>Фильтрация</h3>
      <div className="filter-1 flex flex-col">
        <label htmlFor="collectible">
          <Checkbox id="collectible" checked={false} onChange={() => {}} />
          Можно собирать
        </label>
        <label htmlFor="new">
          <Checkbox id="new" checked={false} onChange={() => {}} />
          Новинки
        </label>
      </div>

      <div className="">
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

      <div className="flex flex-col">
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
        <Button className="btn-view-all">+ Показать всё</Button>
      </div>

      <Button onClick={handleApplyFilters}>Применить</Button>
    </div>
  );
};
