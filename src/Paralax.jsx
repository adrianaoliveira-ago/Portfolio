import "./Paralax.css";
// import waveHeader from "./assets/Wave-header.svg";
// import photoResume from "./assets/photoResume.svg";
import Section from "./Section";
import Button from "./Button";

const openLink = (link) => {
  window.open(link, "_blank");
};

const Paralax = () => {
  return (
    <div className="wrapper">
      {/* parallax */}
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

      {/* rest of the content goes here */}
      <div className="content">
        <section className="content-about-me">
          <p>
            Hello!
            <br />
            I'm Adriana
            <br />
            <br />
            As a recent career changer transitioning into the IT field as a
            UI/UX designer and front-end developer, I am excited to apply my
            fresh perspective and passion for innovation to create exceptional
            digital experiences.
          </p>
          <div className="content-div-mokup">
            <img className="content-mockup" src="mockup.png"></img>

            <Button
              name="LinkedIn"
              onClick={() =>
                openLink(
                  "https://www.linkedin.com/in/adriana-gonzaga-abbb58b4/"
                )
              }
            />
          </div>
          <div className="content-about-me-div">
            <img className="content-about-me-img" src="./photoResume.png" />
          </div>
        </section>

        <Section />
      </div>
    </div>
  );
};

export default Paralax;
