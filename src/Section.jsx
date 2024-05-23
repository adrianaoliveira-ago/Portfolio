import "./Section.css";

// import Button from "./Button";

const Section = () => {
  return (
    <>
      <div className="section">
        <div className="section-div-education">
          <section className="section-education-description">
            <h1 className="section-title-education">Education</h1>
            <br />
            <br />
            <b>✎ 2023 | Coursera Professional Certificate </b>
            <br />- Meta Front-End Developer
            <br />
            <b>
              ✎ 2010 - 2013 | State University of Health Sciences of Alagoas
            </b>
            <br />
            -BSc Biomedical Systems
            <br />
            <b>✎ 2023 | Coursera Professional Certificate</b>
            <br />
            -Google UX/UI Design
            <br />
            <b>
              ✎ 2023 - Present | LSDM - London School of Design and Marketing
            </b>
            <br />
            -BA (Hons) Design
            <br />
            <br />
          </section>
        </div>

        {/* <div>
          <img src="procreateIpad.png"></img>
        </div> */}

        {/* <div>
          <Button name="Portfolio Download" />
        </div> */}
        <div className="section-div-experience">
          <div className="section-div">
            <div className="section-div-code-skills">
              <h1 className="section-code-title">Technical skills</h1>
              <br />
              <h1 className="section-code-subtitle">Coding Skills</h1>
              <div className="section-div-description-skills">
                <span>Basic Knowledge of:</span>
                <br />
                <span>HTML</span>
                <br />
                <span>CSS</span>
                <br />
                <span>JavaScript</span>
                <br />
              </div>
              <br />
              <div className="section-div-tags">
                <div className="section-tags">UI / UX</div>
                <br />
                <div className="section-tags">Visual Design</div>
                <br />
                <div className="section-tags">Design Responsive</div>
              </div>
            </div>
            <div className="section-div-icons">
              <h1 className="section-software-title">Software Skills</h1>
              <div className="section-icons-software">
                <img className="section-icons" src="./iconPs.png"></img>
                <img className="section-icons" src="./iconId.png"></img>
                <img className="section-icons" src="./iconPr.png"></img>
                <img className="section-icons" src="./iconAi.png"></img>
                <img className="section-icons" src="./iconXd.png"></img>
                <img className="section-icons" src="./iconFigma.png"></img>
              </div>
            </div>
          </div>
          <div className="section-experience">
            <div>
              <h1 className="section-title">Experience</h1>
              <div className="section-experience-content">
                <b> ☆ 2023 - Freelancer</b>
                Consulted with clients, created logos, posters, presentation
                based on their requirements.
              </div>
            </div>
          </div>
        </div>
        <div className="section-div-language">
          Language
          <div className="section-language-description">
            <br />
            English
            <p>Intermediate</p>
            German
            <p>Intermediate</p>
            Portuguese
            <p>native</p>
            <br />
            <br />
          </div>
        </div>
        <div className="section-designs">
          <div>
            <h1 className="section-desings-title">Designs</h1>
          </div>
          <div>
            <div>
              <img
                className="section-mockup-ipad"
                src="procreateIpad.png"
              ></img>
            </div>
            {/* <div>
              <img className="section-mockup-ipad" src="mockupIphone.png"></img>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
