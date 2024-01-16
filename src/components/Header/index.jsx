// Header component
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Shambo-Rambo Fullstack Portfolio</h1>
      </Link>
    </header>
  );
}

export default Header;