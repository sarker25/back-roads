import PageLinks from "../PageLinks";
import SocialLinks from "../SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <SocialLinks parentClass="footer-icons" childClass="footer-icon" />
      <p className="copyright">
        copyright &copy; Sarker
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
