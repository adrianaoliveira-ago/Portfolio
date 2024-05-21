import "./Header.css";

// import GetInTouchButton from "./assets/GetInTouch-Button.svg";
// import waveHeader from "./assets/Wave-header.svg";

import Button from "./Button";

const Header = () => {
  const openEmail = () => {
    const email = "adrianaoliveira.ago@gmail.com";
    window.location.href = `mailto:${email}}`;
    console.log(email);
  };

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
          </ul>
          <Button name="Get In Touch" onClick={openEmail} />
        </div>
      </div>
    </>
  );
};

export default Header;
