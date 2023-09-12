import "./Nav.scss";

import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";


const NavBar = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="container">
        <div className="nav-container">
          <input
            className="search-input"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Enter your search shoes."
          />
        </div>
        <div className="profile-container">
          <Link to="#">
            <FiHeart className="nav-icons" />
          </Link>
          <Link to="">
            <AiOutlineShoppingCart className="nav-icons" />
          </Link>
          <Link to="">
            <AiOutlineUserAdd className="nav-icons" />
          </Link>
        </div>
      </div>
      
    </nav>
  )
}

export default NavBar