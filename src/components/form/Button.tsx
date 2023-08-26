import React, { ButtonHTMLAttributes } from "react";
import PropTypes from "prop-types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  parentClassName?: string;
  label?: string;
}

const Button = ({ parentClassName, label = "", ...props }: ButtonProps) => (
  <div className={parentClassName}>
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${props.className}`}
      role={props.role}
    >
      {label} {props.children}
    </button>
  </div>
);

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "",
  onClick: () => {},
};

export default Button;
