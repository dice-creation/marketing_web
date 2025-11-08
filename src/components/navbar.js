import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'navbar-link active' : 'navbar-link';
    };

    return (
        <ul>
            <li>
                <Link to="/" className={isActive('/')}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/pricing" className={isActive('/pricing')}>
                    Pricing
                </Link>
            </li>
            <li>
                <Link to="/contact" className={isActive('/contact')}>
                    Contact
                </Link>
            </li>
            <li style={{ float: 'right' }}>
                <Link to="/about" className={isActive('/about')}>
                    About
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;