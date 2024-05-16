import "./Section.css";

const Section = () => {
  return (
    <>
      <div className="section">
        <div className="section-div-education">
          <section className="section-education-description">
            <h1 className="section-title-education">Education</h1>
            <br />
            <br />
            <b>2023 | Coursera Professional Certificate </b>
            <br />- Meta Front-End Developer
            <br />
            <b>2010 - 2013 | State University of Health Sciences of Alagoas</b>
            <br />
            -BSc Biomedical Systems
            <br />
            <b>2023 | Coursera Professional Certificate</b>
            <br />
            -Google UX/UI Design
            <br />
            <b>2023 - Present | LSDM - London School of Design and Marketing</b>
            <br />
            -BA (Hons) Design
            <br />
            <br />
          </section>
        </div>
        <div className="section-div-experience">
          <div className="section-div">
            <div className="section-div-code-skills">
              <h1 className="section-code-title">Coding skills</h1>
              <br />
              <h1 className="section-code-subtitle">Basic Knowledge of:</h1>
              <div className="section-div-description-skills">
                <br />
                <p>HTML</p>
                <br />
                <p>CSS</p>
                <br />
                <p>JavaScript</p>
                <br />
                <p>TypeScript</p>
              </div>
              <br />
              <div className="section-tags">UI / UX</div>
              <br />
              <div className="section-tags">Visual Design</div>
            </div>
          </div>
          <div className="section-experience">
            <h1 className="section-title">Experience</h1>
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
          <h1 className="section-desings-title">Designs</h1>
        </div>
      </div>
    </>
  );
};

export default Section;
