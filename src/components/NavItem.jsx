function NavItem({ icon, text, link }) {
  return (
    <a href={link} className="nav-item">
      <span className="nav-icon">{icon}</span>
      <span className="nav-text">{text}</span>
    </a>
  );
}

export default NavItem;