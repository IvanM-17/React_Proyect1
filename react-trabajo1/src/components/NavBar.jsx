import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setShowMenu(false), 250);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Bienvenido a mi primer tienda</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li
          className="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          >              
          <span className="dropdown-title">Categorías⌄</span>
          {showMenu && (
          <ul
            className="dropdown-menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} >

            <li><Link to="/category/audio">Audio</Link></li>
            <li><Link to="/category/computadoras">Computadoras</Link></li>
            <li><Link to="/category/perifericos">Periféricos</Link></li>
          </ul>
          )}
        </li>   

        <li>
          <Link to="/cart" className="cart-link">🛒</Link>
        </li>

      </ul>
    </nav>
  );
}






   

