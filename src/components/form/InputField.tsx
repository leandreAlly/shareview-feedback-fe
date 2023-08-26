import React, { forwardRef, Ref } from "react";

interface InputFieldProps {
  parentClassName?: string;
  styles?: string;
  label?: string;
  type: string;
  placeholder: string;
  className: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  name: string;
}

const InputField = forwardRef(
  (
    {
      parentClassName,
      styles,
      label,
      type,
      placeholder,
      className,
      onChange,
      error,
      name,
      ...props
    }: InputFieldProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <div className={`h-[80px] ${parentClassName}`}>
        <label htmlFor={name} className={`${styles} sr-only`}>
          {label}
        </label>
        <div className='w-full'>
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`w-full ${className}`}
            onChange={onChange}
            {...props}
          />
          {error && (
            <p className='text-rose-400 text-xs' id={`${name}-error`}>
              {error?.split(",")[0]}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export default InputField;
