import NavItem from "./NavItem";
import { FiUser, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Navbar({ menuItems }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };
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
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 rounded-lg px-3 my-3 py-3 hover:bg-[#d72c7a] hover:text-white"
      >
        <FiLogOut className="nav-icon" />
        Logout
      </button>

      <button className="profile-btn">
        <FiUser className="nav-icon" />
        Profile
      </button>
    </nav>
  );
}

export default Navbar;
