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
      className={`w-full my-2 h-[45px] rounded-md bg-[#2D719D] py-2 px-3 text-sm font-semibold text-white hover:bg-[#2198e7] ${props.className}`}
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
