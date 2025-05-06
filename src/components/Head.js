import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

const Head = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/" className="link">
          Новости
        </NavLink>
        <NavLink to="/about" className="link">
          О проекте
        </NavLink>
        <NavLink to="/contacts" className="link">
          Контакты
        </NavLink>
      </nav>
    </header>
  );
};

export default Head;
