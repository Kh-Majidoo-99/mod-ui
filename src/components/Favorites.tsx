import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import FeedCard from './FeedCard';
import bannerImage from '../assets/banner.jpg';
import '../styles/Feed.css';

interface FavoritesProps {
    showNsfw?: boolean;
}

const Favorites = ({ showNsfw }: FavoritesProps) => {
    const navigate = useNavigate();
    const { favorites } = useFavorites();

    return (
        <div className="main-container">
            <div className="feed-container">
                <div className="banner-container">
                    <img src={bannerImage} alt="ZZZ Banner" className="feed-banner" />
                </div>
                <div className="breadcrumbs">
                    <span className="breadcrumbs-home" onClick={() => navigate('/')}>Home</span>
                    {' > '}
                    <span className="breadcrumbs-category">Favorites</span>
                </div>
                <h4>My Favorite Mods</h4>
                <div className="feed-list">
                    {favorites.length > 0 ? (
                        favorites.map((item) => (
                            <FeedCard key={item.id} item={item} showNsfw={showNsfw} />
                        ))
                    ) : (
                        <div className="loading-indicator">You haven't added any favorites yet.</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Favorites;
