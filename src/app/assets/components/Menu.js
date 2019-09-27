import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <aside className="aside grid-column" id="aside">
      <div className="aside__inner">

        <div className="logo">
          <svg className="logo__img">
            <use href="#logo-js"></use>
          </svg>
        </div>

        <nav className="nav" id="nav">
          <NavLink className="nav__link" exact to="/">О курсе</NavLink>
          <NavLink className="nav__link" to="/syllabus">Программа</NavLink>
          <NavLink className="nav__link" to="/lectures">Лекции</NavLink>
          <NavLink className="nav__link" to="/practice">Практика</NavLink>
          <NavLink className="nav__link" to="/contacts">Контакты</NavLink>
          <NavLink className="nav__link" to="/team">Команда</NavLink>
        </nav>
      </div>
    </aside>
  )
}
