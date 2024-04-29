import "./Section.css";

const Section = () => {
  return (
    <>
      <div className="section">
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
        <div className="section-div-experience">
          <div className="section-div"></div>
          <div className="section-photo"></div>
        </div>
      </div>
    </>
  );
};

export default Section;
