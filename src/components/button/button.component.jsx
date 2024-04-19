/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";

import { BaseBtn, GoogleSignInBtn, InvertedBtn } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseBtn,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInBtn,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedBtn,
  }[buttonType]);

function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired, // Children must be a React node
  buttonType: PropTypes.oneOf(["base", "google", "inverted"]), // buttonType must be one of the specified strings
};

export default Button;
