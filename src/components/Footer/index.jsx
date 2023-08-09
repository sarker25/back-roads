import { pageLinks, socialLinks } from "../../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((page) => (
          <li key={page.id}>
            <a href={page.link} className="footer-link">
              {page.title}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              target="_blank"
              className="footer-icon"
              rel="noreferrer"
            >
              <i className={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Sarker
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
