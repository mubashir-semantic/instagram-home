import NavItem from "./NavItem";
import { FiUser } from "react-icons/fi";

function Navbar({ menuItems }) {
  return (
    <nav className="navbar">
      <img src="/instagram-logo.png" alt="Instagram Logo" className="logo" />

      <div className="nav-links">
        {menuItems.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            text={item.name}
            link={item.link}
          />
        ))}
      </div>

      <button className="profile-btn">
        <FiUser className="nav-icon" />
        Profile
      </button>
    </nav>
  );
}

export default Navbar;
