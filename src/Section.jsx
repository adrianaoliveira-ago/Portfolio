import "./Section.css";

import Button from "./Button";

const openLink = (link) => {
  window.open(link, "_blank");
};

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
                {/* <img className="section-icons" src="./iconPs2.jpg"></img>
                <img className="section-icons" src="./iconId2.jpg"></img>
                <img className="section-icons" src="./iconPr2.jpg"></img>
                <img className="section-icons" src="./iconAi2.jpg"></img>
                <img className="section-icons" src="./iconXd2.jpg"></img>
                <img className="section-icons" src="./iconFigma2.jpg"></img> */}
              </div>
            </div>
          </div>
          <div className="section-experience">
            <div className="section-div-description-experience">
              <h1 className="section-title">Experience</h1>
              <div className="section-experience-content">
                <b> ☆ 2022 - Freelancer</b>
                Consulted with clients, created logos, posters, presentation
                based on their requirements.
                <br />
                <br />
                <b> ☆ 2023 - Design Gráfico</b>
                Criação de logotipos, banners, e material gráfico para websites
                e redes sociais utilizando Adobe Photoshop e Illustrator.
                Desenvolvimento de wireframes e protótipos de alta fidelidade
                com Figma e Adobe XD. Design de interfaces de usuário (UI) com
                foco na experiência do usuário (UX), garantindo usabilidade e
                acessibilidade.
              </div>
            </div>
          </div>
        </div>
        <div className="section-div-language">
          Language
          <div className="section-language-description">
            <br />
            English
            <p>Advanced</p>
            German
            <p>Intermediate</p>
            Portuguese
            <p>native</p>
            <br />
            <br />
          </div>
        </div>
        <div className="section-designs">
          <div id="scrollDesigns">
            <h1 className="section-desings-title">Designs</h1>
          </div>
          <div>
            <div className="section-designs-and-descriptions">
              <img
                className="section-mockup-ipad"
                src="procreateIpad.png"
              ></img>
              <span>
                <span className="section-titles-mockups">Procreate Art</span>
                <br />I started the project by defining the theme and collecting
                visual references. In Procreate, I began with an initial sketch
                in layers, refining shapes and composition. I applied base color
                blocks and added shadows to create depth. Next, I detailed the
                main elements with textures and highlights, using specific
                brushes. The finalization included color and contrast
                adjustments, exporting the art in high resolution to be used in
                the parallax composition process. This process ensured a
                visually impactful and harmonious creation.
              </span>
            </div>
            <div className="section-mockup-makeup-div">
              <span className="section-description-mockup-makeup">
                <span className="section-titles-mockups">
                  BeautyBeat Mobile
                </span>
                <br />
                This mobile prototype was created with the aim of creating a
                makeup community. A creative and colorful app to awaken users'
                creativity and curiosity.
              </span>
              <img
                className="section-mockup-makeup"
                src="mockupMakeUp.png"
              ></img>
            </div>
            <div className="section-div-mockup-quotes">
              <img
                className="section-mockup-quotes-img"
                src="mockupQuotes.png"
              ></img>
              <span className="section-description-mockup-makeup">
                <span className="section-titles-mockups">Quotes Generator</span>
                <br />
                Inspired by motivational daily messages on social media, I
                designed and developed the project in order to put into practice
                my skills as a designer and Front End developer.
                <div className="section-div-button">
                  <Button
                    name="Open project"
                    onClick={() =>
                      openLink("https://quotes-quotes.netlify.app/")
                    }
                  />
                </div>
              </span>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="section-mockup-makeup-quitnic">
              <span className="section-description-mockup-quitnic">
                <span className="section-titles-mockups">Quit Nic Mobile</span>
                <br />
                The prototype was developed based on the idea of helping people
                who are or want to quit smoking. Helping users with various
                methodologies such as meeting alerts, chatting with people with
                the same goal, and breath training. Among other features.
              </span>
              <img
                className="section-mockup-quitnic-img"
                src="mockupQuitNic.png"
              ></img>
            </div>
            <br />
            <br />
            <div className="section-mockup-makeup-closeby">
              <img
                className="section-mockup-closeby-img"
                src="mockupCloseBy.png"
              ></img>
              <span className="section-description-mockup-closeby">
                <span className="section-titles-mockups">
                  Close By - Community Services Mobile
                </span>
                <br />A design prototype based on the idea to help people around
                a neighbourhood to help each other with different activities.
                The App has the goal to make people grow together.
              </span>
            </div>

            <div className="section-mockup-makeup-tasks">
              <span className="section-description-mockup-tasks">
                <span className="section-titles-mockups">ToDoList</span>
                <br />
                ToDoList is a responsive web app for creating daily lists. It
                was designed with the goal to make the process of managing tasks
                more pleasant.
                <div className="section-div-button">
                  <Button
                    name="Open project"
                    onClick={() =>
                      openLink("https://travel-tasks.netlify.app/")
                    }
                  />
                </div>
              </span>
              <img
                className="section-mockup-tasks-img"
                src="mockupTasks.png"
              ></img>
            </div>

            <div className="section-mockup-magazine">
              <img
                className="section-mockup-maganize-img"
                src="mockupMagazine.jpg"
              ></img>
              <br />
              <span className="section-description-mockup-magazine">
                <span className="section-titles-mockups">Cover Maganize</span>
                <br />I created this magazine cover with the intention of
                showcasing the influence of African culture on design. The goal
                is to explore the vibrant colors as well as the rich textures
                derived from this culture.
              </span>
            </div>
            <br />
            <br />
            <div className="section-designs-and-descriptions">
              <span>
                <span className="section-titles-mockups">
                  Milk Packaging Box
                </span>
                <br />I created this milk carton design for a college project
                where we had to develop the entire creation process, including
                font types, illustrations, colors, and all the information
                contained on a milk carton. Additionally, we were tasked with
                developing something innovative, and in my case, it was a plant
                seed to cultivate within the milk carton itself.
              </span>
              <img
                className="section-mockup-milkbox-img"
                src="mockupMilkBox.png"
              ></img>
            </div>
            <div className="section-div-button " id="scrollResume">
              <Button
                name="Download Resume"
                onClick={() => openLink("/resume.pdf")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
