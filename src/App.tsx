import { Routes, Route } from 'react-router-dom';
import './App.css';
import Feed from './Feed';
import CardProfile from './CardProfile'; // Import CardProfile

function App() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/mod/:id" element={<CardProfile />} />
    </Routes>
  );
}

export default App;
