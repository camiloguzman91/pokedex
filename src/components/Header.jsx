import React  from 'react';
import Search from './Search';
import './styles/Header.css';

const Header = ({search, searchInput, handleSearch}) => {

  return (
    <div className="Header">
      <img src="https://i.imgur.com/tLC5dWr.png" alt="Pokemon" />
      <div className="search_container">
        <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />
      </div>
      
    </div>
  );
}

export default Header;
