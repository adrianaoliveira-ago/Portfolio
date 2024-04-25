import "./Footer.css";

import footerWave from "./assets/footerWave.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wave"></div>
      <div>
        <img src={footerWave}></img>
      </div>
    </div>
  );
};

export default Footer;
