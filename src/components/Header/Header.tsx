import { navList } from "@/config";
import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [activeNavIndex, setActiveNavIndex] = useState<number>(0);
  return (
    <>
      <ul className="nav">
        <li className="logo">
          <img src="/logo.png" className="logo"></img>
          <span>飞龙的个人网站</span>
        </li>
        {navList.map((item, index) => (
          <li
            key={item.link}
            className={activeNavIndex == index ? "active" : undefined}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Header;
