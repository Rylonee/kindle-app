import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav style={{ textAlign: 'left'}}>
            <h2>What would you like to do?</h2>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                <li><Link to="/favbook">My Favorite Book</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation