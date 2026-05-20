import { useState } from 'react';
import nsfwPlaceholder from '../assets/images/July_2024_Calendar_Wallpaper_29.jpeg';
import type { FeedItem } from '../types';
import { Link } from 'react-router-dom';
import '../styles/Card.css';
import { useFavorites } from '../context/FavoritesContext';

interface FeedCardProps {
  item: FeedItem;
  showNsfw?: boolean;
}

const FeedCard = ({ item, showNsfw }: FeedCardProps) => {
  const [showImage, setShowImage] = useState(item._sInitialVisibility === 'hide' ? false : true);
  const { toggleFavorite, isFavorite } = useFavorites();

  const isVisible = showNsfw || showImage;
  const favorited = isFavorite(item.id);

  const handleLinkClick = (e: React.MouseEvent) => {
    if (!isVisible && item._sInitialVisibility === 'hide') {
      e.preventDefault(); // Prevent navigation
      setShowImage(true);
    }
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(item);
  };

  return (
    <Link
      key={item.id}
      to={`/mod/${item.id}`}
      className="feed-card"
      onClick={handleLinkClick}
    >
      <div className="card-image-container">
        {item.imageUrl && isVisible && <img src={item.imageUrl} alt={item.title} className="feed-image" />}
        {item.imageUrl && !isVisible && item._sInitialVisibility === 'hide' && (
          <img src={nsfwPlaceholder} alt="Hidden Content" className="feed-image" />
        )}
        <button
          className={`favorite-btn ${favorited ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          title={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            viewBox="0 0 24 24"
            fill={favorited ? "#ffd700" : "none"}
            stroke={favorited ? "#ffd700" : "white"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: 'block' }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      </div>
      <h4 style={{ margin: 0, padding: '8px 12px' }}>{item.title}</h4>
    </Link>
  );
};

export default FeedCard;