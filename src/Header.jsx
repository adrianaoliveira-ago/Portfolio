import "./Header.css";

import GetInTouchButton from "./assets/GetInTouch-Button.svg";
// import waveHeader from "./assets/Wave-header.svg";

const Header = () => {
  return (
    <>
      <div id="page-header">
        <div className="page-header-name">
          <span>Adriana Gonzaga</span>
        </div>
        <div className="page-header-ul">
          <ul className="page-header-li">
            <li>Work</li>
            <li>Resume</li>
            <li>Work</li>
            {/* <li>Get in touch</li> */}
          </ul>
          <img src={GetInTouchButton} className="page-header-button" />
          {/* <div className="page-header-wave">
            <img src={waveHeader} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
