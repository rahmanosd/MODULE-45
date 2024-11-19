import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
        <h2>Navbar</h2>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <Link to="/contact">Contact Us</Link>
        </nav>
        </div>
    );
};

export default Header;