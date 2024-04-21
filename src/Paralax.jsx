import "./Paralax.css";

const Paralax = () => {
  return (
    <div className="wrapper">
      <header>
        <img
          className="background"
          //   src="https://cdn.imgpaste.net/2022/10/10/Kem93m.png"
          //   src="./girlBackground.png"
          src="./girlBackground.png"
        />
        <img
          className="foreground"
          //   src="https://cdn.imgpaste.net/2022/10/10/KemO9N.png"
          src="./girl.png"
        />
        <h1 className="title">Welcome!</h1>
      </header>
      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis
        unde illo neque at hic quisquam, nulla consectetur, itaque maxime sit
        iusto aliquam culpa reiciendis eaque recusandae vitae modi, animi
        expedita perferendis inventore. Culpa incidunt odit dicta quibusdam
        ullam facilis eum magnam, consectetur voluptates praesentium, pariatur
        eos nihil! Natus in, autem aut facere repellat eveniet commodi illo
      </section>
    </div>
  );
};

export default Paralax;
