import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import CardProfile from './components/CardProfile'; // Import CardProfile
import Favorites from './components/Favorites';

import Author from './components/Author';
import Sidebar from './components/Sidebar';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  const [showNsfw, setShowNsfw] = useState(false);

  return (
    <FavoritesProvider>
      <div className="app-container">
        <Sidebar showNsfw={showNsfw} onToggleNsfw={() => setShowNsfw(!showNsfw)} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Feed showNsfw={showNsfw} />} />
            <Route path="/mod/:id" element={<CardProfile />} />
            <Route path="/author/:id" element={<Author />} />
            <Route path="/favorites" element={<Favorites showNsfw={showNsfw} />} />
          </Routes>
        </div>
      </div>
    </FavoritesProvider>
  );
}

export default App;
