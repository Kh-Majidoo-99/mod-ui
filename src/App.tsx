import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import CardProfile from './components/CardProfile'; // Import CardProfile

import Author from './components/Author';
import Sidebar from './components/Sidebar';

function App() {
  const [showNsfw, setShowNsfw] = useState(false);

  return (
    <div className="app-container">
      <Sidebar showNsfw={showNsfw} onToggleNsfw={() => setShowNsfw(!showNsfw)} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Feed showNsfw={showNsfw} />} />
          <Route path="/mod/:id" element={<CardProfile />} />
          <Route path="/author/:id" element={<Author />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
