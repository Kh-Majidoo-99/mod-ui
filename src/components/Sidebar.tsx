import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

import Search from './Search';

interface SidebarProps {
    showNsfw: boolean;
    onToggleNsfw: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ showNsfw, onToggleNsfw }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <h3>Search</h3>
                <Search />
            </div>
            <div className="sidebar-section">
                <h3>Filters</h3>
                <div className="filter-item">
                    <label className="toggle-label">
                        <span>Show NSFW</span>
                        <input
                            type="checkbox"
                            checked={showNsfw}
                            onChange={onToggleNsfw}
                            className="toggle-input"
                        />
                        <span className="toggle-slider"></span>
                    </label>
                </div>
            </div>

            <div className="sidebar-section">
                <h3>Categories</h3>
                <ul className="sidebar-links">
                    <li><Link to="/">All Mods</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/?category=characters">Characters</Link></li>
                    <li><Link to="/?category=weapons">Weapons</Link></li>
                    <li><Link to="/?category=ui">UI</Link></li>
                </ul>
            </div>

            <div className="sidebar-section">
                <h3>Resources</h3>
                <ul className="sidebar-links">
                    <li><a href="https://gamebanana.com/games/19567" target="_blank" rel="noopener noreferrer">GameBanana</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Help & FAQ</a></li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
