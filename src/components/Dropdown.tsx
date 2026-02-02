import "../styles/dropdown.css";
import { SiGooglesheets } from "react-icons/si";
type DropdownLink = {
  label: string;
  url: string;
};

type DropdownProps = {
  title: string;
  links: DropdownLink[];
};

export default function Dropdown({ title, links }: DropdownProps) {
  const GoogleIcon = SiGooglesheets as React.FC;
  return (
    <li className="dropdown">
      <button className="dropdown-btn">
        <span className="sheetsIcon">
          <GoogleIcon />
        </span>
        {title} ▾
      </button>

      <ul className="dropdown-menu">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
