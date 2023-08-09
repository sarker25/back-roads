/* eslint-disable react/prop-types */
import { socialLinks } from "../../data";

const SocialLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.link}
            target="_blank"
            className={childClass}
            rel="noreferrer"
            title={link.name}
          >
            <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
