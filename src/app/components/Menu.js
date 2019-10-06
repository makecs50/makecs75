import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background: linear-gradient(to right, rgba(241,231,103,1) 0%, rgba(254,182,69,1) 100%);
  border-radius: 0 !important;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;


export default function Menu(props) {
  let closeMenuOnClick = () => { };
  if (props.mobileMenu) {
    closeMenuOnClick = () => {
      props.setMobileMenu();
    };
  };

  return (
    <aside className={props.mobileMenu ? "aside grid-column show" : "aside grid-column"} id="aside">
      <div className="aside__inner">

        <div className="logo">
          <svg className="logo__img">
            <use xlinkHref="#logo-js"></use>
          </svg>
        </div>

        <nav className="nav" id="nav">
          <NavLink onClick={closeMenuOnClick} className="nav__link" exact to="/">О курсе</NavLink>
          <NavLink onClick={closeMenuOnClick} className="nav__link" to="/syllabus">Программа</NavLink>
          <NavLink onClick={closeMenuOnClick} className="nav__link" to="/lectures">Лекции</NavLink>
          <NavLink onClick={closeMenuOnClick} className="nav__link" to="/practice">Практика</NavLink>
          <NavLink onClick={closeMenuOnClick} className="nav__link" to="/contacts">Контакты</NavLink>
          <NavLink onClick={closeMenuOnClick} className="nav__link" to="/team">Команда</NavLink>

          <StyledButton
            variant="contained"
          >
            <a target="_blank" href="https://forms.gle/jVidqZP1u6wuSpRY6">Записаться</a>
          </StyledButton>

        </nav>
      </div>
    </aside>
  )
}
