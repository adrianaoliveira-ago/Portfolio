import "./Footer.css";

import footerWave from "./assets/footerWave.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wave">
        <img src={footerWave}></img>
      </div>
    </div>
  );
};

export default Footer;
