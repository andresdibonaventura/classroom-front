import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './headerScreen.css'

const Header = () => {

  const navbar = useRef()
const submit = data => {
  navigate("/login")
}
  const clickMenuHam = () => {
    navbar.current.classList.toggle('navbar-open')
  }

  return (
    <header className="header">
      <h1 className="header__title">
      A+BE FAST
      </h1>
      <div >
      </div>
      <nav  className="navbar">
        <ul>
       
        <li className="navbar__items item-hide">
            <NavLink 
                to='prices' 
              >
              {/* <i className="fa-solid fa-user"></i> */}
              <a href="#prices"></a>
              <p className="navbar__label" >Precios</p>
            </NavLink>
          </li>
          <li className="navbar__items hide">
            <NavLink 
                to='/' 
              >
              {/* <i className="fa-solid fa-user"></i> */}
              
              <p className="navbar__label" >Home</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                to='/levels' 
              >
              {/* <i className="fa-solid fa-user"></i> */}
              <p className="navbar__label">Niveles</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                to='/nosotros' 
           >
              {/* <i className="fa-solid fa-store"></i> */}
              <p className="navbar__label">Nosotros</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                 to='/login'
              >
              {/* <i className="fa-solid fa-cart-shopping"></i> */}
              <p className="navbar__label">Login</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
