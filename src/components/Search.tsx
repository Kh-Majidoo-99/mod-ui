import React, { useState } from 'react';
import '../styles/Search.css';
import { useNavigate } from 'react-router-dom';

interface SearchProps { }

const Search: React.FC<SearchProps> = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate(`/?q=${encodeURIComponent(query)}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for mods..."
        className="search-input"
      />


    </div>
  );
};

export default Search;
