import { Link } from "react-router-dom";
import homeIcon from '../assets/homeIcon.svg'

const Navbar = () => {
  return (
    <nav className="bg-primary text-center p-3">
      <Link to="/">
         <img src={homeIcon} alt="Home icon" />
        </Link>      
    </nav>
  );
};

export default Navbar;
