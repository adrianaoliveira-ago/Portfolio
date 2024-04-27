import "./Paralax.css";

// import waveHeader from "./assets/Wave-header.svg";

const Paralax = () => {
  return (
    <div className="wrapper">
      {/* <div className="page-header-wave">
        <img src={waveHeader} />
      </div> */}
      <header>
        <img
          className="background"
          //   src="https://cdn.imgpaste.net/2022/10/10/Kem93m.png"
          src="./background.jpg"
          // src="./girlBackground.jpg"
        />
        <img className="backgroundTreeImage" src="./backgroundTree.png" />
        <img
          className="foreground"
          //   src="https://cdn.imgpaste.net/2022/10/10/KemO9N.png"
          src="./girl.png"
        />
        <h1 className="title">Welcome!</h1>
      </header>
      <div className="paralax-section">
        <div className="paralax-div-section">
          <div className="paralax-text-section">
            <section className="paralax-text-description">
              Hello!
              <br />
              I'm Adriana
              <br />
              As a recent career changer transitioning into the IT field as a
              UI/UX designer and front-end developer, I am excited to apply my
              fresh perspective and passion for innovation to create exceptional
              digital experiences
            </section>
          </div>
        </div>
      </div>
      <div className="paralax-experience"></div>
    </div>
  );
};

export default Paralax;
