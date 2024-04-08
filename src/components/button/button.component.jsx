import PropTypes from "prop-types";
import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // Children must be a React node
  buttonType: PropTypes.oneOf(["google", "inverted"]), // buttonType must be one of the specified strings
};

export default Button;
