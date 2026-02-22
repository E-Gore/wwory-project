import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <header className="navBar">
      <span className="logo">wwory</span>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}
