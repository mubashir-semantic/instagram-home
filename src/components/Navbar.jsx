import NavItem from "./NavItem";

function Navbar() {
  const menuItems = [
    { id: 1, name: "Home", link: "#" },
    { id: 2, name: "Explore", link: "#" },
    { id: 3, name: "Messages", link: "#" },
    { id: 4, name: "Settings", link: "#" },
  ];

  return (
    <nav className="navbar">
      <img
        src="/instagram-logo.png"
        alt="Instagram Logo"
        className="logo"
      />

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

      <button className="profile-btn">Profile</button>
    </nav>
  );
}

export default Navbar;