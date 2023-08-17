import React, { forwardRef, InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  parentClassName?: string;
  styles?: string;
  label: string;
  error?: {
    message: string;
  };
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ parentClassName, styles, label, error, ...props }, ref) => {
    return (
      <div className={`h-[80px] ${parentClassName}`}>
        <label htmlFor={props.name} className={`${styles} sr-only`}>
          {label}
        </label>
        <div className='w-full'>
          <input
            ref={ref}
            type={props.type}
            placeholder={props.placeholder}
            className={`w-full ${props.className}`}
            onChange={props.onChange}
            {...props}
          />
          {error && (
            <p className='text-rose-400 text-xs' id={`${props.name}-error`}>
              {error?.message.split(",")[0]}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export default InputField;
