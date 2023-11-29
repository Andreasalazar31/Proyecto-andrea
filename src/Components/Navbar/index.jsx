// Import NavLink from 'react-router-dom' for navigation links
import { NavLink } from "react-router-dom";

// Import the CSS file for styling
import './index.css';

// Define the NavBar component
export const NavBar = () => {
    // Define a CSS class for the active style of NavLink
    const activeStyle = 'underline underline-offset-4';

    // Render the navigation bar
    return (
        <nav className="flex justify-between items-center z-10 w-full py-1 px-10 text-sm font-light bg-pink-300 text-black top-0">
            {/* Logo */}
            <img className="andrea" src="https://marketplace.canva.com/EAFg-uOorvQ/1/0/1600w/canva-logotipo-boutique-de-ropa-moderno-negro-y-rosa-uoDu8e-9ixg.jpg" alt="Logo" />

            {/* Title */}
            <h1 className="hola">FASHION CLOTHES</h1>

            {/* Navigation Links */}
            <ul className="flex items-center gap-3">
                {/* Home Link */}
                <li>
                    <NavLink to='/Home' className={({ isActive }) => isActive ? activeStyle : undefined }>
                        <h1 className="le">HOME</h1>
                    </NavLink>
                </li>

                {/* Contact Link */}
                <li>
                    <NavLink to='/contacto' className={({ isActive }) => isActive ? activeStyle : undefined }>
                        <h1 className="sa">CONTACT</h1>
                    </NavLink>
                </li>

                {/* Biography Link */}
                <li>
                    <NavLink to='/Biografia' className={({ isActive }) => isActive ? activeStyle : undefined }>
                        <h1 className="fe">BIOGRAPHY</h1>
                    </NavLink>
                </li>

                {/* Search Bar */}
                <a className="search-bar font-medium text-sm hover:text-black">
                    <input className="mundo" type="text" placeholder="Buscar..." />
                    <button className="kp">&nbsp;&nbsp;Buscar</button>
                </a>
            </ul>
        </nav>
    );
}

// Export the NavBar component as the default export
export default NavBar;
