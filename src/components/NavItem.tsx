interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

function NavItem({ icon, text, link }: NavItemProps) {
  return (
    <a href={link} className="nav-item">
      <span className="nav-icon">{icon}</span>
      <span className="nav-text">{text}</span>
    </a>
  );
}

export default NavItem;