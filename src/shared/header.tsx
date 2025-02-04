import { Container } from "@/shared/container";
import "../app/globals.css";
import './header.css'


import Image from "next/image";
import { Search } from "lucide-react";


interface Props{
    className?: string
}
export default function Header() {
  return (
    <header className="header flex">
      <div className="logo-header">
        <Image src="/pizza.svg" width={100} height={100} alt="as" />
        <div className="logo-text">
            <p>NEXT PIZZA</p>
            <p>вкусней уже некуда</p>
        </div>
      </div>
      <span>
        <Search/>
        <input className="header-search h-[50px]" type="text" name="" id="" placeholder="Поиск пиццы..." />
        
      </span>


    </header>
  );
}
