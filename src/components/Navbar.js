import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../nav.css'; 
import Search from './Search';
import Sort from './Sort';
import Filter from "./Filter";
import '../cart.css';
const Navbar = ({ toggleSidebar, changeTheme, setSearch, sort, setSort, toggleCart, cartItems ,filter,setFilter}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md fixed w-full top-0 left-0 z-50 flex items-center justify-between">
      {/* Sidebar Toggle Button */}
      <button
        className="flex items-center mx-3 fixed lg:left-14 max-sm:left-1 z-50"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 10h19M6 14h12 6h1M6 6h12"
          />
        </svg>
      </button>

      {/* Logo and Navigation Links */}
      <div className='flex justify-between '>
        <div className="text-xl flex items-center lg:pl-32 max-sm:pl-12 md:pl-16 font-bold">
          <i className="fa-solid fa-shop lg:text-2xl" />
          <Link to="/" className="hover:text-gray-400 lg:text-xl max-sm:text-xs mx-2">E-Shop</Link>
        </div>
      </div>
      <div className="flex items-center">
        <form className="search-bar flex lg:pl-14 max-sm:pl-5 items-center">
          <Search setSearch={setSearch} />
          <button className="search">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </div>
      <div className="flex items-center space-x-4 hidden lg:flex gap-4 lg:pr-9  ">
        <Sort sort={sort} setSort={setSort} />
        <Filter filter={filter} setFilter={setFilter}/>
        <button className="btn" id="cartButton" type="button" onClick={toggleCart}>
          <span className="cart-popup">{cartItems.length}</span>
          <i className="fa-solid fa-cart-shopping" />
        </button>
        <label className="switch flex items-center">
          <input type="checkbox" role="button" onClick={changeTheme} />
          <span className="slider" />
        </label>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-800 pt-4 text-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300  lg:hidden z-40`}>
        <div className="p-4 flex flex-col space-y-4 relative">
          {/* Close Button */}
          <button
            className="absolute top-[-3px] left-4  text-white text-4xl"
            onClick={handleMenuToggle}
          >
            &times;
          </button>
          {/* Mobile Menu Items */}
          <button className="btn" id="cartButton" type="button"onClick={toggleCart}>
            <span className="cart-popup">{cartItems.length}</span>
            <i className="fa-solid fa-cart-shopping" />
          </button>
          <Sort sort={sort} setSort={setSort} />
        <Filter filter={filter} setFilter={setFilter}/>
          <label className="switch flex items-center">
            <input type="checkbox" role="button" onClick={changeTheme} />
            <span className="slider" />
          </label>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="flex items-center mx-3 ml-4 lg:hidden"
        onClick={handleMenuToggle}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
