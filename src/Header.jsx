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

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div id="page-header">
        <div className="page-header-name">
          <span>Adriana Gonzaga</span>
        </div>
        <div className="page-header-ul">
          <ul className="page-header-li">
            <a
              href="#scrollDesigns"
              onClick={(e) => handleSmoothScroll(e, "scrollDesigns")}
            >
              Designs
            </a>

            <a
              href="#scrollResume"
              onClick={(e) => handleSmoothScroll(e, "scrollResume")}
            >
              Resume
            </a>
            <a
              href="#scrollLinkedin"
              onClick={(e) => handleSmoothScroll(e, "scrollLinkedin")}
            >
              LinkedIn
            </a>
          </ul>

          <Button name="Get In Touch" onClick={openEmail} />
        </div>
      </div>
    </>
  );
};

export default Header;
