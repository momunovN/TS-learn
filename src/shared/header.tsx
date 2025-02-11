import { Button } from "@/components/ui/button";

import "../app/globals.css";
import "./header.css";

import Image from "next/image";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="header  flex w-max">
      <div className="logo-header flex items-center ">
        <Image src="/pizza.svg" className="" width={35} height={35} alt="as" />
        <div className="logo-text">
          <p className="logo-name">NEXT PIZZA</p>
          <p className="logo-disc">вкусней уже некуда</p>
        </div>
      </div>
      <span className="flex search-inp gap-[12px] ">
        <Search className="search-icon" />
        <input
          className="header-search h-[50px] text-[#c0c0c0] text-base font-normal font-['Nunito']"
          type="text"
          placeholder="Поиск пиццы..."
        />
      </span>

      <div className="btn-cart flex ">
        <Button className="btn-header ">
          <User className="user-icon" />
          Войти
        </Button>
        <Button className="btn-header ">
          <ShoppingCart />
        </Button>
      </div>
    </header>
  );
}
