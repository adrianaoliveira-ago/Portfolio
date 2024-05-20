import "./Button.css";

const Button = () => {
  return (
    <button className="btn" type="button">
      <strong>LinkedIn</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
};

export default Button;
