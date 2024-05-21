import "./Button.css";

import PropTypes from "prop-types";

const Button = ({ name, onClick }) => {
  return (
    <button className="btn" type="button" onClick={onClick}>
      <strong>{name}</strong>

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
Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
